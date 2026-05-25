"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sheet Metal Punching Service"
        desc="Achieve scale and customization with punched components and assemblies delivered in as fast as 3 days."
        image="/Assets/Images/services/sheet-metal-fabrication/punching/hero.webp"
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
                  {["Capabilities", "SLA Materials", "Surface Finishes"].map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block text-gray-500 hover:text-[#0099ff] transition-colors duration-200 text-sm py-1">
                        → {item}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3">
              {/* Beyond Prototyping Section */}
              <div id="what-is-stereolithography" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Beyond Prototyping
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  When your project requires advanced mechanical properties
                  beyond stereolithography (SLA) and PolyJet, explore our
                  advanced photopolymer materials unlocked by Axtra3D Hybrid
                  PhotoSynthesis (HPS) technologies. HPS leverages the best
                  features of Carbon digital light synthesis (DLS) printers,
                  such as speed, near-isotropic parts, and smooth surface
                  finish, but adds the greater speed and higher resolution of
                  stereolithography (SLA).
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
              Free Design Review for Punching Projects
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our design review consists of a 30-minute virtual meeting with one
              of our sheet metal applications engineers. It's an opportunity to
              discuss any questions you may have about your project. Common
              discussion questions on the topic of punching include:
            </p>
            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "In-house punch tooling selection",
                "Material height and depth parameters",
                "Feature spacing (from bends, part edges, or nearby features)",
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                What is Punching?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Sheet metal punching is a metal cutting/manipulation process in
                which a punch press applies force to material using tools
                referred to as the <span className="italic">punch</span> and{" "}
                <span className="italic">die</span> to create profiles, holes,
                and other formed shapes.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                The punch shears the sheet metal against a die in a fast,
                repetitive process to create a precise series of features and
                cutouts.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                Types of features that can be punched through the Protolabs
                process include:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Countersinks",
                  "Part profiles/perimeters",
                  "Hole features",
                  "Perforation patterns",
                  "Formed features (e.g., ribs, dimples)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed italic">
                Precision punching adds features to your project with unmatched
                accuracy.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/sm-img.jpg"
                alt="Sheet Metal Punching Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Advantages of Punching with Protolabs
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-center mb-8">
              Using Protolabs for punching unlocks several advantages for your
              next sheet metal component or assembly project:
            </p>
            <ul className="space-y-3">
              {[
                "Quick turnaround times: Punched parts are delivered in as fast as 3 days.",
                "Design flexibility and customization: Achieve punch-formed features using in-house or custom tooling.",
                "Access to technical advice: Our applications engineers are available to make sure your project meets your specs.",
                "Expansive capacity for production volumes: We fabricate thousands of unique geometries each month across quantities from 1 to 1000+.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Materials for Punching
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Most sheet metal material types can be cut using punching or
                laser cutting techniques, however the thickness range is
                different. Refer to the list below for information on eligible
                material thicknesses:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  {
                    text: "Aluminum 5052-H32: thicknesses from 0.040 in.-0.250 in. (1.016mm–6.35mm)",
                    note: null,
                  },
                  {
                    text: "Aluminum 6061-T651: thicknesses from 0.040 in.-0.250 in. (1.016mm–6.35mm)",
                    note: "Aluminum 6061 is suitable for profile/perimeter punching but is not eligible for formed features.",
                  },
                  {
                    text: "Low Carbon Steel CR 1008: thicknesses from 0.036 in.-0.119 in. (0.914mm–3.023mm)",
                    note: null,
                  },
                  {
                    text: "CR Galvanized: thicknesses from 0.036 in.-0.119 in. (0.914mm–3.023mm)",
                    note: null,
                  },
                  {
                    text: "CR Galvannealed: thicknesses from 0.036 in.-0.119 in. (0.914mm–3.023mm)",
                    note: null,
                  },
                  {
                    text: "Copper C101, C110: thicknesses from 0.040 in.-0.125 in. (1.016mm–3.175mm)",
                    note: null,
                  },
                  {
                    text: "Brass C260: thicknesses from 0.040 in.-0.125 in. (1.016mm–3.175mm)",
                    note: null,
                  },
                  {
                    text: "Stainless Steel 304/304L, 316/316L: thicknesses from 0.036 in.-0.074 in. (0.914mm–1.88mm)",
                    note: null,
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-600">{item.text}</span>
                      {item.note && (
                        <p className="text-gray-500 text-sm mt-1 ml-4">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-gray-500 text-sm italic">
                *Aluminum 5052-H32 offers corrosion resistance as a formable and
                weldable material.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[550px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/material_smf_aluminum-5052_v2_hr.jpg"
                alt="Materials for Punching"
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Design Guidelines
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Punching sheet metal parts can be complex, so to make it easier to
              incorporate into your next project, here is a list of helpful
              manufacturability reminders to consider during the design process.
              These guidelines can help you manage project costs and achieve
              high part quality.
            </p>
          </div>

          {/* Guidelines List */}
          <div className="space-y-4 mb-12">
            {[
              "Space your holes 1.5x the material thickness apart. Cluster tools create holes at a distance of 1x material thickness, where single hit hole tools need additional material to maintain the same hole quality.",
              "Design your smallest holes at 1.2x material thickness.",
              "Minimize the number of unique punch-formed feature sizes/shapes throughout your design. Using the same sized features saves on machine setup time (and possible tooling costs).",
              "Specify typical punch feature tolerances within a range of +/-0.05in. (+/- 0.127mm). It is important to keep in mind that tolerances in the flat state differ from those in the formed state. Refer to our tolerance guide for additional information on how to navigate feature tolerances that cross multiple bends.",
              "Consider the dimensional length of any progressive punch features (e.g. ribs, louvers, cluster patterns). Extensively long features can result in quality issues such as warping.",
              "Keep all your formed features facing a uniform direction. Designs that include form and form down features are at risk for quality issues.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Additional Guidelines */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              The additional punching design guidelines below can be a useful
              resource in achieving dimensionally accurate and quality punched
              parts.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Maximum formed feature height: 4x material thickness.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Tool station diameters directly correlate to recommended space
                  between punch-formed features. For feature spacing, we
                  recommend using 50% of the tool station diameter.
                </span>
              </li>
            </ul>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    Tool Station Diameter
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Space Required Between Features
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    diameter: "0.500 in. (12.7mm)",
                    space: "0.250 in. (6.35mm)",
                  },
                  {
                    diameter: "1.250 in. (31.75mm)",
                    space: "0.625 in. (15.875mm)",
                  },
                  {
                    diameter: "2.000 in. (50.8mm)",
                    space: "1.000 in. (25.4mm)",
                  },
                  {
                    diameter: "3.500 in. (88.9mm)",
                    space: "1.750 in. (44.45mm)",
                  },
                  {
                    diameter: "4.500 in. (101.6mm)",
                    space: "2.250 in. (57.15mm)",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 text-gray-700 text-sm">
                      {row.diameter}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">{row.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Punch Form Tooling
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Punching provides functionality and customization for sheet metal
              projects through profile and form tooling shapes. The information
              below is a reference for common cutout and formed features we
              offer. If you have questions about tool selection (in-house or
              custom) take advantage of a free 30-minute design review with our
              applications engineers.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Note that custom punch tooling adds to your project's price and
              lead time. If cost is a priority, we recommend an in-house tooling
              option. During your design review, we will discuss what dimension
              is most important for your design (e.g. height, inside diameter,
              outside diameter, open area, etc.) to provide an adequate in-house
              tooling recommendation.
            </p>
          </div>

          {/* Grid of Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lance Tab */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Lance Tab
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                This form tool cuts and raises a section of the sheet metal to
                create a hook or tab shape. Lance tabs are used for mechanical
                fastening/hanging, ventilation, clips, and stops.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                If your design contains several small, simple bends, a
                single-hit punch tool may be the most effective manufacturing
                and cost management method.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: single hit only
              </p>
            </div>

            {/* Bridge Lance */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Bridge Lance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Bridge lances come in many shapes and sizes. Our in-house
                options are primarily single bridge form-up tools, but custom
                tooling is available upon request. Bridge lances are different
                from lance tabs because they use two points of contact with the
                sheet, creating a bridge-like feature.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Bridge lances are used for decorative or functional purposes,
                including clip attachments, airflow, cable pass-throughs, or
                fastening. A bridge lance feature has similar functionality to
                TD (cable tie-mount) hardware available through PEM®.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: single hit only
              </p>
            </div>

            {/* Extrusion */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Extrusion
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Punched extrusions in sheet metal designs are formed by pushing
                material through a die to create a raised shape. Common
                extrusion applications are electrical contact points, threaded
                holes, standoffs, and airflow or gas channels.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                For production situations where higher quantities are needed,
                extrude and tap features can be a successful alternative to
                hardware insertion, resulting in lower part costs.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: single hit only
              </p>
            </div>

            {/* Perforation Pattern (Cluster Tool) */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Perforation Pattern (Cluster Tool)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Perforations come in many shapes and sizes but they have a
                single goal of punching a hole/slot design while leaving a small
                amount of material left between the holes/slots. These types of
                design elements are typically best achieved in the punch, as
                heat from a laser can contribute to material deformation. A
                cluster tool is commonly used to create multiple holes/slots
                with a single hit of the punch.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                With perforations, an important design consideration is that the
                size of the hole or feature should be equal to or greater than
                the material thickness. Additionally, consider designing the
                webbing or space between features to follow the same material
                thickness guidance. Perforations are commonly used for
                ventilation, filtration, drainage, decorative or weight
                reduction use cases.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: single hit only
              </p>
            </div>

            {/* Louver */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Louver</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Louver tools create a slotted opening or vent and are common to
                panels or electrical enclosures made from sheet metal. When
                applied to electronics enclosures, louvers aid in ventilation
                and thermal management of internal components.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: eligible for both
              </p>
            </div>

            {/* Rib */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Rib</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Typically, ribs are oblong shapes of raised metal used to aid in
                strength, rigidity, or stiffness of a design. Furthermore, ribs
                can add strength without increasing weight. They can have a flat
                top or a half-round profile. In electronics enclosures, ribs can
                help with thermal management as well as design rigidity. Ribs
                can also create a gap between components, raising a second
                component off the base of the main component.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: progressive only
              </p>
            </div>

            {/* Half Shear */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Half Shear
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                This versatile tool option partially cuts through the sheet and
                creates raised features or intentional material deformations.
                Half shears can help to provide visual and physical markers for
                assembly processes because parts can snap together or serve as
                an alternative to tabs or lances.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: single hit only
              </p>
              <a
                href="#"
                className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                View our stocked punch tool library →
              </a>
            </div>

            {/* Emboss */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Emboss</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Emboss, or dimple, form tools offer functional or aesthetic
                enhancements to sheet metal geometries. This type of feature can
                be used singularly or in a pattern and act as a spacer, mounting
                point, or to provide general visual appeal. Embosses can come in
                any shape but most commonly they are round, obround, or
                rectangular. Embosses can hold magnets or hide hardware heads
                without compromising the structural integrity that a concealed
                head provides.
              </p>
              <p className="text-gray-500 text-xs italic">
                Single hit vs. progressive tooling: single hit only
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
                Assembly
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Sheet metal designs that incorporate punched features can be
                standalone parts, but are more commonly found in assemblies,
                sub-assemblies, or weldments.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                We offer the following{" "}
                <span className="font-semibold">
                  assembly construction services
                </span>
                , so when your project arrives, it is ready for immediate use:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Hardware insertion",
                  "Welding (single and multiple component)",
                  "Riveting",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-2">
                <span className="font-semibold">Lead time:</span> Assembly lead
                time adds 1-3 days (based on the number of components).
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                Our assembly services allow customers to use their parts on
                arrival.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/smf_complexity_assembly_2.jpg"
                alt="Assembly Services"
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
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Finishing Options for Punched Parts
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to feature or geometry customization, our finishing
                services for punched components and assemblies allow for
                customization of your aesthetic requirements. Our finishing
                options include:
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
                Please visit our{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  finishing options
                </a>{" "}
                page for additional information.
              </p>

              <p className="text-gray-600 leading-relaxed mb-2">
                <span className="font-semibold">Lead time:</span> Most finishing
                options add 1-2 days per finish. Our finishing options page
                offers more details.
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                A variety of finishing options adds the necessary aesthetics to
                any sheet metal part.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/sm-parts.jpg"
                alt="Finishing Options for Punched Parts"
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
// /Assets/Images/services/sheet-metal-fabrication/punching/smf_complexity_assembly_2.jpg
