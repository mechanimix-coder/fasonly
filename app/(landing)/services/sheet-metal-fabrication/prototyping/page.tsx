"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState<
    "standard" | "advanced" | "finishing"
  >("standard");
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Prototype Service for Components and Assemblies"
        desc="Receive pricing and lead times for your designs in minutes and get precision fabricated prototypes delivered to you in just days. With every quote, we offer 3D-visualized design for manufacturability feedback, plus, you can validate part designs and transition to production with confidence."
        image="/Assets/Images/services/sheet-metal-fabrication/prototyping/hero.png"
        firstButton={{ title: "Start a Project", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Jump to Section Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-[#0B1221] mb-4">
                  Learn More about our Sheet Metal Prototyping Service
                </h3>
                <div className="space-y-2">
                  {[
                    "Sheet Metal Capabilities",
                    "How Our Lead Times Work",
                    " Prototyping Advantages of Sheet Metal Fabrication",
                    "Product Applications for Prototyping",
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
              {/* Beyond Prototyping Section */}
              <div id="what-is-stereolithography" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Why Fasonly?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Quotes delivered in minutes and parts in days We quote and
                  manufacture both simple and complex sheet metal designs in a
                  fraction of the time of traditional methods. Upload,
                  configure, and order your parts on Monday and they are on your
                  desk by Friday. Repeatable process quality Our fabricators
                  have decades of experience in producing high-quality sheet
                  metal components and assemblies, ensuring that you and your
                  stakeholders can evaluate an accurate representation of your
                  design. Learn more about how we safeguard part quality.
                  Manufacturability analysis on every design Leverage our sheet
                  metal design for manufacturability (DFM) analysis tool for
                  3D-visualized insights into potential manufacturing challenges
                  and identify opportunities to optimize your design for speed
                  and cost. Capacity to produce thousands of unique designs
                  every month We fabricate thousands of unique sheet metal
                  designs of all shapes and sizes each month. Our automated
                  process provides on-time delivery reliability, so your
                  shipment arrives on time. Advanced design support for
                  assemblies and complex projects Our team of applications
                  engineers are trained sheet metal experts who are available to
                  consult with you on all aspects of your design. Whether you're
                  looking for advice on feature placement, tooling selection, or
                  assembly construction options, we answer your questions in a
                  free 30-minute virtual session. Schedule your session today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sheet Metal Capabilities
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-300 leading-relaxed mb-6">
                We have a broad selection of sheet metal fabrication
                capabilities for your prototype components and assembly
                projects. Our collection of manufacturing processes gets you
                simpler flat geometries, intricate formed parts, and complex
                welded assemblies at unparalleled speeds.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Explore our capabilities:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Laser cutting",
                  "Punching",
                  "Forming & Bending",
                  "Hardware insertion",
                  "Welding",
                  "Assembly",
                  "Finishing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-800">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/prototyping/smf-countersink-img.jpg"
                alt="Sheet Metal Capabilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              How Our Lead Times Work
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our digital sheet metal fabrication service delivers components
              and assemblies to you in just days. Review the tool below to see
              how your precision quality parts would qualify.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Fabrication Capabilities
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
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
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Cutting (laser or punch)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Deburring
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Forming/bending (≤12 bends)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Hardware insertion (extensive PEM® library)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Tapping/countersinks
                        </li>
                      </ul>
                    </td>
                    <td className="p-4 text-gray-600 bg-gray-50 align-top">
                      Material thicknesses: ≤0.125 in. (≤3.175mm)
                    </td>
                    <td className="p-4 text-gray-600 bg-white align-top">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Brackets
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Covers
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Panels
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Flat geometries
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Fabrication Capabilities
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      All 3-day fabrication options plus CNC-machined features
                      (pockets, flanges, other features)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Additional forming options (complex sequencing or setups,
                      &gt;12 bends)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Intricately formed features (hems, jogs/offsets)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Punch-formed features
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Eligibility
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  All material thicknesses:
                </p>
                <p className="text-gray-600 text-sm font-mono">
                  0.024 in. - 0.250 in. (0.61mm - 6.35mm)
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Applications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Complex internal componentry
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Parts with features critical to quality or functionality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Enclosure or chassis housings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab Content - Finishing & Assembly */}
          {activeTab === "finishing" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Fabrication Capabilities
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Welding (add 1 day)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Assembly (add 1-3 days)
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-[#0B1221] mt-6 mb-4">
                  Additional Customizations
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Powder coating (add 2 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Plating/coating (add 2 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Masking (add 1-2 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Silk screening (add 1 day)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Part marking (add 1 day)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Lead Times
                </h3>
                <p className="text-gray-600 text-sm mb-2">3-day Lead Time</p>
                <p className="text-gray-600 text-sm mb-4">5-day Lead Time</p>
                <h3 className="text-xl font-bold text-[#0B1221] mt-6 mb-4">
                  Applications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">Weldments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Multi-component assemblies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      End-user-facing projects
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Finishing Options
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Powder coating (add 2 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Plating/coating (add 2 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Masking (add 1-2 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Silk screening (add 1 day)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Part marking (add 1 day)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Advantages of Prototyping with Sheet Metal Fabrication
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Validate your design cost-effectively
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Before transitioning your design to higher up-front investment
                  technologies such as hard tooling, sheet metal fabrication
                  provides a cost-effective way to validate functionality and
                  the physical or mechanical properties of your design before
                  you freeze it for end-use production.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Highly customizable processes produce many types of geometries
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complex product applications often require sheet metal parts
                  of various shapes, sizes, and feature sets. Sheet metal
                  fabrication combines several manufacturing technologies such
                  as laser cutting, press brake forming, and welding to achieve
                  a variety of custom designs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Simulate your design with a real-world analog
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Depending on which certifications might be needed to bring a
                  product to market, sheet metal fabrication can produce a
                  design for testing purposes. Doing that comes with the added
                  benefit of avoiding high up-front tooling costs. Machine
                  set-up costs are quickly amortized with each incremental unit
                  fabricated.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Abundance of design flexibility and avenues for cost
                  optimizations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Like many manufacturing technologies, sheet metal fabrication
                  is no stranger to trade-offs. While sheet metal offers a high
                  degree of design flexibility, design simplification can yield
                  significant cost savings. For example, moving a hole or cutout
                  a fraction of an inch away from a bend line could amount to
                  sizeable savings by eliminating costly CNC machining or hand
                  drilling operations.
                </p>
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
              Product Applications for Prototyping
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Sheet metal fabrication is a collection of manufacturing processes
              that can produce geometries of all shapes and sizes. In practical
              terms, this means it can fulfill the needs of many types of
              products, such as:
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[250px]">
                    Generic Products
                  </th>
                  <th className="text-left p-4 font-semibold text-lg min-w-[300px]">
                    Specialized Applications
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600 align-top bg-white">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Brackets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Busbars</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Covers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Electronics enclosures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Housings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Mechanical chassis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Mounts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Panels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Weldments</span>
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top bg-gray-50">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Audio/Visual technology housings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Commercial lighting components</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>
                          Computing products (e.g. server racks, data storage)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Energy storage devices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Robotics solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Rugged industrial products</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Scientific or medical instruments</span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
