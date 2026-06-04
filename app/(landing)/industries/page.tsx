// app/services/page.tsx
"use client";

import Blog from "@/component/landing/Blog";
import GuideDownload from "@/component/landing/GuideDownload";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState<
    "injection" | "cnc" | "printing" | "sheet"
  >("injection");

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Dark Blue with Blue Glare */}
      <div className="relative w-full bg-[#0B1221] pb-28 pt-46 overflow-hidden">
        {/* Blue glare effect */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0099ff] blur-[150px] rounded-full opacity-25 pointer-events-none" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#0099ff] blur-[120px] rounded-full opacity-15 pointer-events-none" />

        {/* Background grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Üretim Malzemeleri
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              Prototipleme ve üretim için uygun yüzlerce ticari sınıf plastik,
              metal ve elastomer arasından seçim yapın.
            </p>
          </div>
        </div>
      </div>

      {/* contents here */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Malzeme Seçici Araçları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Hizmete özel malzemelerimizin birbirlerine karşı nasıl
              sıralandığını karşılaştırın. Uygulamanız için en iyi seçimi
              hızlıca belirlemek üzere malzeme özelliğine göre sıralayın.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Injection Molding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Enjeksiyon Kalıplama
              </h3>
              <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                Malzemeleri Görüntüle
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 2 - CNC Machining */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                CNC İşleme
              </h3>
              <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                Malzemeleri Görüntüle
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 3 - 3D Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🖨️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                3D Baskı
              </h3>
              <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                Malzemeleri Görüntüle
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 4 - Sheet Metal Fabrication */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🔩</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Sac Metal İmalatı
              </h3>
              <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                Malzemeleri Görüntüle
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Hizmete Göre Malzeme Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTab("injection")}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === "injection"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Enjeksiyon Kalıplama
            </button>
            <button
              onClick={() => setActiveTab("cnc")}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === "cnc"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              CNC İşleme
            </button>
            <button
              onClick={() => setActiveTab("printing")}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === "printing"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              3D Baskı
            </button>
            <button
              onClick={() => setActiveTab("sheet")}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === "sheet"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Sac Metal İmalatı
            </button>
          </div>

          {/* Tab Content - Injection Molding */}
          {activeTab === "injection" && (
            <div className="space-y-8">
              {/* Thermoplastics Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                  Termoplastikler
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  {[
                    "ABS",
                    "ABS/PC",
                    "HDPE",
                    "LCP",
                    "LDPE",
                    "LLDPE",
                    "Naylon (PA)",
                    "PC/PBT",
                    "PEEK",
                    "PEI (Ultem)",
                    "PET",
                    "PETG",
                    "PMMA (Akrilik)",
                    "POM (Asetal/Delrin)",
                    "Polikarbonat (PC)",
                    "Polipropilen (PP)",
                    "PPE/PS",
                    "PS",
                    "PSU",
                    "PPS",
                    "PBT",
                    "SB",
                    "TPE/TPV",
                    "TPU",
                  ].map((material, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600 text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermosets Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                  Termosetler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    "Silikon Kauçuk",
                    "Medikal Sınıfı Silikon Kauçuk",
                    "Florosilikon",
                    "Optik Silikon Kauçuk",
                  ].map((material, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600 text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - CNC Machining */}
          {activeTab === "cnc" && (
            <div className="space-y-8">
              {/* Plastics Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                  Plastikler
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#F0F8FF]">
                        <th className="text-left p-3 font-semibold text-[#0B1221] border-b border-gray-200">
                          Malzeme
                        </th>
                        <th className="text-left p-3 font-semibold text-[#0B1221] border-b border-gray-200">
                          Spesifikasyon
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["ABS", "PEI (Ultem)"],
                        ["PA (Naylon)", "PET"],
                        ["Polikarbonat (PC)", "PMMA (Akrilik)"],
                        ["PEEK", "POM (Asetal/Delrin)"],
                        ["Polipropilen (PP)", "PPSU"],
                        ["PPE/PS", "UHMW"],
                        ["PVC", ""],
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="p-3 text-gray-600 text-sm">
                            {row[0]}
                          </td>
                          <td className="p-3 text-gray-600 text-sm">
                            {row[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Metals Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                  Metaller
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#F0F8FF]">
                        <th className="text-left p-3 font-semibold text-[#0B1221] border-b border-gray-200">
                          Malzeme
                        </th>
                        <th className="text-left p-3 font-semibold text-[#0B1221] border-b border-gray-200">
                          Spesifikasyon
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Alüminyum", "Çelik"],
                        ["Pirinç", "Paslanmaz Çelik"],
                        ["Bakır", "Titanyum"],
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="p-3 text-gray-600 text-sm">
                            {row[0]}
                          </td>
                          <td className="p-3 text-gray-600 text-sm">
                            {row[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - 3D Printing */}
          {activeTab === "printing" && (
            <div className="space-y-8">
              {/* Plastics Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                  Plastikler
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {["ABS", "PA (Naylon)", "Polikarbonat", "Polipropilen"].map(
                    (material, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">
                          {material}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Metals Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                  Metaller
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {[
                    "Alüminyum",
                    "Kobalt Krom",
                    "Inconel",
                    "Paslanmaz Çelik",
                    "Titanyum",
                  ].map((material, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600 text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Sheet Metal Fabrication */}
          {activeTab === "sheet" && (
            <div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Metaller
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {[
                  "Alüminyum",
                  "Çelik",
                  "Paslanmaz Çelik",
                  "Bakır",
                  "Pirinç",
                ].map((material, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{material}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <GuideDownload
        title="Periyodik Malzeme Tablomuzu İndirin"
        desc="Periyodik Malzeme Tablosu, Fasonly'de sunulan en popüler malzemeler için başvuru kılavuzunuzdur. İster enjeksiyon kalıplama, ister CNC işleme, 3D baskı veya sac metal imalatı olsun, kılavuzu indirin ve bir sonraki projeniz sırasında kolay referans için masanıza asın."
        simple
      />

      <Blog />
    </div>
  );
}
