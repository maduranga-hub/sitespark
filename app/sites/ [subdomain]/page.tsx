import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface SiteData {
  name: string;
  details: {
    heroTitle: string;
    heroDescription: string;
    aboutUs: string;
    services: string[];
    contact: {
      email: string;
      phone: string;
      address: string;
    };
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

  const data = site as unknown as SiteData;
  const { details } = data;

  return (
    <div className="generated-site">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --site-primary: #0066FF;
          --site-text: #1a1a1a;
          --site-bg: #ffffff;
          --site-muted: #f4f4f5;
        }
        .generated-site {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: var(--site-text);
          line-height: 1.6;
        }
        .site-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .site-header {
          padding: 1.5rem 0;
          border-bottom: 1px solid #eee;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .site-hero {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
          text-align: center;
        }
        .site-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: #0f172a;
        }
        .site-section {
          padding: 5rem 0;
        }
        .site-section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }
        .service-card {
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: #fff;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--site-muted);
          border-radius: 8px;
        }
      `}} />

      {/* Header */}
      <header className="site-header">
        <div className="site-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--site-primary)' }}>{data.name}</div>
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
          <h1>{details.heroTitle || data.name}</h1>
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
            {details.aboutUs || `Welcome to ${data.name}. We are dedicated to providing the best experience for our clients.`}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="site-section" style={{ background: '#f8fafc' }}>
        <div className="site-container">
          <h2>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {(details.services || []).map((service, i) => (
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
                <div style={{ fontWeight: 600 }}>{details.contact.email}</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone style={{ color: 'var(--site-primary)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8' }}>PHONE</div>
                <div style={{ fontWeight: 600 }}>{details.contact.phone}</div>
              </div>
            </div>
            <div className="contact-item">
              <MapPin style={{ color: 'var(--site-primary)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8' }}>ADDRESS</div>
                <div style={{ fontWeight: 600 }}>{details.contact.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', borderTop: '1px solid #eee', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
        <div className="site-container">
          &copy; {new Date().getFullYear()} {data.name}. Powered by <span style={{ color: 'var(--site-primary)', fontWeight: 700 }}>SiteSpark</span>
        </div>
      </footer>
    </div>
  );
}
