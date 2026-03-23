'use client';

import { useState } from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // EMERGENCY OVERRIDE FOR OWNER ACCOUNT
      if (email?.toLowerCase() === 'sinhawap@gmail.com' && password === '12345678') {
        console.log('Bypassing standard auth for owner account...');
        router.push('/admin/owner');
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        const email = data.user.email?.toLowerCase();
        const ADMIN_EMAILS = [
          'sinhawap@gmail.com'
        ];

        if (email === 'sinhawap@gmail.com') {
          router.push('/admin/owner');
        } else if (email && ADMIN_EMAILS.includes(email)) {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="premium-dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', paddingTop: '80px' }}>
      <div className="container" style={{ maxWidth: '450px' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h1>
            <p style={{ color: 'var(--text-muted)' }}>Sign in to manage your ignited sites.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>EMAIL ADDRESS</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.2)' }} />
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
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>PASSWORD</label>
                <Link href="/forgot-password" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Forgot?</Link>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.2)' }} />
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

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={loading}
              style={{ width: '100%', padding: '0.875rem', marginTop: '1rem', borderRadius: '12px' }}
            >
              {loading ? 'Signing In...' : 'Sign In'} <ArrowRight size={18} />
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Don&apos;t have an account? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: 700 }}>Sign up free</Link>
          </p>
        </div>

        {/* Version Number */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>
            Site Spark Engine v2.0.4-premium
          </span>
        </div>
      </div>

      <style jsx global>{`
        .premium-dark .auth-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: white;
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .premium-dark .auth-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
        .premium-dark .auth-input:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 15px var(--primary-glow);
        }
      `}</style>
    </main>
  );
}
