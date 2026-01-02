"use client";

import WalletLayout from "../components/WalletLayout";
import Link from "next/link";

export default function ConnectWalletPage() {
  return (
    <WalletLayout>
      {/* Modal Overlay - Connect Wallet */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        {/* Backdrop - Only covers content below header (header is 100px tall) */}
        <div className="absolute top-[100px] left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm pointer-events-auto"></div>
        
        {/* Connect Wallet Popup - Positioned directly below wallet icon in header */}
        <div className="absolute top-[72px] right-[120px] z-10 pointer-events-auto">
          {/* Arrow pointer pointing up to wallet icon */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#1A1A2E]"></div>
          
          {/* Popup Card */}
          <Link href="/wallet-details" className="block bg-[#1A1A2E] text-white px-8 py-4 rounded-xl shadow-2xl hover:bg-[#252540] transition-colors">
            <p className="text-sm font-medium whitespace-nowrap text-center">Connect your wallet</p>
          </Link>
        </div>
      </div>
    </WalletLayout>
  );
}
