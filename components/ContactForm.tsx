'use client';

import { useState } from 'react';

export default function ContactForm({ siteId, userId, primaryColor }: { siteId: string; userId: string; primaryColor: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, siteId, userId })
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div style={{ 
        padding: '3rem', 
        textAlign: 'center', 
        background: 'rgba(22, 163, 74, 0.1)', 
        borderRadius: '24px', 
        border: '1px solid rgba(22, 163, 74, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: 'rgba(22, 163, 74, 0.2)', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1.5rem',
          color: '#22c55e'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 900 }}>Inquiry Received!</h3>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
          Your message has been ignited. Our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setIsSuccess(false)} 
          style={{ 
            marginTop: '2rem', 
            color: '#22c55e', 
            fontWeight: 800, 
            background: 'rgba(34, 197, 94, 0.1)', 
            border: '1px solid rgba(34, 197, 94, 0.2)', 
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="grid" style={{ gap: '1.5rem' }} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.7rem', fontWeight: 800, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginLeft: '4px' }}>YOUR NAME</label>
          <input 
            placeholder="John Doe" 
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="contact-input"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.7rem', fontWeight: 800, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginLeft: '4px' }}>EMAIL ADDRESS</label>
          <input 
            placeholder="john@example.com" 
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="contact-input"
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.7rem', fontWeight: 800, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginLeft: '4px' }}>PHONE NUMBER (OPTIONAL)</label>
        <input 
          placeholder="+971 -- --- ----" 
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          className="contact-input"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.7rem', fontWeight: 800, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginLeft: '4px' }}>REQUIREMENTS</label>
        <textarea 
          placeholder="Tell us about your project requirements..." 
          required
          rows={5} 
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="contact-input"
          style={{ padding: '1.25rem', minHeight: '150px', resize: 'none' }}
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="btn" 
        disabled={isSubmitting}
        style={{ 
          width: '100%', 
          justifyContent: 'center', 
          height: '64px',
          background: primaryColor,
          color: '#fff',
          fontWeight: 900,
          borderRadius: '16px',
          border: 'none',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1,
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          boxShadow: `0 20px 40px -10px ${primaryColor}44`,
          marginTop: '0.5rem'
        }}
      >
        {isSubmitting ? 'Igniting Inquiry...' : 'Ignite Inquiry Now'}
      </button>

      <style jsx>{`
        .contact-input {
          padding: 1.1rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
          width: 100%;
        }
        .contact-input:focus {
          outline: none;
          border-color: ${primaryColor};
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 20px ${primaryColor}22;
        }
        .contact-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </form>
  );
}
