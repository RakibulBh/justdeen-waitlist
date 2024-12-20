"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Navlink from "./Navlink";
import { navLinks } from "@/Constants";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo>MYDEEN</Logo>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Navlink key={index} href={link.link} text={link.name} />
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button>Join Waitlist</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/80 backdrop-blur-lg md:hidden">
          <div className="pt-20 pb-6 px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 py-2 text-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
