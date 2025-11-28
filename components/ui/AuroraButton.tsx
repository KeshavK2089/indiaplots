"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AuroraButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function AuroraButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
}: AuroraButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-aurora-green to-aurora-blue text-white",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 text-gray-900",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-full font-medium",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-aurora-blue/50",
        sizeClasses[size],
        variantClasses[variant],
        variant === "primary" && "hover:shadow-lg hover:shadow-aurora-blue/30",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-pink opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />
      )}
    </motion.button>
  );
}