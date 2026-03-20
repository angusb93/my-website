"use client";

import { useEffect, useRef, useState } from "react";
import HeadScene from "@/components/HeadScene";

const BLUR_SCROLL_DIVISOR = 100;
const MAX_BLUR_PX = 5;
const DARKNESS_SCROLL_DIVISOR = 200;
const MAX_DARKNESS_OPACITY = 0.7;

export default function Home() {
  const [blur, setBlur] = useState(0);
  const [darkness, setDarkness] = useState(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setBlur(Math.min(scrollY / BLUR_SCROLL_DIVISOR, MAX_BLUR_PX));
          setDarkness(
            Math.min(scrollY / DARKNESS_SCROLL_DIVISOR, MAX_DARKNESS_OPACITY),
          );
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen w-screen relative">
      {/* Fixed 3D head background with dynamic blur and darkness */}
      <div
        className="fixed inset-0 w-screen h-screen"
        style={{
          filter: `blur(${blur}px)`,
          transition: "filter 0.3s ease",
        }}
      >
        <HeadScene mouseRef={mouseRef} />
      </div>
      <div
        className="fixed inset-0 w-screen h-screen pointer-events-none"
        style={{
          backgroundColor: `rgba(0,0,0,${darkness})`,
          transition: "background-color 0.3s ease",
        }}
      />
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
          </section>
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
          </section>
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
          </section>
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
          </section>
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
          </section>
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
