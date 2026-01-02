"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        // Mock login logic
        setTimeout(() => {
            if (email === "abc@gmail.com" && password === "123456") {
                // Store auth state in localStorage
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", email);
                router.push("/dashboard");
            } else {
                setError("Invalid email or password. Use abc@gmail.com / 123456");
                setLoading(false);
            }
        }, 1000);
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
                <span className="text-lg font-bold">Login</span>
            </Link>

            <div className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto md:mx-0">
                {/* Logo - repositioned lower and nearer to text */}
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
                    Login to your account
                </h1>
                <p className="text-zinc-900 text-xl mb-8">
                    please enter your registered email address and password.
                </p>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-zinc-500 text-base font-medium block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email..."
                            required
                            className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-zinc-900 text-base placeholder:text-zinc-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-zinc-500 text-base font-medium block">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required
                            className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-zinc-900 text-base placeholder:text-zinc-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-70"
                    >
                        {loading ? "Logging in..." : "Login"}
                        {!loading && (
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
                <div className="text-center mb-8">
                    <p className="text-zinc-600 text-base">
                        Don&apos;t have an account? <Link href="/signup" className="font-bold text-zinc-900 hover:underline">Sign Up</Link>
                    </p>
                </div>

                <div className="relative flex items-center justify-center mb-8">
                    <div className="flex-grow border-t border-zinc-300"></div>
                    <span className="flex-shrink mx-4 text-zinc-900 font-bold text-lg">OR</span>
                    <div className="flex-grow border-t border-zinc-300"></div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-3.5 px-6 border border-zinc-100 rounded-xl hover:bg-zinc-50 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-zinc-600 font-bold text-base">Sign in With Google</span>
                </button>
            </div>
        </AuthLayout>
    );
}
