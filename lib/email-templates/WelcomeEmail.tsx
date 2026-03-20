import * as React from 'react';

interface WelcomeEmailProps {
  userName: string;
}

export const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({
  userName = 'Valued Partner',
}) => (
  <div style={{
    backgroundColor: '#0a0a0b',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '40px 20px',
    lineHeight: '1.6'
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#16161a',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      {/* Header */}
      <div style={{
        padding: '30px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #0066ff, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          SITESPARK
        </div>
        <div style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '0.2em', fontWeight: 800 }}>
          THE UNIVERSAL IGNITION ENGINE
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '40px 30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>
          Hi {userName}, Your Ignition is Ready! 🚀
        </h1>
        <p style={{ fontSize: '16px', color: '#a1a1aa', marginBottom: '30px' }}>
          Welcome to the next generation of business website building. You've just taken the first step toward digital dominance. Your SiteSpark workspace is now fully initialized.
        </p>

        {/* 3-Step Guide */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ 
            padding: '15px', 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '12px',
            marginBottom: '10px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <span style={{ color: '#0066ff', fontWeight: 800 }}>01.</span> Select your industry category.
          </div>
          <div style={{ 
            padding: '15px', 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '12px',
            marginBottom: '10px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <span style={{ color: '#0066ff', fontWeight: 800 }}>02.</span> Input your business DNA in the builder.
          </div>
          <div style={{ 
            padding: '15px', 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <span style={{ color: '#0066ff', fontWeight: 800 }}>03.</span> Ignite and share your professional link.
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="https://sitespark.io/dashboard" 
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: '#0066ff',
              color: '#ffffff',
              borderRadius: '8px',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 10px 20px rgba(0, 102, 255, 0.3)'
            }}>
            Launch My Dashboard
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '30px',
        textAlign: 'center',
        background: '#0e0e11',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.3)'
      }}>
        © 2026 SiteSpark. All rights reserved.<br />
        Built for Salons, Stores, Agencies, and You.<br />
        <br />
        Your business, ignited.
      </div>
    </div>
  </div>
);
