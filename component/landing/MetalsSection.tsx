"use client";
import Image from "next/image";
import { useState } from "react";

export interface MetalItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface MetalsSectionProps {
  title?: string;
  metals: MetalItem[];
  className?: string;
}

export default function MetalsSection({
  title = "Metals",
  metals,
  className = "",
}: MetalsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentMetal = metals[activeTab];

  return (
    <div className={`w-full bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Small Title - Left Top Corner */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[#0099ff] uppercase tracking-wider">
            {title}
          </h3>
        </div>

        {/* Tabs Row - Horizontal Scroll on Overflow */}
        <div className="overflow-x-auto pb-4 mb-10 scrollbar-hide">
          <div className="flex flex-wrap gap-3 pb-4 mb-10">
            {metals.map((metal, index) => (
              <button
                key={metal.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}>
                {metal.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
              {currentMetal?.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {currentMetal?.description}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
            {currentMetal?.image ? (
              <Image
                src={currentMetal.image}
                alt={currentMetal.name}
                fill
                className="object-contain p-4"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-5xl">🔧</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
