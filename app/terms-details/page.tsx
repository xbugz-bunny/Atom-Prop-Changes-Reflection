"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TermsDetailsPage() {
    return (
        <div className="min-h-screen bg-white font-outfit overflow-hidden">
            <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
                {/* Left Side */}
                <div className="w-full md:w-[40%] flex flex-col p-6 md:p-12 lg:p-16 relative z-10">
                    {/* Back Button */}
                    <Link
                        href="/terms"
                        className="flex items-center gap-2 text-zinc-900 mb-10 md:mb-20 hover:opacity-70 transition-opacity pt-4"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-lg font-bold">Accept Terms & Conditions</span>
                    </Link>

                    <div className="max-w-md w-full mx-auto md:mx-0">
                        {/* Logo - adjusted margin to align with right title */}
                        <div className="mb-8 md:mt-12">
                            <Image
                                src="/images/login-logo.png"
                                alt="Atomprop Logo"
                                width={180}
                                height={50}
                                className="object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 leading-tight tracking-tight relative z-10">
                            Terms and Conditions
                        </h1>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-[60%] flex flex-col p-6 md:p-24 lg:p-32 bg-zinc-50/30">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-zinc-900 mb-8 pt-6">Introduction</h2>

                        <div className="space-y-8 text-zinc-600 text-lg leading-relaxed">
                            <p>
                                At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones. A new round only begins once the previous round’s milestones are fully completed ensuring developer accountability and giving you complete confidence in project progress.
                            </p>

                            <p>
                                At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones. A new round only begins once the previous round’s milestones are fully completed ensuring developer accountability and giving you complete confidence in project progress. At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones. A new round only begins once the previous round’s milestones are fully completed ensuring developer accountability and giving you complete confidence in project progress.
                            </p>

                            <p>
                                At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones. A new round only begins once the previous round’s milestones are fully completed ensuring developer accountability and giving you complete confidence in project progress.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Left Gradient Blob */}
            <div
                className="absolute bottom-0 left-0 pointer-events-none z-0"
                style={{
                    width: "712.448px",
                    height: "712.448px",
                            borderRadius: "712.448px",
                            transform: "translate(-50%, 40%) rotate(45.019deg)",
                            filter: "blur(90px)",
                            background: `
                                conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.45) 0deg, rgba(141, 0, 251, 0.45) 76.87500178813934deg, rgba(144, 175, 255, 0.45) 120.00000357627869deg, rgba(151, 51, 252, 0.45) 161.2499964237213deg, rgba(130, 91, 255, 0.45) 198.74999284744263deg, rgba(111, 229, 187, 0.45) 236.25deg, rgba(157, 237, 255, 0.45) 260.6249928474426deg, rgba(11, 7, 27, 0.45) 360deg)
                            `,
                        }}
                    />
        </div>
    );
}
