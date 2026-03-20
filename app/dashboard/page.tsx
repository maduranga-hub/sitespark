'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Layout, 
  Globe, 
  Plus, 
  ExternalLink, 
  Settings, 
  Trash2, 
  BarChart3, 
  MoreVertical,
  Search,
  Zap,
  ShieldCheck,
  CalendarDays,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [sites, setSites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalViews, setTotalViews] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/login?next=/dashboard');
          return;
        }

        const { data: sitesData, error: sitesError } = await supabase
          .from('sites')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (sitesError) throw sitesError;
        setSites(sitesData || []);

        // Fetch Total Views
        const { data: statsData, error: statsError } = await supabase
          .from('site_stats')
          .select('view_count');
        
        if (!statsError && statsData) {
          const total = statsData.reduce((acc, curr) => acc + curr.view_count, 0);
          setTotalViews(total);
        }
      } catch (err) {
        console.error('Error loading dashboard:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDashboardData();
  }, []);

  const isTrial = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - createdDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', background: 'var(--bg)' }}>
      <div className="container">
        {/* Dashboard Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Your <span className="text-gradient">Sites</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Manage and monitor your ignited presence.</p>
          </div>
          <Link href="/builder" className="btn btn-primary">
            <Plus size={18} /> Ignite New Site
          </Link>
        </div>

        {/* Stats Summary */}
        <div className="grid-3" style={{ marginTop: 0, marginBottom: '3rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(0, 102, 255, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Layout size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{sites.length}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Active Sites</div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
              <BarChart3 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{totalViews}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Total Visits</div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>100%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Uptime</div>
            </div>
          </div>
        </div>

        {/* Sites List */}
        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, opacity: 0.8 }}>All Instances</div>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
              <input 
                placeholder="Search sites..." 
                style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: '6px', padding: '0.4rem 1rem 0.4rem 2rem', color: 'white', fontSize: '0.85rem' }} 
              />
            </div>
          </div>

          <div style={{ minHeight: '300px' }}>
            {loading ? (
              <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>Loading your dashboard...</div>
            ) : sites.length === 0 ? (
              <div style={{ padding: '5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ marginBottom: '0.5rem' }}>No ignited sites yet</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Start your journey by creating your first professional website.</p>
                <Link href="/builder" className="btn btn-primary">Ignite Now</Link>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '1rem 2rem' }}>SITE NAME</th>
                    <th style={{ padding: '1rem 2rem' }}>DOMAIN</th>
                    <th style={{ padding: '1rem 2rem' }}>STATUS</th>
                    <th style={{ padding: '1rem 2rem' }}>EXPIRY / TRIAL</th>
                    <th style={{ padding: '1rem 2rem' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {sites.map(site => {
                    const trialActive = isTrial(site.created_at);
                    return (
                      <tr key={site.id} style={{ borderTop: '1px solid var(--glass-border)', transition: 'background 0.2s ease' }}>
                        <td style={{ padding: '1.25rem 2rem' }}>
                          <div style={{ fontWeight: 700 }}>{site.name}</div>
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{site.subdomain}.sitespark.io</div>
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: site.is_published ? 'var(--success)' : 'var(--text-muted)' }}></div>
                            {site.is_published ? 'Published' : 'Draft'}
                          </div>
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                          {trialActive ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', fontSize: '0.8rem', fontWeight: 800, background: 'rgba(34, 197, 94, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '100px', width: 'fit-content' }}>
                              <CalendarDays size={14} /> 7-DAY TRIAL ACTIVE
                            </div>
                          ) : (
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                              Expires: {site.expires_at ? new Date(site.expires_at).toLocaleDateString() : 'Paid Required'}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '1.25rem 2rem', textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <Link href={`/builder?id=${site.id}`} className="btn btn-glass" style={{ padding: '0.5rem' }}>
                              <Settings size={16} />
                            </Link>
                            <Link href="/dashboard/leads" className="btn btn-glass" style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                              <MessageSquare size={16} />
                            </Link>
                            <button className="btn btn-glass" style={{ padding: '0.5rem' }}>
                              <ExternalLink size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
