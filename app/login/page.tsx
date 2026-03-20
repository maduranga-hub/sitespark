'use client';

import { useState } from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);


  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at bottom left, rgba(0, 102, 255, 0.05), transparent 40%)', paddingTop: '80px' }}>
      <div className="container" style={{ maxWidth: '450px' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h1>
            <p style={{ color: 'var(--text-muted)' }}>Sign in to manage your ignited sites.</p>
          </div>

          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>EMAIL ADDRESS</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="email"
                  className="auth-input" 
                  placeholder="name@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ paddingLeft: '40px' }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>PASSWORD</label>
                <Link href="/forgot-password" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Forgot?</Link>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="password"
                  className="auth-input" 
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ paddingLeft: '40px' }}
                />
              </div>
            </div>

            {error && (
              <div style={{ color: '#ff4444', fontSize: '0.85rem', textAlign: 'center', background: 'rgba(255,68,68,0.1)', padding: '0.75rem', borderRadius: '8px' }}>
                {error}
              </div>
            )}

            <button className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', marginTop: '1rem' }}>
              Sign In <ArrowRight size={18} />
            </button>

          </form>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Don&apos;t have an account? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: 700 }}>Sign up free</Link>
          </p>
        </div>
      </div>

      <style jsx global>{`
        .auth-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .auth-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--glass-hover);
          box-shadow: 0 0 10px var(--primary-glow);
        }
      `}</style>
    </main>
  );
}
