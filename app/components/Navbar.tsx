"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const atompropLogo = "/images/atomprop-logo.svg";

export default function Navbar() {
    const pathname = usePathname();

    // Helper to check if link is active
    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }, []);

    return (
        <nav className="relative z-20 py-4 sm:py-6">
            <div className="container-main flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <img src={atompropLogo} alt="Atomprop" className="h-8 sm:h-[49px] w-auto" />
                    </Link>
                </div>

                {/* Menu */}
                <div
                    className="hidden lg:flex items-center glass rounded-full px-6 lg:px-8 py-2 lg:py-3"
                    style={{
                        border: '1px solid white',
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Link
                            href="/"
                            className={`font-body font-semibold transition text-sm lg:text-base ${isActive('/') && pathname === '/' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/properties-preview"
                            className={`font-body font-semibold transition text-sm lg:text-base ${isActive('/properties-preview') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                        >
                            Properties
                        </Link>
                        <Link
                            href="/about-us"
                            className={`font-body font-semibold transition text-sm lg:text-base ${isActive('/about-us') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="font-body font-semibold text-white hover:text-purple-400 transition text-sm lg:text-base"
                        >
                            How it Works
                        </Link>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {isLoggedIn ? (
                        <>
                            <Link href="/dashboard">
                                <button className="btn-secondary hidden sm:block text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2 text-white border border-white rounded-full hover:bg-white/10 transition">Dashboard</button>
                            </Link>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('isLoggedIn');
                                    localStorage.removeItem('userEmail');
                                    setIsLoggedIn(false);
                                    window.location.href = '/login';
                                }}
                                className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2 text-white rounded-full hover:opacity-90 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="btn-secondary hidden sm:block text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2 text-white border border-white rounded-full hover:bg-white/10 transition">Login</button>
                            </Link>
                            <Link href="/signup">
                                <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2 text-white rounded-full hover:opacity-90 transition">Get Started</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
