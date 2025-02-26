// page.tsx

import HeadScene from "@/components/HeadScene";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      {/* Container for 3D scene and overlay */}
      <div className="relative w-full h-screen">
        {/* 3D Scene (behind) */}
        <HeadScene />

        {/* Overlay content (in front) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="flex w-3/4 justify-between font-bold text-8xl text-white">
            <div>ANGUS</div>
            <div>BUICK</div>
          </div>
        </div>
      </div>

      {/* Scrollable content below */}
      <section className="p-8 text-white">
        <h2 className="text-2xl mb-4">My Next.js Site</h2>
        <p>More content goes here...</p>
      </section>
    </main>
  );
}
