import React from "react";
import Logo from "./Logo";
import Navlink from "./Navlink";
import { navLinks } from "@/Constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="rounded-full w-[1000px] h-16 bg-white border border-gray-300 shadow-md py-3 px-8 justify-between flex items-center absolute z-99 top-12 left-56">
      <Logo>MYDEEN</Logo>
      <div className="space-x-8">
        {navLinks.map((link, index) => (
          <Navlink key={index} href={link.toLowerCase()} text={link} />
        ))}
      </div>
      <Button>Join Waitlist</Button>
    </nav>
  );
};

export default Navbar;
