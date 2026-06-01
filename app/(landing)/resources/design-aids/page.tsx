import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Design Aids"
        desc="Learn about the design elements, materials, and surface finishes of injection-molded parts by registering for our free design aids."
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Design Cube */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative w-full h-56 md:h-64 bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/aerospace-machining/design-cube.jpg"
                    alt="Design Cube - Injection molding learning tool"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0B1221] mb-3">
                    Design Cube
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    One of the best ways to learn about our injection molding
                    process is to have an actual plastic part in your hands to
                    explore. That's why we created the Design Cube, which shows
                    part features that are too thin or too thick, bad bosses,
                    right and wrong ribs, and other considerations to be mindful
                    of while designing parts for injection molding.
                  </p>
                  <a
                    href="#"
                    className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                    Get a Design Cube ➔
                  </a>
                </div>
              </div>

              {/* Right Column - Material Selectors */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative w-full h-56 md:h-64 bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/aerospace-machining/material-selectors.jpg"
                    alt="Material Selectors - Quick reference guides for plastic and metal materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0B1221] mb-3">
                    Material Selectors
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    These pocket-sized Material Selectors are quick reference
                    guides to help you identify the right plastic and metal
                    materials for your next project. It lists specific
                    measurements on properties to ensure you have the most
                    suitable material and process for your part's application.
                  </p>
                  <a
                    href="#"
                    className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                    Sheet Metal Material Selector →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
