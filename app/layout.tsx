import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteSpark | Create & Host Your Website Instantly",
  description: "Transform your business details into a professional website in seconds with SiteSpark. No-code, instant hosting, and custom domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="container header-inner">
            <Link href="/" className="logo">
              <img src="/logo.png" alt="SiteSpark" className="logo-img" />
              <span>SiteSpark</span>
            </Link>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link href="#features" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Features</Link>
              <Link href="/builder" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Start Building</Link>
              <Link href="/login" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Login</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <div className="container" style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            <div style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} SiteSpark. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
