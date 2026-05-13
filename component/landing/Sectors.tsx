"use client";
import { ArrowRight } from "lucide-react";

export default function SectorsSection() {
  const sectors = [
    {
      title: "Otomotiv & Yan Sanayi",
      description:
        "Otomotiv sektörü için yüksek hassasiyetli parça üretimi, prototipleme ve seri üretim çözümleri. Kalite ve dayanıklılık odaklı üretim anlayışıyla projelerinize değer katarız.",
      cert: "ISO 9001",
    },
    {
      title: "Savunma Sanayi",
      description:
        "Savunma sanayi gereksinimlerine uygun, yüksek dayanıklılık ve hassasiyet gerektiren parçaların üretimi. Kritik uygulamalar için güvenilir çözümler sunuyoruz.",
      cert: null,
    },
    {
      title: "Medikal Cihaz",
      description:
        "Medikal cihazlar ve sağlık ekipmanları için hassas üretim, hızlı prototipleme ve düşük adetli özel parça çözümleri. Güvenlik ve kalite standartlarına tam uyum.",
      cert: null,
    },
    {
      title: "Beyaz Eşya",
      description:
        "Beyaz eşya sektörüne yönelik dayanıklı, uzun ömürlü ve estetik parça üretimi. Yüksek adetli seri üretimden prototiplemeye kadar tüm ihtiyaçlarınız için yanınızdayız.",
      cert: null,
    },
    {
      title: "Enerji & Güç",
      description:
        "Enerji sektörü için dayanıklı ve güvenilir bileşen üretimi. Yenilenebilir enerji ve güç sistemleri projelerinize özel çözümler sunuyoruz.",
      cert: null,
    },
    {
      title: "Endüstriyel Makine",
      description:
        "Endüstriyel makine ve ekipmanları için hassas parça üretimi, bakım ve revizyon desteği. Makine parkınız için ihtiyaç duyduğunuz her türlü bileşeni üretiyoruz.",
      cert: null,
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
            Hizmet Verdiğimiz Sektörler
          </h2>
          <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout - Sectors on left, Certifications on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side - Sectors List */}
          <div className="flex-1">
            <div className="bg-[#F0F8FF] rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center lg:text-left">
                Sektörler
              </h3>
              <div className="space-y-3">
                {sectors.map((sector, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#96E92A] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-bold text-[#0B1221]">
                          {sector.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Certifications */}
          <div className="flex-1">
            <div className="bg-[#F0F8FF] rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center lg:text-left">
                Sertifikalarımız
              </h3>
              <div className="space-y-3">
                {sectors
                  .filter((s) => s.cert)
                  .map((sector, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#96E92A] rounded-full"></div>
                        <div>
                          <p className="font-medium text-[#0B1221]">
                            {sector.cert}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {sector.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="group inline-flex items-center gap-2 bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3">
            Tüm Sektörleri İncele
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
