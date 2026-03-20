'use client';

import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Github, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password || !name) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;

      if (data.user) {
        // If session is created immediately, redirect. Otherwise show "Sent" message.
        if (data.session) {
          router.push('/dashboard');
        } else {
          setIsSent(true);
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };


  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.05), transparent 40%)', paddingTop: '80px' }}>
      <div className="container" style={{ maxWidth: '450px' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          {isSent ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(0, 102, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <Mail size={32} color="var(--primary)" />
              </div>
              <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Check Your Email</h1>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                We&apos;ve sent a verification link to <strong style={{ color: 'white' }}>{email}</strong>. 
                Please click the link to ignite your account.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="btn btn-glass"
                style={{ width: '100%' }}
              >
                Back to Sign Up
              </button>
            </div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 102, 255, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                  <Sparkles size={12} /> ENTIRELY FREE
                </div>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Ignite Your Brand</h1>
                <p style={{ color: 'var(--text-muted)' }}>Get your business online in seconds.</p>
              </div>

              <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>FULL NAME</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                      type="text"
                      className="auth-input" 
                      placeholder="Nirmal Maduranga"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                </div>

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
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PASSWORD</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                      type="password"
                      className="auth-input" 
                      placeholder="Create a strong password"
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
                  style={{ width: '100%', padding: '0.875rem', marginTop: '1rem' }}
                >
                  {loading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} />
                </button>
              </form>

              <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Already have an account? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 700 }}>Log in</Link>
              </p>
            </>
          )}
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
