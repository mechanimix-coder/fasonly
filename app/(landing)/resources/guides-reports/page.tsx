import ServicesHero from "@/component/landing/ServicesHero";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Digital Manufacturing Guides and Trend Reports"
        desc="Read in-depth guides and trend reports on rapid manufacturing processes, industry innovations, part design, material properties, and more."
        simple
      />
      <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans space-y-20">
        {/* ==================== CATEGORY 1 ==================== */}
        <div>
          {/* Category Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Technology
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive guides on manufacturing processes, from
              rapid prototyping to advanced production methods.
            </p>
          </div>

          {/* Grid of 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1a365d/ffffff?text=Rapid+Prototyping"
                  alt="Rapid Prototyping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Rapid Prototyping Processes
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From 3D printing to CNC machining to injection molding, our
                  white paper is a technical look at different manufacturing
                  processes. It lets you weigh the benefits of each, so you can
                  focus on a process best suited for your project.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/2b4c7c/ffffff?text=Overmolding"
                  alt="Overmolding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Overmolding and Insert Molding
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Overmolding and insert molding are regularly used to
                  manufacture multi-material components for applications in
                  industries such as medical and health care, automotive, and
                  electronics. This white paper offers a primer on these
                  techniques.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/3b6cb0/ffffff?text=3D+Printing"
                  alt="3D Printing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  What is 3D Printing?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This introductory guide examines various additive
                  manufacturing technologies—SLA, SLS, DMLS, FDM, PolyJet, and
                  others—being used to build prototypes and functional end-use
                  parts.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/4a7fc9/ffffff?text=Industry+4.0"
                  alt="Industry 4.0"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Data, Digital Threads, and Industry 4.0
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Just like how the steam engine led an industrial revolution
                  centuries ago, software and data are changing manufacturing
                  today. Learn how industry-leading companies accelerate product
                  development through new technologies.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/5b8fd9/ffffff?text=End-Use+Production"
                  alt="End-Use Production"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  3D Printing for End-Use Production
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Industrial-grade 3D printing has developed a solid reputation
                  for prototyping. More recently, it has emerged as a viable
                  production option. This white paper analyzes additive
                  technologies redefining 3D printing for end-use parts.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/6c9fef/ffffff?text=Product+Strategy"
                  alt="Product Strategy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Product Development: Industry 4.0 Strategy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Taking a broader view of Industry 4.0 reveals a more
                  responsive, customer-driven approach. This paper explores
                  using digital manufacturing to develop agile product
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY 2 ==================== */}
        <div>
          {/* Category Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Part Design
            </h2>
            <p className="text-gray-600 text-lg">
              Master the art of designing manufacturable parts with our in-depth
              guides on moldability, additive manufacturing, and sheet metal
              fabrication.
            </p>
          </div>

          {/* Grid of 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1e3a5f/ffffff?text=Moldability+Basics"
                  alt="Moldability Basics"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Designing for Moldability: Fundamental Elements
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A quick reference guide to wall thicknesses, surface finishes,
                  tolerances, materials, and other thermoplastic molding
                  insights. A thorough look at injection molding to help you
                  make better parts.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/2b4f7c/ffffff?text=Complex+Features"
                  alt="Complex Features"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Designing for Moldability: Complex Features
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dig deeper into complicated design challenges. If your part
                  has undercuts and through-holes, see how side-actions, sliding
                  shutoffs, and pickouts can be used to mold those features.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/385f9a/ffffff?text=Scientific+Molding"
                  alt="Scientific Molding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Scientific Molding for Repeatable Part Function
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  How to create consistency in injection molding production
                  through detailed, scientific processes. This guide covers the
                  basic steps in setting up this process.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/476fb8/ffffff?text=Additive+Assembly"
                  alt="Additive Assembly"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Combining Part Assemblies with Additive Manufacturing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn when and how to consolidate multi-part assemblies into a
                  single part, with considerations like finishing options,
                  scalability, and when to stick with traditional manufacturing.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/5680d6/ffffff?text=Cosmetic+Appearance"
                  alt="Cosmetic Appearance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Cosmetic Appearance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Address part geometry, material selection, and mold design to
                  minimize cosmetic flaws like sink, knit lines, flash, and
                  burn. Knowing solutions early improves final appearance.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/6591f0/ffffff?text=Sheet+Metal"
                  alt="Sheet Metal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Designing for Sheet Metal Fabrication
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  An in-depth look at material considerations, manufacturing
                  processes, design elements, and finishing options for sheet
                  metal prototypes and low-volume production parts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY 3 ==================== */}
        <div>
          {/* Category Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material Consideration
            </h2>
            <p className="text-gray-600 text-lg">
              Select the right materials for your project with our comprehensive
              guides on metals, thermoplastics, elastomers, and 3D printing
              materials.
            </p>
          </div>

          {/* Grid of 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1e3a5f/ffffff?text=Metal+3D+Printing"
                  alt="Metal 3D Printing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Metal 3D Printing Materials Guide
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn about metal 3D printing materials and DMLS process
                  intricacies in this insightful guide for engineers and product
                  designers.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/2b4f7c/ffffff?text=3D+Printing+Materials"
                  alt="3D Printing Materials"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  3D Printing Materials
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore material properties available through additive
                  manufacturing with DMLS, stereolithography, Carbon DLS, SLS,
                  Multi Jet Fusion, and PolyJet.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/385f9a/ffffff?text=Thermoplastics"
                  alt="Thermoplastics"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Thermoplastics
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A technical observation of thermoplastic resins and their
                  properties for engineers who want to quantitatively analyze
                  parts and make material decisions based on analysis.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/476fb8/ffffff?text=Material+Alternatives"
                  alt="Material Alternatives"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Material Alternatives for Plastic Injection Molding
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Navigate supply chain issues with resin substitutes for ABS,
                  PC, PP, and other commonly molded thermoplastics during
                  material shortages.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/5680d6/ffffff?text=Liquid+Silicone"
                  alt="Liquid Silicone"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Liquid Silicone Rubber
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discusses the injection-molding process of LSR and offers
                  guidelines to improve molded parts. LSR is a thermoset
                  material with unique design characteristics.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/6591f0/ffffff?text=Metals"
                  alt="Metals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Metals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn about material properties of metals and manufacturing
                  processes. Discover which metals bring added strength, reduced
                  weight, and improved durability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY 4 ==================== */}
        <div>
          {/* Category Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trend Reports
            </h2>
            <p className="text-gray-600 text-lg">
              Stay ahead of the curve with our latest research on manufacturing
              innovations, market forecasts, and supply chain strategies.
            </p>
          </div>

          {/* Grid of 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1e3a5f/ffffff?text=Innovation+2026"
                  alt="Innovation 2026"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Innovation in Manufacturing 2026
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore how the latest digital technologies are transforming
                  every stage of the product life cycle from early concept to
                  end-of-life.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/2b4f7c/ffffff?text=3D+Printing+Trends+2023"
                  alt="3D Printing Trends 2023"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Market Insights: 3D Printing Trends 2023
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Based on survey data and research, this report takes the pulse
                  of the global engineering community as 3D printing becomes a
                  mainstream manufacturing option.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/385f9a/ffffff?text=Trend+Report+2024"
                  alt="Trend Report 2024"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  3D Printing Trend Report 2024
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A global survey analyzing market growth, ecosystem maturation,
                  and technological innovations in 3D printing.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/476fb8/ffffff?text=Supply+Chain"
                  alt="Supply Chain"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Supply Chain Resilience Report
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn about supply chain risks, industry trends, and
                  strategies including manufacturing automation, agile
                  processes, and supply chain monitoring.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/5680d6/ffffff?text=Product+Trends+2024"
                  alt="Product Trends 2024"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Product Development Trends 2024
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Innovation leaders share the factors shaping how we bring
                  products to market today and in the future.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400/6591f0/ffffff?text=Electric+Vehicle"
                  alt="Electric Vehicle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Charging Toward an Electric Vehicle Future
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Automakers and tech firms are accelerating EV development.
                  Expect disruption and massive growth in the electric vehicle
                  arms race.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
