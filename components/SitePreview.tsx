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
          <h1 style={{ fontSize: isMinimal ? '2rem' : '2.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1rem' }}>{details.heroTitle || 'Your Vision Ignited'}</h1>
          <p style={{ opacity: 0.7, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>{details.heroDescription || 'Transforming your business through excellence.'}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <span className="btn btn-primary">Our Solutions</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" style={{ background: isMinimal ? 'var(--site-bg)' : theme.muted }}>
        <div className="site-container" style={{ textAlign: isMinimal ? 'center' : 'left' }}>
          <div className="grid">
            <div>
              <div style={{ color: 'var(--site-primary)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>About Our Company</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>{details.about.experience || 'Decades of Professional Service'}</h2>
              <p style={{ opacity: 0.8, lineHeight: 1.6, maxWidth: isMinimal ? '600px' : 'none', margin: isMinimal ? '0 auto' : '0' }}>{details.about.profile || 'Your dedicated partner in growth and excellence.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: isMinimal ? 'var(--site-muted)' : 'var(--site-bg)' }}>
        <div className="site-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Expertise</h2>
          <div className="grid" style={{ gridTemplateColumns: isMinimal ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', maxWidth: isMinimal ? '600px' : 'none', margin: '0 auto' }}>
            {details.sections.map((section: any, idx: number) => (
              <div key={section.id || idx} className="card" style={{ display: isMinimal ? 'flex' : 'block', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ flexShrink: 0 }}>
                  {idx % 3 === 0 ? <Sparkles size={24} color={formData.primaryColor || theme.primary} /> : idx % 3 === 1 ? <Wrench size={24} color={formData.primaryColor || theme.primary} /> : <Zap size={24} color={formData.primaryColor || theme.primary} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem' }}>{section.title}</h3>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" style={{ background: theme.text, color: '#fff' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Connect With Us</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            {details.contact.instagram && <Instagram size={24} />}
          </div>

          {formData.paypalEmail && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ background: '#ffc439', color: '#111', fontWeight: 800, padding: '0.6rem 1.5rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
                <ShoppingCart size={16} /> Support (Mock)
              </div>
            </div>
          )}

          <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>&copy; 2026 {formData.businessName}. Ignited by SiteSpark.</p>
        </div>
      </section>
    </div>
  );
}
