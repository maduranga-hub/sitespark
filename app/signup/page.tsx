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
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#020617',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px' 
    }}>
      {/* Background Gradients */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>

      <div className="container" style={{ maxWidth: '480px', position: 'relative', zIndex: 1 }}>
        <div className="glass-card" style={{ 
          padding: '3.5rem', 
          background: 'rgba(15, 23, 42, 0.4)', 
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          {isSent ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'rgba(0, 102, 255, 0.1)', 
                borderRadius: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 2.5rem',
                border: '1px solid rgba(0, 102, 255, 0.2)',
                boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)'
              }}>
                <Mail size={36} color="var(--primary)" />
              </div>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'white', fontWeight: 900 }}>Check Your Mail</h1>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                We&apos;ve sent a verification link to <br/><strong style={{ color: 'var(--primary)' }}>{email}</strong>. 
                Ignite your account by clicking the link.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="btn btn-primary"
                style={{ width: '100%', height: '56px' }}
              >
                Back to Sign Up
              </button>
            </div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.6rem', 
                  background: 'rgba(0, 102, 255, 0.1)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '100px', 
                  fontSize: '0.8rem', 
                  fontWeight: 800, 
                  color: 'var(--primary)', 
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(0, 102, 255, 0.2)',
                  letterSpacing: '0.05em'
                }}>
                  <Sparkles size={14} /> ENTIRELY FREE
                </div>
                <h1 style={{ fontSize: '2.75rem', marginBottom: '0.75rem', color: 'white', fontWeight: 950, letterSpacing: '-0.04em' }}>
                  Ignite Your <span className="text-gradient">Brand</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Professional presence, ready in seconds.</p>
              </div>

              <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>FULL NAME</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                      type="text"
                      className="auth-input" 
                      placeholder="Nirmal Maduranga"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{ paddingLeft: '48px', height: '56px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>EMAIL ADDRESS</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                      type="email"
                      className="auth-input" 
                      placeholder="name@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{ paddingLeft: '48px', height: '56px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PASSWORD</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                      type="password"
                      className="auth-input" 
                      placeholder="Create a strong password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      style={{ paddingLeft: '48px', height: '56px' }}
                    />
                  </div>
                </div>

                {error && (
                  <div style={{ 
                    color: '#ff4444', 
                    fontSize: '0.85rem', 
                    textAlign: 'center', 
                    background: 'rgba(255,68,68,0.1)', 
                    padding: '1rem', 
                    borderRadius: '12px',
                    border: '1px solid rgba(255,68,68,0.2)'
                  }}>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={loading}
                  style={{ width: '100%', height: '60px', marginTop: '1rem', fontSize: '1.1rem', gap: '0.8rem' }}
                >
                  {loading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={20} />
                </button>
              </form>

              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  Already have an account? <Link href="/login" style={{ color: 'white', fontWeight: 800, borderBottom: '1px solid var(--primary)' }}>Log in</Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx global>{`
        .auth-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }
        .auth-input:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(0, 102, 255, 0.15);
        }
        .auth-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </main>
  );
}
