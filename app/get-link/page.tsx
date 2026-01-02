"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    { id: "01", label: "Personal Detail", status: "completed" },
    { id: "02", label: "Employment Status", status: "completed" },
    { id: "03", label: "Investment Planning", status: "completed" },
    { id: "04", label: "Upload Documents", status: "active" },
    { id: "05", label: "Address Verification", status: "inactive" },
];

export default function GetSecureLinkPage() {
    return (
        <div className="min-h-screen bg-white font-outfit relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-[20%] -right-[10%] w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 relative z-10">
                {/* Header Container */}
                <div className="flex flex-col gap-8 mb-12">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between">
                        <Link
                            href="/passport-photo-page"
                            className="flex items-center gap-3 text-zinc-900 hover:opacity-70 transition-opacity"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xl font-bold">Get Secure Link</span>
                        </Link>

                        <button className="bg-[#4461ad] text-white px-10 py-3 rounded-lg font-bold text-sm tracking-wide hover:bg-blue-700 transition-colors shadow-sm">
                            Complete Later
                        </button>
                    </div>

                    {/* Logo */}
                    <div>
                        <Image
                            src="/images/login-logo.png"
                            alt="Atomprop Logo"
                            width={220}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Stepper */}
                <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white mb-14 shadow-sm">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`flex-1 flex items-center justify-center py-5 px-2 border-r last:border-r-0 border-zinc-100 ${step.status === "active" || step.status === "completed" ? "bg-blue-50/10" : ""
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {step.status === "completed" ? (
                                    <div className="w-9 h-9 rounded-full border-2 border-[#1e60b5] flex items-center justify-center text-sm font-bold text-[#1e60b5]">
                                        {step.id}
                                    </div>
                                ) : step.status === "active" ? (
                                    <div className="w-9 h-9 rounded-full bg-[#1e60b5] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="w-9 h-9 rounded-full border-2 border-zinc-300 flex items-center justify-center text-sm font-bold text-zinc-400">
                                        {step.id}
                                    </div>
                                )}
                                <span
                                    className={`text-[15px] font-bold whitespace-nowrap ${step.status === "active" || step.status === "completed" ? "text-blue-700" : "text-zinc-400"
                                        }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Area - Centered Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[32px] border border-zinc-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-12 relative min-h-[400px] flex flex-col items-center justify-center">
                        {/* Inner Back Arrow */}
                        <Link href="/passport-photo-page" className="absolute left-8 top-10 text-[#2e62af] hover:opacity-70 transition-opacity">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-bold text-zinc-900 mb-2">Continue On Your Phone</h1>
                            <p className="text-zinc-800 text-xl font-medium">here&apos;s how to do it:</p>
                        </div>

                        {/* Steps Image */}
                        <div className="relative w-full max-w-lg aspect-[3/1] mb-10">
                            <Image
                                src="/images/get-link-steps.png"
                                alt="Steps to continue on phone"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Action Button */}
                        <div className="w-full flex justify-center">
                            <Link href="/get-link-qr">
                                <button
                                    className="w-full max-w-[280px] py-[18px] px-10 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-xl hover:shadow-[0_10px_30px_rgba(145,45,144,0.3)] transition-all flex items-center justify-center gap-3 group"
                                >
                                    <span className="text-[17px]">Get secure link</span>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                                    >
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
