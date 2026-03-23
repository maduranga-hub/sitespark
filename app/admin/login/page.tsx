'use client';

import { useState } from 'react';
import { Shield, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAdminLogin = async (e: React.FormEvent) => {
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
        const userEmail = data.user.email?.toLowerCase();
        if (userEmail === 'sinhawap@gmail.com') {
          router.push('/admin/owner');
        } else {
          // If not an admin, sign out and show error
          await supabase.auth.signOut();
          setError('Unauthorized identity detected. Access denied.');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Invalid administrative credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-screen">
      <div className="login-container">
        <div className="glass-panel">
          <div className="header">
            <div className="shield-icon">
              <Shield size={32} />
            </div>
            <h1>Admin <span className="text-gradient">Access</span></h1>
            <p>Authorized personnel only. System level clearance required.</p>
          </div>

          <form onSubmit={handleAdminLogin} className="login-form">
            <div className="input-group">
              <label>Operator ID</label>
              <div className="input-wrapper">
                <Mail size={18} className="icon" />
                <input 
                  type="email" 
                  placeholder="admin@sitespark.online"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Security Key</label>
              <div className="input-wrapper">
                <Lock size={18} className="icon" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : <>Authenticate Entry <ArrowRight size={18} /></>}
            </button>
          </form>

          <div className="footer">
            <p>Level 5 Encryption Active</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-login-screen {
          min-height: 100vh;
          background: #020617;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: radial-gradient(circle at top right, rgba(0, 102, 255, 0.05), transparent 40%);
        }
        .login-container {
          width: 100%;
          max-width: 480px;
          padding: 2rem;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 40px;
          padding: 4rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .shield-icon {
          width: 64px;
          height: 64px;
          background: var(--primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          box-shadow: 0 0 30px var(--primary-glow);
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .header p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-group label {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          margin-left: 0.5rem;
        }
        .input-wrapper {
          position: relative;
        }
        .input-wrapper .icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.2);
        }
        input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem 1rem 1rem 3.5rem;
          color: white;
          font-size: 0.95rem;
          transition: 0.2s;
        }
        input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
        }
        .login-btn {
          width: 100%;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 16px;
          padding: 1.25rem;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1rem;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 10px 20px -5px var(--primary-shadow);
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
        .login-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .error-message {
          padding: 1rem;
          background: rgba(255, 0, 0, 0.1);
          border: 1px solid rgba(255, 0, 0, 0.2);
          border-radius: 12px;
          color: #ff4444;
          font-size: 0.85rem;
          text-align: center;
          font-weight: 600;
        }
        .footer {
          margin-top: 3rem;
          text-align: center;
        }
        .footer p {
          font-size: 0.65rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.15);
        }
        .text-gradient {
          background: linear-gradient(to right, var(--primary), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </main>
  );
}
