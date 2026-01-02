import { ArrowRightIcon, MapPinIcon } from "lucide-react";
import { Card, CardContent } from "./card";
import Link from "next/link";

interface PropertyProps {
  id: number;
  image: string;
  title: string;
  location: string;
  type: string;
  listingPrice: string;
  spaceAvailable: string;
  forecastedRent: string;
  theme: string;
  index?: number;
  [key: string]: unknown;
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  type,
  listingPrice,
  spaceAvailable,
  forecastedRent,
  theme,
  index = 0,
}: PropertyProps) {
  return (
    <Card
      className={`overflow-hidden shadow-xl rounded-[20px] border-none animate-fade-up opacity-0 hover:translate-y-[-8px] transition-transform duration-300`}
      style={
        {
          "--animation-delay": `${1000 + index * 100}ms`,
        } as React.CSSProperties
      }
    >
      <div className="relative h-[300px] md:h-[350px] lg:h-[441px]">
        <img
          className="w-full h-full object-cover"
          alt={title}
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

        {/* Overlays */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-1.5 border border-white/20">
          <img
            src="/images/atomprop-mark.svg"
            alt="Logo"
            className="w-full h-full object-contain brightness-0 invert"
          />
        </div>

        {/* Verified Badge (Bottom Center) */}
        <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 z-10 filter drop-shadow-md">
          <img
            src="/images/verified-check-new.svg"
            alt="Verified"
            className="w-[27px] h-[28px]"
          />
        </div>
      </div>

      <CardContent
        className={`p-8 ${theme === "light" ? "bg-white" : "bg-[#0c091d]"
          }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h3
              className={`font-heading font-bold text-2xl leading-tight ${theme === "light"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                }`}
            >
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-[#325ecc]" />
            <span className="font-body font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {location}
            </span>
          </div>

          <p
            className={`font-body text-lg ${theme === "light" ? "text-gray-900" : "text-gray-100"
              }`}
          >
            {type}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center border-b border-gray-100/10 pb-2">
              <span
                className={`font-body text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
              >
                Listing Price
              </span>
              <span
                className={`font-body font-bold text-lg ${theme === "light" ? "text-black" : "text-white"
                  }`}
              >
                {listingPrice}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/10 pb-2">
              <span
                className={`font-body text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
              >
                Space Available
              </span>
              <span
                className={`font-body font-semibold text-lg ${theme === "light" ? "text-black" : "text-white"
                  }`}
              >
                {spaceAvailable}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`font-body text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
              >
                Forecasted Rent
              </span>
              <span
                className={`font-body font-semibold text-lg ${theme === "light" ? "text-black" : "text-white"
                  }`}
              >
                {forecastedRent}
              </span>
            </div>
          </div>

          <button className="flex items-center justify-center gap-3 mt-6 mx-auto group">
            <span
              className={`font-body font-bold text-lg transition-colors group-hover:text-purple-600 ${theme === "light" ? "text-black" : "text-white"
                }`}
            >
              View Details
            </span>
            <div className="w-[30px] h-[30px] rounded-full bg-[#912d90] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
