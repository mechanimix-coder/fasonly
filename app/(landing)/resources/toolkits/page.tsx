import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Üretim Araç Setleri"
        desc="Üretim başlamadan önce parça tasarımlarınızı optimize etmek için ihtiyacınız olan üretilebilirlik için tasarım bilgilerini edinin."
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Tasarım ve Üretim Araç Setleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - 3D Printing Toolkit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src="/Assets/Images/resources/toolkits/3dp-digital-twin.jpg"
                  alt="3D Baskı Araç Seti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  3D Baskı Araç Seti
                </h3>
                <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Keşfet →
                </button>
              </div>
            </div>

            {/* Card 2 - Moldability Toolkit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src="/Assets/Images/resources/toolkits/im-digital-twin.jpg"
                  alt="Kalıplanabilirlik Araç Seti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Kalıplanabilirlik Araç Seti
                </h3>
                <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Keşfet →
                </button>
              </div>
            </div>

            {/* Card 3 - CNC Toolkit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src="/Assets/Images/resources/toolkits/cnc-digital-twin.jpg"
                  alt="CNC Araç Seti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  CNC Araç Seti
                </h3>
                <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Keşfet →
                </button>
              </div>
            </div>

            {/* Card 4 - Sheet Metal Toolkit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src="/Assets/Images/resources/toolkits/sm-digital-twin.jpg"
                  alt="Sac Metal Araç Seti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Sac Metal Araç Seti
                </h3>
                <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Keşfet →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
