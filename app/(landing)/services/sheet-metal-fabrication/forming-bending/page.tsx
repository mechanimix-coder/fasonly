"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Forming Service"
        desc="Get custom formed sheet metal parts for rapid prototyping and production in as fast as 3 days"
        image="/Assets/Images/services/sheet-metal-fabrication/forming/hero.webp"
        firstButton={{ title: "Upload A Part", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is Press Brake Forming?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Press brake forming is a metal fabrication process that bends
                flat sheet metal into a final shape using a press brake machine.
                Force is applied between a punch (upper tool) and die (bottom
                tool), and linear bends can be made for a variety of metal
                materials and thicknesses.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                All brakes are equipped with CNC controllers for precise part
                positioning and repeatability. Press brake forming works well to
                create parts that include U-bends, flanges, channels, and
                internal bends.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Lead times for qualifying formed parts are as fast as three
                days.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/forming/sheet_metal_fab_1483_570x308.jpg"
                alt="Press Brake Forming Process"
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
              Sheet Metal Forming Design Guidelines and Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Follow these guidelines for formed sheet metal parts to ensure
              consistent quality and fast production times:
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  { label: "Maximum Bend Length", value: "47 in." },
                  {
                    label: "Minimum Qualifying Part Size",
                    value:
                      "0.05 in x 0.05 in (12.7mm x 12.7mm) for formed parts",
                  },
                  { label: "Maximum Pressing Force", value: "80 tons" },
                  {
                    label: "Bend Angles",
                    value: "1 degree 'kick' to 135 degrees",
                  },
                  {
                    label: "Bending Output",
                    value: "Linear bends—external and internal flanges",
                  },
                  {
                    label: "Maximum U-Channel Ratio",
                    value: "2:1 (width:height)",
                  },
                  {
                    label: "Internal Radius Tooling Options",
                    value:
                      "0.01 in. to 1 in. (standard tooling increments) >1 in. radius bends will be bump formed",
                  },
                  { label: "Offsets", value: "Standard offset tooling sizes" },
                  {
                    label: "Hems",
                    value: "Closed hems up to 47 in., open hems up to 36 in.",
                  },
                ].map((row, idx) => (
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

          {/* Additional Guidelines */}
          <div className="space-y-2">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                • Relieve bends
              </span>{" "}
              in CAD designs
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                • For best price and lead time
              </span>
              , use manufacturer-recommended radius tooling
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                • Ensure appropriate placement
              </span>{" "}
              of nearby features (e.g., holes, hardware inserts, other bends)
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sheet Metal Materials and Thicknesses for Formed Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              We offer the following metal materials for custom-formed sheet
              metal parts. Note that based on material thickness, maximum
              bending capabilities will vary.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[150px]">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[200px]">
                    Grade
                  </th>
                  <th className="text-left p-4 font-semibold text-lg min-w-[300px]">
                    Thicknesses Available
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Aluminum */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Aluminum
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>5052-H32</li>
                      <li>6061-T6 (requires review)</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>5052: 0.025 in. – 0.250 in. (0.635mm – 6.35mm)</li>
                      <li>6061: 0.025 in. – 0.134 in. (0.635mm – 3.40mm)*</li>
                    </ul>
                  </td>
                </tr>

                {/* Steel */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Steel
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>CRS/HRPO</li>
                      <li>Galvanneal (pre-plated)</li>
                      <li>Galvanized (pre-plated)</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>
                        CRS/HRPO: 0.025 in. – 0.250 in. (0.635mm – 6.35mm)
                      </li>
                      <li>
                        Pre-plated: 0.025 in. – 0.134 in. (0.635mm – 3.40mm)
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* Stainless Steel */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Stainless Steel
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>304-2B</li>
                      <li>304-4</li>
                      <li>316-2B</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>304-2B: 0.025 in. – 0.250 in. (0.635mm – 6.35mm)</li>
                      <li>304-4: 0.025 in – 0.119 in. (0.635mm – 3.023mm)</li>
                      <li>316-2B: 0.025 in. – 0.134 in. (0.635mm – 3.40mm)</li>
                    </ul>
                  </td>
                </tr>

                {/* Copper */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Copper
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>C1010</li>
                      <li>C1100</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    0.025 in – 0.125 in. (0.635mm – 3.175mm)
                  </td>
                </tr>

                {/* Brass */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Brass
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>C260</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    0.025 in. – 0.125 in. (0.635mm – 3.175mm)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-4 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              *Formed parts made out of Aluminum 6061-T6 require manual review
              and are not configurable during the quoting process.
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
                Applications for Press Brake Formed Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Press brake forming is a commonly used manufacturing process in
                industries such as energy storage, computer electronics,
                robotics, medical, and aerospace. Common sheet metal parts
                fabricated with forming include:
              </p>

              <ul className="space-y-2">
                {[
                  "brackets",
                  "busbars",
                  "covers",
                  "panels",
                  "mounts",
                  "housings or enclosures",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/forming/sheet_metal_fab_1511_low_res_570x308.jpg"
                alt="Applications for Press Brake Formed Parts"
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
// /Assets/Images/services/sheet-metal-fabrication/forming/sheet_metal_fab_1511_low_res_570x308.jpg
