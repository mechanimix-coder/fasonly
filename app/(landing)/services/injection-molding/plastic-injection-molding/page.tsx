import Blog from "@/component/landing/Blog";
import GuideDownload from "@/component/landing/GuideDownload";
import Quote from "@/component/landing/Quote";
import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Çevrimiçi CNC İşleme Hizmeti"
        desc="İşlenmiş prototipler ve üretim parçaları 1 gün kadar kısa sürede. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/injection-molding/yellow-plastic-part.webp"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
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
                    "Surface Finishes",
                    "Quality Inspections",
                    "Finishing Options",
                    "About Plastic Injection Molding",
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
                  Injection molding is a manufacturing process that consists of
                  filling a metal mold cavity with liquid plastic resin, which
                  then cools and forms a plastic part.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  It's most often used for manufacturing plastic parts at scale
                  due to its low material waste and low cost per part. It's an
                  ideal manufacturing process for industries like medical
                  devices, consumer products, and automotive.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Our plastic injection molding process produces custom
                  prototypes and end-use production parts with lead times as
                  fast as 1 day. We use aluminum molds that offer cost-efficient
                  tooling and accelerated manufacturing cycles, and stock about
                  200 different thermoplastic resins.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for plastic injection molding:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "low-volume production",
                    "bridge tooling",
                    "pilot runs",
                    "functional testing and prototyping",
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
      <Quote
        text="It has been very enlightening to us here at HP that we are able to get parts so rapidly out of the actual materials that we're going to use in the final production."
        author="J.D. HANKINS"
        title="NEW PRODUCT INTRODUCTION ENGINEER, HP"
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Plastic Molding Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our basic guidelines for plastic injection molding include
              important design considerations to help improve part moldability,
              enhance cosmetic appearance, and reduce overall production time.
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
                    18.9 in. x 29.6 in. x 8 in.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    480mm x 751mm x 203mm
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
                      Up to 8 in. if parting line can pass through the middle of
                      the part
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    101mm from parting line
                    <div className="text-sm text-gray-400 mt-1">
                      Up to 203.2mm if the parting line can pass through the
                      middle of the part
                    </div>
                  </td>
                </tr>

                {/* Projected Mold Area Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Projected Mold Area
                  </td>
                  <td className="p-4 text-gray-600 bg-white">175 sq. in.</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    112,903 sq. mm
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Tolerances:</span>{" "}
              Typically, Protolabs can maintain a machining tolerance of +/-
              0.003 in. (0.08mm) with an included resin tolerance that can be
              greater than but no less than +/- 0.002 in./in. (0.002mm/mm).
            </p>
          </div>
        </div>
      </div>
      <Hint />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Grab a Design Cube
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Want to learn more about injection molding? Sign up to receive a
                Design Cube. This physical aid demonstrates how to properly
                design features commonly found on molded parts.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Get a Design Cube
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <Image
                src={
                  "/Assets/Images/services/injection-molding/plastic-injection-molding/protolabs-educator-design-cube.jpg"
                }
                fill
                alt="design cube"
              />
            </div>
          </div>
        </div>
      </div>

      <GuideDownload
        title="Definitive Guide to Injection Molding"
        desc="This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices that ensure your model is optimized for molding.
"
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Thermoplastic Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We have wide selection of more than 100 thermoplastic and
                thermoset materials. And if you're looking for alternative
                material options, check out our{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  guide to resin substitutes
                </a>{" "}
                for ABS, PC, PP, and other commonly molded plastics.
              </p>

              {/* Materials Grid - 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 mt-6">
                {[
                  "ABS",
                  "ABS/PC",
                  "Acetal",
                  "Acetal Homopolymer/Delrin",
                  "ETPU",
                  "HDPE",
                  "LCP",
                  "LDPE",
                  "LLDPE",
                  "Nylon",
                  "PBT",
                  "PC/PBT",
                  "PEEK",
                  "PEI",
                  "PET",
                  "PETG",
                  "PMMA (Acrylic, Plexiglas)",
                  "Polycarbonate",
                  "Polypropylene",
                  "PPA",
                  "PPE/PS",
                  "PS",
                  "PSU",
                  "TPU",
                ].map((material, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {material}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <Image
                src={
                  "/Assets/Images/services/injection-molding/plastic-injection-molding/blue-injection-molding-thermoplastic-rendered-part.jpg"
                }
                fill
                alt="design cube"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/plastic-injection-molding/subq-it-injection-molded-part.jpg"
                  }
                  width={400}
                  height={800}
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Material Selection Guide
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Choose from hundreds of engineering-grade resins for your
                injection molding project. Our material selection guide helps
                you compare properties, applications, and cost considerations to
                find the perfect material for your specific needs.
              </p>

              {/* Material Categories */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F0F8FF] rounded-lg p-4">
                  <h3 className="font-bold text-[#0B1221] mb-2">
                    Thermoplastics
                  </h3>
                  <p className="text-sm text-gray-500">
                    ABS, PC, Nylon, PEEK, and more
                  </p>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-4">
                  <h3 className="font-bold text-[#0B1221] mb-2">Thermosets</h3>
                  <p className="text-sm text-gray-500">
                    Silicone, Epoxy, Phenolic
                  </p>
                </div>
              </div>

              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Explore Materials
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Quality Inspections and Finishing Options for Custom Molded Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Depending on your application's requirements, you can choose from
              the following when requesting an injection molding quote.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Quality Inspections */}
            <div className="bg-[#F0F8FF] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Quality Inspections
              </h3>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                available for on-demand manufacturing orders
              </p>
              <ul className="space-y-3">
                {[
                  "Designing for Manufacturability Feedback (DFM)",
                  "Scientific molding process development report",
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

            {/* Right Column - Post-Processing */}
            <div className="bg-[#F0F8FF] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Post-Processing
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0B1221] mb-2">
                    Mold Texturing (Mold Tech Surface Finishes)
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-700">Laser Engraving</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1221] mb-2">
                    Threaded Inserts
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-700">Component Assembly</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1221] mb-2">
                    Pad Printing
                  </h4>
                </div>
              </div>
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
                    Prototyping vs On-Demand Manufacturing
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Prototyping or On-demand Manufacturing?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                While the molds themselves are similar, part quantities,
                lifetime maintenance, quality documentation, and pricing vary
                depending on which service option is chosen. The right one
                depends on your project needs.
              </p>
              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                How Does Plastic Injection Molding Work?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                The manufacturing process for molded parts is complex. Before
                your parts are even molded, we're there to help you with
                comprehensive manufacturability feedback and consultative design
                services, so you can avoid mold design pitfalls before the resin
                hits the mold. From there, our production process is documented
                and optimized using scientific molding so you get high-quality
                parts consistently and reliably with every production run.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Critical-to-quality (CTQ) dimensions you call out on models let
                us know what areas are most crucial to the success of your
                parts. Once the parts start molding, the process and samples are
                qualified using automated inline CMM technology, generating a
                detailed FAI and process capability study with no additional
                lead time.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our thermoplastic injection molding is a standard process
                involving an aluminum mold with no heating or cooling lines
                running through it, which means cycle times are a bit longer. As
                part of the scientific molding process, our molders
                independently optimize and monitor fill speed, hold pressure,
                and hold time, and periodically inspect part quality and
                cosmetics. During the molding process, we use an automated
                inline CMM to ensure dimensional accuracy, as well as generate a
                detailed process capability study and FAI report.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Resin pellets are loaded into a barrel where they will
                eventually be melted, compressed, and injected into the mold's
                runner system. Hot resin is shot into the mold cavity through
                the gates and the part is molded. Ejector pins facilitate
                removal of the part from the mold where it falls into a loading
                bin. When the run is complete, parts (or the initial sample run)
                are boxed and shipped shortly thereafter.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/plastic-injection-molding/plastic-injection-molding-process-illustration-570x308.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}
