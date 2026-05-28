import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Çevrimiçi CNC İşleme Hizmeti"
        desc="İşlenmiş prototipler ve üretim parçaları 1 gün kadar kısa sürede. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/injection-molding/slr-hero.webp"
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
                  What is Plastic Injection Molding?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our liquid silicone rubber (LSR) molding process produces
                  custom prototypes and end-use production parts in 15 days or
                  less. We use aluminum molds that offer cost-efficient tooling
                  and accelerated manufacturing cycles, and stock various grades
                  and durometers of LSR materials.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for silicone rubber molding:
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
              Liquid Silicone Rubber Molding Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for silicone rubber molding include important
              design considerations to help improve part moldability, enhance
              cosmetic appearance, and reduce overall production time.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              View our design guidelines page for more details. →
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
                {/* Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    12 in. x 8 in. x 4 in.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    304.88mm x 203.2mm x 101.6mm
                  </td>
                </tr>

                {/* Volume Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Volume
                  </td>
                  <td className="p-4 text-gray-600 bg-white">13.3 cu. in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    217,948 cu. mm
                  </td>
                </tr>

                {/* Depth Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Depth
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    No greater than 2 in. from any parting line; deeper parts
                    are limited to a smaller outline
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    No greater than 50.88mm from any parting line; deeper parts
                    are limited to a smaller outline
                  </td>
                </tr>

                {/* Projected Mold Area Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Projected Mold Area
                  </td>
                  <td className="p-4 text-gray-600 bg-white">48 sq. in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    30,968 sq. mm
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Tolerances:</span>{" "}
              Fasonly can maintain a machining tolerance of +/- 0.003 in.
              (0.08mm) with a linear tolerance of +/- 0.025 in./in.
              (0.025mm/mm).
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/silicone-rubber-parts-570x308-1.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Liquid Silicone Rubber Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <ul className="space-y-3">
                {[
                  "Standard Silicone (30, 40, 50, 60, and 70 durometers)",
                  "Medical-Grade Silicone",
                  "Optical-Grade Silicone",
                  "Fluorosilicone (fuel and oil resistant)",
                ].map((material, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Title and Table */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Surface Finish Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-3 font-semibold border-r border-gray-700">
                        FINISH
                      </th>
                      <th className="text-left p-3 font-semibold">
                        DESCRIPTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        finish: "PM-F0",
                        desc: "non-cosmetic, finish to Fasonly' discretion",
                      },
                      {
                        finish: "PM-F1",
                        desc: "low-cosmetic, most toolmarks removed",
                      },
                      {
                        finish: "PM-F2",
                        desc: "non-cosmetic, EDM permissible",
                      },
                      { finish: "SPI-C1", desc: "600 grit stone, 10-12 Ra" },
                      { finish: "PM-T1", desc: "SPI-C1 + light bead blast" },
                      { finish: "PM-T2", desc: "SPI-C1 + medium bead blast" },
                      { finish: "SPI-B1", desc: "600 grit paper, 2-3 Ra" },
                      {
                        finish: "SPI-A2",
                        desc: "grade #2 diamond buff, 1-2 Ra",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="p-3 text-gray-700 font-mono text-sm">
                          {row.finish}
                        </td>
                        <td className="p-3 text-gray-600 text-sm">
                          {row.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/lsr-durometer-30-material-9590_composite-fn-1-1.png"
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
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/metrology-lab-at-proto-labs-570308.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Quality Inspections and Finishing Options
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depending on your application's requirements, you can choose
                from the following when requesting a quote for your silicone
                rubber parts.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Quality Inspections available for on-demand manufacturing orders
              </h3>

              <ul className="space-y-3">
                {[
                  "Designing for Manufacturability (DFM) Feedback",
                  "Scientific Molding Process Development Report",
                  "In-process CMM inspection and machine monitoring",
                  "First article inspection (FAI) and process capability report with GD&T",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/silicone-rubber-operator-900x400.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learn More About Liquid Silicone Rubber Molding
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our guide to liquid silicone rubber (LSR) discusses the
                injection-molding process of the elastic material and offers
                guidelines to improve molded LSR parts. While there are some
                shared similarities to thermoplastic injection molding, LSR is a
                thermoset material with a unique set of design characteristics.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Read Guide
                <ArrowRight className="w-4 h-4" />
              </button>
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
                How Does Liquid Silicone Rubber Molding Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Due to the flexible nature of LSR, parts are manually removed
                from the mold, and thus, ejector pins are not built into the
                mold design. Like a standard aluminum tool, an LSR molding tool
                is fabricated using CNC machining to create a high-temperature
                tool built to withstand the LSR molding process. After milling,
                the tool is polished by hand to customer specifications, which
                allows six standard surface finish options.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                The finished tool is loaded into an advanced LSR-specific
                injection molding press that is precision geared for accurate
                control of shot size to produce the most consistent LSR parts.
                Since LSR is a thermosetting polymer, its molded state is
                permanent—once it is set, it can't be melted again like a
                thermoplastic. When the run is complete, parts (or the initial
                sample run) are boxed and shipped shortly thereafter.
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
                    LSR Molding Process
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
