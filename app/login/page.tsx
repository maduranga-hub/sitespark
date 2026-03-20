'use client';

import { useState } from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) setError(error.message);
  };

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

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }}></div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>OR CONTINUE WITH</span>
              <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }}></div>
            </div>

            <button 
              type="button"
              onClick={() => handleOAuthLogin('google')}
              className="btn btn-glass" 
              style={{ width: '100%', padding: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9105 17.5856 17.1582 16.3414 17.9718V20.9583H20.188C22.4414 18.8821 23.766 15.8544 23.766 12.2764Z" fill="#4285F4"/>
                <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.0939L16.3479 18.1074C15.2723 18.8344 13.8829 19.2471 12.2465 19.2471C9.1154 19.2471 6.46346 17.1359 5.51187 14.3003H1.54V17.3712C3.54749 21.3623 7.64143 24.0008 12.24 24.0008Z" fill="#34A853"/>
                <path d="M5.50531 14.3003C5.2635 13.5828 5.12709 12.8225 5.12709 12.035C5.12709 11.2475 5.2635 10.4872 5.50531 9.7697V6.69873H1.53344C0.710719 8.33648 0.24 10.141 0.24 12.035C0.24 13.929 0.710719 15.7335 1.53344 17.3712L5.50531 14.3003Z" fill="#FBBC05"/>
                <path d="M12.24 4.75664C14.0074 4.75664 15.5941 5.3619 16.8407 6.54848L20.2723 3.11692C18.1994 1.18324 15.47 0.00385211 12.24 -4.72147e-05C7.64143 -4.72147e-05 3.54749 2.63851 1.54 6.62959L5.51187 9.70056C6.46346 6.86499 9.1154 4.75664 12.24 4.75664Z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            <button 
              type="button"
              onClick={() => handleOAuthLogin('github')}
              className="btn btn-glass" 
              style={{ width: '100%', padding: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}
            >
              <Github size={18} /> GitHub
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
