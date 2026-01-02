"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import { Plus } from "lucide-react";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Project Details" },
    { id: "investment", label: "Investment Details" },
    { id: "profit", label: "Profit And Capital Gains" },
    { id: "noc", label: "NOC And Approvals" },
    { id: "transaction", label: "Transactions And Taxes" },
  ];

  const faqSections = {
    projects: {
      title: "PROJECTS DETAILS",
      faqs: [
        {
          id: "p1",
          question: "What types of projects are listed on Atomprop?",
          answer: "Atomprop lists carefully vetted residential and commercial real estate projects with strong growth potential and clear development plans."
        },
        {
          id: "p2",
          question: "How are projects selected and verified?",
          answer: "All projects undergo thorough due diligence including legal verification, financial assessment, and developer background checks before listing."
        },
        {
          id: "p3",
          question: "Is project updates shared with investors?",
          answer: "Yes, investors receive regular updates on construction progress, milestones achieved, and any relevant project developments through the platform."
        },
        {
          id: "p4",
          question: "Can developers list multiple projects?",
          answer: "Yes, verified developers can list multiple projects on Atomprop after successful completion of previous projects and meeting platform requirements."
        },
      ]
    },
    investment: {
      title: "INVESTMENT DETAILS",
      faqs: [
        {
          id: "i1",
          question: "What is the minimum investment amount?",
          answer: "You can start investing by purchasing as little as one property token, making real estate accessible at a few entry points."
        },
        {
          id: "i2",
          question: "How do construction-stage rounds work?",
          answer: "Projects are divided into construction stages, with token prices adjusting based on development progress and milestone completion."
        },
        {
          id: "i3",
          question: "Can I invest in multiple projects at the same time?",
          answer: "Yes, you can diversify your portfolio by investing in multiple projects simultaneously through the Atomprop platform."
        },
        {
          id: "i4",
          question: "Is my investment backed to be a fixed period?",
          answer: "Investment periods vary by project. Some offer flexible exit options while others have defined holding periods based on project timelines."
        },
      ]
    },
    profit: {
      title: "PROFIT AND CAPITAL GAINS",
      faqs: [
        {
          id: "c1",
          question: "How do investors earn returns?",
          answer: "Returns are generated through rental income (if applicable) and capital appreciation as the project progresses."
        },
        {
          id: "c2",
          question: "When do I start earning returns?",
          answer: "Returns begin once the property generates income or upon sale of tokens at appreciated value."
        },
        {
          id: "c3",
          question: "Are returns guaranteed?",
          answer: "Returns are subject to market conditions and project performance. Past performance does not guarantee future results."
        },
        {
          id: "c4",
          question: "How is profit distributed?",
          answer: "Profits are distributed proportionally to token holders based on their ownership percentage in the project."
        },
      ]
    },
    noc: {
      title: "NOC AND APPROVAL",
      faqs: [
        {
          id: "n1",
          question: "Are projects approved by relevant authorities?",
          answer: "Yes, All listed projects must obtain required No Objection Certificates (NOCs) and regulatory approvals before onboarding."
        },
        {
          id: "n2",
          question: "Can investors view approval documents?",
          answer: "Yes, all relevant approval documents and certificates are available for investors to review on the project page."
        },
        {
          id: "n3",
          question: "What happens if a project loses approval status?",
          answer: "In rare cases of approval issues, Atomprop works with developers to resolve matters and keeps investors informed throughout the process."
        },
        {
          id: "n4",
          question: "Does Atomprop manage compliance?",
          answer: "Atomprop ensures all listed projects maintain compliance with local regulations and authority requirements."
        },
      ]
    },
    transaction: {
      title: "TRANSACTION AND TAXES",
      faqs: [
        {
          id: "t1",
          question: "How are payments processed on Atomprop?",
          answer: "Payments can be made via bank transfer, card or deposit, or approved digital channels as provided on the checkout page."
        },
        {
          id: "t2",
          question: "Are transactions recorded securely?",
          answer: "Yes, all transactions are recorded on the blockchain ensuring complete transparency and security."
        },
        {
          id: "t3",
          question: "Do I need to pay taxes on returns?",
          answer: "Tax obligations depend on your jurisdiction. We recommend consulting a tax professional for guidance on your specific situation."
        },
        {
          id: "t4",
          question: "Does Atomprop deduct taxes automatically?",
          answer: "Tax deductions vary by region and project type. Specific tax information is provided on individual project pages."
        },
      ]
    },
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden relative">
      <PageHero
        title="FAQ's"
        description="Frequently Asked Questions"
      />

      {/* Tabs Section */}
      <section className="bg-white py-8">
        <div className="container-main">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/images/atomprop-mark-2.svg" alt="Icon" className="w-5 h-5 object-contain" />
            <span className="text-[#2e62af] font-bold tracking-wide text-sm">Choose Relevant Section</span>
          </div>

          {/* Tabs with pink line underneath */}
          <div className="relative">
            <div className="flex justify-between pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className="pb-4 relative transition-colors text-center capitalize"
                  style={{
                    width: '184px',
                    color: activeTab === tab.id ? '#2e62af' : '#000',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    lineHeight: '110%',
                    letterSpacing: '-0.6px',
                  }}
                >
                  {tab.label}
                  {/* Blue underline for active tab - overlaps on pink line */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2e62af] z-10"></div>
                  )}
                </button>
              ))}
            </div>
            {/* Full width pink line - same position as blue underlines */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2e62af] to-[#912d90] z-0"></div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 bg-white">
        <div className="container-main max-w-[1200px]">
          {Object.entries(faqSections).map(([key, section]) => (
            <div key={key} id={key} className="mb-16 last:mb-0 scroll-mt-24">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-black mb-8 tracking-wide">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-[#f8f8f8] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-[#912D90] font-bold text-sm mt-0.5">
                          Q{faq.id.charAt(1)}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-[rgba(24,35,40,0.90)] text-base md:text-lg font-medium" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {faq.question}
                          </h3>
                          {openFaq === faq.id && (
                            <p className="text-[rgba(24,35,40,0.70)] text-sm md:text-base mt-3 leading-relaxed" style={{ fontFamily: 'Sora, sans-serif' }}>
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all ${openFaq === faq.id
                          ? 'bg-[#912D90]'
                          : 'bg-gradient-to-r from-[#2e62af] to-[#902b8f]'
                        }`}>
                        <Plus className={`w-5 h-5 text-white transition-transform ${openFaq === faq.id ? 'rotate-45' : ''}`} />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
