"use client";

import {
  ArrowLeft,
  ChevronRight,
  Upload,
  Landmark,
  Banknote,
  Download,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"full" | "installments">("full");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Order details (exact values from design)
  const totalArea = 400; // sq.ft
  const retailPrice = 16000; // PKR/sq.ft
  const payableAmount = 1600000; // PKR (as shown in design)
  const discount = 320000; // PKR
  const totalAmount = 1280000; // PKR (as shown in design)

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-body overflow-x-hidden relative ">

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
        3. MAIN CONTENT
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
    </div>
  );
}
