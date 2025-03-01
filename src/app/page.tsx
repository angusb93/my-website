"use client";

import { useEffect, useState } from "react";
import HeadScene from "@/components/HeadScene";

export default function Home() {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Increase blur up to a maximum of 5px for every 100px scrolled.
          const newBlur = Math.min(scrollY / 100, 5);
          setBlur(newBlur);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-screen relative">
      {/* Fixed 3D head background with dynamic blur */}
      <div
        className="fixed inset-0 w-screen h-screen "
        style={{
          filter: `blur(${blur}px)`,
          transition: "filter 0.3s ease",
        }}
      >
        <HeadScene />
      </div>
      {/* Scrollable content below */}
      <div>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex w-3/4 justify-between font-thin text-6xl text-white">
            <div>Angus</div>
            <div>Buick</div>
          </div>
        </div>
        <div className="relative ">
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>{" "}
          <section className="p-8 text-white">
            <h2 className="text-2xl mb-4">My Next.js Site</h2>
            <p>More content goes here...</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
