"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="CNC Turning Service"
        desc="
Get quality custom turned parts for rapid prototyping and end-use production. Lead times are as fast as 1 day. 
"
        image="/Assets/Images/services/injection-molding/cnc_turn_2017_cylindr_al_sharpedge_.webp"
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
                  What is CNC turning services?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our CNC turning process produces custom prototypes and end-use
                  production parts in as fast as 1 day. We use a CNC lathe with
                  live tooling so features like axial and radial holes, flats,
                  grooves, and slots can be machined.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  CNC turning is often used for:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "functional prototypes and end-use parts",
                    "parts with cylindrical features",
                    "parts with axial and radial holes, flats, grooves, and slots",
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
              Design Guidelines for CNC Turning
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for CNC turning include important design
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
                {/* Maximum Dimensions Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3 align-top">
                    Maximum Dimensions
                  </td>
                  <td className="p-4 text-gray-600 bg-white align-top">
                    <div className="mb-2">
                      <span className="font-medium">Diameter:</span> 3.95 in. *
                    </div>
                    <div>
                      <span className="font-medium">Length:</span> 9 in.
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50 align-top">
                    <div className="mb-2">
                      <span className="font-medium">Diameter:</span> 100.33mm
                    </div>
                    <div>
                      <span className="font-medium">Length:</span> 228.6mm
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mb-8 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[#0B1221]">
                *Hard metals maximum diameter is 2.95 in. (75mm)
              </span>{" "}
              for specific turning dimensions by material, see the full list of
              maximum part extents for machining.
            </p>
          </div>

          {/* Additional Notes */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1221] mb-4">
              Additional Notes on CNC Turning Guidelines
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Small features may be allowed, but the diameter in any region
                  should not be less than 0.030 in. (0.76mm).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Sharp conical points are allowed; angles should be greater
                  than 30 degrees. Walls thinner than 0.020 in. (0.5mm)
                  typically do not survive the machining process.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              {/* Materials Section */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  Materials for CNC Turning
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We stock a range of metal materials that are suitable for
                  various part applications and industries. Choose from
                  aluminum, brass, low carbon steel, stainless steel, steel
                  alloy, and titanium for turned parts.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Aluminum",
                    "Brass",
                    "Low Carbon Steel",
                    "Steel Alloy",
                    "Stainless Steel",
                    "Titanium",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Surface Finish Options Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  Surface Finish Options for Turned Parts
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Parts that are turned typically have a very smooth surface
                  finish. The as-machined surface finish of the cylindrical
                  areas will typically be much smoother using the lathe than the
                  mill, so consider this when selecting the machining method for
                  those parts that qualify for either method. Areas cut with
                  live tooling, such as flats and slots, may have visible tools
                  marks.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If desired, the metal parts can be lightly bead blasted
                  leaving a fine matte finish. Hard metals like steel and
                  stainless steel can also have edges broken (deburred) with a
                  light bead blast to remove metal slivers, and sharp or rough
                  areas.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Table */}
            <div className="flex-1">
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center mb-6">
                <div className="text-center">
                  <span className="text-6xl">🔧</span>
                  <p className="text-gray-500 text-sm mt-2">CNC Turned Parts</p>
                </div>
              </div>

              {/* Table below image */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-3 font-semibold border-r border-gray-700">
                        Material
                      </th>
                      <th className="text-left p-3 font-semibold">
                        Finish Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-3 font-semibold text-[#0B1221]">
                        Aluminum
                      </td>
                      <td className="p-3 text-gray-600">
                        Edges broken with visible toolmarks, edges broken with
                        light bead blast, or sharp edges with visible toolmarks
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-semibold text-[#0B1221]">
                        All other metals
                      </td>
                      <td className="p-3 text-gray-600">
                        Edges broken with visible toolmarks or edges broken with
                        light bead blast
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
              Surface Finish Examples
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Different surface finish options for aluminum parts: broken edge,
              bead blast, and sharp edge.
            </p>
          </div>

          {/* Three Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Image 1 - Aluminum Broken Edge */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔘</span>
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-[#0B1221]">
                  Material: Aluminum
                </p>
                <p className="text-gray-500 text-sm">
                  Surface Finish: Broken Edge
                </p>
              </div>
            </div>

            {/* Image 2 - Aluminum Bead Blast */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">✨</span>
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-[#0B1221]">
                  Material: Aluminum
                </p>
                <p className="text-gray-500 text-sm">
                  Surface Finish: Bead Blast
                </p>
              </div>
            </div>

            {/* Image 3 - Aluminum Sharp Edge */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">⚠️</span>
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-[#0B1221]">
                  Material: Aluminum
                </p>
                <p className="text-gray-500 text-sm">
                  Surface Finish: Sharp Edge
                </p>
              </div>
            </div>
          </div>

          {/* Anodizing and Chromate Plating Specifications Table */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-6 text-center">
              Anodizing and Chromate Plating Specifications
            </h3>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Anodize
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Hard Anodize
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Chromate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-600 align-top">
                      MIL-A-8625 Type II, Class 2 (Bik)
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      MIL-A-8625 Type III, Class 2 (Bik)
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      MIL-DTL-5541 Type II, Class 3 (Clr)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-600 align-top">
                      MIL-A-8625 Type II, Class 1 (Clr)
                    </td>
                    <td className="p-4 text-gray-600 align-top">&nbsp;</td>
                    <td className="p-4 text-gray-600 align-top">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Quick-turn Finishing
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Here are the requirements to get parts in as fast as 4 days
                (1-day expedite + 3 days for plating):
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Aluminum 6061/6082 and 7075 material eligibility",
                  "Threaded holes plugged",
                  "No masking available",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">⚡</span>
                <p className="text-gray-500 text-sm mt-2">Quick-turn Parts</p>
              </div>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right (What is CNC Turning) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is CNC Turning?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                CNC turning is a subtractive manufacturing process that rotates
                a metal rod while a cutting tool is held against the stock to
                remove material and create final parts. Our CNC lathes are also
                equipped with live tooling that can machine flat features and
                holes into the workpiece. Outside diameter (OD) and inside
                diameter (ID) threading is also available.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Turned parts can then be left as-machined, with visible tool
                marks, or bead blasted. When the run is complete, parts are
                inspected, boxed and shipped shortly thereafter.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🔧</span>
                <p className="text-gray-500 text-sm mt-2">
                  CNC Turning Process
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 - High-requirement Finishing - Image Right, Text Left */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                High-requirement Finishing
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Have AS9100 and ITAR requirements? Try our domestic precision
                machining option. If you have more complex anodizing and plating
                requirements, work with our digital network of manufacturers.
                The network works well for components that require a specialized
                color or material option such as titanium or nickel.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🏭</span>
                <p className="text-gray-500 text-sm mt-2">
                  High-requirement Finishing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
