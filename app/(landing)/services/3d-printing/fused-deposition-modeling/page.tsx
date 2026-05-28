"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const prototypingMaterials = [
    {
      id: 0,
      title: "PLA (Polylactic Acid)",
      content:
        "Known for excellent surface finish and ease of printing, PLA is biodegradable and ideal for visual models and consumer products.",
    },
    {
      id: 1,
      title: "PETG (Polyethylene Terephthalate Glycol)",
      content:
        "Offers a good combination of strength and flexibility, making it food-safe and suitable for mechanical parts.",
    },
    {
      id: 2,
      title: "ASA (Acrylonitrile Styrene Acrylate)",
      content:
        "Provides UV resistance and weatherability, perfect for outdoor applications.",
    },
    {
      id: 3,
      title: "ABS (Acrylonitrile Butadiene Styrene)",
      content:
        "Known for impact resistance and strength, suitable for durable prototypes and functional parts.",
    },
    {
      id: 4,
      title: "TPU (Thermoplastic Polyurethane)",
      content:
        "Highly flexible and abrasion-resistant, ideal for creating rubber-like components.",
    },
  ];

  const industrialMaterials = [
    {
      id: 5,
      title: "Nylon (Markforged Onyx)",
      content:
        "Offers superior tensile strength and toughness, ideal for functional prototypes and production parts requiring durability and wear resistance.",
    },
    {
      id: 6,
      title: "ULTEM (Stratasys)",
      content:
        "ULTEM 9085 and ULTEM 1010: Known for high thermal and chemical resistance, suitable for aerospace and automotive applications where high performance is critical.",
    },
    {
      id: 7,
      title: "ASA (Stratasys)",
      content:
        "Combines good mechanical properties with UV stability, perfect for robust outdoor and automotive components.",
    },
    {
      id: 8,
      title: "ABS (Stratasys)",
      content:
        "ABS M30 and ABSplus: Provides enhanced strength and stability, suitable for end-use parts needing reliable performance under stress.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="FDM 3D Printing"
        bg="/Assets/Images/services/3d-printing/fused-deposition-modeling/bg.jpg"
        desc="Fused deposition modeling (FDM) creates quality prototypes and end-use parts in a variety of materials and fast quoting "
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/fused-deposition-modeling/dsc03497-600x400-bf06395-1.jpg"
                alt="FDM 3D Printing"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is FDM 3D Printing?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                FDM is a versatile 3D printing technology that builds parts one
                layer at a time by extruding heated thermoplastics through a
                nozzle. Known for its affordability and quality, FDM is ideal
                for low-volume production of both prototypes and functional
                parts. Work with materials like PLA, ABS, TPU, PETG, and PEI to
                cover a wide range of applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits of FDM */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Benefits of FDM
              </h2>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>
              <ul className="space-y-3">
                {[
                  "Speedy turnaround for prototypes and parts",
                  "Versatile material choices: heat and chemical resistant, flame retardant, biocompatible, and high strength materials available",
                  "Cost-effective manufacturing for custom parts",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Applications for FDM 3D Printing */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Common Applications for FDM 3D Printing
              </h2>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>
              <div className="space-y-4">
                {[
                  {
                    title: "Aerospace",
                    desc: "Lightweight components, enclosures, housing, and antenna covers",
                  },
                  {
                    title: "Automotive",
                    desc: "Assembly tools and prototype parts",
                  },
                  {
                    title: "Consumer Electronics",
                    desc: "Custom enclosures and housings",
                  },
                  {
                    title: "Medical",
                    desc: "Custom prosthetics and anatomical models",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        {item.title}:
                      </span>
                      <span className="text-gray-600 text-sm ml-1">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              FDM Design Guidelines and Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for FDM include important design
              considerations to help improve part precision and reduce overall
              production time.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    US
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Metric
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Max Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Max Part Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototyping FDM:
                      </span>
                      <div>Up to 19.68 in. x 19.68 in. x 19.68 in.</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Industrial FDM:
                      </span>
                      <div>Up to 15.98 in. x 13.97 in. x 15.98 in.</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototyping FDM:
                      </span>
                      <div>Up to 500mm x 500mm x 500mm</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Industrial FDM:
                      </span>
                      <div>Up to 406mm x 355mm x 406mm</div>
                    </div>
                  </td>
                </tr>

                {/* Dimensional Accuracy Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Dimensional Accuracy
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototyping FDM:
                      </span>
                      <div>± 0.5% with a lower limit of ±0.020 in.</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Industrial FDM:
                      </span>
                      <div>± 0.3% with a lower limit of ±0.012 in.</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototyping FDM:
                      </span>
                      <div>0.5mm</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Industrial FDM:
                      </span>
                      <div>±0.3mm</div>
                    </div>
                  </td>
                </tr>

                {/* Unsupported/Supported Walls Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Unsupported/Supported Walls
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Minimum 0.0315 in.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Minimum 0.8mm
                  </td>
                </tr>

                {/* Minimum Feature Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Feature Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.0787 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">2.0mm</td>
                </tr>

                {/* Minimum Hole Diameter Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Hole Diameter
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.0787 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">2.0mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does FDM 3D Printing Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Fused Deposition Modeling (FDM) creates parts by heating and
                extruding thermoplastic filaments layer by layer, resulting in
                solid objects with practical functionality.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike resin-based technologies such as stereolithography
                (SLA)—which use liquid photopolymers cured by a UV laser to
                achieve fine details and smooth finishes—FDM offers the
                advantage of lower costs and faster production times.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Additionally, although powder-based methods such as selective
                laser sintering (SLS) fuse material powders into complex shapes
                without the need for support structures, FDM remains a versatile
                and economical option for producing durable parts, especially
                when surface finish is not the primary concern. This makes FDM
                ideal for functional prototypes and low-volume manufacturing
                across a range of industries.
              </p>
            </div>

            {/* Right Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Watch Video
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    When to Use FDM 3D Printing
                  </p>
                  <p className="text-gray-400 text-xs mt-2">FASONLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              FDM Material Options
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Fasonly FDM materials for prototyping are typically chosen for
              their ease of use, speed, and cost-effectiveness, focusing on
              enabling rapid design iterations and validation. Materials for
              production are selected for their durability, specific mechanical
              properties, and long-term performance, ensuring they meet
              standards for end-use applications.
            </p>
          </div>

          {/* Prototyping Materials Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center">
              FDM Materials for Prototyping:
            </h3>
            <div className="space-y-3">
              {prototypingMaterials.map((material) => (
                <div
                  key={material.id}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => toggleAccordion(material.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                    <span className="font-semibold text-[#0B1221] text-base md:text-lg">
                      {material.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openAccordion === material.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === material.id
                        ? "max-h-[200px] opacity-100 pb-4 px-4"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {material.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial FDM Materials Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center">
              Industrial FDM Materials:
            </h3>
            <div className="space-y-3">
              {industrialMaterials.map((material) => (
                <div
                  key={material.id}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => toggleAccordion(material.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                    <span className="font-semibold text-[#0B1221] text-base md:text-lg">
                      {material.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openAccordion === material.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === material.id
                        ? "max-h-[200px] opacity-100 pb-4 px-4"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {material.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does FDM 3D Printing Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Fused Deposition Modeling (FDM) creates parts by heating and
                extruding thermoplastic filaments layer by layer, resulting in
                solid objects with practical functionality.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike resin-based technologies such as stereolithography
                (SLA)—which use liquid photopolymers cured by a UV laser to
                achieve fine details and smooth finishes—FDM offers the
                advantage of lower costs and faster production times.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Additionally, although powder-based methods such as selective
                laser sintering (SLS) fuse material powders into complex shapes
                without the need for support structures, FDM remains a versatile
                and economical option for producing durable parts, especially
                when surface finish is not the primary concern. This makes FDM
                ideal for functional prototypes and low-volume manufacturing
                across a range of industries.
              </p>
            </div>

            {/* Right Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Watch Video
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    When to Use FDM 3D Printing
                  </p>
                  <p className="text-gray-400 text-xs mt-2">FASONLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
