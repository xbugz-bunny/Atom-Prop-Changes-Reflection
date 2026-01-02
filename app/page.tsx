"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  Phone,
  Mail,
  Location,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  BuyIcon,
  SellIcon,
  TradeIcon,
  HeartIcon,
  ArrowRight,
  ChevronDown,
  Wallet,
  TransactionIcon,
  MarketIcon,
} from "./components/icons";

// SVG Assets
const atompropMark = "/images/atomprop-mark.svg";
const arrowUpCircle = "/images/arrow-up-circle.svg";
const groupIcon = "/images/group-1261156732.svg";
const rightArrowUp = "/images/right-arrow-up.svg";
const rightArrowBlue = "/images/right-arrow-blue.svg";
const rightArrowPurple = "/images/right-arrow-purple.svg";

// Actual assets from Figma design
const heroImage = "/images/hero-image.png";
const heroBg = "/images/hero-bg.jpg";
const property1 = "/images/property-1.jpg";
const property2 = "/images/property-2.jpg";
const property3 = "/images/property-3.jpg";
const platformFeaturesImage = "/images/platform-features.png";
const portfolioDashboardImage = "/images/portfolio-dashboard.png";
const portfolioDashboardNewImage = "/images/f07ea56d373af154b03caa77b2c7aceee3cd0d1d.png";
const cityImage = "/images/cityscape.png";
const floatingCityscapeImage = "/images/floating-cityscape.png";
const businessImage = "/images/business-interface.png";
const group427320982Image = "/images/group-427320982.svg";
const atompropLogo = "/images/atomprop-logo.svg";
const hedera3d = "/images/hedera-3d.png";
const hederaIcon = "/images/hedera-icon.png";
const group1261156731Image = "/images/group-1261156731.svg";
const contract1Image = "/images/contract-1.svg";
const forex1Image = "/images/forex-1.svg";
const coinImage = "/images/coin.png";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Helper function to create SVG path for ring segments - fixed to create perfect circular arcs
  // Round values to prevent hydration mismatches
  const createRingSegment = (startAngle: number, endAngle: number, outerRadius: number, innerRadius: number, centerX: number, centerY: number) => {
    const toRad = (deg: number) => (deg - 90) * Math.PI / 180; // Adjust so 0° is at top
    const round = (num: number) => Math.round(num * 1000000) / 1000000; // Round to 6 decimal places

    // Calculate points on outer arc
    const outerStartX = round(centerX + outerRadius * Math.cos(toRad(startAngle)));
    const outerStartY = round(centerY + outerRadius * Math.sin(toRad(startAngle)));
    const outerEndX = round(centerX + outerRadius * Math.cos(toRad(endAngle)));
    const outerEndY = round(centerY + outerRadius * Math.sin(toRad(endAngle)));

    // Calculate points on inner arc (reverse direction)
    const innerStartX = round(centerX + innerRadius * Math.cos(toRad(endAngle)));
    const innerStartY = round(centerY + innerRadius * Math.sin(toRad(endAngle)));
    const innerEndX = round(centerX + innerRadius * Math.cos(toRad(startAngle)));
    const innerEndY = round(centerY + innerRadius * Math.sin(toRad(startAngle)));

    // Determine if we need large arc (angle > 180°)
    const angleDiff = endAngle - startAngle;
    const largeArcFlag = angleDiff > 180 ? 1 : 0;

    // Create path: outer arc -> line to inner -> inner arc (reverse) -> close
    return [
      `M ${outerStartX} ${outerStartY}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
      `L ${innerStartX} ${innerStartY}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}`,
      `Z`
    ].join(' ');
  };

  const faqs = [
    {
      question: "What is real estate tokenization?",
      answer: "Real estate tokenization is the process of converting property ownership into digital tokens on the blockchain. Each token represents a verified share of a real property asset, allowing investors to buy, sell, and manage fractional ownership easily."
    },
    {
      question: "Is Atomprop licensed or regulated?",
      answer: "Yes, Atomprop operates under strict regulatory compliance. We work with licensed partners and follow all applicable securities and real estate regulations to ensure your investments are secure and legitimate."
    },
    {
      question: "Who can invest with Atomprop?",
      answer: "Atomprop is open to both accredited and non-accredited investors, depending on the specific offering. Our platform makes real estate investment accessible to everyone with as little as PKR 500,000."
    },
    {
      question: "How much do I need to start investing?",
      answer: "You can start investing with as little as PKR 500,000. Our fractional ownership model means you don't need millions to own a piece of premium real estate."
    },
    {
      question: "How does Atomprop ensure project security?",
      answer: "We use blockchain technology for transparent record-keeping, conduct thorough due diligence on all properties, and work with established developers. All transactions are secured and verifiable on the Hedera network."
    }
  ];

  const processSteps = [
    { title: "Property Sourcing", description: "We identify and select high-potential real estate projects" },
    { title: "Property Funding", description: "Verified properties are opened for fractional investment." },
    { title: "Asset Tokenization", description: "Each property is converted into secure digital ownership tokens." },
    { title: "Property Management", description: "We oversee project progress and ensure transparent updates." },
    { title: "Dividend Distribution", description: "Returns are shared directly with investors through the platform." },
    { title: "Exit Strategy", description: "Sell your tokens anytime or exit at project completion." },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center overflow-hidden pb-24 sm:pb-40 lg:pb-48" style={{ minHeight: '100vh' }}>
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0 top-[4px]"
            style={{
              background: 'rgba(0, 0, 0, 0.86)'
            }}
          />
          {/* Main gradient orb - exact specs */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '-200px',
              width: '885px',
              height: '885px',
              borderRadius: '885px',
              background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
              filter: 'blur(190px)'
            }}
          />
          {/* Secondary gradient orb */}
          <div
            className="absolute w-64 md:w-96 aspect-square hidden md:block"
            style={{
              top: '724px',
              right: '10%',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
              filter: 'blur(190px)'
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 py-4 sm:py-6">
          <div className="container-main flex items-center justify-between">
            <div className="flex items-center">
              <img src={atompropLogo} alt="Atomprop" className="h-8 sm:h-[49px] w-auto" />
            </div>

            {/* Menu */}
            <div
              className="hidden lg:flex items-center glass rounded-full px-6 lg:px-8 py-2 lg:py-3"
              style={{ border: '1px solid white' }}
            >
              <div className="flex items-center gap-4 lg:gap-8">
                <Link href="/" className="font-body font-semibold text-white hover:text-purple-400 transition text-sm lg:text-base">Home</Link>
                <Link href="/properties-preview" className="font-body font-semibold text-white hover:text-purple-400 transition text-sm lg:text-base">Properties</Link>
                <Link href="/about-us" className="font-body font-semibold text-white hover:text-purple-400 transition text-sm lg:text-base">About Us</Link>
                <a href="#how-it-works" className="font-body font-semibold text-white hover:text-purple-400 transition text-sm lg:text-base">How it Works</a>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/login">
                <button className="btn-secondary hidden sm:block text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2">Login</button>
              </Link>
              <Link href="/signup">
                <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2">Get Started</button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container-main flex flex-col lg:flex-row items-center justify-between pt-8 sm:pt-12 lg:pt-20 pb-24 sm:pb-40 lg:pb-48">
          <div className="max-w-[810px] text-white text-center lg:text-left">
            <p
              className="capitalize mb-2"
              style={{
                color: '#FFF',
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontSize: '36px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                textTransform: 'capitalize'
              }}
            >
              One Digital Share at a Time
            </p>
            <h1
              className="capitalize mb-4 sm:mb-6"
              style={{
                color: '#FFF',
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontSize: '58px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                textTransform: 'capitalize'
              }}
            >
              Invest in Real Estate
            </h1>
            <p
              className="capitalize max-w-[810px] mb-6 sm:mb-10"
              style={{
                color: '#FFF',
                fontFamily: 'Sora, system-ui, sans-serif',
                fontSize: '22px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '170%',
                textTransform: 'capitalize'
              }}
            >
              Atomprop is a next-generation tokenized real estate platform that lets you invest, earn, and trade property backed digital assets with complete transparency and security.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/login" className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center">
                Start Investing
              </Link>
              <Link href="/properties-preview" className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center">
                See Available Properties
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 sm:mt-12 lg:mt-0 animate-float">
            <img
              src={heroImage}
              alt="Atomprop Dashboard"
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[527px] lg:h-[527px] object-contain"
              style={{ filter: 'blur(0px)' }}
            />
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative z-50 flex justify-center -mt-[87px] md:-mt-[148px] lg:-mt-[183px] mb-0">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6 p-3 md:p-6 lg:p-8 w-full max-w-[1250px] mx-4 md:mx-auto"
          style={{
            height: 'auto',
            minHeight: '218px',
            borderRadius: '16px',
            border: '2px solid #FFF',
            background: '#000',
            boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.25)',
            position: 'relative',
            zIndex: 50,
            transform: 'translateX(-2%)'
          }}
        >
          {/* Column 1 */}
          <div className="flex flex-col justify-between pl-3 md:pl-6 lg:pl-14">
            <div className="text-left">
              <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">PKR 500,000</p>
              <p className="font-body font-light text-white/80 text-xs md:text-sm">Successful transactions</p>
            </div>
            <div className="mt-2 md:mt-4 text-left">
              <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">50,000+</p>
              <p className="font-body font-light text-white/80 text-xs md:text-sm">Customers Trust Us</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="text-left flex flex-col justify-between">
            <div>
              <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">50,000+</p>
              <p className="font-body font-light text-white/80 text-xs md:text-sm">Customers Trust Us</p>
            </div>
            <div className="mt-2 md:mt-4">
              <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">50,000+</p>
              <p className="font-body font-light text-white/80 text-xs md:text-sm">Customers Trust Us</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="text-left flex flex-col justify-between">
            <div>
              <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">11,000+</p>
              <p className="font-body font-light text-white/80 text-xs md:text-sm">Real Estate Partners</p>
            </div>
            <div className="mt-2 md:mt-4">
              <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">50,000+</p>
              <p className="font-body font-light text-white/80 text-xs md:text-sm">Customers Trust Us</p>
            </div>
          </div>
          {/* Column 4 */}
          <div className="text-left flex flex-col justify-between pr-2 md:pr-4 lg:pr-10">
            <div>
              <div className="flex items-center gap-1 md:gap-2">
                <p className="font-heading font-bold text-base md:text-lg lg:text-xl xl:text-2xl gradient-text">4.7</p>
                <div className="flex gap-0.5 md:gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" filled />
                  ))}
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400/50" filled={false} />
                </div>
              </div>
              <p className="font-body text-white/80 text-xs md:text-sm mt-1">Rating on Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Model Section */}
      <section id="about" className="relative pt-10 md:pt-16 lg:pt-20 pb-10 bg-[#f5f5f5]" style={{ zIndex: 10 }}>
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 text-left">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <img
                  src={groupIcon}
                  alt=""
                  className="w-8 h-7 md:w-[36.386px] md:h-[32px]"
                />
                <p className="font-heading font-bold text-[#3061ae] text-lg md:text-xl">
                  A Simple, Transparent
                </p>
              </div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black leading-tight mb-4 md:mb-6 text-left">
                <span className="block">Atomprop Smart Construction-Stage</span>
                <span className="block">Pricing Model</span>
              </h2>
              <p className="font-body text-[rgba(24,35,40,0.8)] text-sm md:text-base leading-relaxed mb-0 text-left" style={{ lineHeight: '1.6', fontWeight: 400 }}>
                At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones.
              </p>
              <p className="font-body text-[rgba(24,35,40,0.8)] text-sm md:text-base leading-relaxed text-left" style={{ lineHeight: '1.6', fontWeight: 400 }}>
                A new round only begins once the previous round&apos;s milestones are fully completed ensuring developer accountability and giving you complete confidence in project progress.
              </p>
            </div>

            {/* Right - Testimonial Card */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[566px]">
                {/* Glow effect - positioned to avoid lower left */}
                <div
                  className="absolute -top-4 -right-4 md:-top-8 md:-right-8 rounded-lg blur-2xl opacity-50"
                  style={{
                    width: '70%',
                    height: '60%',
                    top: '-5%',
                    right: '-5%',
                    background: 'conic-gradient(from 180deg at 50% 50%, #0B071B 0deg, #8D00FB 76.88deg, #91AFFF 120deg, #9733FC 161.25deg, #825BFF 198.75deg, #6FE6BB 236.25deg, #9DEDFF 260.62deg, #0B071B 360deg)'
                  }}
                />

                {/* Gradient shadow at bottom center - positioned to avoid lower left */}
                <div
                  className="absolute bottom-0 rounded-lg blur-3xl opacity-50"
                  style={{
                    width: '50%',
                    height: '45%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(35%)',
                    background: 'conic-gradient(from 180deg at 50% 50%, #0B071B 0deg, #8D00FB 76.88deg, #91AFFF 120deg, #9733FC 161.25deg, #825BFF 198.75deg, #6FE6BB 236.25deg, #9DEDFF 260.62deg, #0B071B 360deg)'
                  }}
                />

                <div
                  className="relative w-full"
                  style={{
                    aspectRatio: '566/343',
                    borderRadius: '10px',
                    border: '5px solid #FFF',
                    background: 'linear-gradient(180deg, #130F23 0%, #0B071B 65.625%)',
                    padding: '15px md:20px'
                  }}
                >
                  {/* Inner gradient content area */}
                  <div
                    className="relative w-full h-full p-4 md:p-6"
                    style={{
                      borderRadius: '5px',
                      border: '20px solid #000',
                      background: 'linear-gradient(90deg, #325EAE 0.12%, #853293 99.88%)'
                    }}
                  >
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-white/50 mb-2 md:mb-4" />
                    <p className="font-body text-white text-sm md:text-base leading-relaxed mb-2 md:mb-4 capitalize">
                      At Atomprop, Our Mission Is To Democratize Real Estate Through Technology.
                      <br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>
                      We Believe Everyone Deserves Access To Secure, Transparent, And Rewarding Property Investment.
                    </p>
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-white/50 rotate-180 ml-auto" />

                    <div className="flex items-center gap-2 md:gap-3 absolute bottom-4 md:bottom-6 left-4 md:left-6">
                      <div
                        className="rounded-full bg-[#D9D9D9] w-8 h-8 md:w-[39px] md:h-[39px] flex-shrink-0"
                      />
                      <div>
                        <p className="font-heading font-bold text-white text-sm md:text-[16.17px] capitalize">Faizan Faiz</p>
                        <p className="font-heading text-white text-xs md:text-[14.17px] capitalize">Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-8 md:py-10 bg-[#f5f5f5]">
        <div className="container-main">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36.386" height="32" viewBox="0 0 37 32" fill="none" className="w-8 h-7 md:w-[36.386px] md:h-[32px]">
                <path d="M21.2127 3.22763C20.1234 1.4451 17.7957 0.88287 16.0138 1.97184C14.2319 3.06082 13.6704 5.38863 14.7598 7.17115L27.9608 28.7725C29.0502 30.5551 31.3778 31.1173 33.1597 30.0283C34.9417 28.9393 35.5031 26.6115 34.4138 24.829L21.2127 3.22763Z" fill="url(#paint0_linear_1_1430)" />
                <path d="M21.3102 25.1488C21.0996 24.7226 20.8484 24.3117 20.5998 23.9058L15.0339 14.816C14.5721 14.055 14.0952 13.2939 13.4102 12.7231C12.6496 12.1359 11.7088 11.8309 10.7483 11.8601C9.78786 11.8892 8.86727 12.2507 8.14363 12.8829C7.67428 13.3505 7.26829 13.8776 6.93606 14.4507C6.31705 15.4333 5.72511 16.4337 5.16023 17.4519C4.14546 19.3165 3.51885 21.1887 4.14546 23.2868C4.40664 24.1679 4.84031 24.9883 5.42128 25.7003C6.00225 26.4124 6.71894 27.0019 7.52969 27.4346L7.5779 27.46C9.01378 28.1881 10.6577 28.3834 12.1443 28.9999C14.0318 29.7787 15.7391 31.2501 17.7813 31.2425C18.4523 31.2359 19.1117 31.067 19.7032 30.7502C20.2947 30.4335 20.8008 29.9783 21.1782 29.4235C21.7484 28.5559 21.9628 27.5021 21.777 26.4807C21.6834 26.0174 21.5263 25.5692 21.3102 25.1488Z" fill="url(#paint1_linear_1_1430)" />
                <path d="M2.45073 22.0059C1.79621 23.0037 1.19243 24.0303 0.639381 25.0857C0.162443 25.9939 -0.12169 26.8843 0.0508196 27.9168C0.219847 28.9393 0.774944 29.8578 1.60154 30.4828C2.42814 31.1078 3.46315 31.3917 4.49294 31.2757C5.98718 31.1057 7.24802 30.1366 8.6357 29.5633C7.002 28.9739 5.53713 27.9942 4.36863 26.7093C3.19872 25.4142 2.52004 23.7498 2.45073 22.0059Z" fill="url(#paint2_linear_1_1430)" />
                <defs>
                  <linearGradient id="paint0_linear_1_1430" x1="19.782" y1="-7.44527" x2="27.035" y2="27.9623" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CCE0F4" />
                    <stop offset="0.18" stopColor="#7AB0DB" />
                    <stop offset="0.35" stopColor="#2F83C3" />
                    <stop offset="0.43" stopColor="#1172BA" />
                    <stop offset="0.62" stopColor="#4555A8" />
                    <stop offset="0.79" stopColor="#6F3E9A" />
                    <stop offset="0.92" stopColor="#892F91" />
                    <stop offset="1" stopColor="#932A8E" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_1430" x1="6.8701" y1="-4.80186" x2="14.1256" y2="30.6083" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CCE0F4" />
                    <stop offset="0.18" stopColor="#7AB0DB" />
                    <stop offset="0.35" stopColor="#2F83C3" />
                    <stop offset="0.43" stopColor="#1172BA" />
                    <stop offset="0.62" stopColor="#4555A8" />
                    <stop offset="0.79" stopColor="#6F3E9A" />
                    <stop offset="0.92" stopColor="#892F91" />
                    <stop offset="1" stopColor="#932A8E" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_1_1430" x1="-2.15121" y1="-2.95221" x2="5.10434" y2="32.4554" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CCE0F4" />
                    <stop offset="0.18" stopColor="#7AB0DB" />
                    <stop offset="0.35" stopColor="#2F83C3" />
                    <stop offset="0.43" stopColor="#1172BA" />
                    <stop offset="0.62" stopColor="#4555A8" />
                    <stop offset="0.79" stopColor="#6F3E9A" />
                    <stop offset="0.92" stopColor="#892F91" />
                    <stop offset="1" stopColor="#932A8E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-4">
              Discover Secure, Fractional<br className="hidden sm:block" /> Real Estate Opportunities
            </h2>
            <p className="font-body text-[rgba(24,35,40,0.8)] text-sm md:text-base max-w-[976px] mx-auto leading-relaxed px-4">
              Browse a curated selection of premium residential and commercial properties. Every listing includes full documentation, milestone tracking, and token-based pricing.
            </p>
          </div>

          {/* Property Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[property1, property2, property3].map((img, i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
                  <img
                    src={img}
                    alt={`Property ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/40 transition">
                    <HeartIcon className="w-4 h-4 text-white" />
                  </button>
                  {/* Atomprop Mark with white background */}
                  <div
                    className="absolute top-[10px] left-[10px] rounded-full bg-white flex items-center justify-center"
                    style={{ width: '25px', height: '25px' }}
                  >
                    <img
                      src={groupIcon}
                      alt=""
                      className="w-4 h-3.5"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-black tracking-tight">Hill States</h3>
                  <p className="font-body text-sm md:text-base text-black/80">Bedroom Apartment in Executive</p>
                  <Link href="/properties-preview">
                    <button className="mt-4 flex items-center justify-center gap-2 text-black font-body mx-auto group/btn text-sm md:text-base">
                      Start Investing
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/properties-preview" className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm md:text-base px-6 md:px-8 py-2 md:py-3 inline-block">
              See Available Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Tokenization Section */}
      <section className="pt-8 md:pt-10 pb-4 bg-[#f5f5f5]">
        <div className="container-main">
          <div className="bg-[#181818] border-2 border-white rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={groupIcon}
                    alt=""
                    className="w-6 h-5 md:w-7 md:h-6"
                  />
                  <p className="font-heading font-bold text-xl md:text-2xl text-white">What Is A Token?</p>
                </div>
                <div className="mb-6">
                  <p className="font-body text-white/90 text-sm md:text-base leading-relaxed mb-4 capitalize">
                    A Token Is A Digital Unit Of Ownership Recorded On The Blockchain. Each Token Represents A Verified Share Of A Real Estate Asset.
                  </p>
                  <p className="font-body text-white/90 text-sm md:text-base leading-relaxed capitalize">
                    For Example, A Property Can Be Divided Into Hundreds Or Thousands Of Tokens, With Each Token Reflecting A Fractional Portion Of The Total Value. If You Buy More Tokens, You Own A Larger Share — Making Real Estate Investment Flexible, Transparent, And Accessible To Everyone.
                  </p>
                </div>
                <Link href="/signup">
                  <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#912d90] text-sm md:text-base px-6 md:px-8 py-2 md:py-3">
                    Begin Your Journey
                  </button>
                </Link>
              </div>
              <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8">
                {/* Blue Business Interface Card with gradient border */}
                <div
                  className="flex flex-col justify-center items-center relative w-full max-w-[432px]"
                  style={{
                    aspectRatio: '432/438',
                    padding: '20px 30px',
                    borderRadius: '10px',
                    background: '#2268B3',
                    position: 'relative'
                  }}
                >
                  {/* Gradient border overlay */}
                  <div
                    className="absolute inset-0 rounded-[10px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%)',
                      padding: '3px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  />
                  <img
                    src="/images/businessman-interface.png"
                    alt="Business Interface"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="pt-4 pb-8 md:pb-10 bg-[#f5f5f5]">
        <div className="container-main text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="36.386" height="32" viewBox="0 0 37 32" fill="none" className="w-8 h-7 md:w-[36.386px] md:h-[32px]">
              <path d="M21.2127 3.22763C20.1234 1.4451 17.7957 0.88287 16.0138 1.97184C14.2319 3.06082 13.6704 5.38863 14.7598 7.17115L27.9608 28.7725C29.0502 30.5551 31.3778 31.1173 33.1597 30.0283C34.9417 28.9393 35.5031 26.6115 34.4138 24.829L21.2127 3.22763Z" fill="url(#paint0_linear_1_1430_2)" />
              <path d="M21.3102 25.1488C21.0996 24.7226 20.8484 24.3117 20.5998 23.9058L15.0339 14.816C14.5721 14.055 14.0952 13.2939 13.4102 12.7231C12.6496 12.1359 11.7088 11.8309 10.7483 11.8601C9.78786 11.8892 8.86727 12.2507 8.14363 12.8829C7.67428 13.3505 7.26829 13.8776 6.93606 14.4507C6.31705 15.4333 5.72511 16.4337 5.16023 17.4519C4.14546 19.3165 3.51885 21.1887 4.14546 23.2868C4.40664 24.1679 4.84031 24.9883 5.42128 25.7003C6.00225 26.4124 6.71894 27.0019 7.52969 27.4346L7.5779 27.46C9.01378 28.1881 10.6577 28.3834 12.1443 28.9999C14.0318 29.7787 15.7391 31.2501 17.7813 31.2425C18.4523 31.2359 19.1117 31.067 19.7032 30.7502C20.2947 30.4335 20.8008 29.9783 21.1782 29.4235C21.7484 28.5559 21.9628 27.5021 21.777 26.4807C21.6834 26.0174 21.5263 25.5692 21.3102 25.1488Z" fill="url(#paint1_linear_1_1430_2)" />
              <path d="M2.45073 22.0059C1.79621 23.0037 1.19243 24.0303 0.639381 25.0857C0.162443 25.9939 -0.12169 26.8843 0.0508196 27.9168C0.219847 28.9393 0.774944 29.8578 1.60154 30.4828C2.42814 31.1078 3.46315 31.3917 4.49294 31.2757C5.98718 31.1057 7.24802 30.1366 8.6357 29.5633C7.002 28.9739 5.53713 27.9942 4.36863 26.7093C3.19872 25.4142 2.52004 23.7498 2.45073 22.0059Z" fill="url(#paint2_linear_1_1430_2)" />
              <defs>
                <linearGradient id="paint0_linear_1_1430_2" x1="19.782" y1="-7.44527" x2="27.035" y2="27.9623" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CCE0F4" />
                  <stop offset="0.18" stopColor="#7AB0DB" />
                  <stop offset="0.35" stopColor="#2F83C3" />
                  <stop offset="0.43" stopColor="#1172BA" />
                  <stop offset="0.62" stopColor="#4555A8" />
                  <stop offset="0.79" stopColor="#6F3E9A" />
                  <stop offset="0.92" stopColor="#892F91" />
                  <stop offset="1" stopColor="#932A8E" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_1430_2" x1="6.8701" y1="-4.80186" x2="14.1256" y2="30.6083" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CCE0F4" />
                  <stop offset="0.18" stopColor="#7AB0DB" />
                  <stop offset="0.35" stopColor="#2F83C3" />
                  <stop offset="0.43" stopColor="#1172BA" />
                  <stop offset="0.62" stopColor="#4555A8" />
                  <stop offset="0.79" stopColor="#6F3E9A" />
                  <stop offset="0.92" stopColor="#892F91" />
                  <stop offset="1" stopColor="#932A8E" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_1430_2" x1="-2.15121" y1="-2.95221" x2="5.10434" y2="32.4554" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CCE0F4" />
                  <stop offset="0.18" stopColor="#7AB0DB" />
                  <stop offset="0.35" stopColor="#2F83C3" />
                  <stop offset="0.43" stopColor="#1172BA" />
                  <stop offset="0.62" stopColor="#4555A8" />
                  <stop offset="0.79" stopColor="#6F3E9A" />
                  <stop offset="0.92" stopColor="#892F91" />
                  <stop offset="1" stopColor="#932A8E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="font-heading font-bold text-[#355eac] text-lg md:text-xl lg:text-2xl mb-2">
            A Simple, Transparent Investing Experience
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-8 md:mb-12 lg:mb-16">
            How Atomprop Works
          </h2>

          {/* Process Steps Visual - Wave Flow */}
          <div
            className="relative mx-auto mb-8 md:mb-12 lg:mb-16 overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '100%',
              minHeight: '200px'
            }}
          >
            {/* Wave Flow Container */}
            <div className="relative w-full flex items-center justify-center gap-0 overflow-hidden" style={{ height: '260px', width: '100%' }}>
              <div className="flex items-center justify-center gap-0 w-full" style={{
                transform: 'scale(0.75)',
                transformOrigin: 'center',
                maxWidth: '100%'
              }}>
                {/* Element 1 - Blue Semi-circle (Down) */}
                <div className="relative flex-shrink-0 self-end" style={{ width: '313.758px', height: '203.748px', marginRight: '-2px', transform: 'translateY(60px)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="313.758" height="203.748" viewBox="0 0 314 206" fill="none" className="absolute bottom-0 left-0">
                    <path d="M152.967 205.201C112.546 205.158 73.781 189.141 45.1259 160.644C16.4708 132.146 0.249766 93.4801 0 53.0765C0 49.6922 0 56.5239 0 0H313.947C308.476 16.8858 305.798 34.5508 306.019 52.2988C305.969 92.8502 289.825 131.725 261.131 160.392C232.436 189.058 193.536 205.173 152.967 205.201Z" fill="#345EAD" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
                    <p className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-tight mb-4 whitespace-pre-line">
                      {`Browse tokenized `}
                      {`real estate`}
                    </p>
                    <div className="absolute bottom-8">
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#345EAD' }}>
                        <img src={rightArrowUp} alt="" className="w-7 h-7 md:w-9 md:h-9" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Element 2 - Purple Semi-circle (Up) */}
                <div className="relative flex-shrink-0 self-start" style={{ width: '321.602px', height: '202.047px', marginLeft: '-2px', marginRight: '-2px', transform: 'translateY(-60px)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="321.602" height="202.047" viewBox="0 0 322 203" fill="none" className="absolute top-0 left-0">
                    <path d="M0 202.047C5.4597 185.157 8.15808 167.497 7.99115 149.748C8.82089 109.816 25.2471 71.7932 53.7576 43.8095C82.2681 15.8258 120.6 0.10209 160.557 0.000495382C200.515 -0.101099 238.926 15.4274 267.579 43.2658C296.231 71.1042 312.851 109.043 313.884 148.97C313.358 166.976 315.969 184.936 321.602 202.047H0Z" fill="#7A1F75" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 pt-16 z-10">
                    <p className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-tight mb-4 whitespace-pre-line">
                      {`Purchase fractional `}
                      {`tokens`}
                    </p>
                    <div className="absolute top-8">
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#932A8E' }}>
                        <img src={rightArrowUp} alt="" className="w-7 h-7 md:w-9 md:h-9" style={{ transform: 'rotate(180deg)' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Element 3 - Blue Semi-circle (Down) */}
                <div className="relative flex-shrink-0 self-end" style={{ width: '322px', height: '206px', marginLeft: '-2px', marginRight: '-2px', transform: 'translateY(60px)' }}>
                  <p className="absolute -top-20 md:-top-24 left-1/2 -translate-x-1/2 font-body text-xs sm:text-sm md:text-base lg:text-[18px] text-[rgba(0,0,0,0.8)] text-center capitalize w-[90%] max-w-[350px] leading-[1.8] z-20">
                    Explore verified property projects with transparent details and construction progress.
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="322" height="206" viewBox="0 0 322 206" fill="none" className="absolute bottom-0 left-0">
                    <path d="M160.685 205.201C120.229 205.157 81.4336 189.115 52.7698 160.578C24.1059 132.04 7.90225 93.3257 7.69674 52.8874C8.21477 34.9457 5.61046 17.0505 0 0H321.56C316.023 16.8703 313.343 34.5463 313.632 52.2988C313.587 92.8337 297.459 131.696 268.787 160.361C240.114 189.025 201.237 205.151 160.685 205.201Z" fill="#345EAD" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
                    <p className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-tight mb-4 whitespace-pre-line">
                      {`Browse tokenized `}
                      {`real estate`}
                    </p>
                    <div className="absolute bottom-8">
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#345EAD' }}>
                        <img src={rightArrowUp} alt="" className="w-7 h-7 md:w-9 md:h-9" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Element 4 - Purple Semi-circle (Up) */}
                <div className="relative flex-shrink-0 self-start" style={{ width: '321.602px', height: '202.047px', marginLeft: '-2px', marginRight: '-2px', transform: 'translateY(-60px)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="321.602" height="202.047" viewBox="0 0 322 203" fill="none" className="absolute top-0 left-0">
                    <path d="M0 202.047C5.4597 185.157 8.15808 167.497 7.99115 149.748C8.82089 109.816 25.2471 71.7932 53.7576 43.8095C82.2681 15.8258 120.6 0.10209 160.557 0.000495382C200.515 -0.101099 238.926 15.4274 267.579 43.2658C296.231 71.1042 312.851 109.043 313.884 148.97C313.358 166.976 315.969 184.936 321.602 202.047H0Z" fill="#7A1F75" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 pt-16 z-10">
                    <p className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-tight mb-4 whitespace-pre-line">
                      {`Purchase fractional `}
                      {`tokens`}
                    </p>
                    <div className="absolute top-8">
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#932A8E' }}>
                        <img src={rightArrowUp} alt="" className="w-7 h-7 md:w-9 md:h-9" style={{ transform: 'rotate(180deg)' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Element 5 - Blue Semi-circle (Down) */}
                <div className="relative flex-shrink-0 self-end" style={{ width: '314px', height: '204px', marginLeft: '-2px', transform: 'translateY(60px)' }}>
                  <p className="absolute -top-20 md:-top-24 left-1/2 -translate-x-1/2 font-body text-xs sm:text-sm md:text-base lg:text-[18px] text-[rgba(0,0,0,0.8)] text-center capitalize w-[90%] max-w-[350px] leading-[1.8] z-20">
                    Explore verified property projects with transparent details and construction progress.
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="314" height="204" viewBox="0 0 314 204" fill="none" className="absolute bottom-0 left-0">
                    <path d="M313.758 0H0C5.60838 17.051 8.21257 34.9458 7.69668 52.8874C8.23988 93.1352 24.6362 131.546 53.329 159.788C82.0218 188.03 120.697 203.825 160.966 203.748C201.234 203.67 239.848 187.726 268.432 159.374C297.016 131.022 313.264 92.5484 313.653 52.2988C313.653 52.2988 313.758 49.5241 313.758 0Z" fill="#345EAD" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
                    <p className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-tight mb-4 whitespace-pre-line">
                      {`Browse tokenized `}
                      {`real estate`}
                    </p>
                    <div className="absolute bottom-8">
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#345EAD' }}>
                        <img src={rightArrowUp} alt="" className="w-7 h-7 md:w-9 md:h-9" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-8 md:py-10 bg-[#181818] relative overflow-hidden">
        {/* Gradient Background Element - Figma node 1-1281: Ellipse 2869 */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '582px',
            height: '582px',
            borderRadius: '582px',
            background: '#2C64B1',
            filter: 'blur(190px)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.6
          }}
          data-node-id="1-1281"
        />
        <div className="container-main relative z-10">
          {/* Circular Process Design */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12 lg:mb-16">
            {/* Left Side - 3 Steps */}
            <div className="lg:w-1/3 flex flex-col gap-6 md:gap-8">
              <div className="text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                  Property Sourcing
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-relaxed capitalize">
                  We Identify And Select High-Potential Real Estate Projects
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                  Property Funding
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-relaxed capitalize">
                  Verified Properties Are Opened For Fractional Investment.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                  Asset Tokenization
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-relaxed capitalize">
                  Each Property Is Converted Into Secure Digital Ownership Tokens.
                </p>
              </div>
            </div>

            {/* Center - Circular Logo with Segmented Ring - Exact Figma Design */}
            <div className="relative flex-shrink-0 w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px]">
              {/* Segmented Ring - 6 segments matching Figma exactly */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                {/* Ring specifications: outer radius 176px, inner radius 156px (20px width), center at (200, 200) */}
                {/* Segments: 58 degrees each with 2-degree gaps between them */}
                <g>
                  {/* Segment 1 - Top-right: Deep Purple #932A8F (0-58 degrees) */}
                  <path
                    d={createRingSegment(0, 58, 176, 156, 200, 200)}
                    fill="#932A8F"
                  />
                  {/* Segment 2 - Mid-right: Purple-Blue #67439D (60-118 degrees) */}
                  <path
                    d={createRingSegment(60, 118, 176, 156, 200, 200)}
                    fill="#67439D"
                  />
                  {/* Segment 3 - Bottom-right: Dark Blue #554CA3 (120-178 degrees) */}
                  <path
                    d={createRingSegment(120, 178, 176, 156, 200, 200)}
                    fill="#554CA3"
                  />
                  {/* Segment 4 - Bottom-left: Blue #4568B1 (180-238 degrees) */}
                  <path
                    d={createRingSegment(180, 238, 176, 156, 200, 200)}
                    fill="#4568B1"
                  />
                  {/* Segment 5 - Mid-left: Vibrant Blue #2B6EB6 (240-298 degrees) */}
                  <path
                    d={createRingSegment(240, 298, 176, 156, 200, 200)}
                    fill="#2B6EB6"
                  />
                  {/* Segment 6 - Top-left: Light Blue with opacity #6D98D0 (300-358 degrees) */}
                  <path
                    d={createRingSegment(300, 358, 176, 156, 200, 200)}
                    fill="#6D98D0"
                    opacity="0.698"
                  />
                </g>
              </svg>

              {/* White Circle Background - matching Figma exactly */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  className="bg-[#F9F9F9] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    width: '312.4656928945649px',
                    height: '312.46560134183204px',
                    maxWidth: '78%',
                    maxHeight: '78%'
                  }}
                >
                  <img src={atompropLogo} alt="Atomprop" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                </div>
              </div>
            </div>

            {/* Right Side - 3 Steps */}
            <div className="lg:w-1/3 flex flex-col gap-6 md:gap-8">
              <div className="text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                  Property Management
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-relaxed capitalize">
                  We Oversee Project Progress And Ensure Transparent Updates.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                  Dividend Distribution
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-relaxed capitalize">
                  Returns Are Shared Directly With Investors Through The Platform.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                  Exit Strategy
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-relaxed capitalize">
                  Sell Your Tokens Anytime Or Exit At Project Completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying, Selling & Trading Section */}
      <section className="py-8 md:py-10 bg-[#f5f5f5]">
        <div className="container-main">
          <p className="font-heading font-bold text-[#3061ae] text-lg md:text-xl mb-2">
            A Simple, Transparent Investing Experience
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-8 md:mb-12">
            Buying, Selling & Trading on Atomprop
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Buying Card */}
            <div className="card-dark p-6 md:p-8 text-white relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
              <img
                src={group1261156731Image}
                alt="Buying Icon"
                className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6"
              />
              <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">Buying</h3>
              <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                Start investing in real estate with just a few taps. Browse verified property projects, view their construction stages, and purchase fractional tokens backed by real assets.
              </p>
            </div>

            {/* Selling Card */}
            <div className="card-dark p-6 md:p-8 text-white relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition" />
              <img
                src={contract1Image}
                alt="Selling Icon"
                className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6"
              />
              <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">Selling</h3>
              <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                Need to exit your investment? Sell your tokens anytime. Atomprop upcoming secondary marketplace lets you list your tokens at your preferred price and connect with active buyers.
              </p>
            </div>

            {/* Trading Card */}
            <div className="card-dark p-6 md:p-8 text-white relative overflow-hidden group sm:col-span-2 md:col-span-1">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
              <img
                src={forex1Image}
                alt="Trading Icon"
                className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6"
              />
              <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">Trading</h3>
              <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                Real estate is now a liquid digital asset. With Atomprop, you can trade property tokens just like stocks — quickly, securely, and with market-driven pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-10 bg-[#0c091d]" style={{ position: 'relative', zIndex: 5 }}>
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12 lg:mb-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Learn More About Investing<br className="hidden sm:block" /> With Atomprop
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="font-body text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Learn how Atomprop works, how tokenized real estate benefits you, and what you need to begin.
                These FAQs cover everything from starting your first investment to managing your portfolio.
              </p>
              <div className="text-left">
                <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#902b8f] text-sm md:text-base px-6 md:px-8 py-2 md:py-3">
                  Discover More
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/20 pb-4 md:pb-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white pr-4">
                    {i + 1}. {faq.question}
                  </span>
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-white flex items-center justify-center transition-all flex-shrink-0 ${openFaq === i ? 'bg-[#912d90] rotate-45' : 'bg-black'}`}>
                    <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform ${openFaq === i ? 'rotate-[-45deg]' : ''}`} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="mt-4 pl-0 md:pl-8">
                    <p className="font-body text-white/80 text-sm md:text-base leading-relaxed max-w-[1000px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section - Dark Dashboard Container - Figma node 1:985 */}
      <section
        className="py-8 md:py-10 bg-[#0c091d] relative pb-0"
        style={{
          position: 'relative',
          zIndex: 5, // Lower z-index to be behind PNG
          overflow: 'visible', // Allow content to flow freely
          paddingTop: '60px' // Slightly reduced padding
        }}
        data-node-id="1-985"
      >
        <div className="container-main text-center relative" style={{ zIndex: 5 }}>
          <p className="font-heading font text-white text-lg md:text-xl mb-1 px-4">
            Everything You Need to Grow Your Property Portfolio — Digitally
          </p>
          <h2 className="font-heading font text-2xl sm:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
            Platform Features
          </h2>

          {/* Portfolio Dashboard Section - Figma Group 1:1065 with all children - Pixel Perfect */}
          <div
            className="relative mb-8 md:mb-12 lg:mb-16 rounded-[68.481px] mx-auto"
            data-node-id="1:1065"
            style={{
              width: '1438px',
              maxWidth: '100%',
              height: 'auto', // Allow height to grow naturally
              minHeight: '835px',
              position: 'relative',
              marginTop: '-50px', // Further reduced to negative margin to pull closer to header
              marginBottom: '-500px', // Increased negative margin for more overlap
              paddingBottom: '1200px', // Extended padding to allow PNG to extend fully into white section
              // Border removed from here to separate it for better positioning
              boxSizing: 'border-box',
              zIndex: 300, // Very high z-index to be on front of white section
              overflow: 'visible' // Allow content to flow freely
            }}
          >
            {/* Gradient Blur Background - Figma node 1:1066 (Rectangle 84) - Pixel Perfect */}
            <div
              className="absolute blur-[35px] filter h-[690.162px] left-[calc(55%-1.81px)] top-[calc(50%-150px)] translate-x-[-50%] translate-y-[-50%] w-[1090.38px] pointer-events-none"
              data-node-id="1:1066"
              style={{
                background: 'conic-gradient(from 90deg, rgba(11, 7, 27, 1) 0%, rgba(27, 6, 55, 1) 2.6693%, rgba(43, 5, 83, 1) 5.3385%, rgba(60, 4, 111, 1) 8.0078%, rgba(76, 4, 139, 1) 10.677%, rgba(108, 2, 195, 1) 16.016%, rgba(141, 0, 251, 1) 21.354%, rgba(141, 11, 251, 1) 22.103%, rgba(141, 22, 252, 1) 22.852%, rgba(142, 44, 252, 1) 24.349%, rgba(143, 88, 253, 1) 27.344%, rgba(144, 132, 254, 1) 30.339%, rgba(144, 175, 255, 1) 33.333%, rgba(148, 113, 254, 1) 39.063%, rgba(150, 82, 253, 1) 41.927%, rgba(151, 51, 252, 1) 44.792%, rgba(130, 91, 255, 1) 55.208%, rgba(126, 126, 238, 1) 57.812%, rgba(121, 160, 221, 1) 60.417%, rgba(111, 229, 187, 1) 65.625%, rgba(157, 237, 255, 1) 72.396%, rgba(121, 180, 198, 1) 79.297%, rgba(102, 151, 170, 1) 82.747%, rgba(84, 122, 141, 1) 86.198%, rgba(66, 93, 113, 1) 89.648%, rgba(48, 65, 84, 1) 93.099%, rgba(29, 36, 56, 1) 96.549%, rgba(20, 21, 41, 1) 98.275%, rgba(11, 7, 27, 1) 100%)',
                opacity: 0.8999999761581421,
                boxSizing: 'border-box',
                zIndex: 1
              }}
            />

            {/* Custom White Border Frame - Positioned to start from the Portfolio PNG top (approx 130px down) */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '90px', // Aligned with the top of text/image content
                left: 160,
                right: 160,
                height: '250px', // Limit height to cover only the gradient/upside portion
                borderTop: '15px solid white',
                borderLeft: '15px solid white',
                borderRight: '15px solid white',
                borderTopLeftRadius: '68.481px',
                borderTopRightRadius: '68.481px',
                zIndex: 250,
              }}
            />

            {/* Subtract Container - Figma node 1:1067 - Pixel Perfect */}
            <div
              className="absolute h-[943.176px] left-[calc(50%+0.3px)] top-[calc(50%-50px)] translate-x-[-50%] translate-y-[-50%] w-[1133.057px]"
              data-name="Subtract"
              data-node-id="1:1067"
              style={{
                maxWidth: 'calc(100% - 40px)',
                maxHeight: 'none', // Remove height restriction to show full image
                minHeight: '943.176px',
                zIndex: 250, // Very high z-index to be above white section
                boxSizing: 'border-box',
                pointerEvents: 'auto',
                overflow: 'visible' // Allow image to extend beyond container
              }}
            >
              {/* Inner Subtract Container - Figma node I1:1067;2:2485 */}
              <div
                className="absolute inset-[1.32%_1.1%]"
                data-name="Subtract"
                data-node-id="I1:1067;2:2485"
                style={{
                  zIndex: 251, // Ensure image is on top of white section
                  overflow: 'visible' // Allow image to extend beyond container
                }}
              >
                {/* Dashboard Image - Figma node 1:1071 with exact positioning - Pixel Perfect */}
                <div
                  className="relative size-full"
                  data-name="ChatGPT Image Nov 25, 2025, 10_53_43 AM 1"
                  data-node-id="1:1071"
                  style={{
                    zIndex: 252, // Highest z-index for the image to be above white section
                    overflow: 'visible' // Allow image to extend beyond container
                  }}
                >
                  <div className="absolute inset-0 overflow-visible pointer-events-none" style={{ zIndex: 253 }}>
                    <img
                      alt=""
                      className="absolute h-[170%] left-[-13.81%] max-w-none top-[-25%] w-[126.92%]"
                      src={portfolioDashboardNewImage}
                      style={{
                        zIndex: 254,
                        position: 'relative',
                        objectFit: 'contain' // Ensure full image is visible
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Dashboard Heading - Figma node 1:1068 - Pixel Perfect */}
            <p
              className="absolute font-['Space_Grotesk',sans-serif] font-bold leading-[normal] left-1/2 text-[40px] text-center text-nowrap text-white top-[130px] translate-x-[-50%] whitespace-pre"
              data-node-id="1:1068"
              style={{
                zIndex: 160 // Text on top of everything
              }}
            >
              Portfolio Dashboard
            </p>

            {/* Description Text - Figma node 1:1069 - Pixel Perfect */}
            <div
              className="absolute font-['Sora:Regular',sans-serif] font-normal leading-[27px] left-1/2 text-[18px] text-center text-nowrap text-white top-[196px] translate-x-[-50%] whitespace-pre"
              data-node-id="1:1069"
              style={{
                zIndex: 160 // Text on top of everything
              }}
            >
              <p className="mb-0">Monitor your asset value, rental distributions, token holdings, and performance insights</p>
              <p>all in one place.</p>
            </div>

            {/* 3D Hedera Illustration - Figma node 1:1070 - Pixel Perfect */}
            <div
              className="absolute left-[1090px] size-[191px] top-[90px]"
              data-name="3d-illustration-hedera-2 2"
              data-node-id="1:1070"
              style={{
                zIndex: 155 // Behind the dashboard but above background
              }}
            >
              <img
                alt="Hedera 3D Illustration"
                className="absolute inset-0 max-w-none object-cover opacity-[0.57] pointer-events-none size-full"
                src={hedera3d}
                style={{
                  objectPosition: '50% 50%'
                }}
              />
            </div>

            {/* Coin Image - Positioned to the left */}
            {/* Coin Image - Positioned to the bottom left */}
            <div
              className="absolute left-[0px] top-[450px] xl:left-[20px] xl:top-[660px]"
              style={{
                zIndex: 300
              }}
            >
              <img
                src={coinImage}
                alt="Coin"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>

            {/* Callout Box 1: Secondary Market (Coming Soon) - Top Left */}
            <div
              className="absolute glass rounded-lg border border-[#912b8f] p-3 md:p-4 hidden lg:block"
              style={{
                top: '220px',
                left: '-40px',
                maxWidth: '240px',
                width: '240px',
                zIndex: 300, // Above dashboard
                background: 'rgba(145, 43, 143, 0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(145, 43, 143, 0.3)',
                pointerEvents: 'auto'
              }}
            >
              <div className="flex items-start gap-3 mb-2">
                <MarketIcon className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <h4 className="font-heading font-bold text-white text-sm md:text-base">
                  Secondary Market (Coming Soon)
                </h4>
              </div>
              <p className="font-body text-white/90 text-xs md:text-sm leading-relaxed">
                Trade your tokens with other investors and unlock liquidity at market-driven prices.
              </p>
            </div>

            {/* Callout Box 2: Secure Hedera Wallet - Top Right */}
            <div
              className="absolute glass rounded-lg border border-[#912b8f] p-3 md:p-4 hidden lg:block"
              style={{
                top: '260px',
                right: '-30px',
                maxWidth: '240px',
                width: '240px',
                zIndex: 350, // Fix: Use higher z-index to be above dashboard
                background: 'rgba(145, 43, 143, 0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(145, 43, 143, 0.3)',
                pointerEvents: 'auto'
              }}
            >
              <div className="flex items-start gap-3 mb-2">
                <Wallet className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <h4 className="font-heading font-bold text-white text-sm md:text-base">
                  Secure Hedera Wallet
                </h4>
              </div>
              <p className="font-body text-white/90 text-xs md:text-sm leading-relaxed">
                Your tokens are stored in a built-in Hedera compatible wallet designed for safety and ease.
              </p>
            </div>

            {/* Callout Box 3: Transparent Transaction History - Bottom Right */}
            <div
              className="absolute glass rounded-lg border border-[#912b8f] p-3 md:p-4 hidden lg:block"
              style={{
                bottom: '370px',
                right: '10px',
                maxWidth: '240px',
                width: '240px',
                zIndex: 350, // Fix: Use higher z-index to be above dashboard
                background: 'rgba(145, 43, 143, 0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(145, 43, 143, 0.3)',
                pointerEvents: 'auto'
              }}
            >
              <div className="flex items-start gap-3 mb-2">
                <TransactionIcon className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <h4 className="font-heading font-bold text-white text-sm md:text-base">
                  Transparent Transaction History
                </h4>
              </div>
              <p className="font-body text-white/90 text-xs md:text-sm leading-relaxed">
                Track every investment, payout, and token movement with blockchain level accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with White Background - Positioned to show lower portion of image */}
      <section
        className="bg-[#f5f5f5] relative"
        style={{
          marginTop: '-400px', // Increased negative margin for more overlap
          paddingTop: '750px', // Adjusted padding based on user feedback
          paddingBottom: '3rem',
          position: 'relative',
          zIndex: 1, // Very low z-index so portfolio PNG appears on top
          overflow: 'visible' // Allow PNG to extend into this section
        }}
      >
        <div className="container-main relative" style={{ zIndex: 1, position: 'relative', overflow: 'visible' }}>
          {/* Gradient Card Container - Figma node 1-1245 - Reduced Size */}
          <div
            className="rounded-[10px] p-3 md:p-4 lg:p-5 flex flex-col lg:flex-row items-center gap-4 md:gap-5 max-w-[900px] mx-auto"
            style={{
              border: '2px solid #FFF',
              background: 'linear-gradient(90deg, #2467B3 0.03%, #902C8F 99.97%)',
              boxShadow: '275px 523px 165px 0 rgba(0, 0, 0, 0.00), 176px 334px 151px 0 rgba(0, 0, 0, 0.01), 99px 188px 128px 0 rgba(0, 0, 0, 0.05), 44px 84px 95px 0 rgba(0, 0, 0, 0.09), 11px 21px 52px 0 rgba(0, 0, 0, 0.10)',
              position: 'relative',
              zIndex: 2 // Low z-index to stay behind PNG
            }}
            data-node-id="1-1245"
          >
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Group 427320982 - Logo/Icon */}
              <div
                className="mb-4 flex justify-center lg:justify-start"
                data-node-id="1-1259"
                style={{
                  width: '50.6px',
                  height: '44.5px'
                }}
              >
                <img
                  alt=""
                  className="block max-w-none w-full h-full"
                  src={group427320982Image}
                />
              </div>
              <p className="font-heading font-bold text-white text-sm md:text-base mb-1.5">
                Property ownership is no longer limited
              </p>
              <h2 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-white mb-2">
                Join the Future of Real Estate
              </h2>
              <p className="font-body text-white text-xs mb-3 md:mb-4">
                With Atomprop, it&apos;s simple, digital, and accessible to everyone
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Link href="/signup">
                  <button className="btn-primary bg-gradient-to-r from-[#8c2e90] to-[#2c63b0] text-white text-xs px-3 md:px-4 py-1.5 md:py-2 border-white">
                    Create Account
                  </button>
                </Link>
                <Link
                  href="/properties-preview"
                  className="rounded-[25px] p-[1px] transition-all duration-300 hover:translate-y-[-2px] border border-white block"
                  style={{
                    background: 'linear-gradient(90deg, #902B8F 0%, #2E62AF 100%)',
                    boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0px 8px 32px -1px rgba(145, 45, 144, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0px 4px 24px -1px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  <div
                    className="w-full h-full px-3 md:px-4 py-1.5 md:py-2 rounded-[25px] text-white font-body text-xs font-semibold transition-all duration-300 hover:opacity-90 bg-transparent flex items-center justify-center"
                    style={{
                      fontFamily: 'var(--font-body)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    See Available Properties
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="lg:w-1/2 w-full relative rounded-lg overflow-hidden"
              style={{
                minHeight: '300px',
                maxHeight: '400px',
                height: '100%'
              }}
              data-node-id="1-1267"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt="Floating cityscape with glowing skyscrapers and greenery"
                  className="absolute max-w-none"
                  src={floatingCityscapeImage}
                  style={{
                    height: '179.47%',
                    left: '-19.29%',
                    top: '-48.67%',
                    width: '145.51%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-black text-white" data-node-id="1-971" style={{ position: 'relative', zIndex: 5 }}>
        <div className="container-main">
          {/* Logo - Top Center */}
          <div className="flex justify-center mb-6 md:mb-8">
            <img
              src={atompropLogo}
              alt="Atomprop"
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Description Text - Centered, Two Lines */}
          <p className="font-body text-center text-white text-sm md:text-base max-w-[800px] mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            At Atomprop, Every Real Estate Project Is Divided Into Clearly Defined Construction Rounds, Each<br className="hidden sm:inline" />
            Linked To Measurable Development Milestones.
          </p>

          {/* Footer Links - Centered Horizontal Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <Link href="/about-us" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">About Us</Link>
            <Link href="/properties-preview" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">Projects</Link>
            <a href="#" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">Platform</a>
            <a href="#" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">Webinars</a>
            <a href="#" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">Careers</a>
            <a href="#" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">Blogs</a>
            <Link href="/contact-us" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">Contact Us</Link>
            <Link href="/faq" className="font-body text-white text-sm md:text-base hover:text-purple-400 transition whitespace-nowrap">FAQ</Link>
          </div>

          {/* Contact Info - Three Columns with White Icons */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 max-w-[1000px] mx-auto">
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-body text-white text-xs md:text-sm">Phone:</p>
                <p className="font-body text-white text-xs md:text-sm">+92 00000000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-body text-white text-xs md:text-sm">Email:</p>
                <p className="font-body text-white text-xs md:text-sm">support@atomprop.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center sm:justify-start sm:col-span-2 md:col-span-1">
              <Location className="w-5 h-5 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-body text-white text-xs md:text-sm">Address:</p>
                <p className="font-body text-white text-xs md:text-sm">atomprop................................</p>
              </div>
            </div>
          </div>

          {/* First Divider */}
          <div className="h-px bg-white/20 mb-6 md:mb-8 max-w-[1200px] mx-auto" />

          {/* Social Links - White Circular Outlines, Correct Order */}
          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-purple-400 transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-purple-400 transition">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-purple-400 transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-purple-400 transition">
              <LinkedIn className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Second Divider */}
          <div className="h-px bg-white/20 mb-6 md:mb-8 max-w-[1200px] mx-auto" />

          {/* Copyright */}
          <p className="font-body text-center text-white text-xs md:text-sm px-4">
            © Atomprop | Privacy Policy | Terms of Use
          </p>
        </div>
      </footer>
    </main>
  );
}