"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState<
    "standard" | "reference" | "as9102"
  >("standard");

  const tables = {
    standard: {
      title: "Standard Inspection Report",
      headers: [
        "Benefits",
        "Measurements",
        "Additional Features",
        "Eligibility",
        "Additional Lead Time",
        "Sample Plan",
      ],
      rows: [
        [
          "Includes a dimensional report of requested features",
          "Bubbled/CTQ dimensions if indicated, otherwise all tolerated dimensions",
          "Formatted report with bubbled part image and result summary chart",
          "All 3D printing technologies",
          "Two business days or more depending on inspection requirements",
          "One part per geometry, unless otherwise specified",
        ],
      ],
      additionalInfo:
        "Upload a 2D drawing including requested inspection features. Reference Report is informational-only and is not pass/fail. Any features we are unable to measure will be stated in the Manufacturing Analysis of the part.",
    },
    reference: {
      title: "Reference Report",
      headers: [
        "Benefits",
        "Measurements",
        "Additional Features",
        "Eligibility",
        "Additional Lead Time",
        "Sample Plan",
      ],
      rows: [
        [
          "Includes a pass/fail dimensional report of requested features",
          "Bubbled/CTQ dimensions if indicated, otherwise all toleranced dimensions",
          "Formatted report with bubbled part image and result summary chart",
          "DMLS, SLS, MJF",
          "Two business days or more depending on inspection requirements",
          "One part per geometry, unless otherwise specified",
        ],
      ],
      additionalInfo:
        "Reference Report is informational-only and is not pass/fail.",
    },
    as9102: {
      title: "AS9102 First Article Inspection Report",
      headers: [
        "Benefits",
        "Measurements",
        "Additional Features",
        "Eligibility",
        "Additional Lead Time",
        "Sample Plan",
      ],
      rows: [
        [
          "Includes a dimensional report of all features in AS9102 FAIR format",
          "All dimensions and drawing notes",
          "Full 3-page AS9102 document and matching bubbled drawing",
          "DMLS, SLS, MJF",
          "2-5 business days or more depending on inspection requirements",
          "One part per geometry",
        ],
      ],
      additionalInfo:
        "AS9102 certification is available for selective laser sintering (SLS), Multi Jet Fusion (MJF), and direct metal laser sintering (DMLS).",
    },
  };

  const currentTable = tables[activeTab];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Processes, Inspections, and Reporting for Quality 3D Printing"
        desc="How we use digital manufacturing and quality control processes to manufacture accurate parts consistently"
        image="/Assets/Images/services/3d-printing/quality/hero.webp"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        secondButton={{ title: "View Inspection Options", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
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
                  <p className="text-gray-300 text-xs mt-1">
                    Design for Additive Manufacturing Analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Design for Additive Manufacturing Analysis
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our dedication to quality is apparent throughout the
                manufacturing process, and you'll experience it from your first
                interaction. When you submit a quote, you'll receive an analysis
                of your 3D printing design.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our automated design for additive manufacturing analysis quickly
                identifies:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Issues with part size (large or small)",
                  "Gaps in material that are too small to form without collapsing",
                  "Inaccessible surfaces to remove excess powder, remove supports, or apply surface finish treatment",
                  "Text size for optimal text resolution",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed">
                If you get one of these advisories, you will also notice that it
                includes a proposed solution to fix your model. With a single
                click, you can choose to accept the issue and proceed as-is or
                go back to redesign and resubmit your model.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Support from 3D Printing Experts */}
            <div className="bg-gradient-to-br from-[#F0F8FF] to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#0099ff]/10 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                Support from 3D Printing Experts
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Discuss your design with a 3D printing applications engineer who
                can answer any manufacturability questions you might have.
                Common design review topics include optimizing for cost, feature
                location and spacing, and questions about finishing options.
              </p>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Schedule a free virtual meeting today →
              </a>
            </div>

            {/* Repeatability and Precision */}
            <div className="bg-gradient-to-br from-[#F0F8FF] to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#0099ff]/10 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                Repeatability and Precision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our mission is to deliver quality parts every time. To do that,
                we use clearly documented work standards and procedures. To
                minimize escapes, our team of skilled additive manufacturing
                technicians perform in-process quality checks on every unique
                geometry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once the part is completed, our quality control experts take
                over to visually and dimensionally inspect the physical part,
                ensuring consistency with your 3D model (or print, if included).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Print it Better
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get high quality 3D-printed parts fast with support from
                engineers who know additive inside and out. Build
                high-performing, reliable parts with six 3D printing
                technologies and 60+ materials.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Learn More
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

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/3dp_brand_campaign_01.jpg"
                alt="Print it Better"
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
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Inspection Documentation for 3D-Printed Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              All parts undergo a 100% visual inspection as well as part
              sampling of measurements to verify that basic dimensions meet
              quoted tolerances. With our AS9100-certified offerings—selective
              laser sintering (SLS), Multi Jet Fusion (MJF), and direct metal
              laser sintering (DMLS)—parts are sampled using AQL (Acceptable
              Quality Limit) level II as part of our manufacturing process.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              If you need a report, we offer three different options, plus a
              comprehensive Build Report. Compare the benefits of each
              inspection report to see which is best suited for your project
              needs.
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
              Standard Report
            </button>
            <button
              onClick={() => setActiveTab("reference")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "reference"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Reference Report
            </button>
            <button
              onClick={() => setActiveTab("as9102")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "as9102"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              AS9102 FAIR
            </button>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center">
            {currentTable.title}
          </h3>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  {currentTable.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="text-left p-4 font-semibold border-r border-gray-700 last:border-r-0 min-w-[150px]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTable.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-gray-200">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="p-4 text-gray-600 text-sm align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Information */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                Additional Information:
              </span>{" "}
              {currentTable.additionalInfo}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Reference Report
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Typically, a Reference Report is used if you want to get
                feedback on a part compared to any drawing you include but it
                cannot be used for pass/fail inspections. We provide a Reference
                Report for all of our 3D printing technologies.
              </p>
              <h3 className="text-2xl font-bold text-[#0B1221] mt-6 mb-4">
                Dimensional Inspection Report (DIR)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A DIR is a standard inspection tool used to compare parts to a
                drawing and provide a pass/fail result, which then requires
                customer feedback on any failures. There are no limits to the
                number of dimensions we measure, but any extra evaluation will
                increase work time and thus increase the lead time and price of
                your parts. While we use one part for the standard inspection,
                more parts can be inspected on request, adding lead time and
                cost. Due to the nature of the material, we are not able to
                offer a DIR for stereolithography (SLA), PolyJet, and advanced
                photopolymer (AP) technologies.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/frame-1-2.jpg"
                alt="Inspection Reports"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/frame-3-3.jpg"
                alt="Build Report and AS9102 FAI"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Build Report
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                For SLS, MJF, and DMLS parts we offer a Build Report, which
                compiles your DIR with a comprehensive list of the information
                from the build process. These include, but are not limited to
                lot numbers, build numbers, over cycles, certificates of
                conformance, and certifications for outsourced processes.
              </p>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                AS9102 First Article Inspection (FAI)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The AS9102 FAI is a more stringent report which validates the
                actual process used to make parts. Protolabs quality control
                will inspect 100% of dimensions provided on a 2D drawing,
                including GD&T. AS9102 is an industry standard format often
                required in the aerospace industry, but other fields can use it,
                too. It is significantly more intense from a completion
                standpoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
