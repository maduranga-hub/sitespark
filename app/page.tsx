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
  User,
  Mail,
  Lock,
  Scissors,
  ShoppingCart,
  Hammer,
  Settings,
  Home,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <main style={{ background: 'transparent' }}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{ 
          padding: '10rem 0 14rem', 
          textAlign: 'center', 
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
          perspective: '2000px'
        }}
      >
        {/* Parallax Background Icons */}
        <Sparkles className="float-icon" size={48} style={{ top: '10%', left: '8%', transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`, transition: 'transform 0.1s ease-out' }} />
        <Zap className="float-icon" size={32} style={{ top: '25%', right: '12%', transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)`, transition: 'transform 0.1s ease-out' }} />
        <Globe className="float-icon" size={24} style={{ bottom: '25%', left: '15%', transform: `translate(${mousePos.x * -1.4}px, ${mousePos.y * -1.4}px)`, transition: 'transform 0.1s ease-out' }} />

        <div className="container animate-hero" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            background: 'rgba(0, 102, 255, 0.12)', 
            padding: '0.6rem 1.4rem', 
            borderRadius: '100px', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            color: 'var(--primary)', 
            marginBottom: '2.5rem',
            border: '1px solid rgba(0, 102, 255, 0.25)',
            boxShadow: '0 0 35px rgba(0, 102, 255, 0.15)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <Sparkles size={16} /> THE UNIVERSAL IGNITION ENGINE v2.0
          </div>
          
          <h1 style={{ 
            fontSize: '5.8rem', 
            fontWeight: 950, 
            lineHeight: 1, 
            marginBottom: '1.25rem',
            letterSpacing: '-0.05em',
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            Ignite Your <span className="text-gradient">Business</span> <br /> 
            Online in Seconds.
          </h1>
          
          <p style={{ 
            fontSize: '1.45rem', 
            color: 'var(--text-muted)', 
            maxWidth: '800px', 
            margin: '0 auto 4rem',
            lineHeight: 1.6,
            opacity: 0.9,
            transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`,
          }}>
            The ultra-fast, multi-industry website builder. 
            From Salons to Software Agencies—ignite your professional presence with <b>SiteSpark</b> power.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '8rem' }}>
            <Link href="/signup" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.15rem' }}>
              Start Your Ignition <ArrowRight size={22} />
            </Link>
            <Link href="/builder" className="btn btn-glass" style={{ padding: '1.2rem 3.5rem', fontSize: '1.15rem' }}>
              Launch Builder
            </Link>
          </div>

          {/* THE INTERACTIVE 3D DASHBOARD MOCKUP - REFINED V2.0 */}
          <div style={{ 
            position: 'relative',
            width: '1000px',
            height: '550px',
            margin: '0 auto',
            transform: `rotateX(${mousePos.y * -0.3}deg) rotateY(${mousePos.x * 0.3}deg) translateZ(50px)`,
            transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            transformStyle: 'preserve-3d'
          }}>
            {/* Background Layer (Mockup Window) */}
            <div className="glass-card" style={{ 
              position: 'absolute',
              inset: 0,
              background: 'rgba(10, 10, 12, 0.95)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 60px 120px rgba(0,0,0,0.6)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Fake Window Controls */}
              <div style={{ padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <div style={{ width: '12px', height: '12px', background: '#ff5f56', borderRadius: '50%' }} />
                  <div style={{ width: '12px', height: '12px', background: '#ffbd2e', borderRadius: '50%' }} />
                  <div style={{ width: '12px', height: '12px', background: '#27c93f', borderRadius: '50%' }} />
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.4, fontWeight: 700 }}>SITESPARK COMMAND CENTER</div>
              </div>
              
              {/* Mockup Dashboard Content */}
              <div style={{ flex: 1, padding: '2rem', textAlign: 'left', display: 'flex', gap: '2.5rem' }}>
                {/* Sidebar Mockup */}
                <div style={{ width: '180px', borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'rgba(0,102,255,0.1)', borderRadius: '10px', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                    <Home size={18} /> <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Overview</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', opacity: 0.4, marginBottom: '1rem' }}>
                    <Globe size={18} /> <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>My Sites</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', opacity: 0.4, marginBottom: '1rem' }}>
                    <BarChart3 size={18} /> <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Analytics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', opacity: 0.4 }}>
                    <Settings size={18} /> <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Setting</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>Site <span className="text-gradient">Igniter</span></div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, background: 'rgba(34, 197, 94, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '100px' }}>SYSTEM READY</div>
                  </div>

                  {/* Builder Progress Mockup */}
                  <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', opacity: 0.6 }}>
                      <span>STEP 3: BUSINESS DNA</span>
                      <span>85% COMPLETE</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', marginBottom: '2.5rem' }}>
                      <div style={{ height: '100%', background: 'linear-gradient(to right, var(--primary), var(--secondary))', width: '85%' }} />
                    </div>

                    <div className="grid-2" style={{ gap: '1.5rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.25rem' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 800, opacity: 0.4, marginBottom: '0.5rem' }}>BUSINESS NAME</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Elite Salon Lanka</div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.25rem' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 800, opacity: 0.4, marginBottom: '0.5rem' }}>INDUSTRY CATEGORY</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>Hair & Beauty Salon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Card (Smarter User Registration) */}
            <div className="glass-card" style={{ 
              position: 'absolute', top: '-8%', right: '-8%', width: '350px', padding: '2.5rem',
              background: 'rgba(15, 15, 20, 0.95)', border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '24px', transform: `translateZ(120px) rotateY(${mousePos.x * -0.5}deg)`,
              boxShadow: '0 40px 80px rgba(0,0,0,0.6)'
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Initialize Ignition</div>
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                  <User size={14} style={{ position: 'absolute', left: '1rem', top: '1.1rem', opacity: 0.4 }} />
                  <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem 1rem 1rem 2.8rem', fontSize: '0.8rem' }}>James Wilson</div>
                </div>
                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                   <Mail size={14} style={{ position: 'absolute', left: '1rem', top: '1.1rem', opacity: 0.4 }} />
                  <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem 1rem 1rem 2.8rem', fontSize: '0.8rem' }}>james@example.com</div>
                </div>
                <div style={{ width: '100%', background: 'var(--primary)', padding: '1rem', borderRadius: '12px', textAlign: 'center', fontSize: '0.8rem', fontWeight: 800 }}>Create Workspace</div>
              </div>
            </div>

            {/* Floating Bottom Card (Real-time Site Launch) */}
            <div className="glass-card" style={{ 
              position: 'absolute', bottom: '-8%', left: '-8%', width: '350px', padding: '2.5rem',
              background: 'rgba(15, 15, 20, 0.95)', border: '1px solid var(--primary)',
              borderRadius: '24px', transform: `translateZ(180px) rotateY(${mousePos.x * 0.5}deg)`,
              boxShadow: '0 40px 100px rgba(0,102,255,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket size={24} color="#fff" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, fontSize: '1rem' }}>Ignition Successful!</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>salon-lanka.sitespark.io</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', opacity: 0.6 }}>
                <Scissors size={18} /> <ShoppingCart size={18} /> <Hammer size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Background Glow */}
        <div className="hero-glow" style={{ 
          position: 'absolute', top: '50%', left: '50%', 
          transform: `translate(calc(-50% + ${mousePos.x * 2.5}px), calc(-50% + ${mousePos.y * 2.5}px))`, 
          width: '1300px', height: '1000px', 
          background: 'radial-gradient(circle, var(--primary-glow), transparent 70%)', 
          filter: 'blur(130px)', opacity: 0.28, zIndex: 0, transition: 'transform 0.4s ease-out'
        }} />
      </section>

      {/* Rest of the sections (Guide, Features, CTA)... remain same */}
      <section id="guide" style={{ padding: '10rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>The <span className="text-gradient">Ignition</span> Journey</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Your professional website, forged in four precise stages.</p>
          </div>

          <div className="grid-4" style={{ position: 'relative' }}>
            <div className="glass-card reveal reveal-delay-1" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
              <div style={{ width: '72px', height: '72px', background: 'var(--primary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff', boxShadow: '0 15px 30px var(--primary-glow)' }}>
                <UserPlus size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Secure Access</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Initialize your account and unlock the SiteSpark dashboard.</p>
            </div>

            <div className="glass-card reveal reveal-delay-2" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
              <div style={{ width: '72px', height: '72px', background: 'var(--secondary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff', boxShadow: '0 15px 30px rgba(99, 102, 241, 0.4)' }}>
                <Grid size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Identity Node</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Choose from 10+ industry-specific theme engines.</p>
            </div>

            <div className="glass-card reveal reveal-delay-3" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
              <div style={{ width: '72px', height: '72px', background: 'var(--primary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff', boxShadow: '0 15px 30px var(--primary-glow)' }}>
                <Edit3 size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Data Synthesis</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Input your business DNA into our 7-step builder forge.</p>
            </div>

            <div className="glass-card reveal reveal-delay-4" style={{ textAlign: 'center', padding: '3.5rem 2rem', border: '1px solid var(--primary)', background: 'rgba(0, 102, 255, 0.03)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff', boxShadow: '0 15px 35px var(--primary-glow)' }}>
                <Rocket size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Launch</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Instantly deploy to your live subdomain and dominate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>Engineered for <span className="text-gradient">Scale</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Unmatched performance, security, and industry focus.</p>
          </div>

          <div className="grid-3">
            {[
              { icon: Zap, title: "Speed Ignition", desc: "Proprietary static-generation logic for blazing fast page loads globally." },
              { icon: Globe, title: "Custom Warp", desc: "Connect your custom domain seamlessly to our edge nodes." },
              { icon: Layout, title: "Universal Forge", desc: "10+ Pre-programmed industry themes with specific visual DNA." },
              { icon: ShieldCheck, title: "Ironclad Security", desc: "Enterprise-grade encryption protecting your data and your users." },
              { icon: MousePointer2, title: "Mission Control", desc: "Full-spectrum admin dashboard for site and license management." },
              { icon: CheckCircle2, title: "Prime Optimization", desc: "Built-in SEO and metadata synthesis for maximum visibility." }
            ].map((feature, i) => (
              <div key={i} className={`glass-card card-hover section reveal reveal-delay-${(i % 3) + 1}`} style={{ padding: '3rem' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.8rem' }}>
                  <feature.icon size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '10rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>Select Your <span className="text-gradient">Engine</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Flexible plans built to scale with your business ignition.</p>
          </div>

          <div className="grid-3">
            {/* Free Ignition */}
            <div className="glass-card reveal reveal-delay-1" style={{ padding: '4rem 2.5rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', opacity: 0.8 }}>Free Ignition</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900 }}>Rs. 0</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>/7 days</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>Perfect for starting your journey.</p>
              </div>

              <div style={{ flex: 1, marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>All Builder Features</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Universal Theme Engine</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>SiteSpark Subdomain</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', opacity: 0.3, fontSize: '0.9rem' }}>
                  <Globe size={18} /> <span>Custom Domain Support</span>
                </div>
              </div>

              <Link href="/signup" className="btn btn-glass" style={{ width: '100%', textAlign: 'center' }}>
                Start Trial
              </Link>
            </div>

            {/* Pro Engine */}
            <div className="glass-card reveal reveal-delay-2" style={{ 
              padding: '4rem 2.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              border: '2px solid var(--primary)', 
              background: 'rgba(0, 102, 255, 0.03)',
              transform: 'scale(1.05)',
              zIndex: 1
            }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em' }}>MOST POPULAR</div>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary)' }}>Pro Engine</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: 950 }}>Rs. 490</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>/mo</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>Complete professional toolkit.</p>
              </div>

              <div style={{ flex: 1, marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Everything in Free</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span><b>Custom Domain Support</b></span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span><b>250MB Webmail Access</b></span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Remove SiteSpark Branding</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Priority Ignition Support</span>
                </div>
              </div>

              <Link href="/signup" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Ignite Pro
              </Link>
            </div>

            {/* Custom Ignition */}
            <div className="glass-card reveal reveal-delay-3" style={{ padding: '4rem 2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', opacity: 0.8 }}>Custom Ignition</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900 }}>Contact Us</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>For non-template, bespoke websites.</p>
              </div>

              <div style={{ flex: 1, marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Bespoke 1-of-1 Design</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Advanced Backend Logic</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Dedicated Development Team</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> <span>Full Lifetime Support</span>
                </div>
              </div>

              <Link href="/contact" className="btn btn-glass" style={{ width: '100%', textAlign: 'center' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '12rem 0' }}>
        <div className="container">
          <div className="glass-card glow-card reveal" style={{ 
            padding: '6rem 4rem', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.04), rgba(99, 102, 241, 0.04))',
            border: '1px solid var(--glass-border)'
          }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Ignite Your Future <span className="text-gradient">Today</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3.5rem', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
              Join the evolution of business creation. Build, host, and grow with SiteSpark.
            </p>
            <Link href="/signup" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem' }}>
              Start for Free <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
