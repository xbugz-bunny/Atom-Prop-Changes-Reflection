"use client";

import React from "react";
import Link from "next/link";
import {
    Bell,
    Wallet as WalletIcon,
    Shield,
    PieChart,
    ArrowRight,
    ArrowLeft
} from "lucide-react";
import PortfolioChart from "../components/PortfolioChart";
import Footer from "../components/Footer";

const atompropLogo = "/images/atomprop-logo.svg";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] font-body text-[#1A1D1F] overflow-x-hidden relative">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#8E2C8F]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-[#2E62AF]/10 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Top Navigation Bar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#060415]/95 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
                    {/* Logo - Left */}
                    <Link href="/" className="flex items-center">
                        <img src={atompropLogo} alt="Atomprop" className="h-8 w-auto" />
                    </Link>

                    {/* Navigation Pill - Center */}
                    <nav className="hidden md:flex items-center border border-white/10 rounded-full px-1 py-1 bg-white/5">
                        <Link href="/dashboard" className="px-6 py-2 rounded-full bg-white/10 text-white font-bold text-[13px] transition-all">
                            Dashboard
                        </Link>
                        <Link href="/properties" className="px-6 py-2 rounded-full text-white/50 hover:text-white font-medium text-[13px] transition-all">
                            Portfolio
                        </Link>
                        <Link href="/wallet-details" className="px-6 py-2 rounded-full text-white/50 hover:text-white font-medium text-[13px] transition-all">
                            Wallet
                        </Link>
                        <Link href="/properties-preview" className="px-6 py-2 rounded-full text-white/50 hover:text-white font-medium text-[13px] transition-all">
                            Marketplace
                        </Link>
                    </nav>

                    {/* Right Utilities */}
                    <div className="flex items-center gap-4">
                        <Link href="/properties" className="text-white/80 hover:text-white transition-all p-2">
                            <Shield size={20} strokeWidth={2} />
                        </Link>
                        <Link href="/wallet-details" className="text-white/80 hover:text-white transition-all p-2">
                            <WalletIcon size={20} strokeWidth={2} />
                        </Link>
                        <Link href="/transaction" className="text-white/80 hover:text-white transition-all p-2 relative">
                            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#060415]"></div>
                            <Bell size={20} strokeWidth={2} />
                        </Link>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/20">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=M%20Mohsin&backgroundColor=ffffff"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-28 pb-20 max-w-[1240px] mx-auto px-6 relative z-10">
                {/* Breadcrumb & Greeting */}
                <div className="mb-10">
                    <Link href="/dashboard" className="flex items-center gap-2 text-[#6F767E] hover:text-[#1A1D1F] transition-colors mb-4 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[14px] font-bold">Dashboard</span>
                    </Link>
                    <h1 className="text-[32px] font-bold font-heading text-[#1A1D1F] tracking-tight mb-2">Welcome Back, Muhammad Mohsin</h1>
                    <p className="text-[#6F767E] text-[14px] font-medium">Here&apos;s An Overview Of Your Real Estate Investment Portfolio.</p>
                </div>

                {/* Summary Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {[
                        { title: "Portfolio Value", value: "Rs 132, 500.00", sub: "6.00%", icon: "value" },
                        { title: "Total Invested", value: "Rs 125, 000.00", sub: "Across 8 Properties", icon: "invested" },
                        { title: "Properties", value: "8", sub: "Active Investments", icon: "properties" },
                        { title: "Total Tokens", value: "2,500", sub: "Owned Tokens", icon: "tokens" },
                    ].map((card, idx) => (
                        <div key={idx} className="bg-[#8E2C8F] rounded-[20px] rounded-tr-[50px] p-6 text-white shadow-xl shadow-purple-900/10 transition-all hover:scale-[1.03] hover:shadow-2xl">
                            <div className="mb-6 w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm">
                                <PieChart size={20} className="text-white" />
                            </div>
                            <p className="text-white/70 text-[12px] font-bold uppercase tracking-wider mb-1">{card.title}</p>
                            <h2 className="text-[22px] font-bold mb-1 tracking-tight">{card.value}</h2>
                            <p className="text-[12px] text-white/50 font-medium">{card.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Main Grid: Overview & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    {/* Portfolio Overview Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-[24px] p-8 border border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[18px] font-bold font-heading">Portfolio Overview</h3>
                                <Link href="/properties" className="text-[13px] font-bold text-[#8E2C8F] hover:underline flex items-center gap-1 group">
                                    View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Summary Mini Cards */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { label: "Total Return", value: "+6.0%", color: "text-[#27AE60]" },
                                    { label: "Monthly Income", value: "Rs. 1,063", color: "text-[#2E62AF]" },
                                    { label: "Avg. Yield", value: "8.5%", color: "text-[#8E2C8F]" }
                                ].map((stat, i) => (
                                    <div key={stat.label} className="bg-[#F8F9FA] rounded-[16px] p-5 border border-black/[0.03] text-center">
                                        <p className="text-[11px] text-[#6F767E] font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                                        <p className={`text-[18px] font-bold ${stat.color}`}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Properties List */}
                            <div className="space-y-3">
                                <p className="text-[12px] font-bold text-[#6F767E] uppercase tracking-wider mb-4">Your Properties</p>
                                {[
                                    { name: "Downtown Apartment Complex", sub: "500 Sq.Ft • 8.5% yield", price: "Rs 25,000.00", trend: "+2.3%" },
                                    { name: "Commercial Office Building", sub: "750 Sq.Ft • 7.5% yield", price: "Rs 237,500.00", trend: "+1.8%" },
                                    { name: "Suburban Shopping Center", sub: "1250 Sq.Ft • 9.2% yield", price: "Rs 82,500.00", trend: "+3.1%" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-[#F8F9FA]/50 hover:bg-[#F8F9FA] rounded-2xl border border-transparent hover:border-black/[0.05] transition-all group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-black/[0.03] shadow-sm">
                                                <PieChart size={20} className="text-[#8E2C8F]" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[14px] text-[#1A1D1F]">{item.name}</p>
                                                <p className="text-[12px] text-[#6F767E] font-medium">{item.sub}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-[14px] text-[#1A1D1F]">{item.price}</p>
                                            <p className="text-[11px] font-bold text-[#27AE60]">{item.trend}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-8">
                                <Link href="/properties-preview" className="flex-1 h-12 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-[14px] hover:opacity-90 transition-all shadow-lg shadow-purple-900/20 flex items-center justify-center">
                                    Explore Properties →
                                </Link>
                                <Link href="/properties" className="flex-1 h-12 bg-white border border-[#EFEFEF] text-[#1A1D1F] rounded-full font-bold text-[14px] hover:bg-[#F8F9FA] transition-all flex items-center justify-center">
                                    Trade Sq.Ft →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity Column */}
                    <div className="flex flex-col">
                        <div className="bg-white rounded-[24px] p-8 border border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex-grow">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[18px] font-bold font-heading">Recent Activity</h3>
                                <Link href="/transaction" className="text-[13px] font-bold text-[#8E2C8F] hover:underline flex items-center gap-1 group">
                                    View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { type: "Investment", date: "January 24, 2024", amount: "Rs 5,00.00", status: "Completed", color: "text-[#1A1D1F]" },
                                    { type: "Dividend", date: "January 10, 2024", amount: "+Rs 425.00", status: "Completed", color: "text-[#27AE60]" },
                                    { type: "Trade", date: "January 8, 2024", amount: "Rs 2,500.00", status: "Completed", color: "text-[#1A1D1F]" },
                                ].map((act, i) => (
                                    <div key={i} className="flex justify-between items-start border-b border-black/[0.03] pb-4 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-bold text-[14px] mb-0.5">{act.type}</p>
                                            <p className="text-[11px] text-[#6F767E] font-medium">{act.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`font-bold text-[14px] mb-0.5 ${act.color}`}>{act.amount}</p>
                                            <p className="text-[10px] font-bold text-[#27AE60] uppercase tracking-wider">{act.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/properties-preview" className="w-full h-12 mt-8 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-purple-900/20 group">
                                Invest →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Performance Chart Card */}
                <div className="bg-white rounded-[24px] p-8 border border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                    <PortfolioChart />
                </div>
            </main>

            <Footer />
        </div>
    );
}