'use client';

import { useState } from 'react';
import { 
  Mail, 
  Inbox, 
  Send, 
  Trash2, 
  Star, 
  AlertCircle, 
  Search, 
  Plus, 
  ChevronRight, 
  Clock, 
  Database, 
  ShieldCheck, 
  Zap,
  ArrowLeft,
  CheckCircle2,
  User,
  CalendarDays
} from 'lucide-react';
import Link from 'next/link';

export default function WebmailPage() {
  const [hasAddon, setHasAddon] = useState(false); // Simulated state
  const [selectedMsg, setSelectedMsg] = useState<number | null>(null);
  const [currentTier, setCurrentTier] = useState<{name: string, size: string, isTrial?: boolean}>({ name: 'None', size: '0MB' });

  // Sample Messages
  const messages = [
    { id: 1, sender: 'Nirmal Maduranga', email: 'nirmal@example.com', subject: 'Inquiry about Salon Services', date: '2 hours ago', content: 'Hi, I would like to know more about the premium hair treatment and if you have any slots available for Sunday?', status: 'unread' },
    { id: 2, sender: 'James Wilson', email: 'james@test.com', subject: 'New Lead: Custom Website', date: '5 hours ago', content: 'Looking to build a professional hardware store site. Can we discuss?', status: 'read' },
    { id: 3, sender: 'SiteSpark Support', email: 'system@sitespark.io', subject: 'Your Ignition is Complete', date: '1 day ago', content: 'Congratulations! Your site salon-lanka.sitespark.io is now live.', status: 'read' }
  ];

  const activateTier = (tier: string, size: string, isTrial: boolean = false) => {
    setCurrentTier({ name: tier, size, isTrial });
    setHasAddon(true);
  };

  if (!hasAddon) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
        </div>

        {/* UPSELL HERO */}
        <div className="glass-card" style={{ 
          padding: '4rem', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(99, 102, 241, 0.05))',
          borderRadius: '32px',
          border: '1px solid var(--primary-glow)',
          marginBottom: '4rem'
        }}>
          <div style={{ 
            width: '80px', height: '80px', background: 'rgba(0,102,255,0.1)', borderRadius: '24px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--primary)' 
          }}>
            <Mail size={40} />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Pro <span className="text-gradient">Webmail</span> Add-on</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Give your business the professional edge it deserves with a dedicated email suite on your own domain (e.g. info@yourbusiness.lk).
          </p>

          <div className="grid-4" style={{ gap: '1.5rem', textAlign: 'left' }}>
            {[
              { tier: 'Free', size: '250 MB', price: 'FREE', features: ['Custom info@ address', 'Basic Spam Guard', 'Secure Inbox'], color: 'var(--text-muted)', hasTrial: false },
              { tier: 'Starter', size: '1 GB', price: 'RS 490', features: ['Professional mailbox', 'Ad-free Experience', 'Priority Sending'], color: 'var(--primary)', hasTrial: true },
              { tier: 'Pro', size: '5 GB', price: 'RS 1,490', features: ['5 Dedicated addresses', 'Advanced Security', 'Elite Support'], popular: true, color: 'var(--secondary)', hasTrial: true },
              { tier: 'Enterprise', size: '10 GB', price: 'RS 2,490', features: ['Unlimited addresses', 'Admin Controls', 'Full Backup Suite'], color: '#fff', hasTrial: true }
            ].map((plan, i) => (
              <div key={i} className="glass-card" style={{ 
                padding: '2rem 1.5rem', 
                border: plan.popular ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                background: plan.popular ? 'rgba(0,102,255,0.03)' : 'var(--glass)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--primary)', color: '#fff', fontSize: '0.6rem', fontWeight: 900, padding: '0.3rem 0.8rem', borderRadius: '100px' }}>POPULAR</div>
                )}
                {plan.hasTrial && (
                  <div style={{ fontSize: '0.7rem', color: 'var(--success)', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <CalendarDays size={12} /> 7-DAY FREE TRIAL
                  </div>
                )}
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem', color: plan.color }}>{plan.tier}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{plan.price}<span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{plan.price !== 'FREE' ? '/mo' : ''}</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                   <Database size={14} /> {plan.size} Storage
                </div>
                <div style={{ marginBottom: '2rem', flex: 1 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', marginBottom: '0.6rem', opacity: 0.8 }}>
                      <CheckCircle2 size={12} color="var(--success)" /> {f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => activateTier(plan.tier, plan.size, plan.hasTrial)}
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-glass'}`} 
                  style={{ width: '100%', fontSize: '0.85rem' }}
                >
                  {plan.hasTrial ? 'Start 7-Day Trial' : (plan.price === 'FREE' ? 'Activate Free' : 'Select Plan')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: 'calc(100vh - 100px)', display: 'flex', overflow: 'hidden' }}>
      {/* WEBMAIL SIDEBAR */}
      <div style={{ width: '280px', borderRight: '1px solid var(--glass-border)', padding: '2rem', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.01)' }}>
        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '2.5rem' }}>
          <Plus size={18} /> Compose
        </button>

        <nav style={{ flex: 1 }}>
          {[
            { icon: Inbox, label: 'Inbox', count: 3, active: true },
            { icon: Send, label: 'Sent', count: 0 },
            { icon: Star, label: 'Starred', count: 0 },
            { icon: AlertCircle, label: 'Spam', count: 0 },
            { icon: Trash2, label: 'Trash', count: 0 }
          ].map((item, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '0.8rem 1rem', 
              borderRadius: '12px',
              background: item.active ? 'rgba(0,102,255,0.1)' : 'transparent',
              color: item.active ? 'var(--primary)' : 'var(--text-muted)',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              fontWeight: item.active ? 800 : 500
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <item.icon size={18} /> {item.label}
              </div>
              {item.count > 0 && <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>{item.count}</span>}
            </div>
          ))}
        </nav>

        <div className="glass-card" style={{ padding: '1.25rem', marginTop: 'auto', background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', opacity: 0.5 }}>
             {currentTier.isTrial ? 'TRIAL ACTIVE (' + currentTier.name + ')' : 'STORAGE (' + currentTier.name + ' ' + currentTier.size + ')'}
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', marginBottom: '0.5rem', overflow: 'hidden' }}>
            <div style={{ 
              width: currentTier.name === 'Free' ? '65%' : '12%', 
              height: '100%', 
              background: currentTier.isTrial ? 'var(--success)' : 'var(--primary)' 
            }} />
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600 }}>
            {currentTier.isTrial ? 'Trial ends in 7 days • 612 MB used' : (currentTier.name === 'Free' ? '162 MB used of 250 MB' : '612 MB used of ' + currentTier.size)}
          </div>
        </div>
      </div>

      {/* MESSAGE LIST */}
      <div style={{ flex: 1, borderRight: '1px solid var(--glass-border)', overflowY: 'auto' }}>
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Search size={18} style={{ opacity: 0.3 }} />
          <input type="text" placeholder="Search messages..." style={{ background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '0.9rem', width: '100%' }} />
        </div>

        {messages.map((msg) => (
          <div 
            key={msg.id}
            onClick={() => setSelectedMsg(msg.id)}
            style={{ 
              padding: '1.5rem 2rem', 
              borderBottom: '1px solid rgba(255,255,255,0.03)',
              background: selectedMsg === msg.id ? 'rgba(255,255,255,0.02)' : 'transparent',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {msg.status === 'unread' && (
              <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }} />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: msg.status === 'unread' ? 800 : 500, fontSize: '0.95rem' }}>{msg.sender}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.4 }}>{msg.date}</span>
            </div>
            <div style={{ fontWeight: msg.status === 'unread' ? 700 : 400, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{msg.subject}</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msg.content}</div>
          </div>
        ))}
      </div>

      {/* MESSAGE PREVIEW */}
      <div style={{ flex: 1.5, padding: '3rem', overflowY: 'auto', background: 'rgba(255,255,255,0.01)' }}>
        {selectedMsg ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
              <div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>{messages.find(m => m.id === selectedMsg)?.subject}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{messages.find(m => m.id === selectedMsg)?.sender}</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>{messages.find(m => m.id === selectedMsg)?.email}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-glass" style={{ padding: '0.6rem' }}><Star size={18} /></button>
                <button className="btn-glass" style={{ padding: '0.6rem' }}><Trash2 size={18} /></button>
                <button className="btn-primary" style={{ padding: '0.6rem 2rem' }}>Reply</button>
              </div>
            </div>

            <div style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.8, whiteSpace: 'pre-wrap' }}>
              {messages.find(m => m.id === selectedMsg)?.content}
            </div>
          </div>
        ) : (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.2 }}>
            <Mail size={80} style={{ marginBottom: '2rem' }} />
            <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>Select a message to read</div>
          </div>
        )}
      </div>
    </div>
  );
}
