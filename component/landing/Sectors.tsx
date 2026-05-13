"use client";
import { ArrowRight } from "lucide-react";

export default function SectorsSection() {
  const sectors = [
    {
      title: "Otomotiv & Yan Sanayi",
      description:
        "Otomotiv sektörü için yüksek hassasiyetli parça üretimi, prototipleme ve seri üretim çözümleri. Kalite ve dayanıklılık odaklı üretim anlayışıyla projelerinize değer katarız.",
    },
    {
      title: "Savunma Sanayi",
      description:
        "Savunma sanayi gereksinimlerine uygun, yüksek dayanıklılık ve hassasiyet gerektiren parçaların üretimi. Kritik uygulamalar için güvenilir çözümler sunuyoruz.",
    },
    {
      title: "Medikal Cihaz",
      description:
        "Medikal cihazlar ve sağlık ekipmanları için hassas üretim, hızlı prototipleme ve düşük adetli özel parça çözümleri. Güvenlik ve kalite standartlarına tam uyum.",
    },
    {
      title: "Beyaz Eşya",
      description:
        "Beyaz eşya sektörüne yönelik dayanıklı, uzun ömürlü ve estetik parça üretimi. Yüksek adetli seri üretimden prototiplemeye kadar tüm ihtiyaçlarınız için yanınızdayız.",
    },
    {
      title: "Enerji & Güç",
      description:
        "Enerji sektörü için dayanıklı ve güvenilir bileşen üretimi. Yenilenebilir enerji ve güç sistemleri projelerinize özel çözümler sunuyoruz.",
    },
    {
      title: "Endüstriyel Makine",
      description:
        "Endüstriyel makine ve ekipmanları için hassas parça üretimi, bakım ve revizyon desteği. Makine parkınız için ihtiyaç duyduğunuz her türlü bileşeni üretiyoruz.",
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0099ff] font-semibold text-sm tracking-wider uppercase mb-3 inline-block">
            Uzmanlık Alanlarımız
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-4">
            Hizmet Verdiğimiz Sektörler
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#96E92A] to-[#0099ff] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 text-lg">
            Farklı sektörlerin ihtiyaçlarına özel, mühendislik destekli üretim
            çözümleri
          </p>
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#96E92A]/30 hover:shadow-lg transition-all duration-300">
              {/* Index Number */}
              <div className="text-5xl font-bold text-gray-100 group-hover:text-[#96E92A]/20 transition-colors duration-300 mb-4">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              {/* Title with minimal accent */}
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors duration-300">
                {sector.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {sector.description}
              </p>

              {/* Minimal Learn More Link */}
              {/* <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-[#0099ff] transition-all duration-300">
                Detaylar
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button> */}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 bg-transparent border border-[#0B1221] hover:bg-[#0B1221] text-[#0B1221] hover:text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
            Tüm Sektörleri Keşfet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
