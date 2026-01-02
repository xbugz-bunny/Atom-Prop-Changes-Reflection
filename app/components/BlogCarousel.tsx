"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Button SVG Component (Blue Circle with White Arrow from design)
const CarouselNavButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="w-12 h-12 rounded-full bg-[#3A5DAC] flex items-center justify-center hover:opacity-90 transition-opacity z-10 shadow-lg"
  >
     {direction === 'left' ? (
         <ArrowLeft className="text-white w-6 h-6" />
     ) : (
         <ArrowRight className="text-white w-6 h-6" />
     )}
  </button>
);

const slides = [
  {
    id: 1,
    image: "/images/blog/featured-hero.png",
    date: "January 18, 2025",
    title: "How Digital Platforms Are Making Real Estate Investing More Accessible",
    description: "Digital Real Estate Platforms Have Removed Traditional Barriers, Allowing Anyone To Invest With Minimal Capital And Complete Transparency. By Offering Fractional Ownership, Instant Access To Project Information, And Secure Online Transactions, These Platforms Simplify The Entire Investment Journey."
  },
  {
    id: 2,
    image: "/images/blog/featured-hero.png",
    date: "January 18, 2025",
    title: "How Digital Platforms Are Making Real Estate Investing More Accessible",
    description: "Digital Real Estate Platforms Have Removed Traditional Barriers, Allowing Anyone To Invest With Minimal Capital And Complete Transparency. By Offering Fractional Ownership, Instant Access To Project Information, And Secure Online Transactions, These Platforms Simplify The Entire Investment Journey."
  }
];

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="py-20 flex justify-center relative bg-white">
      {/* Container specifically for the Featured Card Look */}
      <div 
        className="w-full max-w-[1316px] bg-[#FFFFFF] rounded-[30px] border border-[#3A5DAC] p-6 shadow-[0px_4px_20px_rgba(58,93,172,0.1)] relative"
      >
        {/* Navigation Buttons - Positioned on the edges of the card */}
        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 hidden lg:block z-20">
            <CarouselNavButton direction="left" onClick={prevSlide} />
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 hidden lg:block z-20">
             <CarouselNavButton direction="right" onClick={nextSlide} />
        </div>

        {/* Content Content */}
        <div className="flex flex-col items-center">
            {/* Image Section */}
            <div 
                className="w-full h-[300px] md:h-[505px] rounded-[20px] overflow-hidden mb-10 shadow-sm"
                style={{
                    background: `url(${currentSlide.image}) center / cover no-repeat`
                }}
            />

            {/* Meta */}
            <div className="flex items-center gap-3 mb-5">
                 <img src="/images/timeline/connector-logo.svg" alt="" className="w-5 h-5" />
                 <span className="text-[#3A5DAC] font-bold text-sm tracking-[0.2em] uppercase font-body">ATOMPROP</span>
                 <span className="text-gray-300">|</span>
                 <span className="text-[#3A5DAC] font-bold text-sm font-body uppercase">{currentSlide.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-[#101923] text-center font-bold text-2xl md:text-[32px] leading-[1.3] mb-6 max-w-[900px] capitalize font-heading">
                {currentSlide.title}
            </h2>

            {/* Description */}
            <p className="text-[#5E6D7E] text-center text-lg md:text-[18px] font-normal leading-relaxed mb-10 max-w-[1000px] font-body">
                 {currentSlide.description}
            </p>

            {/* Read More */}
            <button className="flex items-center gap-3 text-[#3A5DAC] font-bold text-sm hover:text-[#2c4a8c] transition mb-4 uppercase tracking-wide font-body">
                Read More
                <div className="w-6 h-6 rounded-full bg-[#3A5DAC] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
            </button>

        </div>
      </div>
    </section>
  );
}
