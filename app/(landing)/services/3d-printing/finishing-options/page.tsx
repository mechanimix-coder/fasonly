"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Post-Processing for 3D Printing"
        desc="Evaluate standard surface finishes for 3D-printed parts as well as advanced, custom finishing capabilities to improve durability, surface finish, and add color."
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
                    "Stereolithography",
                    "Multi Jet Fusion",
                    "Selective Laser Sintering",
                    "PolyJet",
                    "Carbon DLS",
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  We offer several surface finish and post-processing options
                  for metal and plastic 3D-printed parts. These options can
                  range from as-printed with only support structures removed to
                  custom finishing for highly aesthetic parts.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Various post-processing operations can be used to:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "Reduce surface roughness",
                    "Add custom color",
                    "Increase transparency",
                    "Increase part strength",
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
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Print it Better
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get high quality 3D-printed parts fast with support from
                engineers who know additive inside and out. Build
                high-performing, reliable parts with six 3D printing
                technologies and 60+ materials.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/3dp_brand_campaign_01.jpg"
                alt="Print it Better"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Surface Finish Options by Technology
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Metals Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Metals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/M1.jpg"
                    alt="Metals Standard Finish"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                    Standard
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expect roughness values of 200 to 400 μin Ra (0.005 to
                    0.010mm Ra), depending on material and resolution. Support
                    structures are removed and layer lines are visible.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/M2.jpg"
                    alt="Metals Custom Finish"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                    Custom
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Custom finishing for metal 3D-printed parts includes
                    post-processing machining, heat treatments, and several
                    brushed surface finishes in a range of grits.
                  </p>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors">
                    View a complete list of custom finishing options →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Plastics - Stereolithography Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Plastics - Stereolithography
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                {
                  title: "Unfinished",
                  desc: "Dots, or standing 'nibs,' remain evident on the bottom of the part from the support structure remnants. Good for when fast lead times are required or cost is a factor.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P1.jpg",
                },
                {
                  title: "Natural",
                  desc: "Supported surfaces are sanded down to eliminate the support nibs.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P2.jpg",
                },
                {
                  title: "Standard",
                  desc: "Supported surfaces are sanded, and the entire part is finely blasted for a consistent look. Note that the layers are still present.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P3.jpg",
                },
                {
                  title: "Custom",
                  desc: "Soft-touch paint, clear part finishing, painting, masking, color matching, decals/graphics, and texture finishes are available.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P4.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Custom" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        View custom options →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multi Jet Fusion Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Multi Jet Fusion
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                {
                  title: "As-printed",
                  desc: "Parts will be gray in color and slightly rougher in texture compared to standard finish.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ1.jpg",
                },
                {
                  title: "Standard",
                  desc: "A bead blast removes all powder and leaves a consistent overall texture. Parts are then dyed a standard black color.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ2.jpg",
                },
                {
                  title: "Vapor Smoothing",
                  desc: "Significant reduction of surface roughness from 250+ μin RA (as-printed) to 64 – 100 μin RA after smoothing. Available for PA12 Black and PA12 40% Glass-Filled Black.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ3.jpg",
                },
                {
                  title: "Custom",
                  desc: "Common post-processing options for MJF parts include a primer that can be applied, as well as taps and inserts.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ4.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Custom" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        View custom options →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selective Laser Sintering Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Selective Laser Sintering
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: "Standard",
                  desc: "Parts are bead blasted to remove loose powder and create a smooth matte finish.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/S1.jpg",
                },
                {
                  title: "Vapor Smoothing",
                  desc: "Significant reduction of surface roughness from 250+ μin RA (as-printed) to 64 – 100 μin RA after smoothing. Available in PA 11 Black, PA 12 White, PA 12 40% Glass-Filled, and TPU 70-A.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/S2.jpg",
                },
                {
                  title: "Custom",
                  desc: "Common post-processing options for SLS parts include a primer that can be applied, as well as taps and inserts.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/S3.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Custom" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        View custom options →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PolyJet Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              PolyJet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Standard",
                  desc: "Support structures are removed and sanded down to remove nibs.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/PJ1.jpg",
                },
                {
                  title: "Custom",
                  desc: "Common custom finishing is a clear coat on the digital clear material to enhance translucence.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/PJ2.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Custom" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        View custom options →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carbon DLS Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Carbon DLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Natural",
                  desc: "Aesthetics will vary based on build orientation. Standing nibs are sanded flat.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/C1.jpg",
                },
                {
                  title: "Standard",
                  desc: "Parts are bead blasted to remove loose powder and create a smooth matte finish.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/C2.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
              Custom Finishing
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Custom finishing options to meet your exact specifications are
              available.
            </p>
          </div>

          {/* Plastics Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Plastics
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[180px]">
                      Finish Type
                    </th>
                    <th className="text-left p-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Clear Coat",
                      desc: "Applied to plastic parts to create a clear, glossy finish. Ideal for lenses and other optical applications.",
                    },
                    {
                      name: "Thermal Cure",
                      desc: "Enhance mechanical properties of Accura 5530 and PerForm. This process does make parts more brittle.",
                    },
                    {
                      name: "Plating",
                      desc: "Electroless nickel plating adds strength and durability to plastic parts.",
                    },
                    {
                      name: "Painting",
                      desc: "Parts can be painted to match any Pantone number. For best results, parts are typically sanded and polished before applying paint.",
                    },
                    {
                      name: "Dyeing",
                      desc: "Dyeing is a low-cost option when a material's natural color is not desired. Color options include black, green, red, blue, and yellow.",
                    },
                    {
                      name: "Texture",
                      desc: "Apply a spray texture to mimic a Mold-Tech brand-like finish or improve UV-resistance of SLA parts.",
                    },
                    {
                      name: "Laser Engraving",
                      desc: "Laser engraving can be applied to a raw 3D-printed part or a part that has been coated with Cerakote or paint. Laser engraving ensures crisp, consistent information on each part and great for logos, part numbers or serialization.",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 text-gray-700 font-medium text-sm align-top">
                        {item.name}
                      </td>
                      <td className="p-4 text-gray-600 text-sm align-top leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Metals Table */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Metals
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[180px]">
                      Finish Type
                    </th>
                    <th className="text-left p-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "CNC Machining",
                      desc: "Achieve smooth surface finishes, tighter tolerances, or threading with post-process machining.",
                    },
                    {
                      name: "Cerakote",
                      desc: "Cerakote is a high-quality, rugged coating for a wide variety of printed parts, independent of the printing process you choose.",
                    },
                    {
                      name: "Heat Treatment",
                      desc: "Multiple heat treatments are available to further enhance mechanical properties of metal additive parts. NADCAP certification is available upon request.",
                    },
                    {
                      name: "Hot Isostatic Pressing (HIP)",
                      desc: "Hot Isostatic Pressing (HIP)",
                    },
                    { name: "Annealing", desc: "Annealing" },
                    { name: "Aging", desc: "Aging" },
                    {
                      name: "Polishing",
                      desc: "Brushed and polish surface finishes are available upon request.",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 text-gray-700 font-medium text-sm align-top">
                        {item.name}
                      </td>
                      <td className="p-4 text-gray-600 text-sm align-top leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              How to Order Parts with Custom Finishing
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#96E92A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                  1
                </div>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/step1.jpg"
                    alt="Step 1: Select Custom Finish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Step 1
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In your quote configuration, select "custom" from the finish
                  drop-down menu. From here you will be prompted to describe
                  what type of finish you are looking for.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#96E92A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                  2
                </div>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/step2.jpg"
                    alt="Step 2: Engineer Review"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Step 2
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  By adding a request for custom finishing, this will trigger a
                  manual review of a quote and an applications engineer will
                  reach out to you to learn more about your part requirements
                  and provide recommendations on a path forward.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#96E92A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                  3
                </div>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/step3.jpg"
                    alt="Step 3: Place Order"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Step 3
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You will receive a link that will bring you to a final quote
                  that includes the custom finishing required. Place your order
                  and wait for your custom finished parts to arrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
