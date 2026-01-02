"use client";

import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-white font-outfit overflow-hidden">
            <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
                {/* Left Side - Form */}
                <div className="w-full md:w-[40%] flex flex-col p-6 md:p-12 lg:p-16 relative z-10 font-outfit min-h-screen">
                    {children}

                    {/* Blobs */}
                    <div className="gradient-left pointer-events-none" style={{ top: '10%', left: '-10%', transform: "scale(1.5)" }}></div>
                    <div className="gradient-left pointer-events-none" style={{ bottom: '10%', right: '10%', transform: "scale(1.2) rotate(180deg)" }}></div>
                </div>
                {/* Right Side - Visual */}
                <div className="hidden md:flex w-full md:w-[60%] relative bg-white justify-center items-center h-auto">
                    {/* Top Right Corner Gradient Blob */}
                    <div
                        className="absolute top-0 right-0 pointer-events-none z-0"
                        style={{
                            width: "912.448px",
                            height: "912.448px",
                            borderRadius: "912.448px",
                            transform: "translate(50%, -30%) rotate(45.019deg)",
                            filter: "blur(90px)",
                            background: `
                                conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.45) 0deg, rgba(141, 0, 251, 0.45) 76.87500178813934deg, rgba(144, 175, 255, 0.45) 120.00000357627869deg, rgba(151, 51, 252, 0.45) 161.2499964237213deg, rgba(130, 91, 255, 0.45) 198.74999284744263deg, rgba(111, 229, 187, 0.45) 236.25deg, rgba(157, 237, 255, 0.45) 260.6249928474426deg, rgba(11, 7, 27, 0.45) 360deg)
                            `,
                        }}
                    />

                    {/* Floating Side Image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                        <div className="relative w-[70%] h-[70%]">
                            <Image
                                src="/images/login-side-image.png"
                                alt="Investment Platform Features"
                                fill
                                className="object-contain animate-float"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
            </div>


            </div>
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
                .gradient-left {
                    position: absolute;
                    width: 251px;
                    height: 241px;
                    border-radius: 125.62px / 120.54px;
                    filter: blur(90px);
                    background: conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.2) 0%, rgba(141, 0, 251, 0.2) 21%, rgba(144, 175, 255, 0.2) 33%, rgba(151, 51, 252, 0.2) 45%, rgba(130, 91, 255, 0.2) 55%, rgba(111, 229, 187, 0.2) 66%, rgba(157, 237, 255, 0.2) 72%, rgba(11, 7, 27, 0.2) 100%);
                    opacity: 0.6;
                    z-index: 0;
                }
            `}</style>
        </div>
    );
}
