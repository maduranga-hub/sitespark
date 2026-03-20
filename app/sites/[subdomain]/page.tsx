import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
import ContactForm from '@/components/ContactForm';

interface SiteData {
  name: string;
  details: {
    businessName: string;
    category: string;
    is_active?: boolean;
    expires_at?: string;
    logoUrl?: string;
    heroTitle: string;
    heroDescription: string;
    whyChooseUs: string[];
    about: {
      profile: string;
      experience: string;
      team: string;
    };
    services: {
      cleaning: string;
      technical: string;
      it: string;
    };
    sections?: {
      id: string;
      title: string;
      content: string;
      type?: string;
    }[];
    seo?: {
      title?: string;
      description?: string;
      keywords?: string;
    };
    theme?: {
      primary?: string;
      secondary?: string;
      fontFamily?: string;
      animationsEnabled?: boolean;
    };
    analytics?: {
      gaId?: string;
      fbPixelId?: string;
    };
    payment?: {
      paypalEmail?: string;
    };
    faviconUrl?: string;
    portfolio: {
      gallery: string[];
      logos: string[];
    };
    resources: {
      tips: string[];
    };
    contact: {
      email: string;
      phone: string;
      whatsapp: string;
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      tiktok?: string;
      address: string;
      mapUrl: string;
    };
  };
}

const THEMES: Record<string, any> = {
  cleaning: {
    primary: '#0066FF',
    secondary: '#10b981',
    bg: '#ffffff',
    text: '#0f172a',
    muted: '#f8fafc',
    icon: Sparkles
  },
  technical: {
    primary: '#f97316',
    secondary: '#334155',
    bg: '#ffffff',
    text: '#0f172a',
    muted: '#f1f5f9',
    icon: Wrench
  },
  it: {
    primary: '#8b5cf6',
    secondary: '#06b6d4',
    bg: '#0f172a',
    text: '#f8fafc',
    muted: '#1e293b',
    icon: Monitor
  },
  salon: {
    primary: '#db2777',
    secondary: '#d4af37',
    bg: '#fff5f7',
    text: '#500724',
    muted: '#fdf2f8',
    icon: Scissors
  },
  grocery: {
    primary: '#16a34a',
    secondary: '#facc15',
    bg: '#ffffff',
    text: '#14532d',
    muted: '#f0fdf4',
    icon: ShoppingBag
  },
  hardware: {
    primary: '#dc2626',
    secondary: '#4b5563',
    bg: '#ffffff',
    text: '#111827',
    muted: '#f9fafb',
    icon: Hammer
  },
  electrical: {
    primary: '#2563eb',
    secondary: '#fbbf24',
    bg: '#ffffff',
    text: '#1e3a8a',
    muted: '#eff6ff',
    icon: Zap
  },
  bookshop: {
    primary: '#92400e',
    secondary: '#78350f',
    bg: '#fdf8f4',
    text: '#451a03',
    muted: '#fffbeb',
    icon: BookOpen
  },
  agency: {
    primary: '#000000',
    secondary: '#ff00ff',
    bg: '#ffffff',
    text: '#000000',
    muted: '#f3f4f6',
    icon: Briefcase
  },
  other: {
    primary: '#475569',
    secondary: '#64748b',
    bg: '#ffffff',
    text: '#0f172a',
    muted: '#f8fafc',
    icon: Activity
  }
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

export default async function SiteViewer({ params, searchParams }: { params: { subdomain: string }, searchParams: { p?: string } }) {
  const { subdomain } = params;
  const currentPage = searchParams.p || 'home';

  const { data: site, error } = await supabase
    .from('sites')
    .select('*')
    .eq('subdomain', subdomain)
    .single();

  if (error || !site) {
    notFound();
  }

  const data = site as unknown as SiteData;
  const { details } = data;
  
  // SUBSCRIPTION ENFORCEMENT
  const isActive = details.is_active !== false;
  const expiryDate = details.expires_at ? new Date(details.expires_at) : null;
  const isExpired = expiryDate ? expiryDate < new Date() : false;

  if (!isActive || isExpired) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff', textAlign: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '500px' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <Clock size={40} color="#ff4444" />
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ignition <span style={{ color: '#ff4444' }}>Paused</span></h1>
          <p style={{ opacity: 0.6, fontSize: '1.2rem', marginBottom: '2.5rem' }}>
            The subscription for <b>{data.name}</b> has expired or been suspended. 
            Please contact the administrator to reactivate your site.
          </p>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.5rem', opacity: 0.4, letterSpacing: '0.1em' }}>SUPPORT CONTACT</p>
            <p style={{ fontWeight: 600 }}>{details.contact.email || 'support@sitespark.io'}</p>
          </div>
        </div>
      </div>
    );
  }

  const theme = THEMES[details.category] || THEMES.other;
  const ThemeIcon = theme.icon;
  const isMinimal = site.template_id === 'minimal';

  // Use Custom Colors if available
  const primaryColor = details.theme?.primary || theme.primary;
  const secondaryColor = details.theme?.secondary || theme.secondary;

  return (
    <div className={`site-wrapper theme-${details.category} template-${site.template_id}`}>
      <title>{details.seo?.title || site.name}</title>
      <meta name="description" content={details.seo?.description || details.heroDescription} />
      <meta name="keywords" content={details.seo?.keywords} />
      {details.faviconUrl && <link rel="icon" href={details.faviconUrl} />}
      <link rel="stylesheet" href={FONT_LINKS[details.theme?.fontFamily || ''] || FONT_LINKS.sans} />

      {/* Analytics Scripts */}
      {details.analytics?.gaId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${details.analytics.gaId}`}></script>
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${details.analytics.gaId}');
          `}} />
        </>
      )}
      {details.analytics?.fbPixelId && (
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${details.analytics.fbPixelId}');
          fbq('track', 'PageView');
        `}} />
      )}

      {/* Internal Tracking */}
      <script dangerouslySetInnerHTML={{ __html: `
        fetch('/api/stats/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ siteId: '${site.id}' })
        }).catch(() => {});
      `}} />

      {/* Header */}
      <header style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--site-border)', background: theme.bg, position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="site-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--site-primary)' }}>
            {details.businessName}
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <Link href="?p=home" style={{ color: currentPage === 'home' ? 'var(--site-primary)' : 'inherit', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Home</Link>
            <Link href="?p=about" style={{ color: currentPage === 'about' ? 'var(--site-primary)' : 'inherit', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>About</Link>
            <Link href="?p=services" style={{ color: currentPage === 'services' ? 'var(--site-primary)' : 'inherit', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Services</Link>
            <Link href="?p=gallery" style={{ color: currentPage === 'gallery' ? 'var(--site-primary)' : 'inherit', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Gallery</Link>
          </nav>
        </div>
      </header>

      {/* Dynamic Sections (Filtered by current page) */}
      <main>
        {details.sections?.filter((s: any) => s.page === currentPage || (!s.page && currentPage === 'home')).map((section: any) => (
          <section key={section.id} className="section" style={{ borderBottom: '1px solid var(--site-border)' }}>
            <div className="site-container">
              <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{section.title}</h2>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                  {section.content}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Global Components (only on Home or if needed) */}
        {currentPage === 'home' && (
          <>
            <section className="section" style={{ background: 'var(--site-muted)' }}>
              <div className="site-container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{details.heroTitle}</h2>
                  <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>{details.heroDescription}</p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --site-primary: ${primaryColor};
          --site-secondary: ${secondaryColor};
          --site-text: ${theme.text};
          --site-bg: ${theme.bg};
          --site-muted: ${theme.muted};
          --site-border: rgba(0,0,0,0.1);
          --site-font: ${FONT_FAMILIES[details.theme?.fontFamily || ''] || FONT_FAMILIES.sans};
        }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: var(--site-font); color: var(--site-text); background: var(--site-bg); scroll-behavior: smooth; }
        ${details.theme?.animationsEnabled !== false ? `
          .section { animation: reveal 1s ease-out forwards; }
          @keyframes reveal {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        ` : ''}
        .site-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .section { padding: ${isMinimal ? '4rem 0' : '6rem 0'}; }
        .grid { display: grid; gap: 2rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s; text-decoration: none; border: none; }
        .btn-primary { background: var(--site-primary); color: #fff; }
        .btn-primary:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .btn-outline { border: 1px solid var(--site-border); background: transparent; color: var(--site-text); }
        .site-header { padding: 1rem 0; border-bottom: 1px solid var(--site-border); position: sticky; top: 0; background: ${theme.bg}ee; backdrop-filter: blur(10px); z-index: 1000; }
        .nav { display: flex; gap: 1.5rem; align-items: center; }
        .nav a { color: var(--site-text); font-weight: 500; font-size: 0.9rem; text-decoration: none; opacity: 0.8; }
        .nav a:hover { opacity: 1; color: var(--site-primary); }
        .hero { padding: ${isMinimal ? '5rem 0' : '8rem 0'}; background: ${isMinimal ? 'var(--site-bg)' : `radial-gradient(circle at top right, ${theme.muted}, ${theme.bg})`}; text-align: center; border-bottom: ${isMinimal ? '1px solid var(--site-border)' : 'none'}; }
        .card { padding: 2rem; border-radius: 12px; border: 1px solid var(--site-border); background: ${details.category === 'it' || isMinimal ? 'rgba(255,255,255,0.05)' : '#fff'}; }
        .whatsapp-btn { position: fixed; bottom: 2rem; right: 2rem; background: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(37,211,102,0.3); z-index: 1000; transition: 0.3s; }
        .whatsapp-btn:hover { transform: scale(1.1); rotate: 10deg; }
        .map-container { height: 400px; border-radius: 12px; overflow: hidden; border: 1px solid var(--site-border); }
        .logo-img { height: 40px; }
        .text-muted { opacity: 0.7; }
      `}} />

      {/* Social Links Floating (Mobile/Desktop) */}
      <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1000 }}>
        {details.contact.facebook && (
          <a href={details.contact.facebook} target="_blank" style={{ background: '#1877F2', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}><Facebook size={20} /></a>
        )}
        {details.contact.instagram && (
          <a href={details.contact.instagram} target="_blank" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}><Instagram size={20} /></a>
        )}
        {details.contact.linkedin && (
          <a href={details.contact.linkedin} target="_blank" style={{ background: '#0A66C2', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}><Linkedin size={20} /></a>
        )}
        {details.contact.tiktok && (
          <a href={details.contact.tiktok} target="_blank" style={{ background: '#000000', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}><Music size={20} /></a>
        )}
      </div>

      {/* WhatsApp Link */}
      {details.contact.whatsapp && (
        <a href={`https://wa.me/${details.contact.whatsapp}`} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={32} />
        </a>
      )}

      {/* Header */}
      <header className="site-header">
        <div className="site-container" style={{ display: 'flex', justifyContent: isMinimal ? 'center' : 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {details.logoUrl && <img src={details.logoUrl} alt={data.name} className="logo-img" />}
            <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{data.name}</div>
          </div>
          {!isMinimal && (
            <nav className="nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#resources">Insights</a>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.4rem 1rem' }}>Get Started</a>
            </nav>
          )}
        </div>
      </header>

      {/* 1. Home Page / Hero */}
      <section id="home" className="hero">
        <div className="site-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: theme.muted, color: theme.primary, padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '2rem', border: `1px solid ${theme.primary}22` }}>
            <ThemeIcon size={14} /> {details.category.toUpperCase()} EXCELLENCE
          </div>
          <h1 style={{ fontSize: isMinimal ? '3rem' : '4rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{details.heroTitle || data.name}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto 3rem' }}>{details.heroDescription}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary">{isMinimal ? 'Consult Now' : 'Our Solutions'} <ArrowRight size={18} /></a>
            {!isMinimal && <a href="#portfolio" className="btn btn-outline">Success Stories</a>}
          </div>

          {/* Quick Stats/Why Us */}
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '6rem' }}>
            {details.whyChooseUs.map((w, i) => (
              <div key={i} className="card" style={{ textAlign: 'left', borderLeft: `4px solid ${theme.primary}` }}>
                <div style={{ color: theme.primary, marginBottom: '1rem' }}>
                  {i === 0 ? <Award size={24} /> : i === 1 ? <ShieldCheck size={24} /> : <Zap size={24} />}
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{w}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ensuring the highest standards in {details.category} with our dedicated team of professionals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. About Us */}
      <section id="about" className="section" style={{ background: theme.muted }}>
        <div className="site-container">
          <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{details.about.experience} <br /><span style={{ color: theme.primary }}>Of Dedicated Service</span></h2>
              <p style={{ fontSize: '1.15rem', opacity: 0.8, marginBottom: '2rem', lineHeight: 1.6 }}>{details.about.profile}</p>
              <div style={{ padding: '2rem', background: details.category === 'it' ? 'rgba(255,255,255,0.05)' : '#fff', borderRadius: '16px', border: '1px solid var(--site-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: theme.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <Users size={24} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase' }}>Expert Team</p>
                    <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>{details.about.team}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '500px', background: `${theme.primary}11`, borderRadius: '24px', border: `1px solid ${theme.primary}22`, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <ThemeIcon size={120} style={{ opacity: 0.1, color: theme.primary }} />
              </div>
              <div style={{ position: 'absolute', bottom: '30px', left: '-20px', padding: '1.5rem 2rem', background: theme.bg, borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--site-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Star fill={theme.secondary} color={theme.secondary} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>5.0 Rating</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>On Industry Platforms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services (Modular Grid) */}
      <section id="services" className="section">
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Professional Solutions</h2>
            <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto' }}>Specialized {details.category} services tailored specifically for your residential or commercial needs.</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {(details.sections || [
              { id: '1', title: 'Primary Service', content: details.services.cleaning },
              { id: '2', title: 'Expert Service', content: details.services.technical },
              { id: '3', title: 'Advanced Solution', content: details.services.it }
            ]).map((s, i) => s.content && (
              <div key={s.id || i} className="card" style={{ transition: '0.3s' }}>
                <div style={{ width: '50px', height: '50px', background: `${theme.primary}11`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.primary, marginBottom: '1.5rem' }}>
                  {i % 3 === 0 ? <Sparkles size={24} /> : i % 3 === 1 ? <Wrench size={24} /> : <Activity size={24} />}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ opacity: 0.7, marginBottom: '2rem', lineHeight: 1.6 }}>{s.content}</p>
                <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: theme.primary, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  BOOK CONSULTATION <ChevronRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio / Gallery (Visual Grid) */}
      <section id="portfolio" className="section" style={{ background: theme.primary, color: '#fff' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Expert Portfolio</h2>
            <p style={{ opacity: 0.8 }}>Visual proof of our commitment to quality across all projects.</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {details.portfolio.gallery.map((url, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', height: '300px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <img src={url} alt={`Work ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          {/* Client Ticker Map */}
          <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', marginBottom: '3rem' }}>TRUSTED BY GLOBAL PARTNERS</p>
            <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', flexWrap: 'wrap', opacity: 0.7 }}>
              {details.portfolio.logos.map((url, i) => (
                <img key={i} src={url} alt={`Partner ${i+1}`} style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Resources / Insights */}
      <section id="resources" className="section">
        <div className="site-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Expert Insights</h2>
              <p style={{ opacity: 0.6 }}>Strategies and tips for better {details.category} results.</p>
            </div>
            <a href="#" className="btn btn-outline" style={{ borderRadius: '100px' }}>Explore Resources</a>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {details.resources.tips.map((tip, i) => (
              <div key={i} className="card" style={{ border: 'none', background: theme.muted }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: theme.primary, marginBottom: '1.25rem', letterSpacing: '0.1em' }}>GUIDE 0{i+1}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>{tip}</h3>
                <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>Advanced methodologies applied by our technical team to ensure optimal outcomes and long-term efficiency.</p>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.8rem', color: theme.text, textDecoration: 'none' }}>LEARN MORE <ExternalLink size={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact & Maps */}
      <section id="contact" className="section" style={{ background: theme.bg }}>
        <div className="site-container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1.5fr', background: theme.muted, borderRadius: '24px', overflow: 'hidden' }}>
            <div style={{ padding: '4rem', background: theme.primary, color: '#fff' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>Get In Touch</h2>
              <div className="grid" style={{ gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={20} /></div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.6 }}>EMAIL SUPPORT</p>
                    <p style={{ fontWeight: 600 }}>{details.contact.email}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={20} /></div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.6 }}>DIRECT CALL</p>
                    <p style={{ fontWeight: 600 }}>{details.contact.phone}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={20} /></div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.6 }}>HEADQUARTERS</p>
                    <p style={{ fontWeight: 600 }}>{details.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '4rem' }}>
              <ContactForm siteId={site.id} userId={site.user_id} primaryColor={primaryColor} />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className="map-container">
              <iframe 
                src={details.contact.mapUrl}
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '5rem 0', background: theme.text, color: '#fff' }}>
        <div className="site-container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', opacity: 0.6, fontSize: '0.9rem', fontWeight: 600 }}>
            <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>HOME</a>
            <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT</a>
            <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>SERVICES</a>
            <a href="#portfolio" style={{ color: '#fff', textDecoration: 'none' }}>PORTFOLIO</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            {details.contact.facebook && <a href={details.contact.facebook} target="_blank" style={{ color: 'rgba(255,255,255,0.5)' }}><Facebook size={20} /></a>}
            {details.contact.instagram && <a href={details.contact.instagram} target="_blank" style={{ color: 'rgba(255,255,255,0.5)' }}><Instagram size={20} /></a>}
            {details.contact.linkedin && <a href={details.contact.linkedin} target="_blank" style={{ color: 'rgba(255,255,255,0.5)' }}><Linkedin size={20} /></a>}
            {details.contact.whatsapp && <a href={`https://wa.me/${details.contact.whatsapp}`} target="_blank" style={{ color: 'rgba(255,255,255,0.5)' }}><MessageCircle size={20} /></a>}
          </div>

          {details.payment?.paypalEmail && (
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <a 
                href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${details.payment.paypalEmail}&item_name=Support+${site.name}`}
                target="_blank"
                className="btn"
                style={{ background: '#ffc439', color: '#111', fontWeight: 800, borderRadius: '100px', padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <ShoppingCart size={18} /> Support Our Work (PayPal)
              </a>
            </div>
          )}
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
             &copy; {new Date().getFullYear()} {data.name}. Professional {details.category} solutions. <br />
             <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', fontSize: '0.75rem' }}>
               <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
               <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
             </div>
             <div style={{ marginTop: '1.5rem' }}>
              Ignited by <span style={{ color: theme.primary, fontWeight: 900 }}>SiteSpark SaaS</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
