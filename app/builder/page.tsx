'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Layout, 
  Globe, 
  Type, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Info, 
  Wrench, 
  Image as ImageIcon, 
  MapPin, 
  Users,
  Grid,
  Scissors,
  ShoppingBag,
  Hammer,
  Zap as ZapIcon,
  BookOpen,
  Briefcase,
  Monitor,
  X,
  Plus,
  Zap,
  ShoppingCart,
  Activity,
  Trash2
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ImageUpload from '@/components/ImageUpload';
import SitePreview from '@/components/SitePreview';

const CATEGORIES = [
  { id: 'cleaning', label: 'Cleaning Services', icon: Sparkles },
  { id: 'technical', label: 'Technical & Maintenance', icon: Wrench },
  { id: 'it', label: 'IT Support & Automation', icon: Monitor },
  { id: 'salon', label: 'Salon / Ladies Salon', icon: Scissors },
  { id: 'grocery', label: 'Grocery Store', icon: ShoppingBag },
  { id: 'hardware', label: 'Hardware Store', icon: Hammer },
  { id: 'electrical', label: 'Electrical Shop', icon: ZapIcon },
  { id: 'bookshop', label: 'Bookshop', icon: BookOpen },
  { id: 'agency', label: 'Creative Agency', icon: Briefcase },
  { id: 'other', label: 'Other (Universal)', icon: Grid },
];

function BuilderContent() {
  const [step, setStep] = useState(1);
  const [isIgniting, setIsIgniting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  
  const [formData, setFormData] = useState({
    category: 'cleaning',
    template: 'modern',
    businessName: '',
    subdomain: '',
    customDomain: '',
    logoUrl: '',
    heroTitle: '',
    heroDescription: '',
    whyChooseUs: ['', '', ''],
    aboutProfile: '',
    experienceYears: '',
    teamMembers: '',
    serviceCleaning: '',
    serviceTechnical: '',
    serviceIT: '',
    sections: [
      { id: '1', title: 'Hero', content: 'Main welcome message', type: 'hero', page: 'home' },
      { id: '2', title: 'About', content: 'Brief history', type: 'about', page: 'home' },
      { id: '3', title: 'Services', content: 'What we offer', type: 'services', page: 'home' }
    ],
    portfolioGallery: '',
    clientLogos: '',
    dailyTips: ['', ''],
    email: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    tiktok: '',
    address: '',
    mapEmbedUrl: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    faviconUrl: '',
    primaryColor: '',
    secondaryColor: '',
    fontFamily: 'sans',
    animationsEnabled: true,
    gaId: '',
    fbPixelId: '',
    paypalEmail: ''
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login?next=/builder');
        return;
      }

      if (editId) {
        const { data, error } = await supabase
          .from('sites')
          .select('*')
          .eq('id', editId)
          .single();
        
        if (data && !error) {
          const d = data.details;
          setFormData({
            category: d.category || 'cleaning',
            template: data.template_id || 'modern',
            businessName: data.name || '',
            subdomain: data.subdomain || '',
            customDomain: data.custom_domain || '',
            logoUrl: d.logoUrl || '',
            heroTitle: d.heroTitle || '',
            heroDescription: d.heroDescription || '',
            whyChooseUs: d.whyChooseUs || ['', '', ''],
            aboutProfile: d.about?.profile || '',
            experienceYears: d.about?.experience || '',
            teamMembers: d.about?.team || '',
            serviceCleaning: d.services?.cleaning || '',
            serviceTechnical: d.services?.technical || '',
            serviceIT: d.services?.it || '',
            sections: d.sections?.map((s: any) => ({ ...s, page: s.page || 'home' })) || [
              { id: '1', title: 'Hero', content: 'Main welcome message', type: 'hero', page: 'home' },
              { id: '2', title: 'About', content: 'Brief history', type: 'about', page: 'home' },
              { id: '3', title: 'Services', content: 'What we offer', type: 'services', page: 'home' }
            ],
            portfolioGallery: d.portfolio?.gallery?.join(',') || '',
            clientLogos: d.portfolio?.logos?.join(',') || '',
            dailyTips: d.resources?.tips || ['', ''],
            email: d.contact?.email || '',
            phone: d.contact?.phone || '',
            whatsapp: d.contact?.whatsapp || '',
            facebook: d.contact?.facebook || '',
            instagram: d.contact?.instagram || '',
            linkedin: d.contact?.linkedin || '',
            tiktok: d.contact?.tiktok || '',
            address: d.contact?.address || '',
            mapEmbedUrl: d.contact?.mapUrl || '',
            seoTitle: d.seo?.title || '',
            seoDescription: d.seo?.description || '',
            seoKeywords: d.seo?.keywords || '',
            faviconUrl: d.faviconUrl || '',
            primaryColor: d.theme?.primary || '',
            secondaryColor: d.theme?.secondary || '',
            fontFamily: d.theme?.fontFamily || 'sans',
            animationsEnabled: d.theme?.animationsEnabled !== false,
            gaId: d.analytics?.gaId || '',
            fbPixelId: d.analytics?.fbPixelId || '',
            paypalEmail: d.payment?.paypalEmail || ''
          });
        }
      } else {
        const draft = localStorage.getItem('sitespark_builder_draft');
        if (draft) {
          try {
            setFormData(JSON.parse(draft));
          } catch (e) {
            console.error('Failed to load draft:', e);
          }
        }
      }
    };
    checkAuth();
  }, [editId, router]);

  const updateField = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Auto-fill keywords when category changes
      if (field === 'category') {
        const keywords: any = {
          cleaning: 'residential cleaning, commercial janitorial, deep cleaning, maid service, sparkle clean',
          technical: 'repair service, technical maintenance, equipment repair, on-site support, troubleshooting',
          it: 'software development, cloud solutions, it support, cybersecurity, digital transformation',
          salon: 'hair styling, beauty salon, manicure, pedicure, facial treatment, spa services',
          grocery: 'fresh produce, organic food, daily essentials, convenience store, home delivery',
          hardware: 'building materials, tools, home improvement, paint, plumbing supplies, nuts and bolts',
          electrical: 'electrician services, wiring, electrical repair, solar installation, lighting solutions',
          bookshop: 'bookstore, new arrivals, stationery, educational resources, fiction, non-fiction',
          agency: 'branding, graphic design, social media marketing, web design, ad campaigns',
          other: 'professional services, local business, quality results, expert team, trusted partner'
        };
        newData.seoKeywords = keywords[value] || '';
      }

      // Auto-save to localStorage
      if (!editId) {
        localStorage.setItem('sitespark_builder_draft', JSON.stringify(newData));
      }
      
      return newData;
    });
  };

  const updateArrayField = (field: 'whyChooseUs' | 'dailyTips', index: number, value: string) => {
    const newArr = [...formData[field]];
    newArr[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArr }));
  };

  const generateAIContent = (field: string) => {
    const businessName = formData.businessName || 'our business';
    const category = CATEGORIES.find(cat => cat.id === formData.category)?.label.toLowerCase() || 'general';
    
    const prompts: any = {
      heroTitle: `Empowering ${businessName} with professional ${category} excellence.`,
      heroDescription: `Experience top-tier ${category} solutions tailored for your success. We combine innovation with expertise to deliver results that matter.`,
      aboutProfile: `At ${businessName}, we are dedicated to redefining the standard of ${category} through passion and precision. Our specialized team brings years of industry experience to every project.`
    };

    if (prompts[field]) {
      updateField(field, prompts[field]);
    }
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 10));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const addSection = () => {
    const id = Math.random().toString(36).substr(2, 9);
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { id, title: 'New Section', content: 'Edit me', type: 'text', page: 'home' }]
    }));
  };

  const removeSection = (idToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== idToRemove)
    }));
  };

  const handleIgnite = async () => {
    if (!formData.businessName || !formData.subdomain) {
      alert('Business Name and Subdomain are required.');
      return;
    }

    setIsIgniting(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { error } = await supabase.from('sites').upsert([{
        ...(editId ? { id: editId } : {}),
        name: formData.businessName,
        subdomain: formData.subdomain.toLowerCase().trim().replace(/[^a-z0-9-]/g, ''),
        custom_domain: formData.customDomain.toLowerCase().trim() || null,
        user_id: session?.user?.id,
        template_id: formData.template,
        updated_at: new Date().toISOString(),
        details: {
          category: formData.category,
          logoUrl: formData.logoUrl,
          heroTitle: formData.heroTitle,
          heroDescription: formData.heroDescription,
          whyChooseUs: formData.whyChooseUs.filter(i => i.trim()),
          about: {
            profile: formData.aboutProfile,
            experience: formData.experienceYears,
            team: formData.teamMembers
          },
          services: {
            // These will eventually be deprecated if sections fully replace them
            cleaning: formData.serviceCleaning,
            technical: formData.serviceTechnical,
            it: formData.serviceIT
          },
          sections: formData.sections,
          portfolio: {
            gallery: formData.portfolioGallery.split(',').map(s => s.trim()).filter(s => s),
            logos: formData.clientLogos.split(',').map(s => s.trim()).filter(s => s)
          },
          resources: {
            tips: formData.dailyTips.filter(i => i.trim())
          },
          contact: {
            email: formData.email,
            phone: formData.phone,
            whatsapp: formData.whatsapp,
            facebook: formData.facebook,
            instagram: formData.instagram,
            linkedin: formData.linkedin,
            tiktok: formData.tiktok,
            address: formData.address,
            mapUrl: formData.mapEmbedUrl
          },
          seo: {
            title: formData.seoTitle,
            description: formData.seoDescription,
            keywords: formData.seoKeywords
          },
          theme: {
            primary: formData.primaryColor,
            secondary: formData.secondaryColor,
            fontFamily: formData.fontFamily,
            animationsEnabled: formData.animationsEnabled
          },
          analytics: {
            gaId: formData.gaId,
            fbPixelId: formData.fbPixelId
          },
          payment: {
            paypalEmail: formData.paypalEmail
          },
          faviconUrl: formData.faviconUrl
        }
      }]);

      if (error) throw error;

      // Clear draft after success
      localStorage.removeItem('sitespark_builder_draft');

      alert('🚀 Site Categories & Themes Applied! Redirecting...');
      window.location.href = `/sites/${formData.subdomain.toLowerCase().trim().replace(/[^a-z0-9-]/g, '')}`;
    } catch (err: any) {
      console.error(err);
      alert('Ignition failed: ' + err.message);
    } finally {
      setIsIgniting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Grid size={20} /> 1. Select Business Category</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              {CATEGORIES.map(cat => (
                <div 
                  key={cat.id} 
                  className={`cat-card ${formData.category === cat.id ? 'active' : ''}`}
                  onClick={() => updateField('category', cat.id)}
                >
                  <cat.icon size={24} />
                  <span>{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Layout size={20} /> 2. Choose Layout Style</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div 
                className={`cat-card ${formData.template === 'modern' ? 'active' : ''}`}
                onClick={() => updateField('template', 'modern')}
              >
                <Monitor size={24} />
                <span>Modern Split</span>
              </div>
              <div 
                className={`cat-card ${formData.template === 'minimal' ? 'active' : ''}`}
                onClick={() => updateField('template', 'minimal')}
              >
                <Grid size={24} />
                <span>Minimal Centered</span>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Globe size={20} /> 3. Identity & Branding</h2>
            <div className="form-group">
              <label>BUSINESS NAME</label>
              <input className="builder-input" value={formData.businessName} onChange={e => updateField('businessName', e.target.value)} placeholder="e.g. Spark Cleaners" />
            </div>
            <div className="form-group">
              <label>SUBDOMAIN</label>
              <div style={{ display: 'flex' }}>
                <input className="builder-input" style={{ borderRadius: '8px 0 0 8px' }} value={formData.subdomain} onChange={e => updateField('subdomain', e.target.value)} placeholder="brand" />
                <span className="input-suffix">.sitespark.io</span>
              </div>
            </div>
            <div className="form-group">
              <label>CUSTOM DOMAIN (OPTIONAL)</label>
              <input className="builder-input" value={formData.customDomain} onChange={e => updateField('customDomain', e.target.value)} placeholder="e.g. www.mysite.com" />
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Note: You need to point your A record to our IP to activate this.</p>
            </div>
            <ImageUpload 
              label="BUSINESS LOGO" 
              value={formData.logoUrl} 
              onUpload={url => updateField('logoUrl', url)} 
              onRemove={() => updateField('logoUrl', '')} 
            />
            <ImageUpload 
              label="FAVICON (TAB ICON)" 
              value={formData.faviconUrl} 
              onUpload={url => updateField('faviconUrl', url)} 
              onRemove={() => updateField('faviconUrl', '')} 
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>PRIMARY THEME COLOR</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="color" value={formData.primaryColor || '#000000'} onChange={e => updateField('primaryColor', e.target.value)} style={{ width: '40px', height: '40px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
                  <input className="builder-input" value={formData.primaryColor} onChange={e => updateField('primaryColor', e.target.value)} placeholder="#HEX" />
                </div>
              </div>
              <div className="form-group">
                <label>SECONDARY COLOR</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="color" value={formData.secondaryColor || '#000000'} onChange={e => updateField('secondaryColor', e.target.value)} style={{ width: '40px', height: '40px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
                  <input className="builder-input" value={formData.secondaryColor} onChange={e => updateField('secondaryColor', e.target.value)} placeholder="#HEX" />
                </div>
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '1rem' }}>
              <label>GLOBAL TYPOGRAPHY</label>
              <select className="builder-input" value={formData.fontFamily} onChange={e => updateField('fontFamily', e.target.value)}>
                <option value="sans">Modern Sans (Inter)</option>
                <option value="serif">Elegant Serif (Playfair)</option>
                <option value="mono">Technical (Roboto Mono)</option>
                <option value="display">Bold Display (Outfit)</option>
              </select>
            </div>

            <div className="form-group" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" checked={formData.animationsEnabled} onChange={e => updateField('animationsEnabled', e.target.checked)} id="anim-toggle" style={{ width: '18px', height: '18px' }} />
              <label htmlFor="anim-toggle" style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: '800' }}>ENABLE ENTRANCE ANIMATIONS</label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Type size={20} /> 4. SEO & Visibility</h2>
            <div className="form-group">
              <label>META TITLE (SEO TITLE)</label>
              <input className="builder-input" value={formData.seoTitle} onChange={e => updateField('seoTitle', e.target.value)} placeholder="e.g. Best Cleaning Service in Colombo" />
            </div>
            <div className="form-group">
              <label>META DESCRIPTION</label>
              <textarea className="builder-input" rows={2} value={formData.seoDescription} onChange={e => updateField('seoDescription', e.target.value)} placeholder="A short summary for Google search results..." />
            </div>
            <div className="form-group">
              <label>SEO KEYWORDS (COMMA SEPARATED)</label>
              <input className="builder-input" value={formData.seoKeywords} onChange={e => updateField('seoKeywords', e.target.value)} placeholder="keyword1, keyword2, ..." />
            </div>
          </div>
        );
      case 5: // This was previously a duplicate case 4, now correctly case 5
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Users size={20} /> 5. About Us</h2>
            <div className="form-group">
              <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                COMPANY PROFILE
                <button type="button" onClick={() => generateAIContent('aboutProfile')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={12} /> Spark AI
                </button>
              </label>
              <textarea className="builder-input" rows={4} value={formData.aboutProfile} onChange={e => updateField('aboutProfile', e.target.value)} placeholder="Brief history and mission..." />
            </div>
            <div className="form-group">
              <label>XP / HISTORY</label>
              <input className="builder-input" value={formData.experienceYears} onChange={e => updateField('experienceYears', e.target.value)} placeholder="e.g. 10+ Years in Service" />
            </div>
            <div className="form-group">
              <label>TEAM / LEADERSHIP</label>
              <input className="builder-input" value={formData.teamMembers} onChange={e => updateField('teamMembers', e.target.value)} placeholder="Key members or management info..." />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Wrench size={20} /> 6. Manage Site Sections</h2>
            <div className="form-group">
              <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                HERO TITLE
                <button type="button" onClick={() => generateAIContent('heroTitle')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={12} /> Spark AI
                </button>
              </label>
              <input className="builder-input" value={formData.heroTitle} onChange={e => updateField('heroTitle', e.target.value)} placeholder="Main Value Proposition" />
            </div>
            <div className="form-group">
              <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                HERO DESCRIPTION
                <button type="button" onClick={() => generateAIContent('heroDescription')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={12} /> Spark AI
                </button>
              </label>
              <textarea className="builder-input" rows={3} value={formData.heroDescription} onChange={e => updateField('heroDescription', e.target.value)} placeholder="Elaborate on your offer..." />
            </div>
            <div className="form-group">
              <label>WHY CHOOSE US (LIST 3 POINTS)</label>
              {formData.whyChooseUs.map((p, i) => (
                <input key={i} className="builder-input" style={{ marginBottom: '0.5rem' }} value={p} onChange={e => updateArrayField('whyChooseUs', i, e.target.value)} placeholder={`Reason ${i + 1}`} />
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Wrench size={20} /> 7. Manage Site Sections</h2>
            <div className="grid" style={{ gap: '1rem' }}>
              {formData.sections.map((section: any, index: number) => (
                <div key={section.id} className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--glass-border)' }}>
                      <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', color: 'var(--primary)' }}><Activity size={16} /></div>
                      <div style={{ flex: 1 }}>
                        <input 
                          className="builder-input" 
                          style={{ margin: 0, padding: '0.2rem 0.5rem', background: 'transparent', border: 'none', fontWeight: 700 }} 
                          value={section.title} 
                          onChange={e => {
                            const newSections = [...formData.sections];
                            newSections[index].title = e.target.value;
                            setFormData(prev => ({ ...prev, sections: newSections }));
                          }}
                        />
                        <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                          <select 
                            style={{ background: 'var(--bg)', border: '1px solid var(--glass-border)', color: 'black', fontSize: '0.7rem', borderRadius: '4px', padding: '2px 5px' }}
                            value={section.page}
                            onChange={e => {
                              const newSections = [...formData.sections];
                              newSections[index].page = e.target.value;
                              setFormData(prev => ({ ...prev, sections: newSections }));
                            }}
                          >
                            <option value="home">Home Page</option>
                            <option value="about">About Page</option>
                            <option value="services">Services Page</option>
                            <option value="gallery">Gallery Page</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button className="btn btn-glass" style={{ padding: '0.4rem' }} onClick={() => removeSection(section.id)}><Trash2 size={14} /></button>
                      </div>
                    </div>
              ))}
              <button 
                type="button" 
                className="btn btn-glass" 
                style={{ width: '100%', borderStyle: 'dashed' }}
                onClick={addSection}
              >
                <Plus size={16} /> Add New Section
              </button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><ImageIcon size={20} /> 8. Portfolio & Resources</h2>
            <div className="form-group">
              <label>GALLERY IMAGES</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
                {formData.portfolioGallery.split(',').filter(s => s).map((url, i) => (
                  <div key={i} style={{ position: 'relative', height: '100px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Gallery" />
                    <button type="button" className="remove-btn-small" onClick={() => {
                      const urls = formData.portfolioGallery.split(',').filter(s => s);
                      urls.splice(i, 1);
                      updateField('portfolioGallery', urls.join(','));
                    }}><X size={12} /></button>
                  </div>
                ))}
                <ImageUpload onUpload={url => {
                  const urls = formData.portfolioGallery.split(',').filter(s => s);
                  urls.push(url);
                  updateField('portfolioGallery', urls.join(','));
                }} />
              </div>
            </div>
            <div className="form-group">
              <label>CLIENT LOGOS</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '0.5rem' }}>
                {formData.clientLogos.split(',').filter(s => s).map((url, i) => (
                  <div key={i} style={{ position: 'relative', height: '60px', borderRadius: '8px', overflow: 'hidden', background: 'white', padding: '5px' }}>
                    <img src={url} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Client" />
                    <button type="button" className="remove-btn-small" onClick={() => {
                      const urls = formData.clientLogos.split(',').filter(s => s);
                      urls.splice(i, 1);
                      updateField('clientLogos', urls.join(','));
                    }}><X size={12} /></button>
                  </div>
                ))}
                <ImageUpload onUpload={url => {
                  const urls = formData.clientLogos.split(',').filter(s => s);
                  urls.push(url);
                  updateField('clientLogos', urls.join(','));
                }} />
              </div>
            </div>
            <div className="form-group">
              <label>DAILY TIPS / INSIGHTS (LIST 2)</label>
              {formData.dailyTips.map((p, i) => (
                <input key={i} className="builder-input" style={{ marginBottom: '0.5rem' }} value={p} onChange={e => updateArrayField('dailyTips', i, e.target.value)} placeholder={`Tip ${i + 1}`} />
              ))}
            </div>
          </div>
        );
      case 9:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><MapPin size={20} /> 9. Contact & Socials</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>WHATSAPP NO</label>
                <input className="builder-input" value={formData.whatsapp} onChange={e => updateField('whatsapp', e.target.value)} placeholder="947..." />
              </div>
              <div className="form-group">
                <label>PHONE</label>
                <input className="builder-input" value={formData.phone} onChange={e => updateField('phone', e.target.value)} placeholder="+94..." />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>FACEBOOK URL</label>
                <input className="builder-input" value={formData.facebook} onChange={e => updateField('facebook', e.target.value)} placeholder="https://facebook.com/..." />
              </div>
              <div className="form-group">
                <label>INSTAGRAM URL</label>
                <input className="builder-input" value={formData.instagram} onChange={e => updateField('instagram', e.target.value)} placeholder="https://instagram.com/..." />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>LINKEDIN URL</label>
                <input className="builder-input" value={formData.linkedin} onChange={e => updateField('linkedin', e.target.value)} placeholder="https://linkedin.com/..." />
              </div>
              <div className="form-group">
                <label>TIKTOK URL</label>
                <input className="builder-input" value={formData.tiktok} onChange={e => updateField('tiktok', e.target.value)} placeholder="https://tiktok.com/..." />
              </div>
            </div>
            <div className="form-group">
              <label>BUSINESS ADDRESS</label>
              <textarea className="builder-input" rows={2} value={formData.address} onChange={e => updateField('address', e.target.value)} placeholder="Physical location..." />
            </div>
            <div className="form-group">
              <label>GOOGLE MAP EMBED URL</label>
              <input className="builder-input" value={formData.mapEmbedUrl} onChange={e => updateField('mapEmbedUrl', e.target.value)} placeholder="https://google.com/maps/embed?pb=..." />
            </div>
          </div>
        );
      case 10:
        return (
          <div className="animate-fade-in">
            <h2 className="step-title"><Zap size={20} /> 10. Marketing & Payments</h2>
            <div className="grid" style={{ gap: '1.5rem' }}>
              <div className="form-group">
                <label>GOOGLE ANALYTICS ID (G-XXXX)</label>
                <input className="builder-input" value={formData.gaId} onChange={e => updateField('gaId', e.target.value)} placeholder="G-XXXXXXXXXX" />
              </div>
              <div className="form-group">
                <label>FACEBOOK PIXEL ID</label>
                <input className="builder-input" value={formData.fbPixelId} onChange={e => updateField('fbPixelId', e.target.value)} placeholder="ID from FB Events Manager" />
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <ShoppingCart size={20} color="var(--primary)" />
                  <span style={{ fontWeight: 800 }}>E-COMMERCE LITE</span>
                </div>
                <div className="form-group">
                  <label>PAYPAL EMAIL (FOR DONATIONS/PAYMENTS)</label>
                  <input className="builder-input" value={formData.paypalEmail} onChange={e => updateField('paypalEmail', e.target.value)} placeholder="your@paypal.com" />
                  <p style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '0.5rem' }}>This adds a 'Buy/Support' button to your site footer or services.</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="premium-dark" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Left Side: Form */}
        <div style={{ flex: '1', overflowY: 'auto', padding: '120px 2rem 60px', borderRight: '1px solid var(--glass-border)' }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Site <span className="text-gradient">Ignition</span></h1>
              <p style={{ color: 'var(--text-muted)' }}>Universal Theme Engine for All Business Types.</p>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              {/* Progress */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                  <div key={i} style={{ height: '4px', flex: 1, background: i <= step ? 'var(--primary)' : 'var(--glass-border)', borderRadius: '2px' }} />
                ))}
              </div>

              <form onSubmit={e => e.preventDefault()}>
                {renderStep()}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                  <button type="button" className="btn btn-glass" onClick={prevStep} style={{ visibility: step === 1 ? 'hidden' : 'visible' }} disabled={isIgniting}>
                    <ArrowLeft size={18} /> Back
                  </button>
                  
                  {step < 10 ? (
                    <button type="button" className="btn btn-primary" onClick={nextStep}>
                      Next Step <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary" style={{ background: 'var(--success)' }} onClick={handleIgnite} disabled={isIgniting}>
                      {isIgniting ? 'Igniting...' : <><Sparkles size={18} /> Ignite Full Site</>}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Version Number */}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>
                Site Spark Engine v2.0.4-premium
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Live Preview */}
        <div className="preview-container" style={{ flex: '1.2', background: '#000', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', bottom: '20px', border: '1px solid rgba(255,255,255,0.1)', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ height: '40px', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div style={{ flex: 1, background: '#fff', height: '24px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', padding: '0 0.5rem', color: '#64748b' }}>
                {formData.subdomain || 'brand'}.sitespark.io
              </div>
            </div>
            <div style={{ height: 'calc(100% - 40px)', background: '#fff' }}>
              <SitePreview formData={formData} />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .step-title { font-size: 1.5rem; margin-bottom: 2rem; color: var(--primary); display: flex; align-items: center; gap: 0.75rem; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; font-size: 0.75rem; font-weight: 800; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em; }
        
        /* Dark Theme Fixes */
        .premium-dark .builder-input, 
        .premium-dark input, 
        .premium-dark textarea, 
        .premium-dark select { 
          color: #ffffff !important; 
          font-family: inherit; 
          font-size: 1rem; 
          transition: var(--transition); 
        }
        
        .premium-dark .builder-input, 
        .premium-dark input:not([type="color"]), 
        .premium-dark textarea, 
        .premium-dark select { 
          width: 100%; 
          padding: 0.875rem 1rem; 
          background: rgba(255, 255, 255, 0.05) !important; 
          border: 1px solid rgba(255, 255, 255, 0.1) !important; 
          border-radius: 12px; 
        }
        
        .premium-dark .input-suffix { 
          background: rgba(255, 255, 255, 0.08); 
          padding: 0.875rem 1rem; 
          border: 1px solid rgba(255, 255, 255, 0.1); 
          border-left: none; 
          border-radius: 0 12px 12px 0; 
          color: var(--text-muted); 
          font-size: 0.9rem; 
        }
        
        .premium-dark .builder-input:focus, 
        .premium-dark input:focus, 
        .premium-dark textarea:focus, 
        .premium-dark select:focus { 
          outline: none; 
          border-color: var(--primary) !important; 
          background: rgba(255, 255, 255, 0.08) !important; 
          box-shadow: 0 0 15px var(--primary-glow) !important; 
        }
        
        .premium-dark .cat-card { 
          background: rgba(255, 255, 255, 0.02); 
          border: 1px solid rgba(255, 255, 255, 0.05); 
          border-radius: 16px; 
          padding: 1.5rem; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center; 
          gap: 0.75rem; 
          cursor: pointer; 
          transition: var(--transition); 
          text-align: center; 
          color: var(--text-muted);
        }
        
        .premium-dark .cat-card:hover { 
          border-color: rgba(255, 255, 255, 0.1); 
          background: rgba(255, 255, 255, 0.04); 
          transform: translateY(-3px); 
          color: white;
        }
        
        .premium-dark .cat-card.active { 
          border-color: var(--primary); 
          background: rgba(0, 102, 255, 0.1); 
          color: var(--primary); 
          box-shadow: 0 0 15px var(--primary-glow); 
        }
        
        .premium-dark .cat-card span { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
        .remove-btn-small { position: absolute; top: 4px; right: 4px; width: 20px; height: 20px; background: rgba(255,0,0,0.8); border: none; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; }
      `}</style>
    </main>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>Loading Builder...</div>}>
      <BuilderContent />
    </Suspense>
  );
}
