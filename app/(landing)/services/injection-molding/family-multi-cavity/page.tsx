"use client";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("maximumPartSize");

  const tabs = [
    { id: "maximumPartSize", label: "Maximum Part Size" },
    { id: "maximumPartVolume", label: "Maximum Part Volume" },
    { id: "maximumNumberOfCavities", label: "Maximum Number of Cavities" },
    { id: "maximumSurfaceArea", label: "Maximum Surface Area" },
    { id: "leadTimes", label: "Lead Times" },
  ];

  const content = {
    maximumPartSize: {
      title: "Maximum Part Size",
      description:
        "Maximum part size is a function of mold size and part complexity. The largest size we can support with plastic injection molding is 18.9 in. by 29.6 in. by 8 in. (480mm by 751mm by 203mm).",
      table: null,
    },
    maximumPartVolume: {
      title: "Maximum Part Volume",
      description:
        "Maximum is 59 in. (1,499mm). Specs below exclude tiny parts less than 0.05 in. (1.27mm). Between two parts, if volume is:",
      table: {
        headers: ["If part size is:", "Maximum Difference in Part Volume"],
        rows: [
          ["< 2 in. (50.8mm)", "20%"],
          ["2 in. (50.8mm) to < 5 in. (127mm)", "15%"],
          ["5 in. (127mm) to < 10 in. (254mm)", "10%"],
          ["10 in. (254mm) to 59 in. (1499mm)", "5%"],
        ],
      },
    },
    maximumNumberOfCavities: {
      title: "Maximum Number of Cavities",
      description:
        "The number of possible cavities can be 2, 4, or 8 per mold. This ultimately is dependent on part complexity and size.",
      table: null,
    },
    maximumSurfaceArea: {
      title: "Maximum Surface Area",
      description:
        "Maximum is 175 in. (4,445mm), each cavity added together. Between two parts, if surface area is:",
      table: {
        headers: [
          "If part size is:",
          "Maximum Difference in Part Surface Area",
        ],
        rows: [
          ["< 5 in. (127mm)", "20%"],
          ["5 in. (127mm) to < 10 in. (254mm)", "15%"],
          ["10 in. (254mm) to < 20 in. (508mm)", "10%"],
          ["20 in. (508mm) to < 59 in. (1499mm)", "5%"],
        ],
      },
    },
    leadTimes: {
      title: "Lead Times for Multi-Cavity and Family Tools",
      description:
        "Fundamentally, lead times are based on the complexity and size of your mold and can vary from 1 to 20 days, based on those attributes. Below is a rough idea of what you can expect in terms of turnaround for your parts.",
      table: {
        headers: ["If maximum part size is:", "Design Specs", "Lead time is:"],
        rows: [
          [
            "Maximum Part Volume",
            "No side-pulls, hot-tip gates, contoured ejectors, steel core pins, family and multi-cavity molds",
            "1 business day",
          ],
          ["Maximum Surface Area", "", ""],
          ["Lead Times", "", ""],
          [
            "15 in. by 9 in. by 4 in. (381mm by 229mm by 101.6mm); depending on gate type, maximum part size could be smaller",
            "Does not contain more than two side-pulls; no pick-out cams; family and multi-cavity molds may include only two simple parts",
            "5 business days",
          ],
          [
            "15 in. by 9 in. by 4 in. (381mm by 229mm by 101.6mm); depending on gate type, maximum part size could be larger",
            "Does not contain more than two side-pulls; no pick-out cams; family and multi-cavity molds may include only two simple parts",
            "7 business days",
          ],
        ],
      },
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Multi-Cavity and Family Injection Molding"
        desc="Maximize each shot with multiples of the same or different parts from a single mold"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
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
                    "Material options",
                    "Surface Finishes",
                    "What is Multi-cavity or Family Injection Molding?",
                    "Common Applications",
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
                  What is Family and Multi-Cavity Molding?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Family molding and multi-cavity molding are techniques used to
                  produce multiple parts from a single mold. Rather than
                  producing a single part with each cycle, multiple parts can be
                  produced with a single shot. Multi-cavity molding describes a
                  tool with the same cavity designed to produce multiples of the
                  same parts. While family molding describes a tool with various
                  cavity designs such as a left and right components that mate
                  together.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for Insert molding:
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
        title="Definitive Guide to Injection Molding"
        desc="This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices that ensure your model is optimized for molding."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Family and Multi-Cavity Molding Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for multi-cavity and family injection molding
              include important design considerations to help improve part
              moldability, enhance cosmetic appearance, and reduce overall
              production time.
            </p>
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

                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentContent.description}
                </p>

                {/* Table */}
                {currentContent.table && (
                  <div className="overflow-x-auto">
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
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="p-3 text-gray-600 text-sm">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* General Note for all tabs */}
                <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Tolerances:
                    </span>{" "}
                    Typically, Protolabs can maintain a machining tolerance of
                    +/- 0.003 in. (0.08mm) with an included resin tolerance that
                    can be greater than but no less than +/- 0.002 in./in.
                    (0.002mm/mm).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Materials List */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Injection Molding Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  "ABS",
                  "Acetal Copolymer",
                  "Acetal Homopolymer/Delrin",
                  "ETPU",
                  "HDPE",
                  "LCP",
                  "LDPE",
                  "LLDPE",
                  "Nylon",
                  "PBT",
                  "PC/ABS",
                  "PC/PBT",
                  "PEEK",
                  "PEI",
                  "PET",
                  "PETG",
                  "PMMA (Acrylic, Plexiglas)",
                  "Polycarbonate",
                  "Polypropylene",
                  "PPA",
                  "PPE/PS",
                  "PS",
                  "PSU",
                  "TPU",
                ].map((material, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700 text-sm">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🧪</span>
                <p className="text-gray-500 text-sm mt-2">
                  Injection Molding Materials
                </p>
              </div>
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
                <span className="text-6xl">🎨</span>
                <p className="text-gray-500 text-sm mt-2">
                  Surface Finish Samples
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Surface Finish Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Finish List */}
              <div className="space-y-2">
                {[
                  "PM-FO - non-cosmetic, finish to Protolabs' discretion",
                  "PM-F1 - low-cosmetic, most toolmarks removed",
                  "PM-F2 - non-cosmetic, EDM permissible",
                  "SPI-C1 - 600 grit stone",
                  "PM-T1 - SPI-C1 + light bead blast",
                  "PM-T2 - SPI-C1 + medium bead blast",
                  "SPI-B1 - 600 grit paper",
                  "SPI-A2 - grade #2 diamond buff",
                ].map((finish, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">{finish}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does Multi-Cavity or Family Molding Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Multi-cavity molds enable the production of multiple versions of
                the same part in a single shot. You can take this process to the
                next logical step when you include many different parts on the
                same mold, creating a family mold. If you have ever built a
                plastic model, you've probably worked with parts made in a
                family mold. The runners between each part are left intact,
                forcing you to break each part off the whole.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3 mt-6">
                Advantages:
              </h3>
              <ul className="space-y-2 mb-6">
                {[
                  "High Production Volume: Significantly increases the number of parts produced per hour compared to a single-cavity mold",
                  "Efficiency: Maximizes machine utilization",
                  "Lower Per-part Cost: While the mold itself is more expensive initially, the cost per individual part drops dramatically due to the increased output rate and reduced cycle time per part",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Challenges:
              </h3>
              <ul className="space-y-2">
                {[
                  "Mold Complexity and Cost: It costs more to design and build a balanced multi-cavity mold due to the added complexity and time it takes to cut the mold, but you might make up for that with a lower piece-part price",
                  "Balancing: Ensure that all cavities fill evenly and at the same rate for consistent part quality. Careful runner system design is critical",
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
                <span className="text-6xl">🏭</span>
                <p className="text-gray-500 text-sm mt-2">
                  Multi-Cavity / Family Mold
                </p>
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
              Applications
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Applications Grid - 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Automotive */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Automotive
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For high-volume fasteners, connectors, sub-assembly components,
                interior trim sets, and small standard parts.
              </p>
            </div>

            {/* Consumer Electronics */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Consumer Electronics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standardized components used across many units, housings, and
                internal components for specific devices.
              </p>
            </div>

            {/* Medical Devices */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Medical Devices
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Particularly for disposable items and casings for handheld
                diagnostic tools or kits.
              </p>
            </div>

            {/* Packaging */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Packaging
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Especially beverage, food, cosmetic, and pharmaceutical
                packaging.
              </p>
            </div>

            {/* Appliances */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Appliances
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Housings and components for smaller appliances.
              </p>
            </div>

            {/* Industrial Equipment */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Industrial Equipment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Durable components, housings, and structural parts for
                industrial machinery and equipment.
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
              Types of Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    Types of Parts
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    part: "Electronic device housings",
                    function:
                      "Front/back casings, battery doors, button sets for a specific remote control, phone, or gadget",
                  },
                  {
                    part: "Buttons and keys",
                    function: "Keyboards, control panels, remote controls",
                  },
                  {
                    part: "Caps and closures",
                    function:
                      "Bottle caps, jar lids, flip-tops, spray nozzle components (huge volumes needed)",
                  },
                  {
                    part: "Connectors",
                    function:
                      "Electrical connectors, terminal housings, fiber optic connectors (standardized, high quantity)",
                  },
                  {
                    part: "Fasteners",
                    function:
                      "Plastic clips, rivets, screw anchors, cable ties (commodity, high volume)",
                  },
                  {
                    part: "Medical disposables and casings",
                    function:
                      "Syringe barrels/plungers, pipette tips, test tubes, vial caps, parts for IV sets, sample cups. Two halves of a glucose meter casing, parts for a specific diagnostic test kit (high volume, consistency crucial)",
                  },
                  {
                    part: "Small ears, bushings, washers",
                    function: "Standardized mechanical components",
                  },
                  {
                    part: "Small pipe fittings",
                    function:
                      "Elbows, T-connectors, caps for plumbing/irrigation",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 text-gray-700 font-medium align-top">
                      {row.part}
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      {row.function}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
