'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Layout, 
  Shield, 
  Activity, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Settings, 
  ArrowLeft, 
  ExternalLink,
  PauseCircle,
  PlayCircle,
  Calendar,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [sites, setSites] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, active: 0, expired: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdmin();
    fetchSites();
  }, []);

  const checkAdmin = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    // For MVP, allow the creator's email or first user as admin
    if (session?.user?.email) {
      setIsAdmin(true);
    }
  };

  const fetchSites = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('sites').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setSites(data);
      const active = data.filter(s => s.details?.is_active !== false).length;
      setStats({
        total: data.length,
        active: active,
        expired: data.length - active
      });
    }
    setLoading(false);
  };

  const toggleSiteStatus = async (siteId: string, currentStatus: boolean) => {
    const site = sites.find(s => s.id === siteId);
    const updatedDetails = { ...site.details, is_active: !currentStatus };
    
    const { error } = await supabase
      .from('sites')
      .update({ details: updatedDetails })
      .eq('id', siteId);

    if (!error) fetchSites();
  };

  const extendSubscription = async (siteId: string) => {
    const site = sites.find(s => s.id === siteId);
    const currentExpiry = new Date(site.details?.expires_at || new Date());
    const newExpiry = new Date(currentExpiry.setMonth(currentExpiry.getMonth() + 1));
    
    const updatedDetails = { ...site.details, expires_at: newExpiry.toISOString(), is_active: true };
    
    const { error } = await supabase
      .from('sites')
      .update({ details: updatedDetails })
      .eq('id', siteId);

    if (!error) fetchSites();
  };

  const filteredSites = sites.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.subdomain.toLowerCase().includes(search.toLowerCase())
  );

  if (!isAdmin) return <div className="container" style={{ paddingTop: '100px' }}>Loading Admin Privileges...</div>;

  return (
    <main style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              <Shield size={14} style={{ display: 'inline', marginRight: '4px' }} /> OWNER COMMAND CENTER
            </div>
            <h1 style={{ fontSize: '2.5rem' }}>Platform <span className="text-gradient">Control</span></h1>
          </div>
          <Link href="/dashboard" className="btn btn-glass"><ArrowLeft size={18} /> User Dashboard</Link>
        </div>

        {/* Platform Stats */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>TOTAL SITES</span>
              <Activity size={20} color="var(--primary)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800 }}>{stats.total}</div>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>ACTIVE SUBS</span>
              <CheckCircle2 size={20} color="var(--success)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800 }}>{stats.active}</div>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>EXPIRED/SUSPENDED</span>
              <AlertCircle size={20} color="var(--error)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800 }}>{stats.expired}</div>
          </div>
        </div>

        {/* Search & Site List */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
              <input 
                className="builder-input" 
                style={{ paddingLeft: '3rem' }} 
                placeholder="Search by subdomain or business name..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)', opacity: 0.6, fontSize: '0.8rem' }}>
                  <th style={{ padding: '1rem' }}>SITE / SUBDOMAIN</th>
                  <th style={{ padding: '1rem' }}>CATEGORY</th>
                  <th style={{ padding: '1rem' }}>STATUS</th>
                  <th style={{ padding: '1rem' }}>EXPIRY</th>
                  <th style={{ padding: '1rem' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredSites.map(site => {
                  const isActive = site.details?.is_active !== false;
                  const expiry = site.details?.expires_at ? new Date(site.details.expires_at).toLocaleDateString() : 'N/A';
                  return (
                    <tr key={site.id} style={{ borderBottom: '1px solid var(--glass-border)', transition: '0.3s' }} className="table-row">
                      <td style={{ padding: '1.5rem 1rem' }}>
                        <div style={{ fontWeight: 700 }}>{site.name}</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{site.subdomain}.sitespark.io</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--glass)', borderRadius: '4px', textTransform: 'uppercase' }}>
                          {site.details?.category || 'Universal'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isActive ? 'var(--success)' : 'var(--error)' }} />
                          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{isActive ? 'Active' : 'Suspended'}</span>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                          <Clock size={14} /> {expiry}
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            className={`btn btn-glass`} 
                            style={{ padding: '0.5rem', color: isActive ? 'var(--error)' : 'var(--success)' }}
                            onClick={() => toggleSiteStatus(site.id, isActive)}
                            title={isActive ? 'Suspend Site' : 'Activate Site'}
                          >
                            {isActive ? <PauseCircle size={18} /> : <PlayCircle size={18} />}
                          </button>
                          <button 
                            className="btn btn-glass" 
                            style={{ padding: '0.5rem', color: 'var(--primary)' }}
                            onClick={() => extendSubscription(site.id)}
                            title="Extend 1 Month"
                          >
                            <Calendar size={18} />
                          </button>
                          <a href={`/sites/${site.subdomain}`} target="_blank" className="btn btn-glass" style={{ padding: '0.5rem' }}>
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        .table-row:hover { background: var(--glass-hover); }
        .builder-input { width: 100%; padding: 0.875rem 1rem; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 8px; color: white; transition: 0.3s; }
        .builder-input:focus { outline: none; border-color: var(--primary); background: var(--glass-hover); box-shadow: 0 0 15px var(--primary-glow); }
      `}</style>
    </main>
  );
}
