import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Overmolding Service"
        desc="Get custom plastic parts molded with two materials or metal inserts. "
        image="/Assets/Images/services/injection-molding/green-overmold-part.webp"
        firstButton={{ title: "Get a Quote", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
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
                    "Design Guidelines",
                    " Overmolding Material Bonding",
                    "About Overmolding",
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
                  What is Over Molding?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our overmolding process produces custom prototypes and
                  on-demand production parts in as fast as 15 days. We use
                  aluminum molds that offer cost-efficient tooling, producing
                  parts from a range of thermoplastic and liquid silicone rubber
                  materials.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for over molding:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "low-volume production",
                    "bridge tooling",
                    "pilot runs",
                    "functional prototyping and testing",
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
              Overmolding Design Guidelines
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for overmolding includes important design
              consideration to help improve part manufacturability, enhance
              cosmetic appearance, and reduce overall production time.
            </p>
          </div>

          {/* Capabilities Table */}
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
                {/* Maximum Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Maximum Part Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    18.9 in. x 29.6 in. x 8 in.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    480mm x 751.8mm x 203.2mm
                  </td>
                </tr>

                {/* Volume Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Volume
                  </td>
                  <td className="p-4 text-gray-600 bg-white">59 cu. in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    966,837 cu. mm
                  </td>
                </tr>

                {/* Depth Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Depth
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    4 in. from parting line
                    <div className="text-sm text-gray-400 mt-1">
                      up to 8 in. if the parting line can pass through middle of
                      part
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    101mm from parting line
                    <div className="text-sm text-gray-400 mt-1">
                      Up to 203.2mm if the parting line can pass through middle
                      of part
                    </div>
                  </td>
                </tr>

                {/* Projected Mold Area Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Projected Mold Area
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    175 sq in. (plastic)
                    <div className="text-sm text-gray-400 mt-1">
                      48 sq. in. (silicone rubber)
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    112,903 sq. mm (plastic)
                    <div className="text-sm text-gray-400 mt-1">
                      30,958 sq. mm (silicone rubber)
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Notes */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-[#0B1221] mb-3">
              Additional Notes
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  Height may be limited if using a silicone as the overmold
                  material, and deeper parts are limited to a smaller outline.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  Minimum part volume is 0.025 cu. in. (40.98 cu. mm).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  With substrate molds, we can maintain a machining tolerance of
                  ±0.003 in. (0.08mm) with an included resin tolerance that can
                  be greater but no less than 0.002 in./in. (0.002mm/mm).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  With thermoplastic overmolds, tolerances remain the same as
                  substrate molds, however, if the overmold is LSR, then
                  tolerances shift to 0.025 in./in. (0.025mm).
                </span>
              </li>
            </ul>
          </div>

          {/* Link */}
          <div className="text-center">
            <a
              href="#"
              className="text-[#0099ff] hover:text-[#96E92A] transition-colors inline-flex items-center gap-2">
              View our complete design guidelines →
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Overmolding Material Bonding
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Chemical bonding between overmolded materials is possible, but
              material compatibility should be considered in order to achieve
              desired bond strength. Incorporation of an adequate mechanical
              bond is strongly recommended if bonding is critical to your
              application. An undercut is a good example of a mechanical bond.
            </p>
          </div>

          {/* Material Bonding Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Substrate Material
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[160px]">
                    ABS/PC CYCOLOY C2950-111
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[140px]">
                    PC Lexan 940-701
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[140px]">
                    PBT Valox 357-1001
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[140px]">
                    PP Profax 6323
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    overmold: "TPU - Texin 983-000000",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                  {
                    overmold: "TPV - Santoprene 101-87",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "C",
                  },
                  {
                    overmold: "TPE - Santoprene 101-64",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "C",
                  },
                  {
                    overmold: "LSR - Elastosil 3003/30 A/B",
                    abs: "-",
                    pc: "-",
                    pbt: "M",
                    pp: "-",
                  },
                  {
                    overmold: "TPC - Hytrel 3078",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versaflex OM 1060X-1",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versafflex OM 6240-1",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versaflex OM 6258-1",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versaflex OM 1040X-1",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 font-semibold text-[#0B1221]">
                      {row.overmold}
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.abs === "C"
                            ? "text-[#96E92A]"
                            : row.abs === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.abs}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.pc === "C"
                            ? "text-[#96E92A]"
                            : row.pc === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.pc}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.pbt === "C"
                            ? "text-[#96E92A]"
                            : row.pbt === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.pbt}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.pp === "C"
                            ? "text-[#96E92A]"
                            : row.pp === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.pp}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 p-4 bg-[#F0F8FF] rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#96E92A] rounded"></div>
              <span className="text-sm text-gray-600">C = chemical bond</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#0099ff] rounded"></div>
              <span className="text-sm text-gray-600">
                M = mechanical bond (recommended)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <span className="text-sm text-gray-600">
                - = not recommended / not available
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What is Overmolding?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed mb-4">
                With overmolding, the production of the substrate parts is a
                standard injection molding process involving an aluminum mold
                with no heating or cooling lines running through it. Cycle times
                are a bit longer, which allows our molders to monitor fill
                pressure, cosmetic concerns, and the basic quality of the parts.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When the total run of substrate parts are molded, overmold
                tooling is then assembled to the press. The substrate parts are
                placed by hand into mold where each part is overmolded with
                either a thermoplastic or liquid silicone rubber material.
              </p>
            </div>

            {/* Right Column - Image with Numbered Steps */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/overmolding/overmolding-and-insert-molding-process-illustration-900x600.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              {/* Numbered indicators overlay - representing steps 1-9 */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="absolute top-2/3 left-1/2 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
