"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const accordionItems = [
    {
      id: 0,
      title: "Çevrimiçi teklif alma",
      content:
        "Çevrimiçi teklif almak için CAD dosyanızı yükleyin. myRapid içinde malzemeleri, yüzey işlemlerini ve ek seçenekleri yapılandırın.",
    },
    {
      id: 1,
      title: "Hızlandırılmış 1 günlük teslim süreleri",
      content:
        "Parçalar 1 gün kadar kısa sürede üretilebilir ve gönderilebilir. 50'den az miktarlar için standart 3 günlük teslim süreleri.",
    },
    {
      id: 2,
      title: "Keskin kenarları olmayan güvenli parçalar",
      content:
        "Gönderim öncesinde parçaların çapakları alınır ve kenar kalıntıları temizlenir (fiyata dahildir). Süreç, parçaların kutudan çıktığında dokunmak için güvenli olmasını sağlar.",
    },
    {
      id: 3,
      title: "Sac metal bileşenler için tek durak noktası",
      content:
        "Şekillendirilmiş geometriler ve donanım ek parçalı geometriler, 50'den az miktarlar için 3 günlük teslim sürelerinde mevcuttur. Sac metal bileşen sepeti aynı standart teslim süresinde gönderilir. Düz işler ve şekillendirilmiş parçalar tek bir tedarikçi ile üretilir.",
    },
    {
      id: 4,
      title: "Yüksek güvenilirlikli kesim yeteneği",
      content:
        "0,024 inç – 0,250 inç (0,609mm – 6,35mm) kalınlık aralığında metal kesim uygulamaları için tasarlanmış fiber optik lazerler.",
    },
    {
      id: 5,
      title: "Üretim uzmanlığı",
      content:
        "Sorularınız mı var? Parçalarınızın gereksinimlerinizi karşıladığından emin olmak için sac metal uygulama mühendisleri ekibimizle çalışın.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // tables

  const [activeTab, setActiveTab] = useState<"standard" | "thin">("standard");

  const data = {
    standard: {
      title: "Standart Kalınlık (3,40mm - 6,35mm)",
      maxSize: "990,6mm x 482,6mm",
      minPartSize: "6,35mm x 6,35mm",
      thicknessRange: "0,61mm - 6,35mm",
      tolerances: [
        "Tüm özellikler için +/- 0,127mm (donanım delikleri hariç)",
        "Ek parçaların doğru oturmasını sağlamak için donanım ek parçası deliklerinde +0,076mm/-0,000mm",
      ],
    },
    thin: {
      title: "İnce Malzeme (0,61mm - 3,40mm)",
      maxSize: "990,6mm x 1.193,6mm",
      minPartSize: "6,35mm x 6,35mm",
      thicknessRange: "0,61mm - 6,35mm",
      tolerances: [
        "Tüm özellikler için +/- 0,127mm (donanım delikleri hariç)",
        "Ek parçaların doğru oturmasını sağlamak için donanım ek parçası deliklerinde +0,076mm/-0,000mm",
      ],
    },
  };

  const currentData = data[activeTab];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Metal Lazer Kesim Hizmeti"
        desc="1 gün kadar kısa sürede özel lazer kesim parçalar alın. Standart 3 günlük teslim süreleri de mevcuttur."
        firstButton={{ title: "Parça Yükle", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Jump to Section Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-[#0B1221] mb-4">
                  Bölüme Atla
                </h3>
                <div className="space-y-2">
                  {[
                    "Sürecimiz",
                    "Tasarım Kılavuzları",
                    "Malzemeler",
                    "Lazer Kesim Uygulamaları",
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
              {/* Beyond Prototyping Section */}
              <div id="lazer-kesim" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Prototipleme Ötesi
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Lazer kesim, bir lazer ışınının ham sac stoğu delerek düz
                  geometriler ürettiği bir üretim sürecidir. Rondelalar, montaj
                  parçaları, braketler ve gövdeler gibi bileşenler için iyi
                  çalışan bir dizi metal mevcuttur.
                </p>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Lazer kesim genellikle şunlar için kullanılır:
                </h3>
                <ul className="space-y-2">
                  {[
                    "prototip tasarımları veya ürün gereksinimlerini test etme",
                    "50+ parçaya kadar ölçek verimlilikleri",
                    "standart bağlantı özelliklerine sahip parçalar (USB, HDMI, ethernet portları)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sac Metal Tasarım Kılavuzu"
        desc="Sac metal parçaların oluşturulmasında yer alan süreçleri, yaygın özelliklerin nasıl tasarlanacağını ve doğru malzemenin nasıl seçileceğini keşfetmek için bu kılavuzu indirin."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Accordion */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Lazer Kesim Sürecimiz
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lazer kesim hizmetimiz ve yeteneklerimiz, kaliteli parçaları
                zamanında güvenilir bir şekilde üretmek etrafında
                tasarlanmıştır.
              </p>

              <div className="space-y-3">
                {accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                      <span className="font-semibold text-[#0B1221] text-base md:text-lg">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openAccordion === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.id
                          ? "max-h-[200px] opacity-100 pb-4 px-4"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/laser-cutting-process.jpg"
                alt="Lazer Kesim Süreci"
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
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Lazer Kesim Özellikleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "standard"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Standart Kalınlık (3,40mm - 6,35mm)
            </button>
            <button
              onClick={() => setActiveTab("thin")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "thin"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              İnce Malzeme (0,61mm - 3,40mm)
            </button>
          </div>

          {/* Specifications Table */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {/* Maximum Size Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                      Maksimum Boyut
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      {currentData.maxSize}
                    </td>
                  </tr>

                  {/* Minimum Part Size Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                      Minimum Parça Boyutu
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      {currentData.minPartSize}
                    </td>
                  </tr>

                  {/* Material Thicknesses Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                      Malzeme Kalınlıkları
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      {currentData.thicknessRange}
                    </td>
                  </tr>

                  {/* Tolerances Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                      Toleranslar
                    </td>
                    <td className="p-4 text-gray-600 bg-white">
                      <ul className="space-y-2">
                        {currentData.tolerances.map((tol, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                            <span className="text-sm">{tol}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Lazer Kesim Parçalar için Malzemeler ve Kalınlıklar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Özel lazer kesim parçalar için aşağıdaki metal malzemeleri
              sunuyoruz. Malzeme kalınlığına bağlı olarak maksimum parça
              boyutunun değişeceğini unutmayın.
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
                  <th className="text-left p-4 font-semibold text-lg min-w-[250px]">
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
                      <li>6061-T6</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top" rowSpan={4}>
                    0,025 inç - 0,250 inç
                    <br />
                    <span className="text-gray-400 text-sm">
                      (0,635mm - 6,35mm)
                    </span>
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
                      <li>Galvanizli Tavlanmış</li>
                      <li>Galvanizli</li>
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
                      <li>304 #4</li>
                      <li>316-2B</li>
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
                  <td className="p-4 text-gray-600 align-top" rowSpan={2}>
                    0,025 inç - 0,125 inç
                    <br />
                    <span className="text-gray-400 text-sm">
                      (0,635mm - 3,175mm)
                    </span>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/high-precision-cnc-gas-cutting-metal-sheet-1-1.jpg"
                alt="Lazer Kesim Parçalar için Uygulamalar"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Lazer Kesim Parçalar için Uygulamalar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lazer kesim, enerji depolama, bilgisayar elektroniği, robotik ve
                havacılık gibi endüstrilerde sıklıkla kullanılan bir üretim
                sürecidir. Lazer kesim ile üretilen yaygın parçalar şunları
                içerir:
              </p>
              <ul className="space-y-2">
                {[
                  "düz desenler",
                  "ön paneller",
                  "rondelalar",
                  "montaj plakaları",
                  "paneller",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
