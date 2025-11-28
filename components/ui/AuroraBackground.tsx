"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden bg-white", className)}>
      {/* Aurora Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Green blob */}
        <div
          className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-float rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #00C805 0%, transparent 70%)" }}
        />
        {/* Blue blob */}
        <div
          className="animation-delay-2000 absolute -right-40 top-1/4 h-[600px] w-[600px] animate-float rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #006AFF 0%, transparent 70%)" }}
        />
        {/* Pink blob */}
        <div
          className="animation-delay-4000 absolute -bottom-40 left-1/3 h-[500px] w-[500px] animate-float rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF9F9F 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}