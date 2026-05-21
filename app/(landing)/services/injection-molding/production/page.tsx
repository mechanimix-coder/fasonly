import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";

export default function page() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Tooling for Production Injection Molding"
        desc="Reduce part costs and create supply chain flexibility with automated injection molding"
        image="/Assets/Images/services/injection-molding/pl_service_im.webp"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
        secondButton={{ title: "Start Production Quote", route: "/" }}
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
                    "Capabilities",
                    "Materials",
                    "Surface Finishes",
                    "Quality Inspections",
                    "Finishing Options",
                    "About Plastic Injection Molding",
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  What is Prototyping?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  We have two injection molding service options—prototyping and
                  on-demand manufacturing—and each offers its own benefits
                  depending on your project needs. If part quantities are lower,
                  an affordable entry point for tooling is important, and rapid
                  development over a short period of time is critical, our
                  prototyping option works great.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Common applications for plastic injection molding:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "low-volume production",
                    "bridge tooling",
                    "pilot runs",
                    "functional testing and prototyping",
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
      <GuideDownload
        title="Definitive Guide to Injection Molding"
        desc="This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices that ensure your model is optimized for molding."
      />

      <div className="w-full bg-white">
        {/* Top Description Section */}
        <div className="container mx-auto px-4 md:px-10 lg:px-20 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              We have two injection molding service options—prototyping and
              on-demand manufacturing—and each offers its own benefits depending
              on your project needs. If part quantities are higher, an
              affordable piece-part price is important, and quick-turn
              production throughout your product life cycle is critical, our
              on-demand manufacturing option is ideal.
            </p>
          </div>
        </div>

        {/* Production Grade Tooling Section */}
        <div className="w-full bg-white py-20">
          <div className="container mx-auto px-4 md:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Column - Image */}
              <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🏭</span>
                  <p className="text-gray-500 text-sm mt-2">
                    Production Grade Tooling
                  </p>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  Production Grade Tooling for Injection Molding
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {/* Mold Price Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50 w-2/5">
                          Mold Price
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Higher than prototyping tool
                        </td>
                      </tr>
                      {/* Part Price Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Part Price
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Lower than prototyping tool
                        </td>
                      </tr>
                      {/* Mold Cavities Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Mold Cavities
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Single and multi-cavity
                        </td>
                      </tr>
                      {/* Guaranteed Mold Life Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Guaranteed Mold Life
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Unlimited
                        </td>
                      </tr>
                      {/* Mold Storage Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Mold Storage
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Stored for 3 years of inactivity
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quality Documentation Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                    Quality Documentation
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Molding process development report and basic inspection
                        reports included; enhanced inspection reports available
                        upon request
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Additional Features Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                    Additional Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Aluminum molds",
                      "Standard lead time of 15 days or less",
                      "Tolerances of +/-0.003 in. plus resin tolerance (in./in.)",
                      "Set-up fees apply to each run",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hint />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Injection Molding for End-Use Production
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Protolabs on-demand manufacturing service helps you simplify your
              supply chain so you can get quality parts easier and faster. Using
              industry best practices like scientific molding, we accelerate
              manufacturing cycles to reduce your time to market. We meet your
              inventory needs with no minimum order quantities, and offer supply
              chain flexibility ranging from bridge tooling and just-in-time
              (JIT) production to line-down emergency coverage.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Low-volume Runs */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Low-volume Runs
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Validate part design, assembly processes, and market demand
                    with pilot runs prior to mass production.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Manage inventory overhead with production of parts only when
                    demand dictates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Use as the primary production method for products with
                    annual sales volumes of a few thousand units.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bridge Tooling */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Bridge Tooling
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Implement cost-effective aluminum tooling before committing
                    to a capital expense with steel tooling.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Minimize the "cost of waiting" for a steel tool—and get to
                    market quicker.
                  </span>
                </li>
              </ul>
            </div>

            {/* Optimizing Supply Chain */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Optimizing Supply Chain
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Minimize down time and reduce the risk of stock-outs when
                    large-scale production tools are being repaired.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Mitigate the risk of domestic and global shipping delays by
                    having a reliable, on-demand supplier of low-volume parts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Manage increases in demand volatility without going on
                    back-order.
                  </span>
                </li>
              </ul>
            </div>

            {/* Reduce Production Costs */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Reduce Production Costs
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Unlock new market opportunities with cost-effective
                    production of low-volume, end-use parts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Procure parts on demand, without any Minimum Order Quantity
                    (MOQ) requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Lower inventory costs and warehousing expenses with
                    on-demand sourcing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
