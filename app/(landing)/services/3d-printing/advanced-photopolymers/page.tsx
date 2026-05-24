"use client";

import { useState } from "react";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function Page() {
  const [activeTab, setActiveTab] = useState("maxPartSize");
  const [activeMaterial, setActiveMaterial] = useState("toughBlack");
  const [unit, setUnit] = useState<"us" | "metric">("us");
  const [compareUnit, setCompareUnit] = useState<"us" | "metric">("us");

  const tabs = [
    { id: "maxPartSize", label: "Max Part Size" },
    { id: "layerThickness", label: "Layer Thickness" },
    { id: "minFeatureSize", label: "Minimum Feature Size" },
    { id: "tolerances", label: "Tolerances" },
    { id: "surfaceFinish", label: "Surface Finish Options" },
    { id: "specialOps", label: "Special Operations" },
  ];

  const content = {
    maxPartSize: {
      title: "Max Part Size",
      table: {
        headers: ["US", "Metric"],
        rows: [["9.8 in. x 5.5 in. x 19.4 in.", "249mm x 140mm x 499mm"]],
      },
    },
    layerThickness: {
      title: "Layer Thickness",
      table: {
        headers: ["Resolution", "US", "Metric"],
        rows: [
          ["Normal Resolution", "0.004 in.", "0.100mm"],
          [
            "High Resolution (ceramic-filled available)",
            "0.002 in.",
            "0.050mm",
          ],
        ],
      },
    },
    minFeatureSize: {
      title: "Minimum Feature Size",
      tables: [
        {
          title: "Tough Black",
          headers: ["", "US", "Metric"],
          rows: [
            ["Structural Wall Thickness", "0.100 in.", "2.5mm"],
            ["Supported Walls (Ribs, Bosses, etc.)", "0.040 in.", "1.0mm"],
            ["Positive Features", "0.020 in.", "0.5mm"],
            ["Negative Features/Holes", "0.025 in.", "0.6mm"],
          ],
        },
        {
          title: "Ceramic-Filled and Flame Retardant Black",
          headers: ["", "US", "Metric"],
          rows: [
            ["Structural Wall Thickness", "0.020 in.", "0.5mm"],
            ["Supported Walls (Ribs, Bosses, etc.)", "0.010 in.", "0.25mm"],
            ["Positive Features", "0.010 in.", "0.25mm"],
            ["Negative Features/Holes", "0.020 in.", "0.5mm"],
          ],
        },
      ],
    },
    tolerances: {
      title: "Tolerances",
      description:
        "For well-designed parts, tolerances of ±0.005 in. (0.13mm) for the first inch plus 0.1% of nominal length can typically be achieved. Note that tolerances may change depending on part geometry and material selection.",
    },
    surfaceFinish: {
      title: "Surface Finish Options",
      table: {
        headers: ["Finish Type", "Description"],
        rows: [
          [
            "Unfinished",
            "Dots, or standing 'nibs,' remain evident on the bottom of the part from the support structure remnants.",
          ],
          [
            "Natural (Default)",
            "Supported surfaces are sanded down to eliminate the support nibs.",
          ],
          [
            "Standard",
            "Supported surfaces are sanded, and the entire part is finely blasted for a consistent look. Note that the layers are still present.",
          ],
          [
            "Custom",
            "Secondary options include a primer or paint that can be applied as well as taps and inserts.",
          ],
        ],
      },
    },
    specialOps: {
      title: "Special Operations",
      description:
        "Additional finishing processes to aid in assembly and meet your exact specifications are available. These include:",
      list: ["Taps", "Threaded inserts"],
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  const materials = [
    { id: "toughBlack", label: "Tough Black (Loctite Henkel 3843)" },
    { id: "ceramicFilled", label: "Ceramic-Filled (BASF 3280)" },
    { id: "flameRetardant", label: "Flame Retardant Black (Arkema FR512)" },
    { id: "esdBlack", label: "ESD Black (Loctite 3380)" },
  ];

  const materialContent = {
    toughBlack: {
      title: "Tough Black (Loctite Henkel 3843)",
      description:
        "Tough Black (Loctite Henkel 3843) is a slow-curing, engineering-tough resin with high strength, good impact resistance and excellent surface finish. It's great for a wide range of tooling applications such as jigs and fixtures, housings, and covers.",
      benefits: [
        "High impact strength",
        "Semi-flexible",
        "Excellent smooth and matte surface finish",
      ],
    },
    ceramicFilled: {
      title: "Ceramic-Filled (BASF 3280)",
      description:
        "Ceramic-Filled (BASF 3280) is a composite offering extremely high stiffness of around 10 GPa and an HDT above 536°F (280°C). This material is often used for tooling and molding.",
      benefits: [
        "Superior stiffness",
        "Excellent temperature performance",
        "High suspension stability",
        "Ceramic-like color and feel",
      ],
    },
    flameRetardant: {
      title: "Flame Retardant Black (Arkema FR512)",
      description:
        "Flame Retardant Black (Arkema FR512) offers high strength and heat deflection temperature (HDT). It is liquid at room temperature and provides robust printing and processing capabilities.",
      benefits: [
        "High strength and heat deflection temperature (HDT)",
        "Liquid at room temperature",
        "Robust printing and processing",
      ],
    },
    esdBlack: {
      title: "ESD Black (Loctite 3380)",
      description:
        "ESD Black (Loctite 3380) is a high-temperature resistant resin with electrostatic dissipating (ESD) capabilities and high stiffness. Pairing it with our HPS technology results in parts that are very smooth, have an impressive chemical resistance, and a high heat deflection temperature (HDT) of 374°F (190°C).",
      benefits: [
        "High accuracy and fine detail printing",
        "Displays electrostatic dissipative properties (ESD)",
        "Excellent stiffness and versatility",
      ],
    },
  };

  const currentMaterial =
    materialContent[activeMaterial as keyof typeof materialContent];

  // Compare HPS Material Properties Data
  const hpsUsData = [
    {
      material: "Tough Black (Loctite Henkel 3843)",
      hardness: "85A",
      tensileStrength: "8,700 psi",
      elongation: "17.5%",
    },
    {
      material: "Ceramic-Filled (BASF 3280)",
      hardness: "n/a",
      tensileStrength: "10,900 psi",
      elongation: "1%",
    },
    {
      material: "Flame Retardant Black (Arkema FR512)",
      hardness: "80A",
      tensileStrength: "7,500 psi",
      elongation: "60%",
    },
    {
      material: "ESD Black (Loctite 3380)",
      hardness: "85A",
      tensileStrength: "8,200 psi",
      elongation: "15%",
    },
  ];

  const hpsMetricData = [
    {
      material: "Tough Black (Loctite Henkel 3843)",
      hardness: "85A",
      tensileStrength: "60 Mpa",
      elongation: "17.5%",
    },
    {
      material: "Ceramic-Filled (BASF 3280)",
      hardness: "n/a",
      tensileStrength: "75 Mpa",
      elongation: "1%",
    },
    {
      material: "Flame Retardant Black (Arkema FR512)",
      hardness: "80A",
      tensileStrength: "52 Mpa",
      elongation: "60%",
    },
    {
      material: "ESD Black (Loctite 3380)",
      hardness: "85A",
      tensileStrength: "56 Mpa",
      elongation: "15%",
    },
  ];

  const currentHpsData = unit === "us" ? hpsUsData : hpsMetricData;

  // Compare Material Properties Data
  const compareUsData = [
    {
      material: "Flame Retardant Black (Arkema FR512)",
      color: "Black",
      tensileStrength: "6.0916 ksi",
      tensileModulus: "652.7 ksi",
      elongation: "4.2%",
    },
    {
      material: "Tough Black",
      color: "Black",
      tensileStrength: "7.4 ksi",
      tensileModulus: "262 ksi",
      elongation: "43%",
    },
    {
      material: "Ceramic-Filled",
      color: "Off-white",
      tensileStrength: "12.6 ksi",
      tensileModulus: "1,537 ksi",
      elongation: "1.30%",
    },
    {
      material: "ESD Black (Loctite 3380)",
      color: "Black",
      tensileStrength: "6.5267 ksi",
      tensileModulus: "420.6 ksi",
      elongation: "1.0%",
    },
  ];

  const compareMetricData = [
    {
      material: "Flame Retardant Black (Arkema FR512)",
      color: "Black",
      tensileStrength: "42 MPa",
      tensileModulus: "4,500 MPa",
      elongation: "4.2%",
    },
    {
      material: "Tough Black",
      color: "Black",
      tensileStrength: "51 MPa",
      tensileModulus: "1,806 MPa",
      elongation: "10%",
    },
    {
      material: "Ceramic-Filled",
      color: "Off-white",
      tensileStrength: "87 MPa",
      tensileModulus: "10,597 MPa",
      elongation: "1.30%",
    },
    {
      material: "ESD Black (Loctite 3380)",
      color: "Black",
      tensileStrength: "45 MPa",
      tensileModulus: "2,900 MPa",
      elongation: "1.0%",
    },
  ];

  const currentCompareData =
    compareUnit === "us" ? compareUsData : compareMetricData;

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Advanced Photopolymers for 3D Printing"
        desc="Our HPS technology delivers high-quality 3D-printed parts"
        image="/Assets/Images/services/3d-printing/advanced-photopolymers/hero.png"
        firstButton={{ title: "Upload A Part", route: "/" }}
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
                  {["Capabilities", "SLA Materials", "Surface Finishes"].map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block text-gray-500 hover:text-[#0099ff] transition-colors duration-200 text-sm py-1">
                        → {item}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3">
              {/* Beyond Prototyping Section */}
              <div id="what-is-stereolithography" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Beyond Prototyping
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  When your project requires advanced mechanical properties
                  beyond stereolithography (SLA) and PolyJet, explore our
                  advanced photopolymer materials unlocked by Axtra3D Hybrid
                  PhotoSynthesis (HPS) technologies. HPS leverages the best
                  features of Carbon digital light synthesis (DLS) printers,
                  such as speed, near-isotropic parts, and smooth surface
                  finish, but adds the greater speed and higher resolution of
                  stereolithography (SLA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hybrid PhotoSynthesis (HPS) Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Hybrid PhotoSynthesis (HPS)
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                HPS technology integrates both a precision laser and a digital
                light processing (DLP) system to simultaneously image internal
                and external structures. This dual approach allows the Extra3D
                printer to overcome traditional limitations and produce
                exceptionally detailed parts with unmatched speed and quality.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Common applications for HPS are:
              </h3>
              <ul className="space-y-2">
                {[
                  "High accuracy features for testing and validation.",
                  "Production grade parts with excellent throughput.",
                  "Glass-like surface finishes for cosmetic prototypes.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/3d-printing/advanced-photopolymers/hps-ceramic-filled-part.jpg"
                alt="Hybrid PhotoSynthesis (HPS) Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HPS Material Options Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Dynamic Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                HPS Material Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                  {currentMaterial.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentMaterial.description}
                </p>

                <h4 className="font-semibold text-[#0B1221] text-lg mb-3">
                  Primary Benefits:
                </h4>
                <ul className="space-y-2">
                  {currentMaterial.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Navigation List */}
            <div className="flex-1">
              <div className="bg-[#F0F8FF] rounded-xl overflow-hidden sticky top-32">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setActiveMaterial(material.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-4 ${
                      activeMaterial === material.id
                        ? "bg-white border-l-[#96E92A] text-[#0B1221] font-semibold shadow-sm"
                        : "border-l-transparent text-gray-600 hover:bg-white/50 hover:text-[#0B1221]"
                    }`}>
                    {material.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare HPS Material Properties Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare HPS Material Properties
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
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[100px]">
                    Hardness
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Tensile Strength
                  </th>
                  <th className="text-left p-4 font-semibold min-w-[100px]">
                    Elongation
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentHpsData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    <td className="p-4 text-gray-700 text-sm font-medium">
                      {row.material}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.hardness}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
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

      <GuideDownload
        title="3D Printing Surface Finish Guide"
        desc="Get this quick reference guide to explore your surface finish options across our six 3D printing technologies."
      />

      {/* HPS Guidelines and Capabilities Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              HPS Guidelines and Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for HPS include important design
              considerations to help improve part manufacturability, enhance
              cosmetic appearance, and reduce overall production time.
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

                {/* Description */}
                {"description" in currentContent &&
                  currentContent.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentContent.description}
                    </p>
                  )}

                {/* List for Special Operations */}
                {"list" in currentContent && currentContent.list && (
                  <ul className="space-y-2 mb-6">
                    {currentContent.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Single Table */}
                {"table" in currentContent && currentContent.table && (
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

                {/* Multiple Tables for Minimum Feature Size */}
                {"tables" in currentContent && currentContent.tables && (
                  <div className="space-y-8">
                    {currentContent.tables.map((table, tableIdx) => (
                      <div key={tableIdx}>
                        <h4 className="text-lg font-bold text-[#0B1221] mb-3">
                          {table.title}
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-[#0B1221] text-white">
                                {table.headers.map((header, idx) => (
                                  <th
                                    key={idx}
                                    className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row, rowIdx) => (
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
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Material Properties Section - Last Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare Material Properties
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setCompareUnit("us")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                compareUnit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              US (Imperial)
            </button>
            <button
              onClick={() => setCompareUnit("metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                compareUnit === "metric"
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
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[200px]">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[100px]">
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
                {currentCompareData.map((row, idx) => (
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

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Surface Finish Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Surface Finish on HPS Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Unfinished */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Unfinished
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dots, or standing nibs, remain evident on the bottom of the
                  part from the support structure remnants.
                </p>
              </div>

              {/* Natural (Default) */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Natural (Default)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Supported surfaces are sanded down to eliminate support nibs.
                </p>
              </div>

              {/* Standard */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Standard
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Supported surfaces are sanded, and the entire part is finely
                  blasted for a consistent look. Note that the layers are still
                  present.
                </p>
              </div>

              {/* Custom */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Custom
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Secondary options include a primer or paint that can be
                  applied as well as taps and inserts.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - How Does HPS Work? */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does HPS Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                One answer is fast—really fast. Two established technologies
                team up to create a sum that is greater than its parts. Like
                Carbon DLS, light is used to quickly harden liquid resin to
                create various geometries. HPS takes it a step further by adding
                a laser (as with SLA) to add precision and speed. When one layer
                is complete, the build platform rises and the process repeats
                until the part is complete. In the end, you get both the speed
                of Carbon DLS, and feature details, resolution, and build volume
                of SLA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
