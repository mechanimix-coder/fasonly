import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Insert Molding Service"
        desc="Get custom plastic parts molded with metal inserts. Upload a part to get an online quote."
        image="/Assets/Images/services/injection-molding/propeller-part.webp"
        firstButton={{ title: "Upload a Part", route: "/" }}
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
                  What is Plastic Insert Molding?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our insert molding processes produce custom prototypes and
                  on-demand production parts in as fast as 15 days. We use
                  aluminum molds that offer cost-efficient tooling, producing
                  parts from a range of thermoplastic and liquid silicone rubber
                  materials.
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
              Insert Molding Design Guidelines
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for overmolding and insert molding include
              important design considerations to help improve part
              manufacturability, enhance cosmetic appearance, and reduce overall
              production time.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              View our design guidelines page for more in-depth details. →
            </a>
          </div>

          {/* Capabilities Table */}
          <div className="overflow-x-auto">
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
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Additional Notes
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Minimum part volume is 0.025 cu. in. (40.98 cu. mm).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    With substrate molds, we can maintain a machining tolerance
                    of ±0.003 in. (0.08mm) with an included resin tolerance that
                    can be greater but no less than 0.002 in./in. (0.002mm/mm).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    With thermoplastic overmolds, tolerances remain the same as
                    substrate molds, however, if the overmold is LSR, then
                    tolerances shift to 0.025 in./in. (0.025mm).
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/green-overmold-part.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
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
                Insert Molding Capabilities
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Instead of a mold that produces a final part using two separate
                shots like overmolding, insert molding generally consists of a
                preformed part—often metal—that is loaded into a mold, where it
                is then overmolded with plastic to create a part with improved
                functional or mechanical properties. We currently accept inserts
                from PEM, Dodge, Tri-Star, Spirol, and Tappex. A complete chart
                of{" "}
                <a
                  href="#"
                  className="text-[#96E92A] hover:text-[#85d122] transition-colors">
                  stocked inserts
                </a>{" "}
                at Protolabs is available here.
              </p>

              <p className="text-gray-300 leading-relaxed">
                One way insert molding is used is with threaded inserts, which
                reinforce the mechanical properties of plastic parts' ability to
                be fastened together, especially over repeated assembly.
                Bushings and sleeves are another great way to increase part
                durability for mating components that need more abrasion
                resistance due to moving parts.
              </p>
            </div>

            {/* Right Column - Image with Labeled Elements */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/insert-molding/om-dg-insertmold-tiny.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image with Numbered Overlays */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/insert-molding/overmolding-and-insert-molding-process-illustration-900x600.png"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is Insert Molding?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Insert molding is a similar process but instead uses a preformed
                part—often metal—that is loaded into a mold where it is then
                overmolded with a thermoplastic resin to create a final
                component. When the run is complete, parts are boxed and shipped
                shortly thereafter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
