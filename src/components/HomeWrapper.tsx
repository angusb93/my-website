"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import HomeBackground from "@/components/HomeBackground";
import { Loader } from "@/components/Loader";
import { cn } from "@/utils/cn";

/**
 * Client wrapper that owns the `loaded` state and drives entrance animations for
 * the page text once the 3D scene has finished loading.
 * @param children - Pre-rendered CMS content to display beneath the hero.
 */
export function HomeWrapper({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader loaded={loaded} />
      <HomeBackground onLoaded={() => setLoaded(true)} />
      <div>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex w-3/4 justify-between font-thin text-6xl text-white">
            <span
              className={cn("transition-all duration-700 ease-out", {
                "opacity-0 translate-y-4": !loaded,
                "opacity-100 translate-y-0": loaded,
              })}
            >
              Angus
            </span>
            <span
              className={cn("transition-all duration-700 ease-out delay-150", {
                "opacity-0 translate-y-4": !loaded,
                "opacity-100 translate-y-0": loaded,
              })}
            >
              Buick
            </span>
          </div>
        </div>
        <div className="relative p-8">
          <div
            className={cn("transition-all duration-700 ease-out delay-300", {
              "opacity-0 translate-y-4": !loaded,
              "opacity-100 translate-y-0": loaded,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
