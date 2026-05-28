"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Quality Measures for CNC Machining"
        desc="How we use digital manufacturing and quality control processes to manufacture quality parts consistently"
        image="/Assets/Images/services/cnc-machining/qualityHero.png"
        firstButton={{ title: "Get a Quote", route: "/" }}
        secondButton={{ title: "View Inspection", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Video Player on Left, Text on Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
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
                  <p className="text-gray-300 text-xs mt-1">
                    Quality Standards Overview
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Quality is in Our Work Standards, and Our DNA
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our dedication to quality is apparent throughout the
                manufacturing process, and you'll experience it from your first
                interaction. When you submit a CAD file for a quote, you'll
                receive analysis of your design.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our automated design for manufacturing analysis quickly
                identifies potential issues, such as:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Walls that are too thin",
                  "Parts that are too large",
                  "Holes that are eligible for threading",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you get one of these advisories, you will also notice that it
                includes a proposed solution to fix your model. With a single
                click, you can choose to accept the issue and proceed as-is or
                go back to redesign and resubmit your model.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">
                  Dedicated to Delivering Quality
                </span>
                <br />
                Our mission is to deliver great parts every time. To do that, we
                use clearly documented work standards and procedures. To
                minimize escapes, our proprietary software instructs our factory
                CNC machines to perform in-process quality checks on every
                unique geometry. Whether produced in our factories or through
                Fasonly Network, once the part is completed, our quality control
                experts take over and visually and dimensionally inspect the
                physical part to ensure consistency with your 3D model (or
                print, if necessary).
              </p>
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right (Inspection Documentation) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/012-pl_brandcampaign_2024_techinical-expert-test.jpg"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Inspection Documentation for CNC Machining Projects
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can choose from multiple forms of quality inspection
                documentation for your CNC-machined part orders based on the
                complexity of your models. Depending on your project
                requirements, the following reports are available within your
                online quote. Additionally, you can request Certificates of
                Conformance, Material Certifications, and Hardware
                Certifications.
              </p>
              <ul className="space-y-2">
                {[
                  "Basic Production/Quality Inspection Report",
                  "Dimensional Inspection Report",
                  "First Article Inspection",
                  "Production Part Approval Process (PPAP)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3 - Image Right, Text Left (Quality Process) */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Our Quality Process
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every part that leaves our facility undergoes rigorous quality
                control checks. From initial material verification to final
                dimensional inspection, we ensure that every specification is
                met.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our quality management system is ISO 9001:2015 certified, and we
                maintain strict adherence to industry standards. Whether you
                need PPAP level 3 documentation or simple COC, we have you
                covered.
              </p>
              <ul className="space-y-2">
                {[
                  "ISO 9001:2015 Certified",
                  "AS9100D for Aerospace",
                  "ISO 13485 for Medical Devices",
                  "ITAR Registered",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/quality_control.jpg"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
              Quality Inspections for CNC Machining
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Main Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Benefits
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[200px]">
                    Inspection without Report
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[220px]">
                    Basic Production/Quality Inspection Report
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[220px]">
                    Dimensional Inspection Report
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[220px]">
                    First Article Inspection
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-3 text-gray-700 font-medium align-top">
                    Benefits
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Parts are inspected dimensionally and visually. A
                    Certificate of Conformance is available, but measurement
                    results are not included.
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Parts are inspected dimensionally and visually. An
                    inspection report with corresponding measurements is
                    included.
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Verifies numerous dimensional specifications without
                    requiring a 2D drawing for precision machined parts.
                    Quick-turn parts require a 2D drawing. GD&T is not
                    inspected.
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Verifies the sample part conforms to all dimensions provided
                    on a 2D drawing, including GD&T. Results provided in AS9102
                    format.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mb-12 p-3 bg-[#F0F8FF] rounded-lg text-center">
            <p className="text-sm text-gray-500 italic">
              *Note that capabilities may vary by manufacturing site
            </p>
          </div>

          {/* Sampling-Based Inspection Process Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-4 text-center">
              Fasonly' Sampling-Based Inspection Process
            </h3>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              To ensure consistent quality while maintaining fast turnaround
              times, Fasonly uses a sampling-based inspection process for
              BIR/DIR inspection reports rather than inspecting every part in a
              lot. Sample sizes are selected based on total lot quantity, as
              outlined in the table below, and are designed to provide reliable
              verification of dimensional accuracy and workmanship.
            </p>

            {/* Sample Size Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      Lot Size
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      1 to 50
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      51 to 90
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      91 to 150
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      151 to 280
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      281 to 500
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      501 to 1,200
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      1,201 to 3,200
                    </th>
                    <th className="text-center p-3 font-semibold">
                      3,201 to 10,000
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-3 font-semibold text-[#0B1221] text-center">
                      Sample Size
                    </td>
                    <td className="p-3 text-gray-600 text-center">1</td>
                    <td className="p-3 text-gray-600 text-center">2</td>
                    <td className="p-3 text-gray-600 text-center">3</td>
                    <td className="p-3 text-gray-600 text-center">5</td>
                    <td className="p-3 text-gray-600 text-center">8</td>
                    <td className="p-3 text-gray-600 text-center">13</td>
                    <td className="p-3 text-gray-600 text-center">20</td>
                    <td className="p-3 text-gray-600 text-center">32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/pl_brandcampaign_technical_expert_02.webp"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Support from CNC Machining Experts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Discuss your design with a CNC machining applications engineer
                who can answer any manufacturability questions you might have.
                Common design review topics include optimizing cost, tolerances,
                threading, and finishing options.
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Schedule a free virtual meeting today →
              </a>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Machined Parts for Aerospace Applications
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                With capabilities such as AS9100, FAI, material traceability,
                NADCAP-certified coatings, and full technical drawing and
                quality requirement reviews, we can get your parts to you, as
                designed, in as little as 1 business day. This reduces time for
                iteration and speeds your transition to final part designs, both
                critical needs for the aerospace industry.
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Learn More →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/comparison-guide.jpg"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
