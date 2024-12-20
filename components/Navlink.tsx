"use client";
import Link from "next/link";

const Navlink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className="text-gray-400 text-md">
      {text}
    </Link>
  );
};

export default Navlink;
