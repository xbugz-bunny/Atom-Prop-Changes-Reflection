"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";

export default function TermsPage() {
    const [agreed, setAgreed] = useState(false);

    return (
        <AuthLayout>
            {/* Back Button */}
            <Link
                href="/signup"
                className="flex items-center gap-2 text-zinc-900 w-fit hover:opacity-70 transition-opacity"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg font-bold">View Terms & Conditions</span>
            </Link>

            <div className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto md:mx-0">
                {/* Logo */}
                <div className="mb-6">
                    <Image
                        src="/images/login-logo.png"
                        alt="Atomprop Logo"
                        width={180}
                        height={50}
                        className="object-contain"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
                    Please accept terms and conditions
                </h1>

                {/* View Terms Button */}
                <button className="w-full max-w-sm flex items-center justify-between px-6 py-4 border border-purple-200 rounded-full bg-purple-50/30 hover:bg-purple-50 transition-all mb-8 group">
                    <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-zinc-900 font-bold">View Terms and conditions</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Checkbox */}
                <div className="flex items-center gap-3 mb-10">
                    <button
                        onClick={() => setAgreed(!agreed)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${agreed ? 'bg-purple-600 border-purple-600' : 'border-zinc-200 bg-white'}`}
                    >
                        {agreed && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                    <span className="text-zinc-400 text-lg">
                        I agree to ATOMPROP Terms and conditions
                    </span>
                </div>

                {/* Agree Button */}
                <button
                    disabled={!agreed}
                    className={`w-full max-w-sm py-4 px-8 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-xl transition-all flex items-center justify-center gap-2 group ${!agreed ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-purple-500/20'}`}
                >
                    Agree and Continue
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:translate-x-1 transition-transform"
                    >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </AuthLayout>
    );
}
