"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    { id: "01", label: "Personal Detail", status: "completed" },
    { id: "02", label: "Employment Status", status: "active" },
    { id: "03", label: "Investment Planning", status: "inactive" },
    { id: "04", label: "Upload Documents", status: "inactive" },
    { id: "05", label: "Address Verification", status: "inactive" },
];

export default function EmploymentStatusPage() {
    return (
        <div className="min-h-screen bg-white font-outfit relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-[10%] -right-[15%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link
                        href="/personal-details"
                        className="flex items-center gap-2 text-zinc-900 hover:opacity-70 transition-opacity"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-lg font-bold">Employment Status</span>
                    </Link>

                    <button className="bg-[#4a6abf] text-white px-8 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-blue-700 transition-colors">
                        Complete Later
                    </button>
                </div>

                {/* Logo */}
                <div className="mb-12">
                    <Image
                        src="/images/login-logo.png"
                        alt="Atomprop Logo"
                        width={180}
                        height={50}
                        className="object-contain"
                    />
                </div>

                {/* Stepper */}
                <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden bg-white mb-16 shadow-sm">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`flex-1 flex items-center justify-center py-4 px-2 border-r last:border-r-0 border-zinc-200 ${step.status === "active" || step.status === "completed" ? "bg-blue-50/20" : ""
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {step.status === "completed" ? (
                                    <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center text-sm font-bold text-blue-600">
                                        {step.id}
                                    </div>
                                ) : step.status === "active" ? (
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full border-2 border-zinc-300 flex items-center justify-center text-sm font-bold text-zinc-400">
                                        {step.id}
                                    </div>
                                )}
                                <span
                                    className={`text-sm font-bold whitespace-nowrap ${step.status === "active" || step.status === "completed" ? "text-blue-600" : "text-zinc-400"
                                        }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-6xl">
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold text-zinc-900 mb-3 tracking-tight">Employment details</h1>
                        <p className="text-zinc-900 text-2xl">Our regular asks for this information to keep your rights protected.</p>
                    </div>

                    <form className="space-y-10">
                        {/* Grid Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Name of Company (Required)"
                                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-900 text-lg placeholder:text-zinc-400"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium">Company Address</label>
                                <input
                                    type="text"
                                    placeholder="Company address (Required)"
                                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-900 text-lg placeholder:text-zinc-400"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium">Income</label>
                                <input
                                    type="text"
                                    placeholder="Monthly income (Required)"
                                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-900 text-lg placeholder:text-zinc-400"
                                />
                            </div>
                        </div>

                        {/* Grid Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium">Select industry</label>
                                <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-900 text-lg appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-[right_1.5rem_center] bg-no-repeat">
                                    <option>Industry</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-zinc-500 text-lg font-medium">select country</label>
                                <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-900 text-lg appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-[right_1.5rem_center] bg-no-repeat">
                                    <option>Country</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full max-w-[200px] py-4 px-8 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                Next
                                <svg
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="group-hover:translate-x-1 transition-transform"
                                >
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
