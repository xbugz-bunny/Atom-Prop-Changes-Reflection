"use client";

import WalletLayout from "../components/WalletLayout";
import { X, Download } from "lucide-react";
import Link from "next/link";

export default function WalletEmptyPage() {
  return (
    <WalletLayout>
      {/* Modal Overlay - Wallet Empty */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Modal Card */}
        <div className="relative z-10 w-full max-w-[400px] bg-white rounded-[20px] shadow-2xl p-8 mx-4 text-center">

          {/* Close Button */}
          <Link href="/wallet-details" className="absolute top-4 right-4 w-6 h-6 bg-[#912d90] rounded-full flex items-center justify-center hover:bg-[#7a2377] transition-colors">
            <X className="w-4 h-4 text-white" />
          </Link>

          {/* Wallet Icon with Badge */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Wallet Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#F8F0FF] to-[#EDE4F7] rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                  <g clipPath="url(#clip0_wallet_empty)">
                    <path d="M36.3404 31.9091H30.1359C26.2261 31.9091 23.0451 28.7282 23.0451 24.8184C23.0451 20.9086 26.2261 17.7276 30.1359 17.7276H36.3404C36.8303 17.7276 37.2267 17.3312 37.2267 16.8412V14.1822C37.2267 12.3235 35.785 10.8119 33.9635 10.6654L28.8731 1.77416C28.4014 0.951851 27.6396 0.364118 26.7282 0.120067C25.821 -0.122322 24.8724 0.00498032 24.0605 0.477543L6.61023 10.6368H3.54542C1.59011 10.6368 0 12.2268 0 14.1822V35.4546C0 37.4099 1.59003 39 3.54542 39H33.6813C35.6366 39 37.2267 37.41 37.2267 35.4546V32.7955C37.2267 32.3056 36.8303 31.9091 36.3404 31.9091ZM29.9724 7.26343L31.9037 10.6368H24.1782L29.9724 7.26343ZM10.1335 10.6368L24.9528 2.00957C25.3536 1.77499 25.8218 1.71267 26.2694 1.83216C26.7221 1.95331 27.0995 2.24589 27.3341 2.6553L27.3359 2.65854L13.6327 10.6368H10.1335Z" fill="#912d90" />
                    <path d="M36.3409 19.5005H30.1365C27.2039 19.5005 24.8184 21.886 24.8184 24.8186C24.8184 27.7512 27.2039 30.1367 30.1365 30.1367H36.3409C37.8072 30.1367 39 28.9439 39 27.4776V22.1595C39 20.6932 37.8072 19.5005 36.3409 19.5005ZM30.1365 26.5913C29.1593 26.5913 28.3638 25.7958 28.3638 24.8186C28.3638 23.8414 29.1593 23.0459 30.1365 23.0459C31.1137 23.0459 31.9091 23.8414 31.9091 24.8186C31.9092 25.7958 31.1137 26.5913 30.1365 26.5913Z" fill="#912d90" />
                  </g>
                  <defs>
                    <clipPath id="clip0_wallet_empty">
                      <rect width="39" height="39" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00C9A7] rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">
                0
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-black mb-3">You Wallet is Empty</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            At this moment, you can share your wallet address to receive area in your account directly here.
          </p>

          {/* View Wallet Button */}
          <Link
            href="/wallet-details"
            className="w-full h-[50px] bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            View Wallet
          </Link>

        </div>
      </div>
    </WalletLayout>
  );
}
