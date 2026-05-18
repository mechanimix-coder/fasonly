"use client";

import { ArrowRight, Check } from "lucide-react";
import Hint from "@/component/UI/Hint";
import GuideDownload from "@/component/landing/GuideDownload";
import Blog from "@/component/landing/Blog";
import SheetMetalTables from "@/component/landing/SheetMetalTables";
import ServicesHero from "@/component/landing/ServicesHero";
export default function SheetMetalFabrication() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title=" Online Custom Sheet Metal Fabrication Service"
        desc="Sheet metal components and assemblies in as fast as 1 day. Get
                an online quote for your prototype or low-volume production
                project today."
        image="/Assets/Images/services/injection-molding/complexity.webp"
        firstButton={{ title: "Get a Quote", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sheet Metal Fabrication Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our online sheet metal fabrication service enables you to get a
              quote in minutes and have your parts delivered in days. We offer
              3D visualized Design for Manufacturability (DFM) feedback to help
              you manage project costs and receive actionable design insights.
              With a broad range of fabrication and finishing capabilities, our
              powerful combination of technology and skilled operators produce
              precision quality parts whether your project has one component or
              many.
            </p>
          </div>

          {/* 4 Capability Boxes */}
          <div className="space-y-6">
            {/* Box 1 - Laser Cutting */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⚡</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Laser Cutting
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Laser cutting is a subtractive manufacturing process that uses
                  a high-powered and focused laser beam to create precise cuts
                  in sheet metal materials.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Box 2 - Forming and Bending */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔧</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Forming and Bending
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Press brake forming uses a matching punch and die set and the
                  application of force along a straight axis, producing linear
                  bends on metal sheets.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Box 3 - Punching */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⭕</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Punching
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Punching is a process that combines a punch tool with a bottom
                  die and uses a pressing force to cut part profiles and form
                  metal sheets into specific shapes and patterns.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Box 4 - Fabricated Assemblies */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔗</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Fabricated Assemblies
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sheet metal assemblies involve joining multiple sheet metal
                  components through a variety of processes, such as welding or
                  riveting, to create an assembled final product.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left Column - Image */}
            <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📊</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sheet Metal Quoting with Protolabs
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our online quoting platform for sheet metal fabrication lets you
                upload, configure, and order your sheet metal project in a
                fraction of the time of traditional quoting methods. This guide
                provides a look into the key elements of the platform so you can
                complete your order to your exact specifications.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <SheetMetalTables />
      <Hint />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does Sheet Metal Fabrication Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed">
                During the sheet metal fabrication process, thin sheet metal
                stock is placed on a flat bed where a laser cutter (1) draws
                programmed part patterns. Depending on the part geometry, a
                sheet metal punch (2) can form additional features. Once the
                parts are deburred, they move to the press brake (3) where they
                are formed into the final geometries. Additional secondary
                operations are often used to finish the sheet metal parts.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🔧</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Video Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
            {/* Left Column - Video Player */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl flex-shrink-0">
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
                    What is Sheet Metal Fabrication?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is Sheet Metal Fabrication?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed">
                The sheet metal fabrication process is ideal for metal
                components and can support both prototyping and production
                quantities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-[#96E92A]" />
                  <span className="text-gray-600">Low material waste</span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-[#96E92A]" />
                  <span className="text-gray-600">
                    Can cost-effectively scale to production volumes
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-[#96E92A]" />
                  <span className="text-gray-600">
                    Multiple finishing options like anodizing and powder coating
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3 - Text Left, Video Right with Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left Column - Text with Buttons */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Advantages of Sheet Metal Fabrication
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The sheet metal fabrication process is ideal for metal
                components and can support both prototyping and production
                quantities with high efficiency and precision.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-300">
                  View Countersink Chart
                </button>
                <button className="border-2 border-[#0B1221] hover:bg-[#0B1221] hover:text-white text-[#0B1221] font-medium px-5 py-2.5 rounded-lg transition-all duration-300">
                  View Design Guideline
                </button>
              </div>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl flex-shrink-0">
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
                    Sheet Metal Process Overview
                  </p>
                </div>
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
                Design for Manufacturability (DFM) Feedback on Every Sheet Metal
                Quote
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We now offer automated design analysis for all sheet metal
                components, which highlights any features that may pose
                challenges during the fabrication process. DFM feedback that can
                improve the quality of your sheet metal parts is now delivered
                in minutes.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image with Feature List Overlay */}
            <div className="flex-1 relative">
              <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <span className="text-6xl">📐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🔧</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sheet Metal Applications
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sheet metal is a versatile manufacturing process for a range of
                metal components. The process can support high-volume commodity
                products and low-volume, one-of-a-kind applications. Common
                sheet metal parts include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Electrical enclosure",
                  "Parts for computer electronics",
                  "Chassis",
                  "Brackets",
                  "Cabinets",
                  "Mounts",
                  "Appliances",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <svg
                className="w-8 h-8 text-[#0099ff]"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-xl md:text-2xl lg:text-3xl text-[#0B1221] leading-relaxed mb-6 italic font-medium">
              &quot;Partnering with Protolabs was easy. We ended up with high
              fidelity hardware at a bargain price on a very competitive
              schedule.&quot;
            </p>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto mb-4"></div>

            {/* Author */}
            <p className="text-[#0B1221] font-semibold">
              — CHRIS CLOUTIER, ADVANCED PROGRAMS PROTOTYPE LEAD
            </p>
            <p className="text-gray-500 text-sm mt-1">LOCKHEED MARTIN</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Our Sheet Metal Material Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>

              <div className="space-y-3 mb-6">
                {[
                  "Aluminum (1)",
                  "Brass (2)",
                  "Copper (3)",
                  "Stainless Steel (4)",
                  "Steel: CR Non-treated (5)",
                  "Steel: CR Galvanneal and CR Galvanized (6)",
                ].map((material, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>

              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Learn more about Protolabs' sheet metal materials →
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Image with Number Overlays */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📦</span>
              </div>
              {/* Number indicators overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  1
                </div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  2
                </div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  3
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  4
                </div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  5
                </div>
                <div className="absolute bottom-1/2 right-1/2 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Why Choose Protolabs for Sheet Metal Parts?
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 5 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 - Fast and Simple Online Quoting */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Fast and Simple Online Quoting
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our easy-to-use interface offers an average one-day
                upload-to-quote lead time (simple design quoting in as fast as
                one hour). Easily configure part specifications like material
                selection, and finishing options.
              </p>
            </div>

            {/* Item 2 - Reliable Delivery */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Reliable Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quality parts delivered within our five-day standard lead time.
              </p>
            </div>

            {/* Item 3 - Expansive Capacity */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Expansive Capacity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With more than 200 machines all under one roof, we're dedicated
                to continuously evolving our capabilities.
              </p>
            </div>

            {/* Item 4 - Domestic Production */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Domestic Production
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All sheet metal parts are made in New Hampshire with secondary
                operations such as hardware placement, welding, and finishing
                done in-house or locally by an approved vendor.
              </p>
            </div>

            {/* Item 5 - Sheet Metal Technical Expertise */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 lg:col-start-2">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Sheet Metal Technical Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Work with our team of engineering experts that offer technical
                design guidance and can inform you on manufacturability and
                cost-saving opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🎨</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sheet Metal Finishing Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Looking for more than a few basic sheet metal parts? We offer
                welding, hardware insertion, plating, silk screening, and powder
                coating to provide complete sheet metal components all under one
                roof.
              </p>
              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                View Finishing Options
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sheet Metal Surface Finish Guide"
        desc="Check out our sheet metal guide for a quick snapshot of our Standard and Cosmetic finishing options available for various sheet metal materials."
      />
      <Blog />
    </div>
  );
}
