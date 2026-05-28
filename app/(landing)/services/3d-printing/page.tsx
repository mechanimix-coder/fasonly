"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PlayCircle, Quote } from "lucide-react";
import {
  companyLogos,
  usTableData,
  metricTableData,
  metalsData,
  faqItems,
} from "@/data";
import React, { useState } from "react";
import Hint from "@/component/UI/Hint";
import MetalsSection from "@/component/landing/MetalsSection";
import GuideDownload from "@/component/landing/GuideDownload";
import { Play } from "next/font/google";
import Accordion from "@/component/landing/Accordion";
import Blog from "@/component/landing/Blog";
import ServicesHero from "@/component/landing/ServicesHero";
export default function ThreePrinting() {
  const [activeTable, setActiveTable] = useState<"us" | "metric">("us");

  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Online 3D Printing Service for Custom Parts"
        desc=" On-demand 3D printing for rapid prototyping and production in as
                fast as 1 day. Get an instant 3D printing quote with DFAM
                analysis today."
        image="/Assets/Images/services/injection-molding/3dp.webp"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
      />

      {/* cards section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              3D Printing Processes
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our online 3D printing service enables you to 3D print your custom
              part on demand. We offer six 3D printing technologies to transform
              your 3D files into plastic, metal, and elastomeric parts. With
              more than 120 3D printers, we have unmatched capacity that
              reliably delivers parts within days. In addition to a broad
              material selection, we offer several post-processing options to
              improve cosmetics or enhance mechanical properties.
            </p>
          </div>

          {/* Cards Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Metal 3D Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Metal 3D Printing
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Direct metal laser sintering (DMLS) uses a fiber laser system
                  that draws onto a surface of atomized metal powder, welding
                  the powder into fully dense metal parts.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2 - Stereolithography (SLA) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">💧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Stereolithography (SLA)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Stereolithography (SLA) uses an ultraviolet laser that draws
                  on the surface of liquid thermoset resin to create thousands
                  of thin layers until final parts are formed.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 3 - Selective Laser Sintering (SLS) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⚡</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Selective Laser Sintering (SLS)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Selective laser sintering (SLS) uses a CO₂ laser that fuses
                  nylon-based powder, layer by layer until final thermoplastic
                  parts are built.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 4 - Fused Deposition Modeling (FDM) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🖨️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Fused Deposition Modeling (FDM)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Fused deposition modeling (FDM) extrudes thermoplastic
                  filaments layer by layer to build durable, accurate, and
                  cost-effective functional prototypes and end-use parts.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 5 - Multi Jet Fusion (MJF) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">✨</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Multi Jet Fusion (MJF)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Multi Jet Fusion (MJF) uses an inkjet array to apply fusing
                  and detailing agents across nylon powder beds, creating
                  strong, accurate, and detailed production-grade parts.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 6 - PolyJet */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🎨</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PolyJet
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  PolyJet technology jets photopolymer droplets onto a build
                  platform and instantly cures them with UV light, producing
                  smooth, detailed parts with multiple material properties.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section 1 - FDM 3D Printing (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🖨️</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                FDM 3D Printing Through Fasonly Network
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                FDM (fused deposition modeling) 3D printing builds parts by
                heating and extruding thermoplastics layer-by-layer. FDM is a
                good 3D printing option for strong prototypes and functional
                parts. Material options include popular thermoplastics like ABS,
                TPU, PEI, PETG, and more. Get an instant quote for FDM parts
                within days.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 2 - Print it Better (Content Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F0F8FF] rounded-2xl p-8 md:p-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Print it Better
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
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
            <div className="relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare 3D Printing Processes
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              New to our 3D printing service and not sure which additive
              technology is right for your 3D design? Compare the capabilities
              of each process below to see what fits your application's
              requirements.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTable("us")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTable === "us"
                  ? "bg-[#0B1221] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              US
            </button>
            <button
              onClick={() => setActiveTable("metric")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTable === "metric"
                  ? "bg-[#0B1221] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metric
            </button>
          </div>

          {/* US Table */}
          {activeTable === "us" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold">Materials</th>
                    <th className="text-left p-4 font-semibold">
                      Max Part Size
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Min Feature Size
                    </th>
                    <th className="text-left p-4 font-semibold">Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  {usTableData.map((row, idx) => (
                    <React.Fragment key={idx}>
                      {/* Technology Row */}
                      <tr className="bg-gray-100">
                        <td
                          colSpan={4}
                          className="p-3 font-bold text-[#0B1221]">
                          {row.technology}
                        </td>
                      </tr>
                      {/* Materials Rows */}
                      {row.materials.map((material, materialIdx) => (
                        <tr
                          key={`${idx}-${materialIdx}`}
                          className="border-b border-gray-200">
                          <td className="p-3 text-gray-600 align-top">
                            {material}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {row.maxPartSize.map((size, sizeIdx) => (
                                  <li key={sizeIdx}>{size}</li>
                                ))}
                              </ul>
                            ) : null}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.minFeatureSize : ""}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.tolerance : ""}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Metric Table */}
          {activeTable === "metric" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold">Materials</th>
                    <th className="text-left p-4 font-semibold">
                      Max Part Size
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Min Feature Size
                    </th>
                    <th className="text-left p-4 font-semibold">Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  {metricTableData.map((row, idx) => (
                    <React.Fragment key={idx}>
                      {/* Technology Row */}
                      <tr className="bg-gray-100">
                        <td
                          colSpan={4}
                          className="p-3 font-bold text-[#0B1221]">
                          {row.technology}
                        </td>
                      </tr>
                      {/* Materials Rows */}
                      {row.materials.map((material, materialIdx) => (
                        <tr
                          key={`${idx}-${materialIdx}`}
                          className="border-b border-gray-200">
                          <td className="p-3 text-gray-600 align-top">
                            {material}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {row.maxPartSize.map((size, sizeIdx) => (
                                  <li key={sizeIdx}>{size}</li>
                                ))}
                              </ul>
                            ) : null}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.minFeatureSize : ""}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.tolerance : ""}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Hint />

      <MetalsSection metals={metalsData} title="Metal 3D Printing Materials" />
      <GuideDownload
        title={"3D Printing Surface Finish Guide"}
        desc={
          "Bu kapsamlı referans kılavuzu, teklif alma, tasarım analizi ve sevkiyattan, modelinizin kalıplama için optimize edilmesini sağlayan en iyi uygulamalara kadar her şeyi size adım adım gösterir."
        }
        img={"/"}
      />

      {/* Section 1: Sample Quote - Two Columns */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sample Quote
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Explore our material feature that lets you compare the cost of
                3DP processes, materials, and resolutions.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                View Sample Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Testimonial - Black and White */}
      <div className="w-full bg-[#0B1221] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Testimonial Text */}
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-6">
              &quot;Great service at a fair price and the quality of my parts is
              fantastic. Keep up the great work.&quot;
            </p>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto mb-4"></div>

            {/* Author */}
            <p className="text-gray-400 font-medium">
              — Bob Koch, Johnson & Johnson - Ethicon
            </p>
          </div>
        </div>
      </div>

      {/* 3D Printing Toolkit Section - Two Columns (Image Left, Content Right) */}
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🛠️</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Printing Toolkit
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Get in-depth design advice to optimize 3D-printed parts.
                Designing with additive manufacturing in mind can accelerate
                production time and reduce overall cost.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Check Out The Toolkit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Surface Finish Options Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Surface Finish Options for 3D Prints
          </h2>

          {/* Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold w-1/4">
                    Finish Type
                  </th>
                  <th className="text-left p-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Unfinished
                  </td>
                  <td className="p-4 text-gray-600">
                    Dots, or standing "nibs," remain evident on the bottom of
                    the part from the support structure remnants.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Natural
                  </td>
                  <td className="p-4 text-gray-600">
                    Supported surfaces are sanded down to eliminate the support
                    nibs.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Standard
                  </td>
                  <td className="p-4 text-gray-600">
                    Supported surfaces are sanded, and the entire part is finely
                    blasted for a consistent look. Note that the layers are
                    still present.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Custom
                  </td>
                  <td className="p-4 text-gray-600">
                    Soft-touch paint, clear part finishing, painting, masking,
                    color matching, decals/graphic, and texture finishes are
                    available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Two Images Below Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image - Person working on 3D printer */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-5xl block mb-2">👨‍🔧</span>
                  <p className="text-gray-500 text-sm">Working on 3D printer</p>
                </div>
              </div>
            </div>

            {/* Right Image - 3D printer nozzle with resin */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-5xl block mb-2">🖨️</span>
                  <p className="text-gray-500 text-sm">
                    3D printer nozzle with resin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Finishing Section - Black Background */}
      <div className="w-full bg-[#0B1221] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Custom Finishing
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Looking to boost the strength, clarity, or appearance of your
            3D-printed parts? Choose from microfluidic and micro-resolution
            materials, metal plating, secondary machining, and custom finishes
            like painting, clear coating, and decaling.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="text-left p-4 font-semibold w-1/4">
                    Finish Type
                  </th>
                  <th className="text-left p-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Clear Coat
                  </td>
                  <td className="p-4 text-gray-300">
                    Clear cosmetic finish that can be applied to ABS-Like
                    Translucent/Clear (WaterShed XC 11122) and PC-Like
                    Translucent/Clear (Accura 60) materials.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Painting
                  </td>
                  <td className="p-4 text-gray-300">
                    After smoothing the part with sanding and polishing, parts
                    can be painted with automotive-grade paint. Provide a
                    pantone color with your quote request. We also offer
                    soft-touch painting.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Plating
                  </td>
                  <td className="p-4 text-gray-300">
                    Electroless nickel plating can be used to achieve parts that
                    are similar to cast aluminum or magnesium.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Dyeing
                  </td>
                  <td className="p-4 text-gray-300">
                    Dyeing is another method for adding color to 3D prints. This
                    is a faster option with a limited color selection, so is a
                    more cost-effective choice than painting.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Decaling
                  </td>
                  <td className="p-4 text-gray-300">
                    Decaling can be used to add a logo or other graphics to
                    boost cosmetics or function.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Polishing
                  </td>
                  <td className="p-4 text-gray-300">
                    We can polish parts to a mirror-like finish. If this is a
                    requirement, we ask that you provide either a drawing or
                    image that indicates your finish expectations.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Heat Treatment
                  </td>
                  <td className="p-4 text-gray-300">
                    Harden and strengthen metal 3D prints with multiple heat
                    treatment options: NADCAP heat treatment, hot isostatic
                    pressing (HIP), solution annealing, and aging.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Machining
                  </td>
                  <td className="p-4 text-gray-300">
                    Machine metal 3D prints to achieve exceptional surface
                    finish quality or meet tight tolerances.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Why Choose Us for Custom 3D Printing - Two Columns (Content Left, Image Right) */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Why Choose Us for Custom 3D Printing?
              </h2>

              <div className="space-y-6">
                {/* Unmatched Quality */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                    Unmatched Quality
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get design feedback from our experienced engineering team
                    that has helped thousands of customers bring their products
                    to market with quality 3D-printed parts. We will also work
                    with you to determine optimal part orientation based on your
                    application's requirements.
                  </p>
                </div>

                {/* Wide Material Selection */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                    Wide Material Selection
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Across our six 3D printing technologies, we use a range of
                    commercial-grade thermoset resins, and thermoplastic and
                    metal powders to 3D print parts that are suitable for
                    various part applications and industries. If required for
                    your parts, we offer a variety of post-process options such
                    as heat treating, secondary machining, plating, painting,
                    and dyeing to further enhance mechanical properties and
                    cosmetics.
                  </p>
                </div>

                {/* Scale and Production */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                    Scale and Production
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our facility is home to more than 120 3D printing machines
                    that produce metal and plastic parts. This means we'll
                    always have capacity when you need parts fast—whether it's a
                    small batch of parts or production level volumes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-7xl block mb-3">🖨️</span>
                  <p className="text-gray-500 font-medium">
                    3D Printing Facility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What is 3D Printing? - Two Columns (Video Left, Content Right) */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              {/* Video thumbnail / player placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    What is 3D Printing?
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    FASONLY | Manufacturing Accelerated
                  </p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is 3D Printing?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                3D printing is a term used to describe a number of additive
                manufacturing technologies that produce parts one layer at a
                time from a 3D digital model.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some 3D printing machines will extrude a filament to create
                parts, while others use lasers to sinter or cure raw materials
                like metal or plastic powders and liquid resins.
              </p>
              <p className="text-gray-600 leading-relaxed">
                There are a variety of 3D printing technologies that differ in
                terms of materials, surface finish quality, cost, and quantity
                to name a few.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages of 3D Printing & Common Applications - Two Rows with Alternating Layout */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Advantages of 3D Printing (Image Right, Content Left) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Advantages of 3D Printing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Building parts layer-by-layer brings about many benefits that
                open up design possibilities that were previously unachievable
                through traditional processes like injection molding, machining,
                or casting.
              </p>
              <ul className="space-y-2">
                {[
                  "Complex, organic geometries with limited impact on part cost",
                  "Consolidation of multi-component assembly into a single part",
                  "No upfront tooling costs",
                  "Fast production for parts within 24 hours",
                  "Internal features for advanced heat transfer and flow applications",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📊</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Common 3D Printing Applications (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🏥</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Common 3D Printing Applications
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Additive manufacturing can be leveraged for both rapid
                prototyping and production in aerospace, medical, automotive,
                and other large industry sectors. Examples of typical parts,
                include:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "Form and fit prototypes",
                  "Housings and enclosures",
                  "Medical devices",
                  "Snap fits",
                  "Jigs and fixtures",
                  "Heat exchangers and heat sinks",
                  "Engine components",
                  "Fuel injectors",
                  "Surgical instrumentation",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* next section */}
      {/* Get an Instant 3D Printing Quote - Two Columns (Content Left, Video Right) */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Get an Instant 3D Printing Quote
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upload a 3D CAD file to get an instant quote on your 3D printing
                design. In our quoting platform, you can see real-time cost
                implications based on your choice of 3D printing material and
                resolution level.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions regarding your quote or design, you
                can then work with our applications engineering team and they
                will help guide you through the process.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Get Instant Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              {/* Video thumbnail / player placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Digital Quoting Enhancements for 3D Printing
                  </p>
                  <p className="text-gray-300 text-sm mt-1">FASONLY</p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>
          </div>
        </div>
      </div>
      {/* faqs section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl w-full flex  justify-center font-bold text-[#0B1221] mb-10">
            3D Printing FAQs
          </h2>
          <Accordion items={faqItems} />
        </div>
      </div>
      <Blog />
    </div>
  );
}
