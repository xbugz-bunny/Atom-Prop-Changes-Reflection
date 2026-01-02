"use client";

import {
  ArrowLeft,
  ChevronRight,
  Upload,
  Landmark,
  Banknote,
  Download,
  X,
  FileText,
  Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Reusing CheckoutPage logic/layout for background
// In a real app, we might extract this to a Layout or Shared Component
// For this task, duplicating to ensure standalone functionality as requested

export default function CheckoutAttachmentPage() {
  const [paymentMethod, setPaymentMethod] = useState<"full" | "installments">("full");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Order details (exact values from design)
  const totalArea = 400; // sq.ft
  const retailPrice = 16000; // PKR/sq.ft
  const payableAmount = 1600000; // PKR (as shown in design)
  const discount = 320000; // PKR
  const totalAmount = 1280000; // PKR (as shown in design)

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-body overflow-x-hidden relative">

      <Header />

      {/* Unified Gradient Blob (Left Side, Below Header) */}
      <div
        className="absolute top-[30px] translate-x-1/2 translate-y-1/2 pointer-events-none z-10 opacity-90"
        style={{
          width: '550px',
          height: '250px',
          borderRadius: '50%',
          background: 'var(--Angular, conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.90) 0deg, rgba(141, 0, 251, 0.90) 76.87500178813934deg, rgba(144, 175, 255, 0.90) 120.00000357627869deg, rgba(151, 51, 252, 0.90) 161.2499964237213deg, rgba(130, 91, 255, 0.90) 198.74999284744263deg, rgba(11, 229, 187, 0.90) 236.25deg, rgba(157, 237, 255, 0.90) 260.6249928474426deg, rgba(11, 7, 27, 0.90) 360deg))',
          filter: 'blur(90px)'
        }}
      />

      {/* 
        ========================================
        2. BREADCRUMB & PAGE TITLE
        ========================================
      */}
      <div className="container-main pt-8 relative z-0">

        <div className="flex items-center gap-5 my-16 animate-fade-in relative z-10">
          <Link href="/cart" className="hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-[33px] h-[33px] text-black" />
          </Link>
          <h1 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-black text-[22px] tracking-[0] leading-[normal]">
            Checkout
          </h1>
        </div>
      </div>

      {/* 
        ========================================
        3. MAIN CONTENT (Background)
        ========================================
      */}
      <main className="container-main relative z-30 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8">

          {/* LEFT COLUMN: Payment Information */}
          <div className="space-y-8">

            {/* Make Payment Section */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm">
              <h2 className="text-xl font-bold text-black mb-2 font-heading">Make Payment</h2>
              <p className="text-gray-500 mb-8 text-sm">Deposit a cheque with the amount (PKR) to any of the following back accounts.</p>

              <div className="border border-gray-200 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-600">i</span>
                  </div>
                  <h3 className="font-bold text-black text-sm">Bank Name</h3>
                </div>

                <div className="space-y-4">
                  {/* Bank Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 ml-1">Bank Name</label>
                    <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 text-sm">
                      Standard Chartered Bank
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-xs font-bold text-gray-700">Account Number</label>
                      <span className="text-xs text-gray-500">2561-5869-6521-0125</span>
                    </div>
                    <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 text-sm">
                      Atomprop
                    </div>
                  </div>

                  {/* IBAN */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 ml-1">IBAN</label>
                    <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 text-sm">
                      PK 01 ATOM 2514 5647 5894 4587 5869
                    </div>
                  </div>

                  {/* BRANCH */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 ml-1">BRANCH</label>
                    <div className="relative">
                      <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 text-sm flex justify-between items-center cursor-pointer">
                        E11/3
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accepted Payment Method Section */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm">
              <h2 className="text-xl font-bold text-black mb-2 font-heading">Accepted Payment Method</h2>
              <p className="text-gray-500 mb-8 text-sm">Explore The Steps To Pay Through Any Of The Following Acceptable Payment Methods</p>

              <div className="space-y-4">
                {/* Cash / Cross-cheque Deposit */}
                <div className="border border-gray-200 rounded-2xl p-4 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#2C64B1] rounded-lg shrink-0 flex items-center justify-center text-white">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-black text-sm">Cash / Cross-cheque Deposit</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 leading-relaxed">
                      You can make a payment to the bank either by cash or a crossed cheque.
                    </p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-800">
                      Status: Verified
                    </span>
                  </div>
                </div>

                {/* Online Bank/Wire Transfer */}
                <div className="border border-gray-200 rounded-2xl p-4 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg shrink-0 flex items-center justify-center text-[#2C64B1]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-sm mb-1">Online Bank/Wire Transfer</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      On successful document review, your investment status will be verified with your allocated space in the building.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-3.5 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm shadow-md">
                <Download className="w-4 h-4" />
                Download Area Pledge
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit relative group">
            {/* 
                ========================================
                Gradient Blob (Aligned with Payment Options)
                ========================================
            */}
            <div
              className="absolute top-[-60px] right-[-193px] pointer-events-none -z-10 opacity-70"
              style={{
                width: '386px',
                height: '386px',
                borderRadius: '386px',
                background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
                filter: 'blur(190px)'
              }}
            />

            <div className="bg-white rounded-[20px] p-8 shadow-md border border-gray-100 relative z-10">

              {/* Order Summary Header */}
              <h2 className="text-xl font-bold text-black mb-6 font-heading">Order Summary</h2>

              {/* Payment Method Selection - Horizontal Row */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-black mb-4">Select Payment Method</h3>
                <div className="flex items-center gap-6">
                  {/* Pay in Full */}
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === "full" ? "border-[#2C64B1]" : "border-gray-300"}`}>
                      {paymentMethod === "full" && <div className="w-2.5 h-2.5 rounded-full bg-[#2C64B1]" />}
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value="full"
                      checked={paymentMethod === "full"}
                      onChange={() => setPaymentMethod("full")}
                      className="hidden"
                    />
                    <span className={`text-sm font-medium ${paymentMethod === "full" ? "text-black" : "text-gray-600"} group-hover:text-black transition-colors`}>Pay in Full</span>
                  </label>

                  {/* Pay in Installments */}
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === "installments" ? "border-[#2C64B1]" : "border-gray-300"}`}>
                      {paymentMethod === "installments" && <div className="w-2.5 h-2.5 rounded-full bg-[#2C64B1]" />}
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value="installments"
                      checked={paymentMethod === "installments"}
                      onChange={() => setPaymentMethod("installments")}
                      className="hidden"
                    />
                    <span className={`text-sm font-medium ${paymentMethod === "installments" ? "text-black" : "text-gray-600"} group-hover:text-black transition-colors`}>Pay in Installments</span>
                  </label>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 w-full mb-6" />

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-base">
                  <span className="text-gray-500 font-medium">Total Area Pledged</span>
                  <span className="font-bold text-black">{totalArea}sq. ft.</span>
                </div>
                <div className="flex items-center justify-between text-base">
                  <span className="text-gray-500 font-medium">Retail Price</span>
                  <span className="font-bold text-black">{retailPrice.toLocaleString()} PKR/sq.ft</span>
                </div>
                <div className="flex items-center justify-between text-base">
                  <span className="text-gray-500 font-medium">Payable Amount</span>
                  <span className="font-bold text-black">{payableAmount.toLocaleString()} PKR</span>
                </div>

                {/* Dashed Cross Decoration for Discount */}
                <div className="relative py-2">
                  <div className="flex items-center justify-between text-base relative z-10">
                    <span className="text-gray-500 font-medium">Discount Applied</span>
                    <span className="font-bold text-[#FF3B30]">-320,000 PKR</span>
                  </div>
                  {/* Blue dashed line decoration approximation based on design */}
                  <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-blue-300 -z-0 opacity-50" />
                  <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-blue-300 -z-0 opacity-50" />
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 w-full mt-2" />

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-700">Total Amount</span>
                  <span className="text-xl font-bold text-[#2C64B1]">{totalAmount.toLocaleString()} PKR</span>
                </div>
              </div>

              {/* Terms Checkbox - Grey Box */}
              <div className="mb-8 bg-[#F5F6FA] p-4 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className={`mt-0.5 w-5 h-5 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors ${agreedToTerms ? 'bg-[#2C64B1] border-[#2C64B1]' : 'bg-white border-gray-400'}`}>
                    {agreedToTerms && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="hidden"
                  />
                  <span className="text-sm text-gray-600 leading-snug">
                    I confirm that the <span className="text-[#2C64B1]">information</span> i have provided is <span className="text-[#2C64B1]">accurate</span> and agree to the <span className="text-[#2C64B1]">terms & conditions</span>.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button className="w-full py-3.5 px-6 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2">
                  <Upload className="w-4 h-4 mt-0.5" />
                  Upload Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* 
        ========================================
        MODAL OVERLAY
        ========================================
      */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Modal Card */}
        <div className="relative z-10 w-full max-w-[600px] bg-white rounded-[24px] shadow-2xl p-8 mx-4 animate-scale-in">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-black font-heading">CNIC Attachment & Bank Slip Attachment</h2>
            <button className="w-8 h-8 flex items-center justify-center bg-[#8E2A8A] rounded-full hover:opacity-90 transition-opacity">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="space-y-4 mb-8">

            {/* CNIC Attachment Card */}
            <div className="p-4 rounded-[20px] bg-white border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-[#E0E7FF] flex items-center justify-center text-[#2C64B1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_2053_1545)">
                    <path d="M22.6016 9.25016C24.6838 9.47286 26.7783 9.55825 28.8716 9.50578L28.8666 9.49766C26.3945 5.76548 23.2021 2.56438 19.4766 0.0820312C19.4226 2.18579 19.508 4.29081 19.7323 6.38328C19.8923 7.76578 21.2185 9.09203 22.6016 9.25016Z" fill="#2C64B1" />
                    <path d="M25.6298 19.2603C24.3699 19.2603 23.1383 19.6338 22.0908 20.3338C21.0432 21.0337 20.2268 22.0286 19.7447 23.1926C19.2625 24.3565 19.1364 25.6373 19.3822 26.873C19.628 28.1086 20.2346 29.2437 21.1255 30.1345C22.0164 31.0254 23.1514 31.6321 24.387 31.8779C25.6227 32.1236 26.9035 31.9975 28.0675 31.5154C29.2314 31.0332 30.2263 30.2168 30.9262 29.1692C31.6262 28.1217 31.9998 26.8901 31.9998 25.6303C31.9998 23.9408 31.3286 22.3206 30.134 21.126C28.9394 19.9314 27.3192 19.2603 25.6298 19.2603ZM28.6798 25.5103C28.5985 25.5915 28.5021 25.656 28.3959 25.7C28.2897 25.7439 28.1759 25.7666 28.061 25.7666C27.9461 25.7666 27.8323 25.7439 27.7261 25.7C27.62 25.656 27.5235 25.5915 27.4423 25.5103L26.5048 24.5728V28.7934C26.5048 29.0254 26.4126 29.248 26.2485 29.4121C26.0844 29.5762 25.8618 29.6684 25.6298 29.6684C25.3977 29.6684 25.1751 29.5762 25.0111 29.4121C24.847 29.248 24.7548 29.0254 24.7548 28.7934V24.5759L23.8173 25.5134C23.6532 25.6775 23.4306 25.7697 23.1985 25.7697C22.9664 25.7697 22.7439 25.6775 22.5798 25.5134C22.4157 25.3493 22.3235 25.1267 22.3235 24.8946C22.3235 24.6626 22.4157 24.44 22.5798 24.2759L25.011 21.8453C25.0923 21.764 25.1887 21.6995 25.2949 21.6556C25.4011 21.6116 25.5149 21.5889 25.6298 21.5889C25.7447 21.5889 25.8585 21.6116 25.9646 21.6556C26.0708 21.6995 26.1673 21.764 26.2485 21.8453L28.6798 24.2759C28.761 24.3571 28.8255 24.4536 28.8695 24.5598C28.9134 24.6659 28.9361 24.7797 28.9361 24.8946C28.9361 25.0095 28.9134 25.1233 28.8695 25.2295C28.8255 25.3357 28.761 25.4321 28.6798 25.5134V25.5103Z" fill="#2C64B1" />
                    <path d="M28.9301 11.1775C28.5138 11.1882 28.0982 11.195 27.6845 11.195C25.9272 11.1945 24.1712 11.1008 22.4238 10.9144H22.4088C21.367 10.7938 20.3463 10.2769 19.5263 9.45942C18.7063 8.64192 18.1926 7.61879 18.0713 6.57754C18.0716 6.57255 18.0716 6.56754 18.0713 6.56254C17.8392 4.39054 17.7507 2.20558 17.8063 0.021919C14.5223 -0.0572367 11.2365 0.0780509 7.97008 0.426919C5.7882 0.680044 3.69633 2.77254 3.44258 4.95442C2.8707 10.3075 2.8707 20.2475 3.44258 25.6007C3.6957 27.7825 5.7882 29.875 7.97008 30.1282C11.6743 30.5247 15.4029 30.6461 19.1251 30.4913C18.3366 29.434 17.8166 28.2011 17.6098 26.8986C17.4029 25.596 17.5154 24.2627 17.9376 23.0132H9.21758C8.98551 23.0132 8.76295 22.921 8.59886 22.7569C8.43477 22.5928 8.34258 22.3702 8.34258 22.1382C8.34258 21.9061 8.43477 21.6835 8.59886 21.5194C8.76295 21.3554 8.98551 21.2632 9.21758 21.2632H18.7801C19.4751 20.1792 20.4151 19.2738 21.5245 18.62H9.21758C8.98551 18.62 8.76295 18.5279 8.59886 18.3638C8.43477 18.1997 8.34258 17.9771 8.34258 17.745C8.34258 17.513 8.43477 17.2904 8.59886 17.1263C8.76295 16.9622 8.98551 16.87 9.21758 16.87H22.7801C23.0121 16.87 23.2347 16.9622 23.3988 17.1263C23.5629 17.2904 23.6551 17.513 23.6551 17.745V17.75C25.4247 17.3119 27.2899 17.4769 28.9551 18.2188C29.0032 15.8944 28.9945 13.4563 28.9301 11.1775ZM18.4076 14.2275H9.22008C8.98801 14.2275 8.76545 14.1354 8.60136 13.9713C8.43727 13.8072 8.34508 13.5846 8.34508 13.3525C8.34508 13.1205 8.43727 12.8979 8.60136 12.7338C8.76545 12.5697 8.98801 12.4775 9.22008 12.4775H18.4076C18.6396 12.4775 18.8622 12.5697 19.0263 12.7338C19.1904 12.8979 19.2826 13.1205 19.2826 13.3525C19.2826 13.5846 19.1904 13.8072 19.0263 13.9713C18.8622 14.1354 18.6396 14.2275 18.4076 14.2275Z" fill="#2C64B1" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2053_1545">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black mb-1">CNIC Attachment</h3>
                <p className="text-xs text-gray-500">upload front & back of CNIC (Max size 5mb)</p>
              </div>
            </div>

            {/* Bank Slip Attachment Card */}
            <div className="p-4 rounded-[20px] bg-white border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-[#E0E7FF] flex items-center justify-center text-[#2C64B1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_2053_1545)">
                    <path d="M22.6016 9.25016C24.6838 9.47286 26.7783 9.55825 28.8716 9.50578L28.8666 9.49766C26.3945 5.76548 23.2021 2.56438 19.4766 0.0820312C19.4226 2.18579 19.508 4.29081 19.7323 6.38328C19.8923 7.76578 21.2185 9.09203 22.6016 9.25016Z" fill="#2C64B1" />
                    <path d="M25.6298 19.2603C24.3699 19.2603 23.1383 19.6338 22.0908 20.3338C21.0432 21.0337 20.2268 22.0286 19.7447 23.1926C19.2625 24.3565 19.1364 25.6373 19.3822 26.873C19.628 28.1086 20.2346 29.2437 21.1255 30.1345C22.0164 31.0254 23.1514 31.6321 24.387 31.8779C25.6227 32.1236 26.9035 31.9975 28.0675 31.5154C29.2314 31.0332 30.2263 30.2168 30.9262 29.1692C31.6262 28.1217 31.9998 26.8901 31.9998 25.6303C31.9998 23.9408 31.3286 22.3206 30.134 21.126C28.9394 19.9314 27.3192 19.2603 25.6298 19.2603ZM28.6798 25.5103C28.5985 25.5915 28.5021 25.656 28.3959 25.7C28.2897 25.7439 28.1759 25.7666 28.061 25.7666C27.9461 25.7666 27.8323 25.7439 27.7261 25.7C27.62 25.656 27.5235 25.5915 27.4423 25.5103L26.5048 24.5728V28.7934C26.5048 29.0254 26.4126 29.248 26.2485 29.4121C26.0844 29.5762 25.8618 29.6684 25.6298 29.6684C25.3977 29.6684 25.1751 29.5762 25.0111 29.4121C24.847 29.248 24.7548 29.0254 24.7548 28.7934V24.5759L23.8173 25.5134C23.6532 25.6775 23.4306 25.7697 23.1985 25.7697C22.9664 25.7697 22.7439 25.6775 22.5798 25.5134C22.4157 25.3493 22.3235 25.1267 22.3235 24.8946C22.3235 24.6626 22.4157 24.44 22.5798 24.2759L25.011 21.8453C25.0923 21.764 25.1887 21.6995 25.2949 21.6556C25.4011 21.6116 25.5149 21.5889 25.6298 21.5889C25.7447 21.5889 25.8585 21.6116 25.9646 21.6556C26.0708 21.6995 26.1673 21.764 26.2485 21.8453L28.6798 24.2759C28.761 24.3571 28.8255 24.4536 28.8695 24.5598C28.9134 24.6659 28.9361 24.7797 28.9361 24.8946C28.9361 25.0095 28.9134 25.1233 28.8695 25.2295C28.8255 25.3357 28.761 25.4321 28.6798 25.5134V25.5103Z" fill="#2C64B1" />
                    <path d="M28.9301 11.1775C28.5138 11.1882 28.0982 11.195 27.6845 11.195C25.9272 11.1945 24.1712 11.1008 22.4238 10.9144H22.4088C21.367 10.7938 20.3463 10.2769 19.5263 9.45942C18.7063 8.64192 18.1926 7.61879 18.0713 6.57754C18.0716 6.57255 18.0716 6.56754 18.0713 6.56254C17.8392 4.39054 17.7507 2.20558 17.8063 0.021919C14.5223 -0.0572367 11.2365 0.0780509 7.97008 0.426919C5.7882 0.680044 3.69633 2.77254 3.44258 4.95442C2.8707 10.3075 2.8707 20.2475 3.44258 25.6007C3.6957 27.7825 5.7882 29.875 7.97008 30.1282C11.6743 30.5247 15.4029 30.6461 19.1251 30.4913C18.3366 29.434 17.8166 28.2011 17.6098 26.8986C17.4029 25.596 17.5154 24.2627 17.9376 23.0132H9.21758C8.98551 23.0132 8.76295 22.921 8.59886 22.7569C8.43477 22.5928 8.34258 22.3702 8.34258 22.1382C8.34258 21.9061 8.43477 21.6835 8.59886 21.5194C8.76295 21.3554 8.98551 21.2632 9.21758 21.2632H18.7801C19.4751 20.1792 20.4151 19.2738 21.5245 18.62H9.21758C8.98551 18.62 8.76295 18.5279 8.59886 18.3638C8.43477 18.1997 8.34258 17.9771 8.34258 17.745C8.34258 17.513 8.43477 17.2904 8.59886 17.1263C8.76295 16.9622 8.98551 16.87 9.21758 16.87H22.7801C23.0121 16.87 23.2347 16.9622 23.3988 17.1263C23.5629 17.2904 23.6551 17.513 23.6551 17.745V17.75C25.4247 17.3119 27.2899 17.4769 28.9551 18.2188C29.0032 15.8944 28.9945 13.4563 28.9301 11.1775ZM18.4076 14.2275H9.22008C8.98801 14.2275 8.76545 14.1354 8.60136 13.9713C8.43727 13.8072 8.34508 13.5846 8.34508 13.3525C8.34508 13.1205 8.43727 12.8979 8.60136 12.7338C8.76545 12.5697 8.98801 12.4775 9.22008 12.4775H18.4076C18.6396 12.4775 18.8622 12.5697 19.0263 12.7338C19.1904 12.8979 19.2826 13.1205 19.2826 13.3525C19.2826 13.5846 19.1904 13.8072 19.0263 13.9713C18.8622 14.1354 18.6396 14.2275 18.4076 14.2275Z" fill="#2C64B1" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2053_1545">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black mb-1">Bank Slip Attachment</h3>
                <p className="text-xs text-gray-500">upload the bank deposit slip or transfer receipt (Max size 5mb)</p>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <button className="w-full py-3.5 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-sm">
            Submit For Review
          </button>

        </div>
      </div>

    </div>
  );
}
