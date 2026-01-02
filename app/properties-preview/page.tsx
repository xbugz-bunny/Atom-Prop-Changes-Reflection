"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import PageHero from "../components/PageHero";

// Assets
const property1 = "/images/property-1.jpg";
const property2 = "/images/property-2.jpg";
const property3 = "/images/property-3.jpg";
const floatingCityscapeImage = "/images/floating-cityscape.png";
const group427320982Image = "/images/group-427320982.svg";
const groupIcon = "/images/group-1261156732.svg";

export default function PropertiesPage() {
    const properties = [
        {
            image: property1,
            title: "J7 Emporium - Tech7",
            location: "B17 Islamabad",
            type: "Two Bedroom Apartment",
            price: "PKR 60,000 per Sqft",
            space: "10,000 Sqft",
            rent: "15-20%",
            dark: false
        },
        {
            image: property2,
            title: "J7 Emporium - Tech7",
            location: "B17 Islamabad",
            type: "Two Bedroom Apartment",
            price: "PKR 60,000 per Sqft",
            space: "10,000 Sqft",
            rent: "15-20%",
            dark: true
        },
        {
            image: property3,
            title: "J7 Emporium - Tech7",
            location: "B17 Islamabad",
            type: "Two Bedroom Apartment",
            price: "PKR 60,000 per Sqft",
            space: "10,000 Sqft",
            rent: "15-20%",
            dark: true
        },
        {
            image: property1,
            title: "J7 Emporium - Tech7",
            location: "B17 Islamabad",
            type: "Two Bedroom Apartment",
            price: "PKR 60,000 per Sqft",
            space: "10,000 Sqft",
            rent: "15-20%",
            dark: true
        },
        {
            image: property2,
            title: "J7 Emporium - Tech7",
            location: "B17 Islamabad",
            type: "Two Bedroom Apartment",
            price: "PKR 60,000 per Sqft",
            space: "10,000 Sqft",
            rent: "15-20%",
            dark: true
        },
        {
            image: property3,
            title: "J7 Emporium - Tech7",
            location: "B17 Islamabad",
            type: "Two Bedroom Apartment",
            price: "PKR 60,000 per Sqft",
            space: "10,000 Sqft",
            rent: "15-20%",
            dark: true
        }
    ];

    return (
        <main className="min-h-screen bg-white overflow-x-hidden font-outfit">
            <PageHero
                title="Our Funded Properties"
                description="Funded By Over 2298 Amazing Investors!"
            >
                <button className="bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                    Get Started
                </button>
            </PageHero>

            {/* Discover Section */}
            <section className="py-20 bg-white relative">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] -z-10 opacity-60" />

                <div className="container-main">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <img src={groupIcon} alt="" className="w-12 h-10" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Discover Secure, Fractional<br /> Real Estate Opportunities
                        </h2>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                            Browse A Curated Selection Of Premium Residential And Commercial Properties. Every Listing Includes Full Documentation, Milestone Tracking, And Token-Based Pricing.
                        </p>
                    </div>

                    {/* Properties Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop, i) => (
                            <PropertyCard
                                key={i}
                                id={i + 1}
                                image={prop.image}
                                title={prop.title}
                                location={prop.location}
                                type={prop.type}
                                listingPrice={prop.price}
                                spaceAvailable={prop.space}
                                forecastedRent={prop.rent}
                                theme={prop.dark ? "dark" : "light"}
                                index={i}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <button className="bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                            See Available Properties
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom Banner Section */}
            <section className="py-20 bg-white">
                <div className="container-main">
                    <div
                        className="rounded-[20px] p-8 lg:p-14 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative"
                        style={{
                            border: '2px solid #FFF',
                            background: 'linear-gradient(90deg, #2e62af 0.03%, #912d90 99.97%)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div className="lg:w-3/5 text-white relative z-10">
                            <div className="mb-6">
                                <img src={group427320982Image} alt="" className="w-14 h-12" />
                            </div>
                            <p className="text-lg font-bold mb-2 opacity-90">
                                Property ownership is no longer limited
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                Join the Future of Real Estate
                            </h2>
                            <p className="text-lg mb-10 opacity-80 max-w-xl">
                                With Atomprop, it&apos;s simple, digital, and accessible to everyone
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gradient-to-r from-[#2e62af] to-[#912d90] border border-white/50 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                                    Create Account
                                </button>
                                <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                                    See Available Properties
                                </button>
                            </div>
                        </div>

                        {/* Floating City Image */}
                        <div className="lg:w-2/5 relative h-[300px] lg:h-[400px] w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
                            <img
                                src={floatingCityscapeImage}
                                alt="Floating City"
                                className="w-full h-full object-contain object-bottom scale-125 origin-bottom"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
