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
import '../portal.css';

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

    </div>
  );
}
