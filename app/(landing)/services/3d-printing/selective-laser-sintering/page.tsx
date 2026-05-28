"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("maxDimensions");

  const tabs = [
    { id: "maxDimensions", label: "Max Dimensions" },
    { id: "layerThickness", label: "Layer Thickness / Resolution" },
    { id: "wallThickness", label: "Wall Thickness" },
    { id: "minFeatureSize", label: "Minimum Feature Size" },
    { id: "tolerances", label: "Tolerances" },
    { id: "warpage", label: "Warpage" },
    { id: "surfaceFinish", label: "Surface Finish Options" },
  ];

  const content = {
    maxDimensions: {
      title: "Max Dimensions",
      table: {
        headers: ["Material", "US", "Metric"],
        rows: [
          [
            "Nylon, TPU, and other PA12 Materials",
            "12.2 in. x 10.3 in. x 10 in.",
            "309.88mm x 261.62mm x 254mm",
          ],
          [
            "PP (Polypropylene)",
            "12.2 in. x 10.3 in. x 8 in.",
            "309.88mm x 261.62mm x 203.2mm",
          ],
          ["PA12 White", "19 in. x 19 in. x 17 in.", "482mm x 482mm x 431mm"],
        ],
      },
    },
    layerThickness: {
      title: "Layer Thickness / Resolution",
      table: {
        headers: ["US", "Metric"],
        rows: [["0.004 in.", "0.1016mm"]],
      },
    },
    wallThickness: {
      title: "Wall Thickness",
      table: {
        headers: ["Material", "US", "Metric"],
        rows: [
          ["Nylons", "0.030 in.", "0.762mm"],
          ["PP and TPU", "0.040 in.", "1.01mm"],
        ],
      },
    },
    minFeatureSize: {
      title: "Minimum Feature Size",
      description:
        "Minimum feature size depends on the material and part geometry. Contact our engineering team for specific requirements.",
      table: null,
    },
    tolerances: {
      title: "SLS Tolerances",
      description:
        "For well-designed parts, tolerances of ±0.010 in. (0.25mm) plus 0.1% of nominal length can typically be achieved. Note that tolerances may change depending on part geometry.",
      table: null,
    },
    warpage: {
      title: "SLS Part Warpage",
      description:
        "Larger part sizes (>7 in.) and parts with thin features are the most susceptible to warp. We recommend maintaining a uniform thickness of 0.125 in. (3.175mm) to ensure stability.",
      table: null,
    },
    surfaceFinish: {
      title: "Surface Finish Options",
      table: {
        headers: ["Finish Type", "Description"],
        rows: [
          [
            "Standard",
            "Bead blast to remove all powder, which leaves a consistent overall texture.",
          ],
          [
            "Vapor Smoothing",
            "Significant reduction of surface roughness from 250+ μm RA (as-printed) to 64 – 100 μm RA after smoothing. Available for PA11 Black.",
          ],
          [
            "Custom",
            "Secondary options include a primer or dye color that can be applied as well as taps and inserts.",
          ],
        ],
      },
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  //   accordion

  //   Accordion section data

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const materials = [
    {
      id: 0,
      title: "ABS-Like White (Accura Xtreme White 200)",
      content: `ABS-Like White (Accura Xtreme White 200) is a widely used general purpose stereolithography material. In terms of flexibility and strength, this material falls between molded polypropylene and molded ABS, which makes it a good choice for functional prototypes. Parts as large as 29 in. x 25 in. x 21 in. can be built with ABS-Like White so consider it a primary option if you require an extensive part size build envelope.`,
      benefits: [
        "Durable, general purpose resin",
        "Accommodates extra-large parts",
      ],
    },
    {
      id: 1,
      title: "ABS-Like Gray (Accura Xtreme Gray)",
      content: `ABS-Like Gray (Accura Xtreme Gray) is a widely used general purpose stereolithography material. In terms of flexibility and strength, this material falls between molded polypropylene and molded ABS, which makes it a good choice for functional prototypes. ABS-Like Gray offers the highest HDT of the ABS-like SLA resins.`,
      benefits: [
        "Durable, general purpose resin",
        "Highest HDT of the ABS-like SLA resins",
      ],
    },
    {
      id: 2,
      title: "ABS-Like Black (Accura 7820)",
      content: `ABS-Like Black (Accura 7820) is a widely used general purpose material. Its deep black color and glossy up-facing surfaces in a top profile offer the appearance of a molded part, while layer lines may be visible in a side profile. Accura 7820 also has low moisture absorption (0.25% per ASTM D570) so that parts are more dimensionally stable. Compared to other materials used for stereolithography, it has midrange values for all mechanical properties.`,
      benefits: ["Low moisture absorption", "Glossy cosmetic appearance"],
    },
    {
      id: 3,
      title: "ABS-Like Translucent/Clear (WaterShed XC 11122)",
      content: `ABS-Like Translucent/Clear (WaterShed XC 11122) offers a unique combination of low moisture absorption (0.35% 0.25% per ASTM D570) and near-colorless transparency. Secondary operations are required to achieve functional part clarity, and the part will also retain a very light blue hue afterward. While good for general-purpose applications, WaterShed is the best choice for flow-visualization models, light pipes, and lenses.`,
      benefits: [
        "Lowest moisture absorption of SLA resins",
        "Functional transparency",
      ],
    },
    {
      id: 4,
      title: "MicroFine™ (Gray and Green)",
      content: `MicroFine™ is a custom formulated material available in gray and green that is exclusive to Fasonly. This ABS-like thermoset is printed in Fasonly' customized machinery to achieve high resolution features as small as 0.002 in. MicroFine is ideal for small parts, generally less than 1 in. by 1 in. by 1 in. In terms of mechanical properties, MicroFine falls in the mid-range of stereolithography materials for tensile strength and modulus and on the low end for impact strength and elongation.`,
      benefits: [
        "Produces highest resolution parts",
        "Ideal for extra-small parts",
      ],
    },
    {
      id: 5,
      title: "PP-Like Translucent White (Somos 9120)",
      content: `PP-Like Translucent White (Somos 9120) is the most flexible SLA option outside of Carbon RPU 70 and FPU 50. In direct comparison to the average values of an injection-molded polypropylene, 9120 has similar tensile strength, tensile modulus, flexural modulus, and impact strength. The only departure from molded PP is its elongation value, which is only 25% of the molded thermoplastic.`,
      benefits: ["Semi-flexible", "Translucency"],
    },
    {
      id: 6,
      title: "PC-Like Advanced High Temp (Accura 5530)",
      content: `PC-Like Advanced High Temp (Accura 5530) creates strong, stiff parts with high temperature resistance. A thermal post-cure option can increase HDT as high as 482°F at 0.46 MPa loading. Accura 5530 has the highest E-modulus of all the unfilled SLA materials, and it is known for being resistant to automotive fluids. However, the thermal curing process does make Accura 5530 less durable, resulting in a 50% reduction to elongation.`,
      benefits: ["High elastic modulus", "Higher resistance to heated fluids"],
    },
    {
      id: 7,
      title: "PC-Like Translucent/Clear (Accura 60)",
      content: `PC-Like Translucent/Clear (Accura 60) is an alternative to the general purpose ABS-like materials and WaterShed XC 11122 when stiffness is desired. Like WaterShed, this material can be custom finished to achieve functional transparency with secondary processing. Accura 60 has the highest tensile strength and elastic modulus compared of all stereolithography materials outside of the Advanced High Temp options that are most often thermal cured.`,
      benefits: ["High stiffness", "Functional transparency"],
    },
    {
      id: 8,
      title: "Ceramic-Like Advanced HighTemp (PerFORM)",
      content: `Ceramic-Like Advanced HighTemp (PerFORM) exhibits the highest tensile strength and E-modulus making it the stiffest performance material of the SLA materials. When the thermal cure option is applied to parts made from PerFORM, it exhibits the highest HDT (as high as 514°F at 0.46 MPa loading) of the SLA materials.`,
      benefits: ["Stiffest SLA resin", "Highest HDT of SLA resins"],
    },
    {
      id: 9,
      title: "True Silicone",
      content: `True silicone is 100% pure silicone that is available in different shore-A hardness as detailed below. The material is suitable to produce both functional prototypes and end-use products. The material shows high resistance to harsh environments conditions, various acids, bases and nonpolar solvents.`,
      benefits: ["100% pure silicone", "High chemical resistance"],
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  //   Units table
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "PA 11 Black (PA 850)",
      color: "Black",
      tensileStrength: "7.54 ksi",
      tensileModulus: "261 ksi",
      elongation: "30%",
    },
    {
      material: "PA12 Black",
      color: "Dyed Black",
      tensileStrength: "6.7 ksi",
      tensileModulus: "276 ksi",
      elongation: "13%",
    },
    {
      material: "PA 12 White (PA 650)",
      color: "White",
      tensileStrength: "7.25 ksi",
      tensileModulus: "290 ksi",
      elongation: "11%",
    },
    {
      material: "PA12 Value",
      color: "Off White",
      tensileStrength: "6.7 ksi",
      tensileModulus: "276 ksi",
      elongation: "13%",
    },
    {
      material: "PA 12 Mineral-Filled (Duraform HST)",
      color: "Light Gray",
      tensileStrength: "5.51 ksi",
      tensileModulus: "450 ksi",
      elongation: "3%",
    },
    {
      material: "PA 12 40% Glass-Filled",
      color: "White",
      tensileStrength: "7.25 ksi",
      tensileModulus: "522 ksi",
      elongation: "5%",
    },
    {
      material: "Polypropylene Natural",
      color: "Natural",
      tensileStrength: "2.61 ksi",
      tensileModulus: "123 ksi",
      elongation: "15%",
    },
    {
      material: "TPU 70-A",
      color: "White",
      tensileStrength: "580 psi",
      tensileModulus: "",
      elongation: "210%",
    },
  ];

  const metricData = [
    {
      material: "PA 11 Black (PA 850)",
      color: "Black",
      tensileStrength: "52 Mpa",
      tensileModulus: "1,800 Mpa",
      elongation: "30%",
    },
    {
      material: "PA12 Black",
      color: "Black",
      tensileStrength: "46 Mpa",
      tensileModulus: "1,900 Mpa",
      elongation: "13%",
    },
    {
      material: "PA 12 White (PA 650)",
      color: "White",
      tensileStrength: "50.0 Mpa",
      tensileModulus: "2,000 Mpa",
      elongation: "11%",
    },
    {
      material: "PA12 Value",
      color: "Off White",
      tensileStrength: "46 Mpa",
      tensileModulus: "1,900 Mpa",
      elongation: "13%",
    },
    {
      material: "PA 12 Mineral-Filled (Duraform HST)",
      color: "Light Gray",
      tensileStrength: "38 Mpa",
      tensileModulus: "3,100 Mpa",
      elongation: "3%",
    },
    {
      material: "PA 12 40% Glass-Filled",
      color: "White",
      tensileStrength: "50 Mpa",
      tensileModulus: "3,600 Mpa",
      elongation: "5%",
    },
    {
      material: "Polypropylene Natural",
      color: "Natural",
      tensileStrength: "18 Mpa",
      tensileModulus: "848 Mpa",
      elongation: "15%",
    },
    {
      material: "TPU 70-A",
      color: "White",
      tensileStrength: "4.0 Mpa",
      tensileModulus: "",
      elongation: "210%",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="SLS 3D Printing Service"
        desc="Order custom SLS parts suitable for rapid prototyping, functional testing, and end-use production."
        image="/Assets/Images/services/3d-printing/selective-laser-sintering/hero.webp"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Jump to Section Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-[#0B1221] mb-4">
                  Jump to Section
                </h3>
                <div className="space-y-2">
                  {[
                    "Capabilities",
                    "Materials",
                    "Surface Finishes",
                    "SLS 3D Printers",
                    "About Selective Laser Sintering",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block text-gray-500 hover:text-[#0099ff] transition-colors duration-200 text-sm py-1">
                      → {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3">
              {/* What is Plastic Injection Molding? Section */}
              <div
                id="about-plastic-injection-molding"
                className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  What is 3D printing ?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Selective laser sintering (SLS) is an industrial 3D printing
                  process that produces accurate prototypes and functional
                  production parts in as fast as 1 day. Multiple nylon-based
                  materials and a thermoplastic polyurethane (TPU) are
                  available, which create highly durable final parts that
                  require heat resistance, chemical resistance, flexibility, or
                  dimensional stability. With SLS 3D printing, no support
                  structures are required making it easy to nest multiple parts
                  into a single build and an economical solution for when higher
                  volumes of 3D-printed parts are required.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common uses for selective laser sintering are:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "jigs and fixtures",
                    "housings",
                    "snap fits and living hinges",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional sections can be added here with matching IDs for navigation */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 shadow-xl">
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
                  <p className="text-gray-300 text-xs mt-1">Why Use SLS?</p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Use SLS?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed">
                See how SLS uses actual thermoplastic and elastomeric materials
                to produce parts with good mechanical properties. Final parts
                can be used to test future injection molding designs or as
                functional, end-use components.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Vapor Smoothing is Here!
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vapor smoothing is now available for select 3D-printed nylon
                parts. The process eliminates rough surfaces and leaves a
                glossy, aesthetic finish on parts.
              </p>
              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/selective-laser-sintering/vapor-smooth-part-3jpg.jpg"
                alt="Vapor Smoothing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Definitive Guide to 3D Printing"
        desc="Our comprehensive guide navigates the entire additive manufacturing process—from prototyping to production."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Design Guidelines for Selective Laser Sintering (SLS)
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for selective laser sintering include
              important design considerations to help improve part
              manufacturability, enhance cosmetic appearance, and reduce overall
              production time.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Navigation List */}
            <div className="lg:w-1/3">
              <div className="bg-[#F0F8FF] rounded-xl overflow-hidden sticky top-32">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-4 ${
                      activeTab === tab.id
                        ? "bg-white border-l-[#96E92A] text-[#0B1221] font-semibold shadow-sm"
                        : "border-l-transparent text-gray-600 hover:bg-white/50 hover:text-[#0B1221]"
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  {currentContent.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

                {/* Check if description exists */}
                {"description" in currentContent &&
                  currentContent.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentContent.description}
                    </p>
                  )}

                {/* Check if table exists */}
                {currentContent.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0B1221] text-white">
                          {currentContent.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentContent.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className={`border-b border-gray-200 ${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="p-3 text-gray-600 text-sm">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Full Height Image */}
            <div className="flex-1 relative w-full h-96 lg:h-auto min-h-[500px] rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/selective-laser-sintering/sls-med-device-part-v1-cutout-lr.webp"
                alt="SLA Material Options"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>

            {/* Right Column - Section Header and Accordions */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Selective Laser Sintering (SLS) Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Material List */}
              <div className="space-y-2">
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => toggleAccordion(material.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                      <span className="font-semibold text-[#0B1221] text-sm md:text-base">
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
                          ? "max-h-[500px] opacity-100 pb-4 px-4"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {material.content}
                      </p>
                      <div className="mt-3">
                        <h4 className="font-semibold text-[#0B1221] text-sm mb-2">
                          Primary Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {material.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                              <span className="text-gray-600 text-sm">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare SLS Material Properties
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUnit("us")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              US (Imperial)
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "metric"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metric (SI)
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[220px]">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[120px]">
                    Color
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Tensile Strength
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Tensile Modulus
                  </th>
                  <th className="text-left p-4 font-semibold min-w-[100px]">
                    Elongation
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    <td className="p-4 text-gray-700 text-sm font-medium">
                      {row.material}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">{row.color}</td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileModulus || "-"}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.elongation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              These figures are approximate and dependent on a number of
              factors, including but not limited to, machine and process
              parameters. The information provided is therefore not binding and
              not deemed to be certified. When performance is critical, also
              consider independent lab testing of additive materials or final
              parts.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Surface Finish for SLS Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              Surface finish on SLS parts is typically rougher than other 3D
              printing technologies—it can range from 100-250 RMS. We also bead
              blast the majority of customers' parts to remove loose powder and
              create a smooth matte finish. Vapor smoothing is a post-processing
              option available for PA11 Black parts, which will result in
              surface finish roughness between 64-100 pin RA.
            </p>
          </div>

          {/* Two Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 - PA12 40% Glass-Filled */}
            <div className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔬</span>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-300 text-sm">
                  Material: PA12 40% Glass-Filled
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Resolution: Normal (0.004 in. layer thickness)
                </p>
                <p className="text-[#96E92A] text-xs mt-1 font-semibold">
                  Finish: Standard
                </p>
              </div>
            </div>

            {/* Image 2 - PA11 Black (PA850) */}
            <div className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔬</span>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-300 text-sm">
                  Material: PA11 Black (PA850)
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Resolution: Normal (0.004 in. layer thickness)
                </p>
                <p className="text-[#96E92A] text-xs mt-1 font-semibold">
                  Finish: Standard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/selective-laser-sintering/sls-machines-570x308-1.webp"
                alt="SLS 3D Printers"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Our SLS 3D Printers
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our SLS equipment includes sPro140 machines, which have the
                world's largest sintering build volume, and feature fully
                digital high-speed scanning systems, unparalleled process
                consistency, and closed systems for powder blending and delivery
                for reliable part quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also use sPro60 machines, which allow for multiple materials
                and high throughput.
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Video Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does SLS 3D Printing Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The selective laser sintering machine begins sintering each
                layer of part geometry into a heated bed of nylon-based powder.
                After each layer is fused, a roller moves across the bed to
                distribute the next layer of powder. The process is repeated
                layer by layer until the build is complete.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When the build finishes, the entire powder bed with the
                encapsulated parts is moved into a breakout station, where it is
                raised up, and parts are broken out of the bed. An initial
                brushing is manually administered to remove a majority of loose
                powder. Parts are then bead blasted to remove any of the
                remaining residual powder before ultimately reaching the
                finishing department.
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
                    SLS 3D Printing Process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Video Player */}
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
                    3D Printing Facility Tour
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Tour Our 3D Printing Facility
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Take a quick tour through our additive manufacturing facility in
                North Carolina, one of the largest 3D printing operations in the
                world, to see how we build high-quality prototypes and fully
                functional end-use components and assemblies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
