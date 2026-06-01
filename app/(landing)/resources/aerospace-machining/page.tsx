"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("aluminum");

  const tabs = [
    { id: "aluminum", label: "Aluminum" },
    { id: "brass", label: "Brass" },
    { id: "copper", label: "Copper" },
    { id: "stainless", label: "Stainless Steel" },
    { id: "steelAlloy", label: "Steel Alloy" },
    { id: "steelMild", label: "Steel Mild Low Carbon" },
    { id: "titanium", label: "Titanium" },
  ];

  const content = {
    aluminum: {
      title: "Aluminum",
      description:
        "Aluminum is a popular choice for machining due to its low density, good mechanical properties, high thermal and electrical conductivity, and resistance to corrosion. Aluminum alloys, such as 6061-T651, 7075-T651, and 2024-T351, are commonly used in CNC machining because they offer a good balance of strength, machinability, and cost.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_aluminum-2024_02_hr.jpg",
      link: "#",
    },
    brass: {
      title: "Brass",
      description:
        "Brass is an alloy consisting of both copper and zinc. The golden material is a weather- and corrosion-resistant metal with tensile strength similar to mild steel. It's also an easy to machine material, so feedrates can remain high and coolant need is minimal.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_brass_02_hr.jpg",
      link: "#",
    },
    copper: {
      title: "Copper",
      description:
        "Copper is a metal that is corrosion-resistant, extremely electrically conductive, and highly ductile. Its glossy orange-reddish appearance is instantly recognizable, and the metal looks attractive even when it goes through a natural oxidation process that forms a bluish-green coating called patina in response to its environment. Note, however, that copper weldability is considered moderate to poor.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_copper_02_hr.jpg",
      link: "#",
    },
    stainless: {
      title: "Stainless Steel",
      description:
        "Stainless steel is a corrosion-resistant alloy known for its high strength, durability, and excellent machinability. It is widely used in aerospace, medical, and food processing industries due to its ability to withstand harsh environments and maintain structural integrity at various temperatures.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_stainless-steel-303_02_hr.jpg",
      link: "#",
    },
    steelAlloy: {
      title: "Steel Alloy",
      description:
        "Steel alloys are engineered materials that combine iron with carbon and other elements to achieve specific mechanical properties. They offer excellent strength, hardness, and wear resistance, making them ideal for demanding applications such as gears, shafts, and structural components.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_steel-alloy-4140_02_hr.jpg",
      link: "#",
    },
    steelMild: {
      title: "Steel Mild Low Carbon",
      description:
        "Mild steel (low carbon steel) is a versatile and cost-effective material with good machinability and weldability. It contains a small amount of carbon (typically 0.05-0.25%), making it ductile and easy to form. It is commonly used for brackets, mounts, and structural components where high strength is not the primary requirement.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_low-carbon-steel_02_hr.jpg",
      link: "#",
    },
    titanium: {
      title: "Titanium",
      description:
        "Titanium is a lightweight, high-strength metal with exceptional corrosion resistance and biocompatibility. It is widely used in aerospace, medical implants, and high-performance automotive applications. Titanium's excellent strength-to-weight ratio makes it ideal for components that require both durability and reduced mass.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_titanium_02_hr.jpg",
      link: "#",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Aerospace CNC Machining"
        desc="Reduce aerospace project and supply chain risk through reliable delivery, consistent quality, and a responsive team of experts"
        simple
        bg="/Assets/Images/resources/aerospace-machining/short-term-production-hero_v3.jpg"
        firstButton={{ title: "Get a Quote", route: "/" }}
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/cnc-milling-production.jpg"
                alt="CNC Machining for Aerospace Industry"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                CNC Machining for the Aerospace Industry
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Speed, reliability, and quality compliance are key expectations
                of aerospace components. Our CNC machining services support
                demanding low-volume, high-mix production schedules by offering
                consistently reliable fast lead times, expert design and
                manufacturability support, and an online platform for simple
                quoting and order placement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              How We Support Customers in the Aerospace Industry
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "95%+ on-time delivery of durable, precise, production-grade components in days",
                "Application and technical expertise at every stage of development and production",
                "High-speed 3-axis and 5-axis milling and turning with live tooling for complex components",
                "Traceability for qualified aluminum parts",
                "Quality certifications: ISO 9001:2015, AS9100, ITAR registered",
                "Ability to order parts with finer tolerances, diverse finishes, no material left behind, and comprehensive quality documentation",
                "Consistent single-source supplier",
                "Audit ready factories",
                "Post-processing enhancements such as anodizing and chromate plating",
                "Reduced development cost through fast prototyping and production",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#96E92A] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              CNC Machining Processes for Aerospace Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - CNC Milling */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row h-full">
              <div className="relative w-2/5 h-auto min-h-[200px] bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-machining/cnc-milling-production.jpg"
                  alt="CNC Milling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Milling
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  CNC milling is a subtractive manufacturing process that uses
                  3-axis milling and 5-axis indexed milling processes to cut
                  solid plastic and metal blocks into final parts.
                </p>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Capabilities →
                  </a>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Design Guidelines →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 - CNC Turning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row h-full">
              <div className="relative w-2/5 h-auto min-h-[200px] bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-machining/cnc-turning-process-793-hr.jpg"
                  alt="CNC Turning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Turning
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  CNC turning with live tooling combines both lathe and mill
                  capabilities to machine parts with cylindrical features from
                  metal rod stock.
                </p>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Capabilities →
                  </a>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Design Guidelines →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 - Protolabs Network */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row h-full">
              <div className="relative w-2/5 h-auto min-h-[200px] bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-machining/cnc-hubs-parts.jpg"
                  alt="Protolabs Network"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Protolabs Network
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Our manufacturing network provides advanced CNC machining
                  capabilities like tighter tolerances, volume pricing, and
                  anodizing options.
                </p>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Capabilities →
                  </a>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Design Guidelines →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Materials for CNC-Machined Aerospace Components
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                We have spent extensive time researching materials and canvasing
                our customers to better understand what materials matter most
                for the aerospace industry. That research yielded a curated list
                of materials that includes the most in-demand and functionally
                useful metals. Workhorse options like aluminum 6061—which is
                affordable and very strong compared to its weight—make up the
                bulk of the parts we machine, but we also offer a variety of
                steels, brass, copper, and even titanium for more demanding
                applications.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/pl_cnc_machining_mild_steel.jpg"
                alt="CNC machine tool"
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
                src="/Assets/Images/resources/aerospace-machining/blog_cnc_chamfers___fillets-chamfers.jpg"
                alt="Aerospace materials"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Designers know that reducing the weight of anything going into
                space—or even at lower jet flight levels—helps reduce fuel
                consumption, which adds up to substantial savings. There is a
                constant balancing of weight and strength in applications, and
                our available materials cover the vast majority of needs, even
                in early design and prototyping builds during which the end
                material might still be under evaluation. Engineers can build
                and test multiple versions representing multiple different
                material configurations all within the same platform and do so
                very quickly, finding the perfect material fit without losing
                excessive amounts of time.
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
              Metals for CNC-Machined Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area - Two Columns (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentContent.description}
              </p>
              <a
                href={currentContent.link}
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Learn more about {currentContent.title.toLowerCase()} CNC
                machining →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src={currentContent.image}
                alt={currentContent.title}
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
                src="/Assets/Images/resources/aerospace-machining/cnc_machining_pom_c.jpg"
                alt="Plastic CNC machined parts for aerospace"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Plastic CNC-Machined Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                While aerospace&apos;s focus tends toward strong, lightweight
                metals, you might want to consider some plastics that offer
                various qualities consistent with industry needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-[#0B1221]">Acetals</span>{" "}
                come to mind for particularly demanding mechanical applications,
                while{" "}
                <span className="font-semibold text-[#0B1221]">Ultem</span> and{" "}
                <span className="font-semibold text-[#0B1221]">PEEK</span> are
                great choices for high temperature applications.
              </p>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Explore Plastics →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              CNC Machining for Aerospace Applications
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              The aerospace industry relies on CNC-machined parts for a
              multitude of reasons. Two of the most important are accuracy and
              repeatability. In aerospace applications, parts are subject to
              extreme cold and heat, vibration, and massive pressure changes.
              CNC machining is commonly used to produce aerospace components
              such as:
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Brackets */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Brackets
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bulky angular designs are always a great fit for CNC machining.
                Brackets tend to be simple orthogonally based designs and CNC
                machining is great for that, although our sheet metal
                fabrication service might be a better way to go if the bracket
                is thin enough.
              </p>
            </div>

            {/* Card 2 - Engine Components */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Engine Components
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These critical parts must endure wear and tear, hostile
                environments, and require smooth, accurate geometries. Here's an
                ugly scenario: Imagine an engine with pistons scraping across
                rough cylinder heads. CNC machining helps avoid that potential
                catastrophe. Confidence in these components withstanding
                significant forces and stresses is paramount.
              </p>
            </div>

            {/* Card 3 - Heat Exchangers */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Heat Exchangers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These are good parts to manufacture on a CNC mill. The end mill
                can cut into solid blocks to create the fin-like structures
                you're used to seeing. The fins provide extra area to assist
                with heat dissipation into surrounding air. Design these well
                and it's possible to avoid the need for active cooling, such as
                fans.
              </p>
            </div>

            {/* Card 4 - Turbo Pumps */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Turbo Pumps
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Another high-precision application for CNC machining, these spin
                thousands of times per minute. Typically, the impellers and
                blades are curved and must be made smoothly and accurately to
                ensure optimal aerodynamics and structural integrity. That's
                where CNC machining shines.
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
              Trends in Aerospace Design and Manufacturing
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/maelstrom_engine-1-resized-1.png"
                alt="Traditional aerospace design with flat planes and orthogonal features"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Historically, designers tend to think in terms of flat planes
                and orthogonal features (not to say there aren't very complex
                aerospace parts out there). These designs fit very well with the
                machining process because design conception doesn't differ much
                from the toolpathing that ultimately produces those parts (i.e.,
                working in planes and relatively simple angles). That historical
                mindset means that much of the historical data available
                influencing modern designs is born from that same CNC-conducive
                angular approach providing a higher degree of confidence derived
                from past knowledge of how machined materials will respond under
                various conditions and strain.
              </p>
            </div>
          </div>

          {/* Row 2 - Image Right, Text Left */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Right Column - Image (appears left in DOM but right visually due to flex-row-reverse) */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/nasa-part-background.jpg"
                alt="NASA generative AI organic curvy designs"
                fill
                className="object-cover"
              />
            </div>

            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                With the emergence of artificial intelligence (AI), new design
                processes have emerged. In the NASA generative/AI projects we've
                supported, we produced parts with organic curvy designs that
                would appear far better suited for additive manufacturing than
                CNC machining. However, with NASA's knowledge of our
                partnership, they were able to produce these organic,
                structurally optimized designs that are still compatible with
                our machining process, alleviating some of the concern that
                their finite element analysis (FEA) simulations might not
                properly capture if parts were made via a different
                manufacturing process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
