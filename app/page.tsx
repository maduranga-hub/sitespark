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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Immersive 3D Background */}
        <SparkBackground />

        <div className="section-padding relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase mb-10 text-electric-blue">
              <Sparkles size={12} /> Digital Evolution Engine
            </div>
            <h1 className="header-tight text-6xl md:text-9xl mb-10">
              CRAFTING THE <br /> <span className="text-electric-blue">FUTURE</span> OF DIGITAL.
            </h1>
            <p className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed mb-12">
              From SaaS ecosystems to high-end Graphic Design. We spark your brand's digital evolution through precision engineering and editorial aesthetics.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link href="mailto:info@sitespark.online" className="btn-pill btn-primary flex items-center gap-3">
                Ignite Your Project <ArrowRight size={18} />
              </Link>
              <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-widest">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/5 border-2 border-black" />)}
                </div>
                <span>500+ Businesses Sparked</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="header-tight text-4xl md:text-6xl mb-6">OUR <span className="text-royal-purple italic">FORGE</span>.</h2>
            <p className="text-white/40 text-lg">A precision-engineered toolkit for modern digital dominance.</p>
          </div>
          <Link href="mailto:info@sitespark.online" className="text-[10px] font-black tracking-widest uppercase flex items-center gap-2 hover:text-electric-blue transition-colors">
            Full Capabilities <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${service.span} glass card-glow p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
            >
              <div className={`absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br ${service.color} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:text-electric-blue transition-all duration-500">
                    <service.icon size={28} />
                  </div>
                  {service.badge && (
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-electric-blue text-white rounded-full">{service.badge}</span>
                  )}
                </div>
                <h3 className="font-sora font-black text-3xl mb-4 leading-tight">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">{service.desc}</p>
              </div>

              <div className="mt-12 flex justify-end relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-electric-blue group-hover:border-electric-blue transition-all duration-500">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Showcase */}
      <section id="work" className="bg-white/[0.01] border-y border-white/5">
        <div className="section-padding">
          <div className="max-w-3xl mb-24">
            <h2 className="header-tight text-4xl md:text-7xl mb-6 uppercase">Showcase<span className="text-electric-blue">.</span></h2>
            <p className="text-white/40 text-xl">Elite brands synthesized by SiteSpark.</p>
          </div>

          <div className="grid grid-cols-1 gap-12">
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
                className="group glass card-glow flex flex-col md:flex-row items-center gap-12 p-8 md:p-12"
              >
                <div className="w-full md:w-[45%] aspect-video rounded-3xl overflow-hidden border border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="flex-grow space-y-6">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-electric-blue">{item.tag}</div>
                  <h3 className="header-tight text-4xl md:text-5xl uppercase">{item.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed max-w-md">
                    Comprehensive digital transformation involving bespoke UI/UX architecture and custom-engineered backends.
                  </p>
                  <div className="pt-6">
                    <div className="btn-pill btn-secondary inline-flex items-center gap-3">
                      View Project <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="glass p-16 md:p-32 text-center relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-royal-purple/10 blur-[150px] rounded-full pointer-events-none group-hover:bg-electric-blue/10 transition-colors duration-1000" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="header-tight text-5xl md:text-8xl mb-12">READY TO <span className="text-electric-blue">SPARK</span>?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <Link href="mailto:info@sitespark.online" className="btn-pill bg-white text-black text-xl px-16 py-6 hover:bg-electric-blue hover:text-white">
                LET'S TALK.
              </Link>
              <div className="text-left border-l border-white/10 pl-10 hidden md:block">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Direct Terminal</div>
                <div className="text-lg font-black font-sora tracking-tighter">info@sitespark.online</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 px-8 md:px-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <span className="font-sora font-black text-[10px]">S</span>
            </div>
            <span className="font-sora font-bold text-sm tracking-tighter">SiteSpark.</span>
          </div>
          
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:info@sitespark.online" className="hover:text-white transition-colors">Connect</a>
          </div>

          <div className="text-[10px] font-black text-white/10 tracking-[0.3em] uppercase">
            &copy; {new Date().getFullYear()} REVISION: v2.5.0
          </div>
        </div>
      </footer>
    </div>
  );
}
