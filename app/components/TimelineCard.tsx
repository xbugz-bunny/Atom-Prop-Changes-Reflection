"use client";

import React from "react";
import Image from "next/image";

interface TimelineCardProps {
    title: string;
    description?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ title }) => {
    return (
        <div 
            className="relative w-full max-w-[432px] h-[102px] bg-[#0c091d] rounded-[15px] overflow-visible border border-white/5 mx-auto group hover:border-[#922A8E]/50 transition-colors duration-300"
            style={{
                boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.3)" // Simplified shadow for cleaner look, detailed figma shadow was a bit heavy
            }}
        >
            {/* Top-Left Corner Glow (Eclipse) */}
            <div className="absolute -left-[30px] -top-[30px] w-[232px] h-[232px] pointer-events-none z-0 mix-blend-screen opacity-80">
                <img src="/images/timeline/card-glow.png" alt="" className="w-full h-full object-contain" />
            </div>

            {/* Background Assets Layering */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[15px]">
                 {/* 1. Base Gradient/BG */}
                 <img 
                    src="/images/timeline/card-bg.svg" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                 />
                 
                 {/* 2. Main Network Pattern - The "Dot Vectors" */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                        src="/images/timeline/card-mask-1.svg" 
                        alt="" 
                        className="w-[120%] h-auto max-w-none object-cover opacity-100"
                        style={{ transform: 'scale(1.2)' }}
                    />
                 </div>

                 {/* 3. Secondary/Glow Details */}
                 <div className="absolute inset-0 flex items-center justify-center">
                     <img 
                        src="/images/timeline/card-mask-2.svg" 
                        alt="" 
                        className="w-[120%] h-auto max-w-none object-cover opacity-100 mix-blend-overlay"
                     />
                 </div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 z-10">
                <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-white text-center leading-[1.2] drop-shadow-md">
                    {title}
                </h3>
                {/* White Underline */}
                <div className="w-[40px] h-[2px] bg-white mt-3 rounded-full opacity-80 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[15px]" />
        </div>
    );
};

export default TimelineCard;