"use client";

import GetAQuote from "@/component/landing/GetAQuote";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Finishes and Coatings for CNC Machined Parts"
        desc="Evaluate standard surface finishes for CNC machined parts as well as advanced capabilities to improve durability, surface finish, and add color."
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Standard Finishes
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Choose from three standard surface finish options for CNC machined
              parts.
            </p>
          </div>

          {/* 3 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1 - Edges broken (tool marks visible) */}
            <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/finishing-options/cnc-circularflange-aluminum-brokenedge.jpg"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] text-center mb-3">
                  Edges broken (tool marks visible)
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Edges deburred with visible toolmarks.
                </p>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Materials:</span>
                    <span className="text-gray-700 font-medium">
                      Plastic, Metals
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Cost:</span>
                    <span className="text-[#96E92A] font-bold">$</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 - Edges broken and light bead blast */}
            <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/finishing-options/cnc-milling-circularflange-aluminum-beadblasted.jpg"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] text-center mb-3">
                  Edges broken and light bead blast
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Edges deburred with light bead blast.
                </p>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Materials:</span>
                    <span className="text-gray-700 font-medium">Metals</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Cost:</span>
                    <span className="text-[#96E92A] font-bold">$$</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 - Leave sharp (tool marks visible) */}
            <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/finishing-options/cnc-milling-circularflange-aluminum-sharpedge.jpg"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] text-center mb-3">
                  Leave sharp (tool marks visible)
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Edges left sharp (tool marks visible) should be handled with
                  care.
                </p>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Materials:</span>
                    <span className="text-gray-700 font-medium">Metals</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Cost:</span>
                    <span className="text-[#96E92A] font-bold">$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetAQuote
        title="CNC Machining Services for End-Use Parts"
        desc="Get high‑quality machined parts faster with our expanded automated CNC milling—parts ready in as fast as 4 days "
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Coating and Plating Options
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Choose from a variety of coating and plating options for CNC
              machined parts.
            </p>
          </div>

          {/* Anodizing Type II */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
              Anodizing Type II
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Anodize Type II Black", color: "bg-gray-800" },
                { name: "Anodize Type II Blue", color: "bg-blue-600" },
                { name: "Anodize Type II Clear", color: "bg-gray-300" },
                { name: "Anodize Type II Gold", color: "bg-amber-500" },
                { name: "Anodize Type II Red", color: "bg-red-600" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div
                    className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                    <Image
                      src="/Assets/Images/services/cnc-machining/finishing-options/A1.webp"
                      alt="OD Threads"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anodizing Type III */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
              Anodizing Type III
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Anodize Type III Black", color: "bg-gray-800" },
                { name: "Anodize Type III Blue", color: "bg-blue-600" },
                { name: "Anodize Type III Clear", color: "bg-gray-300" },
                { name: "Anodize Type III Gold", color: "bg-amber-500" },
                { name: "Anodize Type III Red", color: "bg-red-600" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div
                    className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Powder Coating */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
              Powder Coating
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Black Flat Smooth (Raven Black)",
                  color: "bg-gray-900",
                },
                {
                  name: "Black Flat Fine Textured (Black Grey RAL 7021)",
                  color: "bg-gray-700",
                },
                { name: "Black Flat Smooth", color: "bg-gray-800" },
                {
                  name: "White Gloss Smooth (Signal White RAL 9003)",
                  color: "bg-white border border-gray-200",
                },
                {
                  name: "White Gloss Smooth (Sky White)",
                  color: "bg-gray-50 border border-gray-200",
                },
                { name: "Tan Flat Smooth (Desert Tan)", color: "bg-amber-700" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div
                    className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                    {item.name.includes("White") && (
                      <span className="text-gray-300 text-2xl">●</span>
                    )}
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700 line-clamp-2">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Orange & Chromate Plating Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Safety Orange */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Safety Orange
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-32 w-full bg-orange-600 flex items-center justify-center">
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      Safety Orange
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chromate Plating */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Chromate Plating
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Type I Class 1A Clear Chromate Plating",
                    color: "bg-yellow-100",
                  },
                  {
                    name: "Type I Class 3 Clear Chromate Plating",
                    color: "bg-yellow-200",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <div
                      className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                      <span className="text-yellow-600 text-2xl">●</span>
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-xs font-medium text-gray-700">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Electroless Nickel Plating & Zinc Coating Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Electroless Nickel Plating */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Electroless Nickel Plating
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-32 w-full bg-gray-400 flex items-center justify-center">
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      Clear Electroless Nickel Plating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zinc Coating */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Zinc Coating
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-32 w-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      Yellow Zinc Plating Type II
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Advanced Post-Processing Options for CNC Machining Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Through both the Factory and Fasonly Network, you can access a
              broad range of post-processing capabilities to meet your part's
              specifications.
            </p>
          </div>

          {/* Post-Processing Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[160px]">
                    Description
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Materials
                  </th>
                  <th className="text-center p-3 font-semibold border-r border-gray-700 w-20">
                    Factory
                  </th>
                  <th className="text-center p-3 font-semibold w-20">
                    Network
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Bead Blasting",
                    desc: "Light bead blast to provide uniform finish and light texture",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Anodizing",
                    desc: "Type I, II, and III finishes are available to improve part durability and add color",
                    materials: "Aluminum, Titanium",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Chromate Coating",
                    desc: "Improve corrosion resistance, add electrical connectivity, and the ability to better paint parts",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Electroless Nickel Plating",
                    desc: "A wear-, abrasion-, and corrosion resistant finish that is compatible with aluminum, stainless steel, and mild steel",
                    materials: "Aluminum, Steel",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Part Marking",
                    desc: "Laser engraving or pad printing to add labeling and other text to parts",
                    materials: "Metals, Plastics",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Passivation",
                    desc: "Enhance durability and corrosion resistance of metal parts",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Powder Coating",
                    desc: "Add custom color to parts while improving durability",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Inserts",
                    desc: "Incorporate off-the-shelf hardware components to facilitate assembly",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Silk Screening",
                    desc: "Add design elements or labels to parts",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Brushing",
                    desc: "Achieve uniform, satin-like surface finish",
                    materials: "Stainless Steel",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Polishing",
                    desc: "Create mirror-like finishes on metal parts",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Black Oxide",
                    desc: "Improve corrosion resistance",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Brushed + Electropolishing",
                    desc: "This combination of processing results in easy-to-clean parts that are corrosion resistant",
                    materials: "Metals",
                    factory: true,
                    network: true,
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 font-semibold text-[#0B1221] align-top">
                      {item.name}
                      <p className="font-normal text-gray-500 text-xs mt-1">
                        {item.desc}
                      </p>
                    </td>
                    <td className="p-3 text-gray-600 text-sm align-top">
                      {item.materials}
                    </td>
                    <td className="p-3 text-center align-top">
                      {item.factory ? (
                        <span className="text-[#96E92A] text-lg font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="p-3 text-center align-top">
                      {item.network ? (
                        <span className="text-[#96E92A] text-lg font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
