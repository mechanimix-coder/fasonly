"use client";

import { useState } from "react";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Define types for the content
interface TableContent {
  title: string;
  table: {
    headers: string[];
    rows: string[][];
  };
  description?: never;
}

interface DescriptionContent {
  title: string;
  description: string;
  table: null;
}

type ContentItem = TableContent | DescriptionContent;

export default function Page() {
  const [activeTab, setActiveTab] = useState("maxPartSize");

  const tabs = [
    { id: "maxPartSize", label: "Max Part Size" },
    { id: "layerThickness", label: "Layer Thickness" },
    { id: "minFeatureSize", label: "Minimum Feature Size" },
    { id: "minWallThickness", label: "Minimum Wall Thickness" },
    { id: "minHoleSize", label: "Minimum Hole Size" },
    { id: "tolerances", label: "Tolerances" },
  ];

  const content: Record<string, ContentItem> = {
    maxPartSize: {
      title: "Max Part Size",
      table: {
        headers: ["Resolution", "US", "Metric"],
        rows: [
          [
            "Normal Resolution",
            "29 in. x 25 in. x 21 in.",
            "736mm x 635mm x 533mm",
          ],
          [
            "High Resolution",
            "10 in. x 10 in. x 10 in.",
            "254mm x 254mm x 254mm",
          ],
          [
            "Micro Resolution",
            "5 in. x 5 in. x 2.5 in.",
            "127mm x 127mm x 63.5mm",
          ],
        ],
      },
    },
    layerThickness: {
      title: "Layer Thickness",
      table: {
        headers: [
          "Resolution",
          "Layer Thickness (US)",
          "Layer Thickness (Metric)",
        ],
        rows: [
          ["Normal Resolution", "0.004 in.", "0.1016mm"],
          ["High Resolution", "0.002 in.", "0.0508mm"],
          ["Micro Resolution", "0.001 in.", "0.0254mm"],
        ],
      },
    },
    minFeatureSize: {
      title: "Minimum Feature Size",
      table: {
        headers: [
          "Resolution",
          "X-Y (US)",
          "X-Y (Metric)",
          "Z (US)",
          "Z (Metric)",
        ],
        rows: [
          ["Normal Resolution", "0.010 in.", "0.254mm", "0.016 in.", "0.406mm"],
          ["High Resolution", "0.005 in.", "0.1016mm", "0.016 in.", "0.406mm"],
          [
            "Micro Resolution",
            "0.0025 in.",
            "0.0635mm",
            "0.008 in.",
            "0.203mm",
          ],
        ],
      },
    },
    minWallThickness: {
      title: "Minimum Wall Thickness",
      table: {
        headers: ["Resolution", "US", "Metric"],
        rows: [
          ["Normal Resolution", "0.010 in.", "0.254mm"],
          ["High Resolution", "0.004 in.", "0.1016mm"],
          ["Micro Resolution", "0.0025 in.", "0.0635mm"],
        ],
      },
    },
    minHoleSize: {
      title: "Minimum Hole Size",
      table: {
        headers: ["Resolution", "US", "Metric"],
        rows: [
          ["Normal Resolution", "0.025 in.", "0.635mm"],
          ["High Resolution", "0.020 in.", "0.508mm"],
          ["Micro Resolution", "0.015 in.", "0.381mm"],
        ],
      },
    },
    tolerances: {
      title: "Stereolithography (SLA) 3D Printing Tolerances",
      description:
        "For well-designed parts, tolerances in the X/Y dimension of ±0.002 in. (0.05mm) for first inch plus 0.1% of nominal length (0.001mm/mm), and Z dimension tolerances of ±0.005 in. for first inch plus 0.1% of nominal length, can typically be achieved. Note that tolerances may change depending on part geometry.",
      table: null,
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

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

  //   metric tables data
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "ABS-Like White (Accura Xtreme White 200)",
      color: "White",
      tensileStrength: "7.9 ksi",
      tensileModulus: "479 ksi",
      elongation: "9%",
    },
    {
      material: "ABS-Like Gray (Accura Xtreme Gray)",
      color: "Gray",
      tensileStrength: "5.8 ksi",
      tensileModulus: "290 ksi",
      elongation: "9%",
    },
    {
      material: "ABS-Like Black (Accura 7820)",
      color: "Black",
      tensileStrength: "7.0 ksi",
      tensileModulus: "435 ksi",
      elongation: "5%",
    },
    {
      material: "ABS-Like Translucent/Clear (WaterShed XC 11122)",
      color: "Translucent/Clear",
      tensileStrength: "7.9 ksi",
      tensileModulus: "421 ksi",
      elongation: "6%",
    },
    {
      material: "MicroFine™ (Gray and Green)",
      color: "Gray or Green",
      tensileStrength: "8.7 ksi",
      tensileModulus: "377 ksi",
      elongation: "8%",
    },
    {
      material: "PP-Like Translucent White (Somos 9120)",
      color: "Translucent/White",
      tensileStrength: "5.0 ksi",
      tensileModulus: "232 ksi",
      elongation: "25%",
    },
    {
      material: "PC-Like Translucent/Clear (Accura 60)",
      color: "Translucent/Clear",
      tensileStrength: "10.8 ksi",
      tensileModulus: "508 ksi",
      elongation: "7%",
    },
    {
      material: "PC-Like Advanced High Temp* (Accura 5530)",
      color: "Translucent/Amber",
      tensileStrength: "6.5 ksi",
      tensileModulus: "566 ksi",
      elongation: "1.5%",
    },
    {
      material: "Ceramic-Like Advanced HighTemp* (PerFORM)",
      color: "White",
      tensileStrength: "10.9 ksi",
      tensileModulus: "1,523 ksi",
      elongation: "1%",
    },
    {
      material: "True Silicone",
      color: "Translucent/White",
      tensileStrength: "0.711 ksi",
      tensileModulus: "n/a",
      elongation: ">1,000%",
    },
  ];

  const metricData = [
    {
      material: "ABS-Like White (Accura Xtreme White 200)",
      color: "White",
      tensileStrength: "54.47 Mpa",
      tensileModulus: "3300 Mpa",
      elongation: "9%",
    },
    {
      material: "ABS-Like Gray (Accura Xtreme Gray)",
      color: "Gray",
      tensileStrength: "39.98 Mpa",
      tensileModulus: "2000 Mpa",
      elongation: "9%",
    },
    {
      material: "ABS-Like Black (RenShape SL7820)",
      color: "Black",
      tensileStrength: "48.26 Mpa",
      tensileModulus: "3000 Mpa",
      elongation: "5%",
    },
    {
      material: "ABS-Like Translucent/Clear (WaterShed XC 11122)",
      color: "Translucent/Clear",
      tensileStrength: "54.47 Mpa",
      tensileModulus: "2600 Mpa",
      elongation: "6%",
    },
    {
      material: "MicroFine™ (Gray and Green)",
      color: "Gray or Green",
      tensileStrength: "59.98 Mpa",
      tensileModulus: "2600 Mpa",
      elongation: "8%",
    },
    {
      material: "PP-Like Translucent White (Somos 9120)",
      color: "Translucent/White",
      tensileStrength: "34.47 Mpa",
      tensileModulus: "1600 Mpa",
      elongation: "25%",
    },
    {
      material: "PC-Like Translucent/Clear (Accura 60)",
      color: "Translucent/Clear",
      tensileStrength: "74.46 Mpa",
      tensileModulus: "3503 Mpa",
      elongation: "7%",
    },
    {
      material: "PC-Like Advanced High Temp* (Accura 5530)",
      color: "Translucent/Amber",
      tensileStrength: "44.81 Mpa",
      tensileModulus: "3902 Mpa",
      elongation: "1.5%",
    },
    {
      material: "Ceramic-Like Advanced HighTemp* (PerFORM)",
      color: "White",
      tensileStrength: "75.15 Mpa",
      tensileModulus: "10,500 Mpa",
      elongation: "1%",
    },
    {
      material: "True Silicone",
      color: "Translucent/White",
      tensileStrength: "4.9 Mpa",
      tensileModulus: "n/a",
      elongation: ">1,000%",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Stereolithography (SLA) Resin 3D Printing Service"
        desc="SLA 3D printing service for rapid prototyping. Multiple thermoset resin materials available. Get an instant online quote."
        image="/Assets/Images/services/3d-printing/stereolithography/hero.png"
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
                    "SLA Materials",
                    "Surface Finishes",
                    "Post Processing Options",
                    "Our SLA 3D Printers",
                    "Why Choose SLA 3D Printing?",
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
              {/* What is Stereolithography? Section */}
              <div id="what-is-stereolithography" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  What is Stereolithography?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Stereolithography (SLA) is a 3D printing process used to
                  create concept models, cosmetic prototypes, and complex parts
                  with intricate geometries. It's an additive manufacturing
                  technology that forms parts by curing thermoset resin with a
                  UV laser. A wide selection of materials, extremely high
                  feature resolutions, and quality surface finishes are possible
                  with SLA.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  SLA 3D printing is primarily used for:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "parts requiring high accuracy and features as small as 0.002 in.",
                    "good surface quality for cosmetic prototypes",
                    "form and fit testing",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stereolithography (SLA) Design Guidelines and Capabilities Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Stereolithography (SLA) Design Guidelines and Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for stereolithography include important
              design considerations to help improve part manufacturability,
              enhance cosmetic appearance, and reduce overall production time.
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

                {/* Check if description exists before rendering */}
                {"description" in currentContent &&
                  currentContent.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentContent.description}
                    </p>
                  )}

                {/* Check if table exists before rendering */}
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

                {/* Note for all tabs */}
                <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    *Available for the following materials: ABS-Like White and
                    Gray, and ABS-Like Translucent/Clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GuideDownload
        title="3D Printing Surface Finish Guide"
        desc="Get this quick reference guide to explore your surface finish options across our six 3D printing technologies."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Full Height Image */}
            <div className="flex-1 relative w-full h-96 lg:h-auto min-h-[500px] rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/service-page-render-sla.jpg"
                alt="SLA Material Options"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Section Header and Accordions */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                SLA Material Options
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
              Compare SLA Material Properties
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
                      {row.tensileModulus}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.elongation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-4 text-right">
            <p className="text-xs text-gray-400">
              *Properties listed are based on thermal cure
            </p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Surface Finish Options for SLA Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 font-semibold text-white text-lg">
                    Finish
                  </th>
                  <th className="text-left p-4 font-semibold text-white text-lg">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Unfinished
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Dots, or standing "nibs," remain evident on the bottom of
                    the part from the support structure remnants. Good for when
                    fast lead times are required or cost is a factor.
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Natural
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Supported surfaces are sanded down to eliminate the support
                    nibs.
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Standard
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Supported surfaces are sanded, and the entire part is finely
                    blasted for a consistent look. Note that the layers are
                    still present.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Custom
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Soft-touch paint, clear part finishing, painting, masking,
                    color matching, decals/graphic, and texture finishes are
                    available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Image Grid Section Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Finish Examples
            </h3>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Image Grid - Row 1 (ABS-like Translucent/Clear) */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">
              Material: ABS-like Translucent/Clear
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Unfinished", "Standard", "Natural", "Custom"].map(
                (finish, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
                    <div className="relative w-full h-48 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                      <span className="text-5xl">🔬</span>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-300 text-sm">Finish: {finish}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Image Grid - Row 2 (MicroFine Gray™) */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 text-center">
              Material: MicroFine Gray™
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Unfinished", "Standard", "Natural", "Custom"].map(
                (finish, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
                    <div className="relative w-full h-48 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                      <span className="text-5xl">🔬</span>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-300 text-sm">Finish: {finish}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Additional Finishing Options for Stereolithography
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Custom finishing is a mix of science, technology, and fine art
              that can transform a part to your exact specifications. Finishes
              include:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[
                "Soft-touch paint",
                "Clear part finishing",
                "Paint finishes",
                "Masking",
                "Color matching",
                "Decals/graphic",
                "Texture",
              ].map((finish, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 bg-[#F0F8FF] rounded-full text-sm text-gray-600">
                  {finish}
                </span>
              ))}
            </div>
          </div>

          {/* Row 1 - Metal Plating */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/metal-plating.png"
                alt="Metal Plating Process"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Metal Plating
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Our metal-plating process for SLA coats a ceramic-filled PC-like
                material (Somos PerFORM) with a nickel that gives parts the
                look, feel, and strength of metal, but without the weight. The
                combination of the material's strength, rigidity, and
                temperature resistance with nickel plating, takes strength,
                stiffness, and impact and temperature resistance to a degree
                previously unattainable in SLA parts.
              </p>
            </div>
          </div>

          {/* Row 2 - Microfluidics */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/microfluidics.webp"
                alt="Microfluidics Process"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Microfluidics
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Our microfluidic fabrication process is a modified form of
                high-resolution SLA that uses a clear ABS-like material
                (WaterShed XC 11122). Parts are resistance to water and
                humidity, and work well for lens and flow-visualization models.
              </p>
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
                Our SLA 3D Printers
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our stereolithography machines consists of Vipers, ProJets, and
                iPros. In high-resolution mode, Vipers and ProJets can make
                parts with extremely tiny features and crisp details, while in
                normal-resolution mode, they can build cost-effective parts very
                quickly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                iPros have extremely large build volumes at 29 in. by 25 in. by
                21 in. (736mm by 635mm by 533mm), yet are still able to image
                highly detailed parts easily.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/sla-0894.jpg"
                alt="SLA 3D Printers"
                fill
                className="object-cover"
              />
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
                  <p className="text-gray-300 text-xs mt-1">Why Use SLA?</p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Use SLA?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed">
                Stereolithography (SLA) is an additive manufacturing process
                that can 3D print parts with small features, tight tolerance
                requirements, and smooth surface finishes.
              </p>
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
                How Does SLA 3D Printing Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                The SLA machine begins drawing the layers of the support
                structures, followed by the part itself, with an ultraviolet
                laser aimed onto the surface of a liquid thermoset resin. After
                a layer is imaged on the resin surface, the build platform
                shifts down and a recoating bar moves across the platform to
                apply the next layer of resin. The process is repeated layer by
                layer until the build is complete.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Newly built parts are taken out of machine and into a lab where
                solvents are used to remove any additional resins. When the
                parts are completely clean, the support structures are manually
                removed. From there, parts undergo a UV-curing cycle to fully
                solidify the outer surface of the part. The final step in the
                SLA process is the application of any custom or
                customer-specified finishing. Parts built in SLA should be used
                with minimal UV and humidity exposure so they don't degrade.
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
                    SLA 3D Printing Process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
