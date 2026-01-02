"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

export default function AccountCreatedPage() {
    return (
        <AuthLayout>
            {/* Back Button */}
            <Link
                href="/"
                className="flex items-center gap-2 text-zinc-900 w-fit hover:opacity-70 transition-opacity"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg font-bold">Account Created</span>
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

                {/* Success Icon */}
                <div className="mb-6">
                    <Image
                        src="/images/acc-created-icon.png"
                        alt="Success Icon"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </div>

                {/* Titles */}
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 leading-tight tracking-tight">
                    Account created successfully
                </h1>

                <p className="text-zinc-600 text-xl leading-relaxed mb-10 max-w-lg">
                    You are just one step away from verifying your account! please keep your <span className="text-[#912d90] font-bold">PAKISTAN ID</span> for the verification process
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link
                        href="/properties"
                        className="flex-1 py-3.5 px-8 border border-zinc-300 text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
                    >
                        Brows Properties
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <Link
                        href="/verify"
                        className="flex-1 py-3.5 px-8 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group"
                    >
                        Verify Account
                        <svg
                            width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
