"use client";

import React from "react";
import { Calendar } from "lucide-react";

export default function PortfolioChart() {
    return (
        <div className="w-full">
            {/* Header & Tabs */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h3 className="font-bold text-[22px] font-heading text-[#101923]">Portfolio Performance</h3>

                <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-1 flex gap-1">
                    <div className="px-2 py-1 text-gray-400">
                        <Calendar size={18} />
                    </div>
                    {['1M', '3M', '6M', '1Y', 'All'].map(period => (
                        <button key={period} className={`px-4 py-1 text-xs font-bold rounded-md transition-all ${period === '6M' ? 'text-[#8C2E90]' : 'text-gray-400 hover:text-gray-900'}`}>
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-10 px-2">
                <div>
                    <p className="text-[#101923] text-sm font-medium mb-1">Current Value</p>
                    <p className="text-[32px] font-bold text-[#8C2E90] tracking-tight leading-none">$132,500</p>
                </div>
                <div>
                    <p className="text-[#101923] text-sm font-medium mb-1">Total Gain</p>
                    <p className="text-[32px] font-bold text-[#8C2E90] tracking-tight leading-none">+$7,500</p>
                </div>
                <div>
                    <p className="text-[#101923] text-sm font-medium mb-1">Gain %</p>
                    <p className="text-[32px] font-bold text-[#8C2E90] tracking-tight leading-none">+6.0%</p>
                </div>
                <div>
                    <p className="text-[#101923] text-sm font-medium mb-1">Annualized Return</p>
                    <p className="text-[32px] font-bold text-[#8C2E90] tracking-tight leading-none">8.5%</p>
                </div>
            </div>

            {/* High-Fidelity Chart Visual */}
            <div className="relative w-full h-[400px] bg-gradient-to-b from-[#F5EFF9] to-[#ffffff] rounded-[30px] p-6 md:p-10 shadow-[inner_0_0_40px_rgba(140,46,144,0.05)] overflow-hidden border border-[#F3EBF7]">

                {/* Y-Axis Labels */}
                <div className="absolute left-6 top-10 bottom-10 flex flex-col justify-between text-xs font-medium text-gray-400 z-10">
                    <span>$140k</span>
                    <span>$105k</span>
                    <span>$105k</span>
                    <span>$375k</span>
                    <span>$375k</span>
                    <span>$0k</span>
                </div>

                {/* Chart Content Container */}
                <div className="absolute inset-0 left-16 right-6 top-10 bottom-10">
                    {/* SVG Chart */}
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                        <defs>
                            <linearGradient id="solidAreaGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8C2E90" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#8C2E90" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#8C2E90" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#6C63FF" />
                                <stop offset="100%" stopColor="#FFFFFF" />
                            </linearGradient>

                            {/* Glow Filter for the Tooltip */}
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Dashed Grid Lines - Horizontal */}
                        {[0, 60, 120, 180, 240, 300].map((y, i) => (
                            <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                        ))}

                        {/* Vertical Grid Lines (Matches Months) */}
                        {[0, 200, 400, 600, 800, 1000].map((x, i) => (
                            <line key={i} x1={x} y1="0" x2={x} y2="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                        ))}

                        {/* Secondary Dashed Line (Projection?) */}
                        <path
                            d="M0,200 Q250,190 500,170 T1000,120"
                            fill="none"
                            stroke="#8C2E90"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            opacity="0.5"
                        />

                        {/* Main Solid Area Chart */}
                        {/* Smooth Curve going up */}
                        <path
                            d="M0,180 Q250,160 500,120 T900,40 L1000,30 L1000,300 L0,300 Z"
                            fill="url(#solidAreaGrad)"
                        />
                        {/* Main Line Stroke */}
                        <path
                            d="M0,180 Q250,160 500,120 T900,40 L1000,30"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                        />

                        {/* Tooltip Point Marker */}
                        <circle cx="900" cy="40" r="4" fill="white" stroke="#8C2E90" strokeWidth="2" />
                    </svg>

                    {/* Tooltip Card (React Overlay for easier text styling) */}
                    <div className="absolute top-[5%] right-[5%] z-20">
                        <div className="bg-gradient-to-r from-[#8C2E90] to-[#2C64B1] text-white p-4 rounded-[16px] rounded-bl-[4px] shadow-2xl transform translate-y-[-10px]">
                            <p className="text-[20px] font-bold leading-none mb-1">$132,500</p>
                            <p className="text-[12px] opacity-90 font-medium">+$7,550 (+6.0%)</p>

                            {/* Decorative curved SVG connection to the point if desired, but simplified card is clean */}
                        </div>
                    </div>

                    {/* X-Axis Labels */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs font-medium text-gray-400 translate-y-6">
                        <span className="w-10 text-center">Jan</span>
                        <span className="w-10 text-center">Feb</span>
                        <span className="w-10 text-center">Mar</span>
                        <span className="w-10 text-center">Apr</span>
                        <span className="w-10 text-center">May</span>
                        <span className="w-10 text-center">Jun</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
