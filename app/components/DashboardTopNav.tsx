"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet, Bell } from "lucide-react"; // Using lucide for icons not in local set or mixing if needed

const atompropLogo = "/images/atomprop-logo.svg"; // Adjust path if needed

export default function DashboardTopNav() {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Portfolio", href: "#" }, // Placeholder
        { label: "Wallet", href: "#" },    // Placeholder
        { label: "Marketplace", href: "#" }, // Placeholder
    ];

    return (
        <nav className="w-full bg-[#020617] border-b border-white/10 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
            {/* Logo */}
            <Link href="/">
                 {/* Using the text logo if available or just the image */}
                 <div className="flex items-center gap-2">
                    <img src="/images/atomprop-logo.png" alt="Atomprop" className="h-8 w-auto" />
                 </div>
            </Link>

            {/* Center Navigation - Pill Shape */}
            <div className="hidden md:flex bg-black/40 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                            item.label === "Dashboard" // Hardcoded active for now as we are on dashboard
                                ? "bg-white/10 text-white shadow-lg border border-white/5"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                {/* Wallet Info - Optional if design requires text, otherwise just icon */}
                <button className="text-gray-400 hover:text-white transition">
                    <img src="/images/properties/wallet-icon.svg" className="w-6 h-6 brightness-0 invert opacity-70 hover:opacity-100 transition" alt="Wallet" />
                </button>
                
                <button className="text-gray-400 hover:text-white transition">
                     <Bell className="w-6 h-6" /> {/* Using Lucide for generic notification bell */}
                </button>

                 {/* Profile */}
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                      <img src="/images/properties/user-profile.svg" alt="Profile" className="w-6 h-6" />
                 </div>
            </div>
        </nav>
    );
}
