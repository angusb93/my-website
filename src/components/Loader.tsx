"use client";

import { cn } from "@/utils/cn";

const DOT_ANIMATION = "dotBounce 1.2s ease-in-out infinite";

export function Loader({ loaded }: { loaded: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
        { hidden: loaded },
      )}
    >
      <div className="flex gap-3 items-center">
        <div
          className="w-4 h-4 rounded-full bg-white"
          style={{ animation: DOT_ANIMATION }}
        />
        <div
          className="w-4 h-4 rounded-full bg-white"
          style={{ animation: DOT_ANIMATION, animationDelay: "0.2s" }}
        />
        <div
          className="w-4 h-4 rounded-full bg-white"
          style={{ animation: DOT_ANIMATION, animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}
