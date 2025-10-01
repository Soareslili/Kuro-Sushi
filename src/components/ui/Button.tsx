import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", onClick }) => {
  const baseStyles =
    "px-6 py-2 rounded-lg font-inter transition duration-300 ease-in-out";

  const variants: Record<"primary" | "secondary", string> = {
    primary:
      "bg-[#C7A569] text-black cursor-pointer hover:bg-opacity-80 transform hover:-translate-y-1",
    secondary:
      "border border-[#C7A569] bg-[#0c0f12] text-[#E5E7EB] cursor-pointer hover:bg-[#C7A569] hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;

