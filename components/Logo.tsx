import React from "react";

const Logo = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-2xl text-black capitalize">{children}</h1>
  );
};

export default Logo;
