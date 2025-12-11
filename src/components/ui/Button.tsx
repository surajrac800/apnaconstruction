import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-gradient-to-r from-orange-600 to-amber-500 text-white hover:from-orange-700 hover:to-amber-600",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-50",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

