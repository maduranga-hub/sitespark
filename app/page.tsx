'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Layout, 
  ArrowRight, 
  MousePointer2, 
  Globe, 
  Smartphone,
  Sparkles,
  Layers,
  Cloud,
  Palette,
  Share2,
  Users
} from 'lucide-react';
import Link from 'next/link';
import SparkBackground from '@/components/SparkBackground';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const services = [
    { 
      title: "Web Design & Development", 
      desc: "Custom UI/UX and high-performance architectures.", 
      icon: Layout, 
      color: "from-blue-500/20 to-cyan-500/20",
      span: "col-span-2 row-span-2",
      badge: "Flagship"
    },
    { 
      title: "SAAS Systems", 
      desc: "Scalable cloud ecosystems built for reliability.", 
      icon: Cloud, 
      color: "from-purple-500/20 to-pink-500/20",
      span: "col-span-1 row-span-1"
    },
    { 
      title: "Graphic Design", 
      desc: "Editorial layout, E-Magazines, and print materials.", 
      icon: Palette, 
      color: "from-orange-500/20 to-yellow-500/20",
      span: "col-span-1 row-span-2"
    },
    { 
      title: "Social Media Design", 
      desc: "High-engagement visuals for modern platforms.", 
      icon: Share2, 
      color: "from-green-500/20 to-emerald-500/20",
      span: "col-span-1 row-span-1"
    },
    { 
      title: "Strategy & Growth", 
      desc: "Full-scale brand handling and community strategy.", 
      icon: Users, 
      color: "from-indigo-500/20 to-blue-500/20",
      span: "col-span-2 row-span-1"
    }
  ];

  const showcase = [
    {
      title: "RSA Technical Services",
      tag: "Technical & Maintenance",
      link: "https://rsa-ae.com",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "YouMagazine",
      tag: "Media & Lifestyle",
      link: "https://youmagazine.lk",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Malaka RSA",
      tag: "Enterprise Management",
      link: "https://malaka.rsa-ae.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Immersive 3D Background */}
        <SparkBackground />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-black tracking-widest uppercase mb-8 text-electric-blue">
              <Sparkles size={12} /> Digital Evolution Engine
            </div>
            <h1 className="font-sora font-black text-6xl md:text-8xl header-tight mb-8">
              CRAFTING THE <span className="text-electric-blue">FUTURE</span> OF DIGITAL EXPERIENCES.
            </h1>
            <p className="text-xl text-white/40 max-w-2xl leading-relaxed mb-12">
              From SaaS ecosystems to high-end Graphic Design. We spark your brand's digital evolution through precision engineering and editorial aesthetics.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="mailto:info@sitespark.online" className="px-8 py-4 bg-electric-blue text-white font-black rounded-xl hover:shadow-[0_0_30px_rgba(0,112,243,0.4)] transition-all flex items-center gap-3">
                Ignite Your Project <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-4 text-white/40 text-sm font-bold">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-black" />)}
                </div>
                500+ Businesses Sparked
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-sora font-black text-4xl md:text-5xl tracking-tighter mb-4">OUR SPECIALIZED <span className="text-royal-purple">FORGE</span>.</h2>
              <p className="text-white/40 text-lg">A precision-engineered toolkit for modern digital dominance.</p>
            </div>
            <Link href="mailto:info@sitespark.online" className="text-sm font-bold flex items-center gap-2 hover:text-electric-blue transition-colors">
              VIEW FULL CAPABILITIES <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${service.span} glass glass-hover p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              >
                {/* Background Glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:text-electric-blue transition-colors">
                      <service.icon size={24} />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-white/10 rounded-md border border-white/10">{service.badge}</span>
                    )}
                  </div>
                  <h3 className="font-sora font-black text-2xl mb-4 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">{service.desc}</p>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section id="work" className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-sora font-black text-4xl md:text-5xl tracking-tighter mb-4">PREMIUM <span className="text-electric-blue">SHOWCASE</span>.</h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">Elite brands that have undergone our digital synthesis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcase.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative block rounded-[2.5rem] overflow-hidden border border-white/5"
              >
                <div className="aspect-[4/5] w-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-[10px] font-black uppercase tracking-widest text-electric-blue mb-2">{item.tag}</div>
                  <h3 className="font-sora font-black text-2xl group-hover:text-electric-blue transition-colors">{item.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                    EXPLORE PROJECT <ArrowRight size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-royal-purple/20 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sora font-black text-5xl md:text-7xl tracking-tighter mb-12">READY TO <span className="text-electric-blue">SPARK</span> YOUR NEXT PROJECT?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link href="mailto:info@sitespark.online" className="px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-electric-blue hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-electric-blue/20">
                LET'S TALK.
              </Link>
              <div className="text-left">
                <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Direct Line</div>
                <div className="text-lg font-black font-sora tracking-tighter">info@sitespark.online</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
