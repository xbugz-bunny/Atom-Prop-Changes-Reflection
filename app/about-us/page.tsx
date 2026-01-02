"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import {
    TransactionIcon,
    MarketIcon,
    Wallet,
    HandshakeIcon,
    ArrowRight,
    AtompropPinkIcon,
} from "../components/icons";
import { MoveUpRight } from "lucide-react";
import TimelineSection from "../components/TimelineSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

// Local Images
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image6 from "./6.png";
import image9 from "./9.png";
import image10 from "./10.png";

export default function AboutUs() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is real estate tokenization?",
            answer: "Real estate tokenization is the process of converting property ownership into digital tokens on the blockchain. Each token represents a verified share of a real property asset, allowing investors to buy, sell, and manage fractional ownership easily."
        },
        {
            question: "Is Atomprop licensed or regulated?",
            answer: "Yes, Atomprop operates under applicable regulations and maintains necessary licenses for real estate tokenization services."
        },
        {
            question: "Who can invest with Atomprop?",
            answer: "Anyone meeting the minimum investment requirements can invest with Atomprop, subject to local regulations."
        },
        {
            question: "How much do I need to start investing?",
            answer: "You can start investing with Atomprop with a minimum amount that varies by property. Check individual property listings for specific requirements."
        },
        {
            question: "How does Atomprop ensure project security?",
            answer: "Atomprop ensures security through blockchain technology, milestone-based funding, escrow services, and thorough due diligence on all properties."
        }
    ];

    const values = [
        {
            title: "Transparency",
            desc: "Creating a secure and trust-driven investment environment.",
            icon: <TransactionIcon className="w-8 h-8 text-white" />
        },
        {
            title: "Reliability",
            desc: "A dependable platform you can always count on.",
            icon: <HandshakeIcon className="w-8 h-8 text-white" />
        },
        {
            title: "Security",
            desc: "Protecting your assets with top-tier blockchain technology.",
            icon: <Wallet className="w-8 h-8 text-white" />
        },
        {
            title: "Innovation",
            desc: "Revolutionizing real estate with smart digital solutions.",
            icon: <MarketIcon className="w-8 h-8 text-white" />
        }
    ];

    return (
        <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden relative">
            <PageHero
                title="About Atomprop"
                description="As the leading platform for tokenized property ownership, we provide investors with secure, accessible opportunities to participate in high‑value real estate markets globally"
            />

            {/* 2. Our Purpose (Smarter Way) */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container-main relative z-10">
                    {/* Header Icon using Image 2 */}
                    <div className="flex items-center gap-3 mb-4">
                        <AtompropPinkIcon className="w-6 h-6 object-contain" />
                        <span className="text-[#2e62af] font-bold tracking-wide uppercase text-sm">About Atomprop</span>
                    </div>

                    <h2 className="font-heading font-bold text-3xl md:text-5xl text-black mb-12 leading-tight max-w-4xl">
                        A Smarter, More Transparent Way To Own Real Estate
                    </h2>

                    <p className="font-body text-gray-600 text-lg mb-12 max-w-5xl">
                        Atomprop is Pakistan first decentralized real estate platform that enables fractional ownership. By digitizing real estate assets, we remove traditional barriers to entry, making premium real estate accessible to everyone. We believe in complete transparency, security, and consistent returns.
                    </p>

                    {/* Feature Card */}
                    <div className="bg-[#111] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row gap-12 items-center shadow-2xl">
                        {/* Background Glow inside card */}
                        <img src={image6.src} alt="" className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] object-cover opacity-20 pointer-events-none mix-blend-screen" />

                        <div className="md:w-1/2 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <AtompropPinkIcon className="w-8 h-8 object-contain" />
                                <span className="text-purple-400 font-bold text-lg">Our Purpose</span>
                            </div>
                            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-tight">
                                To democratize real estate investing through technology and trust.
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Traditional real estate has always been exclusive. We are changing that by enabling fractional ownership, transparent construction updates, and secure blockchain transactions.
                            </p>

                            <div className="mt-8">
                                <img src={image2.src} alt="" className="h-12 w-auto object-contain opacity-80" />
                            </div>
                        </div>

                        {/* Image 1: Main City Image */}
                        <div className="md:w-1/2 relative">
                            <img
                                src={image1.src}
                                alt="Our Purpose"
                                className="rounded-xl shadow-2xl w-full object-cover h-[350px] md:h-[450px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Mission - Dark with Image 3 BG */}
            <section className="py-24 bg-[#000] relative overflow-hidden min-h-screen flex flex-col justify-center">
                {/* Image 3 as Background */}
                <div className="absolute inset-0 z-0">
                    <img src={image3.src} alt="Mission Background" className="w-full h-full object-cover opacity-100" />
                </div>

                <div className="container-main relative z-10 flex flex-col items-center text-center justify-center gap-16 md:gap-24 py-12">
                    {/* Mission - Pushed to top */}
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-6 tracking-tight">Our Mission</h2>
                        <p className="font-body text-white text-base md:text-lg leading-relaxed font-light drop-shadow-md">
                            To make real estate investment transparent, accessible, and secure for everyone through tokenization and blockchain technology.
                        </p>
                    </div>

                    {/* Center Images: Image 9 with Image 8 overlaid in center */}
                    <div className="relative flex items-center justify-center">
                        <img src={image9.src} alt="Center Graphic" className="w-[90%] sm:w-[600px] lg:w-[1000px] h-auto object-contain opacity-90" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <AtompropPinkIcon className="w-5 h-5 md:w-8 md:h-8 object-contain -translate-y-2" />
                        </div>
                    </div>

                    {/* Vision - Pushed to bottom */}
                    <div className="max-w-4xl mx-auto mt-12 lg:mt-0 relative w-full">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
                            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">Our Vision</h2>
                        </div>
                        <p className="font-body text-white text-sm md:text-base leading-relaxed font-light drop-shadow-md max-w-3xl mx-auto">
                            To revolutionize property ownership by democratizing access to real estate, enabling anyone to invest in high-quality assets, anywhere, anytime.
                        </p>
                    </div>
                </div>


                {/* Coin Image - Bottom Right */}
                <img
                    src={image10.src}
                    alt="Coin"
                    className="absolute bottom-0 right-60 z-20 pointer-events-none object-contain"
                    style={{ width: '250px', height: '20px' }}
                />
            </section>

            {/* 4. Values - White */}
            <section className="py-20 bg-white">
                <div className="container-main">
                    <div className="text-center mb-16">
                        {/* Reuse Image 8 icon here comfortably */}
                        <AtompropPinkIcon className="w-10 h-10 mx-auto mb-4 object-contain" />
                        <h2 className="font-heading font-bold text-4xl text-black">Our Values</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <div key={i} className="p-8 border border-gray-200 rounded-[25px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.1)] bg-white group hover:-translate-y-1 transition duration-300">
                                <h3 className="font-heading font-bold text-xl mb-3 text-black">{val.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Achievements - Dark with Image 4 */}
            <section className="py-24 bg-[#0c091d] relative overflow-hidden">
                {/* Background glow using Image 6 again */}
                <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%]">
                    <img src={image6.src} className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                </div>

                <div className="container-main relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Image 4 (The 4.7 Circle Graphic replacement) */}
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative">
                            <img src={image4.src} alt="Achievements" className="w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_30px_rgba(145,45,144,0.4)]" />
                        </div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="lg:w-2/3 w-full">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-12">Our Achievements and Trust Metrics</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { label: "Successful Transaction", val: "PKR 500,000", accentColor: "#932a8e" },
                                { label: "Customer Trust Us", val: "50,000+", accentColor: "#67439d" },
                                { label: "Successful Transaction", val: "PKR 500,000", accentColor: "#554ca3" },
                                { label: "Real Estate Partners", val: "11,000+", accentColor: "#224ec7" },
                                { label: "Real Estate Partners", val: "11,000+", accentColor: "#4568b1" },
                                { label: "Real Estate Partners", val: "11,000+", accentColor: "#bc1bb5" },
                                { label: "Customer Trust Us", val: "50,000+", accentColor: "#4c6b96" },
                                { label: "Real Estate Partners", val: "11,000+", accentColor: "#bc1bb5" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#1c1d22] rounded-[5px] p-6 flex items-center gap-3 shadow-[inset_0px_0px_5px_rgba(255,255,255,0.25),0px_4px_20px_rgba(0,0,0,0.16)]">
                                    <div className="w-[7px] h-full rounded-l-[5px] shrink-0" style={{ backgroundColor: stat.accentColor }}></div>
                                    <div>
                                        <p className="font-body text-white text-[16px] leading-[19px] mb-2">{stat.label}</p>
                                        <p className="font-heading font-bold text-[35px] capitalize bg-gradient-to-r from-[#1654c8] to-[#ae1cc9] bg-clip-text text-transparent">{stat.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Timeline (Powered by Tokenization) */}
            <TimelineSection />

            {/* 7. FAQ */}
            <section className="bg-[#0c091d] py-20">
                <div className="max-w-[1920px] mx-auto px-4">
                    <div className="max-w-[1240px] mx-auto">
                        {/* Section Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16">
                            <div className="lg:w-1/2">
                                <h2 className="font-heading text-[40px] font-bold leading-[59px] tracking-[-2px] text-white">
                                    Learn More About Investing<br />With Atomprop
                                </h2>
                            </div>
                            <div className="lg:w-1/2 flex flex-col items-start gap-8">
                                <p className="text-[20px] leading-[1.7] capitalize text-white font-normal font-body">
                                    Learn how Atomprop works, how tokenized real estate benefits you, and what you need to begin.<br className="hidden md:block" /> These FAQs cover everything from starting your first investment to managing your portfolio.
                                </p>
                                <a
                                    href="/properties"
                                    className="flex items-center gap-3 px-8 py-3 rounded-[25px] border border-white bg-gradient-to-r from-[#2e62af] to-[#912d90] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[10px] hover:-translate-y-1 transition duration-300 group cursor-pointer"
                                >
                                    <span className="font-body text-white text-base">Discover More</span>
                                </a>
                            </div>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-white/30 pb-6">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between text-left group"
                                    >
                                        <div className="flex-1">
                                            <h3 className={`font-heading text-[30px] leading-[130%] text-white mb-3 ${openFaq === index ? 'font-bold' : 'font-normal'}`}>
                                                {faq.question}
                                            </h3>
                                            {openFaq === index && (
                                                <div className="flex gap-4">
                                                    <div className="w-[21px] bg-white"></div>
                                                    <p className="text-lg leading-[150%] text-white/80 max-w-[1000px]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${openFaq === index
                                            ? 'bg-[#912D90]'
                                            : 'border border-white bg-black'
                                            }`}>
                                            {openFaq === index ? (
                                                <MoveUpRight className="w-6 h-6 text-white" />
                                            ) : (
                                                <ArrowRight className="w-6 h-6 text-white" />
                                            )}
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA Banner */}
            <CTASection />

            <Footer />
        </main>
    );
}