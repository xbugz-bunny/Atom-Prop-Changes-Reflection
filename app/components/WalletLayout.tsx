"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

interface WalletLayoutProps {
  children?: ReactNode; // For modal/popup overlays
}

export default function WalletLayout({ children }: WalletLayoutProps) {
  // Mock data based on the design
  const properties = [
    {
      id: "0011",
      name: "J7 Emporium - Tech7",
      price: "545,025,4",
      tokens: "12.5",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-body overflow-x-hidden relative">

      <Header />

      {/* 
        ========================================
        BREADCRUMB & PAGE CONTENT
        ========================================
      */}
      <div className="container-main pt-8 relative z-30 pb-32">

        <div className="w-full max-w-[1069px] mx-auto relative">
          {/* Left Gradient Blob */}
          <div
            className="absolute top-0 left-[-200px] pointer-events-none z-0 opacity-90"
            style={{
              width: '550px',
              height: '150px',
              borderRadius: '50%',
              background: 'var(--Angular, conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.90) 0deg, rgba(141, 0, 251, 0.90) 76.87500178813934deg, rgba(144, 175, 255, 0.90) 120.00000357627869deg, rgba(151, 51, 252, 0.90) 161.2499964237213deg, rgba(130, 91, 255, 0.90) 198.74999284744263deg, rgba(11, 229, 187, 0.90) 236.25deg, rgba(157, 237, 255, 0.90) 260.6249928474426deg, rgba(11, 7, 27, 0.90) 360deg))',
              filter: 'blur(90px)'
            }}
          />

          {/* Right Gradient Blob */}
          <div
            className="absolute top-[100px] right-[-200px] pointer-events-none z-0 opacity-100"
            style={{
              width: '400px',
              height: '100px',
              borderRadius: '386px',
              background: 'linear-gradient(180deg, #2C64B1 0%, #851e88ff 100%)',
              filter: 'blur(90px)'
            }}
          />

          {/* Breadcrumb / Back Link - Inside wrapper for alignment */}
          <div className="flex items-center gap-4 mt-8 mb-4 relative z-10">
            <Link href="/wallet" className="hover:opacity-80 transition-opacity flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-black" />
              <span className="text-black font-bold text-base">Wallet</span>
            </Link>
          </div>

          <h1 className="text-[32px] font-bold text-black mb-8 font-heading relative z-10">
            Wallet
          </h1>

          {/* Main Card - Single White Container */}
          <div className="bg-white rounded-[15px] p-8 lg:p-12 w-full shadow-[90px_248px_74px_0px_rgba(0,0,0,0),58px_158px_67px_0px_rgba(0,0,0,0.01),32px_89px_57px_0px_rgba(0,0,0,0.05),14px_40px_42px_0px_rgba(0,0,0,0.09),4px_10px_23px_0px_rgba(0,0,0,0.10)] relative z-20 mb-16">

            {/* Top Section: Wallet Address */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-black mb-2">Wallet Address....</h2>
              <p className="text-gray-500 mb-4 text-sm">Verify you billing address</p>

              <div className="w-full bg-white border border-gray-200 rounded-full text-gray-500 text-sm shadow-sm px-6 py-4">
                Primary address (used in your previous transaction)
              </div>
            </div>

            {/* Bottom Section: Balance & Properties */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">

              {/* Left Column: Balance & List */}
              <div className="w-full">
                {/* Total Balance */}
                <div className="flex items-center justify-between gap-8 mb-8">
                  <span className="text-base font-bold text-black">Total Balance</span>
                  <span className="text-[28px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2e62af] to-[#912d90]">208, 8975.33</span>
                </div>

                {/* Properties List Header */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-black">Properties</h3>
                </div>

                {/* Properties Table/List */}
                <div className="w-full">
                  {/* Headers */}
                  <div className="grid grid-cols-4 gap-4 mb-4 text-xs font-bold text-black/80">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Prices</div>
                    <div>Coins</div>
                  </div>

                  {/* Rows */}
                  {properties.map((prop, idx) => (
                    <div key={idx} className="grid grid-cols-4 gap-4 text-sm text-gray-600 font-medium pt-2 border-t border-gray-100">
                      <div>{prop.id}</div>
                      <div className="truncate pr-2" title={prop.name}>{prop.name}</div>
                      <div>{prop.price}</div>
                      <div>{prop.tokens}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Property Image */}
              <div className="relative w-full h-[250px] rounded-[15px] overflow-hidden shadow-md ml-auto">
                <img
                  src="https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png"
                  alt="Property Building"
                  className="object-cover w-full h-full"
                />
                {/* Logo Overlay - Glassmorphic Style */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-1.5 border border-white/20">
                  <img
                    src="/images/timeline/group-dots-1.svg"
                    alt="Logo"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Render modal/popup overlays passed as children */}
      {children}

      <Footer />
    </div>
  );
}
