"use client";

import {
  ArrowLeft,
  ChevronDownIcon,
  HomeIcon,
  LayoutGrid,
} from "lucide-react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Tabs, TabsList, TabsTrigger } from "../components/tabs";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Link from "next/link";
import PropertyCard from "../components/PropertyCard";
import Header from "../components/Header";

const navigationTabs = [
  { id: "home", label: "Home", icon: true },
  { id: "developmental", label: "Developmental", image: "/images/properties/tab-dev.png", width: 17, height: 17 },
  { id: "mature", label: "Mature", image: "/images/properties/tab-mature.png", width: 21, height: 21 },
  { id: "upcoming", label: "Upcoming", image: "/images/properties/tab-upcoming.png", width: 17, height: 17 },
];

const propertyCards = [
  {
    id: 1,
    image: "https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png",
    title: "Golden Tulip - Tech7",
    location: "B17 Islamabad",
    type: "Two Bedroom Apartment",
    listingPrice: "PKR 60,000 per Sqft",
    spaceAvailable: "10,000 Sqft",
    forecastedRent: "15-20%",
    theme: "light",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png",
    title: "Radisson BLU",
    location: "B17 Islamabad",
    type: "Two Bedroom Apartment",
    listingPrice: "PKR 60,000 per Sqft",
    spaceAvailable: "10,000 Sqft",
    forecastedRent: "15-20%",
    theme: "dark",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png",
    title: "J7 Emporium - Tech7",
    location: "B17 Islamabad",
    type: "Two Bedroom Apartment",
    listingPrice: "PKR 60,000 per Sqft",
    spaceAvailable: "10,000 Sqft",
    forecastedRent: "15-20%",
    theme: "dark",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png",
    title: "J7 Emporium - Tech7",
    location: "B17 Islamabad",
    type: "Two Bedroom Apartment",
    listingPrice: "PKR 60,000 per Sqft",
    spaceAvailable: "10,000 Sqft",
    forecastedRent: "15-20%",
    theme: "dark",
  },
  {
    id: 5,
    image: "https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png",
    title: "J7 Emporium - Tech7",
    location: "B17 Islamabad",
    type: "Two Bedroom Apartment",
    listingPrice: "PKR 60,000 per Sqft",
    spaceAvailable: "10,000 Sqft",
    forecastedRent: "15-20%",
    theme: "dark",
  },
  {
    id: 6,
    image: "https://c.animaapp.com/mjsb9cz7Ig8TBI/img/img-5.png",
    title: "J7 Emporium - Tech7",
    location: "B17 Islamabad",
    type: "Two Bedroom Apartment",
    listingPrice: "PKR 60,000 per Sqft",
    spaceAvailable: "10,000 Sqft",
    forecastedRent: "15-20%",
    theme: "dark",
  },
];

export default function PropertiesPage() {
  return (

    <div className="min-h-screen bg-neutral-100 font-body overflow-x-hidden relative">
      {/* Header Content */}

      <Header />

      {/* Main Content Area */}
      <main className="container-main pt-24 pb-20 relative z-20">

        {/* Breadcrumb / Back */}
        <div className="flex items-center gap-5 mb-8 mt-8 animate-fade-in opacity-0 [--animation-delay:200ms]">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-[33px] h-[33px] text-black" />
          </Link>
          <h1 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-black text-[22px] tracking-[0] leading-[normal]">
            Projects-home
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <Tabs defaultValue="home" className="w-full max-w-[742px]">
            <TabsList className="w-full h-[50px] bg-white rounded-sm border border-solid border-black p-0 grid grid-cols-4">
              {navigationTabs.map((tab, index) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`h-full flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#2e62af] data-[state=active]:to-[#912d90] data-[state=active]:text-white data-[state=active]:shadow-none rounded-none ${index === 0 ? "rounded-l-sm" : ""
                    } ${index === navigationTabs.length - 1 ? "rounded-r-sm" : ""}`}
                >
                  {tab.icon && <HomeIcon className="w-[17px] h-[17px]" />}
                  {tab.image && (
                    <img
                      src={tab.image}
                      alt=""
                      width={tab.width}
                      height={tab.height}
                      className=""
                    />
                  )}
                  <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-sm sm:text-lg tracking-[0] leading-[normal]">
                    {tab.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col items-center gap-[30px] mb-[60px]">
          <div className="flex items-center gap-2 animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-black text-3xl md:text-4xl text-center tracking-[0] leading-[1.2]">
              Start Your Search Today
            </h2>
            <img
              className="w-9 h-8"
              alt="Search icon"
              src="/images/search-icon.png"
            />
          </div>

          {/* Search Filter Card */}
          <Card className="w-full shadow-lg border-none animate-fade-in opacity-0 [--animation-delay:800ms]">
            <CardContent className="p-0">
              <div className="flex flex-col">
                {/* Centered Tabs Section - As Requested */}
                <div className="w-full border-b border-gray-100 flex justify-center">
                  <Tabs defaultValue="residential" className="w-[414px]">
                    <TabsList className="w-[414px] h-14 mx-auto bg-transparent p-0 rounded-none flex">
                      <TabsTrigger
                        value="residential"
                        className="flex-1 h-full data-[state=active]:bg-[linear-gradient(90deg,rgba(34,104,180,1)_0%,rgba(144,43,143,1)_48%)] data-[state=active]:text-white rounded-none rounded-bl-[10px] text-xl font-bold font-heading"
                      >
                        Residential
                      </TabsTrigger>
                      <TabsTrigger
                        value="commercial"
                        className="flex-1 h-full data-[state=active]:bg-[#f4f4f4] data-[state=active]:text-black rounded-none rounded-br-[10px] text-xl font-bold font-heading text-black"
                      >
                        Commercial
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Filters Area */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-8 md:px-12">
                  <button className="w-full lg:w-[294px] h-[60px] flex items-center justify-between px-[20px] rounded-[30px] border border-solid border-[#cccccc] transition-colors hover:border-[#882f91] bg-white">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-black text-lg">
                      Price
                    </span>
                    <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                  </button>

                  <button className="w-full lg:w-[294px] h-[60px] flex items-center justify-between px-[20px] rounded-[30px] border border-solid border-[#cccccc] transition-colors hover:border-[#882f91] bg-white">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-black text-lg">
                      Amenities
                    </span>
                    <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                  </button>

                  {/* Price Range Slider (Static Visual) */}
                  <div className="flex-1 w-full flex flex-col gap-2 min-w-[200px]">
                    <div className="flex justify-between items-center">
                      <span className="font-body font-normal text-black text-base">
                        PKR 0
                      </span>
                      <span className="font-body font-bold text-black text-base">
                        PKR 3,000.00
                      </span>
                    </div>
                    <div className="relative h-1 bg-gray-200 rounded-full">
                      <div className="absolute left-0 w-[60%] h-full bg-[#8d2989] rounded-full" />
                      <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#8d2989] rounded-full cursor-pointer shadow-md border-2 border-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {propertyCards.map((property, index) => (
            <PropertyCard
              key={property.id}
              {...property}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-24 animate-fade-up opacity-0 [--animation-delay:1600ms]">
          <Button className="h-[50px] px-8 rounded-full shadow-xl bg-gradient-to-r from-[#2e62af] to-[#912d90] text-white font-body text-lg hover:shadow-2xl hover:scale-105 transition-all">
            See Available Properties
          </Button>
        </div>
      </main>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
