"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "PA 12 Black",
      color: "Black",
      tensileStrength: "7.1 ksi",
      tensileModulus: "276 ksi",
      elongation: "8.5%",
    },
    {
      material: "PA 12 40% Glass-Filled Black",
      color: "Black",
      tensileStrength: "4.35 ksi",
      tensileModulus: "508 ksi",
      elongation: "8.5%",
    },
  ];

  const metricData = [
    {
      material: "PA 12 Black",
      color: "Black",
      tensileStrength: "49 Mpa",
      tensileModulus: "1,900 Mpa",
      elongation: "8.5%",
    },
    {
      material: "PA 12 40% Glass-Filled Black",
      color: "Black",
      tensileStrength: "30 Mpa",
      tensileModulus: "3,500 Mpa",
      elongation: "8.5%",
    },
  ];
  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Multi Jet Fusion (MJF) 3D Printing Service"
        desc="MJF 3D printing builds quality nylon parts suitable for rapid prototyping and production."
        image="/Assets/Images/services/3d-printing/multi-jet-fusion/hero.webp"
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
                    "Compare Material Properties",
                    "Material Options",
                    "Post-Processing",
                    "Why Metal 3D Printing?",
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
                  What is Multi Jet Fusion ?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Multi Jet Fusion is an industrial 3D printing process that
                  produces functional nylon prototypes and end-use production
                  parts in as fast as 1 day. Final parts exhibit quality surface
                  finishes, fine feature resolution, and more consistent
                  mechanical properties when compared to processes like
                  selective laser sintering.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for Multi Jet Fusion are:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "parts requiring consistent isotropic mechanical properties",
                    "functional prototypes and end-use parts",
                    "complex and organic geometries with fine features",
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
        title="
Multi Jet Fusion Booklet"
        desc="This 104-page comprehensive booklet on HP’s Multi Jet Fusion Service, provides must-have insight into best practices and in-depth design guidelines on how to best produce your part using this technology.
"
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Design Guidelines for Multi Jet Fusion
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for Multi Jet Fusion include important design
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
                    11.1 in. x 14.9 in. x 14.9 in.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    284mm x 380mm x 380mm
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Layer Thickness
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.00315 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">80 microns</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Feature Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.020 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0.5mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Wall Thickness
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0.020 in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0.5mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mb-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Tolerances:</span>{" "}
              For well-designed parts, tolerances of +/- 0.012 in. (0.30mm) plus
              0.1% of nominal length for each additional inch can typically be
              achieved. Note that tolerances may change depending on part
              geometry.
            </p>
          </div>

          {/* Warpage Info */}
          <div className="p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Warpage:</span>{" "}
              Larger part sizes (&gt;7 in.) and parts with thin features are the
              most susceptible to warp. We recommend maintaining a uniform
              thickness of 0.125 in. (3.175mm) to ensure stability.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden  sticky top-32">
              <Image
                src="/Assets/Images/services/3d-printing/multi-jet-fusion/service-page-render-mjf.webp"
                alt="Multi Jet Fusion Material Options"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Multi Jet Fusion (MJF) Material Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* PA 12 Black */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PA 12 Black
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  PA 12 Black is a high tensile strength nylon. Final parts are
                  dyed black, and they exhibit quality surface finishes and
                  slightly more isotropic mechanical properties when compared to
                  SLS. When more detail is required, PA 12 can achieve smaller
                  minimum feature resolution (0.02 in) as compared to SLS
                  materials (0.03 in). PA 12 Black is the best material option
                  for designs that incorporate living hinges.
                </p>
                <div>
                  <h4 className="font-semibold text-[#0B1221] text-sm mb-2">
                    Primary Benefits:
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Near isotropic mechanical properties
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Economical material choice
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PA 12 40% Glass-Filled Black */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PA 12 40% Glass-Filled Black
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  PA 12 40% Glass-Filled Black is a 40% glass-filled nylon.
                  Final parts are dyed black. The biggest advantage offered by
                  this material is heat deflection at 347°F (measured at 66
                  psi), ranking 2nd best after PA 12 Mineral-Filled.
                </p>
                <div>
                  <h4 className="font-semibold text-[#0B1221] text-sm mb-2">
                    Primary Benefits:
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Economical material choice
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Heat deflection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Compare MJF Material Properties
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
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[200px]">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[100px]">
                    Color
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Tensile Strength
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Tensile Modulus
                  </th>
                  <th className="text-left p-4 font-semibold min-w-[100px]">
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
                    <td className="p-4 text-gray-600 text-sm">{row.color}</td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileModulus}
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
                Multi Jet Fusion Surface Finish
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Standard */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Standard
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A bead blast removes all powder and leaves a consistent
                  overall texture. Parts are then dyed a standard black color.
                </p>
              </div>

              {/* Vapor Smoothing */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Vapor Smoothing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Significant reduction of surface roughness from 250+ μm RA
                  (as-printed) to 64 – 100 μm RA after smoothing. Available for
                  PA12 Black.
                </p>
              </div>

              {/* Custom */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Custom
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Secondary options include a primer that can be applied as well
                  as taps and inserts.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/multi-jet-fusion/3dp_sf_520x560-mjf-threaded-inserts-standard-1-1.png"
                alt="Multi Jet Fusion Surface Finish"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
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
                    Why Use Multi Jet Fusion?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Why Use Multi Jet Fusion?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                See how 3D printing with Multi Jet Fusion is ideal for
                functional prototypes and end-use, production parts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                How Does Multi Jet Fusion Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Multi Jet Fusion uses an inkjet array to selectively apply
                fusing and detailing agents across a bed of nylon powder, which
                are then fused by heating elements into a solid layer. After
                each layer, powder is distributed on top of the bed and the
                process repeats until the part is complete.
              </p>

              <p className="text-gray-600 leading-relaxed">
                When the build finishes, the entire powder bed with the
                encapsulated parts is moved to a processing station where a
                majority of the loose powder is removed by an integrated vacuum.
                Parts are then bead blasted to remove any of the remaining
                residual powder before ultimately reaching the finishing
                department where they are dyed black to improve cosmetic
                appearance.
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
                    Multi Jet Fusion Process
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
