"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("injection");

  const tabs = [
    { id: "injection", label: "Injection Molding" },
    { id: "cnc", label: "CNC Machining" },
    { id: "printing", label: "3D Printing" },
    { id: "sheet", label: "Sheet Metal Fabrication" },
  ];

  const content = {
    injection: {
      title: "Injection Molding",
      description:
        "Get affordable, high-quality molded parts and bridge tooling within days. With our free moldability consultation, the design and molding process is rapidly accelerated to save you time and money.",
      features: [
        "Low-volume molding up to 100,000+ parts with volume pricing available—no MOQ required",
        "100+ plastic, elastomeric, and silicone rubber materials",
        "Automated CMM for fast, in-house quality documentation",
      ],
      image: "/Assets/Images/Industries/aerospace/pl_service_im.webp",
    },
    cnc: {
      title: "CNC Machining",
      description:
        "Leverage the same speed, precision, and reliability in machining that you're accustomed to at Fasonly but unlock advanced machining capabilities like tighter tolerances and volume pricing through our manufacturing network.",
      features: [
        "Machined parts in as fast as 1 day with optional plating and anodizing in as fast as 4 days",
        "Cost-efficient machined parts at higher volumes",
        "Tolerances down to ±0.001 in. (0.020mm) through our digital network",
      ],
      image: "/Assets/Images/Industries/aerospace/pl_service_cnc.webp",
    },
    printing: {
      title: "3D Printing",
      description:
        "Want quality parts and additive expertise at a single 3D printing source? Choose from seven different additive manufacturing technologies for cost-effective prototyping and highly precise, repeatable production parts.",
      features: [
        "Additive technologies include metal 3D printing, SLA, SLS, FDM, and more",
        "30 plastic and metal materials in a range of finishes",
        "25 years of additive manufacturing expertise",
      ],
      image: "/Assets/Images/Industries/aerospace/pl_service_3dp-2.webp",
    },
    sheet: {
      title: "Sheet Metal Fabrication",
      description:
        "From easy quoting to quick-turn production and finishing options, get up to 500 quality sheet metal parts in your hands in days from a single supplier.",
      features: [
        "Instant quotes with interactive manufacturability feedback",
        "Six sheet metal materials including aluminum, stainless steel, steel, brass, and copper",
        "Finishing options from welding and hardware insertion to powder coating and silk screening",
      ],
      image: "/Assets/Images/Industries/aerospace/sheet-metal-home.webp",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Consumer Electronics Manufacturing for Prototyping and Production"
        desc="Beat competition to market with rapid prototyping and on-demand production "
        bg="/Assets/Images/Industries/electronics/bg.jpg"
        text="white"
        firstButton={{ title: "Upload a Part", route: "/" }}
        secondButton={{ title: "Start Production Quote", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              How Do Consumer and Computer Electronic Companies Use Fasonly?
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 4 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Rapid Prototyping */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Rapid Prototyping
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Take advantage of design for manufacturability (DFM) feedback in
                our instant quotes to make adjustments to part design before any
                manufacturing begins, then navigate quickly through early- and
                late-stage prototyping with ease.
              </p>
            </div>

            {/* Quality Certification */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Low-Volume Production
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ramp up production to get quality end-use parts to market fast
                and use batch production to reduce financial risk with no
                minimum order quantity (MOQ) and low total cost of ownership
                (TCO).
              </p>
            </div>

            {/* Low-Volume Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Mass Production
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Order quantities up to 1 million+ parts with volume pricing
                built to fit your budget.
              </p>
            </div>

            {/* On-Demand Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                End-of-Life Production
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reduce your financial risk and warehousing costs during end of
                product life by ordering low volumes of product parts just in
                time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Description Text */}
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            We are the fastest and most comprehensive digital manufacturer in
            the industry with more than 25 years of experience developing
            products for innovative consumer electronics companies around the
            world.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Stat 1 - 96% */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#96E92A] mb-2">
                96%
              </div>
              <p className="text-white text-sm md:text-base">
                of Fortune 500
                <br />
                Medical Companies Served
              </p>
            </div>

            {/* Stat 2 - 700 Million */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#96E92A] mb-2">
                700 Million
              </div>
              <p className="text-white text-sm md:text-base">
                Parts Manufactured
              </p>
            </div>

            {/* Stat 3 - 300,000 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#96E92A] mb-2">
                300,000
              </div>
              <p className="text-white text-sm md:text-base">
                Customers Served
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Production Support Team Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Full Production Support Team
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              We have a team of manufacturing experts working behind the scenes
              to fulfill your production order—we manage the entire process and
              keep you updated along the way.
            </p>
          </div>

          {/* 4 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Account Manager */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/customer_support.jpg"
                  alt="Account Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Account Manager
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A dedicated account manager provides support, including
                  assistance with platform and file uploads.
                </p>
              </div>
            </div>

            {/* Applications Engineers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/application_engineer.jpg"
                  alt="Applications Engineers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Applications Engineers
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Expert CAD solutions and cost-reduction strategies tailored by
                  in-house applications engineers to optimize your designs.
                </p>
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/logistics.jpg"
                  alt="Logistics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Logistics
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Seamless logistics fulfillment and efficiency optimization
                  from experienced operations specialists.
                </p>
              </div>
            </div>

            {/* Quality Control */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/quality_control.jpg"
                  alt="Quality Control"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Quality Control
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our skilled expert on-site quality control teams ensure your
                  parts meet your expectations and exact specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Services for Aerospace Products Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Manufacturing Services for Consumer Electronic Products
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area - Two Columns */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {currentContent.description}
              </p>

              <ul className="space-y-3 mb-8">
                {currentContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Learn More →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden ">
              <div className="flex items-center justify-center h-full text-6xl">
                <Image
                  src={currentContent.image}
                  alt={currentContent.title}
                  fill
                  className="object-cover"
                />
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
              Quality Measures for Consumer Electronics
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our industry-standard procedures and certifications guarantee
              quality and regulatory compliance.
            </p>
          </div>

          {/* Part 1 - Image Left, Table Right */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/Industries/robotics/im_quality-lab_process_01-1200x800-5b2df79-1.jpg"
                alt="Quality Measures for Aerospace Industry"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Documentation
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Certification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700">
                        CMM inspection report
                      </td>
                      <td className="p-4 text-gray-600">
                        First Article Inspection (FAI)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700">
                        Dimensional Inspection Report (DIR)
                      </td>
                      <td className="p-4 text-gray-600">PPAP</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700">
                        Material Certificates + Certificate of Analysis
                      </td>
                      <td className="p-4 text-gray-600">
                        Conflict Minerals Reporting
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700">
                        REACH + RoHS Certificates
                      </td>
                      <td className="p-4 text-gray-600">Prop65</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700">
                        Industry Certifications: ISO 9001 and AS 9100
                      </td>
                      <td className="p-4 text-gray-600">
                        Certificate of Conformance (CoC)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700">
                        Industry Certifications (Fasonly Network): ISO 13485,
                        ISO 14001, ISO 45001, and ISO TS16949
                      </td>
                      <td className="p-4 text-gray-600"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 2 - Grid of 4 Items with Light Blue Background */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Process Traceability */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Process Traceability
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* CTQ Reporting */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                CTQ Reporting
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Report Comparison */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Report Comparison
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Additional Resource */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Quality Assurance
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              What Materials Work Best for Consumer and Computer Electronic
              Components?
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 5 Items Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Titanium */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/electronics/abs_material.jpg"
                  alt="Titanium"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">ABS</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  This reliable thermoplastic is widely used in industries like
                  consumer electronics. It brings general-purpose performance
                  for parts like electronics enclosures and handheld devices,
                  and is also relatively inexpensive.
                </p>
              </div>
            </div>

            {/* Aluminum */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/electronics/aluminum.jpg"
                  alt="Aluminum"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Aluminum
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  This material can be machined or formed through sheet metal
                  fabrication to create housings, brackets, or other metal parts
                  that need high strength and low weight are required.
                </p>
              </div>
            </div>

            {/* Inconel */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/electronics/silicone_parts.jpg"
                  alt="Inconel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Elastomers
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Available in both 3D printing and injection molding, choose
                  from several elastomeric materials for parts that need impact
                  resistance or flexibility. Overmolding is also available for
                  components and products with ergonomic grips, buttons, or
                  handles.
                </p>
              </div>
            </div>

            {/* Stainless Steel */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/electronics/frame-9-1.jpg"
                  alt="Stainless Steel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Advanced Photopolymers
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  When your application requires greater mechanical properties
                  for end use parts, we provide several advanced photopolymer
                  options offering high strength, good impact resistance and
                  excellent surface finishes.
                </p>
              </div>
            </div>
            {/* Stainless Steel */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/electronics/pc_material.jpg"
                  alt="Stainless Steel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Polycarbonate
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  This strong and extremely impact resistant thermoplastic has a
                  low shrink and good dimensional stability. It’s a transparent
                  plastic that is available in optically clear grades, which
                  works well for transparent covers and housings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Common Consumer Electronics Applications
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                We have several capabilities within our manufacturing services
                catered to the consumer electronic industry. Here are a few
                applications we frequently see.
              </p>
            </div>

            {/* Right Column - List Items */}
            <div className="flex-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Housings",
                  "Fixtures",
                  "Consoles",
                  "Heat sinks",
                  "Casings",
                  "Knobs",
                  "Handles",
                  "Lenses",
                  "Buttons",
                  "Switches",
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
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/Industries/electronics/sonos-arc-ultra-lifestyle-white-1.jpg"
                alt="Precision Manufacturing for Robotics Industry"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Breaking New Ground in Transducer Technology
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Sonos, the renowned leader in home audio innovation, has
                redefined sound with their latest product, Arc Ultra—the first
                consumer device to incorporate the groundbreaking Sound Motion™
                technology. The achievement means a monumental leap in audio
                performance, delivering twice the bass of its predecessor while
                creating a slimmer, more refined design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
