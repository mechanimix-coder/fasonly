"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sac Metal Şekillendirme Hizmeti"
        desc="Hızlı prototipleme ve üretim için özel şekillendirilmiş sac metal parçaları 3 gün kadar kısa sürede alın"
        image="/Assets/Images/services/sheet-metal-fabrication/forming/hero.webp"
        firstButton={{ title: "Parça Yükle", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Pres Freni Şekillendirme Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Pres freni şekillendirme, bir pres freni makinesi kullanarak düz
                sac metali nihai bir şekle büken bir metal imalat sürecidir.
                Zımba (üst takım) ve kalıp (alt takım) arasında kuvvet uygulanır
                ve çeşitli metal malzemeler ve kalınlıklar için doğrusal
                bükümler yapılabilir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Tüm frenler, hassas parça konumlandırma ve tekrarlanabilirlik
                için CNC kontrolörleri ile donatılmıştır. Pres freni
                şekillendirme, U-bükümler, flanşlar, kanallar ve iç bükümler
                içeren parçalar oluşturmak için iyi çalışır.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Uygun şekillendirilmiş parçalar için teslim süreleri üç gün
                kadar kısadır.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/forming/sheet_metal_fab_1483_570x308.jpg"
                alt="Pres Freni Şekillendirme Süreci"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sac Metal Şekillendirme Tasarım Kılavuzları ve Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Tutarlı kalite ve hızlı üretim süreleri sağlamak için
              şekillendirilmiş sac metal parçalar için bu kılavuzları izleyin:
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  { label: "Maksimum Büküm Uzunluğu", value: "47 inç" },
                  {
                    label: "Minimum Uygun Parça Boyutu",
                    value:
                      "Şekillendirilmiş parçalar için 0,05 inç x 0,05 inç (12,7mm x 12,7mm)",
                  },
                  { label: "Maksimum Presleme Kuvveti", value: "80 ton" },
                  {
                    label: "Büküm Açıları",
                    value: "1 derece 'vuruş' ila 135 derece",
                  },
                  {
                    label: "Büküm Çıktısı",
                    value: "Doğrusal bükümler - dış ve iç flanşlar",
                  },
                  {
                    label: "Maksimum U-Kanal Oranı",
                    value: "2:1 (genişlik:yükseklik)",
                  },
                  {
                    label: "İç Yarıçap Takım Seçenekleri",
                    value:
                      "0,01 inç ila 1 inç (standart takım artışları) >1 inç yarıçaplı bükümler kademeli şekillendirilecektir",
                  },
                  {
                    label: "Ofsetler",
                    value: "Standart ofset takım boyutları",
                  },
                  {
                    label: "Kıvırmalar",
                    value:
                      "47 inç'e kadar kapalı kıvırmalar, 36 inç'e kadar açık kıvırmalar",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 font-semibold text-[#0B1221] w-1/3 align-top">
                      {row.label}
                    </td>
                    <td className="p-4 text-gray-600 align-top">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Guidelines */}
          <div className="space-y-2">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                • CAD tasarımlarında bükümleri boşaltın
              </span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                • En iyi fiyat ve teslim süresi için
              </span>
              , üretici tarafından önerilen yarıçap takımını kullanın
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                • Yakındaki özelliklerin uygun yerleşimini sağlayın
              </span>{" "}
              (örn. delikler, donanım ek parçaları, diğer bükümler)
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Şekillendirilmiş Parçalar için Sac Metal Malzemeler ve Kalınlıklar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Özel şekillendirilmiş sac metal parçalar için aşağıdaki metal
              malzemeleri sunuyoruz. Malzeme kalınlığına bağlı olarak maksimum
              büküm yeteneklerinin değişeceğini unutmayın.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[150px]">
                    Malzeme
                  </th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[200px]">
                    Kalite
                  </th>
                  <th className="text-left p-4 font-semibold text-lg min-w-[300px]">
                    Mevcut Kalınlıklar
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Aluminum */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Alüminyum
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>5052-H32</li>
                      <li>6061-T6 (inceleme gerektirir)</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>5052: 0,025 inç – 0,250 inç (0,635mm – 6,35mm)</li>
                      <li>6061: 0,025 inç – 0,134 inç (0,635mm – 3,40mm)*</li>
                    </ul>
                  </td>
                </tr>

                {/* Steel */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Çelik
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>CRS/HRPO</li>
                      <li>Galvanizli Tavlanmış (ön kaplamalı)</li>
                      <li>Galvanizli (ön kaplamalı)</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>
                        CRS/HRPO: 0,025 inç – 0,250 inç (0,635mm – 6,35mm)
                      </li>
                      <li>
                        Ön kaplamalı: 0,025 inç – 0,134 inç (0,635mm – 3,40mm)
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* Stainless Steel */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Paslanmaz Çelik
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>304-2B</li>
                      <li>304-4</li>
                      <li>316-2B</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>304-2B: 0,025 inç – 0,250 inç (0,635mm – 6,35mm)</li>
                      <li>304-4: 0,025 inç – 0,119 inç (0,635mm – 3,023mm)</li>
                      <li>316-2B: 0,025 inç – 0,134 inç (0,635mm – 3,40mm)</li>
                    </ul>
                  </td>
                </tr>

                {/* Copper */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Bakır
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>C1010</li>
                      <li>C1100</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    0,025 inç – 0,125 inç (0,635mm – 3,175mm)
                  </td>
                </tr>

                {/* Brass */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 font-semibold align-top">
                    Pirinç
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <ul className="space-y-1">
                      <li>C260</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    0,025 inç – 0,125 inç (0,635mm – 3,175mm)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-4 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              *Alüminyum 6061-T6'dan yapılan şekillendirilmiş parçalar manuel
              inceleme gerektirir ve teklif süreci sırasında yapılandırılamaz.
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
                Pres Freni Şekillendirilmiş Parçalar için Uygulamalar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Pres freni şekillendirme, enerji depolama, bilgisayar
                elektroniği, robotik, medikal ve havacılık gibi endüstrilerde
                yaygın olarak kullanılan bir üretim sürecidir. Şekillendirme ile
                üretilen yaygın sac metal parçalar şunları içerir:
              </p>

              <ul className="space-y-2">
                {[
                  "braketler",
                  "baralar",
                  "kapaklar",
                  "paneller",
                  "montaj parçaları",
                  "gövdeler veya muhafazalar",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/forming/sheet_metal_fab_1511_low_res_570x308.jpg"
                alt="Pres Freni Şekillendirilmiş Parçalar için Uygulamalar"
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
