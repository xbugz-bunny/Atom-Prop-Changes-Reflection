"use client";

import {
    ArrowLeft,
    LayoutGrid,
    Share2,
    Heart,
    ChevronLeft,
    ChevronRight,
    Download,
    Eye,
    CheckCircle,
    HelpCircle,
    Phone,
    Mail,
    MapPin,
    Users,
    Bed
} from "lucide-react";
import { Button } from "../components/button";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PropertyDetailPage() {
    const [selectedArea, setSelectedArea] = useState(600);
    const [pledgeArea, setPledgeArea] = useState(150);

    // Grid for the pledge simulation
    const gridCells = Array.from({ length: 110 }, (_, i) => i); // ~11x10 grid

    return (
        <div className="min-h-screen bg-[#F8F9FB] font-body overflow-x-hidden relative">
            {/* 
        ========================================
        1. HEADER (Gradient BG)
        ========================================
      */}
            <Header />

            <div className="container-main mt-24 pt-4 mb-4 relative z-20">
                <div className="flex items-center gap-4 mt-16 mb-8">
                    <Link href="/properties" className="hover:opacity-80 transition-opacity flex items-center gap-2">
                        <ArrowLeft className="w-6 h-6 text-black" />
                        <span className="font-bold text-black text-lg">Properties Detail</span>
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-[#912d90] font-bold text-3xl md:text-4xl mb-8 mt-4 font-[family-name:var(--font-space-grotesk)]">
                        Golden Tulip-Tech7
                    </h1>
                </div>
            </div>

            {/* 
        ========================================
        2. HERO SECTION
        ========================================
      */}
            <main className="container-main relative z-30 pb-20">

                {/* Decorative Gradient Blob - Merging with Header */}
                <div
                    className="absolute top-[-150px] right-[-100px] pointer-events-none z-0"
                    style={{
                        width: '386px',
                        height: '386px',
                        borderRadius: '386px',
                        background: 'linear-gradient(180deg, #2e62af 0%, #912d90 100%)',
                        filter: 'blur(190px)'
                    }}
                />

                <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden shadow-2xl mb-12 group">
                    <img src="https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png" alt="Golden Tulip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1229]/80 via-transparent to-transparent opacity-60" />

                    {/* Image Index Indicator */}
                    <div className="absolute bottom-6 right-6 z-20">
                        <div className="text-white/90 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                            1 / 8
                        </div>
                    </div>

                    {/* Overlay Badge - Typography Fixed */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full px-4">
                        <div className="bg-[#912d90] text-white px-7 py-3 rounded-t-xl font-bold font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl shadow-lg text-center leading-[1.15]">
                            Two Bedroom Apartment in Executive Residences 1
                        </div>
                        <div className="bg-[#6B2472] text-white/90 px-8 py-2 rounded-b-xl text-sm font-medium font-[family-name:var(--font-space-grotesk)] shadow-md tracking-wide">
                            100% Funded by 300 Investors
                        </div>
                    </div>

                    {/* Navigation Arrows - Bottom Center */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                        <button className="w-10 h-10 bg-[#2C64B1] rounded-full flex items-center justify-center hover:bg-[#1a4a8d] transition-colors border border-white/20 shadow-lg">
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-10 h-10 bg-[#2C64B1] rounded-full flex items-center justify-center hover:bg-[#1a4a8d] transition-colors border border-white/20 shadow-lg">
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="border-b-2 border-[#E91E63] mb-10">
                    <div className="flex gap-12">
                        {["Cost breakdown", "Property detail", "Documents"].map((tab, i) => {
                            const active = tab === "Property detail";
                            return (
                                <button
                                    key={tab}
                                    className={`relative pb-4 text-lg transition-all ${active ? "text-black font-bold" : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    {tab}
                                    {active && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[4px] bg-[#2C64B1] rounded-t-full" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Info Bar */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-8 px-4">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-1">Two Bedroom Apartment in Executive Residences 1</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-[#882F91] font-bold text-xl">PKR 35,000,000</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-0 md:gap-4 mt-4 md:mt-0 bg-white md:bg-transparent rounded-xl p-3 md:p-0 shadow-sm md:shadow-none border md:border-none">
                        <div className="flex items-center gap-2 pr-4 md:border-r border-gray-200 last:border-r-0">
                            <img src="/images/auth/auth-coins.svg" alt="" className="w-5 h-5 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <span className="text-sm text-gray-900 font-bold whitespace-nowrap">564,100 Tokens Sold</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 md:border-r border-gray-200 last:border-r-0">
                            <Users className="w-4 h-4 text-[#912d90]" />
                            <span className="text-sm text-gray-900 font-bold whitespace-nowrap">300 Investors</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 md:border-r border-gray-200 last:border-r-0">
                            <MapPin className="w-4 h-4 text-[#912d90]" />
                            <span className="text-sm text-gray-900 font-bold whitespace-nowrap">Hill states</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 md:border-r border-gray-200 last:border-r-0">
                            <CheckCircle className="w-4 h-4 text-[#912d90]" />
                            <span className="text-sm text-gray-900 font-bold whitespace-nowrap">Rented</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 md:border-r border-gray-200 last:border-r-0">
                            <span className="text-sm text-gray-900 font-bold whitespace-nowrap">Appartment</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                            <Bed className="w-4 h-4 text-[#912d90]" />
                            <span className="text-sm text-gray-900 font-bold whitespace-nowrap">Bedroom</span>
                        </div>
                    </div>
                </div>


                {/* 
        ========================================
        3. INVESTMENT INTERFACE
        ========================================
        */}
                <div className="flex flex-col gap-6 mb-20">

                    {/* 1. TOP CARD: Select Area (Full Width) */}
                    <div className="relative rounded-[15px] p-8 md:p-10 overflow-hidden border-[5px] border-[#912d90] bg-[#0C091D] w-full max-w-[1049px] h-auto min-h-[326px] shadow-[90px_248px_74px_0px_rgba(0,0,0,0),58px_158px_67px_0px_rgba(0,0,0,0.01),32px_89px_57px_0px_rgba(0,0,0,0.05),14px_40px_42px_0px_rgba(0,0,0,0.09),4px_10px_23px_0px_rgba(0,0,0,0.10)]">

                        {/* Top Warning Text (Centered) */}
                        <div className="absolute top-8 left-0 w-full text-center px-4">
                            <div className="flex items-center justify-center gap-2 opacity-80 mb-1">
                                {/* Small Handshake/Icon if needed, keeping it subtle */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m11 17 2 2a1 1 0 1 0 3-1.73l-5-2.88a1 1 0 0 1-1.02-.13l-4.58-4.58a1 1 0 0 1 1.76-1.01l4.58 4.58a1 1 0 0 0 1.02.13l5 2.88a1 1 0 0 1-1.73 3l-2-2" />
                                    <path d="m15 13 4 4a1 1 0 1 0 3-1.73l-5-2.88a1 1 0 0 1-1.02-.13l-4.58-4.58a1 1 0 0 1 1.76-1.01l4.58 4.58a1 1 0 0 0 1.02.13l5 2.88a1 1 0 0 1-1.73 3l-4 4" />
                                </svg>
                            </div>
                            <p className="text-white/80 font-light font-[family-name:var(--font-space-grotesk)] text-sm md:text-base leading-tight">
                                Property share in multiple of 100sft will be allotted <br /> subject to availability
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 mt-20">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                                <div>
                                    <h3 className="text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-2">Select Area</h3>
                                    <p className="text-white/70 font-light text-lg">Move the slider to pledge remaining area.</p>
                                </div>

                                {/* Gradient Badge */}
                                <div className="bg-gradient-to-r from-[#2e62af] to-[#912d90] px-6 py-2.5 rounded-[8px] text-white font-bold text-lg shadow-lg">
                                    PKR 60,000 per Sqft
                                </div>
                            </div>

                            {/* Slider Container */}
                            <div className="relative mb-12">
                                {/* Dashed Lines */}
                                <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white/20 -translate-y-1/2 pointer-events-none" />
                                <div className="absolute top-[-20px] bottom-[-20px] left-[70%] border-l border-dashed border-white/20 pointer-events-none" />

                                {/* Track */}
                                <div className="h-4 bg-[#1A1128] border border-white/10 rounded-full relative overflow-visible shadow-inner">
                                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[70%] rounded-full shadow-[0_0_15px_rgba(136,47,145,0.6)]" />

                                    {/* Handle */}
                                    <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#1A1128] border-[3px] border-[#d946ef] rounded-full shadow-[0_0_20px_#d946ef] cursor-pointer z-20 flex items-center justify-center transform hover:scale-110 transition-transform">
                                        <div className="flex gap-[2px]">
                                            <span className="w-[1.5px] h-3 md:h-4 bg-white/60 rounded-full" />
                                            <span className="w-[1.5px] h-3 md:h-4 bg-white/60 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute left-[70%] -bottom-14 -translate-x-1/2 px-5 py-2">
                                        <span className="bg-[#1A1128]/90 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm font-light whitespace-nowrap shadow-lg">
                                            100 sq.ft @1.6M
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. BOTTOM ROW: Stats & Pledge Input */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* LEFT CARD: Financial Stats (Restored Text, Gradient BG) */}
                        <div className="w-full rounded-[15px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between"
                            style={{ background: 'linear-gradient(118.86deg, #2e62af 0.37%, #912d90 99.63%)' }}>

                            <div className="flex flex-col gap-6">
                                {/* Header Stats */}
                                <div className="flex justify-between items-start border-b border-white/20 pb-6">
                                    <div>
                                        <p className="text-white/80 text-sm uppercase tracking-wider mb-1">Original Price</p>
                                        <h3 className="text-2xl font-bold font-heading">PKR 35,000,000</h3>
                                    </div>
                                </div>

                                {/* Stats List (Restored) */}
                                <div className="space-y-5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">Net Rental Yield</span>
                                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px] font-bold">i</div>
                                        </div>
                                        <span className="text-xl font-bold">6.49%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">Annualised ROI</span>
                                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px] font-bold">i</div>
                                        </div>
                                        <span className="text-xl font-bold">13.18%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">Gros Rental Yield</span>
                                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px] font-bold">i</div>
                                        </div>
                                        <span className="text-xl font-bold">7.23%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">Funded Date</span>
                                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px] font-bold">i</div>
                                        </div>
                                        <span className="text-xl font-bold">11 Nov 2025</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Link */}
                            <div className="mt-8 pt-4 border-t border-white/20 flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[11px] font-bold">i</div>
                                <div className="text-sm leading-tight">
                                    <span className="font-bold block">Need help to understand the details?</span>
                                    <a href="#" className="font-light hover:underline opacity-90">Learn more</a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD: Pledge Area */}
                        <div className="w-full bg-[#0C091D] rounded-[15px] pt-8 px-8 pb-0 text-white shadow-2xl relative border border-white/5 flex flex-col overflow-hidden">
                            <div className="space-y-6 mb-8">
                                {/* Area Input */}
                                <div className="space-y-2">
                                    <label className="text-white text-base font-medium">Area To Pledge</label>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-[50px] bg-transparent border border-white/20 rounded-[5px] flex items-center px-4 relative">
                                            <input
                                                type="number"
                                                value={pledgeArea}
                                                onChange={(e) => setPledgeArea(Number(e.target.value))}
                                                className="bg-transparent text-lg font-medium w-full outline-none text-white placeholder-white/50"
                                            />
                                            <span className="absolute right-4 text-white text-base">sq.ft</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Grid Preview */}
                                <div className="space-y-2">
                                    <label className="text-white text-base font-medium">Selected Area Preview</label>
                                    <div className="w-full">
                                        <div className="grid gap-[2px]" style={{ gridTemplateColumns: 'repeat(25, 1fr)' }}>
                                            {Array.from({ length: 225 }).map((_, i) => {
                                                // 9 rows x 25 cols = 225 cells
                                                const totalSold = 18;
                                                const totalSelected = 3;
                                                const row = Math.floor(i / 25);

                                                let cellClass = "";

                                                if (row >= 7) {
                                                    // Bottom 2 rows - Dark/Outline
                                                    cellClass = "border border-white/20 bg-transparent";
                                                } else {
                                                    if (i < totalSold) {
                                                        cellClass = "bg-[#4a7ac9]"; // Blue
                                                    } else if (i < totalSold + totalSelected) {
                                                        cellClass = "bg-[#963c96]"; // Purple
                                                    } else {
                                                        cellClass = "bg-[#dce3ed]"; // Light
                                                    }
                                                }

                                                return <div key={i} className={`aspect-square w-full rounded-[1px] ${cellClass}`} />;
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Price Input */}
                                <div className="space-y-2">
                                    <label className="text-white text-base font-medium">Total Price</label>
                                    <div className="h-[50px] bg-transparent border border-white/20 rounded-[5px] flex items-center px-4 relative">
                                        <span className="text-lg font-medium">60,000</span>
                                        <span className="absolute right-4 text-white text-base uppercase">PKR</span>
                                    </div>
                                </div>
                            </div>

                            {/* Proceed Button - Full Width */}
                            <button className="w-[calc(100%+4rem)] -ml-8 py-4 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-bold text-lg hover:brightness-110 transition-all mt-auto">
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>

                {/* 
        ========================================
        4. INFO GRIDS
        ========================================
        */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/images/atomprop-mark.svg" className="w-6 h-6" alt="" />
                        <span className="text-purple-600 font-bold">Why invest in this property?</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-black mb-8">What Makes This Property a Strong Investment</h2>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                        {[
                            { title: "Modern Community Living", desc: "Contemporary Apartments In A Well-Planned Community Offering Comfort, Convenience, And Strong Lifestyle Appeal." },
                            { title: "Strong Rental Demand", desc: "Vacant And Ready For Move-In, The Unit Offers Excellent Long-Term Rental Prospects And High Occupancy Potential." },
                            { title: "Premium Facilities", desc: "Access To Top Amenities Including A Pool, Gym, Sauna, Landscaped Areas, Children's Play Zones, And Nearby Retail." },
                            { title: "Attractive Investment Returns", desc: "Solid Rental Yields And Strong Long-Term ROI Driven By Both Rental Income And Property Appreciation." },
                            { title: "Below Market Value", desc: "Priced Under Market Valuation, Providing Immediate Equity Upside And Enhanced Investment Security." },
                            { title: "Prime Location", desc: "Well-Connected To Major City Hubs, Ensuring Consistent Tenant Demand And Long-Term Value Growth." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg text-black">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 
        ========================================
        5. DOCUMENTS (Dark Theme)
        ========================================
        */}
                <div className="relative bg-[#1A1128] rounded-[30px] p-8 md:p-12 mb-20 z-10 overflow-hidden">
                    <h2 className="text-3xl font-heading font-bold text-white mb-8 relative z-20">Documents</h2>
                    <div className="space-y-4 relative z-20">
                        {[
                            { name: "Property Brochure", type: "PDF" },
                            { name: "Property Valuation Report", type: "PDF" },
                            { name: "Whitepaper", type: "PDF" },
                            { name: "Investment Memorandum", type: "PDF" },
                            { name: "Projections", type: "PDF" },
                        ].map((doc, i) => (
                            <div key={i} className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#882F91]/20 flex items-center justify-center border border-[#882F91]/50 text-[#882F91]">
                                        <Download className="w-5 h-5" />
                                    </div>
                                    <span className="text-white font-medium group-hover:text-purple-300 transition-colors">{doc.name}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-white/40 font-mono hidden sm:block">{doc.type}</span>
                                    <Download className="w-5 h-5 text-white/60 hover:text-white transition" />
                                    <Eye className="w-5 h-5 text-white/60 hover:text-white transition" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                {/* Decorative Gradient Blob - positioned below Documents section */}
                <div className="relative mb-20 h-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[379px] h-[379px] rounded-full pointer-events-none flex justify-center items-center"
                        style={{
                            background: 'conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.90) 0deg, rgba(141, 0, 251, 0.90) 76.875deg, rgba(144, 175, 255, 0.90) 120deg, rgba(151, 51, 252, 0.90) 161.25deg, rgba(130, 91, 255, 0.90) 198.75deg, rgba(111, 229, 187, 0.90) 236.25deg, rgba(157, 237, 255, 0.90) 260.625deg, rgba(11, 7, 27, 0.90) 360deg)',
                            filter: 'blur(90px)',
                            transform: 'rotate(179.07deg)',
                            padding: '0 65.75px 47px 67.25px'
                        }}
                    />
                </div>
                {/* 
        ========================================
        6. PROCESS TIMELINE
        ========================================
        */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/images/group-1261156732.svg" className="w-8 h-8 object-contain" alt="" />
                        <h2 className="text-3xl font-heading font-bold text-black">What&apos;s the process?</h2>
                    </div>
                    {/* Timeline with SVG line and connector logos - matching About Us design */}
                    <div className="relative pt-4 pl-8">
                        {/* Vertical Purple Line - goes through center of circles */}
                        <div className="absolute left-[58px] top-[29px] w-[3px] bottom-[29px]">
                            <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 3 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.5" y1="0" x2="1.5" y2="801" stroke="#922A8E" strokeWidth="3" />
                            </svg>
                        </div>

                        {[
                            { title: "Payment Review", desc: "Once Your Payment Is Confirmed, Your Tokens Will Appear In Both The Dubai DEBT App And Your DOrPDO Mint Wallet." },
                            { title: "Ownership Certificate", desc: "Once The Property Is Fully Funded, Your Official Property Token Ownership Certificate, Issued By DoO, Will Be Available On The Dubai REFT App." },
                            { title: "Monthly Rental Income", desc: "When The Property Is Rented, You'll Start Receiving Monthly Rental Income Directly In Your YNYPDO Mint Wallet." },
                            { title: "Exit Made Easy", desc: "After The 6-Month Lock-In Period, You Can List Your Property Tokens For Sale On Our Marketplace, Providing More Flexibility Compared To Traditional Real Estate." }
                        ].map((step, i, arr) => (
                            <div key={i} className={`relative flex gap-6 ${i !== arr.length - 1 ? 'pb-12' : ''}`}>
                                {/* Circular White Background with Dots Icon */}
                                <div className="relative z-10 w-[52px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#922a8e] shrink-0">
                                    <img src="/images/timeline/group-dots-2.svg" alt="" className="w-6 h-6 object-contain" />
                                </div>

                                {/* Text Content */}
                                <div className="pt-1">
                                    <h3 className="font-bold text-lg mb-2 leading-none">{step.title}</h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold font-heading mb-4">Property description</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl text-sm md:text-base">
                        This Property Offers Modern, Well-Designed Living In A Highly Sought-After Community Known For Its Convenience And Lifestyle Appeal. With Strong Rental Demand And A Prime Location Connected To Major City Hubs, It Attracts Both Residents And Long-Term Investors. The Unit Provides Access To Premium Amenities Including Fitness Facilities, Landscaped Areas, And Nearby Retail Options. Its Below-Market Price Delivers Immediate Value And Built-In Equity From Day One.
                    </p>
                    <button className="text-[#882F91] font-bold text-sm mt-2 hover:underline">Read More</button>
                </div>

                {/* 
        ========================================
        7. LOCATION & CONTACT
        ========================================
        */}
                <div className="mb-20">
                    {/* Location Heading and Address - Above Both Cards */}
                    <h2 className="text-2xl font-bold font-heading mb-4">Location</h2>
                    <div className="flex items-center gap-2 mb-6 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 text-[#882F91]" />
                        B17 Islamabad
                    </div>

                    {/* Two Cards Aligned Side by Side */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Location Map Card Div */}
                        <div className="flex flex-col">
                            <div className="bg-[#0D4A3E] rounded-[20px] overflow-hidden h-[380px] w-full relative">
                                <img src="/images/location-map-placeholder.png" className="w-full h-full object-cover opacity-70" alt="Map" />
                                <div className="absolute inset-0 p-8">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                                            <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                                        <button className="w-8 h-8 bg-white/90 backdrop-blur-md rounded-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors font-bold">+</button>
                                        <button className="w-8 h-8 bg-white/90 backdrop-blur-md rounded-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors font-bold">-</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card Div */}
                        <div className="flex flex-col">
                            <div className="bg-gradient-to-br from-[#2e62af] to-[#912d90] rounded-[20px] p-8 text-white flex flex-col justify-between shadow-lg h-[380px]">
                                {/* Contact Card Content */}
                                <div>
                                    <h3 className="text-2xl font-bold font-heading mb-2">GOT A QUESTIONS?</h3>
                                    <p className="text-white/80 mb-6 text-sm">We&apos;re Here To Help</p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                                <Phone className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-medium">+92 00000000</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                                                <Phone className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-medium">+92 00000000</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                                                <Mail className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-medium">Support@Atomprop.Com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/20 text-sm text-white/90">
                                    WhatsApp Or Call Our Toll-Free Number:
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
