"use client";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    { tape: "0.250 in.", rounds: "0.3125 in." },
    { tape: "0.500 in.", rounds: "0.375 in." },
    { tape: "0.675 in.", rounds: "0.500 in." },
    { tape: "0.750 in.", rounds: "0.625 in." },
    { tape: "1.000 in.", rounds: "0.750 in." },
    { tape: "2.000 in.", rounds: "1.000 in." },
  ];

  const metricData = [
    { tape: "6.35mm", rounds: "7.938mm" },
    { tape: "12.7mm", rounds: "9.525mm" },
    { tape: "17.145mm", rounds: "12.7mm" },
    { tape: "19.05mm", rounds: "15.875mm" },
    { tape: "25.4mm", rounds: "19.05mm" },
    { tape: "50.8mm", rounds: "25.4mm" },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Finishes and Post-Processing"
        desc="Our sheet metal fabrication service offers a broad range of surface finish treatments and post-processing options to customize your projects."
        image="/Assets/Images/services/sheet-metal-fabrication/finishing-options/hero.webp"
        firstButton={{ title: "Start a Project", route: "/" }}
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
                    "Surface Finishes ",
                    "Powder Coating ",
                    "Plating/Coating ",
                    "Wet Paint ",
                    "Silk Screening ",
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
                <h1 className="text-black text-4xl font-bold mb-4">
                  Get the Look You Want with One or More Production Quality
                  Finishes
                </h1>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We offer over 100 finishing options to customize your sheet
                  metal component or assembly. Designed to enhance the
                  functional or aesthetics elements of your design, these
                  finishes are available with short lead times, applied by
                  experts who deliver high quality results.
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
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-800">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/finishing-options/support.jpg"
                alt="Free Finishing Consultation"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
                <span className="text-[#96E92A] text-sm font-semibold">
                  INNOVATION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Free Finishing Consultation for Fabricated Projects
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Take advantage of a free 30-minute virtual finishing
                consultation with one of our sheet metal applications engineers.
                It's a perfect opportunity to review your finishing requirements
                to ensure your project arrives to your specifications.
              </p>
              <a
                href="#"
                className="text-[#96E92A] font-medium hover:text-[#85d122] transition-colors inline-flex items-center gap-2 group">
                Schedule Now →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Surface Finishes
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-10">
              Choose between two surface finishes on your sheet metal part.
              These options will leave your part safe to handle and ready to use
              right out of the box:
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Orbital Sander
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This is the most common surface finish for sheet metal parts and
                involves using a random orbital sanding device to remove dross
                and other surface debris and build-up from the last cutting
                process. Orbital sanding is not recommended for cosmetic
                applications and is best used for internal components or
                situations where form, fit, and function is the priority.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Straight Grain/Brushed
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This surface finish involves applying a sanding belt in a
                uniform direction/pattern to the surface of the sheet metal.
                Designs with a grain direction are usually for cosmetic or
                end-user facing purposes. Straight grain can be applied to your
                part in three ways:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Perpendicular to the longest bend (when formed) or edge
                    (when flat)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Parallel to the longest bend or edge
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    At a 45-degree angle to the longest bend or edge
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed italic">
                A note on welded parts: weld beads leave a raised surface at the
                weld site. Our process involves blending the weld bead into the
                metal material, leaving a uniform edge.
              </p>
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
                src="/Assets/Images/services/sheet-metal-fabrication/finishing-options/powder-coating.jpg"
                alt="Powder Coating Process"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Powder Coating
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Powder coating applies a dry powder to the surface of sheet
                metal parts. Then, they are cured in a large oven to create a
                hard finish that is tougher than conventional paint. This
                process improves durability to parts and adds custom color for
                aesthetic purposes.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Choose from 50 stocked colors for the fastest turnaround time.
                Various texture and gloss levels are available.
              </p>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Learn more about powder coating →
              </a>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sheet Metal Surface Finish Guide"
        desc="Check out our sheet metal guide for a quick snapshot of our Standard and Cosmetic finishing options available for various sheet metal materials."
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Wet Paint
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            {/* First Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              With wet paint, a liquid coating is applied to your part to
              provide an aesthetically appealing finish. The process is offered
              in virtually any color and is commonly paired with a primer layer
              to improve paint adhesion and durability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Wet paint is often used in situations where the visual consistency
              of the finish across parts is an important consideration, which is
              why you primarily see it on automotive or consumer electronics
              products.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our wet paint options are available with or without primer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              To ensure we can meet your specifications exactly, we ask you
              provide the full paint specification (including color and
              texture). These details can be conveyed two ways. Pick the option
              that is easiest for you. It's not necessary to submit both ways:
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Submit a 2D-drawing with the wet paint specifications
                  included.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  In the "Coating" section of your online quote, depending on
                  your project needs, select "Wet Paint" or "Wet Paint with
                  Primer" from the drop-down menu.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  In the "Spec" field, enter the wet paint specifications as
                  described above.
                </span>
              </li>
            </ul>

            {/* Wet Paint Special Considerations */}
            <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
              Wet paint special considerations:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Quotes with wet paint service may take slightly longer than 24
                  hours.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  If masking is required as a component of your finished
                  product, please submit a 2D-drawing.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Silk Screening
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Silk screening on sheet metal involves forcing ink through a fine
              mesh screen containing a stencil that blocks off areas in order to
              achieve the desired design. Ink is transferred to areas not
              covered by the stencil onto the metal surface. This process is
              often used for adding labels, instructions, or decorative patterns
              to fabricated metal products.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Requesting silk screening on your next project is easy. Just
              submit the following information:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  An image saved as an .ai, .dxf, or .PDF file
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Part location for the silk-screened artwork
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Color data based on the Pantone Matching System (PMS)
                </span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-4">
              Additionally, please note these silk screening considerations:
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Minimum screen size: 1 in. (25.4 mm) square
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Maximum screen size: 24 in. (609.6 mm) by 14 in. (355.6 mm)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Screening internal faces requires at least 1 in. (25.4 mm)
                  margin from bends and other part features
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Masking
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Masking is a common step in the finishing process when it comes to
              sheet metal components, assemblies, or electrical enclosures. We
              use tape, rounds, and plugs to allow for selective application of
              finishes on your design. Some key benefits of masking include:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Protection of functional areas of the part such as hardware
                  inserts, threaded holes, or surfaces
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Solid dimensional tolerances with the unfinished state.
                  Finishing processes add to the thickness of your part, which
                  may affect fit or function of certain designs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Avoiding coating applications in areas where electrical
                  conductivity is needed
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Improved aesthetic appeal of the overall design
                </span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              Request masking in a 2D drawing submitted with your CAD file. The
              2D drawing should include the location of masked areas, as well as
              which holes/inserts are to be plugged.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Masking Tape and Rounds
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-6">
              We offer a range of tape and rounds (discs):
            </p>

            {/* Unit Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setUnit("us")}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  unit === "us"
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                Standard (US)
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  unit === "metric"
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                Metric
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Tape
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Rounds/Discs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 text-gray-700">{row.tape}</td>
                      <td className="p-4 text-gray-600">{row.rounds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Part Marking
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Part marking is a helpful tool to ensure components are easily
              identified and traceable as they move through your supply chain.
              Every order that leaves our facility includes a{" "}
              <span className="italic">bag &amp; tag</span>
              marking method wherein parts are collectively packaged and labeled
              with identifying information.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              If your supply chain requires all parts to be uniquely marked for
              traceability purposes, we offer a stenciling process that can
              provide:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Part number</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Revision level</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Vendor code/ID</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Cage code</span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-4">
              To include part marking with your part or project, submit a 2D
              drawing including:
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Location on part for marking placement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Font size (minimum 12 pt., maximum 16 pt.)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Color</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Information to be marked (choose from list on the left)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Standard and Cosmetic Parts
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-10">
              Whether you're developing a prototype to check form, fit, or
              function, or you need quick-turn cosmetic parts for your next
              trade show, we have you covered. Use this guide to choose the best
              option for your project.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Description
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Standard
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Cosmetic
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Use Cases
                    </td>
                    <td className="p-4 text-gray-600">
                      When lower cost is a greater priority than appearance
                    </td>
                    <td className="p-4 text-gray-600">
                      Functionally cosmetic parts that make you and your parts
                      look good to stakeholders
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Part Applications
                    </td>
                    <td className="p-4 text-gray-600">
                      Form, fit, function prototyping; internal components
                    </td>
                    <td className="p-4 text-gray-600">
                      Testing or demonstration units, trade show parts, external
                      components
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Surface Finish
                    </td>
                    <td className="p-4 text-gray-600">Protolabs' discretion</td>
                    <td className="p-4 text-gray-600">
                      Housings, covers, face plates, external brackets and
                      mounts
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-[#0B1221]">Cost</td>
                    <td className="p-4 text-gray-600">Yes</td>
                    <td className="p-4 text-gray-600">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Quantity
                    </td>
                    <td className="p-4 text-gray-600">1-100+ parts</td>
                    <td className="p-4 text-gray-600">Best for 1-25 parts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
