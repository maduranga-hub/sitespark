'use client';

import { useEffect, useState, useRef } from 'react';
import { 
  Sparkles, 
  Zap, 
  Globe, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MousePointer2, 
  UserPlus, 
  Grid, 
  Edit3, 
  Rocket,
  Shield,
  Monitor,
  Check,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main style={{ paddingTop: '90px' }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0 10rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="animate-hero">
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                background: 'rgba(0, 102, 255, 0.08)', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '100px', 
                fontSize: '0.85rem', 
                fontWeight: 800, 
                color: 'var(--primary)', 
                marginBottom: '1.5rem',
                border: '1px solid rgba(0, 102, 255, 0.1)'
              }}>
                <Sparkles size={14} /> NEW: MULTI-INDUSTRY ENGINE v2.0
              </div>
              
              <h1 className="hero-title">
                Ignite Your <span className="text-gradient">Professional</span> Presence.
              </h1>
              
              <p style={{ 
                fontSize: '1.25rem', 
                color: 'var(--text-muted)', 
                maxWidth: '600px', 
                marginBottom: '2.5rem',
                lineHeight: 1.6
              }}>
                The world's fastest multi-industry website builder. From Salons to Software Agencies—get a premium website deployed in minutes, not months.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/signup" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Start Your Ignition <ArrowRight size={20} />
                </Link>
                <Link href="/builder" className="btn btn-glass" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Try Free Builder
                </Link>
              </div>

              <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', opacity: 0.6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Shield size={16} /> Secure Verification
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Zap size={16} /> Instant Ignition
                </div>
              </div>
            </div>

            <div className="animate-hero" style={{ position: 'relative', animationDelay: '0.2s' }}>
              <div className="float-img" style={{ position: 'relative', zIndex: 1 }}>
                <img 
                  src="/hero-main.png" 
                  alt="SiteSpark Builder" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '24px', 
                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.15)',
                    border: '1px solid var(--glass-border)'
                  }} 
                />
              </div>
              {/* Decorative elements */}
              <div style={{ 
                position: 'absolute', 
                top: '-5%', 
                left: '-5%', 
                width: '110%', 
                height: '110%', 
                background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)', 
                zIndex: 0,
                opacity: 0.5
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-subtle)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.5 }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Powering ambitious businesses worldwide</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem', opacity: 0.6 }}>
            {['ELITE SALONS', 'TECH FORGE', 'CAFE BLISS', 'CREW LOGISTICS', 'GLAMOUR INC'].map((brand, i) => (
              <span key={brand} style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="guide" style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>From DNA to <span className="text-gradient">Ignition</span>.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>A seamless four-step journey to your professional online presence.</p>
          </div>

          <div className="grid-2" style={{ gap: '6rem', alignItems: 'center' }}>
            <div className="reveal">
              <img 
                src="/showcase-collage.png" 
                alt="Showcase" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
            <div className="reveal">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {[
                  { step: '01', title: 'Initialize Workspace', desc: 'Secure your professional SiteSpark dashboard with a single click.' },
                  { step: '02', title: 'Select Industry Engine', desc: 'Choose from our curated forge of 10+ industry-specific theme architectures.' },
                  { step: '03', title: 'Input Business Data', desc: 'Fill in your details and watch as our engine synthesizes your site in real-time.' },
                  { step: '04', title: 'Global Launch', desc: 'Deploy instantly to a optimized subdomain or connect your custom domain.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.3 }}>{item.step}</div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: '10rem 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>The <span className="text-gradient">Ignition</span> Advantage.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Engineered for performance, speed, and business growth.</p>
          </div>

          <div className="grid-3">
            {[
              { icon: Zap, title: "Speed Ignition", desc: "Static-generation logic ensures your site loads under 1 second, globally." },
              { icon: Globe, title: "Custom Warp", desc: "Connect your .online, .com, or any domain with our simple DNS integration." },
              { icon: Layout, title: "Industry DNA", desc: "Themes built with industry-specific components like menus, galleries, and forms." },
              { icon: ShieldCheck, title: "Elite Security", desc: "Enterprise-grade protection with automated SSL for every ignited site." },
              { icon: Monitor, title: "Universal Viewer", desc: "Your site looks pixel-perfect on every device, from phone to desktop." },
              { icon: Edit3, title: "Live Synthesis", desc: "Edit your business details at any time and see updates instantly." }
            ].map((feature, i) => (
              <div key={i} className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div style={{ width: '48px', height: '48px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                  <feature.icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Select Your <span className="text-gradient">Engine</span>.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Flexible configurations for every stage of your business ignition.</p>
          </div>

          <div className="grid-3">
            {/* Free Ignition */}
            <div className="glass-card reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', opacity: 0.8, marginBottom: '1rem' }}>Free Trial</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 950 }}>Rs. 0</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>/7 days</span>
                </div>
              </div>

              <div style={{ flex: 1, marginBottom: '3rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'All Builder Features',
                    'Universal Theme Access',
                    'SiteSpark Subdomain',
                    'Standard Performance'
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.95rem' }}>
                      <Check size={18} color="var(--primary)" /> {item}
                    </li>
                  ))}
                  <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.95rem', opacity: 0.4 }}>
                    <Check size={18} /> Custom Domain
                  </li>
                </ul>
              </div>

              <Link href="/signup" className="btn btn-glass" style={{ width: '100%' }}>
                Start Trial
              </Link>
            </div>

            {/* Pro Engine */}
            <div className="glass-card reveal reveal-delay-2" style={{ 
              border: '2px solid var(--primary)', 
              boxShadow: '0 30px 60px -10px rgba(0, 102, 255, 0.15)',
              transform: 'scale(1.05)',
              zIndex: 2,
              display: 'flex', 
              flexDirection: 'column',
              background: 'white'
            }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em' }}>RECOMMENDED</div>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '1rem' }}>Pro Ignition</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: 950 }}>Rs. 490</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>/mo</span>
                </div>
              </div>

              <div style={{ flex: 1, marginBottom: '3rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Custom Domain Support',
                    'Pro Webmail (250MB)',
                    'Remove SiteSpark Branding',
                    'Priority Engine Access',
                    'Advanced Analytics Node'
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.95rem', fontWeight: 600 }}>
                      <Check size={18} color="var(--primary)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/signup" className="btn btn-primary" style={{ width: '100%' }}>
                Ignite Pro Engine
              </Link>
            </div>

            {/* Business */}
            <div className="glass-card reveal reveal-delay-3" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', opacity: 0.8, marginBottom: '1rem' }}>Bespoke</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 950 }}>Contact</span>
                </div>
              </div>

              <div style={{ flex: 1, marginBottom: '3rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    '1-on-1 Design Forge',
                    'Custom Functionality',
                    'White-glove Deployment',
                    'Unlimited Data Storage',
                    'Dedicated Launch Team'
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.95rem' }}>
                      <Check size={18} color="var(--primary)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn btn-glass" style={{ width: '100%' }}>
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '12rem 0', position: 'relative' }}>
        <div className="container">
          <div className="reveal" style={{ 
            background: 'linear-gradient(135deg, #0066FF 0%, #6366f1 100%)', 
            borderRadius: '32px', 
            padding: '6rem 4rem', 
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 50px 100px -20px rgba(0, 102, 255, 0.4)'
          }}>
            <h2 style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>Ready to <span style={{ opacity: 0.8 }}>Ignite</span>?</h2>
            <p style={{ fontSize: '1.4rem', marginBottom: '3.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3.5rem' }}>Join 500+ businesses that trust SiteSpark power for their professional presence.</p>
            <Link href="/signup" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1.2rem 4rem', fontSize: '1.2rem' }}>
              Ignite Your Business Now <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ padding: '6rem 0', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="grid-4" style={{ marginBottom: '4rem' }}>
            <div>
              <div className="logo" style={{ marginBottom: '1.5rem' }}>
                <img src="/logo.png" alt="Logo" className="logo-img" />
                <span>SiteSpark</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>The world's premium multi-industry ignition engine for modern web presence.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Platform</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                <li><Link href="/builder">Site Builder</Link></li>
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} SiteSpark Ignition Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
