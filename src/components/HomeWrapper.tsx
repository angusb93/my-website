"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import HomeBackground from "@/components/HomeBackground";
import { Loader } from "@/components/Loader";
import { cn } from "@/utils/cn";

const STORAGE_KEY = "introduced";

/**
 * Client wrapper that owns the `revealed` state. On first visit the state
 * fires after the head spring animation settles; on return visits within the
 * same session it is true immediately, skipping the intro entirely.
 * @param children - Pre-rendered CMS content to display beneath the hero.
 */
export function HomeWrapper({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setRevealed(true);
    }
  }, []);

  const handleReveal = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setRevealed(true);
  }, []);

  return (
    <>
      <Loader loaded={revealed} />
      <HomeBackground onReveal={handleReveal} revealed={revealed} />
      <div>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex w-3/4 justify-between font-thin text-6xl text-white">
            <span
              className={cn("transition-all duration-700 ease-out", {
                "opacity-0 translate-y-4": !revealed,
                "opacity-100 translate-y-0": revealed,
              })}
            >
              Angus
            </span>
            <span
              className={cn("transition-all duration-700 ease-out delay-150", {
                "opacity-0 translate-y-4": !revealed,
                "opacity-100 translate-y-0": revealed,
              })}
            >
              Buick
            </span>
          </div>
        </div>
        <div className="relative p-8">
          <div
            className={cn("transition-all duration-700 ease-out delay-300", {
              "opacity-0 translate-y-4": !revealed,
              "opacity-100 translate-y-0": revealed,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
