"use client";

import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden relative">
      <PageHero 
        title="How Atomprop Works"
        description="In 2020, DAO PropTech Was Founded With The Simple Mission Of Making Everyone A Part Of A Fair And Inclusive Real Estate Ecosystem."
      />

      {/* Main Content Section - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-main max-w-[1395px]">
          
          {/* Header Badge */}
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/atomprop-mark-2.svg" alt="Icon" className="w-5 h-5 object-contain" />
            <span className="text-[#2e62af] font-bold tracking-wide text-sm">A Simple, Transparent</span>
          </div>

          {/* Section 1: Developer-First Framework */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-black mb-4 leading-tight">
              A Developer-First Framework for<br />Tokenized Real Estate
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Atomprop Is Designed To Help Real Estate Developers Fund And Execute Projects Transparently And Responsibly Through Blockchain-Based Tokenization.
            </p>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mt-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Our Platform Acts As A Digital Bridge, Connecting Developers With A Broader Pool Of Retail And Accredited Investors While Documenting Every Transaction On The Blockchain.
            </p>
          </div>

          {/* Section 2: Project Onboarding */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Project Onboarding & Developer Due Diligence
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Every Project On Atomprop Begins With A Structured Onboarding Process.
            </p>
            <p className="text-black font-semibold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Developers Submit:</p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Project Details And Master Plans</li>
              <li>Legal Ownership Documents</li>
              <li>Construction Timelines And Milestones</li>
              <li>Financial Projections And Funding Needs</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Atomprop Conducts Legal, Technical, And Commercial Due Diligence To Ensure Only Credible, High-Quality Projects Are Listed On The Platform.
            </p>
          </div>

          {/* Section 3: Construction-Stage Project Structuring */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Construction-Stage Project Structuring
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Unlike Traditional Real Estate Platforms, Atomprop Structures Each Project Into Multiple Development Rounds, Based On Construction Progress.
            </p>
            <p className="text-black font-semibold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Each Round Has:</p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Clearly Defined Construction Milestones</li>
              <li>A Fixed Token Price Reflecting The Stage Of Development</li>
              <li>Capital Requirements That Scale By Milestone Completion</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Each Round Is Independently Tied To Milestone Verification Are Verified, Ensuring Developer Accountability And Investor Protection.
            </p>
          </div>

          {/* Section 4: Asset Tokenization */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Asset Tokenization
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Once Approved, The Project Is Registered On The Blockchain.
            </p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>The Total Project Value Is Converted Into Digital Property Tokens</li>
              <li>Each Token Represents A Fractional Share Of The Total Asset</li>
              <li>Tokens Are Issued On The Construction Round, Not Upfront</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              This Approach Ensures That Token Values Reflect Actual Progress And Reduces Risks From Uncontrolled Development.
            </p>
          </div>

          {/* Section 5: Investor Funding & Capital Allocation */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Investor Funding & Capital Allocation
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Investors Purchase Tokens In Each Round Corresponding To An Active Construction Round.
            </p>
            <p className="text-black font-semibold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>For Developers, This Means:</p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Funds Received Via Gradual Process</li>
              <li>Funds Are Aligned With Actual Construction Needs</li>
              <li>Clear Funding And Release Tracked On Dashboard</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Investor Funds Are Held In Escrow Or Milestone-Based Accounts With Verified Progress. Investors Track And Access Token Project Credibility.
            </p>
          </div>

          {/* Section 6: Construction Progress Tracking */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Construction Progress Tracking
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Developers Provide Regular Updates Through The Atomprop Platform, Including:
            </p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Construction Photos And Reports</li>
              <li>Milestone Completion Confirmations</li>
              <li>Third-Party Updates And Alerts Notifications</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Regular Updates Are Visible To Investors In Real-Time Via Their Dashboard, Promoting Full Transparency Throughout The Build Cycle.
            </p>
          </div>

          {/* Section 7: Revenue & Returns Distribution */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Revenue & Returns Distribution
            </h2>
            <p className="text-black font-semibold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Depending On The Project Structure:</p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Rental Income (If Applicable) Is Distributed Proportionally To Token Holders</li>
              <li>Capital Appreciation Is Reflected In Token Value At The Project Advances</li>
              <li>Developer Both From –</li>
              <li>In Broader Markets Since</li>
              <li>Native Access To Capital</li>
              <li>Transparent Project Oversight (Up-Interest Utilities)</li>
            </ul>
          </div>

          {/* Section 8: Exit & Liquidity Options */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Exit & Liquidity Options
            </h2>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Atomprop Supports Multiple Exit Pathways:
            </p>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Investors Can Sell Tokens On The Secondary Marketplace (When Available)</li>
              <li>Developers Can Buy Back Tokens From Investors Before Handover</li>
              <li>Final Asset Value Is Realized Upon Project Handover</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              The Liquidity Of Protocol Liquidity While Microing In Project Stability.
            </p>
          </div>

          {/* Section 9: Why Developers Choose Atomprop */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Why Developers Choose Atomprop
            </h2>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Proven, Milestone-Based Funding</li>
              <li>A Modern Delivery On Traditional Financing</li>
              <li>Transparent Investor Communication</li>
              <li>Trust In Performance</li>
              <li>Blockchain-Verified Ownership Records</li>
              <li>Improved Trust And Faster Capital Deployment</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Atomprop Isn&apos;t Just A Funding Platform — It&apos;s A Long-Term Development Partner Built For Modern Real-Estate Projects.
            </p>
          </div>

          {/* Section 10: Building the Future of Real Estate Together */}
          <div className="mb-8">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
              Building the Future of Real Estate Together
            </h2>
            <ul className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize space-y-1 ml-6 mb-4 list-disc" style={{ fontFamily: 'Sora, sans-serif' }}>
              <li>Atomprop Empowers Developers To Scale Responsibly While Giving Investors Confidence Through Transparency And Technology</li>
              <li>By Democratizing Access Through Digital Ownership, Im Creating A Shared, More Sustainable Real Estate Ecosystem</li>
              <li>Advocacy And Confidence</li>
            </ul>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Build With Transparency.
            </p>
            <p className="text-[rgba(24,35,40,0.80)] text-lg leading-[200%] capitalize" style={{ fontFamily: 'Sora, sans-serif' }}>
              Raise With Atomprop.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
