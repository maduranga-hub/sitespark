'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Mail, Phone, MessageSquare, Calendar, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from('leads')
        .select(`
          *,
          sites (name)
        `)
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      if (data) setLeads(data);
      setLoading(false);
    };

    fetchLeads();
  }, []);

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    const { error } = await supabase.from('leads').delete().eq('id', id);
    if (!error) {
      setLeads(leads.filter(l => l.id !== id));
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <ArrowLeft size={14} /> Back to Sites
            </Link>
            <h1 style={{ fontSize: '2rem' }}>Inquiry <span className="text-gradient">Leads</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Manage messages from your generated websites.</p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>Gathering leads...</div>
          ) : leads.length === 0 ? (
            <div style={{ padding: '5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📥</div>
              <h3 style={{ marginBottom: '0.5rem' }}>No leads yet</h3>
              <p style={{ color: 'var(--text-muted)' }}>Form submissions from your sites will appear here.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(255,255,255,0.02)' }}>
                    <th style={{ padding: '1.25rem 2rem' }}>SOURCE SITE</th>
                    <th style={{ padding: '1.25rem 2rem' }}>CONTACT INFO</th>
                    <th style={{ padding: '1.25rem 2rem' }}>MESSAGE</th>
                    <th style={{ padding: '1.25rem 2rem' }}>DATE</th>
                    <th style={{ padding: '1.25rem 2rem' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map(lead => (
                    <tr key={lead.id} style={{ borderTop: '1px solid var(--glass-border)' }}>
                      <td style={{ padding: '1.5rem 2rem' }}>
                        <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{lead.sites?.name}</div>
                      </td>
                      <td style={{ padding: '1.5rem 2rem' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{lead.name}</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
                          <Mail size={12} /> {lead.email}
                        </div>
                        {lead.phone && (
                          <div style={{ fontSize: '0.8rem', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                            <Phone size={12} /> {lead.phone}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '1.5rem 2rem', maxWidth: '300px' }}>
                        <div style={{ fontSize: '0.85rem', lineHeight: '1.5', opacity: 0.8 }}>
                          {lead.message}
                        </div>
                      </td>
                      <td style={{ padding: '1.5rem 2rem' }}>
                        <div style={{ fontSize: '0.75rem', opacity: 0.4 }}>
                          {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                      </td>
                      <td style={{ padding: '1.5rem 2rem', textAlign: 'right' }}>
                        <button onClick={() => deleteLead(lead.id)} style={{ padding: '0.5rem', background: 'rgba(255,68,68,0.1)', color: '#ff4444', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
