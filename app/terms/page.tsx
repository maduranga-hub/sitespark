import Link from 'next/link';

export default function TermsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of <span className="text-gradient">Service</span></h1>
        <div className="glass-card" style={{ padding: '3rem', lineHeight: '1.8', opacity: 0.9 }}>
          <p>Welcome to SiteSpark. By using our site builder, you agree to the following terms:</p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Usage Rights</h2>
          <p>You own the content you provide. SiteSpark provides the platform and hosting infrastructure for your professional presence.</p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Prohibited Content</h2>
          <p>Users are prohibited from using SiteSpark to host illegal, harmful, or deceptive content. We reserve the right to terminate sites that violate these policies.</p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Service Availability</h2>
          <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. Maintenance may be performed as needed.</p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 700 }}>&larr; Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
