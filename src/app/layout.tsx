import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Mubeen Ahmad — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN & LAMP stacks. Building modern web applications that exceed expectations.",
  keywords: ["Full Stack Developer", "MERN Stack", "LAMP Stack", "React", "Next.js", "Laravel", "Node.js"],
  authors: [{ name: "Muhammad Mubeen Ahmad" }],
  openGraph: {
    title: "Muhammad Mubeen Ahmad — Full Stack Developer",
    description: "Full Stack Developer specializing in MERN & LAMP stacks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#080b12] text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
