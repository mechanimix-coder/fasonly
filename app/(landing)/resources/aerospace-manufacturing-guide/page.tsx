import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="A Guide to Manufacturing Aerospace Parts"
        desc="4 ways to improve product development in aerospace and defense using speed, component reduction, multiple manufacturing methods, and quality assurance"
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              The aerospace and defense industry is known for producing complex
              and advanced products—jet engines, aircraft, rockets, satellites,
              drones, and more—that move fast in a highly regulated environment.
              It is no wonder that these factors of speed, complexity, and
              policy compliance play key roles in the manufacturing process.
              This design tip explores how to improve aerospace development
              cycles through:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  accelerating production with digital manufacturing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  reducing components, which helps in lightweighting part
                  design, cuts items in an overall assembly, and reduces costs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  using a range of manufacturing methods and materials, which
                  can accelerate development and add value to your designs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  streamlining quality and compliance assurances
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Pure Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              1. Use Digital Manufacturing to Accelerate Product Development
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-4">
              At Protolabs, we understand the importance of speed. Working
              extensively with companies in the aerospace and defense industry,
              we have accelerated the development over the years of a range of
              metal and plastic aerospace parts and products that include:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                "Heat exchangers",
                "Manifolds",
                "Turbo pumps",
                "Liquid and gas flow components",
                "Fuel nozzles",
                "Conformal cooling channels",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Metal aerospace parts have been produced by a range of digital
              manufacturing methods, including GE's additively manufactured fuel
              nozzle, left, for CFM International's LEAP aircraft engine, right.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              One of the drivers in our success is through experience and
              rigorous development of digital manufacturing tools. We have found
              the right blend of working with autonomous digital tools and
              hands-on application engineers to meet aerospace demands.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              When starting the digital manufacturing process with many
              manufacturers, it can be easy to upload a CAD file into multiple
              online quoting tools. Unfortunately, some manufacturers' online
              quoting tools don't take into account all of the back-end
              requirements, or offer all of a manufacturer's processes. This is
              where we choose to be upfront so that each step required for the
              part or project is reflected in the initial quote.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              When using online digital tools, quoting software can greatly
              accelerate development and production cycles. However, to get the
              most out of these tools, make sure you are working with software
              (and a manufacturer) that includes the following:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Takes into account all requirements and steps of the build or
                  project
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Offers all available processes and materials
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Offers trained and experienced staff with years of
                  manufacturing experience
                </span>
              </li>
            </ul>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-fuelnosel.png"
                alt="GE additively manufactured fuel nozzle for CFM International LEAP aircraft engine"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                A major challenge in the aerospace and defense industry is
                on-time delivery and quality. Industry sources say around 80% of
                orders generally show up on time. Yet, when those orders do show
                up on time, about 25% of parts do not meet the required quality.
                A common complaint from aerospace companies is when vendors
                promise a lead time with a cheaper price but could not deliver
                within the timeline quoted. Delays have led to missed deadlines
                and greater costs to fix than if they would have just started
                with the higher-priced vendor.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our online, interactive quoting system turns your CAD model into
                a quote with immediate design analysis and feedback. Your design
                can be reworked to determine the ideal balance of processes,
                materials, time, and cost. This greatly increases efficiency as
                it isn't necessary to talk with someone every time a part is
                needed. But when you need a knowledgeable person on your side,
                we have a team of applications engineers ready to back up our
                automated tools. All contacts, customer or not, get free access
                to our responsive team that understands how to design for our
                processes, reduce cost, and answer a myriad of other technical
                questions.
              </p>
            </div>
          </div>

          {/* Row 3 - Pure Text (empty for now, but structure is ready) */}
          <div className="max-w-4xl mx-auto">
            {/* Additional text can go here if needed */}
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              2. Reduce Components to Benefit Product Design
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-4">
              You may want to reduce overall components in a part or product
              design for several reasons.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              First, lightweighting is crucial in aerospace. Companies know just
              how many ounces of fuel it takes to fly a gram of weight in
              flight, for example, so slight reductions drive major gains. The
              choice of materials, and sometimes the method of manufacturing,
              also factor into this lightweighting equation. But trimming part
              count helps, too.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Second, cutting costs is important. Plastics and metals can be
              expensive, and so can assembly time. Accordingly, if designs can
              lessen the number of components or parts, this can reduce
              materials and assembly time.
            </p>

            {/* Image floated to the right with text wrapping */}
            <div className="float-right ml-6 mb-4 w-full md:w-80 lg:w-96">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-ge-exploded-part.png"
                  alt="Aerospace components"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              With these lightweighting and cost considerations in mind, which
              materials work best for aerospace components? Titanium is often a
              go-to choice, available through machining and 3D printing
              services. This lightweight and strong material offers excellent
              corrosion and temperature resistance. Aluminum, and its high
              strength-to-weight ratio makes it a good candidate for housing and
              brackets that must support high loading. Aluminum also is
              available for both machined and 3D-printed parts. Inconel, a
              3D-printed metal, is a nickel chromium superalloy ideal for rocket
              engine components and other applications that require
              high-temperature resistance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Stainless steel also is a frequent materials choice. For example,
              SS 17-4 PH is used in the aerospace industry due to its high
              strength, good corrosion resistance, and good mechanical
              properties at temperatures up to 600 degrees F. Like titanium, it
              can be machined or 3D printed. Liquid silicone rubber is also
              widely used in the industry. This elastic fluorosilicone material
              is specifically geared toward fuel and oil resistance while
              optical silicone rubber is a good PC/PMMA alternative. Common
              applications in aerospace include soft-touch surfaces, gaskets,
              seals, and O-rings.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Finally, beyond lightweighting and cost cutting issues, the
              aerospace industry faces unique benefits and challenges with high
              risks and rewards. Companies are concerned with development
              cycles, prototyping, hot-fire testing, and production. So, while
              component reduction can help reduce part weight and assembly time,
              the real savings are in the reduction of the headaches and
              overhead associated with the supply chain and paper trail for each
              part. In aerospace, each component that goes into the final
              product has a tremendous amount of validation behind it such as
              material traceability, shock and vibe tests, rigorous inspections,
              and much more. In such a regulated industry, reducing parts can
              provide great value by reducing inventory, having fewer documents
              to track, and streamlining your supply chain.
            </p>

            {/* Clear float to ensure proper layout after the image */}
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3. Deploy a Range of Manufacturing Methods, Materials
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full"></div>
            </div>

            {/* Two Columns Layout - Text on Left, Blue Section on Right */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column - All Text Content */}
              <div className="lg:w-2/3">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have an internal machine shop but have to deal with a
                  lot of different types of manufacturing in a small space, you
                  might have taken projects to outside vendors for development
                  work. It is important to find the right vendor with the
                  capacity to meet your high demands for quality and speed. You
                  may know but it bears repeating that there are no universal
                  processes or materials. You need all the tools in your arsenal
                  to find the best solutions to stay on the cutting edge.
                  Therefore, work with companies that are able to offer a range
                  of manufacturing processes and materials. We offer CNC
                  machining, sheet metal fabrication, injection molding, and six
                  different industrial-grade 3D printing (additive
                  manufacturing) methods. Additionally, you can choose from
                  hundreds of commercial-grade plastics, metals, and elastomers
                  that are suitable for both prototyping and production. See our
                  Materials Comparison Guide for a complete list.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3 mt-6">
                  Subtractive Processes and Materials:
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CNC machining methods, specifically three- and five-axis
                  milling, are frequently used in manufacturing today. For the
                  aerospace industry, common materials are 6061-T6 aluminum,
                  hard metals such as 304, 316, and 17-4PH stainless steel, and
                  titanium.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  What isn't common are the size and geometric dimensioning and
                  tolerancing (GD&amp;T) capabilities of many shops. While it is
                  common for the customer to state what tolerances are needed,
                  look for companies that state what size and GD&amp;T they can
                  deliver.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Most aerospace customers have complex parts that can be more
                  advanced than even our automated machining facilities can
                  handle.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  To solve this problem, we introduced our high-requirement or
                  precision-machining option, which can accommodate larger parts
                  and more complex geometries. This option helps our aerospace
                  customers by repeatedly and reliably delivering on more
                  complex parts as programs progress toward end-use production.
                  Also, this high-requirement option is able to read both a CAD
                  file and a drawing, accommodate larger parts with more complex
                  features, provide tighter tolerances, perform secondary
                  operations, and offer quality reporting options.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  For detailed information on these high-requirement or
                  precision-machining options, including tolerances, minimum and
                  maximum part dimensions, and other design guidelines, visit
                  our CNC machining page. In addition, visit our website for
                  basic design guidelines for CNC milling.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3 mt-6">
                  Additive Manufacturing—Processes and Materials:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A considerable amount of aerospace and defense parts are
                  metal. Accordingly, when it comes to metal 3D printing or
                  additive manufacturing, most common materials are Inconel 718,
                  the aluminum alloy AlSi10Mg, stainless steel (304 &amp; 17-4),
                  titanium, and cobalt chrome (CoCr). Again, the difference here
                  will be the material and additive manufacturing processes
                  available.
                </p>
              </div>

              {/* Right Column - Light Blue Section */}
              <div className="lg:w-1/3">
                <div className="bg-[#F0F8FF] rounded-2xl p-8 sticky top-32">
                  <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Prepping Your Flight Plan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Visit these pages for more information on product design and
                    development for the aerospace and defense industry.
                  </p>
                  <ul className="space-y-4">
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          <span className="font-semibold">TREND REPORT:</span>{" "}
                          Aerospace Manufacturing Methods for Prototyping and
                          Production
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          <span className="font-semibold">GUIDE:</span>{" "}
                          Combining Part Assemblies with Additive Manufacturing
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          How Additive and Subtractive Manufacturing Combine to
                          Accelerate Aerospace Development
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Remove Before Flight: How Aerospace Companies Mitigate
                          Risk
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          3D Printing Helps Keep Aerospace Industry Afloat
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Lockheed Martin's Small Drone with a Big Spirit
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Ready for Take off
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Image and Caption */}
            <div className="flex-1">
              <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-md bg-gray-100 mb-4">
                <Image
                  src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-process-materials-deuce.png"
                  alt="Large-format metal 3D printed part from GE Additive Concept Laser X-Line machine"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                DMLS does have a limited build space. However, we also offer
                large-format metal parts. We can build production-grade metal
                parts as large as 31.5 in. x 15.7 in. x 19.7 in. (800mm x 398mm
                x 500mm). We are initially focusing on Inconel 718 as a material
                to use to better serve the demand for larger complex parts in
                the aerospace industry. This large-format metal 3D printing,
                from our GE Additive Concept Laser X-Line machine, also is an
                example of how our company is technology agnostic, using
                machines, equipment, and processes sourced from a variety of
                companies.
              </p>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                DMLS can additively manufacture large, production-grade metal
                parts (as shown). This large-format metal 3D printing, from our
                GE Additive Concept Laser X-Line machine, is an example of how
                our company is technology agnostic, using machines, equipment,
                and processes sourced from a variety of companies.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                We use multiple additive processes: stereolithography, direct
                metal laser sintering (DMLS), selective laser sintering, Multi
                Jet Fusion, Carbon DLS, and PolyJet. DMLS has proven to be a
                desirable process in the aerospace industry because it offers:
              </p>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    large range of materials
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">increased functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    ability to accommodate complexity and organic designs
                  </span>
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Beyond the manufacturing methods referenced (subtractive and
                additive), we also offer a
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4">
              number of secondary or finishing options, if your design calls for
              these applications:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                "Post-process machining - for 3D-printed metal parts",
                "Heat treatment - including HIP for 3D printed parts",
                "Additional plating",
                "Anodizing",
                "Basic assembly",
                "Chromate plating",
                "Cleaning",
                "Electroless nickel plating",
                "Part marking",
                "Passivation",
                "Powder coating",
                "Press fit and hardware",
                "Silkscreening",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              If you need several vendors for different processes or secondary
              processes, remember the benefits mentioned earlier about using one
              supplier with multiple processes. We offer many processes and
              materials while operating as a local vendor to reduce time and
              costs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In addition, as we recently noted in our trend report on aerospace
              manufacturing, often the best solutions for aerospace and defense
              will involve a hybrid approach using multiple technologies in
              concert. Just as a traditional toolbox contains both hammer and
              pliers, so too do today's advanced manufacturing operations house
              both additive and subtractive manufacturing systems and know-how.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                4. Rely on Quality and Compliance Assurance
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Finally, aerospace product designers and developers need to
                carefully navigate government and safety policy and compliance
                issues. Working in such a highly regulated industry, it is
                important to find vendors familiar with aerospace requirements.
                Traceability, documentation, testing, and certified parts that
                are USA/ITAR compliant in an ISO 9001 environment can decrease
                much of the work needed to be done, tested, or verified in
                house.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Governing bodies are continuously working on standards for
                additive manufacturing, so knowing exactly what is needed may be
                difficult to find for non-traditional processes. However,
                standards or certifications for finished parts apply no matter
                how it was manufactured. You will want to make sure vendors have
                certified materials, powder analysis, material traceability, and
                more depending on your needs.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                We have already invested heavily in digital manufacturing
                methods to provide you with automated tools, documentation,
                testing, and traceability, all supported by our applications
                engineers, delivering you a streamlined and efficient digital
                thread. We offer the following quality documentations and report
                options in an ISO 9001, AS9100 certified, USA/ITAR compliant
                environment:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Material certifications and heat lot numbers",
                  "Certificate of conformance (CoC)",
                  "First article inspections (FAI) - including AS9102 FAI for 3D-printed parts",
                  "Various other inspection requests such as CMM, X-Ray or CT scanning",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Ultimately, we will work with you to find the best solution and
                consider all steps of your project. If you would like more
                information, contact our applications engineers at{" "}
                <a
                  href="tel:+902641234567"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium">
                  +90 264 123 45 67
                </a>
                , email us at{" "}
                <a
                  href="mailto:info@fasonly.com"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium">
                  info@fasonly.com
                </a>
                , or start your design today by uploading your 3D CAD model to
                receive an interactive quote within hours.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-quality-assurance.png"
                alt="Quality and Compliance Assurance"
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
