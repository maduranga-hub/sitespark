"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Clock,
  PhoneCall,
  Globe,
  Award
} from "lucide-react";

export default function BTCapturesAuditPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("all");

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-teal-500 selection:text-white pb-24">
      
      {/* TOP HEADER BAR */}
      <header className="sticky top-0 z-50 bg-[#0d111a]/90 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="https://sitespark.online" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center font-black text-black text-sm shadow-[0_0_15px_rgba(20,184,166,0.5)]">
              S
            </span>
            <span className="font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors hidden sm:inline">
              SiteSpark
            </span>
          </a>
          <span className="text-white/20">/</span>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-400 bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-full">
              Audit Report
            </span>
            <a
              href="https://btcaptures.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              btcaptures.com.au
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all hover:scale-102 cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4 text-teal-400" />
            <span>Save / Print PDF</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">

        {/* ==================================================== */}
        {/* HERO AUDIT SUMMARY CARD (SEOptimer Layout) */}
        {/* ==================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-b from-[#111622] to-[#0c1017] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden mb-10"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Score on Left, Device Mockup on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10">
            
            {/* Left: Overall Grade Circle */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative w-40 h-40 flex items-center justify-center mb-5"
              >
                {/* Outer SVG Animated Ring */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    stroke="#1e293b"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="68"
                    stroke="url(#gradient-blue)"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 68}
                    initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                    animate={{ strokeDashoffset: (2 * Math.PI * 68) * (1 - 0.58) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    C+
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                    Score: 58/100
                  </span>
                </div>
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Your page needs improvement
              </h2>
              <p className="text-sm text-slate-400 mb-4 max-w-sm">
                BT Captures has a great photography portfolio, but several critical SEO, speed, and link defects are restricting client conversions.
              </p>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>12 Improvements Recommended</span>
              </motion.div>
            </div>

            {/* Right: Desktop iMac Mockup showing BT Captures */}
            <div className="md:col-span-7 flex justify-center">
              <div className="w-full max-w-[460px] bg-[#161d2d] p-3 rounded-2xl border border-white/15 shadow-2xl shadow-black/80">
                {/* Browser Screen */}
                <div className="bg-[#0b0e14] rounded-lg overflow-hidden border border-white/10">
                  {/* Browser Bar */}
                  <div className="bg-[#1e2536] px-3 py-1.5 flex items-center gap-2 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 bg-[#0b0e14] text-[10px] text-slate-400 rounded px-2 py-0.5 font-mono truncate">
                      https://btcaptures.com.au/
                    </div>
                  </div>
                  {/* Website Banner Preview */}
                  <div className="relative h-52 bg-slate-900 overflow-hidden flex flex-col justify-end p-5">
                    <img
                      src="https://btcaptures.com.au/wp-content/uploads/2024/04/banner-03.jpg"
                      alt="BT Captures Melbourne"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                        Melbourne Photographer
                      </span>
                      <h4 className="text-xl font-black text-white">BT Captures</h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-xs line-clamp-2">
                        Corporate Events, Fashion, Celebrities, Birthdays and Family Shoots in Melbourne.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <span className="text-[9px] bg-teal-500 text-black font-bold px-2 py-1 rounded">
                          VIEW PORTFOLIO
                        </span>
                        <span className="text-[9px] bg-white/20 text-white font-semibold px-2 py-1 rounded backdrop-blur">
                          BOOK SESSION
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* iMac Chin & Stand */}
                <div className="h-4 bg-[#2b354b] flex items-center justify-center rounded-b-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                </div>
                <div className="w-20 h-7 bg-gradient-to-b from-slate-400 to-slate-600 mx-auto [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]" />
                <div className="w-32 h-1.5 bg-slate-400 mx-auto rounded-full" />
              </div>
            </div>

          </div>

          {/* Categories Row: 5 Circular Badges + Interactive Radar */}
          <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 5 Circular Badges */}
            <div className="lg:col-span-8 grid grid-cols-3 sm:grid-cols-5 gap-4">
              
              {/* Category 1: SEO */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#1e293b" strokeWidth="6" fill="transparent" />
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
                  <span className="absolute text-lg font-bold text-sky-400">C</span>
                </div>
                <span className="text-xs font-bold text-slate-300 mt-2">SEO</span>
                <span className="text-[10px] text-slate-500">55/100</span>
              </div>

              {/* Category 2: Usability */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#1e293b" strokeWidth="6" fill="transparent" />
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
                  <span className="absolute text-lg font-bold text-orange-400">C+</span>
                </div>
                <span className="text-xs font-bold text-slate-300 mt-2">Usability</span>
                <span className="text-[10px] text-slate-500">65/100</span>
              </div>

              {/* Category 3: Performance */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#1e293b" strokeWidth="6" fill="transparent" />
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
                  <span className="absolute text-lg font-bold text-rose-400">D+</span>
                </div>
                <span className="text-xs font-bold text-slate-300 mt-2">Performance</span>
                <span className="text-[10px] text-slate-500">45/100</span>
              </div>

              {/* Category 4: Social */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#1e293b" strokeWidth="6" fill="transparent" />
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
                  <span className="absolute text-lg font-bold text-purple-400">C-</span>
                </div>
                <span className="text-xs font-bold text-slate-300 mt-2">Social</span>
                <span className="text-[10px] text-slate-500">50/100</span>
              </div>

              {/* Category 5: Security */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#1e293b" strokeWidth="6" fill="transparent" />
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
                  <span className="absolute text-lg font-bold text-emerald-400">B-</span>
                </div>
                <span className="text-xs font-bold text-slate-300 mt-2">Security</span>
                <span className="text-[10px] text-slate-500">70/100</span>
              </div>

            </div>

            {/* Spider / Radar Balance Chart */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-56 h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid Web Polygons */}
                  <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="#1e293b" strokeWidth="1" />
                  <polygon points="100,50 145,82 128,136 72,136 55,82" fill="none" stroke="#1e293b" strokeWidth="1" />
                  <polygon points="100,80 115,91 109,109 91,109 85,91" fill="none" stroke="#1e293b" strokeWidth="1" />
                  
                  {/* Spokes */}
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#1e293b" strokeWidth="1" />
                  <line x1="100" y1="100" x2="176" y2="75" stroke="#1e293b" strokeWidth="1" />
                  <line x1="100" y1="100" x2="147" y2="165" stroke="#1e293b" strokeWidth="1" />
                  <line x1="100" y1="100" x2="53" y2="165" stroke="#1e293b" strokeWidth="1" />
                  <line x1="100" y1="100" x2="24" y2="75" stroke="#1e293b" strokeWidth="1" />

                  {/* Filled Value Polygon */}
                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    points="100,44 149,83 126,145 74,135 48,82"
                    fill="rgba(56, 189, 248, 0.25)"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  {/* Points */}
                  <circle cx="100" cy="44" r="3" fill="#38bdf8" />
                  <circle cx="149" cy="83" r="3" fill="#38bdf8" />
                  <circle cx="126" cy="145" r="3" fill="#38bdf8" />
                  <circle cx="74" cy="135" r="3" fill="#38bdf8" />
                  <circle cx="48" cy="82" r="3" fill="#38bdf8" />

                  {/* Labels */}
                  <text x="100" y="14" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Security (70)</text>
                  <text x="180" y="80" fill="#94a3b8" fontSize="9" textAnchor="start" fontWeight="bold">SEO (55)</text>
                  <text x="150" y="180" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Usability (65)</text>
                  <text x="45" y="180" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Social (50)</text>
                  <text x="18" y="80" fill="#94a3b8" fontSize="9" textAnchor="end" fontWeight="bold">Speed (45)</text>
                </svg>
              </div>
              <span className="text-[11px] text-slate-400 mt-1 font-medium">Site Performance Web</span>
            </div>

          </div>

        </motion.section>

        {/* ==================================================== */}
        {/* SECTION 1: SEO AUDIT (Scroll Downwards) */}
        {/* ==================================================== */}
        <section className="bg-[#111622] border border-white/10 rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">1. Search Engine Optimization (SEO)</h3>
                <p className="text-xs text-slate-400">Keyword targeting, metadata, and organic discoverability in Melbourne</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 px-3 py-1 rounded-full">
              Grade: C (55/100)
            </span>
          </div>

          <div className="space-y-6">
            
            {/* SEO 1.1 */}
            <div className="bg-[#0b0e14] border border-red-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Meta Description Tag Missing Across Entire Site</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    None of the core pages (Home, About, Portfolio, Contact) have meta descriptions configured. When users search on Google, arbitrary text fragments are displayed instead of a professional pitch.
                  </p>
                  <div className="bg-black/50 border border-white/5 rounded-lg p-3 font-mono text-xs text-slate-300 my-3">
                    &lt;meta name="description" content="" /&gt;  &lt;!-- MISSING from btcaptures.com.au --&gt;
                  </div>
                  <div className="bg-teal-950/40 border-l-2 border-teal-400 p-3 rounded-r-lg text-xs text-teal-200">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">Recommended Solution:</strong>
                    Set 150-character meta descriptions in AIOSEO, e.g.: <em>"BT Captures is a Melbourne photography studio by Bandara Thennakoon. Specializing in corporate events, weddings, fashion runway, and family portraits."</em>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO 1.2 */}
            <div className="bg-[#0b0e14] border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Page Titles Lack Geographic &amp; Photography Keywords</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      Warning
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Current titles are barebones (e.g. <code>HOME - BT Captures</code>, <code>PORTFOLIO - BT Captures</code>), failing to capture searches like <em>"Melbourne Event Photographer"</em> or <em>"Corporate Photographer Victoria"</em>.
                  </p>
                  <div className="bg-black/50 border border-white/5 rounded-lg p-3 font-mono text-xs text-slate-300 my-3">
                    Current: &lt;title&gt;HOME - BT Captures&lt;/title&gt;<br />
                    Target: &lt;title&gt;BT Captures | Event &amp; Portrait Photographer Melbourne&lt;/title&gt;
                  </div>
                </div>
              </div>
            </div>

            {/* SEO 1.3 */}
            <div className="bg-[#0b0e14] border border-red-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">18 of 20 Homepage Images Missing Alt Attributes</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                      High
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    90% of images carry empty <code>alt=""</code> attributes. Photography clients frequently search Google Images for venue inspiration; without alt text, your photos remain invisible to image crawlers.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO 1.4 */}
            <div className="bg-[#0b0e14] border border-emerald-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">XML Sitemap &amp; Robots.txt Detected</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Passed
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Both <code>robots.txt</code> and <code>sitemap.xml</code> are accessible and properly linked to search crawler protocols.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 2: USABILITY & UX AUDIT */}
        {/* ==================================================== */}
        <section className="bg-[#111622] border border-white/10 rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">2. Usability &amp; User Experience</h3>
                <p className="text-xs text-slate-400">Navigation, link integrity, and mobile engagement</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full">
              Grade: C+ (65/100)
            </span>
          </div>

          <div className="space-y-6">

            {/* Usability 2.1: Client Logos Link */}
            <div className="bg-[#0b0e14] border border-red-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Client Partner Logos Link Directly to Media Uploads</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                      Critical Bug
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Clicking logos like Monash University, SriLankan Airlines, or Melbourne Fashion Week leaves the website and opens raw JPEG files (e.g. <code>.../wp-content/uploads/2024/04/srilankan-airlines-logo.jpg</code>).
                  </p>
                  <div className="bg-teal-950/40 border-l-2 border-teal-400 p-3 rounded-r-lg text-xs text-teal-200 mt-3">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">Recommended Solution:</strong>
                    In Flatsome theme editor, change client logo links from "Media File" to "None", or set external client links with <code>target="_blank"</code>.
                  </div>
                </div>
              </div>
            </div>

            {/* Usability 2.2: Encoding Glitch */}
            <div className="bg-[#0b0e14] border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Footer Copyright Symbol Displays Character Encoding Error</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      Visual Bug
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    The footer renders: <code>Copyright 2026 &#xFFFD; BT Captures</code>. Replace the invalid character with standard HTML entity <code>&amp;copy;</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Usability 2.3: Phone Link Bug */}
            <div className="bg-[#0b0e14] border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Phone Link Contains URL-Encoded Whitespace (`%20`)</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      Warning
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    The call link is formatted as <code>tel:%200433887629</code>. Many iOS and Android phones fail to trigger the phone dialer when a leading whitespace is encoded. Change to clean format: <code>tel:+61433887629</code>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 3: PERFORMANCE & SPEED */}
        {/* ==================================================== */}
        <section className="bg-[#111622] border border-white/10 rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">3. Performance &amp; Page Speed</h3>
                <p className="text-xs text-slate-400">Page payload weight, image compression, and mobile responsiveness</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/30 px-3 py-1 rounded-full">
              Grade: D+ (45/100)
            </span>
          </div>

          <div className="space-y-6">

            {/* Performance 3.1: Heavy Images */}
            <div className="bg-[#0b0e14] border border-red-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Massive Uncompressed Images (6.39 MB Download on Homepage)</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Multiple photos are uploaded straight from professional cameras without web compression. Single files exceed 2.3MB, dragging down mobile load times on cellular 4G/5G connections.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                    <div className="bg-black/50 p-2.5 rounded border border-white/5 text-xs">
                      <span className="text-red-400 font-mono font-bold">Fashion-22.jpg</span>
                      <div className="text-slate-400 mt-0.5">2,353 KB (2.35 MB) &bull; Target: ~140 KB</div>
                    </div>
                    <div className="bg-black/50 p-2.5 rounded border border-white/5 text-xs">
                      <span className="text-red-400 font-mono font-bold">Kids-14.jpg</span>
                      <div className="text-slate-400 mt-0.5">1,617 KB (1.61 MB) &bull; Target: ~110 KB</div>
                    </div>
                  </div>
                  <div className="bg-teal-950/40 border-l-2 border-teal-400 p-3 rounded-r-lg text-xs text-teal-200">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">Recommended Solution:</strong>
                    Convert all photos to modern <strong>WebP/AVIF</strong> format with a maximum width of 1920px. This reduces homepage weight from 6.39MB to under 850KB.
                  </div>
                </div>
              </div>
            </div>

            {/* Performance 3.2: 270 Images Overload */}
            <div className="bg-[#0b0e14] border border-red-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Portfolio Page Overload: 270 Photos Loaded in Single Request</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                      Critical
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    The <code>/portfolio/</code> page attempts to render <strong>270 high-resolution photos</strong> simultaneously. This can freeze mobile browsers and waste hundreds of megabytes of user data.
                  </p>
                  <div className="bg-teal-950/40 border-l-2 border-teal-400 p-3 rounded-r-lg text-xs text-teal-200 mt-3">
                    <strong className="text-teal-400 uppercase tracking-wider block mb-1">Recommended Solution:</strong>
                    Split into sub-galleries (Weddings, Corporate, Fashion) or apply on-scroll lazy loading with 16–20 photos per batch.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 4: SOCIAL & SECURITY */}
        {/* ==================================================== */}
        <section className="bg-[#111622] border border-white/10 rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">4. Social Tags &amp; Technical Security</h3>
                <p className="text-xs text-slate-400">Social sharing cards, HTTP headers, and server hardening</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
              Grade: B- (70/100)
            </span>
          </div>

          <div className="space-y-6">

            {/* Social 4.1 */}
            <div className="bg-[#0b0e14] border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Open Graph Description (`og:description`) Missing</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      Notice
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    When the link is shared on WhatsApp or iMessage, no summary card appears. Add Open Graph metadata in AIOSEO.
                  </p>
                </div>
              </div>
            </div>

            {/* Security 4.2 */}
            <div className="bg-[#0b0e14] border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-white">Outdated WP Rocket Cache Plugin (v3.11.2 from 2022)</h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      Security
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    The server header exposes <code>X-Powered-By: WP Rocket/3.11.2</code>. Update WP Rocket or switch to native LiteSpeed Cache for WordPress to prevent known vulnerabilities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* ROADMAP CHECKLIST */}
        {/* ==================================================== */}
        <section className="bg-gradient-to-br from-[#161d2d] via-[#101522] to-[#0c0f17] border border-teal-500/30 rounded-2xl p-6 md:p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Actionable Strategy
              </span>
              <h3 className="text-2xl font-black text-white mt-1">Priority Fix Roadmap</h3>
            </div>
            <span className="text-xs bg-teal-500/20 text-teal-300 font-semibold px-3 py-1.5 rounded-full border border-teal-500/30">
              Estimated Score Boost: C+ &rarr; A (92+)
            </span>
          </div>

          <div className="space-y-3">
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
                color: "bg-teal-500 text-black font-bold",
                title: "Embed Google 5-Star Reviews & WhatsApp Quick Chat Button",
                desc: "Significantly lifts inquiry and booking conversions for Melbourne clients."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b0e14]/70 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-teal-500/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-bold ${item.color}`}>
                    {item.priority}
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <p className="text-xs text-slate-400">{item.desc}</p>
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
        <section className="bg-gradient-to-r from-teal-900/40 via-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Engineered by SiteSpark
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Ready to turn these fixes into more photography bookings?
            </h3>
            <p className="text-sm text-slate-300 mt-2 mb-6">
              SiteSpark specializes in high-performance web optimization, SEO rank elevation, and modern digital development.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://sitespark.online#contact"
                className="bg-teal-500 hover:bg-teal-400 text-black font-extrabold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center gap-2"
              >
                <span>Get This Fixed with SiteSpark</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/94770000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all border border-white/15 flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
        <p>&copy; 2026 SiteSpark. All rights reserved &bull; Independent Website Audit for BT Captures</p>
        <p className="mt-1">https://sitespark.online &bull; Modern Web Engineering &amp; Creative Development</p>
      </footer>

    </div>
  );
}
