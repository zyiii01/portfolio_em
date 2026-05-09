import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Zion Joy B. Barlongo – Web Developer",
    template: "%s | Zion Joy B. Barlongo",
  },
  description:
    "Portfolio and internship activity log of Zion Joy B. Barlongo — a web developer focused on clean code, SEO, and performant UI.",
  keywords: ["web developer", "portfolio", "Next.js", "Tailwind CSS", "internship"],
  authors: [{ name: "Zion Joy B. Barlongo" }],
  openGraph: {
    type: "website",
    title: "Zion Joy B. Barlongo – Web Developer",
    description: "Portfolio and internship activity log.",
    siteName: "ZJB Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-breathe min-h-screen flex flex-col">
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="fixed top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
          style={{
            background: "#C84771",
            filter: "blur(90px)",
            opacity: 0.18,
          }}
        />
        <div
          aria-hidden="true"
          className="fixed bottom-[20%] left-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
          style={{
            background: "#61105E",
            filter: "blur(90px)",
            opacity: 0.22,
          }}
        />

        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
