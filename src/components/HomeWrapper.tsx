"use client";

import Link from "next/link";
import { useState } from "react";
import HomeBackground from "@/components/HomeBackground";
import { Loader } from "@/components/Loader";
import type { Article } from "@/payload-types";
import { cn } from "@/utils/cn";

/**
 * Client wrapper that owns the `loaded` state and drives entrance animations for
 * the page text once the 3D scene has finished loading.
 * @param article - Optional latest article to display as a card beneath the hero.
 */
export function HomeWrapper({ article }: { article: Article | null }) {
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
        {article && (
          <div className="relative p-8">
            <div
              className={cn("transition-all duration-700 ease-out delay-300", {
                "opacity-0 translate-y-4": !loaded,
                "opacity-100 translate-y-0": loaded,
              })}
            >
              <Link
                href={`/articles/${article.slug.replace(/^\/+/, "")}`}
                className="group block max-w-sm rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/40">
                  Latest
                </p>
                <h2 className="mb-2 text-xl font-light text-white group-hover:text-white/90">
                  {article.title}
                </h2>
                {article.excerpt && (
                  <p className="text-sm text-white/50">{article.excerpt}</p>
                )}
                <span className="mt-4 block text-sm text-white/30 group-hover:text-white/60 transition">
                  Read →
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
