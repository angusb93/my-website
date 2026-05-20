import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angus' website",
  description: "My personal website",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <p className="fixed bottom-0 left-0 right-0 z-50 py-3 text-center text-lg text-white">
          Site is under a large update. Watch this space for something new and
          exciting!
        </p>
      </body>
    </html>
  );
}
