"use client";

interface Props {
  title: string;
  desc: string;
}
export default function GetAQuote({ title, desc }: Props) {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 md:p-12">
          {/* Left Column - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
          </div>

          {/* Right Column - Button */}
          <div className="flex-shrink-0">
            <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
