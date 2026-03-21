'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Shield, 
  Activity, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Globe,
  Zap,
  ArrowLeft,
  LayoutDashboard,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OwnerDashboard() {
  const [stats, setStats] = useState({ totalSites: 0, activeSites: 0, totalRevenue: 0, newSites24h: 0 });
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const router = useRouter();

  const OWNER_EMAIL = 'sinhawap@gmail.com';

  useEffect(() => {
    checkOwner();
  }, []);

  const checkOwner = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || session.user.email?.toLowerCase() !== OWNER_EMAIL) {
      router.push('/login?next=/admin/owner');
      return;
    }
    setIsOwner(true);
    fetchStats();
  };

  const fetchStats = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('sites').select('*');
      if (data) {
        const active = data.filter(s => s.details?.is_active !== false).length;
        const recent = data.filter(s => {
          const created = new Date(s.created_at);
          const now = new Date();
          return (now.getTime() - created.getTime()) < 24 * 60 * 60 * 1000;
        }).length;

        setStats({
          totalSites: data.length,
          activeSites: active,
          totalRevenue: data.length * 29, // Placeholder calculation
          newSites24h: recent
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOwner) return null;

  return (
    <main className="owner-dashboard">
      <div className="container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="brand">
            <div className="logo-icon">
              <Shield size={24} />
            </div>
            <div>
              <span className="subtitle">SYSTEM OVERLORD</span>
              <h1 className="title">Owner <span className="text-gradient">Console</span></h1>
            </div>
          </div>
          <div className="actions">
            <Link href="/admin" className="btn-glass">
              <LayoutDashboard size={18} /> Manage Sites
            </Link>
            <button onClick={() => supabase.auth.signOut().then(() => router.push('/'))} className="btn-glass text-error">
              <LogOut size={18} /> Exit
            </button>
          </div>
        </header>

        {/* Hero Stats */}
        <div className="stats-grid">
          <div className="stat-card premium">
            <div className="stat-icon"><Globe size={32} /></div>
            <div className="stat-info">
              <label>Total Global Instances</label>
              <div className="value">{stats.totalSites}</div>
              <div className="trend positive">
                <TrendingUp size={14} /> +{stats.newSites24h} in 24h
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon text-success"><CheckCircle2 size={32} /></div>
            <div className="stat-info">
              <label>Active Subscriptions</label>
              <div className="value">{stats.activeSites}</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(stats.activeSites / stats.totalSites) * 100}%` }}></div>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon text-primary"><Zap size={32} /></div>
            <div className="stat-info">
              <label>Projected ARR</label>
              <div className="value">${(stats.totalRevenue * 12).toLocaleString()}</div>
              <span className="tiny">Based on $29/mo avg</span>
            </div>
          </div>
        </div>

        {/* System Health & Activity */}
        <div className="content-grid">
          <div className="glass-card main-panel">
            <h2>Recent Orchestrations</h2>
            <div className="activity-placeholder">
              <Activity size={48} className="pulse" />
              <p>System heartbeat monitoring active...</p>
            </div>
          </div>
          <div className="glass-card side-panel">
            <h2>Command Shortcuts</h2>
            <div className="shortcuts">
              <Link href="/admin" className="shortcut">Full Site Registry</Link>
              <Link href="/builder" className="shortcut">Global Builder Tool</Link>
              <button className="shortcut danger">System Audit</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .owner-dashboard {
          min-height: 100vh;
          background: #020617;
          color: white;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .logo-icon {
          width: 50px;
          height: 50px;
          background: var(--primary);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px var(--primary-glow);
        }
        .subtitle {
          display: block;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.3em;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }
        .title {
          font-size: 2.5rem;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .actions {
          display: flex;
          gap: 1rem;
        }
        .stats-grid {
          display: grid;
          grid-template-cols: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 2.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .stat-card.premium {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 102, 255, 0.03));
          border-color: rgba(0, 102, 255, 0.2);
        }
        .stat-icon {
          width: 70px;
          height: 70px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-info label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .stat-info .value {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
        }
        .trend {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 0.5rem;
        }
        .trend.positive { color: var(--success); }
        .content-grid {
          display: grid;
          grid-template-cols: 2fr 1fr;
          gap: 2rem;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 3rem;
        }
        .activity-placeholder {
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0.3;
          gap: 1.5rem;
        }
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        .shortcuts {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .shortcut {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          border-radius: 16px;
          color: white;
          text-align: left;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
          text-decoration: none;
        }
        .shortcut:hover {
          background: rgba(255, 255, 255, 0.1);
          padding-left: 1.5rem;
        }
        .shortcut.danger { color: #ff4444; }
        .text-gradient {
          background: linear-gradient(to right, var(--primary), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-glass {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 0.85rem;
          font-weight: 700;
          transition: 0.2s;
          text-decoration: none;
        }
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .text-error { color: #ff4444; }
        .text-success { color: var(--success); }
        .text-primary { color: var(--primary); }
        .tiny { font-size: 0.65rem; opacity: 0.5; font-weight: 700; }
        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          margin-top: 1rem;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          background: var(--success);
          box-shadow: 0 0 10px var(--success);
        }
      `}</style>
    </main>
  );
}
