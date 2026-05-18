"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function SheetMetalTables() {
  const [activeTab, setActiveTab] = useState<
    "standard" | "advanced" | "finishing"
  >("standard");

  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
            Sheet Metal Capability to Lead Time Map
          </h2>
          <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Our online sheet metal fabrication service delivers components and
            assemblies to you in days. We offer a broad range of in-house
            fabrication and finishing capabilities to produce precision quality
            functional or end-use parts.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("standard")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "standard"
                ? "bg-[#0B1221] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}>
            Standard (3-5 Day)
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "advanced"
                ? "bg-[#0B1221] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}>
            Advanced Capabilities
          </button>
          <button
            onClick={() => setActiveTab("finishing")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "finishing"
                ? "bg-[#0B1221] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}>
            Finishing & Assembly
          </button>
        </div>

        {/* Tab Content - Standard (3-5 Day) */}
        {activeTab === "standard" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg">
                    Fabrication Capabilities
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Eligibility
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Applications
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600 bg-white align-top">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Cutting (laser or punch)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Deburring
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Forming/bending (≤12 bends)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Hardware insertion (extensive PEM® library)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Tapping/countersinks
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50 align-top">
                    <p className="font-medium">Material thicknesses:</p>
                    <p className="text-sm mt-1">≤0.125 in. (≤3.175 mm)</p>
                  </td>
                  <td className="p-4 text-gray-600 bg-white align-top">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Brackets
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Covers
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Panels
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Flat geometries
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#96E92A]" />
                        Mounts
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content - Advanced Capabilities */}
        {activeTab === "advanced" && (
          <div className="space-y-8">
            {/* Fabrication Capabilities Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Fabrication Capabilities
              </h3>
              <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">
                      All 3-day fabrication options plus CNC-machined features
                      (pockets, flanges, other features)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">
                      Additional forming options (complex sequencing or setups,
                      &gt;12 bends)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">
                      Intricately formed features (hems, jogs/offsets)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">Punch-formed features</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lead Time Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#F0F8FF] rounded-xl p-5 text-center">
                <h4 className="text-lg font-bold text-[#0B1221]">
                  3-day Lead Time
                </h4>
              </div>
              <div className="bg-[#F0F8FF] rounded-xl p-5 text-center">
                <h4 className="text-lg font-bold text-[#0B1221]">
                  5-day Lead Time
                </h4>
              </div>
              <div className="bg-[#F0F8FF] rounded-xl p-5 text-center">
                <h4 className="text-lg font-bold text-[#0B1221]">
                  Additional Customizations
                </h4>
              </div>
            </div>

            {/* Eligibility & Applications Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg">
                      Eligibility
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Applications
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-gray-600 bg-white align-top">
                      <p className="font-medium">All material thicknesses:</p>
                      <p className="text-sm mt-1">
                        0.024 in. - 0.250 in. (0.61mm - 6.35mm)
                      </p>
                    </td>
                    <td className="p-4 text-gray-600 bg-gray-50 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#96E92A]" />
                          Complex internal componentry
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#96E92A]" />
                          Parts with features critical to quality or
                          functionality
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#96E92A]" />
                          Enclosure or chassis housings
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content - Finishing & Assembly */}
        {activeTab === "finishing" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fabrication Capabilities */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Fabrication Capabilities
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">Welding (add 1 day)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">Assembly (add 1-3 days)</span>
                </li>
              </ul>
            </div>

            {/* Finishing Options */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Finishing Options
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">
                    Powder Coating (add 2 days)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">
                    Plating/coating (add 2 days)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">Masking (add 1-2 days)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">
                    Silk screening (add 1 day)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#96E92A] flex-shrink-0" />
                  <span className="text-gray-700">
                    Part marking (add 1 day)
                  </span>
                </li>
              </ul>
            </div>

            {/* Additional Customizations */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Additional Customizations
              </h3>
              <div className="mt-4">
                <h4 className="font-semibold text-[#0B1221] mb-2">
                  Applications
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">Weldments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">
                      Multi-component assemblies
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#96E92A] flex-shrink-0" />
                    <span className="text-gray-700">
                      End-user-facing projects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
