"use client";

import Link from "next/link";
import {
    Phone,
    Mail,
    Location,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
} from "./icons";

const atompropLogo = "/images/atomprop-logo.svg";

export default function Footer() {
    return (
        <footer className="py-12 md:py-16 bg-black text-white" style={{ position: 'relative', zIndex: 5 }}>
            <div className="container-main">
                {/* Logo - Top Center */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <img
                        src={atompropLogo}
                        alt="Atomprop"
                        className="h-12 md:h-16 w-auto"
                    />
                </div>

                {/* Description Text - Centered */}
                <p className="font-body text-center text-white text-sm md:text-base max-w-[800px] mx-auto mb-8 md:mb-12 leading-relaxed px-4">
                    At Atomprop, Every Real Estate Project Is Divided Into Clearly Defined Construction Rounds, Each<br className="hidden sm:inline" />
                    Linked To Measurable Development Milestones.
                </p>

                {/* Footer Links - Centered Horizontal Row */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 mb-12 md:mb-16">
                    <Link href="/about-us" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">About Us</Link>
                    <Link href="/properties" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">Projects</Link>
                    <a href="#" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">Platform</a>
                    <a href="#" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">Webinars</a>
                    <a href="#" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">Careers</a>
                    <a href="#" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">Blogs</a>
                    <a href="#" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">Contact Us</a>
                    <a href="#" className="font-body text-white font-medium text-base hover:text-purple-400 transition whitespace-nowrap">FAQ</a>
                </div>

                {/* Contact Info - Centered Row */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 md:mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-body text-white text-xs opacity-70 mb-0.5">Phone:</p>
                            <p className="font-body text-white text-sm">+92 3365866910</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-body text-white text-xs opacity-70 mb-0.5">Email:</p>
                            <p className="font-body text-white text-sm">support@atomprop.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                            <Location className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-body text-white text-xs opacity-70 mb-0.5">Address:</p>
                            <p className="font-body text-white text-sm">Floor no.3, J7 Emporium B17, Islamabad</p>
                        </div>
                    </div>
                </div>

                {/* Social Links - White Circular Outlines */}
                <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-10">
                    <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition group">
                        <Instagram className="w-5 h-5 text-white group-hover:text-black transition" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition group">
                        <Twitter className="w-5 h-5 text-white group-hover:text-black transition" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition group">
                        <Facebook className="w-5 h-5 text-white group-hover:text-black transition" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition group">
                        <LinkedIn className="w-5 h-5 text-white group-hover:text-black transition" />
                    </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/20 mb-6 md:mb-8 max-w-[1200px] mx-auto" />

                {/* Copyright */}
                <p className="font-body text-center text-white text-xs opacity-70">
                    © Atomprop | Privacy Policy | Terms of Use
                </p>
            </div>
        </footer>
    );
}
