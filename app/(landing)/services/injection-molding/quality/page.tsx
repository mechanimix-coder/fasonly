"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function page() {
  const [activeTab, setActiveTab] = useState<"partial" | "capability">(
    "partial",
  );

  const partialData = {
    title: "CTQ Partial FAI",
    rows: [
      {
        label: "Benefits",
        value:
          "Provides a dimensional capability study of critical features (customer selects features defined through an Inspection Statement of Work)",
      },
      {
        label: "Measurements",
        value:
          "Selected features per Inspection Statement of Work. May include plane-to-plane, hole-to-hole, ID/OD, or radii measurements as critical features",
      },
      { label: "Service Provided By", value: "Protolabs" },
      {
        label: "Additional Features",
        value:
          "Formatted report with bubbled part image and result summary chart",
      },
      {
        label: "Eligibility",
        value:
          "On-demand manufacturing, injection molding orders. Can be added to any other order (excludes: Thermoplastic elastomers (TPU, TPV, TPO, etc.) and liquid silicone rubber (LSR))",
      },
      { label: "Additional Lead Time", value: "None" },
      {
        label: "Price",
        value:
          "Default of 3-piece up to 5 feature partial FAI provided at no additional charge on new unlimited mold orders. For additional part quantities, features, or to add to repeat orders, partial FAI can be modified a la carte. (Starting at $500)",
      },
      {
        label: "Sample Plan",
        value:
          "After establishing the molding process, a partial FAI is done using samples of the first parts off the tool",
      },
      {
        label: "Additional Information",
        value:
          'Available to select in "inspections" during checkout. Upload a 2D drawing with critical features identified. In addition, define part and feature quantities needed. Contact your account representative with questions',
      },
    ],
    downloadLink: "#",
  };

  const capabilityData = {
    title: "CTQ DIR with Capability Study",
    rows: [
      {
        label: "Benefits",
        value:
          "Provides a dimensional capability study of critical features (customer selects features defined through an Inspection Statement of Work)",
      },
      {
        label: "Measurements",
        value:
          "Selected features per Inspection Statement of Work. May include plane-to-plane, hole-to-hole, ID/OD, or radii measurements as critical features",
      },
      { label: "Service Provided By", value: "Protolabs" },
      {
        label: "Additional Features",
        value:
          "Formatted report with bubbled part image and result summary chart",
      },
      {
        label: "Eligibility",
        value:
          "On-demand manufacturing, injection molding orders. Can be added to any other order (excludes: Thermoplastic elastomers (TPU, TPV, TPO, etc.) and liquid silicone rubber (LSR))",
      },
      { label: "Additional Lead Time", value: "None" },
      {
        label: "Price",
        value:
          "Default of 30-piece up to 5 feature Capability Study provided at no additional charge on new unlimited mold orders. For additional part quantities, features, or to add a repeat order, Capability Study can be modified a la carte. (Starting at $1,500)",
      },
      {
        label: "Sample Plan",
        value:
          "After establishing the molding process, the capability report will be based on customer-defined quantity of parts taken from a set of evenly distributed samples while the order is running (30-part minimum)",
      },
      {
        label: "Additional Information",
        value:
          'Available to select in "inspections" during checkout. Upload a 2D drawing with critical features identified. In addition, define part and feature quantities needed. Contact your account representative with questions',
      },
    ],
    downloadLink: "#",
  };

  const currentData = activeTab === "partial" ? partialData : capabilityData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Injection Molding Quality Control"
        desc="How we use digital processes, scientific molding, and inspection reporting to manufacture quality parts consistently"
        image="/Assets/Images/services/injection-molding/hero.png"
        firstButton={{ title: "Get a Quote", route: "/" }}
        secondButton={{ title: "View Inspection Options", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Jump to Section Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-[#0B1221] mb-4">
                  Jump to Section
                </h3>
                <div className="space-y-2">
                  {[
                    "Capabilities",
                    "Materials",
                    "Surface Finishes",
                    "Quality Inspections",
                    "Finishing Options",
                    "About Plastic Injection Molding",
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
              {/* What is Plastic Injection Molding? Section */}
              <div
                id="about-plastic-injection-molding"
                className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  What is Prototyping?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  We have two injection molding service options—prototyping and
                  on-demand manufacturing—and each offers its own benefits
                  depending on your project needs. If part quantities are lower,
                  an affordable entry point for tooling is important, and rapid
                  development over a short period of time is critical, our
                  prototyping option works great.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for plastic injection molding:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "low-volume production",
                    "bridge tooling",
                    "pilot runs",
                    "functional testing and prototyping",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional sections can be added here with matching IDs for navigation */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Design for Manufacturing (DFM) Analysis
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              When requesting a quote through our online quoting system, you
              will receive manufacturing analysis and pricing.
            </p>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                How our manufacturing analysis can improve quality of
                injection-molded parts:
              </h3>
              <ul className="space-y-3">
                {[
                  "Identifies thick walls",
                  "Identifies features with insufficient draft",
                  "Mold flow analysis",
                  "Select gate location",
                  "Select ejector pin location",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/group-1-2.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/scientific-molding-guide-image_570x308-6.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Scientific Molding: Consistently Delivering Quality Parts
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use <span className="font-semibold">scientific</span>, or{" "}
                <span className="font-semibold">decoupled</span>,{" "}
                <span className="font-semibold">injection molding</span> to
                produce consistent parts for our customers. Each project has an
                optimized, documented process that ensures uniformity in every
                run. Modifications are tracked for traceability across runs.
                Scientific molding guarantees consistency in the process,
                meeting specific resin and dimensional requirements whether the
                part is re-run or ordered later.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By controlling fill, pack, and hold, we ensure each part matches
                the previous one, providing benefits of higher quality and
                consistent inspection reports for our customers.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Gate Frozen
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Pressurized Runner
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  No Further Pressurization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">👨‍🔧</span>
                <p className="text-gray-500 text-sm mt-2">
                  Engineering Support
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Design Support from Injection Molding Experts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold">
                  Consultative Design Services:
                </span>{" "}
                Work directly with an injection molding applications engineer to
                improve the moldability of your design. Think of it like having
                your very own injection molding consultant on your team. During
                this process, our applications engineer will collaborate with
                you to understand your design goals, review the manufacturing
                analysis provided in your online quote, and make changes to the
                3D CAD file.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold">
                  Protolabs Proposed Revision (PPR):
                </span>{" "}
                In some instances, we can provide a second CAD model to
                you—called a Protolabs Proposed Revision (PPR). This is a new
                CAD file with changes already made. The revised model can be
                used immediately or you can transfer the modifications to the
                original model. Following the DFM analysis, and, in some cases,
                the PPR, once the part has been approved, Protolabs moves into
                the final step before actual production—the digital preparation.
              </p>

              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Talk to an Applications Engineer.
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Inspections for Injection-Molded Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              We offer several quality inspection reports for injection molding
              orders. Depending on your project requirements you can choose from
              the following reports.
            </p>
          </div>

          {/* Row 1 - Image Left, Text Right (Inspection Reports List) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/im_quality_inspection_3_hi_res.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Available Inspection Reports
              </h3>
              <ul className="space-y-2">
                {[
                  "CTQ Partial FAI",
                  "CTQ DIR with Capability Study",
                  "Production Part Approval Process (PPAP)",
                  "Digital Inspection Report / Full FAI",
                  "Custom Inspection",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right (Standard Inspection Process) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Injection Molding Inspection Reports
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As part of the Protolabs standard, we measure up to four
                plane-to-plane and outside diameter dimensions based on your CAD
                model (X, Y, Z) to quoted tolerances. We automatically define
                these quality control checks and perform the measurements on a
                sampling of parts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In addition, we provide a wide range of other quality
                documentation. Compare the benefits of each inspection report to
                see which is best suited for your project needs.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/frame-1-5.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>

          {/* Row 3 - Image Left, Text Right (How Parts are Measured) */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/scientific-molding-wp-cmm-570x308.png"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                How are Part Dimensions Measured?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use industry standard coordinate-measuring machines
                (CMM)—calipers and pin gauges—just as you would expect from an
                industry leading manufacturing partner. What differentiates our
                process is that we've applied patented automation technology to
                our CMMs to enable in-process inspection with no additional cost
                or lead time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Parts are measured at an equidistant cadence of n/30 where n =
                total part order quantity. Along with the measurement data from
                each part, the Capability Report will also provide the average
                measurement, standard deviation, and a Process Capability Index
                (Cpk) value for all critical dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Critical to Quality (CTQ)
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("partial")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "partial"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              CTQ Partial FAI
            </button>
            <button
              onClick={() => setActiveTab("capability")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "capability"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              CTQ DIR with Capability Study
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {currentData.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 font-semibold text-[#0B1221] w-1/3 align-top">
                      {row.label}
                    </td>
                    <td className="p-4 text-gray-600 align-top">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Excludes Note */}
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500 italic">
              *Excludes: Thermoplastic elastomers (TPU, TPV, TPO, etc.) and
              Liquid Silicone Rubber (LSR).
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mt-6">
            <a
              href={currentData.downloadLink}
              className="inline-flex items-center gap-2 text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium">
              <Download className="w-4 h-4" />
              Download Sample {currentData.title}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Additional Quality Capabilities
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medical Molding Capabilities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We do offer ISO 13485 injection molding capabilities through
                  trusted partners.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Custom Inspection
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Additional inspection options are available, tailored to your
                  requirements, allowing verification of numerous critical
                  dimensions.
                </p>
                <p className="text-gray-600">
                  Contact your account representative to request a custom
                  inspection.
                </p>
              </div>
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
                    Quality Capabilities Overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
