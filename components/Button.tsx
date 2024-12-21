import React from "react";

const Button = ({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className="px-4 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-[#9f45b0] to-[#e54ed0] text-white text-xs"
    >
      {children}
    </button>
  );
};

export default Button;
