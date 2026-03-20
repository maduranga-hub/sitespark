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
      <div style={{ padding: '2rem', textAlign: 'center', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
        <h3 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>Success!</h3>
        <p style={{ fontSize: '0.9rem', color: '#15803d' }}>Your inquiry has been sent. We will get back to you soon.</p>
        <button onClick={() => setIsSuccess(false)} style={{ marginTop: '1rem', color: '#16a34a', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="grid" style={{ gap: '1.25rem' }} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <input 
          placeholder="Your Name" 
          required
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          style={{ padding: '1rem', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', width: '100%' }} 
        />
        <input 
          placeholder="Contact Email" 
          type="email"
          required
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          style={{ padding: '1rem', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', width: '100%' }} 
        />
      </div>
      <input 
        placeholder="Mobile Number (Optional)" 
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
        style={{ padding: '1rem', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }} 
      />
      <textarea 
        placeholder="Tell us about your requirements..." 
        required
        rows={5} 
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        style={{ padding: '1rem', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}
      ></textarea>
      <button 
        type="submit" 
        className="btn" 
        disabled={isSubmitting}
        style={{ 
          width: '100%', 
          justifyContent: 'center', 
          padding: '1.25rem',
          background: primaryColor,
          color: '#fff',
          fontWeight: 700,
          borderRadius: '12px',
          border: 'none',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1
        }}
      >
        {isSubmitting ? 'Sending...' : 'Submit Inquiry Now'}
      </button>
    </form>
  );
}
