"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Production 3D Printing"
        desc="

Industrial-grade 3D-printed parts with consistent repeatability at any quantity
"
        firstButton={{ title: "Discuss Project Requirements", route: "/" }}
        bg="/Assets/Images/services/3d-printing/production/bg.jpg"
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Printing for End Use
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond prototyping, Protolabs is also a reliable source for
                3D-printed production parts. With industrial additive
                manufacturing technologies and a wide range of plastic and metal
                materials, we can support projects from early design stages
                through to end-use part production.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our production 3D printing services help engineers scale
                efficiently. With the combined capabilities of our in-house
                factories and global network, we can produce durable, functional
                components at a range of quantities while maintaining
                flexibility on design, timelines, and cost. This approach allows
                you to manufacture end-use parts when you need them, on tight
                timeframes, and at exceptional quality.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/production/3dp-production-1.jpg"
                alt="3D Printing for End Use"
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Advantages of Protolabs
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Industrial-Grade */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
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
                Industrial-Grade
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Production capabilities for customer-ready applications
              </p>
            </div>

            {/* Repeatability */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Repeatability
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Identical parts across production runs
              </p>
            </div>

            {/* Lead time */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
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
                Lead time
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Customized to fit your needs
              </p>
            </div>

            {/* Finishing Options */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
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
              <p className="text-gray-500 text-sm leading-relaxed">
                Heat treating, secondary machining, vapor smoothing, and more
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
              Production Capabilities for 3D Printing
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our service is all about solutions and flexibility. We take time
              to understand your project and leverage our in-house factories and
              global network to find the right manufacturer for the job. We
              offer the latest technology in production-grade 3D printing,
              including:
            </p>
          </div>

          {/* 7 Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Metal 3D Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C1.jpg"
                  alt="Metal 3D Printing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Metal 3D Printing
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Stereolithography */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C2.jpg"
                  alt="Stereolithography"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Stereolithography
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
            </div>

            {/* PolyJet & Silicone */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C3.jpg"
                  alt="PolyJet & Silicone"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  PolyJet & Silicone
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Multi Jet Fusion */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C4.jpg"
                  alt="Multi Jet Fusion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Multi Jet Fusion
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Fused Deposition Modeling */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C5.jpg"
                  alt="Fused Deposition Modeling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Fused Deposition Modeling
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Selective Laser Sintering */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C6.jpg"
                  alt="Selective Laser Sintering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Selective Laser Sintering
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Advanced Photopolymers */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C7.jpg"
                  alt="Advanced Photopolymers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Advanced Photopolymers
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Learn More →
                </button>
              </div>
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
                The Manufacturing Journey of Production Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Using digital automation, and extensive production expertise, we
                have optimized the process of manufacturing parts for end-use,
                so you can get quality, production-grade parts faster than ever.
                Watch the video to see how we take your product from concept to
                completion.
              </p>
              <p className="text-gray-400 text-sm">PROTOLABS</p>
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
                    Manufacturing Journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
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
                  <p className="text-gray-300 text-xs mt-1">How It Works</p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How it Works
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Protolabs' experts support you throughout your 3D printing
                project, helping you to get the most out of our on-demand
                capabilities, and ensuring consistency across production runs.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Discuss Project Requirements
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              5 Reasons to Rely on Protolabs for 3D Printing at Scale
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 5 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 - Production Capabilities */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Production Capabilities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Benefit from the advanced performance of MJF, Advanced
                Photopolymers, DMLS and industrial FDM, which deliver strong,
                functional parts with high accuracy and consistent
                repeatability. These processes are ideal for printing complex
                geometries with durable materials.
              </p>
            </div>

            {/* Reason 2 - Complete Order Management */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Complete Order Management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have a team of manufacturing experts working behind the
                scenes to fulfill your production order—we manage the entire
                process and keep you updated along the way.
              </p>
            </div>

            {/* Reason 3 - Strong Supply Chain */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Strong Supply Chain
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build agility into your supply chain by manufacturing on demand,
                including high-mix, low-volume BOMs ideal for mass
                customization. Onshoring through us helps reduce supply chain
                risk and brings manufacturing closer to your end markets.
              </p>
            </div>

            {/* Reason 4 - Quality Documentation and Certifications */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Quality Documentation and Certifications
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get added quality assurance from conventional AS9102 FA (First
                Article Inspection) reporting, full Dimensional Inspection
                Reports (DIR), Reference reports, and industry certifications
                (ISO 13485, ISO 9001, etc.)
              </p>
            </div>

            {/* Reason 5 - Engineering Support */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group lg:col-start-2">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  5
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Engineering Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Think of our engineers as part of your team. Together, our
                engineers bring decades of experience across every major 3D
                printing technology, from metals to advanced polymers to surface
                finishes and post-processing services. Whether you're designing
                a prototype or ready for production volumes, they are available
                to consult with you on a technical, quality compliance, and
                business requirements associated with your project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Hint text="Consider consolidating multiple components into a single part, reducing assembly steps and improving overall reliability. Get more expert tips for production. " />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Printing Throughout the Product Life Cycle
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our 3D printing solutions scale from prototyping to production
                with flexible capacity and no minimum order quantities. For
                end-use parts, advanced processes like MJF, Advanced
                Photopolymers, and DMLS deliver consistent quality and
                performance, supported by application-specific post-processing,
                inspection, and compliance documentation.
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Polyjet", "FDM", "SLA", "MJF", "SLS", "DMLS", "AP"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F0F8FF] rounded-full text-sm text-gray-600">
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* Applications Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    On-Demand Production
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Jigs, Fixtures & Tooling
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Early Prototyping
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Late Prototyping
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Low-Volume Production
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Ramp-Up Production
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Mass Production
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    End-Product
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/production/3dp-technologies-v3_amer.webp"
                alt="3D Printing Throughout the Product Life Cycle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
