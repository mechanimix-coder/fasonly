"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Assemblies"
        desc="Get custom fabricated assemblies delivered in as fast as five days. Upload your assembly file to get an online quote"
        image="/Assets/Images/services/sheet-metal-fabrication/assembly/hero.png"
        firstButton={{ title: "Upload Your Assembly", route: "/" }}
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
                    "File format and configuration",
                    "Materials",
                    " Assembly construction guidelines",
                    "Hardware insertion",
                    "Welding and riveting",
                    "Finishing options for assemblies",
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
                  Our online sheet metal assembly service lets you create
                  functional, end-use products delivered to you in days. With
                  each project, you get design for manufacturability (DFM)
                  feedback and expert-level support. You can choose from a broad
                  range of finishing options to achieve your aesthetic
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fabricated assemblies are frequently used for:
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "Functional prototyping",
                "Product testing and qualification",
                "Low volume, end-use production",
                "Pilot runs",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Schedule Now
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
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              File Format and Configuration
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Preferred file formats for assemblies are upper-level assembly
              STEP files. For SOLIDWORKS users, a solid assembly file (.sldasm)
              with separate component files (.sldpart) is preferred.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              If your project is a weldment or has welding requirements, please
              provide a 2D drawing with your CAD submission.
            </p>

            <p className="text-gray-600 leading-relaxed">
              For situations where Protolabs will not assemble your project
              components, a solid (or top-level) assembly file is not required.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Materials */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Choose from readily available materials which can be easily
                constructed into a final assembly. Industry standard material
                thicknesses are used for all material types. Common materials
                found in fabricated assemblies are:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Aluminum 5052-H32",
                  "Low carbon steel CR 1008",
                  "Stainless steel 304/304L",
                  "Stainless steel 316/316L",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4">
                Each of these materials provides excellent formability and
                weldability characteristics, as well as superior corrosion
                resistance in harsh environments.
              </p>

              <p className="text-gray-600 leading-relaxed mb-2">
                Additional materials are available, such as pre-plated steels
                (galvanized or galvannealed). However, the pre-treated coating
                makes these materials candidates for rivet-based assembly
                construction.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our material comparison tool offers more information on sheet
                metal types and thickness ranges.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/material_smf_low-carbon-steel-cr-galvannealed_v2_hr.jpg"
                alt="Materials for Fabricated Assemblies"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Assembly Construction Guidelines */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Assembly Construction Guidelines
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Customizing your assembly design can take many forms. Consider
                the following for your next sheet metal project.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold">
                  Maximum assembly size (when fully constructed):
                </span>{" "}
                47 in. x 39 in. x 36 in. (1194mm x 991mm x 914mm)
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold">
                  Available assembly methods:
                </span>
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Welding (seam, tack, stitch weld techniques)",
                  "Riveting (pop and solid rivets)",
                  "Hardware insertion",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed italic">
                Cold-rolled galvannealed steel is a great choice for strength
                and corrosion resistance.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/insert-img.jpg"
                alt="Assembly Construction Guidelines"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formed Features */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Formed Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Linear bending (via press brake) with tooling options
                    between .010 in. and 1 in. (0.254mm and 25.4mm).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Large radius bending for additional functional or aesthetic
                    requirements using bump forming or roll-forming techniques.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Punch-formed features such as louvers, ribs, dimples.
                  </span>
                </li>
              </ul>
            </div>

            {/* Machined Features */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Machined Features
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Post-processing CNC machining can offer additional features
                typically found on more complex geometries. These design
                elements are hard to achieve with laser cutting, punching, or
                press brake forming alone. Possible features include:
              </p>
              <ul className="space-y-2">
                {[
                  "Pockets",
                  "Holes, cutouts, or features at risk of deformation during forming",
                  "Flange length reduction",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tolerances */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Tolerances
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Typical sheet metal tolerances apply to assemblies. Review
                    our{" "}
                    <a
                      href="#"
                      className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                      design guidelines
                    </a>{" "}
                    for more details.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Specific tolerance questions, including stack-up and
                    fitment, can be addressed by scheduling a free{" "}
                    <a
                      href="#"
                      className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                      30-minute design review
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </div>

            {/* Inspection Reporting Options */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Inspection Reporting Options
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Material and/or finishing certifications are available*
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Inspection documentation, including First Article
                    Inspection*
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    All parts and assemblies are inspected for dimensional and
                    visual accuracy based on Protolabs work standards prior to
                    shipping.
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-xs italic mt-3">
                *Must be requested before your order is placed. Choose from
                options shown on your online quote.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Hardware Insertion Guidelines
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                An extensive stocked library of fasteners is available from
                brands such as PEM and Southco.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold">File Formatting:</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Recommended: Include any hardware in your 3D CAD model as
                    separate solid bodies from the main sheet metal body. Use
                    industry standard hardware part numbers when possible (e.g.,
                    CLS-M6-1)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Alternative: Upload your CAD file without hardware and
                    include a 2D drawing noting hardware types and locations.
                  </span>
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">Lead Time:</span> Adding
                hardware to your part design does not add lead time.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/welding-smf.jpg"
                alt="Hardware Insertion Guidelines"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Text Left, Text Right (two columns of text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Examples of Hardware Types */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Examples of Available Hardware Types to Customize Your Project:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Self-clinching nuts",
                  "Self-clinching standoffs",
                  "Flush-head studs",
                  "Miniature self-clinching nuts",
                  "Self-clinching flush nuts",
                  "Flush-head pins",
                  "Self-clinching blind fasteners",
                  "Thin sheet non-flush studs",
                  "Self-clinching lock nuts",
                  "Self-clinching micro pins",
                  "Panel fasteners",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Design Guidelines */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Design Guidelines
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    For inserts to grip the sheet metal correctly, the material
                    of the hardware insert must have a hardness equal to or
                    greater than the material into which it is inserted. Further
                    details on hardware and material compatibility can be found
                    in our Design for Manufacturability Toolkit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Our design tip on effective hardware integration covers
                    hardware use cases and part placement considerations.
                  </span>
                </li>
              </ul>
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
                Finishing Options for Assemblies
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to feature or geometry customization, our finishing
                services for components and assemblies allow for customization
                of your aesthetic requirements. Our finishing options include:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Plating",
                  "Powder coating",
                  "Wet paint",
                  "Masking",
                  "Part marking",
                  "Metal surface finishing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-2">
                <span className="font-semibold">Lead Time:</span> Most finishing
                options add 1-2 days per finish. See our{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  finishing options page
                </a>{" "}
                for more details.
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                Some say parts aren't finished until they're finished. Explore
                your options to take your parts to the next level.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/finishing-options.jpg"
                alt="Finishing Options for Assemblies"
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
