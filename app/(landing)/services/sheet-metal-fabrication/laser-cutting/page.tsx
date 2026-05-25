"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const accordionItems = [
    {
      id: 0,
      title: "Online quoting",
      content:
        "Upload your CAD file to receive an online quote. Configure materials, finishes, and additional options in myRapid.",
    },
    {
      id: 1,
      title: "Expedited 1-day lead times",
      content:
        "Parts can be fabricated and shipped in as fast as 1 day. Standard 3-day lead times for quantities less than 50.",
    },
    {
      id: 2,
      title: "Safe parts without sharp edges",
      content:
        "Parts deburred and edge debris removed prior to shipping (included in the price). Process ensures parts are safe to handle out of the box.",
    },
    {
      id: 3,
      title: "One-stop shop for sheet metal components",
      content:
        "Formed geometries and geometries with hardware inserts available at 3-day lead times for quantities less than 50. Basket of sheet metal components ship on same standard lead time. Flatwork and formed parts produced with one supplier.",
    },
    {
      id: 4,
      title: "Highly reliable cutting capability",
      content:
        "Fiber optic lasers designed for metal cutting applications (vs. other material types) within thickness range of 0.024 in. – 0.250 in. (0.609mm – 6.35mm).",
    },
    {
      id: 5,
      title: "Manufacturing expertise",
      content:
        "Have questions? Work with our team of sheet metal applications engineers to ensure your parts meet your requirements.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // tables

  const [activeTab, setActiveTab] = useState<"standard" | "thin">("standard");

  const data = {
    standard: {
      title: "Standard Thickness (3.40mm - 6.35mm)",
      maxSize: "990.6mm x 482.6mm",
      minPartSize: "6.35mm x 6.35mm",
      thicknessRange: "0.61mm - 6.35mm",
      tolerances: [
        "+/- 0.127mm for all features (except for hardware holes)",
        "+0.076mm/-0.000mm on hardware insert holes to ensure correct seating of inserts",
      ],
    },
    thin: {
      title: "Thin Material (0.61mm - 3.40mm)",
      maxSize: "990.6mm x 1,193.6mm",
      minPartSize: "6.35mm x 6.35mm",
      thicknessRange: "0.61mm - 6.35mm",
      tolerances: [
        "+/- 0.127mm for all features (except for hardware holes)",
        "+0.076mm/-0.000mm on hardware insert holes to ensure correct seating of inserts",
      ],
    },
  };

  const currentData = data[activeTab];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Metal Laser Cutting Service"
        desc="Get custom laser-cut parts in as fast as 1 day. Standard 3-day lead times also available."
        firstButton={{ title: "Upload A Part", route: "/" }}
        simple
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
                    "Our Process",
                    "Design Guidelines",
                    "Materials",
                    "Laser Cutting Applications",
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Beyond Prototyping
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Laser cutting is a manufacturing process where a laser beam
                  pierces raw sheet stock to produce flat geometries. A range of
                  metals are available, which work well for components such as
                  washers, mounts, brackets, and housings.
                </p>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Laser cutting is commonly used for:
                </h3>
                <ul className="space-y-2">
                  {[
                    "prototyping designs or testing product requirements",
                    "efficiencies of scale up to 50+ parts",
                    "parts with standard connectivity features (USB, HDMI, ethernet ports)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sheet Metal Design Guide"
        desc="Download this guide to explore the processes involved in creating sheet metal parts along with how to design common features and select the right material."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Accordion */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Our Laser Cutting Process
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our laser cutting service and capabilities are designed around
                reliably producing quality parts on time.
              </p>

              <div className="space-y-3">
                {accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                      <span className="font-semibold text-[#0B1221] text-base md:text-lg">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openAccordion === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.id
                          ? "max-h-[200px] opacity-100 pb-4 px-4"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/laser-cutting-process.jpg"
                alt="Laser Cutting Process"
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
              Laser Cutting Specifications
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
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
              Standard Thickness (3.40mm - 6.35mm)
            </button>
            <button
              onClick={() => setActiveTab("thin")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "thin"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Thin Material (0.61mm - 3.40mm)
            </button>
          </div>

          {/* Specifications Table */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {/* Maximum Size Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                      Maximum Size
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      {currentData.maxSize}
                    </td>
                  </tr>

                  {/* Minimum Part Size Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                      Minimum Part Size
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      {currentData.minPartSize}
                    </td>
                  </tr>

                  {/* Material Thicknesses Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                      Material Thicknesses
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      {currentData.thicknessRange}
                    </td>
                  </tr>

                  {/* Tolerances Row */}
                  <tr>
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                      Tolerances
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      <ul className="space-y-2">
                        {currentData.tolerances.map((tol, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                            <span className="text-sm">{tol}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
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
              Materials and Thicknesses for Laser Cut Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              We offer the following metal materials for custom laser cut parts.
              Note that based on material thickness, maximum part size will
              vary.
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
                  <th className="text-left p-4 font-semibold text-lg min-w-[250px]">
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
                      <li>6061-T6</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top" rowSpan={4}>
                    0.025 in. - 0.250 in.
                    <br />
                    <span className="text-gray-400 text-sm">
                      (0.635mm - 6.35mm)
                    </span>
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
                      <li>Galvanneal</li>
                      <li>Galvanized</li>
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
                      <li>304 #4</li>
                      <li>316-2B</li>
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
                  <td className="p-4 text-gray-600 align-top" rowSpan={2}>
                    0.025 in. - 0.125 in.
                    <br />
                    <span className="text-gray-400 text-sm">
                      (0.635mm - 3.175mm)
                    </span>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/high-precision-cnc-gas-cutting-metal-sheet-1-1.jpg"
                alt="Applications for Laser Cut Parts"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Applications for Laser Cut Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Laser cutting is a frequently used manufacturing process in
                industries such as energy storage, computer electronics,
                robotics, and aerospace. Common parts fabricated with laser
                cutting include:
              </p>
              <ul className="space-y-2">
                {[
                  "flat patterns",
                  "face plates",
                  "washers",
                  "mounting plates",
                  "panels",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
