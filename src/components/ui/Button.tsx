import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center rounded-xl font-inter transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6",
  lg: "h-12 px-8 text-lg",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C7A569] text-black hover:opacity-90 hover:-translate-y-0.5",
  secondary:
    "border border-[#D4AF37] bg-[#0c0f12] text-[#E5E7EB] hover:bg-[#D4AF37] hover:text-black hover:-translate-y-0.5",
  ghost: "bg-transparent text-foreground hover:bg-white/10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props} 
      />
    );
  }
);
Button.displayName = "Button";

export default Button;

