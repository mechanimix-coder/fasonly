"use client";

import GetAQuote from "@/component/landing/GetAQuote";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

// Type definitions
interface TableRow {
  material: string;
  us: string;
  metric?: string;
}

interface InkStampRow {
  stamp: string;
  spec: string;
}

interface ThreadRow {
  material: string;
  us: string;
  metric?: string;
}

interface ToleranceSection {
  subtitle: string;
  content: string;
}

interface MaximumDimensionsContent {
  title: string;
  description: string;
  table: {
    headers: string[];
    rows: TableRow[];
  };
  note?: string;
  note2?: string;
}

interface MinimumDimensionsContent {
  title: string;
  description: string;
  table: {
    headers: string[];
    rows: TableRow[];
  };
  note: string;
}

interface ThreadingContent {
  title: string;
  description: string;
  table: {
    headers: string[];
    rows: ThreadRow[];
  };
  additionalOptions: string[];
  link: string;
}

interface TolerancesContent {
  title: string;
  description: string;
  sections: ToleranceSection[];
}

interface RadiiContent {
  title: string;
  description: string;
  table: null;
}

interface TextContent {
  title: string;
  description: string;
  sections: ToleranceSection[];
  bulletPoints: string[];
  note: string;
  inkTable: {
    headers: string[];
    rows: InkStampRow[];
  };
}

type TabContent =
  | MaximumDimensionsContent
  | MinimumDimensionsContent
  | ThreadingContent
  | TolerancesContent
  | RadiiContent
  | TextContent;

interface Tab {
  id: string;
  label: string;
}
export default function page() {
  const [activeTab, setActiveTab] = useState<string>("maximumDimensions");

  const tabs: Tab[] = [
    { id: "maximumDimensions", label: "Maximum Dimensions" },
    { id: "minimumDimensions", label: "Minimum Dimensions" },
    { id: "threading", label: "Threading" },
    { id: "tolerances", label: "Tolerances" },
    { id: "radii", label: "Radii" },
    { id: "text", label: "Text" },
  ];

  const content: Record<string, TabContent> = {
    maximumDimensions: {
      title: "Maximum Dimensions",
      description:
        "For specific milling dimensions by material, see maximum part extents for machining.",
      table: {
        headers: ["Material", "US", "Metric"],
        rows: [
          {
            material: "3-axis - ABS",
            us: "10 in. x 14 in. x 1.75 in.",
            metric: "254mm x 356mm x 44.5mm",
          },
          {
            material: "3-axis - Acetal",
            us: "22 in. x 14 in. x 0.75 in.",
            metric: "559mm x 356mm x 19.1mm",
          },
          {
            material: "3-axis - Nylon",
            us: "22 in. x 14 in. x 0.75 in.",
            metric: "559mm x 356mm x 19.1mm",
          },
          {
            material: "3-axis - Aluminum",
            us: "22 in. x 14 in. x 3.75 in.",
            metric: "559mm x 356mm x 95.3mm",
          },
          {
            material: "3-axis - Hard metals*",
            us: "22 in. x 14 in. x 3.75 in.",
            metric: "559mm x 356mm x 95.3mm",
          },
          {
            material: "5-axis - Brass",
            us: "10 in. x 7 in. x 1.75 in.",
            metric: "254mm x 178mm x 44.5mm",
          },
          {
            material: "5-axis - Copper",
            us: "10 in. x 7 in. x 1.75 in.",
            metric: "254mm x 178mm x 44.5mm",
          },
          {
            material: "5-axis - Aluminum",
            us: "10 in. x 7 in. x 3.75 in.",
            metric: "254mm x 178mm x 95.3mm",
          },
          {
            material: "5-axis - Stainless Steel 304",
            us: "4.25 in. x 3.25 in. x 3.75 in.",
            metric: "107.95mm x 82.55mm x 95.25mm",
          },
        ],
      },
      note: "*Hard metals: Titanium (6Al-4V), Stainless Steels (303, 316, 17-4PH), Steel Alloy (4140)",
      note2: "**Denotes two-sided machining only",
    },
    minimumDimensions: {
      title: "Minimum Dimensions",
      description: "Minimum part size requirements for CNC milling.",
      table: {
        headers: ["", "US", "Metric"],
        rows: [
          {
            material: "Size",
            us: "0.25 in. x 0.25 in.",
            metric: "6.35mm x 6.35mm",
          },
          {
            material: "Nominal Thickness",
            us: "0.040 in.",
            metric: "1.02mm",
          },
        ],
      },
      note: "Maximum depth that can be milled is 2 in. (50.8mm) from either side of part.",
    },
    threading: {
      title: "Threading",
      description:
        "In the Fasonly automated factory, we currently support UNC and UNF threads from #2 up to 0.5 in., and metric threads from M2 to M12. Avoid modeling internal threads on your part design.",
      table: {
        headers: ["Thread Type", "Size Range"],
        rows: [
          { material: "UNC / UNF", us: "#2 up to 0.5 in." },
          { material: "Metric", us: "M2 to M12" },
        ],
      },
      additionalOptions: ["Coil inserts", "Key inserts"],
      link: "View Threading Options",
    },
    tolerances: {
      title: "Tolerances",
      description: "",
      sections: [
        {
          subtitle: "Standard Tolerances",
          content:
            "For parts that don't require a technical drawing we typically can hold a machining tolerance of +/- 0.005 in. (0.13mm). Part features are recommended to be thicker than 0.020 in. (0.51mm) in all regions and a nominal part thickness above 0.040 in.",
        },
        {
          subtitle: "High-Requirement Tolerances",
          content:
            "For additional tolerance requirements, we require a technical drawing at time of upload. Linear tolerance quoted to ISO 2768-1-1989-f, standard hole tolerance of +/- 0.005 in. (0.13mm) and hole and bore-style tolerance on specified features may be +/- 0.0005 in. (0.01mm).",
        },
      ],
    },
    radii: {
      title: "Radii",
      description:
        "Sharp inside corners on a part will be radiused (rounded) as a natural result of the CNC machining process. Resulting radii will be the minimum allowable tool radius.",
      table: null,
    },
    text: {
      title: "Text",
      description: "",
      sections: [
        {
          subtitle: "Engraving",
          content:
            "Fasonly' fully automated factory allows you to design in engraving.",
        },
      ],
      bulletPoints: [
        "Plastic and soft metals: Minimum width of 0.018 in. (0.457mm), depth of 0.0118 in. (0.3mm). Example text size would be 16 point Arial Rounded MT font.",
        "Hard metals: Minimum width of 0.033 in. (0.838mm) and depth of 0.0118 in. (0.3mm). Example text size would be 22 point Arial Rounded MT font.",
        "If design permits it, opt for recessed text versus raised text.",
      ],
      note: "Fasonly also offers Laser Part Marking and Ink Stamp for our semi-automated factory capability as well as via Fasonly Network website.",
      inkTable: {
        headers: ["Ink Stamp", "Spec"],
        rows: [
          { stamp: "Black Ink", spec: 'MIL-A-208, 13pt. (1/8") Characters' },
          {
            stamp: "Black Epoxy Ink",
            spec: 'MIL-A-56032, 13pt. (1/8") Characters',
          },
          { stamp: "White Ink", spec: 'MIL-A-208, 13pt. (1/8") Characters' },
          {
            stamp: "White Epoxy Ink",
            spec: 'MIL-A-56032, 13pt. (1/8") Characters',
          },
        ],
      },
    },
  };

  const currentContent = content[activeTab];

  // Helper function to check if content has a table
  const hasTable = (
    content: TabContent,
  ): content is
    | MaximumDimensionsContent
    | MinimumDimensionsContent
    | ThreadingContent => {
    return "table" in content && content.table !== null;
  };

  // Helper function to check if content has additionalOptions
  const hasAdditionalOptions = (
    content: TabContent,
  ): content is ThreadingContent => {
    return "additionalOptions" in content;
  };

  // Helper function to check if content has link
  const hasLink = (content: TabContent): content is ThreadingContent => {
    return "link" in content;
  };

  // Helper function to check if content has sections
  const hasSections = (
    content: TabContent,
  ): content is TolerancesContent | TextContent => {
    return "sections" in content;
  };

  // Helper function to check if content has bulletPoints
  const hasBulletPoints = (content: TabContent): content is TextContent => {
    return "bulletPoints" in content;
  };

  // Helper function to check if content has inkTable
  const hasInkTable = (content: TabContent): content is TextContent => {
    return "inkTable" in content;
  };

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="CNC Milling Service"
        desc="Get custom milled parts for rapid prototyping and production."
        image="/Assets/Images/services/injection-molding/cnc_circflange_al_beadblastededge.webp"
        firstButton={{ title: "Get a Quote", route: "/" }}
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
                  What is Plastic Injection Molding?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our liquid silicone rubber (LSR) molding process produces
                  custom prototypes and end-use production parts in 15 days or
                  less. We use aluminum molds that offer cost-efficient tooling
                  and accelerated manufacturing cycles, and stock various grades
                  and durometers of LSR materials.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for silicone rubber molding:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "low-volume production",
                    "bridge tooling",
                    "pilot runs",
                    "functional prototyping",
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

      <GuideDownload
        title="CNC Machining Design Guide"
        desc="In this guide to CNC machining, you'll learn how to create efficient, manufacturable metal and plastic parts for prototyping and production."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              CNC Milling Design Guidelines and Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for CNC milling include important design
              considerations to help improve part manufacturability, enhance
              cosmetic appearance, and reduce overall production time.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              View our design guidelines page for more details. →
            </a>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Navigation List */}
            <div className="lg:w-1/3">
              <div className="bg-[#F0F8FF] rounded-xl overflow-hidden sticky top-32">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-4 ${
                      activeTab === tab.id
                        ? "bg-white border-l-[#96E92A] text-[#0B1221] font-semibold shadow-sm"
                        : "border-l-transparent text-gray-600 hover:bg-white/50 hover:text-[#0B1221]"
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  {currentContent.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

                {/* Description */}
                {currentContent.description && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentContent.description}
                  </p>
                )}

                {/* Table */}
                {hasTable(currentContent) && currentContent.table && (
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0B1221] text-white">
                          {currentContent.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentContent.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className={`border-b border-gray-200 ${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            <td className="p-3 text-gray-700 text-sm font-medium">
                              {row.material}
                            </td>
                            <td className="p-3 text-gray-600 text-sm">
                              {row.us}
                            </td>
                            {"metric" in row && row.metric && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.metric}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Note */}
                {"note" in currentContent && currentContent.note && (
                  <p className="text-sm text-gray-500 italic mb-4">
                    {currentContent.note}
                  </p>
                )}
                {"note2" in currentContent && currentContent.note2 && (
                  <p className="text-sm text-gray-500 italic mb-4">
                    {currentContent.note2}
                  </p>
                )}

                {/* Additional Options for Threading */}
                {hasAdditionalOptions(currentContent) &&
                  currentContent.additionalOptions && (
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">
                        We also offer the following for milled parts:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        {currentContent.additionalOptions.map((opt, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Link for Threading */}
                {hasLink(currentContent) && currentContent.link && (
                  <a
                    href="#"
                    className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                    {currentContent.link} →
                  </a>
                )}

                {/* Sections for Tolerances and Text */}
                {hasSections(currentContent) && currentContent.sections && (
                  <div className="space-y-4 mb-6">
                    {currentContent.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-bold text-[#0B1221] mb-2">
                          {section.subtitle}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points for Text */}
                {hasBulletPoints(currentContent) &&
                  currentContent.bulletPoints && (
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      {currentContent.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                {/* Note for Text (when no table) */}
                {"note" in currentContent &&
                  currentContent.note &&
                  !hasTable(currentContent) && (
                    <p className="text-gray-600 text-sm mb-4">
                      {currentContent.note}
                    </p>
                  )}

                {/* Ink Stamp Table for Text */}
                {hasInkTable(currentContent) && currentContent.inkTable && (
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0B1221] text-white">
                          {currentContent.inkTable.headers.map(
                            (header, idx) => (
                              <th
                                key={idx}
                                className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                                {header}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {currentContent.inkTable.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className={`border-b border-gray-200 ${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            <td className="p-3 text-gray-700 text-sm font-medium">
                              {row.stamp}
                            </td>
                            <td className="p-3 text-gray-600 text-sm">
                              {row.spec}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                CNC Milling Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We stock more than 30 production-grade plastic and metal
                materials that are suitable for various part applications and
                industries.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Plastics */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                    Plastics
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "ABS",
                      "Acetal",
                      "CPVC",
                      "HDPE",
                      "Nylon",
                      "PEEK",
                      "PEI",
                      "PET",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metals */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                    Metals
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Aluminum",
                      "Brass",
                      "Copper",
                      "Stainless Steel",
                      "Steel Alloy",
                      "Steel Mild Low Carbon",
                      "Titanium",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                Evaluate standard surface finishes for CNC machined parts as
                well as advanced capabilities to improve durability, surface
                finish, and add color.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium mt-4 group">
                Explore Options →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Surface Finish on Milled Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              Typically, we break (debur) the edges on all machined parts. All
              machined plastic parts are left as-machined, which may leave
              visible tool marks. Some metal parts, on the other hand, allow
              more choice. Parts left with sharp edges should be handled with
              care.
            </p>
          </div>

          {/* Grid of Finish Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 - ABS Black */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/black-abs-plastic-milled-part.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">ABS Black</h3>
                <p className="text-gray-300 text-sm">Finish: Broken edge</p>
              </div>
            </div>

            {/* Item 2 - ABS Natural */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/abs-natural-cnc-milled-part.png"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">ABS Natural</h3>
                <p className="text-gray-300 text-sm">Finish: Broken edge</p>
              </div>
            </div>

            {/* Item 3 - Aluminum (Broken Edge) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part-broken-edges.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">Aluminum</h3>
                <p className="text-gray-300 text-sm">Finish: Broken edge</p>
              </div>
            </div>

            {/* Item 4 - Aluminum (Bead Blast) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part-with-bead-blast.png"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">Aluminum</h3>
                <p className="text-gray-300 text-sm">Finish: Bead Blast</p>
              </div>
            </div>

            {/* Item 5 - Aluminum (Sharp Edge) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part-with-sharp-edges.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">Aluminum</h3>
                <p className="text-gray-300 text-sm">Finish: Sharp edge</p>
              </div>
            </div>

            {/* Item 6 - Additional Example */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔩</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">
                  Stainless Steel
                </h3>
                <p className="text-gray-300 text-sm">Finish: As machined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Tour our Digital Machine Shop
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Take a quick tour through our 215,000 sq. ft. CNC machining
              facility in Minnesota to see how we manufacture parts in as fast
              as 24 hours.
            </p>
          </div>

          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🏭</span>
                <p className="text-gray-500 text-sm mt-2">CNC Machine Shop</p>
                <span className="absolute bottom-4 left-4 bg-[#0B1221]/80 text-white text-xs px-2 py-1 rounded">
                  Milling Head (2 axis)
                </span>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                What is CNC Milling and How Does it Work?
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                CNC milling is a subtractive manufacturing process. It starts by
                fixturing a block of metal or plastic material inside the CNC
                mill. Using G-code, the CNC machine is programmed to rapidly
                mill out parts from the block of raw material. Our 3- and 5-axis
                CNC machines are equipped with various toolsets to maximize
                efficiency and production speed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Machined plastic parts are left as-milled, which typically means
                they show visible tool marks. Some metal parts allow more
                finishing choices like anodizing and chromate plating. When the
                run is complete and your required surface finish is applied,
                parts are boxed and shipped shortly thereafter.
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Advanced CNC Capabilities
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our state-of-the-art facility houses over 200 CNC machines
                running 24/7 to deliver your parts on time. With automated tool
                changers, in-process probing, and real-time monitoring, we
                ensure consistent quality across every production run.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From rapid prototypes to high-volume production, our digital
                manufacturing process eliminates traditional bottlenecks. Upload
                your CAD file, receive instant DFM feedback, and get your parts
                delivered in days, not weeks.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">⚙️</span>
                <p className="text-gray-500 text-sm mt-2">5-Axis CNC Machine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
