"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";
export default function page() {
  const [activeTab, setActiveTab] = useState<"standard" | "dir" | "coC">(
    "standard",
  );

  const tabs = [
    { id: "standard", label: "Standard Inspection" },
    { id: "dir", label: "Dimensional Inspection Report (DIR)" },
    { id: "coC", label: "Certificate of Conformance / FAI" },
  ];

  const content = {
    standard: {
      title: "Standard Inspection",
      headers: [
        "Benefits",
        "Measurements",
        "Eligibility",
        "Additional Features",
        "Lead Time",
        "Price",
        "Sample Plan",
      ],
      rows: [
        [
          "Included in all shipments. No measurement results are provided",
          "Protolabs quality control inspects parts to verify consistency with quoted dimensional and visual standards",
          "Available on all orders.",
          "None",
          "None",
          "None",
          "After the parts are manufactured, one piece from the lot is inspected to verify quoted dimensional tolerances and visual standards.",
        ],
      ],
    },
    dir: {
      title: "Dimensional Inspection Report (DIR)",
      headers: [
        "Benefits",
        "Measurements",
        "Eligibility",
        "Additional Features",
        "Lead Time",
        "Price",
        "Sample Plan",
        "Sample Report",
      ],
      rows: [
        [
          "Verifies numerous dimensional specifications without requiring a 2D drawing.",
          "Protolabs quality control inspects approximately 10 dimensions to verify quoted tolerances. GD&T is excluded from inspection.",
          "N/A",
          "Formatted report with bubbled part image and results summary chart.",
          "None",
          "$250",
          "After the parts are manufactured, one piece from the lot is inspected to verify quoted dimensional tolerances and visual standards.",
          "Download Sample DIR",
        ],
      ],
    },
    coC: {
      title: "Certificate of Conformance / FAI",
      headers: [
        "Benefits",
        "Measurements",
        "Eligibility",
        "Additional Features",
        "Lead Time",
        "Price",
        "Sample Plan",
        "Sample Report",
      ],
      rows: [
        [
          "Verifies the sample part conforms to all dimensions provided in a 2D drawing.",
          "Protolabs quality control inspects 100% of dimensions provided on a 2D drawing, including GD&T. Quoted tolerances apply.",
          "N/A",
          "FAI produced using a template conforming to AS9102C standard.",
          "Adds 1 day",
          "$500",
          "After the parts are manufactured, one piece from the lot is inspected to verify quoted dimensional tolerances and visual standards.",
          "Download Sample FAI",
        ],
      ],
    },
  };

  const currentContent = content[activeTab];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Fabrication Quality Control"
        desc="How we use digital processes, documented work standards, and inspection reporting to manufacture quality parts and assemblies consistently."
        firstButton={{ title: "Get Instand Quote", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Inspection Documentation for Sheet Metal Projects
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              We offer multiple forms of quality inspection documentation and
              reports for{" "}
              <span className="font-semibold">sheet metal fabrication</span>{" "}
              orders. Depending on your project requirements, you can choose
              from these reports within your online quote:
            </p>
          </div>

          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/quality/sm-quality-work-standards-1.jpg"
                alt="Inspection Documentation Options"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <ul className="space-y-3">
                {[
                  "Dimensional Inspection Report",
                  "First Article Inspection (2D drawing required)",
                  "Certificate of Conformance",
                  "Material Certification",
                  "Finish Certification",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">
                Here's more about each of these reporting options so you can
                determine which is the best choice for your project:
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Quality is in Our Work Standards, and our DNA
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to deliver great parts every time. To do that, we
                use clearly documented work standards and procedures. To
                minimize escapes, our team of skilled fabricators performs
                in-process quality checks on every unique geometry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once the part is completed, our quality control experts take
                over to visually and dimensionally inspect the physical part to
                ensure consistency with your 3D model (or print, if necessary).
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/quality/customerservice-male_g8a1478_low_res-1-2-1.jpg"
                alt="Quality Work Standards"
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
              Sheet Metal Inspections
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  {currentContent.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="text-left p-4 font-semibold border-r border-gray-700 last:border-r-0 min-w-[150px]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentContent.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="border-b border-gray-200 bg-white">
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
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Design for Manufacturing (DFM) Analysis
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                When requesting a quote through our digital quoting platform,
                you will receive both manufacturability analysis and pricing.
                This important first step in the digital manufacturing process
                enables you to test multiple designs simultaneously, thereby
                achieving design validation sooner, which saves time in the
                development cycle.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our manufacturing analysis can improve the quality of sheet
                metal parts by:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Identifying non-uniform part thicknesses",
                  "Validating a feature's (e.g. cutouts, holes) proximity to bends",
                  "Verifying hardware insert and sheet metal material compatibility",
                  "Analyzing flange length",
                  "Evaluating bend radius tooling",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column - Image */}
              <div className="flex-1 relative w-full h-80 md:h-[600px] rounded-xl overflow-hidden">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/quality/resized-featured-content-2-0-dfm-img.jpg"
                  alt="Design for Manufacturing (DFM) Analysis"
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Design Support from Sheet Metal Experts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-10">
              Our experts are available to review your sheet metal design and
              discuss any questions you may have. Choose from the two design
              support options below:
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Consultative Design Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work directly with a sheet metal applications engineer to
                improve the manufacturability of your design. It's like having a
                personal sheet metal fabrication consultant on your team. During
                the process, our applications engineer will collaborate with you
                in order to understand your design goals, review the
                manufacturing analysis provided in your online quote, and make
                any necessary changes to the CAD file.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Design Review
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discuss your design with a sheet metal applications engineer to
                answer any manufacturability questions you might have. Common
                design review topics include optimizing for cost, feature
                location and spacing, and questions about press brake forming.
              </p>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Schedule a free virtual meeting today →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
