import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saransh Singhal — Mobile Engineer",
  description:
    "Mobile App Developer specializing in Swift, Flutter, and React Native. Building real-world apps with a focus on performance and user experience.",
  keywords: ["mobile developer", "iOS engineer", "Flutter", "Swift", "SwiftUI", "React Native"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
