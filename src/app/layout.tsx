import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psalms of Nate",
  description: "Original psalm-inspired music, scores, MIDI, MP3s, and projects."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
