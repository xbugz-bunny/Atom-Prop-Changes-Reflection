"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    { id: "01", label: "Personal Detail", status: "completed" },
    { id: "02", label: "Employment Status", status: "completed" },
    { id: "03", label: "Investment Planning", status: "completed" },
    { id: "04", label: "Upload Documents", status: "completed" },
    { id: "05", label: "Address Verification", status: "active" },
];

export default function AddressVerificationPage() {
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
                            href="/upload-documents"
                            className="flex items-center gap-3 text-zinc-900 hover:opacity-70 transition-opacity"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xl font-bold">Address Verification</span>
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
                <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white mb-20 shadow-sm">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`flex-1 flex items-center justify-center py-5 px-2 border-r last:border-r-0 border-zinc-100 ${step.status === "active" || step.status === "completed" ? "bg-blue-50/10" : ""
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {(step.status === "completed" || step.status === "active") && step.id !== "05" ? (
                                    <div className="w-9 h-9 rounded-full border-2 border-[#1e60b5] flex items-center justify-center text-sm font-bold text-[#1e60b5]">
                                        {step.id}
                                    </div>
                                ) : step.status === "active" ? (
                                    <div className="w-9 h-9 rounded-full bg-[#1e60b5] flex items-center justify-center text-white">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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

                {/* Content Area */}
                <div className="max-w-7xl">
                    <div className="mb-12">
                        <h1 className="text-[52px] font-bold text-zinc-900 mb-4 tracking-tight leading-tight">Address Verification</h1>
                        <p className="text-zinc-800 text-2xl font-medium font-outfit">select issuing country to see which document we accept</p>
                    </div>

                    <form className="space-y-8">
                        {/* First Row of Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Country Dropdown */}
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium block">Country</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 text-lg appearance-none cursor-pointer">
                                        <option>Pakistan</option>
                                        <option>Germany</option>
                                        <option>United Kingdom</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9l6 6 6-6" stroke="#52525b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* City Dropdown */}
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium block">City</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 text-lg appearance-none cursor-pointer">
                                        <option>Islamabad</option>
                                        <option>Berlin</option>
                                        <option>London</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9l6 6 6-6" stroke="#52525b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Postal Code Input */}
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium block">Postal Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter Postal Code"
                                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 text-lg placeholder:text-zinc-400 placeholder:font-normal"
                                />
                            </div>
                        </div>

                        {/* Full Address Field */}
                        <div className="space-y-3 max-w-2xl">
                            <label className="text-zinc-500 text-lg font-medium block">Full Address</label>
                            <input
                                type="text"
                                placeholder="Enter Full Address"
                                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 text-lg placeholder:text-zinc-400 placeholder:font-normal"
                            />
                        </div>

                        {/* Save Button */}
                        <div className="pt-6">
                            <Link href="/account-created">
                                <button
                                    type="submit"
                                    className="w-full max-w-[200px] py-4 px-8 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <span>Save</span>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
