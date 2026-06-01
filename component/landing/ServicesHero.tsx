import { companyLogos } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  desc?: string;
  image?: string;
  simple?: boolean;
  bg?: string;
  text?: string;
  fade?: boolean;
  firstButton?: {
    title: string;
    route: string;
  };
  secondButton?: {
    title: string;
    route: string;
  };
}

export default function ServicesHero({
  title,
  desc,
  image,
  simple,
  bg,
  text,
  fade,
  firstButton,
  secondButton,
}: Props) {
  const isWhiteText = text === "white";
  const textColor = isWhiteText ? "text-white" : "text-[#0B1221]";
  const descColor = isWhiteText ? "text-gray-300" : "text-gray-600";
  const certificationColor = isWhiteText ? "text-gray-400" : "text-gray-500";

  return (
    <>
      {/* Hero Section - Two Columns */}
      <div
        className="w-full pt-32 pb-16 relative"
        style={{
          backgroundImage: bg ? `url('${bg}')` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Dark overlay layer - only shows when fade is true */}
        {fade && bg && (
          <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        )}
        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight mb-4`}>
                {title}
              </h1>
              <p className={`${descColor} text-lg leading-relaxed mb-6`}>
                {desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                {firstButton && (
                  <Link
                    href={firstButton.route}
                    className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                    {firstButton.title}
                  </Link>
                )}
                {secondButton && (
                  <Link
                    href={secondButton.route}
                    className={`flex items-center gap-2 font-semibold transition-colors duration-300 ${
                      isWhiteText
                        ? "text-white hover:text-[#96E92A]"
                        : "text-[#0B1221] hover:text-[#0099ff]"
                    }`}>
                    {secondButton.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {/* Certifications Text */}
              {!simple && (
                <p className={`text-sm ${certificationColor}`}>
                  Sertifikalar: ISO 9001:2015 | CTQ Denetimleri | ITAR
                </p>
              )}
            </div>

            {/* Right Column - Image and Stats */}
            <div>
              {image && (
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={image}
                      alt="Injection Molding"
                      fill
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Stats Row */}
              {!simple && image && (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div
                      className={`flex items-center justify-center gap-1 text-2xl font-bold ${textColor}`}>
                      50,000+
                    </div>
                    <p className={`text-xs ${certificationColor}`}>
                      Aylık Üretilen Parça
                    </p>
                  </div>
                  <div>
                    <div
                      className={`flex items-center justify-center gap-1 text-2xl font-bold ${textColor}`}>
                      100+
                    </div>
                    <p className={`text-xs ${certificationColor}`}>
                      Hizmet Verilen Ürün Geliştirici
                    </p>
                  </div>
                  <div>
                    <div
                      className={`flex items-center justify-center gap-1 text-2xl font-bold ${textColor}`}>
                      100+
                    </div>
                    <p className={`text-xs ${certificationColor}`}>
                      Plastic and elastomeric materials
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Companies Section - Logos with Icons */}
      {!simple && (
        <div className="w-full bg-[#F0F8FF] py-12">
          <div className="container mx-auto px-4 md:px-10 lg:px-20">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              DESTEK VERDİĞİMİZ YENİLİKÇİ ŞİRKETLER
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {companyLogos.map((company, idx) => (
                <div key={idx} className="relative w-32 h-12">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
