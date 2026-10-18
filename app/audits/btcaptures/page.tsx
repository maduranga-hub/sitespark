"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Moon,
  Sun,
  Bell,
  Grid,
  Menu,
  X,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  MessageCircle,
  PhoneCall,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  Layers,
  ChevronRight,
  Filter,
  Download,
  Share2,
  SlidersHorizontal,
  FolderKanban,
  FileText,
  Settings,
  HelpCircle,
  RefreshCw,
  LayoutDashboard,
  PieChart as PieIcon,
  BarChart3,
  Flame,
  Check
} from "lucide-react";

export default function BTCapturesWhiteDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("default");
  const [activeTab, setActiveTab] = useState<"all" | "critical" | "performance" | "seo">("all");
  const [completedTasks, setCompletedTasks] = useState<number[]>([1]);
  const [chartMetric, setChartMetric] = useState<"speed" | "inquiries">("speed");

  const toggleTask = (id: number) => {
    setCompletedTasks(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const whatsappUrl =
    "https://wa.me/94715448553?text=Hi%20SiteSpark,%20I%20am%20reviewing%20the%20BT%20Captures%20Executive%20Dashboard%20and%20would%20like%20to%20discuss%20the%20Next.js%20+%20Sanity.io%20+%20VPS%20migration.";

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-slate-800 flex font-sans antialiased selection:bg-purple-100 selection:text-purple-900">
      {/* ========================================================= */}
      {/* MOBILE SIDEBAR BACKDROP */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* ========================================================= */}
      {/* LEFT SIDEBAR (SYN-UI REPLICA) */}
      {/* ========================================================= */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-200/90 z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Brand Header */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 bg-clip-text text-transparent">
                  SITESPARK
                </span>
                <span className="text-[10px] font-bold text-purple-600 ml-1.5 uppercase px-1.5 py-0.5 bg-purple-50 rounded">
                  UI-OS
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-6 text-xs font-semibold">
            {/* Group 1: Dashboard */}
            <div>
              <div className="px-3 mb-2 flex items-center justify-between text-purple-700 uppercase tracking-wider text-[11px] font-bold">
                <span className="flex items-center gap-2">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Dashboard
                </span>
                <ChevronRight className="w-3.5 h-3.5 rotate-90" />
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveMenu("default")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    activeMenu === "default"
                      ? "bg-purple-50 text-purple-700 font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${activeMenu === "default" ? "bg-purple-600 ring-4 ring-purple-100" : "bg-slate-300"}`} />
                    <span>Default Audit View</span>
                  </div>
                  <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">
                    Live
                  </span>
                </button>

                <button
                  onClick={() => setActiveMenu("performance")}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === "performance"
                      ? "bg-purple-50 text-purple-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Performance & Speed</span>
                </button>

                <button
                  onClick={() => setActiveMenu("seo")}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === "seo"
                      ? "bg-purple-50 text-purple-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Melbourne Local SEO</span>
                </button>

                <button
                  onClick={() => setActiveMenu("architecture")}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === "architecture"
                      ? "bg-purple-50 text-purple-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>VPS + Next.js + Sanity</span>
                </button>
              </div>
            </div>

            {/* Group 2: Audit Modules */}
            <div>
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Audit Modules
              </span>
              <div className="space-y-1">
                <a
                  href="#overview"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
                    Overall Health Score
                  </span>
                  <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    C+ (64)
                  </span>
                </a>

                <a
                  href="#payload"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <PieIcon className="w-3.5 h-3.5 text-slate-400" />
                    Payload Breakdown
                  </span>
                  <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                    6.39 MB
                  </span>
                </a>

                <a
                  href="#issues"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-slate-400" />
                    Flagged Deficiencies
                  </span>
                  <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                    8 Issues
                  </span>
                </a>

                <a
                  href="#roadmap"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <FolderKanban className="w-3.5 h-3.5 text-slate-400" />
                    Sprint Checklist
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    7 Days
                  </span>
                </a>
              </div>
            </div>

          </nav>

          {/* Sidebar Footer / Client Badge */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 mt-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center text-xs shadow-md shadow-purple-500/20">
                  BT
                </div>
                <div className="overflow-hidden">
                  <h6 className="font-bold text-xs text-slate-900 truncate">BT Captures</h6>
                  <p className="text-[10px] text-slate-500 truncate">Melbourne, Australia</p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-xl text-[11px] flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200/90 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          {/* Left: Mobile hamburger + Search */}
          <div className="flex items-center gap-3 flex-1 max-w-lg">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search audit metrics, findings, fixes..."
                className="w-full pl-9 pr-4 py-2 bg-[#f4f6fa] border border-slate-200 rounded-xl text-xs text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <button
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all relative"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center">
                  8
                </span>
              </button>
            </div>

            {/* Direct WhatsApp Callout in Header */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WhatsApp: +94 71 544 8553
            </a>

            {/* Client Profile Avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center ring-2 ring-purple-500/20">
                BT
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-4 md:p-8 space-y-6">
          {/* Breadcrumb + Header Title Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="hover:text-slate-700 cursor-pointer">Dashboard</span>
                <span>/</span>
                <span className="hover:text-slate-700 cursor-pointer">Client Audits</span>
                <span>/</span>
                <span className="text-purple-600 font-semibold">btcaptures.com.au</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2.5">
                Bandara Thennakoon Photography
                <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-300">
                  Audit Grade: C+ (64)
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-purple-600/20 flex items-center gap-1.5 transition-all hover:scale-102"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Upgrade to Next.js + Sanity
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TOP ROW: 3 CARDS (MATCHING SYN-UI LAYOUT) */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* 1. DONUT GAUGE CARD (TOTAL HEALTH / 85% CIRCLE) */}
            <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-slate-900">Total Audit Score</h3>
                <span className="text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-bold">•••</span>
              </div>

              {/* Circular SVG Donut Chart */}
              <div className="relative flex items-center justify-center my-3">
                <svg className="w-52 h-52 -rotate-90 transform" viewBox="0 0 160 160">
                  {/* Background track */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="16"
                  />
                  {/* Segment 1: SEO (Purple) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#8b5cf6"
                    strokeWidth="16"
                    strokeDasharray="377"
                    strokeDashoffset="120"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Segment 2: Performance (Pink/Red) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#f43f5e"
                    strokeWidth="16"
                    strokeDasharray="377"
                    strokeDashoffset="240"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Segment 3: Mobile (Teal/Emerald) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="16"
                    strokeDasharray="377"
                    strokeDashoffset="310"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Segment 4: Security (Cyan) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#06b6d4"
                    strokeWidth="16"
                    strokeDasharray="377"
                    strokeDashoffset="345"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>

                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">64%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Grade C+ (64/100)
                  </span>
                </div>
              </div>

              {/* Legend row */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span>SEO: 72%</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>Speed: 38% (Crit)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Mobile: 69%</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <span>Security: 68%</span>
                </div>
              </div>
            </div>

            {/* 2. BAR CHART CARD (USER ACTIVITY / CORE WEB VITALS) */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Core Web Vitals & Speed Load (Seconds)</h3>
                  <p className="text-[11px] text-slate-400">Current WordPress vs Target Next.js + VPS</p>
                </div>
                <span className="text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-bold">•••</span>
              </div>

              {/* Bar Chart Geometry */}
              <div className="h-52 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-slate-100">
                {[
                  { label: "TTFB", current: 82, target: 15, currentSec: "1.2s", targetSec: "0.1s" },
                  { label: "FCP", current: 95, target: 20, currentSec: "2.4s", targetSec: "0.4s" },
                  { label: "LCP", current: 100, target: 24, currentSec: "3.8s", targetSec: "0.6s" },
                  { label: "Total", current: 100, target: 26, currentSec: "4.2s", targetSec: "0.8s" },
                  { label: "Payload", current: 100, target: 12, currentSec: "6.4MB", targetSec: "650KB" },
                  { label: "DOM", current: 85, target: 18, currentSec: "2,140", targetSec: "320" }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group relative">
                    {/* Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-slate-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none">
                      Current: {bar.currentSec} | Target: {bar.targetSec}
                    </div>

                    <div className="w-full flex items-end justify-center gap-1.5 h-36">
                      {/* Current WordPress Bar (Purple/Lavender) */}
                      <div
                        className="w-3.5 bg-purple-600 rounded-t-sm transition-all duration-500 group-hover:brightness-110"
                        style={{ height: `${bar.current}%` }}
                      />
                      {/* Target Next.js Bar (Soft Violet / Mint) */}
                      <div
                        className="w-3.5 bg-purple-200 rounded-t-sm transition-all duration-500 group-hover:bg-purple-300"
                        style={{ height: `${bar.target}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{bar.label}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between pt-3 text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-600" />
                    <span>Current WordPress</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-200" />
                    <span>Next.js 15 VPS Target</span>
                  </span>
                </div>
                <span className="text-[10px] text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  -85% Latency Drop
                </span>
              </div>
            </div>

            {/* 3. TWO STACKED KPI CARDS */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Top KPI Card: Mobile Speed Stall (Replaces $4,580 AUD card) */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold bg-rose-50 text-rose-600 px-2 py-0.5 rounded border border-rose-200 uppercase">
                    Failed LCP
                  </span>
                </div>

                <div className="my-2">
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">4.2s Stall</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Mobile Largest Contentful Paint</p>
                </div>

                <div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-2">
                    <div className="bg-rose-500 h-1.5 rounded-full w-[82%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Google Core Web Vitals</span>
                    <span className="text-rose-600 font-extrabold">Target: &lt; 1.2s</span>
                  </div>
                </div>
              </div>

              {/* Bottom KPI Card: 270 Portfolio Photos Overload */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200 uppercase">
                    Zero WebP
                  </span>
                </div>

                <div className="my-2">
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">270 Photos</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Uncompressed Gallery Overload</p>
                </div>

                <div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-2">
                    <div className="bg-amber-500 h-1.5 rounded-full w-[90%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">6.39 MB Initial Payload</span>
                    <span className="text-emerald-600 font-extrabold">Next.js Target: 650KB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MIDDLE ROW: AREA WAVE CHART & PIE CHART */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 4. STATISTICS / TRAJECTORY DUAL-WAVE CHART */}
            <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Conversion & Speed Trajectory Simulation</h3>
                  <p className="text-[11px] text-slate-400">
                    Comparing visitor bounce rate vs conversion probability across 6 milestone sprints
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-purple-700 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    WordPress Bounce (High)
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    Next.js Inquiries (Target)
                  </span>
                </div>
              </div>

              {/* SVG Area Chart with Gradients and Dual Bezier Waves */}
              <div className="w-full h-60 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="greenArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="purpleArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal gridlines */}
                  <line x1="0" y1="30" x2="600" y2="30" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="130" x2="600" y2="130" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="180" x2="600" y2="180" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Green Area Fill (Next.js Conversion Trajectory) */}
                  <path
                    d="M 0 180 C 100 150, 160 80, 240 85 C 320 90, 380 40, 480 30 C 540 25, 580 20, 600 15 L 600 220 L 0 220 Z"
                    fill="url(#greenArea)"
                  />

                  {/* Purple Wave Line (WordPress Bounce Rate) */}
                  <path
                    d="M 0 50 C 100 65, 180 120, 260 130 C 340 140, 420 170, 520 180 C 560 185, 590 190, 600 195"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                  />

                  {/* Green Wave Line (Inquiries & Bookings Lift) */}
                  <path
                    d="M 0 180 C 100 150, 160 80, 240 85 C 320 90, 380 40, 480 30 C 540 25, 580 20, 600 15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                  />

                  {/* Chart Points */}
                  <circle cx="240" cy="85" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="480" cy="30" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="260" cy="130" r="4" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="520" cy="180" r="4" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                </svg>

                {/* X-Axis Month / Sprint labels */}
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold px-2 pt-2 border-t border-slate-100">
                  <span>Audit Launch</span>
                  <span>Day 2: Assets</span>
                  <span>Day 4: Next.js</span>
                  <span>Day 5: VPS Host</span>
                  <span>Day 7: Live</span>
                  <span>Goal: 95+ Score</span>
                </div>
              </div>
            </div>

            {/* 5. TOP CATEGORIES / PAYLOAD PIE CHART */}
            <div id="payload" className="lg:col-span-4 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-slate-900">Payload Distribution (6.39 MB)</h3>
                <span className="text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-bold">•••</span>
              </div>

              {/* Pure SVG Pie Chart */}
              <div className="relative flex items-center justify-center my-2">
                <svg className="w-48 h-48" viewBox="0 0 100 100">
                  {/* Segment 1: Uncompressed Photos (Blue/Cyan - 84.5%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="#2563eb"
                    strokeWidth="50"
                    strokeDasharray="157"
                    strokeDashoffset="24"
                  />
                  {/* Segment 2: JavaScript Theme Scripts (Emerald - 9.8%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="50"
                    strokeDasharray="157"
                    strokeDashoffset="141"
                  />
                  {/* Segment 3: Fonts & Stylesheets (Amber/Orange - 5.7%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="50"
                    strokeDasharray="157"
                    strokeDashoffset="150"
                  />
                </svg>
              </div>

              {/* Category Breakdown */}
              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    Uncompressed JPEGs (270 Photos)
                  </span>
                  <span className="font-bold text-slate-900">5.40 MB (84.5%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    Flatsome & WooCommerce JS
                  </span>
                  <span className="font-bold text-slate-900">625 KB (9.8%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    CSS, Google Fonts & SVGs
                  </span>
                  <span className="font-bold text-slate-900">365 KB (5.7%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ROW 3: DETECTED DEFICIENCIES TABLE */}
          {/* ========================================================= */}
          <div id="issues" className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-bold text-base text-slate-900">Diagnosed Deficiencies & Audit Log</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct defects discovered on btcaptures.com.au requiring engineering resolution
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === "all"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All (8)
                </button>
                <button
                  onClick={() => setActiveTab("critical")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === "critical"
                      ? "bg-rose-500 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Critical (3)
                </button>
                <button
                  onClick={() => setActiveTab("performance")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === "performance"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Speed & Media (3)
                </button>
                <button
                  onClick={() => setActiveTab("seo")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === "seo"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  SEO & Meta (2)
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 px-3">Severity</th>
                    <th className="pb-3 px-3">Defect Description</th>
                    <th className="pb-3 px-3">Technical Root Cause</th>
                    <th className="pb-3 px-3">SiteSpark Solution</th>
                    <th className="pb-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3">
                      <span className="bg-rose-100 text-rose-700 font-extrabold px-2.5 py-1 rounded-md text-[10px] uppercase">
                        Critical
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900">
                      Client Partner Logos Open Raw Image JPEGs
                    </td>
                    <td className="py-3 px-3 text-slate-500">
                      Flatsome UX Builder default image link triggers full-screen navigation to raw JPEG file.
                    </td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">
                      Unlink media or replace with SVG partner carousel linking to client case studies.
                    </td>
                    <td className="py-3 px-3 text-right">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-bold underline"
                      >
                        Fix Now
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3">
                      <span className="bg-rose-100 text-rose-700 font-extrabold px-2.5 py-1 rounded-md text-[10px] uppercase">
                        Critical
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900">
                      6.39 MB Page Payload & 270 Photo Overload
                    </td>
                    <td className="py-3 px-3 text-slate-500">
                      Full resolution camera exports loaded synchronously without pagination or AVIF compression.
                    </td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">
                      Next.js 15 automatic AVIF responsive images + Sanity.io cloud CDN CDN pagination.
                    </td>
                    <td className="py-3 px-3 text-right">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-bold underline"
                      >
                        Fix Now
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3">
                      <span className="bg-amber-100 text-amber-800 font-extrabold px-2.5 py-1 rounded-md text-[10px] uppercase">
                        High
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900">
                      Missing Melbourne Photographer Title & Meta Tags
                    </td>
                    <td className="py-3 px-3 text-slate-500">
                      Default page title displays generic &quot;Home - BT Captures&quot; without target geo keywords.
                    </td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">
                      LocalBusiness + Photographer Schema.org JSON-LD targeting Melbourne photography niches.
                    </td>
                    <td className="py-3 px-3 text-right">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-bold underline"
                      >
                        Fix Now
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3">
                      <span className="bg-amber-100 text-amber-800 font-extrabold px-2.5 py-1 rounded-md text-[10px] uppercase">
                        Medium
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900">
                      Footer Copyright Encoding Glitch & Telephone Spacing
                    </td>
                    <td className="py-3 px-3 text-slate-500">
                      Raw unescaped &copy; symbol in Flatsome footer and %20 blank space inside tel: URL tag.
                    </td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">
                      Sanitize footer text and format clean direct click-to-dial mobile protocol.
                    </td>
                    <td className="py-3 px-3 text-right">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-bold underline"
                      >
                        Fix Now
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ROW 4: INTERACTIVE 7-DAY SPRINT ROADMAP */}
          {/* ========================================================= */}
          <div id="roadmap" className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  SiteSpark 7-Day Sprint
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Interactive Priority Fix Roadmap
                </h3>
              </div>
              <div className="bg-purple-50 text-purple-700 font-bold px-3 py-1.5 rounded-xl border border-purple-200 text-xs flex items-center gap-2">
                <span>{completedTasks.length} of 5 Milestones Resolved</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 1,
                  day: "Day 1",
                  title: "Headless Content Modeling (Sanity.io Studio)",
                  desc: "Set up fast schema for Wedding, Portrait, Corporate galleries with instant mobile uploads."
                },
                {
                  id: 2,
                  day: "Day 2–3",
                  title: "Next.js 15 App Router Frontend & Masonry Grid",
                  desc: "Fluid infinite masonry portfolio with automatic AVIF/WebP image optimization and blur-up loading."
                },
                {
                  id: 3,
                  day: "Day 4",
                  title: "Dedicated Cloud VPS Hosting & Dockerization",
                  desc: "Deploy onto high-speed Sydney/Melbourne VPS with automated Nginx reverse proxy and SSL."
                },
                {
                  id: 4,
                  day: "Day 5",
                  title: "Melbourne Local SEO & Schema.org Rich Snippets",
                  desc: "Inject dynamic Photographer and AggregateRating structured data for Google Maps 3-Pack ranking."
                },
                {
                  id: 5,
                  day: "Day 6–7",
                  title: "Conversion Engine & Direct WhatsApp Booking Integration",
                  desc: "Embed live 5-star Google reviews carousel and 1-tap WhatsApp consultation buttons (+94715448553)."
                }
              ].map((task) => {
                const isChecked = completedTasks.includes(task.id);
                return (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`cursor-pointer rounded-xl p-4 transition-all border flex items-start justify-between gap-4 ${
                      isChecked
                        ? "bg-purple-50/50 border-purple-200"
                        : "bg-slate-50 border-slate-200/70 hover:bg-white hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? "bg-purple-600 text-white" : "border-2 border-slate-400"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                            {task.day}
                          </span>
                          <h5 className={`text-xs sm:text-sm font-bold ${isChecked ? "line-through text-slate-500" : "text-slate-900"}`}>
                            {task.title}
                          </h5>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{task.desc}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-purple-600 shrink-0">
                      {isChecked ? "Completed" : "Pending"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================= */}
          {/* BOTTOM CALL TO ACTION BANNER */}
          {/* ========================================================= */}
          <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                SiteSpark Agency Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Transform BT Captures to 95+ PageSpeed Score
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm max-w-xl">
                Migrate from bloated Flatsome WordPress to High-Performance Next.js 15 + Sanity.io Studio on a dedicated Cloud VPS in just 7 days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/40 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp (+94 71 544 8553)
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* ========================================================= */}
      {/* FLOATING WHATSAPP PILL BUTTON (MOBILE & DESKTOP) */}
      {/* ========================================================= */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/50 flex items-center gap-2.5 transition-all hover:scale-105 group"
      >
        <MessageCircle className="w-6 h-6 fill-current animate-bounce" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Support
        </span>
      </a>
    </div>
  );
}
