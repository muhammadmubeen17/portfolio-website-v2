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
  metadataBase: new URL("https://www.mubeendev.site"),
  title: "Muhammad Mubeen Ahmad — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN & LAMP stacks. Building modern web applications that exceed expectations.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "LAMP Stack",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "TypeScript",
    "Muhammad Mubeen Ahmad",
  ],
  authors: [{ name: "Muhammad Mubeen Ahmad", url: "https://www.mubeendev.site" }],
  creator: "Muhammad Mubeen Ahmad",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico", "/favicon_io/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Muhammad Mubeen Ahmad — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN & LAMP stacks. Building modern web applications that exceed expectations.",
    url: "https://www.mubeendev.site",
    siteName: "Muhammad Mubeen Ahmad Portfolio",
    images: [
      {
        url: "/OG_IMAGE.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Mubeen Ahmad — Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mubeen Ahmad — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN & LAMP stacks. Building modern web applications that exceed expectations.",
    images: ["/OG_IMAGE.png"],
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
