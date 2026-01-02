"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";

export default function OTPPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [otp, setOtp] = React.useState<string[]>(["", "", "", "", "", ""]);

    const handleChange = (index: number, value: string): void => {
        if (value.length > 1) value = value.slice(-1);
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement | null;
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement | null;
            prevInput?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate verification
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        router.push("/dashboard");
    };

    return (
        <AuthLayout>
            {/* Back Button */}
            <Link
                href="/login"
                className="flex items-center gap-2 text-zinc-900 w-fit hover:opacity-70 transition-opacity"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg font-bold">OTP</span>
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
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 leading-tight tracking-tight">
                    Have you received our email?
                </h1>

                <div className="space-y-4 mb-8">
                    <p className="text-zinc-600 text-xl leading-relaxed">
                        We&apos;ve sent a one-time password(OTP) to your email address
                    </p>
                    <p className="text-blue-500 text-xl font-medium">
                        mohsinuiux@gmail.com
                    </p>
                    <p className="text-zinc-600 text-xl leading-relaxed">
                        If this email is registered in our system, please enter the OTP we just sent, if not, you&apos;ll need to create a new account.
                    </p>
                    <p className="text-zinc-900 text-xl font-bold">
                        Don&apos;t forget to check your spam or junk folder if you don&apos;t see the email.
                    </p>
                </div>

                {/* OTP Input */}
                <div className="flex gap-3 mb-10">
                    {otp.map((digit: string, i: number) => (
                        <input
                            key={i}
                            id={`otp-${i}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(i, e.target.value)}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(i, e)}
                            className="w-14 h-14 md:w-16 md:h-16 border border-zinc-100 rounded-xl bg-zinc-50 text-center text-2xl font-bold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-zinc-400"
                            placeholder="-"
                        />
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="block w-full max-w-md">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group mb-10 disabled:opacity-70"
                    >
                        {isLoading ? "Verifying..." : "Submit verification code"}
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

                {/* Signup Link */}
                <div className="text-center md:text-left md:pl-20">
                    <p className="text-zinc-600 text-base">
                        Don&apos;t have an account yet? <Link href="/signup" className="font-bold text-zinc-900 hover:underline">Signup</Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}
