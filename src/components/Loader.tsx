"use client";

import { cn } from "@/utils/cn";

/**
 * Full-screen spinner overlay. Instantly hidden when the reveal fires so the
 * cut to the head model is hard rather than a fade.
 * @param loaded - When true, the overlay is removed from view immediately.
 */
export function Loader({ loaded }: { loaded: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
        { hidden: loaded },
      )}
    >
      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
    </div>
  );
}
