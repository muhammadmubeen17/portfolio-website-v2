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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
      <body className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
