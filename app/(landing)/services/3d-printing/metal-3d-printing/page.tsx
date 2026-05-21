"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("maxDimensions");

  const tabs = [
    { id: "maxDimensions", label: "Max Dimensions" },
    { id: "layerThickness", label: "Layer Thickness" },
    { id: "minFeatureSize", label: "Minimum Feature Size" },
    { id: "tolerances", label: "Tolerances" },
    { id: "surfaceFinishes", label: "Surface Finishes" },
  ];

  const content = {
    maxDimensions: {
      title: "Max Dimensions",
      description: "",
      table: {
        headers: ["", "US", "Metric"],
        rows: [
          {
            label: "Normal Resolution",
            us: "9.6 in. x 9.6 in. x 13.0 in.",
            metric: "245mm x 245mm x 330mm",
          },
          {
            label: "X Line*",
            us: "31.5 in. x 15.7 in. x 19.7 in.",
            metric: "400mm x 800mm x 500mm",
          },
          {
            label: "High Resolution",
            us: "3.5 in. x 3.5 in. x 2.7 in.",
            metric: "88mm x 88mm x 70mm",
          },
          {
            label: "Aluminum (High Res)",
            us: "3.8 in. x 3.8 in. x 3.7 in.",
            metric: "98mm x 98mm x 94mm",
          },
        ],
      },
      note: "*At this time, Inconel 718 and Aluminum are the only materials available on our large format, X Line machine.",
    },
    layerThickness: {
      title: "Layer Thickness",
      description: "",
      table: {
        headers: ["", "US", "Metric"],
        rows: [
          {
            label: "Normal Resolution",
            us: "0.0012 in.",
            metric: "30 microns",
          },
          { label: "High Resolution", us: "0.00079 in.", metric: "20 microns" },
        ],
      },
      note: "*At this time, Inconel 718 and Aluminum are the only materials available on our large format, X Line machine.",
    },
    minFeatureSize: {
      title: "Minimum Feature Size",
      description: "",
      table: {
        headers: ["", "US", "Metric"],
        rows: [
          {
            label: "Normal Resolution (Inconel)",
            us: "0.00236 in.",
            metric: "60 microns",
          },
          {
            label: "Normal Resolution (Aluminum)",
            us: "0.00157 in.",
            metric: "40 microns",
          },
          { label: "High Resolution", us: "0.00079 in.", metric: "20 microns" },
        ],
      },
      note: "*At this time, Inconel 718 and Aluminum are the only materials available on our large format, X Line machine.",
    },
    tolerances: {
      title: "Metal 3D Printing Tolerances",
      description:
        "For well-designed parts, tolerances in the X/Y dimension of ±0.003 in. (0.075mm) for first inch plus 0.1% of nominal length (0.001mm/mm), and Z dimension tolerances of ±0.006 in. for first inch plus 0.1% of nominal length, can typically be achieved. Note that tolerances may change depending on part geometry.",
      table: {
        headers: ["", "US", "Metric"],
        rows: [
          {
            label: "X/Y Dimension",
            us: "±0.003 in. for first inch + 0.1%",
            metric: "±0.075mm for first mm + 0.001mm/mm",
          },
          {
            label: "Z Dimension",
            us: "±0.006 in. for first inch + 0.1%",
            metric: "±0.153mm for first mm + 0.001mm/mm",
          },
          { label: "X Line*", us: "0.006 in.", metric: "0.153mm" },
        ],
      },
      note: "*At this time, Inconel 718 and Aluminum are the only materials available on our large format, X Line machine.",
    },
    surfaceFinishes: {
      title: "Surface Finishes",
      description: "",
      table: {
        headers: ["Finishing Option", "Description"],
        rows: [
          {
            label: "Standard",
            desc: "Support structures are removed and layer lines are visible.",
          },
          {
            label: "Brushed",
            desc: "Indicated surfaces will be directionally sanded to desired grit level.",
          },
          {
            label: "Satin",
            desc: "Indicated surfaces will be sanded to desired grit level, grit blasted and then bead blasted.",
          },
          {
            label: "Polished",
            desc: "Indicated surfaces will be sanded to desired grit level. Surfaces will be somewhat reflective and bright, but some sanding lines or marks may still be visible.",
          },
        ],
      },
      note: null,
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  //   second tabels data
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "Stainless Steel (17-4 PH)",
      resolution: "20 µm",
      condition: "Solution & Aged (H900)",
      ultimateTensile: "199",
      yieldStress: "178",
      elongation: "10",
      hardness: "42 HRC",
    },
    {
      material: "Stainless Steel (17-4 PH)",
      resolution: "30 µm",
      condition: "Solution & Aged (H900)",
      ultimateTensile: "198",
      yieldStress: "179",
      elongation: "13",
      hardness: "42 HRC",
    },
    {
      material: "Stainless Steel (316L)",
      resolution: "20 µm",
      condition: "Stress Relieved",
      ultimateTensile: "82",
      yieldStress: "56",
      elongation: "78",
      hardness: "90 HRB",
    },
    {
      material: "Stainless Steel (316L)",
      resolution: "30 µm",
      condition: "Stress Relieved",
      ultimateTensile: "85",
      yieldStress: "55",
      elongation: "75",
      hardness: "88 HRB",
    },
    {
      material: "Aluminum (AlSi10Mg)",
      resolution: "20 µm",
      condition: "Stress Relieved",
      ultimateTensile: "39",
      yieldStress: "26",
      elongation: "15",
      hardness: "42 HRB",
    },
    {
      material: "Aluminum (AlSi10Mg)",
      resolution: "30 µm",
      condition: "Stress Relieved",
      ultimateTensile: "50",
      yieldStress: "33",
      elongation: "8",
      hardness: "59 HRB",
    },
    {
      material: "Cobalt Chrome (Co28Cr6Mo)",
      resolution: "20 µm",
      condition: "As Built",
      ultimateTensile: "182",
      yieldStress: "112",
      elongation: "17",
      hardness: "39 HRC",
    },
    {
      material: "Cobalt Chrome (Co28Cr6Mo)",
      resolution: "30 µm",
      condition: "As Built",
      ultimateTensile: "176",
      yieldStress: "119",
      elongation: "14",
      hardness: "38 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "20 µm",
      condition: "Stress Relieved",
      ultimateTensile: "143",
      yieldStress: "98",
      elongation: "36",
      hardness: "33 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "30 µm",
      condition: "Stress Relieved",
      ultimateTensile: "144",
      yieldStress: "91",
      elongation: "39",
      hardness: "30 HRC",
    },
    {
      material: "Titanium (Ti6Al4V)",
      resolution: "60 µm",
      condition: "Solution & Aged per AMS 5663",
      ultimateTensile: "208",
      yieldStress: "175",
      elongation: "18",
      hardness: "46 HRC",
    },
    {
      material: "Titanium (Ti6Al4V)",
      resolution: "60 µm",
      condition: "Stress Relieved",
      ultimateTensile: "139",
      yieldStress: "83",
      elongation: "40",
      hardness: "27 HRC",
    },
    {
      material: "Titanium (Ti6Al4V) - Aged",
      resolution: "60 µm",
      condition: "Solution & Aged per AMS 5663",
      ultimateTensile: "201",
      yieldStress: "174",
      elongation: "19",
      hardness: "45 HRC",
    },
    {
      material: "Titanium (Ti6Al4V) - 20µm",
      resolution: "20 µm",
      condition: "Stress Relieved",
      ultimateTensile: "153",
      yieldStress: "138",
      elongation: "15",
      hardness: "35 HRC",
    },
    {
      material: "Titanium (Ti6Al4V) - 30µm",
      resolution: "30 µm",
      condition: "Stress Relieved",
      ultimateTensile: "144",
      yieldStress: "124",
      elongation: "18",
      hardness: "33 HRC",
    },
  ];

  const metricData = [
    {
      material: "Stainless Steel (17-4 PH)",
      resolution: "20 μm",
      condition: "Solution & Aged (H900)",
      ultimateTensile: "1,372",
      yieldStress: "1,227",
      elongation: "10",
      hardness: "42 HRC",
    },
    {
      material: "Stainless Steel (17-4 PH)",
      resolution: "30 μm",
      condition: "Solution & Aged (H900)",
      ultimateTensile: "1,365",
      yieldStress: "1,234",
      elongation: "13",
      hardness: "42 HRC",
    },
    {
      material: "Stainless Steel (316L)",
      resolution: "20 μm",
      condition: "Stress Relieved",
      ultimateTensile: "565",
      yieldStress: "386",
      elongation: "78",
      hardness: "90 HRB",
    },
    {
      material: "Stainless Steel (316L)",
      resolution: "30 μm",
      condition: "Stress Relieved",
      ultimateTensile: "586",
      yieldStress: "379",
      elongation: "75",
      hardness: "88 HRB",
    },
    {
      material: "Aluminum (AlSi10Mg)",
      resolution: "20 μm",
      condition: "Stress Relieved",
      ultimateTensile: "268",
      yieldStress: "180",
      elongation: "15",
      hardness: "46 HRB",
    },
    {
      material: "Aluminum (AlSi10Mg)",
      resolution: "30 μm",
      condition: "Stress Relieved",
      ultimateTensile: "345",
      yieldStress: "228",
      elongation: "8",
      hardness: "59 HRB",
    },
    {
      material: "Cobalt Chrome (Co28Cr6Mo)",
      resolution: "20 μm",
      condition: "As Built",
      ultimateTensile: "1,255",
      yieldStress: "772",
      elongation: "17",
      hardness: "39 HRC",
    },
    {
      material: "Cobalt Chrome (Co28Cr6Mo)",
      resolution: "30 μm",
      condition: "As Built",
      ultimateTensile: "1,213",
      yieldStress: "820",
      elongation: "14",
      hardness: "38 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "20 μm",
      condition: "Stress Relieved",
      ultimateTensile: "986",
      yieldStress: "676",
      elongation: "36",
      hardness: "33 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "30 μm",
      condition: "Stress Relieved",
      ultimateTensile: "993",
      yieldStress: "627",
      elongation: "39",
      hardness: "30 HRC",
    },
    {
      material: "Titanium (Ti6Al4V)",
      resolution: "60 μm",
      condition: "Solution & Aged per AMS 5663",
      ultimateTensile: "1,434",
      yieldStress: "1,207",
      elongation: "18",
      hardness: "46 HRC",
    },
    {
      material: "Titanium (Ti6Al4V)",
      resolution: "60 μm",
      condition: "Stress Relieved",
      ultimateTensile: "958",
      yieldStress: "572",
      elongation: "40",
      hardness: "27 HRC",
    },
    {
      material: "Titanium (Ti6Al4V) - Aged",
      resolution: "60 μm",
      condition: "Solution & Aged per AMS 5663",
      ultimateTensile: "1,386",
      yieldStress: "1,200",
      elongation: "19",
      hardness: "45 HRC",
    },
    {
      material: "Titanium (Ti6Al4V) - 20μm",
      resolution: "20 μm",
      condition: "Stress Relieved",
      ultimateTensile: "1,055",
      yieldStress: "951",
      elongation: "15",
      hardness: "35 HRC",
    },
    {
      material: "Titanium (Ti6Al4V) - 30μm",
      resolution: "30 μm",
      condition: "Stress Relieved",
      ultimateTensile: "993",
      yieldStress: "855",
      elongation: "18",
      hardness: "33 HRC",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Metal 3D Printing Service"
        desc="Get quality metal 3D-printed prototypes and production parts. Request an online quote today."
        image="/Assets/Images/services/3d-printing/metal-3d-printing/hero.webp"
        firstButton={{ title: "Upload a part", route: "/" }}
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
                    "Compare Material Properties",
                    "Material Options",
                    "Post-Processing",
                    "Why Metal 3D Printing?",
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
                  Direct metal laser sintering (DMLS) is an industrial metal 3D
                  printing process that builds fully functional metal prototypes
                  and production parts in 7 days or less. A range of metals
                  produce final parts that can be used for end-use applications.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Metal 3D printing technology is commonly used for:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "Prototyping in production-grade materials",
                    "Complex geometries",
                    "Functional, end-use parts",
                    "Reducing metal components in an assembly",
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

      <GuideDownload
        title="Metal 3D Printing Guide"
        desc="Jump start your metal 3D printing with this guide that covers material selection, design, post-processing, and quality inspections. "
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Metal 3D Printing Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for metal 3D printing include important
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

                {/* Description */}
                {currentContent.description && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentContent.description}
                  </p>
                )}

                {/* Table */}
                {currentContent.table && (
                  <div className="overflow-x-auto mb-6">
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
                            <td className="p-3 text-gray-700 font-medium text-sm">
                              {row.label}
                            </td>
                            {"us" in row && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.us}
                              </td>
                            )}
                            {"metric" in row && row.metric && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.metric}
                              </td>
                            )}
                            {"desc" in row && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.desc}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Note */}
                {currentContent.note && (
                  <div className="mt-4 p-3 bg-[#F0F8FF] rounded-lg">
                    <p className="text-sm text-gray-500 italic">
                      {currentContent.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-4">
                Print it Better
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Get high quality 3D-printed parts fast with support from
                engineers who know additive inside and out. Build
                high-performing, reliable parts with six 3D printing
                technologies and 60+ materials.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🖨️</span>
                <p className="text-gray-500 text-sm mt-2">3D Printing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare Material Properties
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUnit("us")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                unit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              US
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                unit === "metric"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metric
            </button>
          </div>

          {/* Material Properties Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Materials
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]">
                    Resolution
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Condition
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[120px]">
                    Ultimate Tensile Strength{" "}
                    {unit === "us" ? "(ksi)" : "(MPa)"}
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]">
                    Yield Stress {unit === "us" ? "(ksi)" : "(MPa)"}
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[80px]">
                    Elongation (%)
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[100px]">
                    Hardness
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 text-gray-700 font-medium">
                      {row.material}
                    </td>
                    <td className="p-3 text-gray-600">{row.resolution}</td>
                    <td className="p-3 text-gray-600">{row.condition}</td>
                    <td className="p-3 text-gray-600">{row.ultimateTensile}</td>
                    <td className="p-3 text-gray-600">{row.yieldStress}</td>
                    <td className="p-3 text-gray-600">{row.elongation}</td>
                    <td className="p-3 text-gray-600">{row.hardness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resolution Note */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">
                20 µm = high resolution (HR)
              </span>
              <br />
              30, 40, and 60 µm = normal resolution (NR)
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 italic">
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
    </div>
  );
}
