"use client";

import PageHero from "../components/PageHero";
import BlogCarousel from "../components/BlogCarousel";
import Footer from "../components/Footer";
import { Button } from "../components/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "../components/CTASection";

// Mock Data for Blog Posts
const stateBlogPosts = [
  {
    id: 1,
    title: "How Tokenization Is Transforming Real Estate Investing",
    excerpt: "Content About Digital Ownership, Blockchain Technology, And Real Estate Tokenization.",
    image: "/images/blog/blog-1.png",
    date: "January 18, 2025",
    author: "Atomprop Team",
    category: "Education",
  },
  {
    id: 2,
    title: "Why Fractional Property Ownership Is The Future",
    excerpt: "Content About Digital Ownership, Blockchain Technology, And Real Estate Tokenization.",
    image: "/images/blog/blog-2.png",
    date: "January 18, 2025",
    author: "Sarah Johnson",
    category: "Market Trends",
  },
  {
    id: 3,
    title: "Understanding Construction Stage Pricing In Real Estate",
    excerpt: "Content About Digital Ownership, Blockchain Technology, And Real Estate Tokenization.",
    image: "/images/blog/blog-3.png",
    date: "January 18, 2025",
    author: "Michael Chang",
    category: "Investment Tips",
  },
  {
    id: 4,
    title: "The Benefits Of Investing Through A Digital Real Estate Platform",
    excerpt: "Content About Digital Ownership, Blockchain Technology, And Real Estate Tokenization.",
    image: "/images/blog/blog-4.png",
    date: "January 18, 2025",
    author: "Legal Team",
    category: "Platform Updates",
  },
   {
    id: 5,
    title: "How To Build A Strong Real Estate Portfolio With Small Investments",
    excerpt: "Content About Digital Ownership, Blockchain Technology, And Real Estate Tokenization.",
    image: "/images/blog/blog-5.png",
    date: "January 18, 2025",
    author: "Market Analyst",
    category: "Market Analysis",
  },
  {
    id: 6,
    title: "Why Location Still Matters In Tokenized Real Estate",
    excerpt: "Content About Digital Ownership, Blockchain Technology, And Real Estate Tokenization.",
    image: "/images/blog/blog-1.png",
    date: "January 18, 2025",
    author: "Community Manager",
    category: "Community",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-body relative overflow-x-hidden">
      
      {/* Hero Section */}
      <PageHero
        title="Our Blog"
        description="Stay updated with the latest trends in real estate tokenization, investment strategies, and platform news."
      />

      {/* Featured Carousel */}
      <BlogCarousel />

      {/* Blog Content Section */}
      <section className="py-20 bg-[#f5f5f5]"> 
        <div className="container-main">

            {/* Custom Header & Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
                 {/* Search Box - Left/Center */}
                 <div className="relative w-full max-w-[300px]">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full h-12 pl-6 pr-12 rounded-[5px] bg-[#dfe7f2] text-gray-700 placeholder-gray-500 focus:outline-none border border-[#bbcde6]"
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#3A5DAC] rounded-[5px] flex items-center justify-center hover:opacity-90 transition">
                        <img src="/images/search-icon.png" className="w-5 h-5 brightness-0 invert" alt="Search" />
                    </button>
                 </div>

                 {/* Categories - Text Links */}
                 <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                     <button className="font-body font-bold text-[#101923] text-sm md:text-base hover:text-[#3A5DAC] transition">Tokenization</button>
                     <button className="font-body font-normal text-gray-500 text-sm md:text-base hover:text-[#3A5DAC] transition">Real Estate Investment</button>
                     <button className="font-body font-normal text-gray-500 text-sm md:text-base hover:text-[#3A5DAC] transition">Fractional Ownership</button>
                     <button className="font-body font-normal text-gray-500 text-sm md:text-base hover:text-[#3A5DAC] transition">Market Insights</button>
                 </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {stateBlogPosts.map((post) => (
                <div 
                    key={post.id} 
                    className="group bg-white rounded-[20px] border border-[#3A5DAC]/30 overflow-hidden hover:shadow-xl transition-all duration-300 p-4 flex flex-col"
                >
                    {/* Image - Rounded Top - Fixed Aspect Ratio */}
                    <div className="relative w-full h-[220px] mb-6 rounded-[15px] overflow-hidden shrink-0">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="px-2 pb-2 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center gap-2 mb-3">
                             <img src="/images/timeline/connector-logo.svg" alt="" className="w-4 h-4" />
                             <span className="text-[#3A5DAC] font-bold text-[10px] uppercase tracking-wide">ATOMPROP</span>
                             <span className="text-gray-300 text-[10px]">|</span>
                             <span className="text-[#3A5DAC] font-bold text-[10px]">{post.date}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-body font-bold text-[18px] leading-tight text-[#101923] mb-3 line-clamp-2">
                            {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-[#101923] text-[13px] font-normal leading-relaxed mb-6 line-clamp-3 opacity-80">
                            {post.excerpt}
                        </p>
                        
                        {/* Read More - Pushed to bottom */}
                        <div className="mt-auto">
                            <Link 
                                href={`/blog/${post.id}`} 
                                className="inline-flex items-center gap-2 text-[#902b8f] font-bold text-[11px] hover:text-purple-800 transition group/link uppercase"
                            >
                                Read More
                                <div className="w-3.5 h-3.5 rounded-full bg-[#902b8f] flex items-center justify-center group-hover/link:bg-purple-800 transition">
                                    <ArrowRight className="w-2 h-2 text-white" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>

             {/* Pagination custom per design */}
            <div className="flex justify-center items-center gap-4 mb-20">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#3A5DAC] hover:text-[#3A5DAC] transition">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                
                <div className="flex items-center gap-4">
                    <span className="text-[#101923] font-bold text-sm">01</span>
                    <span className="text-gray-400 font-medium text-sm cursor-pointer hover:text-[#101923]">02</span>
                    <span className="text-gray-400 font-medium text-sm cursor-pointer hover:text-[#101923]">03</span>
                    <span className="text-gray-400 font-medium text-sm cursor-pointer hover:text-[#101923]">04</span>
                </div>

                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#3A5DAC] hover:text-[#3A5DAC] transition">
                     <ArrowRight className="w-5 h-5" />
                </button>
            </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />



      <Footer />
    </div>
  );
}
