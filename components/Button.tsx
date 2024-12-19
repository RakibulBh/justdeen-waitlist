import React from "react";

// bg-gradient-to-br from-[#44008b] to-[#9f45b0]

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
      {children}
    </button>
  );
};

export default Button;
