"use client";

import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { Instagram, Twitter, Facebook, LinkedIn } from "../components/icons";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden relative">
      <PageHero 
        title="Get In Touch With Atomprop"
        description={
          <>
            We&apos;re Here To Help You Invest, Build, And Grow With Confidence.<br />
            Reach Out To Our Team For Support, Partnerships, Or General Inquiries.
          </>
        }
      />

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-[#f5f5f5] relative z-10 overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none z-10 opacity-50"
          style={{
            width: '586px',
            height: '486px',
            borderRadius: '386px',
            background: 'linear-gradient(180deg, #3f6baaff 0%, #8C2E90 100%)',
            filter: 'blur(190px)',
            transform: 'translate(-50%, -50%)', // Centered vertically, half off-screen to left
          }}
        />
        
        <div className="container-main relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-[1000px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Side - Contact Info */}
              <div className="lg:w-2/5">
                {/* Email */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-[45px] h-[45px] rounded-full border border-[#2e62af] flex items-center justify-center flex-shrink-0 text-[#2e62af]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Email</p>
                    <p className="text-black font-semibold text-lg">support@atomprop.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-[45px] h-[45px] rounded-full border border-[#2e62af] flex items-center justify-center flex-shrink-0 text-[#2e62af]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Phone</p>
                    <p className="text-black font-semibold text-lg">+92 3648 256</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-[45px] h-[45px] rounded-full border border-[#2e62af] flex items-center justify-center flex-shrink-0 text-[#2e62af]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Office Address</p>
                    <p className="text-black font-semibold text-lg">Atomprop Headquarters</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-[45px] h-[45px] rounded-full border border-[#2e62af] flex items-center justify-center flex-shrink-0 text-[#2e62af]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Business Hours</p>
                    <p className="text-black font-semibold text-lg">Monday – Friday | 9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-8">
                  <a href="#" className="w-10 h-10 rounded-full border border-[#2e62af] flex items-center justify-center hover:bg-[#2e62af] hover:text-white text-[#2e62af] transition group">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#2e62af] flex items-center justify-center hover:bg-[#2e62af] hover:text-white text-[#2e62af] transition group">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#2e62af] flex items-center justify-center hover:bg-[#2e62af] hover:text-white text-[#2e62af] transition group">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#2e62af] flex items-center justify-center hover:bg-[#2e62af] hover:text-white text-[#2e62af] transition group">
                    <LinkedIn className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#2e62af] flex items-center justify-center hover:bg-[#2e62af] hover:text-white text-[#2e62af] transition group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:w-3/5">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-6">
                  Send Us a Message
                </h2>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Name:</label>
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2e62af] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Email Address:</label>
                      <input
                        type="email"
                        placeholder="Email Address*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2e62af] transition"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Phone Number:</label>
                      <input
                        type="tel"
                        placeholder="Phone Number*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2e62af] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="General Inquiry"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2e62af] transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Message:</label>
                    <textarea
                      placeholder="Feedback"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2e62af] transition resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-[#2e62af] to-[#902b8f] text-white font-semibold rounded-full hover:opacity-90 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
