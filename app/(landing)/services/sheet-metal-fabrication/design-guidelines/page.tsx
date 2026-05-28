"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("bendRadius");

  const tabs = [
    { id: "bendRadius", label: "Bend Radius" },
    { id: "hems", label: "Hems" },
    { id: "offsets", label: "Offsets" },
    { id: "holesSlots", label: "Holes and Slots" },
    { id: "notchesTabs", label: "Notches and Tabs" },
    { id: "countersinks", label: "Countersinks" },
  ];

  const content = {
    bendRadius: {
      title: "Bend Radius",
      description:
        "We hold a +/-1 degree tolerance on all bend angles. We offer a wide range of common bend radii, but our standard options are .030 (.762mm), .060 (1.524mm), .090 (2.286mm), .120 (3.048mm). These four bend radii tooling choices are available in a 3 day lead time. Minimum flange length on sheet metal parts must be at least 4 times the material thickness.",
      additionalInfo:
        "It is recommended to use the same radii across all bends, and flange length must be at least 4 times the material thickness.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T1.webp",
    },
    hems: {
      title: "Hems",
      description:
        "We form both open and closed hems. The tolerance of a hem is dependent upon the hem's radius, material thickness, and features near the hem.",
      additionalInfo:
        "We recommend that the minimum inside diameter equals the material thickness, and a hem return length of 6x material thickness.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T2.webp",
    },
    offsets: {
      title: "Offsets",
      description:
        "Offsets are used to create Z-shaped profiles in sheet metal parts. We offset height tolerance at +/-0.012 in. (0.304mm) from top of sheet to top of form and recommend an offset of 0.030 in. (0.762mm).",
      additionalInfo:
        "Additional standard options include: available 0.060 in. (1.524mm), 0.093 in. (2.362mm), 0.125 in. (3.175mm), 0.187 in. (4.749mm), 0.213 in. (5.410mm), 0.250 in. (6.35mm), 0.281 in. (7.137mm), and 0.312 in. (7.924mm).",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T3.webp",
    },
    holesSlots: {
      title: "Holes and Slots",
      description:
        "Holes and slots should be a minimum of material thickness in diameter. If a material is 0.036 in. (0.914mm) or thinner, the hole should be 0.062 in. (1.574mm) from the material edge; if the material is thicker than 0.036 in. (0.914mm), the hole should be at least 0.125 in. (3.175mm) from the material edge to avoid distortion.",
      additionalInfo:
        "If hardware inserts are required, the spacing should be according to manufacturer's specifications.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T4.webp",
    },
    notchesTabs: {
      title: "Notches and Tabs",
      description:
        "Notches must be at least the material's thickness or 0.04 in. (1.016mm), whichever is greater, and can be no longer than 5 times its width.",
      additionalInfo:
        "Tabs must be at least 2 times the material's thickness or 0.126 in. (3.200mm), whichever is greater, and can be no longer than 5 times its width.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T5.webp",
    },
    countersinks: {
      title: "Countersinks",
      description:
        "We offer both machined and formed countersinks—conical holes cut into a manufactured object allowing a screw, nail, or bolt to be inserted flush with the surface.",
      additionalInfo:
        "We recommend the major diameters of countersinks measure between 0.090 in. (2.286mm) and 0.500 in. (12.7mm) using one of the following standard angles: 82°, 90°, 100°, and 120°. Tolerance for formed countersink major and minor diameters is +0.020/-0.010 (+0.508mm/-0.254mm).",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T6.webp",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];
  return (
    <div className="w-full mt-20 pt-10 pb-20 bg-white">
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
                    "File format and configuration",
                    "Materials",
                    " Assembly construction guidelines",
                    "Hardware insertion",
                    "Welding and riveting",
                    "Finishing options for assemblies",
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
              {/* Beyond Prototyping Section */}
              <div id="what-is-stereolithography" className="scroll-mt-32">
                <h1 className="text-black text-5xl mb-10">
                  Design Guidelines for Sheet Metal Fabrication
                </h1>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These guidelines for sheet metal fabrication include important
                  design considerations to help improve part manufacturability,
                  enhance cosmetic appearance, and reduce overall production
                  time.
                </p>
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
              Component Sizes for Sheet Metal Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Minimum Dimensions Table */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
                Minimum Dimensions
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Part Type
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Flat Part
                      </td>
                      <td className="p-4 text-gray-600">
                        0.250 in. x 0.250 in.
                        <br />
                        <span className="text-gray-400 text-sm">
                          6.35mm x 6.35mm
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Formed Part
                      </td>
                      <td className="p-4 text-gray-600">
                        0.500 in. x 0.500 in.
                        <br />
                        <span className="text-gray-400 text-sm">
                          12.7mm x 12.7mm
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Maximum Dimensions Table */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
                Maximum Dimensions
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Part Type
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Flat Part
                      </td>
                      <td className="p-4 text-gray-600">
                        39 in. x 47 in.
                        <br />
                        <span className="text-gray-400 text-sm">
                          990.6mm x 1,193.8mm
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Formed Part
                      </td>
                      <td className="p-4 text-gray-600">
                        47 in.
                        <br />
                        <span className="text-gray-400 text-sm">1,193.8mm</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              Tolerances for Sheet Metal Fabrication
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tolerances on One Surface */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Tolerances on One Surface
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Feature
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Material &lt; .13 in.
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Material &gt; .13 in.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Edge to Edge
                    </td>
                    <td className="p-4 text-gray-600">0.005 in. (0.13mm)</td>
                    <td className="p-4 text-gray-600">0.015 in. (0.38mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Edge to Hole
                    </td>
                    <td className="p-4 text-gray-600">0.005 in. (0.13mm)</td>
                    <td className="p-4 text-gray-600">0.015 in. (0.38mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Hole to Hole
                    </td>
                    <td className="p-4 text-gray-600">0.005 in. (0.13mm)</td>
                    <td className="p-4 text-gray-600">0.015 in. (0.38mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Bend to Hole
                    </td>
                    <td className="p-4 text-gray-600">0.015 in. (0.38mm)</td>
                    <td className="p-4 text-gray-600">0.025 in. (0.635mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Bend to Edge
                    </td>
                    <td className="p-4 text-gray-600">0.010 in. (0.25mm)</td>
                    <td className="p-4 text-gray-600">0.020 in. (0.508mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Bend to Bend
                    </td>
                    <td className="p-4 text-gray-600">0.015 in. (0.38mm)</td>
                    <td className="p-4 text-gray-600">0.025 in. (0.635mm)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tolerances on Multiple Surfaces (across bends) */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Tolerances on Multiple Surfaces (across bends)
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Feature
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Material &lt; .13 in.
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Material &gt; .13 in.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Edge or Hole to Formed Feature
                    </td>
                    <td className="p-4 text-gray-600">0.010 in. (0.25mm)</td>
                    <td className="p-4 text-gray-600">0.020 in. (0.508mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Measurements Across 2 Bends
                    </td>
                    <td className="p-4 text-gray-600">0.015 in. (0.38mm)</td>
                    <td className="p-4 text-gray-600">0.025 in. (0.635mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Measurements Across 3+ Bends
                    </td>
                    <td className="p-4 text-gray-600">0.030 in. (0.76mm)</td>
                    <td className="p-4 text-gray-600">0.040 in. (1.016mm)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sheet Metal Material Thickness Range
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Because sheet metal parts are manufactured from a single sheet of
              metal, the part must maintain uniform wall thickness. Sheet metal
              thickness ranges from 0.024 in. (0.609mm) to 0.250 in. (6.35mm).
              Use the tables below to see what thicknesses are available for
              each of our six material types:{" "}
              <span className="font-semibold">Aluminum</span>,{" "}
              <span className="font-semibold">Brass</span>,{" "}
              <span className="font-semibold">Copper</span>,{" "}
              <span className="font-semibold">Stainless Steel</span>,{" "}
              <span className="font-semibold">Steel: CR Non-treated</span>,{" "}
              <span className="font-semibold">
                Steel: CR Galvanneal or CR Galvanized
              </span>
              .
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]">
                    Steel
                  </th>
                  <th
                    className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]"
                    colSpan={3}>
                    Stainless
                  </th>
                  <th
                    className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]"
                    colSpan={2}>
                    Aluminum
                  </th>
                  <th
                    className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]"
                    colSpan={2}>
                    Copper
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[100px]">
                    Brass
                  </th>
                </tr>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    CRS/HRPO*
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    Galvanneal
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    Galvanized
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    304-2B
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    304-2#4
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    316-2B
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    5052-H32
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    6061-T6
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    C101
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    C110
                  </th>
                  <th className="text-left p-3 font-semibold">C260</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    row: "0.024",
                    values: [
                      "0.024",
                      "",
                      "",
                      "0.024",
                      "0.024",
                      "0.024",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.028",
                    values: [
                      "",
                      "0.028",
                      "0.028",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.029",
                    values: [
                      "",
                      "",
                      "",
                      "0.029",
                      "0.029",
                      "0.029",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.030",
                    values: ["0.030", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.032",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.032",
                      "0.032",
                      "0.032",
                      "0.032",
                      "0.032",
                    ],
                  },
                  {
                    row: "0.034",
                    values: [
                      "",
                      "0.034",
                      "0.034",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.036",
                    values: [
                      "0.036",
                      "",
                      "",
                      "0.036",
                      "0.036",
                      "0.036",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.040",
                    values: [
                      "0.040",
                      "0.040",
                      "0.040",
                      "",
                      "",
                      "",
                      "0.040",
                      "0.040",
                      "0.040",
                      "0.040",
                      "0.040",
                    ],
                  },
                  {
                    row: "0.042",
                    values: ["0.042", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.048",
                    values: [
                      "0.048",
                      "",
                      "",
                      "0.048",
                      "0.048",
                      "0.048",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.050",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.050",
                      "0.050",
                      "0.050",
                      "0.050",
                      "0.050",
                    ],
                  },
                  {
                    row: "0.052",
                    values: [
                      "",
                      "0.052",
                      "0.052",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.060",
                    values: [
                      "0.060",
                      "",
                      "",
                      "0.060",
                      "0.060",
                      "0.060",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.063",
                    values: [
                      "0.063",
                      "0.063",
                      "0.063",
                      "",
                      "",
                      "",
                      "0.063",
                      "0.063",
                      "",
                      "",
                      "0.063",
                    ],
                  },
                  {
                    row: "0.064",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.064",
                      "0.064",
                      "",
                    ],
                  },
                  {
                    row: "0.075",
                    values: [
                      "0.075",
                      "",
                      "",
                      "0.075",
                      "0.075",
                      "0.075",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.079",
                    values: [
                      "",
                      "0.079",
                      "0.079",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.080",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.080",
                      "0.080",
                      "0.080",
                      "0.080",
                      "0.080",
                    ],
                  },
                  {
                    row: "0.090",
                    values: [
                      "0.090",
                      "0.093",
                      "0.093",
                      "0.090",
                      "0.090",
                      "0.090",
                      "0.090",
                      "0.090",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.093",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.093",
                      "0.093",
                      "0.093",
                    ],
                  },
                  {
                    row: "0.100",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.100",
                      "0.100",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.105",
                    values: [
                      "0.105",
                      "",
                      "",
                      "0.105",
                      "0.105",
                      "0.105",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.108",
                    values: [
                      "",
                      "0.108",
                      "0.108",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.120",
                    values: [
                      "0.120",
                      "",
                      "",
                      "0.120",
                      "0.120",
                      "0.120",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.123",
                    values: [
                      "",
                      "0.123",
                      "0.123",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.125",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.125",
                      "0.125",
                      "0.125",
                      "0.125",
                      "0.125",
                    ],
                  },
                  {
                    row: "0.135",
                    values: [
                      "0.135*",
                      "",
                      "",
                      "0.135",
                      "0.134",
                      "0.135",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.138",
                    values: [
                      "",
                      "0.138",
                      "0.138",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.160",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.160",
                      "0.160",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.164",
                    values: ["0.164*", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.165",
                    values: ["", "", "0.165", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.179",
                    values: ["0.179*", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.187",
                    values: ["", "", "0.187", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.190",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0.190",
                      "0.190",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0.239",
                    values: ["0.239*", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0.250",
                    values: [
                      "",
                      "",
                      "0.250",
                      "",
                      "",
                      "",
                      "0.250",
                      "0.250",
                      "",
                      "",
                      "",
                    ],
                  },
                ].map((rowData, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 text-gray-700 font-medium">
                      {rowData.row}
                    </td>
                    {rowData.values.map((val, colIdx) => (
                      <td key={colIdx} className="p-3 text-gray-600">
                        {val || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-4 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              *These thicknesses are available as Hot Rolled, Pickled & Oiled
              (HRPO) only
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Finishing Options for Sheet Metal Components
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                We offer welded assemblies, standard mill, edge breaking, and
                orbital-sanded surface finishes along with a number of
                additional sheet metal finishing options:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Seam, tack, and stitch welding
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Hardware insertion and riveting: Standard PEM sheet metal
                    hardware
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Powder coating: A variety of powder coat paint colors
                    available in textured and non-textured finish, including RAL
                    colors.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Silk screening: Colors mixed to closely match most Pantone
                    numbers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Assemblies: POP-riveted and welded
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Plating: Anodize, chromate, zinc, and passivate
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/rapid_17-670x360-a597047.webp"
                alt="Finishing Options for Sheet Metal Components"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sheet Metal Surface Finish Guide"
        desc="Check out our sheet metal guide for a quick snapshot of our Standard and Cosmetic finishing options available for various sheet metal materials."
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Bending Design Guidelines for Sheet Metal Fabrication
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              We've designed these guidelines to help product designers enhance
              their knowledge of{" "}
              <span className="font-semibold">sheet metal fabrication</span>{" "}
              processes and recognize the key factors that influence part
              quality and consistency. Leveraging this guidance on your next
              project can help you manage costs, achieve your desired aesthetic,
              and ensure consistently accurate parts.
            </p>
          </div>

          {/* Row 1 - Understanding Brake Lines (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Understanding Brake Lines
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brake lines occur as a result of the force applied on the sheet
                metal during the bending process, which takes place in a press
                brake. They are a natural consequence of the manufacturing
                process, and without additional treatment or processing, will be
                present on your final product.
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 italic">Brake line present</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-01.webp"
                alt="Brake line present"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Brake line removed (Image Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-02.webp"
                alt="Brake line removed"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Brake line removed
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For products that are cosmetic in nature or require specific
                aesthetic qualities, removing brake lines is possible through
                secondary processing such as:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Using a direct oscillating (DA) tool to blend the brake line
                    into the surrounding material
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Placing a rubber slip sheet atop the die tooling during
                    bending
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Applying a finish—such as powder coating—after forming that
                    covers the full surface of the part. Note: Plating thickness
                    is often insufficient to cover brake lines. Therefore, brake
                    lines will be visible after plating is applied
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                If a uniform finish (without visible brake lines) is needed for
                your part application, contact our applications engineers to
                discuss which method will best suit your needs.
              </p>
            </div>
          </div>

          {/* Row 3 - Feature Proximity to Bends (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Feature Proximity to Bends
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                There is a fundamental rule that when sheet metal is bent in a
                press brake, the material stretches along and in the proximity
                of a bend line. Any feature that is within proximity of a bend
                (typically within 4x material thickness of the bend) is at risk
                for deformation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fortunately, there are several ways to account for this and
                achieve the intended design objective. Here are the common
                design solutions for this situation:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 italic">Deformed area</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-03.jpg"
                alt="Feature Proximity to Bends"
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
              Possible Solutions
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Rationale for Using this Solution
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[250px]">
                      Solution
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Rationale / Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221] align-top">
                      Allow the feature to deform during bending
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Only recommended if deformation is acceptable due to
                            low feature criticality, or during early prototyping
                            stages when future design changes will resolve the
                            issue
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Fasonly design for manufacturability analysis
                            suggests feature deformation as a solution. Note
                            that before manufacturing begins, our sheet metal
                            fabrication experts will evaluate all situations in
                            which deformation is possible and contact you if any
                            concerns arise
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-[#0B1221] align-top">
                      Re-locate/move the at-risk feature
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            The most common solution for situations in which the
                            feature must retain dimensional accuracy
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Our sheet metal design for manufacturability toolkit
                            includes a reference guide of minimum feature
                            distances based on material type and thickness to
                            avoid feature distortion issues
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221] align-top">
                      Change the bend radius
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Opt for a smaller internal bend radius when features
                            are close to, but not through, a bend
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Choose a smaller bend radius to lessen the amount of
                            material stretched at the bend
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Refer to this list of available internal bend radii
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                In most cases, these solutions do not affect cost and lead time
                associated with your design, but they can help you avoid
                additional processing costs across the lifespan of your part.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unsure which solution works best for your design? Our sheet
                metal experts are standing by to provide a free 30-minute design
                review (same day appointments available). Schedule your design
                review{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  here
                </a>
                .
              </p>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 italic">
                  Changing bend radius resolved deformation
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-03.jpg"
                alt="Changing bend radius resolved deformation"
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
              Extending Features Through Bends
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              There is one additional option you can consider to avoid
              deformation along bends—extending a feature through the bend.
            </p>
          </div>

          {/* First Description */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-600 leading-relaxed">
              In images A and B (below), the bracket includes two L-shaped
              cutouts that end along the bend. The material is deformed at the
              point where the top of each L meets the bend.
            </p>
          </div>

          {/* Images A and B - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Image A */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-05.jpg"
                  alt="Material bulging/deformation at bend line - Image A"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Material bulging/deformation at bend line
              </p>
              <p className="text-center text-gray-500 text-sm">Image A</p>
            </div>

            {/* Image B */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-07.jpg"
                  alt="Excess material resulting in deformation (front view) - Image B"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Excess material resulting in deformation (front view)
              </p>
              <p className="text-center text-gray-500 text-sm">Image B</p>
            </div>
          </div>

          {/* Second Description */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-600 leading-relaxed">
              Following the feature distance guidelines in the placing features
              near bends section of our sheet metal DFM toolkit, eliminating
              deformation is possible by extending the L-shape through the bend
              line. This approach removes material where the bend typically
              would be located and is shown in images C and D below.
            </p>
          </div>

          {/* Images C and D - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image C */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-05.jpg"
                  alt="Cut out extended through bend line to relieve material - Image C"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Cut out extended through bend line to relieve material
              </p>
              <p className="text-center text-gray-500 text-sm">Image C</p>
            </div>

            {/* Image D */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-07.jpg"
                  alt="Material removed along bend line (front view) - Image D"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Material removed along bend line (front view)
              </p>
              <p className="text-center text-gray-500 text-sm">Image D</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Fabricating Designs with Features Along a Bend
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Of course, there can be design scenarios in which feature location
              is crucial to your product requirements. In these situations,
              modifying a feature to relieve material along a bend or moving a
              feature away from a bend may not be possible.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Designs that fall into this category often can be fabricated to
              achieve dimensional accuracy, but this comes with additional cost
              and lead time. Instead of accounting for how to design around the
              physical limitations of bending, features can be incorporated
              after the bending process. Hand drilling holes, and CNC milling of
              cutouts and pockets after bending an alternative to laser-cutting
              features before bending.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold">NOTE:</span> Drilling and CNC
              machining are additional services which add cost and lead time to
              a product. Depending on which manufacturing technology you plan to
              use for production volumes, these costs may have a lasting impact
              on the total cost of your project.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Minimum Flange Lengths
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                To accurately achieve a bend in a press brake, a design must
                make three (3) points of contact with the machine. The image to
                the right illustrates these points of contact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If a design makes only two points of contact, you could end up
                with a deformed flange on your final part. In the image below,
                the center portion of the "H" bracket has two flanges on the
                z-axis. These flanges did not make three points of contact in
                the press brake, resulting in inconsistent and deformed bends.
              </p>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-[#0B1221] mb-2">
                  Three points of contact required:
                </h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                  <li>Top Die (Punch)</li>
                  <li>Back Gauge</li>
                  <li>Bottom Die</li>
                </ol>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/image-1-5.webp"
                alt="Three points of contact with press brake"
                width={600}
                height={550}
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Two Images and Description Below */}
          <div>
            {/* Two Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-09.jpg"
                  alt="Adding material to each flange allows workpiece to make three points of contact"
                  width={400}
                  height={350}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-10.webp"
                  alt="Insufficient amount of material to bend flanges"
                  width={400}
                  height={350}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Image Captions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <p className="text-center text-gray-500 text-sm italic">
                Adding material to each flange allows workpiece to make three
                points of contact with press brake
              </p>
              <p className="text-center text-gray-500 text-sm italic">
                Insufficient amount of material to bend flanges
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 leading-relaxed">
                You can avoid quality-related fallout from this issue by
                following the guidance provided in our design for
                manufacturability toolkit.{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  Using this link
                </a>{" "}
                will take you directly to the solution for overcoming minimum
                flange lengths in your design. If your design requires flanges
                to meet your original dimensions, we recommend contacting our
                applications engineers at{" "}
                <span className="font-semibold">877-***-****</span> to discuss
                alternate fabrication methods such as post-forming machining.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Hardware Inserts near Bends
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Including hardware inserts in your sheet metal design is a
              versatile and cost-effective way to join components together.
              Depending on your design requirements, you may find yourself
              placing hardware holes and inserts near to bends.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In situations where hardware inserts are close to bend lines, it
              is important to consider that any hardware hole deformation (due
              to material stretching in the press brake) may affect the
              functionality of the insert itself.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you have flexibility in where you place your hardware inserts
              on your design, we recommend reviewing our{" "}
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                feature proximity to bends guidelines
              </a>{" "}
              earlier in this document. Following this advice will ensure
              consistent part quality and hardware functionality.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              The Challenge with Hardware Holes and Inserts near Bends
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              If hardware location is paramount to your requirements, the
              mounting bracket below illustrates how the bending process
              influences hardware installation and functionality. Read on for a
              recommendation to overcome the challenge.
            </p>
          </div>

          {/* Two Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-11.jpg"
                  alt="Hardware holes may distort if too close to a bend"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic mt-3">
                Hardware holes may distort if too close to a bend
              </p>
            </div>

            {/* Image 2 */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-13.jpg"
                  alt="Incorrectly seated hardware due to hole proximity to the bend"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic mt-3">
                Incorrectly seated hardware due to hole proximity to the bend
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Solving the Challenge with Material Relief
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              You may be familiar with the sheet metal manufacturability term{" "}
              <span className="italic">relief</span>, most used in the phrase{" "}
              <span className="italic">bend relief</span>, but it can be applied
              to other design scenarios. The act of relieving sheet metal
              includes strategically placing cut-outs to allow for material
              stretching during bending without distorting critical features.
            </p>
          </div>

          {/* Two Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-12.jpg"
                  alt="Placing small cut outs around holes"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic mt-3">
                Placing small cut outs around holes
                <br />
                can allow for accurate bends
                <br />
                and correctly seated hardware
              </p>
            </div>
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/sm_parts_hw-relief-after-_02_hr-1.jpg"
                  alt="Material relief example"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Rest of the Text */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              For hardware holes close to bends, adding cutouts around the
              hardware hole provides the necessary material relief during
              bending and leaves the hole undistorted. This approach has the
              benefit of maintaining design intent and keeping part costs low.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              To ensure your inserts are seated correctly into the material, it
              is important to know how much material is required around the
              hole. The online PennEngineering® (PEM) product catalog is a
              helpful tool.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When investigating a specific product in the PEM catalog, under
              the "specifications" section, refer to "min. distance hole C/L to
              edge." This number (displayed in millimeters) is the minimum
              distance required from the hole's centerline to the edge of the
              design. For example, check out this{" "}
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                sample product page
              </a>{" "}
              for CLS-M4-2.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Considering material relief during the design phase of your sheet
              metal project has benefits beyond hardware installation,
              including:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Preventing material tears and cracks along bend lines or
                  stress points such as corners
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Minimizing quality issues such as warping or feature
                  deformation that could affect dimensional accuracy
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Enabling consistency of production from part-to-part and
                  order-to-order
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Improving part durability and performance by reducing material
                  stress
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Design Guidelines for Common Sheet Metal Features
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                {currentContent.description}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {currentContent.additionalInfo}
              </p>
            </div>

            {/* Image at the bottom */}
            <div className="relative bg-gray-100  h-64 md:h-80">
              <Image
                src={currentContent.image}
                alt={currentContent.title}
                width={600}
                height={550}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
