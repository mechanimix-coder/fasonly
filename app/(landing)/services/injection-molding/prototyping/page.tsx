import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Prototype Tooling for Injection Molding"
        desc="Reduce mold costs and validate part designs with a low-cost prototype tool"
        firstButton={{ title: "Get Instant Quote", route: "/" }}
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

      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Injection Molding from Prototyping to Production
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Partner with us through every stage of your project to move
                seamlessly from prototyping to production with just one
                resource. Our collaborative approach better positions you to
                reduce your time-to-market, drive improved cost-efficiencies,
                and attain the levels of quality and certification your project
                requires.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/prototyping/injection-molding-production-570x308.jpg"
                  }
                  fill
                  alt="design cube"
                />
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
              Prototyping Tool for Molding
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Two Column Layout - Image Left, Table Right */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/prototyping/pl-production-page-image-02-570x608.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {/* Mold Price Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50 w-2/5">
                        Mold Price
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Lower than on-demand manufacturing tool
                      </td>
                    </tr>
                    {/* Part Price Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Part Price
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Higher than on-demand manufacturing tool
                      </td>
                    </tr>
                    {/* Mold Cavities Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Mold Cavities
                      </td>
                      <td className="p-3 text-gray-600 bg-white">Single</td>
                    </tr>
                    {/* Guaranteed Mold Life Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Guaranteed Mold Life
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Limited (guaranteed for at least 2,000 shots)
                      </td>
                    </tr>
                    {/* Mold Storage Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Mold Storage
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Stored for 18 months of inactivity
                      </td>
                    </tr>
                    {/* Quality Documentation Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Quality Documentation
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Basic and digital inspection reports available upon
                        request
                      </td>
                    </tr>
                    {/* Additional Features Row */}
                    <tr>
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50 align-top">
                        Additional Features
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>Aluminum molds</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>Standard lead times as fast as 7 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>
                              Tolerances of +/-0.003 in. plus resin tolerance
                              (in./in.)
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>Set-up fees apply to each run</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Compare Link */}
              <div className="text-center mt-6">
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors inline-flex items-center gap-2">
                  Compare to production →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/prototyping/pl-prototyping-page-image-570x308-image-03.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Why Use a Prototyping Tool?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Design Feedback Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Design Feedback
                </h3>
                <ul className="space-y-2">
                  {[
                    "Receive interactive design for manufacturability feedback with every quote to make early adjustments before prototyping begins.",
                    "Talk with applications engineers to discuss any design challenges and manufacturing questions that arise.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Iterative Development Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Iterative Development
                </h3>
                <ul className="space-y-2">
                  {[
                    "Have physical prototypes in hand within days to quickly modify designs during early product development.",
                    "Produce multiple prototypes at the same time to compare and iterate designs simultaneously.",
                    "Reduce overall time to market with an iterative product development cycle.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Validation Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Design Validation
                </h3>
                <ul className="space-y-2">
                  {[
                    "Test the form and fit of components with small quantities of molded parts.",
                    "Perform functional test with prototypes manufactured in production-grade materials.",
                    "Full library of online design resources including guidelines, tips, white papers, and videos.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Market Testing Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Market Testing
                </h3>
                <ul className="space-y-2">
                  {[
                    "Produce a pilot run of injection-molded parts to validate market interest before launch.",
                    "Reduce financial risk at market launch by implementing affordable aluminum tooling before full-scale production begins.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
