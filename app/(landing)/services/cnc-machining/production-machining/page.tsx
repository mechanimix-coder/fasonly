"use client";

import GetAQuote from "@/component/landing/GetAQuote";
import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Production CNC Machining"
        desc="Cost-efficient machined parts at any quantity."
        firstButton={{ title: "Get a Quote", route: "/" }}
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We're not only the fastest manufacturing supplier of machined
                prototypes but also the most reliable source of on-demand
                production parts.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-3">
                Why is this important?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                You have a single-source supplier from concept validation to
                full scale production options.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-3">
                How do we do it?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Beyond prototyping, we provide full support with production. Our
                experts manage your project across our manufacturing partner
                network to bring you competitive pricing with significant
                economies of scale. On-demand production is cost-effective,
                letting you build inventory as you need it. We can manufacture
                end-use parts at smaller quantities, or volumes up to one
                million parts - we're flexible on your needs.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/production-machining/cnc_milling_2019_bp_scale_02_hr-1-1.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 - Low Unit Costs */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Low Unit Costs
              </h3>
              <p className="text-gray-500 text-sm">
                Lower piece part price as quantities increase.
              </p>
            </div>

            {/* Item 2 - Lead Time */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Lead Time
              </h3>
              <p className="text-gray-500 text-sm">
                Shipped in as fast as 5 days.
              </p>
            </div>

            {/* Item 3 - Finishing Options */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Finishing Options
              </h3>
              <p className="text-gray-500 text-sm">
                Anodizing, chromate plating, and beyond.
              </p>
            </div>

            {/* Item 4 - Quantity */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Quantity
              </h3>
              <p className="text-gray-500 text-sm">
                1 to 1,000,000 parts. No minimum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <GetAQuote
        title=" CNC Machining Services for End-Use Parts"
        desc="Get high-quality machined parts faster with our expanded
                      automated CNC milling—parts ready in as fast as 4 days"
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              4 Reasons to Turn to the Protolabs Network for Machined Production
              Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 4 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reason 1 - Reduced Piece-Part Price */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="text-[#0099ff] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Reduced Piece-Part Price with Higher Quantities
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Through long-standing partnerships with manufacturers, we offer
                fair, competitive prices. We help you to scale with volume
                pricing options to lower your price per part as quantities
                increase.
              </p>
            </div>

            {/* Reason 2 - Quality Documentation */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="text-[#0099ff] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Quality Documentation and Certifications
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get added quality assurance from conventional FAI reporting, CoC
                documentation, CMM inspection reports, full dimensional
                inspections, material test reports, material certifications, and
                industry certifications (PPAP, ISO 9001, etc.).
              </p>
            </div>

            {/* Reason 3 - High-mix Configurations */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="text-[#0099ff] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                High-mix Configurations
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We're equipped to handle a complex bill of materials. We provide
                full flexibility for production orders with multiple line items
                that require a high level of customization.
              </p>
            </div>

            {/* Reason 4 - Complete Order Management */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="text-[#0099ff] font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Complete Order Management
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We bring you the capabilities of more than 250 manufacturers,
                with the ease of working with one. You're supported by a
                dedicated point of contact and backed by an entire team working
                to produce your order to specs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/production-machining/cnc-milling-metal-2019-c-7421-lr.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Production Capabilities for CNC Machining
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our service is all about solutions and flexibility. We take time
                to understand your project and leverage our global network to
                find the right manufacturer for the job. We can help get
                products ready for market with:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Cosmetic finishes",
                  "Multiple surface finish options",
                  "Tight tolerances",
                  "Custom materials",
                  "Production tooling",
                  "Hardware assembly",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our production capabilities extend far beyond those on our quote
                builder.
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Contact us for a personalized solution →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Hint text="Streamline the process of manufacturing machined parts at scale. Here are some ways that we reduce the common pain points of production." />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              How it Works
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Working with Protolab Network, you will always have a point of
              contact to assist you with your design and the manufacturing
              process to ensure you get the parts you need at the specs you
              require.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-[#0B1221] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">
                  Watch How it Works
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Protolabs Network Process Overview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
