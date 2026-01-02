"use client";

import { LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative z-10 h-[100px]">
      <div className="absolute top-0 left-0 w-full h-[100px] -z-10 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Header background"
          src="/images/header-bg.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000db]" />
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute top-[-100px] right-[-175px] w-[350px] h-[350px] rounded-full bg-[linear-gradient(180deg,#2C64B1_0%,#8C2E90_100%)] blur-[80px] pointer-events-none z-0" />

      <header className="container-main flex items-center justify-between h-[56px] pt-4 animate-fade-in relative z-20">
        <Link href="/">
          <img
            className="h-[50px] w-auto mt-8"
            alt="Atomprop logo"
            src="/images/atomprop-logo.png"
          />
        </Link>

        <nav className="flex items-center gap-[24px] mt-8">
          {/* Dashboard Icon - using LayoutGrid since it's used in existing pages */}
          <Link href="/dashboard" className="w-[24px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity">
            <LayoutGrid className="w-full h-full text-white" />
          </Link>

          {/* Wallet Icon */}
          <Link href="/wallet-details" className="w-[24px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src="/images/properties/wallet-icon.svg"
              alt="Wallet"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Notification Icon */}
          <Link href="/transaction" className="w-[24px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity">
            <img
              className="w-full h-full"
              alt="Notification"
              src="/images/notification-icon.png"
            />
          </Link>

          {/* User Profile with Hover Dropdown */}
          <div className="relative group">
            <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <img
                className="w-[24px] h-[24px]"
                alt="User profile"
                src="/images/properties/user-profile.svg"
              />
            </div>

            {/* Hover Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[200] overflow-hidden">
              <div className="py-1">
                <a href="/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  My Profile
                </a>
                <button
                  onClick={() => {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('userEmail');
                    window.location.href = '/login';
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
