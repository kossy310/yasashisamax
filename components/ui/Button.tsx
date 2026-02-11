"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "line";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-pastel-pink text-text-primary hover:bg-opacity-80",
  secondary: "bg-pastel-blue text-text-primary hover:bg-opacity-80",
  ghost: "bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-ivory",
  line: "bg-[#06C755] text-white hover:bg-[#05B04C]",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-all duration-300";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        {...motionProps}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
