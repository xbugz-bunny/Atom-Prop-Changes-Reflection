"use client";

import React from "react";

// Local Images - passed as constants if needed or imported here if static
const group427320982Image = "/images/group-427320982.svg";
const image7 = "/images/floating-cityscape.png";

export default function CTASection() {
    return (
        <section className="py-20 bg-white">
            <div className="container-main">
                {/* Gradient Card from Home Page */}
                <div
                    className="rounded-[10px] p-3 md:p-4 lg:p-5 flex flex-col lg:flex-row items-center gap-4 md:gap-5 max-w-[900px] mx-auto"
                    style={{
                        border: '2px solid #FFF',
                        background: 'linear-gradient(90deg, #2e62af 0.03%, #912d90 99.97%)',
                        boxShadow: '275px 523px 165px 0 rgba(0, 0, 0, 0.00), 176px 334px 151px 0 rgba(0, 0, 0, 0.01), 99px 188px 128px 0 rgba(0, 0, 0, 0.05), 44px 84px 95px 0 rgba(0, 0, 0, 0.09), 11px 21px 52px 0 rgba(0, 0, 0, 0.10)',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {/* Logo/Icon */}
                        <div className="mb-4 flex justify-center lg:justify-start" style={{ width: '50.6px', height: '44.5px' }}>
                            <img alt="" className="block max-w-none w-full h-full" src={group427320982Image} />
                        </div>
                        <p className="font-heading font-bold text-white text-sm md:text-base mb-1.5">
                            Property ownership is no longer limited
                        </p>
                        <h2 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-white mb-2">
                            Join the Future of Real Estate
                        </h2>
                        <p className="font-body text-white text-xs mb-3 md:mb-4">
                            With Atomprop, it&apos;s simple, digital, and accessible to everyone
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white text-xs px-3 md:px-4 py-1.5 md:py-2 border-white">
                                Create Account
                            </button>
                            <div
                                className="rounded-[25px] p-[1px] transition-all duration-300 hover:translate-y-[-2px] border border-white"
                                style={{
                                    background: 'linear-gradient(90deg, #2e62af 0%, #912d90 100%)',
                                    boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                <button
                                    className="w-full h-full px-3 md:px-4 py-1.5 md:py-2 rounded-[25px] text-white font-body text-xs font-semibold transition-all duration-300 hover:opacity-90 bg-transparent"
                                    style={{ fontFamily: 'var(--font-body)', cursor: 'pointer', backdropFilter: 'blur(10px)' }}
                                >
                                    See Available Properties
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:w-1/2 w-full relative rounded-lg overflow-hidden"
                        style={{ minHeight: '300px', maxHeight: '400px', height: '100%' }}
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                                alt="Floating cityscape"
                                className="absolute max-w-none"
                                src={image7}
                                style={{ height: '179.47%', left: '-19.29%', top: '-48.67%', width: '145.51%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
