import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Digital Manufacturing Across Your Product Life Cycle"
        desc="We are your single resource from rapid prototyping to end-use production—and everything in between"
        simple
        firstButton={{ title: "Start a Project", route: "/" }}
        bg="/Assets/Images/resources/product-life-cycle/use_cases_hub_hero.jpg"
        text="white"
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/full_product_life_cycle.jpg"
                    alt="Full product life cycle support from start to finish"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Get Full Product Life Cycle Support from Start to Finish
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you need prototype parts in one day or full-service
                  production, you can partner with us across your entire product
                  life cycle for speed, quality, and cost-efficiency in every
                  project. It's one resource to support you throughout your
                  manufacturing journey.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Row 2 - Grid of 2 items with light blue background */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 - End-to-end Product Development */}
              <div className="bg-[#E8F4FD] rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  End-to-end Product Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimize part design and move quickly through iterative
                  development with our rapid prototyping and low-volume
                  production services. When you're ready, work with our team of
                  applications engineers to meet all of your production needs
                  for end-use parts.
                </p>
              </div>

              {/* Item 2 - Supply Chain Diversification */}
              <div className="bg-[#E8F4FD] rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Supply Chain Diversification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build a manufacturing safety net into your supply chain that
                  you can turn to during line-down situations or unplanned
                  disruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Accelerate Product Development with Rapid Prototyping
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Take advantage of design for manufacturability (DFM) feedback
                  in our instant quotes to make adjustments to part design
                  before any actual manufacturing begins, then navigate quickly
                  through early- and late-stage prototyping with ease.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Learn More →
                </a>
              </div>

              {/* Right Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/rapid_prototyping.jpg"
                    alt="Accelerate product development with rapid prototyping"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 - Grid of 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 - Early Prototyping */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Early Prototyping
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get quality parts in hand within days for iterative prototype
                  testing of form, fit, and function.
                </p>
              </div>

              {/* Item 2 - Late Prototyping */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Late Prototyping
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Validate part designs with pilot runs and market testing to
                  reduce design risk before production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="w-full">
          <div className="relative flex justify-center w-full h-fit overflow-hidden">
            <Image
              src="/Assets/Images/resources/product-life-cycle/infographic_v2_def.jpg"
              alt="Manufacturing facility banner"
              width={1000}
              height={1500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/end_use_production.jpg"
                    alt="Shift seamlessly to end-use production"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Shift Seamlessly to End-Use Production
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You'll find complete program management at Protolabs with a
                  team of manufacturing experts who will help optimize your
                  project around cost, quantity, and quality.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Row 2 - Grid of 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1 - Low-Volume Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Low-Volume Production
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ramp up production to get quality end-use parts to market fast
                  and use batch production to reduce financial risk with no
                  order minimums and low total cost of ownership.
                </p>
              </div>

              {/* Item 2 - Mass Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Mass Production
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Order quantities up to 1 million+ parts with volume pricing
                  built to fit your budget.
                </p>
              </div>

              {/* Item 3 - On-Demand Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  On-Demand Production
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build agility into your supply chain by ordering quick-turn
                  parts when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Leverage Short-Term Production
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You can also tap into our production capabilities for any
                  immediate short-term needs of end-use parts like jigs,
                  fixtures, and industrial components, or managing inventory
                  levels and financial costs towards the end of the product life
                  cycle.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Learn More →
                </a>
              </div>

              {/* Right Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/short_term_production.jpg"
                    alt="Leverage short-term production for jigs, fixtures, and industrial components"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 - Grid of 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1 - Jigs & Fixtures */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Jigs & Fixtures
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamline part assembly and help reduce production costs with
                  durable jigs and fixtures.
                </p>
              </div>

              {/* Item 2 - End-of-Life Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  End-of-Life Production
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce your financial risk and warehousing costs during end of
                  product life by ordering low volumes of product parts just in
                  time.
                </p>
              </div>

              {/* Item 3 - Maintenance, Repair, and Operations (MRO) */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Maintenance, Repair, and Operations (MRO)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Order custom production parts on demand for MRO applications
                  to keep equipment running without delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
