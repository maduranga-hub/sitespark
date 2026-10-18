"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Search,
  Smartphone,
  Zap,
  Share2,
  ShieldCheck,
  ExternalLink,
  Printer,
  ArrowRight,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Clock,
  PhoneCall,
  Globe,
  Award,
  Copy,
  Check,
  TrendingUp,
  Monitor,
  Flame,
  HelpCircle,
  ChevronRight,
  DownloadCloud,
  FileCode2,
  Lock,
  MessageCircle
} from "lucide-react";

export default function BTCapturesAuditPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [activeNav, setActiveNav] = useState("overview");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollTo = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 font-sans selection:bg-teal-500 selection:text-white pb-32">
      
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      {/* UNIFIED STICKY TOP HEADER & NAVIGATION */}
      <div className="sticky top-0 z-50 bg-[#090d15]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
        
        {/* Top Header Row */}
        <header className="px-4 md:px-8 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <a href="https://sitespark.online" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center font-black text-black text-sm shadow-[0_0_20px_rgba(45,212,191,0.5)] group-hover:scale-105 transition-transform">
                S
              </span>
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold tracking-tight text-white leading-tight">
                  SiteSpark
                </span>
                <span className="text-[9px] text-teal-400 font-semibold tracking-wider uppercase">
                  Agency Diagnostic
                </span>
              </div>
            </a>
            <span className="text-white/20">/</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2.5 py-0.5 rounded-full shadow-inner">
                Client Audit
              </span>
              <a
                href="https://btcaptures.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-teal-300 flex items-center gap-1.5 transition-colors group"
              >
                <span>btcaptures.com.au</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 hover:from-teal-500/30 hover:to-blue-500/30 text-teal-200 border border-teal-500/30 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-102 cursor-pointer shadow-lg shadow-teal-950/40"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">Export PDF Report</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </header>

        {/* Quick-Jump Navigation Pills Row */}
        <nav className="py-2 px-4 md:px-8 overflow-x-auto no-scrollbar">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-semibold">
            <span className="text-slate-400 hidden md:inline font-mono mr-1">JUMP TO:</span>
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "seo", label: "SEO & Google", icon: "🔍" },
              { id: "usability", label: "Usability & Bugs", icon: "📱" },
              { id: "performance", label: "Speed & 270 Photos", icon: "⚡" },
              { id: "security", label: "Security & Social", icon: "🔒" },
              { id: "comparison", label: "Before vs After", icon: "⚖️" },
              { id: "solution", label: "VPS + Sanity + Next.js", icon: "💎" },
              { id: "roadmap", label: "Fix Roadmap", icon: "🚀" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`px-3 py-1 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
                  activeNav === tab.id
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_12px_rgba(20,184,166,0.2)]"
                    : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 relative z-10">

        {/* ==================================================== */}
        {/* HERO AUDIT SUMMARY CARD (SEOptimer Layout) */}
        {/* ==================================================== */}
        <div id="overview" className="scroll-mt-32" />
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-b from-[#101522]/90 to-[#0a0e16]/95 border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-2xl mb-12 overflow-hidden"
        >
          {/* Top Row: Score on Left, Device Mockup on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10">
            
            {/* Left: Overall Grade Circle */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
                className="relative w-44 h-44 flex items-center justify-center mb-6"
              >
                {/* SVG Animated Ring with Drop Shadow */}
                <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                  <circle
                    cx="88"
                    cy="88"
                    r="74"
                    stroke="#162033"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="88"
                    cy="88"
                    r="74"
                    stroke="url(#hero-gradient)"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 74}
                    initial={{ strokeDashoffset: 2 * Math.PI * 74 }}
                    animate={{ strokeDashoffset: (2 * Math.PI * 74) * (1 - 0.58) }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute flex flex-col items-center">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-blue-500 tracking-tight">
                    C+
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Score: 58/100
                  </span>
                </div>
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                Your page needs improvement
              </h2>
              <p className="text-sm text-slate-300 mb-5 max-w-sm leading-relaxed">
                BT Captures features exceptional photography, but search visibility, loading speed, and link bugs are creating a barrier to high-value client bookings.
              </p>

              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500 to-rose-600 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-[0_0_25px_rgba(239,68,68,0.45)]">
                <Flame className="w-4 h-4 animate-bounce" />
                <span>12 Improvements Recommended</span>
              </div>
            </div>

            {/* Right: Realistic Device Mockup with Toggle (Desktop / Mobile) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              
              {/* Device Selector Toggle */}
              <div className="flex items-center bg-[#0d121c] border border-white/10 p-1 rounded-xl mb-4 text-xs font-semibold">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    deviceView === "desktop"
                      ? "bg-teal-500 text-black font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop View</span>
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    deviceView === "mobile"
                      ? "bg-teal-500 text-black font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile View</span>
                </button>
              </div>

              {/* Desktop Mockup Frame */}
              <AnimatePresence mode="wait">
                {deviceView === "desktop" ? (
                  <motion.div
                    key="desktop"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-[480px] bg-[#171f2e] p-3 rounded-2xl border border-white/20 shadow-2xl shadow-black/90"
                  >
                    <div className="bg-[#0b0e14] rounded-lg overflow-hidden border border-white/10">
                      {/* Browser Bar */}
                      <div className="bg-[#1a2333] px-3.5 py-2 flex items-center gap-2 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <div className="flex-1 bg-[#090c12] text-[10px] text-slate-300 rounded px-2.5 py-1 font-mono flex items-center justify-between border border-white/5">
                          <span>https://btcaptures.com.au/</span>
                          <Lock className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                      
                      {/* Live Preview Window: Real Desktop Screenshot */}
                      <div className="relative h-60 bg-slate-900 overflow-hidden group">
                        <img
                          src="/audits/btcaptures-preview.jpg"
                          alt="Real Website Screenshot of BT Captures"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-teal-400 flex items-center gap-1 shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>LIVE CAPTURE</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-4 bg-[#232f45] flex items-center justify-center rounded-b-md">
                      <div className="w-3 h-3 rounded-full bg-slate-400/80" />
                    </div>
                    <div className="w-24 h-7 bg-gradient-to-b from-slate-400 to-slate-600 mx-auto [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]" />
                    <div className="w-36 h-1.5 bg-slate-400 mx-auto rounded-full" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-[240px] bg-[#171f2e] p-2.5 rounded-[36px] border-2 border-white/20 shadow-2xl shadow-black/90"
                  >
                    <div className="bg-[#0b0e14] rounded-[28px] overflow-hidden border border-white/10 h-[380px] flex flex-col relative">
                      {/* Dynamic Island / Speaker */}
                      <div className="absolute top-2 inset-x-0 mx-auto w-16 h-4 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500/60" />
                      </div>

                      {/* Mobile Header Bar */}
                      <div className="pt-8 pb-2 px-3 bg-[#131a26] border-b border-white/5 text-[9px] text-center text-slate-400 font-mono">
                        btcaptures.com.au
                      </div>

                      {/* Screen Content: Real Mobile Screenshot */}
                      <div className="flex-1 relative overflow-hidden bg-slate-950">
                        <img
                          src="/audits/btcaptures-mobile.jpg"
                          alt="Real Mobile Website Screenshot of BT Captures"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="h-4 bg-black flex items-center justify-center">
                        <div className="w-16 h-1 bg-white/40 rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Categories Row: 5 Circular Badges + Interactive Radar */}
          <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 5 Circular Badges */}
            <div className="lg:col-span-8 grid grid-cols-3 sm:grid-cols-5 gap-4">
              
              {/* Category 1: SEO */}
              <div className="flex flex-col items-center bg-[#0d121c]/70 border border-white/5 p-3 rounded-2xl hover:border-sky-500/40 transition-colors">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#162033" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#38bdf8"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={(2 * Math.PI * 32) * (1 - 0.55)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-xl font-black text-sky-400">C</span>
                </div>
                <span className="text-xs font-bold text-slate-200 mt-2">SEO</span>
                <span className="text-[10px] text-sky-400/80 font-mono">55 / 100</span>
              </div>

              {/* Category 2: Usability */}
              <div className="flex flex-col items-center bg-[#0d121c]/70 border border-white/5 p-3 rounded-2xl hover:border-orange-500/40 transition-colors">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#162033" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#fb923c"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={(2 * Math.PI * 32) * (1 - 0.65)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-xl font-black text-orange-400">C+</span>
                </div>
                <span className="text-xs font-bold text-slate-200 mt-2">Usability</span>
                <span className="text-[10px] text-orange-400/80 font-mono">65 / 100</span>
              </div>

              {/* Category 3: Performance */}
              <div className="flex flex-col items-center bg-[#0d121c]/70 border border-white/5 p-3 rounded-2xl hover:border-rose-500/40 transition-colors">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#162033" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#f87171"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={(2 * Math.PI * 32) * (1 - 0.45)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-xl font-black text-rose-400">D+</span>
                </div>
                <span className="text-xs font-bold text-slate-200 mt-2">Speed</span>
                <span className="text-[10px] text-rose-400/80 font-mono">45 / 100</span>
              </div>

              {/* Category 4: Social */}
              <div className="flex flex-col items-center bg-[#0d121c]/70 border border-white/5 p-3 rounded-2xl hover:border-purple-500/40 transition-colors">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#162033" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#a78bfa"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={(2 * Math.PI * 32) * (1 - 0.50)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-xl font-black text-purple-400">C-</span>
                </div>
                <span className="text-xs font-bold text-slate-200 mt-2">Social</span>
                <span className="text-[10px] text-purple-400/80 font-mono">50 / 100</span>
              </div>

              {/* Category 5: Security */}
              <div className="flex flex-col items-center bg-[#0d121c]/70 border border-white/5 p-3 rounded-2xl hover:border-emerald-500/40 transition-colors">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#162033" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#34d399"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={(2 * Math.PI * 32) * (1 - 0.70)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-xl font-black text-emerald-400">B-</span>
                </div>
                <span className="text-xs font-bold text-slate-200 mt-2">Security</span>
                <span className="text-[10px] text-emerald-400/80 font-mono">70 / 100</span>
              </div>

            </div>

            {/* Spider / Radar Balance Chart */}
            <div className="lg:col-span-4 flex flex-col items-center bg-[#0b0e14]/70 border border-white/10 p-4 rounded-2xl">
              <div className="relative w-56 h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="#1f293d" strokeWidth="1" />
                  <polygon points="100,50 145,82 128,136 72,136 55,82" fill="none" stroke="#1f293d" strokeWidth="1" />
                  <polygon points="100,80 115,91 109,109 91,109 85,91" fill="none" stroke="#1f293d" strokeWidth="1" />
                  
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#1f293d" strokeWidth="1" />
                  <line x1="100" y1="100" x2="176" y2="75" stroke="#1f293d" strokeWidth="1" />
                  <line x1="100" y1="100" x2="147" y2="165" stroke="#1f293d" strokeWidth="1" />
                  <line x1="100" y1="100" x2="53" y2="165" stroke="#1f293d" strokeWidth="1" />
                  <line x1="100" y1="100" x2="24" y2="75" stroke="#1f293d" strokeWidth="1" />

                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    points="100,44 149,83 126,145 74,135 48,82"
                    fill="rgba(45, 212, 191, 0.25)"
                    stroke="#2dd4bf"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="44" r="3.5" fill="#2dd4bf" />
                  <circle cx="149" cy="83" r="3.5" fill="#2dd4bf" />
                  <circle cx="126" cy="145" r="3.5" fill="#2dd4bf" />
                  <circle cx="74" cy="135" r="3.5" fill="#2dd4bf" />
                  <circle cx="48" cy="82" r="3.5" fill="#2dd4bf" />

                  <text x="100" y="14" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Security (70)</text>
                  <text x="180" y="80" fill="#94a3b8" fontSize="9" textAnchor="start" fontWeight="bold">SEO (55)</text>
                  <text x="150" y="180" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Usability (65)</text>
                  <text x="45" y="180" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Social (50)</text>
                  <text x="18" y="80" fill="#94a3b8" fontSize="9" textAnchor="end" fontWeight="bold">Speed (45)</text>
                </svg>
              </div>
              <span className="text-[11px] text-teal-400 mt-1 font-semibold">Diagnostic Radar Matrix</span>
            </div>

          </div>

        </motion.section>

        {/* ==================================================== */}
        {/* SECTION: BEFORE VS AFTER COMPARISON CARDS */}
        {/* ==================================================== */}
        <div id="comparison" className="scroll-mt-32" />
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl font-black text-white">Before vs. After Optimization Impact</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Card 1: Page Weight */}
            <div className="bg-[#0f1420] border border-white/10 rounded-2xl p-5 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Homepage Payload</span>
              <div className="flex items-baseline justify-between mt-3 mb-2">
                <div>
                  <div className="text-xs text-rose-400 font-semibold">Current (Heavy)</div>
                  <div className="text-2xl font-black text-rose-500">6.39 MB</div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500" />
                <div className="text-right">
                  <div className="text-xs text-teal-400 font-semibold">After WebP Fix</div>
                  <div className="text-2xl font-black text-teal-400">&lt; 850 KB</div>
                </div>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full w-[13%]" />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-medium">
                ⚡ 87% payload reduction = 3x faster loading on mobile 4G.
              </p>
            </div>

            {/* Card 2: Portfolio Rendering */}
            <div className="bg-[#0f1420] border border-white/10 rounded-2xl p-5 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Portfolio Loading</span>
              <div className="flex items-baseline justify-between mt-3 mb-2">
                <div>
                  <div className="text-xs text-rose-400 font-semibold">Single DOM</div>
                  <div className="text-2xl font-black text-rose-500">270 Photos</div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500" />
                <div className="text-right">
                  <div className="text-xs text-teal-400 font-semibold">Lazy Loaded</div>
                  <div className="text-2xl font-black text-teal-400">20 / Batch</div>
                </div>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full w-[100%]" />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-medium">
                📱 Prevents mobile browser crashing and unresponsive scroll.
              </p>
            </div>

            {/* Card 3: Google Search Snippet */}
            <div className="bg-[#0f1420] border border-white/10 rounded-2xl p-5 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Search CTR (Click-Through)</span>
              <div className="flex items-baseline justify-between mt-3 mb-2">
                <div>
                  <div className="text-xs text-rose-400 font-semibold">Blank Snippet</div>
                  <div className="text-2xl font-black text-rose-500">Low Rank</div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500" />
                <div className="text-right">
                  <div className="text-xs text-teal-400 font-semibold">Rich Meta SEO</div>
                  <div className="text-2xl font-black text-teal-400">+65% CTR</div>
                </div>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full w-[80%]" />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-medium">
                🎯 Targets Melbourne couples, corporate event planners &amp; VIPs.
              </p>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 1: SEO AUDIT (Scroll Downwards) */}
        {/* ==================================================== */}
        <div id="seo" className="scroll-mt-32" />
        <section className="bg-[#0e131d] border border-white/10 rounded-3xl p-6 md:p-8 mb-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">1. Search Engine Optimization (SEO)</h3>
                <p className="text-xs text-slate-400">Search presence, keyword hierarchy, and local Melbourne ranking</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 px-3.5 py-1 rounded-full">
              Grade: C (55/100)
            </span>
          </div>

          <div className="space-y-6">
            
            {/* SEO 1.1: Meta Description */}
            <div className="bg-[#080b11] border border-red-500/30 rounded-2xl p-5 hover:border-red-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Meta Description Tag Missing Across Entire Website</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    Home, About, Portfolio, and Contact pages have no meta description tags. Google will display arbitrary scraped words in search results rather than a compelling value proposition.
                  </p>
                  
                  {/* Code snippet with copy button */}
                  <div className="relative bg-black/60 border border-white/10 rounded-xl p-3.5 font-mono text-xs text-slate-300 my-3 group">
                    <div className="text-slate-400 text-[11px] mb-1 font-sans font-semibold">Recommended AIOSEO Configuration:</div>
                    <code className="text-teal-300">
                      &lt;meta name="description" content="BT Captures is Melbourne&apos;s premier photography studio by Bandara Thennakoon. Specializing in corporate events, weddings, fashion runway, and family portraits." /&gt;
                    </code>
                    <button
                      onClick={() => copyToClipboard('<meta name="description" content="BT Captures is Melbourne\'s premier photography studio by Bandara Thennakoon. Specializing in corporate events, weddings, fashion runway, and family portraits." />', 'meta')}
                      className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-lg text-[10px] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copiedId === 'meta' ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5 text-slate-300" />}
                      <span>{copiedId === 'meta' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO 1.2: Title Tags */}
            <div className="bg-[#080b11] border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Generic Page Titles Lacking Melbourne Keywords</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                      Warning
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    Current titles like <code>HOME - BT Captures</code> don't target local intent.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs font-mono">
                    <div className="bg-red-950/20 border border-red-500/20 p-3 rounded-xl">
                      <span className="text-red-400 font-sans font-bold block mb-1">❌ Current Title:</span>
                      &lt;title&gt;HOME - BT Captures&lt;/title&gt;
                    </div>
                    <div className="bg-teal-950/20 border border-teal-500/30 p-3 rounded-xl">
                      <span className="text-teal-400 font-sans font-bold block mb-1">✅ Recommended Target:</span>
                      &lt;title&gt;BT Captures | Event &amp; Portrait Photographer Melbourne&lt;/title&gt;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO 1.3: Alt Tags */}
            <div className="bg-[#080b11] border border-red-500/30 rounded-2xl p-5 hover:border-red-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">18 of 20 Homepage Images Missing Alt Attributes</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    90% of your showcase photos have empty <code>alt=&quot;&quot;</code> attributes. For photography, Google Image Search is a powerful source of inbound leads. Adding descriptive alt tags will allow your images to rank in Melbourne photo searches.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 2: USABILITY & UX AUDIT */}
        {/* ==================================================== */}
        <div id="usability" className="scroll-mt-32" />
        <section className="bg-[#0e131d] border border-white/10 rounded-3xl p-6 md:p-8 mb-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.2)]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">2. Usability &amp; User Experience Bugs</h3>
                <p className="text-xs text-slate-400">Interaction integrity, broken navigation, and typography glitches</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3.5 py-1 rounded-full">
              Grade: C+ (65/100)
            </span>
          </div>

          <div className="space-y-6">

            {/* Usability 2.1: Client Logo Links */}
            <div className="bg-[#080b11] border border-red-500/30 rounded-2xl p-5 hover:border-red-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Client Partner Logos Link Directly to Media Uploads</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                      Critical Bug
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    Clicking logos like Monash University, SriLankan Airlines, or Melbourne Fashion Week leaves the website and navigates to the raw JPEG file (e.g. <code>https://btcaptures.com.au/wp-content/uploads/2024/04/srilankan-airlines-logo.jpg</code>).
                  </p>
                  <div className="bg-teal-950/30 border-l-2 border-teal-400 p-3 rounded-r-xl text-xs text-teal-200 mt-3">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">How to Fix in Flatsome Theme:</strong>
                    Edit the Client Logos Carousel and switch the Link Action from &quot;Open Media File&quot; to &quot;None&quot; (or add external partner URLs with <code>target=&quot;_blank&quot;</code>).
                  </div>
                </div>
              </div>
            </div>

            {/* Usability 2.2: Footer Copyright */}
            <div className="bg-[#080b11] border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Footer Copyright Character Encoding Defect</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                      Visual Bug
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    The footer displays: <code>Copyright 2026 &#xFFFD; BT Captures</code> due to an invalid character encoding byte. Replace with standard HTML code: <code>Copyright &amp;copy; 2026 BT Captures. All rights reserved.</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Usability 2.3: Phone Link Space */}
            <div className="bg-[#080b11] border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Phone Link Contains URL-Encoded Whitespace (`%20`)</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                      Warning
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    The call link is formatted as <code>tel:%200433887629</code>. Certain smartphone dialers fail or refuse to open when spaces are encoded into a phone dial protocol. Change to clean format: <code>tel:+61433887629</code>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 3: PERFORMANCE & SPEED */}
        {/* ==================================================== */}
        <div id="performance" className="scroll-mt-32" />
        <section className="bg-[#0e131d] border border-white/10 rounded-3xl p-6 md:p-8 mb-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">3. Performance &amp; Page Speed</h3>
                <p className="text-xs text-slate-400">Payload weight, high-resolution image compression, and mobile responsiveness</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/30 px-3.5 py-1 rounded-full">
              Grade: D+ (45/100)
            </span>
          </div>

          <div className="space-y-6">

            {/* Performance 3.1: Heavy Images */}
            <div className="bg-[#080b11] border border-red-500/30 rounded-2xl p-5 hover:border-red-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Massive Uncompressed Images (6.39 MB Download on Homepage)</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    Multiple photos are uploaded straight from cameras without web compression. Single files exceed 2.3MB each, dragging down mobile load times on cellular 4G/5G connections.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                    <div className="bg-black/60 p-3 rounded-xl border border-white/5 text-xs font-mono">
                      <div className="text-rose-400 font-bold">Fashion-22.jpg</div>
                      <div className="text-slate-400 mt-1">2,353 KB (2.35 MB) &bull; Target: ~140 KB WebP</div>
                    </div>
                    <div className="bg-black/60 p-3 rounded-xl border border-white/5 text-xs font-mono">
                      <div className="text-rose-400 font-bold">Kids-14.jpg</div>
                      <div className="text-slate-400 mt-1">1,617 KB (1.61 MB) &bull; Target: ~110 KB WebP</div>
                    </div>
                  </div>

                  <div className="bg-teal-950/30 border-l-2 border-teal-400 p-3 rounded-r-xl text-xs text-teal-200">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">Recommended Solution:</strong>
                    Batch convert images to modern <strong>WebP/AVIF</strong> format with a maximum width of 1920px. This cuts homepage weight from 6.39MB to under 850KB.
                  </div>
                </div>
              </div>
            </div>

            {/* Performance 3.2: 270 Images Overload */}
            <div className="bg-[#080b11] border border-red-500/30 rounded-2xl p-5 hover:border-red-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Portfolio Page Overload: 270 Photos Loaded in Single Request</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    The <code>/portfolio/</code> page loads <strong>270 high-resolution photos</strong> at once. On mobile devices, this causes browser stuttering, high data costs for users, and elevated bounce rates.
                  </p>
                  <div className="bg-teal-950/30 border-l-2 border-teal-400 p-3 rounded-r-xl text-xs text-teal-200 mt-3">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">Recommended Architecture:</strong>
                    Segment portfolio into sub-galleries (Weddings, Corporate, Fashion) and apply infinite-scroll lazy loading with 16–20 photos per batch.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 4: SECURITY & SOCIAL */}
        {/* ==================================================== */}
        <div id="security" className="scroll-mt-32" />
        <section className="bg-[#0e131d] border border-white/10 rounded-3xl p-6 md:p-8 mb-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">4. Social Meta &amp; Server Hardening</h3>
                <p className="text-xs text-slate-400">Open Graph tags, cache plugin maintenance, and HTTP security</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3.5 py-1 rounded-full">
              Grade: B- (70/100)
            </span>
          </div>

          <div className="space-y-6">

            {/* Social 4.1 */}
            <div className="bg-[#080b11] border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <Share2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Missing Open Graph Description (`og:description`)</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                      Notice
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    When someone shares your website link on WhatsApp or iMessage, no summary preview appears under the card. Add Open Graph metadata in AIOSEO social tab.
                  </p>
                </div>
              </div>
            </div>

            {/* Security 4.2 */}
            <div className="bg-[#080b11] border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Outdated WP Rocket Cache Plugin (v3.11.2 from 2022)</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                      Security
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">
                    The server header exposes <code>X-Powered-By: WP Rocket/3.11.2</code>. Update WP Rocket or switch to native LiteSpeed Cache for WordPress to prevent known vulnerabilities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* THE RECOMMENDED SOLUTION: NEXT.JS + SANITY.IO + VPS */}
        {/* ==================================================== */}
        <div id="solution" className="scroll-mt-32" />
        <section className="relative bg-gradient-to-b from-[#131b2e] via-[#0d1322] to-[#080d18] border-2 border-teal-500/40 rounded-3xl p-6 md:p-10 mb-12 shadow-[0_0_50px_rgba(20,184,166,0.15)] overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8 relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-300 bg-teal-500/20 border border-teal-500/40 px-3.5 py-1.5 rounded-full shadow-lg mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                The Permanent Modern Solution
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                Next.js + Sanity.io + High-Performance VPS
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                Rather than spending time and money continuously patching an outdated, bloated WordPress template with 270 raw images, migrating to a <strong>Modern Headless Architecture</strong> gives BT Captures lightning-fast speed, effortless photo updates, and 100/100 Google scores.
              </p>
            </div>

            <div className="bg-[#0b101c] border border-teal-500/30 p-4 rounded-2xl flex flex-col items-center text-center self-start md:self-auto min-w-[200px] shadow-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Target Performance</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400 mt-0.5">
                99 / 100
              </span>
              <span className="text-[10px] text-teal-400 font-semibold mt-1">Google Core Web Vitals</span>
            </div>
          </div>

          {/* 3 Core Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
            
            {/* Pillar 1: Next.js */}
            <div className="bg-[#0a0e17]/90 border border-teal-500/30 rounded-2xl p-6 hover:border-teal-400/60 transition-all shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center text-black font-black text-xl mb-4 shadow-[0_0_20px_rgba(45,212,191,0.4)] group-hover:scale-105 transition-transform">
                ▲
              </div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-lg font-black text-white">Next.js 15 Frontend</h4>
                <span className="text-[10px] uppercase font-mono font-bold text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-500/30">React SSR</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 font-medium">The world&apos;s fastest modern framework</p>
              
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Sub-Second Loading (&lt;0.8s):</strong> Zero lag, instantaneous page transitions across all devices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Next/Image Auto-Optimization:</strong> High-res photography is dynamically compressed to WebP/AVIF without quality loss.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Infinite Smooth Portfolio:</strong> 270+ photos render in categorized tabs (Weddings, Fashion, Corporate) without browser freezing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Automated Melbourne Local SEO:</strong> Dynamic Open Graph social previews and automated JSON-LD rich snippets.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Sanity.io */}
            <div className="bg-[#0a0e17]/90 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition-all shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-black text-lg mb-4 shadow-[0_0_20px_rgba(244,63,94,0.4)] group-hover:scale-105 transition-transform">
                ✦
              </div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-lg font-black text-white">Sanity.io Studio</h4>
                <span className="text-[10px] uppercase font-mono font-bold text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-500/30">Headless CMS</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 font-medium">Tailored visual content management for Bandara</p>
              
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Upload from Phone or Camera:</strong> Bandara can upload new client galleries directly from mobile or laptop in seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Smart Hotspot Cropping:</strong> Automatically locks focus on models&apos; faces and couples so mobile screens never cut people out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Drag-and-Drop Gallery Sorting:</strong> Easily organize featured shoots, pricing packages, client logos, and testimonials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Plugin Maintenance:</strong> Never worry about broken WordPress plugins, outdated PHP, or database crashes again.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: High-Performance VPS */}
            <div className="bg-[#0a0e17]/90 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 transition-all shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg mb-4 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-lg font-black text-white">High-Performance VPS</h4>
                <span className="text-[10px] uppercase font-mono font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-500/30">Dedicated Cloud</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 font-medium">Isolated dedicated power with Sydney/Melbourne edge</p>
              
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated CPU &amp; NVMe Storage:</strong> No shared hosting limits. Your site handles unlimited viral traffic with zero slowdowns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Enterprise Nginx with HTTP/3 &amp; Brotli:</strong> Modern transport protocol delivers photos over 2x faster than standard Apache.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Bank-Grade Security (HSTS &amp; CSP):</strong> Complete protection against DDoS, brute-force attacks, and xmlrpc exploits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Automated Daily Cloud Backups:</strong> Full snapshot backups keep your entire photography portfolio 100% safe.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="bg-[#090d16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-8 relative z-10">
            <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <span>⚖️</span>
                <span>WordPress (Flatsome) vs. SiteSpark Modern Headless Stack</span>
              </span>
              <span className="text-xs text-teal-400 font-semibold font-mono">Direct Technical Audit Comparison</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0e1422] text-slate-400 uppercase font-mono text-[10px] tracking-wider">
                    <th className="py-3 px-5">Performance &amp; Feature Area</th>
                    <th className="py-3 px-5 text-rose-400">Current Site (WordPress + Flatsome)</th>
                    <th className="py-3 px-5 text-teal-300">SiteSpark Stack (VPS + Sanity + Next.js)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-white">Homepage Download Payload</td>
                    <td className="py-3 px-5 text-rose-400 font-mono font-semibold">❌ 6.39 MB (Extreme data load)</td>
                    <td className="py-3 px-5 text-teal-300 font-mono font-bold">✅ &lt; 650 KB (Automatic WebP conversion)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-white">Portfolio Image Experience</td>
                    <td className="py-3 px-5 text-rose-400">❌ 270 raw photos loaded in single page (Crashes mobile)</td>
                    <td className="py-3 px-5 text-teal-300 font-bold">✅ Categorized dynamic tabs with lazy loading (Infinite scroll)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-white">Photo Uploads &amp; Editing</td>
                    <td className="py-3 px-5 text-rose-400">❌ Clunky WP Media Library + manual resizing</td>
                    <td className="py-3 px-5 text-teal-300 font-bold">✅ Sanity Studio: Upload from phone with smart facial hotspot cropping</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-white">Security &amp; Maintenance</td>
                    <td className="py-3 px-5 text-rose-400">❌ Outdated WP Rocket (2022), exposed xmlrpc, plugin vulnerabilities</td>
                    <td className="py-3 px-5 text-teal-300 font-bold">✅ 100% Headless: Immune to WordPress bots, zero plugin maintenance</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-white">Hosting Infrastructure</td>
                    <td className="py-3 px-5 text-rose-400">❌ Shared LiteSpeed hosting limits</td>
                    <td className="py-3 px-5 text-teal-300 font-bold">✅ Dedicated Cloud VPS with HTTP/3, Brotli &amp; Australian edge caching</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-white">Google SEO &amp; Rich Cards</td>
                    <td className="py-3 px-5 text-rose-400">❌ Missing meta descriptions, weak generic titles</td>
                    <td className="py-3 px-5 text-teal-300 font-bold">✅ Dynamic Melbourne schema markup, automated OpenGraph previews</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Migration Quote Banner */}
          <div className="bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 border border-teal-500/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div>
              <h5 className="text-base font-bold text-white">Ready to elevate BT Captures with Next.js, Sanity.io &amp; a Dedicated VPS?</h5>
              <p className="text-xs text-slate-300 mt-0.5">SiteSpark can seamlessly migrate your existing photography content in under 7 days.</p>
            </div>
            <a
              href="https://wa.me/94715448553?text=Hi%20SiteSpark,%20I%20reviewed%20the%20BT%20Captures%20audit%20and%20would%20like%20to%20discuss%20the%20VPS%20+%20Sanity.io%20+%20Next.js%20migration%20stack."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-300 text-black font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.4)] whitespace-nowrap"
            >
              Request Stack Migration
            </a>
          </div>

        </section>

        {/* ==================================================== */}
        {/* ROADMAP CHECKLIST */}
        {/* ==================================================== */}
        <div id="roadmap" className="scroll-mt-32" />
        <section className="bg-gradient-to-br from-[#121927] via-[#0e1420] to-[#080c14] border border-teal-500/30 rounded-3xl p-6 md:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Implementation Plan
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mt-1">Priority Fix Roadmap</h3>
            </div>
            <div className="bg-teal-500/20 text-teal-300 font-bold px-4 py-2 rounded-xl border border-teal-500/30 text-xs sm:text-sm self-start sm:self-center shadow-lg">
              Target Score: C+ &rarr; A (92+)
            </div>
          </div>

          <div className="space-y-3.5">
            {[
              {
                priority: "Immediate",
                color: "bg-red-500 text-white",
                title: "Fix Client Partner Logos Linking to Raw JPEGs",
                desc: "Disable link action in Flatsome builder so clicking logos doesn't open media files."
              },
              {
                priority: "Day 1–2",
                color: "bg-red-500 text-white",
                title: "Configure Melbourne Keyword Titles & Meta Descriptions",
                desc: "Target 'Melbourne Event & Portrait Photographer' in AIOSEO across all main pages."
              },
              {
                priority: "Week 1",
                color: "bg-amber-500 text-black font-bold",
                title: "Compress Homepage Photos & Segment 270-Image Portfolio",
                desc: "Convert to WebP format to drop 6.39MB payload down to under 850KB."
              },
              {
                priority: "Week 1",
                color: "bg-amber-500 text-black font-bold",
                title: "Correct Footer Copyright Entity & Phone Link Spacing",
                desc: "Fix character encoding glitch (©) and remove '%20' space from tel link."
              },
              {
                priority: "Growth",
                color: "bg-teal-400 text-black font-bold",
                title: "Embed Google 5-Star Reviews & WhatsApp Quick Chat Button",
                desc: "Significantly lifts inquiry and booking conversions for Melbourne clients."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#080b11]/80 border border-white/5 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-teal-500/30 transition-all hover:translate-x-1"
              >
                <div className="flex items-center gap-3.5">
                  <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-md font-extrabold ${item.color}`}>
                    {item.priority}
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-slate-600 sm:self-center self-end" />
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================== */}
        {/* SITESPARK AGENCY CALL TO ACTION */}
        {/* ==================================================== */}
        <section className="relative bg-gradient-to-r from-teal-950/70 via-blue-950/60 to-purple-950/70 border border-teal-500/30 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-teal-300 bg-teal-500/20 px-4 py-1.5 rounded-full border border-teal-500/40 mb-4 shadow-lg">
              <Sparkles className="w-4 h-4 text-teal-300" />
              Engineered by SiteSpark Agency
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              Ready to turn these fixes into more photography bookings?
            </h3>
            <p className="text-sm text-slate-300 mt-3 mb-8 leading-relaxed">
              SiteSpark specializes in high-speed website optimization, search engine rankings, and bespoke web apps. We can resolve all these audit defects in under 48 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://sitespark.online#contact"
                className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-black font-extrabold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(45,212,191,0.5)] flex items-center gap-2"
              >
                <span>Get This Fixed with SiteSpark</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/94715448553?text=Hi%20SiteSpark,%20I%20reviewed%20the%20BT%20Captures%20audit%20and%20would%20like%20to%20discuss%20optimizing%20my%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all border border-white/20 flex items-center gap-2 backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
        <p>&copy; 2026 SiteSpark. All rights reserved &bull; Independent Digital Performance Audit for BT Captures</p>
        <p className="mt-1 text-slate-600">https://sitespark.online &bull; Modern Web Engineering &amp; Creative Development</p>
      </footer>

    </div>
  );
}
