"use client";

import Quote from "@/component/landing/Quote";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Large Format 3D Printing"
        desc="Request an online quote today. Work with our team of 3D printing experts to get quality parts fast."
        image="/Assets/Images/services/3d-printing/large-format/hero.webp"
        firstButton={{ title: "Get Large 3D Prints", route: "/" }}
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
                    "Build Sizes",
                    "Our Large Format 3D Printers",
                    "Part Bonding",
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  Large format 3D printing is used for large, complex geometries
                  and reducing multipart assemblies into a single design. 3D
                  print metal parts as large as 31.5 in. x 15.7 in. x 19.7 in.
                  and plastic parts as large as 29 in. x 25 in. x 21 in.
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
              Maximum Part Sizes for Large Format 3D Printing
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[200px]">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Build Size
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Metal Section Header */}
                <tr className="bg-gray-100">
                  <td
                    colSpan={2}
                    className="p-3 font-bold text-[#0B1221] text-md">
                    Metal
                  </td>
                </tr>

                {/* Aluminum (AlSi10Mg) */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium align-top">
                    Aluminum (AlSi10Mg)
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    31.5 in. x 15.7 in. x 19.7 in.
                    <div className="text-gray-400 text-xs mt-1">
                      400mm x 800mm x 500mm
                    </div>
                  </td>
                </tr>

                {/* Inconel 718 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium align-top">
                    Inconel 718
                  </td>
                  <td className="p-4 text-gray-600 text-sm">—</td>
                </tr>

                {/* Plastic Section Header */}
                <tr className="bg-gray-100">
                  <td
                    colSpan={2}
                    className="p-3 font-bold text-[#0B1221] text-md">
                    Plastic
                  </td>
                </tr>

                {/* ABS-Like Materials */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium align-top">
                    ABS-Like White
                  </td>
                  <td className="p-4 text-gray-600 text-sm" rowSpan={3}>
                    29 in. x 25 in. x 21 in.
                    <div className="text-gray-400 text-xs mt-1">
                      736mm x 635mm x 533mm
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    ABS-Like Gray
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    ABS-Like Translucent/Clear
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    PC-Like Translucent/Clear
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    29 in. x 25 in. x 21 in.
                    <div className="text-gray-400 text-xs mt-1">
                      736mm x 635mm x 533mm
                    </div>
                  </td>
                </tr>

                {/* PA 12 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    PA 12
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    19 in. x 19 in. x 17 in.
                    <div className="text-gray-400 text-xs mt-1">
                      482mm x 482mm x 431mm
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Format Metal 3D Printer */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/large-format/sla-3dp-blog-size-1.jpg"
                  alt="Large Format Metal 3D Printer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Large Format Metal 3D Printer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For large metal parts, we use the Concept Laser X Line 2000R
                  3D printer. This machine provides a build volume of{" "}
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    400 × 800 × 500 mm
                  </span>
                  . The X Line 2000R was designed specifically for the
                  production of large, quality parts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Large, 3D-printed parts are often used in industrial settings,
                  aerospace applications, automotive, and energy.
                </p>
              </div>
            </div>

            {/* Large Format Plastic 3D Printing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/large-format/dmls-xline-large-format-570x308-1.png"
                  alt="Large Format Plastic 3D Printing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Large Format Plastic 3D Printing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <span className="font-semibold text-[#0B1221]">
                    Stereolithography (SLA):
                  </span>{" "}
                  Large SLA parts are built on 3D System iPros, which provide
                  large build volume, while still producing detailed parts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold text-[#0B1221]">
                    Selective Laser Sintering (SLS):
                  </span>{" "}
                  For large parts built in PA 12, we use sPro140 machines.
                </p>
              </div>
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
                Bonding for Large Plastic Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Need a part that exceeds our machine's build volume? Part
                cutting and bonding is available for SLA, SLS, and MJF to
                achieve even larger part sizes.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Wall thickness needs to be sufficient for a good cut. For large
                geometries we need a minimum of a{" "}
                <span className="font-semibold">0.1" (2.54mm)</span> or{" "}
                <span className="font-semibold">0.12" (3mm)</span>
                thick wall to get a decent cut. Keep in mind, the thicker the
                better to achieve the best cut. If a part is too large to print
                in one piece then you will likely want to have thick walls
                regardless to overcome potential part warpage.
              </p>

              <p className="text-gray-600 leading-relaxed">
                The cutting and bonding process will leave stark visible seams
                at the cut and bond interface. These can be unsightly, but may
                be allowable if you are using the part for function only. If the
                part is meant to be aesthetic, custom finishing can be performed
                to smooth, fill, prime, and paint the bond interface seams.
                Note, this is difficult to achieve with functionally clear
                parts.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/large-format/bonded-sla-part.jpg"
                alt="Bonding for Large Plastic Parts"
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
