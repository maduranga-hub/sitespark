'use client';

import { useState } from 'react';
import { Shield, Lock, Mail, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import '../portal.css';

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

    </main>
  );
}
