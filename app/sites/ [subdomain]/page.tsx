import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { Phone, Mail, MapPin, CheckCircle2, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: { subdomain: string } }): Promise<Metadata> {
  const { data: site } = await supabase
    .from('sites')
    .select('name, details')
    .eq('subdomain', params.subdomain)
    .single();

  if (!site) return { title: 'Site Not Found' };

  const seo = site.details?.seo || {};
  return {
    title: seo.title || `${site.name} | SiteSpark`,
    description: seo.description || `Welcome to ${site.name}. Explore our professional services.`,
    keywords: seo.keywords || '',
    icons: {
      icon: site.details?.faviconUrl || '/favicon.ico',
    }
  };
}

export default async function SiteViewer({ params }: { params: { subdomain: string } }) {
  const { subdomain } = params;

  const { data: site, error } = await supabase
    .from('sites')
    .select('*')
    .eq('subdomain', subdomain)
    .single();

  if (error || !site) {
    notFound();
  }

  const details = site.details || {};
  const contact = details.contact || {};

  return (
    <div className="generated-site">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --site-primary: ${details.theme?.primary || '#0066FF'};
          --site-text: #1a1a1a;
          --site-bg: #ffffff;
          --site-muted: #f4f4f5;
        }
        .generated-site {
          font-family: ${details.theme?.fontFamily === 'serif' ? 'serif' : details.theme?.fontFamily === 'mono' ? 'monospace' : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'};
          color: var(--site-text);
          line-height: 1.6;
        }
        /* ... existing styles ... */
      `}} />

      {/* Header */}
      <header className="site-header">
        <div className="site-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {details.logoUrl && <img src={details.logoUrl} alt="Logo" style={{ height: '40px' }} />}
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--site-primary)' }}>{site.name}</div>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ fontWeight: 500 }}>About</a>
            <a href="#services" style={{ fontWeight: 500 }}>Services</a>
            <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="site-hero">
        <div className="site-container">
          <h1>{details.heroTitle || site.name}</h1>
          <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            {details.heroDescription || 'Professional services tailored to your needs.'}
          </p>
          <a href="#contact" style={{ display: 'inline-block', background: 'var(--site-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600 }}>
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="site-section">
        <div className="site-container">
          <h2>About Us</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: '#475569' }}>
            {details.about?.profile || details.aboutUs || `Welcome to ${site.name}. We are dedicated to providing the best experience for our clients.`}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="site-section" style={{ background: '#f8fafc' }}>
        <div className="site-container">
          <h2>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {(details.services?.cleaning || details.services || []).toString().split(',').filter((s: string) => s).map((service: string, i: number) => (
              <div key={i} className="service-card">
                <div style={{ color: 'var(--site-primary)', marginBottom: '1rem' }}><CheckCircle2 size={32} /></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{service}</h3>
                <p style={{ color: '#64748b' }}>Expert solutions for your {service.toLowerCase()} needs. We ensure quality and satisfaction in every project.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="site-section">
        <div className="site-container">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <Mail style={{ color: 'var(--site-primary)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8' }}>EMAIL</div>
                <div style={{ fontWeight: 600 }}>{contact.email || 'Contact us for details'}</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone style={{ color: 'var(--site-primary)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8' }}>PHONE</div>
                <div style={{ fontWeight: 600 }}>{contact.phone || 'Available on request'}</div>
              </div>
            </div>
            <div className="contact-item">
              <MapPin style={{ color: 'var(--site-primary)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8' }}>ADDRESS</div>
                <div style={{ fontWeight: 600 }}>{contact.address || 'Inquire for location'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', borderTop: '1px solid #eee', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
        <div className="site-container">
          &copy; {new Date().getFullYear()} {site.name}. Powered by <span style={{ color: 'var(--site-primary)', fontWeight: 700 }}>SiteSpark</span>
        </div>
      </footer>
    </div>
  );
}
