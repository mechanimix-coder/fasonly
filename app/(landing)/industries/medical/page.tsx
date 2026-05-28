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
      image: "/Assets/Images/Industries/medical/pl_service_im.webp",
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
      image: "/Assets/Images/Industries/medical/pl_service_cnc.webp",
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
      image: "/Assets/Images/Industries/medical/pl_service_3dp-2.webp",
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
      image: "/Assets/Images/Industries/medical/sheet-metal-home.webp",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Accelerating Medical Device Prototyping and Production"
        desc="Get to market faster and streamline your supply chain with rapid prototyping and on-demand production of medical components"
        bg="/Assets/Images/Industries/medicalHero.jpg"
        text="black"
        firstButton={{ title: "Upload a Part", route: "/" }}
        secondButton={{ title: "Start Production Quote", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              How Do Medical Companies Use Fasonly?
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
                Create prototypes in production-grade materials for functional
                and regulatory testing, or use our 3D printing service to print
                models and organ scans to preview before medical procedures.
              </p>
            </div>

            {/* Quality Certification */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Quality Certification
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Streamline development of FDA Class II and devices, or
                non-implantable components, with molding capabilities geared
                towards high-requirement applications and ISO 13485 quality
                certification.
              </p>
            </div>

            {/* Low-Volume Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
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

            {/* On-Demand Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                On-Demand Production
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Build agility into your supply chain by ordering quick-turn
                parts when needed, regardless of what stage of development
                you're in.
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
            products for innovative medical companies around the world.
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
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Account Manager
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A dedicated account manager provides support, including
                assistance with platform and file uploads.
              </p>
            </div>

            {/* Applications Engineers */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Applications Engineers
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Expert CAD solutions and cost-reduction strategies tailored by
                in-house applications engineers to optimize your designs.
              </p>
            </div>

            {/* Logistics */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Logistics
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Seamless logistics fulfillment and efficiency optimization from
                experienced operations specialists.
              </p>
            </div>

            {/* Quality Control */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
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
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Manufacturing Services for Medical Products
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
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
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentContent.description}
              </p>
              <ul className="space-y-3 mb-6">
                {currentContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={currentContent.image}
                  alt={currentContent.title}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Your Trusted Partner in Medical Product Development
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Speed, quality, and technical expertise are built into our
                entire process. Partnering with us helps ensure your design is
                optimized, your development timeline is accelerated, and that
                you're supported from prototyping through end-use production.
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
                    Medical Product Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={"/Assets/Images/Industries/medical/quality_measures.jpg"}
                  alt={""}
                  fill
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Quality Measures for the Medical Industry
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our industry-standard procedures and certifications guarantee
                quality and regulatory compliance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        CMM inspection report
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Dimensional Inspection Report (DIR)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Material Certificates + Certificate of Analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        REACH + RoHS Certificates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Industry Certifications: ISO 9001, AS 9100, and ISO
                        13485
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        First Article Inspection (FAI)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">PPAP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Conflict Minerals Reporting
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">Prop65</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Certificate of Conformance (CoC)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Grid of 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Process Traceability */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Process Traceability
              </h3>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                Learn More →
              </a>
            </div>

            {/* CTQ Reporting */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                CTQ Reporting
              </h3>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                Learn More →
              </a>
            </div>

            {/* Report Comparison */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Report Comparison
              </h3>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                Learn More →
              </a>
            </div>

            {/* Industry Certifications (Network) */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Network Certifications
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                ISO 13485, ISO 14001, ISO 45001, ISO TS16949
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
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
              Materials for Medical Applications
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 6 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* High-temp Plastics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/peek.jpg"}
                  alt={""}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  High-temp Plastics
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  PEEK and PEI (Ultem) offer high-temperature resistance, creep
                  resistance, and are suited for applications that require
                  sterilization.
                </p>
              </div>
            </div>

            {/* Medical-grade Silicone Rubber */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/silicone_parts.jpg"}
                  alt={""}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medical-grade Silicone Rubber
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Dow Corning's QP1-250 has excellent thermal, chemical, and
                  electrical resistance. It's also bio-compatible so can be used
                  in applications that require skin contact.
                </p>
              </div>
            </div>

            {/* Advanced Photopolymers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/frame-9-1.jpg"}
                  alt={""}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Advanced Photopolymers
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tough Black and ceramic-filled are production-grade materials
                  available through our Hybrid Photosynthesis (HPS) technology,
                  ideal for late-stage prototyping or end-use devices.
                </p>
              </div>
            </div>

            {/* Micro-resolution */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/micro_fine.jpg"}
                  alt={""}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Micro-resolution
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  MicroFine™ (green and gray) is a proprietary material
                  developed by Fasonly to build complex 3D-printed parts with
                  micro-sized features as small as 0.0025 in.
                </p>
              </div>
            </div>

            {/* Microfluidics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/watershed.jpg"}
                  alt={""}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Microfluidics
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Watershed (ABS-like) and Accura 60 (PC-like) are clear
                  materials that can be used for microfluidic parts and
                  transparent components like lenses and housings.
                </p>
              </div>
            </div>

            {/* Medical Alloys */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/titanium.jpg"}
                  alt={""}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medical Alloys
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Between machined and 3D-printed metals along with sheet metal,
                  there are more than 20 metal material options available for
                  medical components and other applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Title and Description */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Common Medical Applications
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                We have several capabilities within our manufacturing services
                catered to the medical industry. Here are a few applications we
                frequently see.
              </p>
            </div>

            {/* Right Column - List of Applications with Tick Icons */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Handheld devices",
                  "Surgical instruments",
                  "Enclosures and housings",
                  "Ventilators",
                  "Implantable prototypes",
                  "Prosthetic components",
                  "Microfluidics",
                  "Wearables",
                  "Cartridges",
                  "Laboratory equipment",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#96E92A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
