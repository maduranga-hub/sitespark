'use client';

import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MessageCircle,
  Wrench,
  Monitor,
  Sparkles,
  ChevronRight,
  Scissors,
  ShoppingBag,
  Hammer,
  BookOpen,
  Briefcase,
  Star,
  Activity,
  Award,
  Users,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Music,
  ShoppingCart
} from 'lucide-react';

const THEMES: Record<string, any> = {
  cleaning: { primary: '#0066FF', secondary: '#10b981', bg: '#ffffff', text: '#0f172a', muted: '#f8fafc', icon: Sparkles },
  technical: { primary: '#f97316', secondary: '#334155', bg: '#ffffff', text: '#0f172a', muted: '#f1f5f9', icon: Wrench },
  it: { primary: '#8b5cf6', secondary: '#06b6d4', bg: '#0f172a', text: '#f8fafc', muted: '#1e293b', icon: Monitor },
  salon: { primary: '#db2777', secondary: '#d4af37', bg: '#fff5f7', text: '#500724', muted: '#fdf2f8', icon: Scissors },
  grocery: { primary: '#16a34a', secondary: '#facc15', bg: '#ffffff', text: '#14532d', muted: '#f0fdf4', icon: ShoppingBag },
  hardware: { primary: '#dc2626', secondary: '#4b5563', bg: '#ffffff', text: '#111827', muted: '#f9fafb', icon: Hammer },
  electrical: { primary: '#2563eb', secondary: '#fbbf24', bg: '#ffffff', text: '#1e3a8a', muted: '#eff6ff', icon: Zap },
  bookshop: { primary: '#92400e', secondary: '#78350f', bg: '#fdf8f4', text: '#451a03', muted: '#fffbeb', icon: BookOpen },
  agency: { primary: '#000000', secondary: '#ff00ff', bg: '#ffffff', text: '#000000', muted: '#f3f4f6', icon: Briefcase },
  other: { primary: '#475569', secondary: '#64748b', bg: '#ffffff', text: '#0f172a', muted: '#f8fafc', icon: Activity }
};

const FONT_FAMILIES: Record<string, string> = {
  sans: "'Inter', sans-serif",
  serif: "'Playfair Display', serif",
  mono: "'Roboto Mono', monospace",
  display: "'Outfit', sans-serif"
};

const FONT_LINKS: Record<string, string> = {
  sans: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap',
  serif: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap',
  mono: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap',
  display: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&display=swap'
};

export default function SitePreview({ formData }: { formData: any }) {
  const category = formData.category || 'other';
  const theme = THEMES[category] || THEMES.other;
  const ThemeIcon = theme.icon;

  const details = {
    category,
    logoUrl: formData.logoUrl,
    heroTitle: formData.heroTitle,
    heroDescription: formData.heroDescription,
    whyChooseUs: formData.whyChooseUs || [],
    about: {
      profile: formData.aboutProfile,
      experience: formData.experienceYears,
      team: formData.teamMembers
    },
    services: {
      cleaning: formData.serviceCleaning,
      technical: formData.serviceTechnical,
      it: formData.serviceIT
    },
    sections: formData.sections || [],
    portfolio: {
      gallery: formData.portfolioGallery ? formData.portfolioGallery.split(',').filter((s: string) => s.trim()) : [],
      logos: formData.clientLogos ? formData.clientLogos.split(',').filter((s: string) => s.trim()) : []
    },
    resources: {
      tips: formData.dailyTips || []
    },
    contact: {
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      facebook: formData.facebook,
      instagram: formData.instagram,
      linkedin: formData.linkedin,
      tiktok: formData.tiktok,
      address: formData.address,
      mapUrl: formData.mapEmbedUrl
    }
  };

  const isMinimal = formData.template === 'minimal';

  return (
    <div className={`site-preview theme-${category} template-${formData.template}`} style={{ 
      '--site-primary': formData.primaryColor || theme.primary,
      '--site-secondary': formData.secondaryColor || theme.secondary,
      '--site-text': theme.text,
      '--site-bg': theme.bg,
      '--site-muted': theme.muted,
      '--site-border': 'rgba(0,0,0,0.1)',
      fontFamily: FONT_FAMILIES[formData.fontFamily] || FONT_FAMILIES.sans,
      color: 'var(--site-text)',
      background: 'var(--site-bg)',
      height: '100%',
      overflowY: 'auto'
    } as any}>
      <style dangerouslySetInnerHTML={{ __html: `
        .site-preview * { box-sizing: border-box; }
        .site-preview .site-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .site-preview .section { padding: ${isMinimal ? '3rem 0' : '4rem 0'}; }
        .site-preview .grid { display: grid; gap: 1.5rem; }
        .site-preview .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; text-decoration: none; border: none; font-size: 0.9rem; }
        .site-preview .btn-primary { background: var(--site-primary); color: #fff; }
        .site-preview .btn-outline { border: 1px solid var(--site-border); background: transparent; color: var(--site-text); }
        .site-preview .hero { padding: ${isMinimal ? '4rem 0' : '6rem 0'}; background: ${isMinimal ? 'var(--site-bg)' : 'radial-gradient(circle at top right, var(--site-muted), var(--site-bg))'}; text-align: center; border-bottom: ${isMinimal ? '1px solid var(--site-border)' : 'none'}; }
        .site-preview .card { padding: 1.5rem; border-radius: 12px; border: 1px solid var(--site-border); background: ${category === 'it' || isMinimal ? 'rgba(255,255,255,0.05)' : '#fff'}; }
        .site-preview .logo-img { height: 32px; }
        ${formData.animationsEnabled ? `
          .site-preview .section { animation: reveal 0.8s ease-out forwards; }
          @keyframes reveal {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        ` : ''}
      `}} />
      <link rel="stylesheet" href={FONT_LINKS[formData.fontFamily] || FONT_LINKS.sans} />

      {/* Header */}
      <header style={{ padding: '1rem 0', borderBottom: '1px solid var(--site-border)', background: theme.bg, position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="site-container" style={{ display: 'flex', justifyContent: isMinimal ? 'center' : 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {details.logoUrl && <img src={details.logoUrl} alt="Logo" className="logo-img" />}
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{formData.businessName || 'Business Name'}</div>
          </div>
          {!isMinimal && (
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }}>
              <span>Home</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="site-container">
          <h1 style={{ fontSize: isMinimal ? '2rem' : '3rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {details.heroTitle || 'Ignite Your Professional Presence'}
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            {details.heroDescription || 'The fastest way to launch your business online with premium industry-specific themes.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <span className="btn btn-primary">Get Started <ArrowRight size={18} /></span>
            {!isMinimal && <span className="btn btn-outline">Learn More</span>}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {details.whyChooseUs.length > 0 && (
        <section className="section" style={{ background: 'var(--site-bg)', borderBottom: '1px solid var(--site-border)' }}>
          <div className="site-container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Why Choose <span style={{ color: 'var(--site-primary)' }}>Us</span></h2>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {details.whyChooseUs.map((point: string, i: number) => (point.trim() && (
                <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.6rem', background: 'var(--site-muted)', borderRadius: '10px', color: 'var(--site-primary)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}>{point}</div>
                </div>
              )))}
            </div>
          </div>
        </section>
      )}

      {/* About */}
      <section className="section" style={{ background: isMinimal ? 'var(--site-bg)' : theme.muted }}>
        <div className="site-container">
          <div className="grid" style={{ gridTemplateColumns: isMinimal ? '1fr' : '1.2fr 1fr', alignItems: 'center', gap: '4rem' }}>
            <div style={{ textAlign: isMinimal ? 'center' : 'left' }}>
              <div style={{ color: 'var(--site-primary)', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Our Legacy</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                {details.about.experience || 'Industry Leading Expertise'}
              </h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: 1.7, marginBottom: '2rem', maxWidth: isMinimal ? '700px' : 'none', margin: isMinimal ? '0 auto 2rem' : '0 0 2rem' }}>
                {details.about.profile || 'Dedicated to providing world-class solutions for our clients. Our team is committed to excellence in every project we undertake.'}
              </p>
              {details.about.team && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <Users size={18} color="var(--site-primary)" /> {details.about.team}
                </div>
              )}
            </div>
            {!isMinimal && (
              <div style={{ background: 'var(--site-bg)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--site-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--site-primary)', marginBottom: '0.5rem' }}>100%</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>Satisfaction Guarantee</div>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>We stand by our work and ensure that every client receives the highest level of professional care.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: isMinimal ? 'var(--site-muted)' : 'var(--site-bg)' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900 }}>Our <span className="text-gradient">Specializations</span></h2>
            <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>Expert solutions tailored for your specific business needs.</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: isMinimal ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {details.sections.map((section: any, idx: number) => (
              <div key={section.id || idx} className="card" style={{ transition: '0.3s' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: isMinimal ? 'center' : 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--site-muted)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--site-primary)' }}>
                    {idx % 3 === 0 ? <Sparkles size={24} /> : idx % 3 === 1 ? <Wrench size={24} /> : <Zap size={24} />}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', textAlign: isMinimal ? 'center' : 'left' }}>{section.title}</h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.6, textAlign: isMinimal ? 'center' : 'left' }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      {details.portfolio.gallery.length > 0 && (
        <section className="section" style={{ background: 'var(--site-bg)' }}>
          <div className="site-container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900 }}>Our <span style={{ color: 'var(--site-primary)' }}>Gallery</span></h2>
              <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>Visual showcase of our professional work and results.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {details.portfolio.gallery.map((url: string, i: number) => (
                <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', height: '240px', border: '1px solid var(--site-border)' }}>
                  <img src={url} alt={`Gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Logos / Trust */}
      {details.portfolio.logos.length > 0 && (
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--site-border)', borderBottom: '1px solid var(--site-border)', background: 'var(--site-muted)' }}>
          <div className="site-container">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', opacity: 0.6 }}>
              {details.portfolio.logos.map((url: string, i: number) => (
                <img key={i} src={url} alt={`Client ${i}`} style={{ height: '40px', maxWidth: '120px', objectFit: 'contain', filter: 'grayscale(1)' }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Daily Tips / Resources */}
      {details.resources.tips.length > 0 && (
        <section className="section" style={{ background: 'var(--site-bg)' }}>
          <div className="site-container">
            <div className="card" style={{ background: 'var(--site-primary)', color: 'white', padding: '3rem', borderRadius: '32px', textAlign: 'center' }}>
              <Award size={32} style={{ margin: '0 auto 1.5rem' }} />
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Expert Insights</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                {details.resources.tips.map((tip: string, i: number) => (tip.trim() && (
                  <div key={i} style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>
                    "{tip}"
                  </div>
                )))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact & Map */}
      <section className="section" id="contact" style={{ background: '#0f172a', color: '#fff' }}>
        <div className="site-container">
          <div className="grid" style={{ gridTemplateColumns: isMinimal ? '1fr' : '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>Let's <span style={{ color: 'var(--site-primary)' }}>Connect</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {details.contact.phone && (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={18} /></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 800 }}>PHONE</div>
                      <div style={{ fontWeight: 700 }}>{details.contact.phone}</div>
                    </div>
                  </div>
                )}
                {details.contact.email && (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={18} /></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 800 }}>EMAIL</div>
                      <div style={{ fontWeight: 700 }}>{details.contact.email}</div>
                    </div>
                  </div>
                )}
                {details.contact.address && (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={18} /></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 800 }}>ADDRESS</div>
                      <div style={{ fontWeight: 700 }}>{details.contact.address}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                {details.contact.facebook && <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><Facebook size={20} /></div>}
                {details.contact.instagram && <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><Instagram size={20} /></div>}
                {details.contact.whatsapp && <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><MessageCircle size={20} /></div>}
                {details.contact.linkedin && <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><Linkedin size={20} /></div>}
                {details.contact.tiktok && <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><Music size={20} /></div>}
              </div>
            </div>
            
            {details.contact.mapUrl && (
              <div style={{ borderRadius: '24px', overflow: 'hidden', height: '350px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <iframe 
                  src={details.contact.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                />
              </div>
            )}
          </div>

          <div style={{ marginTop: '6rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            {formData.paypalEmail && (
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ background: '#ffc439', color: '#111', fontWeight: 900, padding: '0.8rem 2rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <ShoppingCart size={18} /> Secure Checkout Supported
                </div>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontWeight: 900, fontSize: '1.2rem', marginBottom: '1rem' }}>
              {details.logoUrl && <img src={details.logoUrl} style={{ height: '30px' }} alt="Logo" />}
              {formData.businessName || 'Business Name'}
            </div>
            <p style={{ opacity: 0.3, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em' }}>
              &copy; 2026 {formData.businessName || 'SiteSpark'}. ALL RIGHTS RESERVED. 
              <br />POWERED BY SITESPARK IGNITION ENGINE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
