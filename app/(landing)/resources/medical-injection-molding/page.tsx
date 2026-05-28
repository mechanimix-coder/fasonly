"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Medical Injection Molding"
        desc="High quality, quick-turn injection-molded parts to accelerate the production of new product development in the medical industry"
        bg="/Assets/Images/resources/medical-injection-molding/bg.jpg"
        text="black"
        firstButton={{ title: "Get a Quote", route: "/" }}
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Why Medical Teams Choose Protolabs
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 6 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 - Move faster without increasing risk */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Move faster without increasing risk
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designs where early process learnings, tooling decisions, and
                manufacturability insights can be carried forward into
                repeatable, production-intent molding processes. Our digital
                quoting, built-in DFM feedback, and rapid iteration help medical
                teams hit clinical, regulatory, and investor milestones.
              </p>
            </div>

            {/* Item 2 - Production-grade quality from the start */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Production-grade quality from the start
              </h3>
              <p className="text-gray-600 leading-relaxed">
                FDA Class II and III devices and non-implantable components
                require consistent quality, traceability, and documentation. Our
                ISO 13485-certified processes support validation, audits, and
                regulatory readiness.
              </p>
            </div>

            {/* Item 3 - Simplify a complex supplier ecosystem */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Simplify a complex supplier ecosystem
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A single partner from prototype through production reduces
                handoffs, approval cycles, and overall program risk. Parts with
                challenging geometries, material requirements, or multi-supplier
                dependencies benefit from simplified sourcing and digitally
                coordinated production workflows.
              </p>
            </div>

            {/* Item 4 - Scale on-demand */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Scale on-demand
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When demand is unpredictable, count on no MOQs, steady lead
                times, and global digital manufacturing from early R&D through
                ramp-up with easy scaling later.
              </p>
            </div>

            {/* Item 5 - Proven in real medical programs */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Proven in real medical programs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From mobility devices to robotic surgical systems and
                infection-prevention products, Protolabs supports fast-moving
                medical teams where speed, precision, and reliability matter
                most.
              </p>
            </div>

            {/* Item 6 - U.S.-based manufacturing with global resilience */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                U.S.-based manufacturing with global resilience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Domestic production supports regulatory confidence, IP
                protection, and supply continuity, while a vetted network of
                manufacturing partners enables additional capacity and
                geographic flexibility when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Injection Molding Capabilities for Medical Device Development
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Protolabs helps medical teams move from concept to production
                faster with injection molding services designed for rapid
                iteration and production grade quality. Our free digital quoting
                platform, ProDesk, provides pricing and built-in design for
                manufacturability feedback, helping teams identify risks early
                and ensure parts are ready for injection molding before tooling
                begins.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/medical-injection-molding/medical-device.jpg"
                alt="Injection Molding for Medical Device Development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/medical-injection-molding/medical-figure3.jpg"
                alt="Medical Injection Molding Capabilities"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                With access to a broad range of thermoplastics and medical grade
                liquid silicone rubber, no minimum order quantities, and
                industry leading lead times, teams can iterate quickly while
                maintaining consistency, quality and control. Our manufacturing
                experts support you throughout the product life cycle, offering
                flexible options including customer-supplied resins, overmolding
                and insert molding, and other secondary injection molding
                operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Protolabs' on demand manufacturing model adapts from prototyping
                through sustained production, enabling faster decision making,
                fewer late stage changes, and predictable outcomes as programs
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Plastic Materials for Medical Devices
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              From high-performance polymers to elastomers, we source and run
              the materials medical teams rely on.
            </p>
          </div>

          {/* 6 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical-Grade Liquid Silicone Rubber (LSR) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/silicone_parts.jpg"
                    alt="Injection Molding for Medical Device Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medical-Grade Liquid Silicone Rubber (LSR)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Go-to elastomer for seals and prototype implants, offering
                  excellent biocompatibility and a wide, tunable softness range.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* PC-ABS and PC Blends */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/watershed.jpg"
                    alt="Injection Molding for Medical Device Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PC-ABS and PC Blends
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Versatile pick for housings, enclosures, wearables, and lab
                  equipment; highly moldable with clean, durable cosmetics and
                  medical-grade options.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* PEEK */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/peek.jpg"
                    alt="Injection Molding for Medical Device Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">PEEK</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Engineered for demanding work such as implant prototypes and
                  surgical tools; delivers top-tier strength and heat/chemical
                  resistance.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Polycarbonate (PC) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/pc_material.webp"
                    alt="Injection Molding for Medical Device Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Polycarbonate (PC)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Trusted for transparent housings, surgical instruments, and IV
                  connectors thanks to its clarity and durable performance, but
                  watch for stress cracking in tough environments.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Polypropylene (PP) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/im_thermo_2017_enclosure_pp_ltgray_polypropylene.jpg"
                    alt="Injection Molding for Medical Device Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Polypropylene (PP)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Cost-effective staple for high-volume disposables such as
                  syringes and pill containers, offering chemical/heat
                  resistance and a bit of flex to reduce cracking.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Thermoplastic Elastomers (TPE/TPU) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/tpu-im-img.webp"
                    alt="Injection Molding for Medical Device Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Thermoplastic Elastomers (TPE/TPU)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Preferred for soft-touch grips, seals, and catheters, with
                  strong chemical bonding in overmolded designs.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
