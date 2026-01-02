"use client";

import Navbar from "./Navbar";

interface PageHeroProps {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

const heroBg = "/images/hero-bg.jpg";

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 bg-[#0c091d]" style={{ minHeight: '55vh' }}>
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0 top-[4px]"
            style={{
              background: 'rgba(0, 0, 0, 0.86)'
            }}
          />
          {/* Main gradient orb - Matches About Us style */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none opacity-90"
            style={{
              top: '-300px',
              width: '885px',
              height: '885px',
              borderRadius: '885px',
              background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
              filter: 'blur(190px)'
            }}
          />
        </div>

        <div className="relative z-10">
          <Navbar />

          <div 
            className="container-main flex flex-col items-center justify-center text-center pt-16 pb-16"
            style={{ minHeight: 'calc(55vh - 80px)' }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {title}
            </h1>
            <div className="font-body text-white/80 text-base md:text-lg max-w-2xl leading-relaxed px-4">
              {description}
            </div>
            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
