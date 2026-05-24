"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "30A",
      tearStrength: "85 psi",
      tensileStrength: "399 psi",
      elongation: "245%",
    },
    {
      material: "40A",
      tearStrength: "100 psi",
      tensileStrength: "508 psi",
      elongation: "200%",
    },
    {
      material: "50A",
      tearStrength: "114 psi",
      tensileStrength: "508 psi",
      elongation: "190%",
    },
    {
      material: "60A",
      tearStrength: "121 psi",
      tensileStrength: "580 psi",
      elongation: "160%",
    },
    {
      material: "70A",
      tearStrength: "185 psi",
      tensileStrength: "725 psi",
      elongation: "130%",
    },
    {
      material: "85A",
      tearStrength: "341 psi",
      tensileStrength: "1,088 psi",
      elongation: "80%",
    },
    {
      material: "95A",
      tearStrength: "398 psi",
      tensileStrength: "1,740 psi",
      elongation: "60%",
    },
    {
      material: "Rigid",
      tearStrength: "n/a",
      tensileStrength: "8,702 psi",
      elongation: "17.5%",
    },
  ];

  const metricData = [
    {
      material: "30A",
      tearStrength: "0.59 MPa",
      tensileStrength: "2.75 MPa",
      elongation: "245%",
    },
    {
      material: "40A",
      tearStrength: "0.69 MPa",
      tensileStrength: "3.5 MPa",
      elongation: "200%",
    },
    {
      material: "50A",
      tearStrength: "0.79 MPa",
      tensileStrength: "3.5 MPa",
      elongation: "190%",
    },
    {
      material: "60A",
      tearStrength: "0.83 Mpa",
      tensileStrength: "4.0 Mpa",
      elongation: "160%",
    },
    {
      material: "70A",
      tearStrength: "1.28 Mpa",
      tensileStrength: "5.0 Mpa",
      elongation: "130%",
    },
    {
      material: "85A",
      tearStrength: "2.35 Mpa",
      tensileStrength: "7.5 Mpa",
      elongation: "80%",
    },
    {
      material: "95A",
      tearStrength: "2.74 Mpa",
      tensileStrength: "12.0 Mpa",
      elongation: "60%",
    },
    {
      material: "Rigid",
      tearStrength: "n/a",
      tensileStrength: "60.0 Mpa",
      elongation: "17.5%",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="PolyJet 3D Printing Service"
        desc="Get 3D-printed elastomeric parts within days. Request an online quote today."
        image="/Assets/Images/services/3d-printing/polyjet/hero.png"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
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
                    "Capabilities",
                    "Materials",
                    " PolyJet 3D Printers",
                    "About PolyJet 3D Printing",
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
                  What is 3D printing ?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  PolyJet is an industrial 3D printing process that builds
                  multi-material prototypes with flexible features and complex
                  parts with intricate geometries in as fast as 1 day. A range
                  of hardnesses (durometers) are available, which work well for
                  components with elastomeric features like gaskets, seals, and
                  housings.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for PolyJet 3D printing:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "prototyping designs for overmolding or silicone rubber parts",
                    "combining two colors or durometers into a single part",
                    "simulating elastomers or flexible parts",
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
        title="3D Printing Surface Finish Guide"
        desc="Get this quick reference guide to explore your surface finish options across our six 3D printing technologies."
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              PolyJet Design Guidelines and Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for PolyJet include important design
              considerations to help improve part manufacturability, enhance
              cosmetic appearance, and reduce overall production time.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    US
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Metric
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Maximum Part Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    19.3 in. × 15.4 in. × 7.9 in.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    490mm × 390mm × 200mm
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Layer Thickness
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.00118 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">30 microns</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Feature Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.012 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0.3mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Freestanding Wall, Hole, or Channel Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.030 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0.76mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                Tolerances for PolyJet:
              </span>{" "}
              For well-designed parts, tolerances of ±0.005 (0.1mm) for the
              first inch plus 0.1% of nominal length can typically be achieved.
              Note that tolerances may change depending on part geometry.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/polyjet/tpng-web-polyjet-gasket-lr-1017.webp"
                alt="PolyJet Material Options"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                PolyJet Material Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                PolyJet provides the ability to choose a desired hardness or
                combine material properties into a single build, which makes it
                ideal for prototyping overmolding parts. Shore A hardnesses of
                30A, 40A, 50A, 60A, 70A, 85A, 95A, and rigid are available in
                these colors:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Digital Clear/Translucent",
                  "Digital Black",
                  "Digital White",
                ].map((color, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{color}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn more about PolyJet materials →
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare PolyJet Material Properties
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUnit("us")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              US (Imperial)
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "metric"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metric (SI)
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700">
                    Tensile Tear Strength
                  </th>
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700">
                    Tensile Strength
                  </th>
                  <th className="text-left p-4 font-semibold text-base">
                    Elongation
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    <td className="p-4 text-gray-700 text-sm font-medium">
                      {row.material}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tearStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.elongation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              These figures are approximate and dependent on a number of
              factors, including but not limited to, machine and process
              parameters. The information provided is therefore not binding and
              not deemed to be certified. When performance is critical, also
              consider independent lab testing of additive materials or final
              parts.
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
                How Does PolyJet 3D Printing Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                The PolyJet process begins by spraying small droplets of liquid
                photopolymers in layers that are instantly UV cured. Voxels
                (three-dimensional pixels) are strategically placed during the
                build, which allow for the combination of both flexible and
                rigid photopolymers known as{" "}
                <span className="italic">digital materials</span>. Each voxel
                has a vertical thickness equal to the layer thickness of 30
                microns. The fine layers of digital materials accumulate on the
                build platform to create accurate 3D-printed parts.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Each PolyJet part is completely coated in support material
                during the build, which ultimately is removed by hand using a
                pressurized water stream and a chemical solution bath. No
                post-curing is required after the manufacturing process.
              </p>
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
                    PolyJet 3D Printing Process
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
