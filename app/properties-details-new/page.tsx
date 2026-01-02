"use client";

import {
    ArrowLeft,
    LayoutGrid,
    Download,
    Eye,
    MapPin,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PropertyDetailNewPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FB] font-body overflow-x-hidden relative">
            {/* 
        ========================================
        1. HEADER (Gradient BG)
        ========================================
      */}
            <Header />

            <div className="container-main mt-8 pt-4 mb-4 relative z-20">
                <div className="flex items-center gap-4">
                    <Link href="/properties" className="hover:opacity-80 transition-opacity flex items-center gap-2">
                        <ArrowLeft className="w-6 h-6 text-black" />
                        <span className="font-bold text-black text-lg">Properties Detail - Reduction BLU</span>
                    </Link>
                </div>
            </div>

            {/* 
        ========================================
        2. HERO SECTION WITH OVERLAY
        ========================================
      */}
            <main className="container-main relative z-30 pb-20">

                {/* Decorative Gradient Blob - Right Edge */}
                <div
                    className="absolute top-[-150px] right-[-100px] pointer-events-none z-40"
                    style={{
                        width: '386px',
                        height: '386px',
                        borderRadius: '386px',
                        background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
                        filter: 'blur(190px)'
                    }}
                />

                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-[20px] shadow-2xl mb-8 group">
                    <img
                        src="https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png"
                        alt="Property"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1229]/80 via-transparent to-transparent opacity-60" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full px-4">
                        <div className="bg-[#912d90] text-white px-8 py-3 rounded-t-xl font-bold font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl shadow-lg text-center leading-[1.15]">
                            Reduction BLU
                        </div>
                        <div className="bg-[#6B2472] text-white/90 px-10 py-2.5 rounded-b-xl text-sm font-medium font-[family-name:var(--font-space-grotesk)] shadow-md tracking-wide">
                            Two Bedroom Apartment in Executive Residences 1
                        </div>
                    </div>
                </div>

                {/* Property Title and Location */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold font-heading text-black mb-2">
                        Two Bedroom Apartment in Executive Residences 1
                    </h1>
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-[#912d90]" />
                        <span className="text-sm">Hill states</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm font-bold">PKR 35,000,000</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">2 Bedroom</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">Rented</span>
                    </div>
                </div>

                {/* 
        ========================================
        3. TWO COLUMN LAYOUT
        ========================================
        */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* LEFT COLUMN: Purple Gradient Stats Card */}
                    <div className="w-full rounded-[20px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
                        style={{ background: 'linear-gradient(118.86deg, #2e62af 0.37%, #912d90 99.63%)' }}>

                        <div className="flex flex-col gap-6">
                            {/* Stats Grid */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="text-white/90 text-sm">Original Price</span>
                                    <span className="text-xl font-bold">PKR 35,000,000</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="text-white/90 text-sm">Ground Floor 1</span>
                                    <span className="text-lg font-medium">1,200ft</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="text-white/90 text-sm">Ground Floor 2</span>
                                    <span className="text-lg font-medium">1,200ft</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="text-white/90 text-sm">First Floor 1</span>
                                    <span className="text-lg font-medium">1,200ft</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="text-white/90 text-sm">First Floor 2</span>
                                    <span className="text-lg font-medium">1,200ft</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="text-white/90 text-sm">Basement</span>
                                    <span className="text-lg font-medium">1,200ft</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-white font-bold text-base">Total area of the property</span>
                                    <span className="text-xl font-bold">7,200 sq.ft</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Dark Card with Map/Info */}
                    <div className="w-full rounded-[20px] overflow-hidden shadow-2xl bg-[#1A1128] relative h-full min-h-[500px]">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/location-map-placeholder.png"
                                className="w-full h-full object-cover opacity-40"
                                alt="Map"
                            />
                            <div className="absolute inset-0 bg-[#1A1128]/60" />
                        </div>

                        {/* Map Marker */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-16 h-16 bg-[#912d90]/30 rounded-full flex items-center justify-center animate-pulse">
                                <div className="w-4 h-4 bg-[#912d90] rounded-full shadow-lg" />
                            </div>
                        </div>

                        {/* Zoom Controls */}
                        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-20">
                            <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors font-bold text-xl">+</button>
                            <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors font-bold text-xl">-</button>
                        </div>
                    </div>
                </div>

                {/* 
        ========================================
        4. PROPERTY FEATURES TABLE
        ========================================
        */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold font-heading mb-6 text-black">Property Features</h2>

                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {[
                                    { label: "Property Type", value: "Apartment" },
                                    { label: "Bedrooms", value: "2" },
                                    { label: "Bathrooms", value: "2" },
                                    { label: "Area", value: "7,200 sq.ft" },
                                    { label: "Status", value: "Rented" },
                                    { label: "Price per sq.ft", value: "PKR 60,000" },
                                ].map((item, i, arr) => (
                                    <tr key={i} className={`${i !== arr.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                        <td className="px-6 py-4 text-gray-600 font-medium">{item.label}</td>
                                        <td className="px-6 py-4 text-black font-bold text-right">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 
        ========================================
        5. DOCUMENTS SECTION (Dark Theme)
        ========================================
        */}
                <div className="relative bg-[#1A1128] rounded-[30px] p-8 md:p-12 mb-20 z-10 overflow-hidden">
                    <h2 className="text-3xl font-heading font-bold text-white mb-8 relative z-20">Documents</h2>
                    <div className="space-y-4 relative z-20">
                        {[
                            { name: "Property Brochure", type: "PDF" },
                            { name: "Property Valuation Report", type: "PDF" },
                            { name: "Whitepaper", type: "PDF" },
                            { name: "Investment Memorandum", type: "PDF" },
                            { name: "Projections", type: "PDF" },
                        ].map((doc, i) => (
                            <div key={i} className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#912d90]/20 flex items-center justify-center border border-[#912d90]/50 text-[#912d90]">
                                        <Download className="w-5 h-5" />
                                    </div>
                                    <span className="text-white font-medium group-hover:text-purple-300 transition-colors">{doc.name}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-white/40 font-mono hidden sm:block">{doc.type}</span>
                                    <Download className="w-5 h-5 text-white/60 hover:text-white transition" />
                                    <Eye className="w-5 h-5 text-white/60 hover:text-white transition" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Decorative Gradient Blob - positioned below Documents section */}
                <div className="relative mb-20 h-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[446px] h-[446px] rounded-full pointer-events-none flex justify-center items-center"
                        style={{
                            background: 'conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.90) 0deg, rgba(141, 0, 251, 0.90) 76.875deg, rgba(144, 175, 255, 0.90) 120deg, rgba(151, 51, 252, 0.90) 161.25deg, rgba(130, 91, 255, 0.90) 198.75deg, rgba(111, 229, 187, 0.90) 236.25deg, rgba(157, 237, 255, 0.90) 260.625deg, rgba(11, 7, 27, 0.90) 360deg)',
                            filter: 'blur(90px)',
                            transform: 'rotate(179.07deg)',
                        }}
                    />
                </div>

                {/* 
        ========================================
        6. INVESTMENT HIGHLIGHTS
        ========================================
        */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/images/atomprop-mark.svg" className="w-6 h-6" alt="" />
                        <span className="text-purple-600 font-bold">Why invest in this property?</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-black mb-8">What Makes This Property a Strong Investment</h2>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                        {[
                            { title: "Modern Community Living", desc: "Contemporary Apartments In A Well-Planned Community Offering Comfort, Convenience, And Strong Lifestyle Appeal." },
                            { title: "Strong Rental Demand", desc: "Vacant And Ready For Move-In, The Unit Offers Excellent Long-Term Rental Prospects And High Occupancy Potential." },
                            { title: "Premium Facilities", desc: "Access To Top Amenities Including A Pool, Gym, Sauna, Landscaped Areas, Children's Play Zones, And Nearby Retail." },
                            { title: "Attractive Investment Returns", desc: "Solid Rental Yields And Strong Long-Term ROI Driven By Both Rental Income And Property Appreciation." },
                            { title: "Below Market Value", desc: "Priced Under Market Valuation, Providing Immediate Equity Upside And Enhanced Investment Security." },
                            { title: "Prime Location", desc: "Well-Connected To Major City Hubs, Ensuring Consistent Tenant Demand And Long-Term Value Growth." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg text-black">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Property Description */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold font-heading mb-4">Property description</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl text-sm md:text-base">
                        This Property Offers Modern, Well-Designed Living In A Highly Sought-After Community Known For Its Convenience And Lifestyle Appeal. With Strong Rental Demand And A Prime Location Connected To Major City Hubs, It Attracts Both Residents And Long-Term Investors. The Unit Provides Access To Premium Amenities Including Fitness Facilities, Landscaped Areas, And Nearby Retail Options. Its Below-Market Price Delivers Immediate Value And Built-In Equity From Day One.
                    </p>
                    <button className="text-[#912d90] font-bold text-sm mt-2 hover:underline">Read More</button>
                </div>

            </main>

            <Footer />
        </div>
    );
}
