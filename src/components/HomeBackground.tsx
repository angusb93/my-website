"use client";

import { useEffect, useRef, useState } from "react";
import HeadScene from "@/components/HeadScene";

const BLUR_SCROLL_DIVISOR = 100;
const MAX_BLUR_PX = 5;
const DARKNESS_SCROLL_DIVISOR = 200;
const MAX_DARKNESS_OPACITY = 0.7;

/**
 * Fixed 3D background with scroll-driven blur/darkness and mouse-tracking.
 * @param onLoaded - Called once the 3D scene has finished loading.
 */
export default function HomeBackground({
  onLoaded,
}: {
  onLoaded?: () => void;
}) {
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
    <>
      <div
        className="fixed inset-0 w-screen h-screen"
        style={{ filter: `blur(${blur}px)`, transition: "filter 0.3s ease" }}
      >
        <HeadScene mouseRef={mouseRef} onLoaded={onLoaded} />
      </div>
      <div
        className="fixed inset-0 w-screen h-screen pointer-events-none"
        style={{
          backgroundColor: `rgba(0,0,0,${darkness})`,
          transition: "background-color 0.3s ease",
        }}
      />
    </>
  );
}
