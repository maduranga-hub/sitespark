'use client';

import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Users, 
  Settings, 
  Search, 
  Plus, 
  ExternalLink, 
  ShieldCheck, 
  TrendingUp, 
  Bell,
  Power
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function MasterDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ sites: 0, users: 0, revenue: 0 });
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Temporary Emergency Bypass handling
      const isOwner = user?.email?.toLowerCase() === 'sinhawap@gmail.com';
      
      if (!user && !isOwner) {
        // In a real env, we'd check if the user is in the browser session
        // For now, if no user and not our hardcoded bypass check, go to login
      }
      
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/portal/login');
  };

  if (loading) {
    return <div className="loading-screen">INITIALIZING MASTER SYSTEMS...</div>;
  }

  return (
    <div className="portal-layout">
      {/* Sidebar */}
      <aside className="portal-sidebar">
        <div className="sidebar-brand">
          <ShieldCheck className="text-primary" size={24} />
          <span>MASTER HUB</span>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active"><LayoutDashboard size={20} /> Dashboard</a>
          <a href="#" className="nav-item"><Globe size={20} /> Manage Sites</a>
          <a href="#" className="nav-item"><Users size={20} /> User Accounts</a>
          <a href="#" className="nav-item"><TrendingUp size={20} /> Analytics</a>
          <div className="nav-spacer"></div>
          <a href="#" className="nav-item"><Settings size={20} /> System Settings</a>
          <button onClick={handleLogout} className="nav-item logout"><Power size={20} /> Terminate Session</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="portal-main">
        <header className="portal-header">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search Master Records..." />
          </div>
          <div className="header-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="user-profile">
              <div className="profile-info">
                <span className="name">sinhawap@gmail.com</span>
                <span className="role">PLATFORM OWNER</span>
              </div>
              <div className="avatar">OW</div>
            </div>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="welcome-section">
            <h1>Platform <span className="text-gradient">Overview</span></h1>
            <p>Real-time governance and monitoring of SiteSpark infrastructure.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><Globe size={24} /></div>
              <div className="stat-data">
                <span className="label">Total Sites</span>
                <span className="value">124</span>
              </div>
              <div className="stat-trend positive">+12% this month</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Users size={24} /></div>
              <div className="stat-data">
                <span className="label">Total Users</span>
                <span className="value">842</span>
              </div>
              <div className="stat-trend positive">+8% this month</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><TrendingUp size={24} /></div>
              <div className="stat-data">
                <span className="label">Monthly Revenue</span>
                <span className="value">$12.4K</span>
              </div>
              <div className="stat-trend positive">+15% this month</div>
            </div>
          </div>

          <div className="recent-activity">
            <div className="activity-header">
              <h2>Recent Deployments</h2>
              <button className="btn-secondary">View All Logs</button>
            </div>
            <div className="activity-list">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="activity-item">
                  <div className="item-info">
                    <Globe size={18} />
                    <div>
                      <span className="title">nirmal-site-{i}.sitespark.online</span>
                      <span className="timestamp">Active • Last updated 2 hours ago</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button className="icon-btn-small"><ExternalLink size={14} /></button>
                    <button className="btn-sm">Control</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        :root {
          --primary: #3b82f6;
          --primary-glow: rgba(59, 130, 246, 0.4);
          --bg: #020617;
          --sidebar-bg: #0f172a;
          --card-bg: rgba(255, 255, 255, 0.03);
          --border: rgba(255, 255, 255, 0.06);
          --text: #f8fafc;
          --text-muted: #94a3b8;
        }

        .portal-layout {
          display: flex;
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Sidebar Styles */
        .portal-sidebar {
          width: 280px;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          position: sticky;
          top: 0;
          height: 100vh;
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          margin-bottom: 3rem;
          color: white;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 16px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          transition: 0.2s;
          text-decoration: none;
        }

        .nav-item:hover, .nav-item.active {
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
        }

        .nav-item.active {
          box-shadow: inset 0 0 15px rgba(59, 130, 246, 0.05);
        }

        .nav-spacer { flex-grow: 1; }

        .nav-item.logout {
          color: #ef4444;
          border: none;
          background: none;
          width: 100%;
          cursor: pointer;
        }

        .nav-item.logout:hover {
          background: rgba(239, 68, 68, 0.1);
        }

        /* Main Content Styles */
        .portal-main {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .portal-header {
          height: 80px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 3rem;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(20px);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          width: 400px;
        }

        .search-bar input {
          background: transparent;
          border: none;
          color: white;
          width: 100%;
          outline: none;
          font-weight: 500;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-left: 2rem;
          border-left: 1px solid var(--border);
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .profile-info .name { font-weight: 700; font-size: 0.9rem; }
        .profile-info .role { font-size: 0.7rem; font-weight: 800; color: var(--primary); opacity: 0.8; }

        .avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), #a855f7);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.8rem;
        }

        .dashboard-content {
          padding: 3rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .welcome-section h1 {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .welcome-section p { color: var(--text-muted); font-weight: 500; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          transition: 0.3s;
        }

        .stat-card:hover { transform: translateY(-5px); border-color: rgba(59, 130, 246, 0.3); }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .stat-data .label { display: block; font-size: 0.75rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
        .stat-data .value { display: block; font-size: 2rem; font-weight: 900; }

        .recent-activity { margin-top: 4rem; }
        .activity-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .activity-header h2 { font-size: 1.5rem; font-weight: 800; }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .item-info { display: flex; align-items: center; gap: 1.5rem; }
        .item-info .title { display: block; font-weight: 700; }
        .item-info .timestamp { display: block; font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem; }

        .text-gradient {
          background: linear-gradient(to right, var(--primary), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .loading-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          font-weight: 900;
          letter-spacing: 0.5em;
          font-size: 0.8rem;
          color: var(--primary);
        }

        .btn-sm { background: var(--primary); color: white; border: none; padding: 0.5rem 1.25rem; border-radius: 10px; font-weight: 700; cursor: pointer; }
      `}</style>
    </div>
  );
}
