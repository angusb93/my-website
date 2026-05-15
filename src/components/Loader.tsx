"use client";

import { cn } from "@/utils/cn";

/**
 * Full-screen spinner overlay that fades out once assets have loaded.
 * @param loaded - When true, the spinner fades to invisible.
 */
export function Loader({ loaded }: { loaded: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-700",
        { "opacity-0": loaded },
      )}
    >
      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
    </div>
  );
}
