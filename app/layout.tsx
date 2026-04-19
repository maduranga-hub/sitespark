import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: "SiteSpark | Crafting the Future of Digital Experiences",
  description: "High-end digital agency specializing in SaaS ecosystems, web development, and premium graphic design.",
  keywords: ["web design", "SaaS development", "graphic design", "digital agency", "SiteSpark"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-inter bg-black text-white antialiased`}>
        <header className="nav-glass">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-electric-blue rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,112,243,0.5)] transition-shadow">
              <span className="font-sora font-black text-white text-xl">S</span>
            </div>
            <span className="font-sora font-bold text-xl tracking-tighter">SiteSpark</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Services</Link>
            <Link href="#work" className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Showcase</Link>
            <Link href="mailto:info@sitespark.online" className="btn-pill btn-primary py-2 text-[10px]">
              Let's Talk
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="py-20 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="font-sora font-black text-3xl mb-8 tracking-tighter">SiteSpark.</div>
            <div className="flex gap-8 mb-8 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="mailto:info@sitespark.online" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-[10px] font-black text-white/10 tracking-[0.2em] uppercase">
              &copy; {new Date().getFullYear()} SiteSpark Digital. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
