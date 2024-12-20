import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-[#9f45b0] to-[#e54ed0] text-white text-xs">
      {children}
    </button>
  );
};

export default Button;
