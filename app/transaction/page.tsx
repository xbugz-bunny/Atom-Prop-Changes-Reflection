"use client";

import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TransactionPage() {
  // Mock transaction data based on the design
  const transactions = [
    {
      id: "12245",
      project: "J7",
      status: "pending",
      area: "100",
      rate: "13,600 pkr / sq.ft",
      amount: "1,490,00 pkr",
      due: "Dec 19, 2025",
      transactionDate: "N/A",
    },
    {
      id: "12245",
      project: "J7",
      status: "pending",
      area: "100",
      rate: "13,600 pkr / sq.ft",
      amount: "1,490,00 pkr",
      due: "Dec 19, 2025",
      transactionDate: "N/A",
    },
    {
      id: "12245",
      project: "J7",
      status: "pending",
      area: "100",
      rate: "13,600 pkr / sq.ft",
      amount: "1,490,00 pkr",
      due: "Dec 19, 2025",
      transactionDate: "N/A",
    },
    {
      id: "12245",
      project: "J7",
      status: "pending",
      area: "100",
      rate: "13,600 pkr / sq.ft",
      amount: "1,490,00 pkr",
      due: "Dec 19, 2025",
      transactionDate: "N/A",
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
            className="absolute top-0 left-[-100px] pointer-events-none z-0 opacity-90"
            style={{
              width: '391px',
              height: '260px',
              borderRadius: '391px',
              background: 'var(--Angular, conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.90) 0deg, rgba(141, 0, 251, 0.90) 76.87500178813934deg, rgba(144, 175, 255, 0.90) 120.00000357627869deg, rgba(151, 51, 252, 0.90) 161.2499964237213deg, rgba(130, 91, 255, 0.90) 198.74999284744263deg, rgba(111, 229, 187, 0.90) 236.25deg, rgba(157, 237, 255, 0.90) 260.6249928474426deg, rgba(11, 7, 27, 0.90) 360deg))',
              filter: 'blur(90px)'
            }}
          />

          {/* Right Gradient Blob */}
          <div
            className="absolute top-[100px] right-[-100px] pointer-events-none z-0 opacity-90"
            style={{
              width: '400px',
              height: '100px',
              borderRadius: '386px',
              background: 'linear-gradient(180deg, #2C64B1 0%, #912d90 100%)',
              filter: 'blur(90px)'
            }}
          />

          {/* Breadcrumb / Back Link - Inside wrapper for alignment */}
          <div className="flex items-center gap-4 mt-8 mb-4 relative z-10">
            <Link href="/wallet" className="hover:opacity-80 transition-opacity flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-black" />
              <span className="text-black font-bold text-base">Transaction</span>
            </Link>
          </div>

          <h1 className="text-[32px] font-bold text-black mb-8 font-heading relative z-10">
            Transaction
          </h1>

          {/* Main Card - Transaction Details */}
          <div className="bg-white rounded-[15px] p-8 lg:p-10 w-full shadow-[90px_248px_74px_0px_rgba(0,0,0,0),58px_158px_67px_0px_rgba(0,0,0,0.01),32px_89px_57px_0px_rgba(0,0,0,0.05),14px_40px_42px_0px_rgba(0,0,0,0.09),4px_10px_23px_0px_rgba(0,0,0,0.10)] relative z-20 mb-16">

            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">

              {/* Left: Transaction Details Info */}
              <div>
                <h2 className="text-lg font-bold text-black mb-1">Transaction Details</h2>
                <p className="text-gray-500 text-sm mb-6">List all of your recent purchases, pending and upcoming transactions</p>

                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Pending Value</p>
                    <p className="text-2xl font-bold text-[#E53935]">24, 824, 000 PKR</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Pending Area Purchased sq.ft</p>
                    <p className="text-2xl font-bold text-black">&nbsp;</p>
                  </div>
                </div>
              </div>

              {/* Right: Transaction Summary Button */}
              <button className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all whitespace-nowrap">
                <Download className="w-5 h-5" />
                Transaction Summary
              </button>
            </div>

            {/* Transaction Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">ID</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Projects</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Status</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Area</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Rate</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Amount</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Due</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Transaction Date</th>
                    <th className="text-left py-4 px-2 text-sm font-bold text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.id}</td>
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.project}</td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#E53935] font-medium">{tx.status}</span>
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.area}</td>
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.rate}</td>
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.amount}</td>
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.due}</td>
                      <td className="py-4 px-2 text-sm text-gray-600">{tx.transactionDate}</td>
                      <td className="py-4 px-2">
                        <Link
                          href="/Checkout-Attachment"
                          className="text-sm text-[#3B82F6] hover:text-[#2563EB] font-medium transition-colors"
                        >
                          Submit Receipts
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
