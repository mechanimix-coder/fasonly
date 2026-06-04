"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const prototypingMaterials = [
    {
      id: 0,
      title: "PLA (Politik Asit)",
      content:
        "Mükemmel yüzey kalitesi ve baskı kolaylığı ile bilinen PLA, biyolojik olarak parçalanabilir ve görsel modeller ile tüketici ürünleri için idealdir.",
    },
    {
      id: 1,
      title: "PETG (Polietilen Tereftalat Glikol)",
      content:
        "Mukavemet ve esnekliğin iyi bir kombinasyonunu sunar, gıda güvenlidir ve mekanik parçalar için uygundur.",
    },
    {
      id: 2,
      title: "ASA (Akrilik Nitril Stiren Akrilat)",
      content:
        "UV direnci ve hava koşullarına dayanıklılık sağlar, dış mekan uygulamaları için mükemmeldir.",
    },
    {
      id: 3,
      title: "ABS (Akrilik Nitril Bütadien Stiren)",
      content:
        "Darbe direnci ve mukavemeti ile bilinir, dayanıklı prototipler ve fonksiyonel parçalar için uygundur.",
    },
    {
      id: 4,
      title: "TPU (Termoplastik Poliüretan)",
      content:
        "Son derece esnek ve aşınmaya dayanıklıdır, kauçuk benzeri bileşenler oluşturmak için idealdir.",
    },
  ];

  const industrialMaterials = [
    {
      id: 5,
      title: "Naylon (Markforged Onyx)",
      content:
        "Üstün çekme mukavemeti ve tokluk sunar, dayanıklılık ve aşınma direnci gerektiren fonksiyonel prototipler ve üretim parçaları için idealdir.",
    },
    {
      id: 6,
      title: "ULTEM (Stratasys)",
      content:
        "ULTEM 9085 ve ULTEM 1010: Yüksek termal ve kimyasal direnci ile bilinir, yüksek performansın kritik olduğu havacılık ve otomotiv uygulamaları için uygundur.",
    },
    {
      id: 7,
      title: "ASA (Stratasys)",
      content:
        "İyi mekanik özellikleri UV kararlılığı ile birleştirir, sağlam dış mekan ve otomotiv bileşenleri için mükemmeldir.",
    },
    {
      id: 8,
      title: "ABS (Stratasys)",
      content:
        "ABS M30 ve ABSplus: Gelişmiş mukavemet ve kararlılık sağlar, stres altında güvenilir performans gerektiren son kullanım parçaları için uygundur.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="FDM 3D Baskı"
        bg="/Assets/Images/services/3d-printing/fused-deposition-modeling/bg.jpg"
        desc="Birikimli modelleme teknolojisi (FDM), çeşitli malzemelerde kaliteli prototipler ve son kullanım parçaları oluşturur ve hızlı teklif alma imkanı sunar"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/fused-deposition-modeling/dsc03497-600x400-bf06395-1.jpg"
                alt="FDM 3D Baskı"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                FDM 3D Baskı Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                FDM, bir nozul aracılığıyla ısıtılmış termoplastikleri ekstrüde
                ederek parçaları birer birer katman halinde oluşturan çok yönlü
                bir 3D baskı teknolojisidir. Uygun fiyatı ve kalitesiyle bilinen
                FDM, hem prototiplerin hem de fonksiyonel parçaların düşük
                hacimli üretimi için idealdir. PLA, ABS, TPU, PETG ve PEI gibi
                malzemelerle geniş bir uygulama yelpazesini kapsayacak şekilde
                çalışın.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits of FDM */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                FDM'nin Faydaları
              </h2>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>
              <ul className="space-y-3">
                {[
                  "Prototipler ve parçalar için hızlı teslimat",
                  "Çok yönlü malzeme seçenekleri: ısı ve kimyasal dirençli, alev geciktirici, biyouyumlu ve yüksek mukavemetli malzemeler mevcuttur",
                  "Özel parçalar için uygun maliyetli üretim",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Applications for FDM 3D Printing */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                FDM 3D Baskı için Yaygın Uygulamalar
              </h2>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>
              <div className="space-y-4">
                {[
                  {
                    title: "Havacılık",
                    desc: "Hafif bileşenler, muhafazalar, gövdeler ve anten kapakları",
                  },
                  {
                    title: "Otomotiv",
                    desc: "Montaj araçları ve prototip parçalar",
                  },
                  {
                    title: "Tüketici Elektroniği",
                    desc: "Özel muhafazalar ve gövdeler",
                  },
                  {
                    title: "Medikal",
                    desc: "Özel protezler ve anatomik modeller",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        {item.title}:
                      </span>
                      <span className="text-gray-600 text-sm ml-1">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              FDM Tasarım Kılavuzları ve Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              FDM için temel kılavuzlarımız, parça hassasiyetini iyileştirmeye
              ve genel üretim süresini azaltmaya yardımcı olacak önemli tasarım
              hususlarını içerir.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    ABD
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Metrik
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Max Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Maks. Parça Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototipleme FDM:
                      </span>
                      <div>19,68 inç x 19,68 inç x 19,68 inç'e kadar</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Endüstriyel FDM:
                      </span>
                      <div>15,98 inç x 13,97 inç x 15,98 inç'e kadar</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototipleme FDM:
                      </span>
                      <div>500mm x 500mm x 500mm'e kadar</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Endüstriyel FDM:
                      </span>
                      <div>406mm x 355mm x 406mm'e kadar</div>
                    </div>
                  </td>
                </tr>

                {/* Dimensional Accuracy Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Boyutsal Doğruluk
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototipleme FDM:
                      </span>
                      <div>±%0,5, alt limit ±0,020 inç</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Endüstriyel FDM:
                      </span>
                      <div>±%0,3, alt limit ±0,012 inç</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0B1221]">
                        Prototipleme FDM:
                      </span>
                      <div>0,5mm</div>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        Endüstriyel FDM:
                      </span>
                      <div>±0,3mm</div>
                    </div>
                  </td>
                </tr>

                {/* Unsupported/Supported Walls Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Desteksiz/Destekli Duvarlar
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Minimum 0,0315 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Minimum 0,8mm
                  </td>
                </tr>

                {/* Minimum Feature Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Özellik Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,0787 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">2,0mm</td>
                </tr>

                {/* Minimum Hole Diameter Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Delik Çapı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,0787 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">2,0mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                FDM 3D Baskı Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Birikimli Modelleme (FDM), termoplastik filamentleri ısıtarak ve
                katman katman ekstrüde ederek parçalar oluşturur ve pratik
                işlevselliğe sahip katı nesneler elde edilmesini sağlar.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                İnce detaylar ve pürüzsüz yüzeyler elde etmek için UV lazerle
                kürlenen sıvı fotopolimerler kullanan stereolitografi (SLA) gibi
                reçine tabanlı teknolojilerin aksine, FDM daha düşük maliyet ve
                daha hızlı üretim süreleri avantajı sunar.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Ek olarak, destek yapılarına ihtiyaç duymadan toz malzemeleri
                karmaşık şekillere birleştiren seçici lazer sinterleme (SLS)
                gibi toz tabanlı yöntemler bulunsa da, FDM özellikle yüzey
                kalitesi birincil endişe olmadığında dayanıklı parçalar üretmek
                için çok yönlü ve ekonomik bir seçenek olmaya devam etmektedir.
                Bu, FDM'yi çeşitli endüstrilerde fonksiyonel prototipler ve
                düşük hacimli üretim için ideal hale getirir.
              </p>
            </div>

            {/* Right Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Videoyu İzle
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    FDM 3D Baskı Ne Zaman Kullanılır
                  </p>
                  <p className="text-gray-400 text-xs mt-2">FASONLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              FDM Malzeme Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Fasonly FDM prototipleme malzemeleri tipik olarak kullanım
              kolaylıkları, hızları ve maliyet etkinlikleri nedeniyle seçilir ve
              hızlı tasarım yinelemeleri ile doğrulamayı mümkün kılmaya
              odaklanır. Üretim malzemeleri ise dayanıklılıkları, belirli
              mekanik özellikleri ve uzun vadeli performansları için seçilir ve
              son kullanım uygulamaları için standartları karşılamalarını
              sağlar.
            </p>
          </div>

          {/* Prototyping Materials Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center">
              Prototipleme için FDM Malzemeleri:
            </h3>
            <div className="space-y-3">
              {prototypingMaterials.map((material) => (
                <div
                  key={material.id}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => toggleAccordion(material.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                    <span className="font-semibold text-[#0B1221] text-base md:text-lg">
                      {material.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openAccordion === material.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === material.id
                        ? "max-h-[200px] opacity-100 pb-4 px-4"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {material.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial FDM Materials Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center">
              Endüstriyel FDM Malzemeleri:
            </h3>
            <div className="space-y-3">
              {industrialMaterials.map((material) => (
                <div
                  key={material.id}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => toggleAccordion(material.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                    <span className="font-semibold text-[#0B1221] text-base md:text-lg">
                      {material.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openAccordion === material.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === material.id
                        ? "max-h-[200px] opacity-100 pb-4 px-4"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {material.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                FDM 3D Baskı Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Birikimli Modelleme (FDM), termoplastik filamentleri ısıtarak ve
                katman katman ekstrüde ederek parçalar oluşturur ve pratik
                işlevselliğe sahip katı nesneler elde edilmesini sağlar.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                İnce detaylar ve pürüzsüz yüzeyler elde etmek için UV lazerle
                kürlenen sıvı fotopolimerler kullanan stereolitografi (SLA) gibi
                reçine tabanlı teknolojilerin aksine, FDM daha düşük maliyet ve
                daha hızlı üretim süreleri avantajı sunar.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Ek olarak, destek yapılarına ihtiyaç duymadan toz malzemeleri
                karmaşık şekillere birleştiren seçici lazer sinterleme (SLS)
                gibi toz tabanlı yöntemler bulunsa da, FDM özellikle yüzey
                kalitesi birincil endişe olmadığında dayanıklı parçalar üretmek
                için çok yönlü ve ekonomik bir seçenek olmaya devam etmektedir.
                Bu, FDM'yi çeşitli endüstrilerde fonksiyonel prototipler ve
                düşük hacimli üretim için ideal hale getirir.
              </p>
            </div>

            {/* Right Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Videoyu İzle
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    FDM 3D Baskı Ne Zaman Kullanılır
                  </p>
                  <p className="text-gray-400 text-xs mt-2">FASONLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
