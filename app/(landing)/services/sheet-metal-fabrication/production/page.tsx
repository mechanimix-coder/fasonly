"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Low Volume Production Service"
        desc="Streamline your sheet metal sourcing with a single, reliable partner. Backed by expert technical and logistical guidance, verified inspection documentation, and flexible batch production, you can ensure quality, reduce complexity, and respond faster to changing market demands."
        image="/Assets/Images/services/sheet-metal-fabrication/production/smf_moderate_parts_02_600x400-1.png"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        secondButton={{ title: "Start Production Quote", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Production Capabilities for Sheet Metal Parts and Assemblies
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Manufacturing Capabilities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether your production bill of materials includes simple
                designs, complex designs, or both, our fabrication capabilities
                can support your sheet metal geometries.
              </p>

              <div className="space-y-4 mb-4">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Punching
                    </span>{" "}
                    is a sheet cutting process which easily scales to higher
                    volumes and can incorporate formed features in products such
                    as panels, covers, enclosures, and housings.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Bending
                    </span>{" "}
                    offers the ability to include the intricate shapes often
                    found in brackets, mounts, and chassis.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Assembly
                    </span>{" "}
                    of multiple sheet metal components provides a path for
                    complex products such as weldments, sub-assemblies, and
                    custom enclosures to smoothly transition you into
                    production.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Finishing
                    </span>{" "}
                    options provide functional and aesthetic properties. Experts
                    apply your finishing services with options including powder
                    coating, plating, wet paint, masking, and silk screening.
                    You can even combine multiple finishes, if needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/smf_complexity_assembly_2.jpg"
                alt="Production Capabilities for Sheet Metal Parts and Assemblies"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Hint text="Build efficiency into every project and reduce redundancy with manufacturing support at every stage of the product life cycle." />
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
                    Manufacturing Journey
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                The Manufacturing Journey of Production Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Using digital automation, and extensive production expertise, we
                have optimized the process of manufacturing parts for end-use,
                so you can get quality, production-grade parts faster than ever.
                Watch the video to see how we take your product from concept to
                completion.
              </p>
              <p className="text-gray-400 text-sm">FASONLY</p>
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
                Technical Support
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                We can help you navigate from design validation to pilot runs,
                and on to production using these technical tools:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Our 3D-visualized design for manufacturability (DFM)
                    analysis helps optimize your design to meet your production
                    quality objectives. Also, it provides insights to simplify
                    your designs, leading to cost savings.{" "}
                    <a
                      href="#"
                      className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                      Learn more about navigating our sheet metal quoting and
                      ordering process →
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Design for assembly (DFA) can aid in validating that a
                    project can stand up to rigorous delivery reliability and
                    quality benchmarks. Ensuring a design has adequate tooling
                    access and clearance is one way to avoid challenges once
                    full production launch occurs. Our team of applications
                    engineers are standing by to support your design for
                    assembly questions.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Schedule time to discuss your project today →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/support.jpg"
                alt="Technical Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center">
            <div className="mb-8">
              <p className="text-[#0B1221] font-bold text-2xl md:text-3xl tracking-wider">
                Delivery and Logistics
              </p>
              <p className="text-gray-500 mt-5 text-lg md:text-xl tracking-wide">
                Once you are ready to place a production order, our team
                supports you by reviewing your purchase order for any necessary
                quality clauses* and coordinates batch sizes and delivery
                schedules as needed. *Note: Purchase orders with quality clauses
                may take additional time to process, which will extend
                turnaround of order confirmations.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-300">
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
                Note: Purchase orders with quality clauses may take additional
                time to process, which will extend turnaround of order
                confirmations.
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
                Production Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                We stock common sheet metal materials used for production part
                applications. Try our material comparison tool to help decide
                which material option is best for your project. The tool
                compares materials for formability, corrosion resistance, cost
                effectiveness, and more for the following materials:
              </p>

              <ul className="space-y-2">
                {[
                  "Aluminum 5052, 6061",
                  "Brass C260",
                  "Galvanized, Galvannealed (pre-plated steel)",
                  "Low Carbon Steel CR 1008",
                  "Stainless Steel 304, 316",
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
                src="/Assets/Images/services/sheet-metal-fabrication/production/protolabs-sheet-metal-materials-570-x308.jpg"
                alt="Production Materials Comparison Chart"
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
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/sheet-metal-powder-coating-570x308.jpg"
                alt="Production Finishes"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Production Finishes
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our extensive finishing options help you match the exact
                requirements of your sheet metal component or assembly, no
                matter how complex the design or the finishes. These choices are
                designed to work with products that have either functional
                and/or aesthetic finish needs.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Powder Coating",
                  "Plating/Coating",
                  "Wet Paint",
                  "Silk Screening",
                  "Masking",
                  "Part Marking",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Check out our menu of 100+ finishing options →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quality Processes and Documentation
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Qualifying a supplier for production of a specific part number
                or SKU often requires an assessment of process quality. Our
                quality management system (QMS) ensures that your parts receive
                both in-process and post-manufacturing checks. Plus, our quality
                control experts review each batch for visual and dimensional
                accuracy.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Choose from the following menu of inspection documentation to
                get your own assessment of our quality processes at work:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Dimensional Inspection Report",
                  "First Article Inspection",
                  "Certificate of Conformance",
                  "Material Certification",
                  "Finish Certification",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-[#96E92A] font-medium hover:text-[#85d122] transition-colors inline-flex items-center gap-2 group">
                We take quality seriously. See how →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-800">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/04_sm_digital_twin_400x400.webp"
                alt="Quality Processes and Documentation"
                width={400}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/batch-production-670x360-1.jpg"
                alt="Batch Production"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Batch Production
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Carrying and storing inventory is costly, particularly if demand
                forecasts are challenging to predict, such as when bringing new
                products to market. A common mitigation strategy for this
                situation is to stagger product deliveries, known as batch
                production, and avoid taking large volumes of inventory.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our digital quoting system lets you easily configure production
                quantities. Once you receive the price and lead time for your
                desired quantity of parts, our team can work with you to
                translate that total quantity into batches. Instead of shipping
                the total quantity of parts to you in one shipment, we will work
                with you to identify an ideal batch size (sub-quantity of the
                total) and delivery schedule.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                To move forward with your batch production order,{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  contact our customer service team
                </a>{" "}
                and provide the following information:
              </p>

              <ul className="space-y-2">
                {[
                  "Desired batch size (number of parts needed in each shipment)",
                  "Desired shipping schedule/frequency (how often each batch should arrive at your location)",
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
  );
}
