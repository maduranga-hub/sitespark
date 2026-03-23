'use client';

import { useState } from 'react';
import { Shield, Lock, Mail, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function MasterPortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleMasterLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. EMERGENCY BYPASS FOR OWNER
      if (email?.toLowerCase() === 'sinhawap@gmail.com' && password === '12345678') {
        console.log('Master Portal: Bypassing standard auth for owner account...');
        router.push('/portal/dashboard');
        return;
      }

      // 2. Standard Supabase Auth
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (data.user) {
        const userEmail = data.user.email?.toLowerCase();
        // Only allow the specific owner email for the Master Portal
        if (userEmail === 'sinhawap@gmail.com') {
          router.push('/portal/dashboard');
        } else {
          await supabase.auth.signOut();
          setError('Access Denied: This portal is reserved for the Platform Owner.');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="master-portal-screen">
      <div className="portal-container">
        <div className="master-glass">
          <div className="portal-brand">
            <div className="brand-logo">
              <Sparkles className="spark-icon" size={28} />
            </div>
            <div className="brand-text">
              <span className="brand-name">SiteSpark</span>
              <span className="brand-version">MASTER HUB v2.1</span>
            </div>
          </div>

          <div className="portal-header">
            <h1>Master <span className="text-gradient">Control</span></h1>
            <p>Unified Platform Administration & Governance</p>
          </div>

          <form onSubmit={handleMasterLogin} className="portal-form">
            <div className="field-group">
              <label>Master ID</label>
              <div className="field-wrapper">
                <Mail size={18} className="field-icon" />
                <input 
                  type="email" 
                  placeholder="owner@sitespark.online"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label>Access Key</label>
              <div className="field-wrapper">
                <Lock size={18} className="field-icon" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <div className="portal-error">{error}</div>}

            <button type="submit" className="portal-submit-btn" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : <>Initiate Access <ArrowRight size={18} /></>}
            </button>
          </form>

          <div className="portal-footer">
            <div className="security-tag">
              <Shield size={12} /> END-TO-END ENCRYPTION ACTIVE
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --portal-primary: #3b82f6;
          --portal-accent: #a855f7;
          --portal-bg: #030712;
          --portal-text: #f8fafc;
        }

        .master-portal-screen {
          min-height: 100vh;
          background: var(--portal-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--portal-text);
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .master-portal-screen::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%);
          z-index: 0;
        }

        .portal-container {
          width: 100%;
          max-width: 480px;
          padding: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .master-glass {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 48px;
          padding: 3.5rem;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8);
        }

        .portal-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .brand-logo {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--portal-primary), var(--portal-accent));
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: -0.01em;
        }

        .brand-version {
          font-size: 0.65rem;
          font-weight: 800;
          opacity: 0.4;
          letter-spacing: 0.05em;
        }

        .portal-header {
          margin-bottom: 3rem;
        }

        .portal-header h1 {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .portal-header p {
          font-size: 0.9rem;
          opacity: 0.5;
          font-weight: 500;
        }

        .text-gradient {
          background: linear-gradient(to right, var(--portal-primary), var(--portal-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portal-form {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .field-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          opacity: 0.6;
          margin-bottom: 0.75rem;
          margin-left: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .field-wrapper {
          position: relative;
        }

        .field-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.3;
          transition: 0.3s;
        }

        .field-wrapper input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.1rem 1.1rem 1.1rem 3.5rem;
          color: white;
          font-size: 1rem;
          transition: 0.3s;
        }

        .field-wrapper input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--portal-primary);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .field-wrapper input:focus + .field-icon {
          opacity: 1;
          color: var(--portal-primary);
        }

        .portal-submit-btn {
          width: 100%;
          background: linear-gradient(to right, var(--portal-primary), var(--portal-accent));
          color: white;
          border: none;
          border-radius: 20px;
          padding: 1.25rem;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 1rem;
          box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.4);
        }

        .portal-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.5);
        }

        .portal-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .portal-error {
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 16px;
          color: #f87171;
          font-size: 0.85rem;
          text-align: center;
          font-weight: 600;
        }

        .portal-footer {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
        }

        .security-tag {
          font-size: 0.6rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          opacity: 0.3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
