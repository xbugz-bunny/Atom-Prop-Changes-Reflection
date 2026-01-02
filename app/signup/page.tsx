"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";


export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [error, setError] = React.useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setError("");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        router.push("/otp");
    };

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
                <span className="text-lg font-bold">Sign Up</span>
            </Link>

            <div className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto md:mx-0">
                {/* Logo */}
                <div className="mb-2">
                    <Image
                        src="/images/login-logo.png"
                        alt="Atomprop Logo"
                        width={180}
                        height={50}
                        className="object-contain"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>

                {/* Titles */}
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2 leading-tight tracking-tight">
                    Let&apos;s get to know each other!
                </h1>
                <p className="text-zinc-900 text-xl mb-8">
                    Please enter your registered email address.
                </p>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-6 mb-8" onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-zinc-500 text-base font-medium block">
                            What is your first name?
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-zinc-900 text-base placeholder:text-zinc-400"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-zinc-500 text-base font-medium block">
                            Your last name?
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            required
                            className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-zinc-900 text-base placeholder:text-zinc-400"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-zinc-500 text-base font-medium block">
                            what is your registered email?
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                            className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-zinc-900 text-base placeholder:text-zinc-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-70"
                    >
                        {isLoading ? "Sending..." : "Send email verification code"}
                        {!isLoading && (
                            <svg
                                width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:translate-x-1 transition-transform"
                            >
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </form>

                {/* Social Links */}
                <div className="text-center">
                    <p className="text-zinc-600 text-base">
                        Already have an account? <Link href="/login" className="font-bold text-zinc-900 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}
