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

export default function GetLinkQRPage() {
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
                            href="/get-link"
                            className="flex items-center gap-3 text-zinc-900 hover:opacity-70 transition-opacity"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xl font-bold">QR Code</span>
                        </Link>

                        <button className="bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white px-10 py-3 rounded-lg font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-sm">
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

                {/* Stepper with checkmark on top of current step line */}
                <div className="relative mb-20">
                    <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex-1 flex items-center justify-center py-5 px-2 border-r last:border-r-0 border-zinc-100 ${step.status === "active" || step.status === "completed" ? "bg-blue-50/10" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    {step.status === "completed" ? (
                                        <div className="w-9 h-9 rounded-full border-2 border-[#2e62af] flex items-center justify-center text-sm font-bold text-[#2e62af]">
                                            {step.id}
                                        </div>
                                    ) : step.status === "active" ? (
                                        <div className="w-9 h-9 rounded-full bg-[#2e62af] flex items-center justify-center">
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
                                        className={`text-[15px] font-bold whitespace-nowrap ${step.status === "active" || step.status === "completed" ? "text-[#2e62af]" : "text-zinc-400"
                                            }`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Floating checkmark circle above the active step */}
                    <div className="absolute -top-4 left-[70%] -translate-x-1/2">
                        <div className="w-8 h-8 rounded-full bg-[#2e62af] flex items-center justify-center shadow-md">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content Area - Centered Card */}
                <div className="max-w-xl mx-auto">
                    <div className="bg-white rounded-[32px] border border-zinc-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-12 relative flex flex-col items-center">
                        {/* Inner Back Arrow */}
                        <Link href="/get-link" className="absolute left-8 top-10 text-[#2e62af] hover:opacity-70 transition-opacity">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-zinc-900 mb-2">Get Your Secure Link</h1>
                            <p className="text-zinc-800 text-xl font-medium">scan the qr code with your phone</p>
                        </div>

                        {/* QR Code */}
                        <div className="relative w-48 h-48 mb-8 bg-white p-2 border border-zinc-100 rounded-xl shadow-sm">
                            <Image
                                src="/images/secure-qr.png"
                                alt="Secure Verification QR Code"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="text-center space-y-4">
                            <p className="text-zinc-600 text-lg font-medium">or choose an alternative method</p>
                            <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-blue-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="underline decoration-2 underline-offset-4">Copy link</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
