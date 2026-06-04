"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("maxDimensions");

  const tabs = [
    { id: "maxDimensions", label: "Maks. Boyutlar" },
    { id: "layerThickness", label: "Katman Kalınlığı" },
    { id: "minFeatureSize", label: "Minimum Özellik Boyutu" },
    { id: "tolerances", label: "Toleranslar" },
    { id: "surfaceFinishes", label: "Yüzey İşlemleri" },
  ];

  const content = {
    maxDimensions: {
      title: "Maks. Boyutlar",
      description: "",
      table: {
        headers: ["", "ABD", "Metrik"],
        rows: [
          {
            label: "Normal Çözünürlük",
            us: "9,6 inç x 9,6 inç x 13,0 inç",
            metric: "245mm x 245mm x 330mm",
          },
          {
            label: "X Line*",
            us: "31,5 inç x 15,7 inç x 19,7 inç",
            metric: "400mm x 800mm x 500mm",
          },
          {
            label: "Yüksek Çözünürlük",
            us: "3,5 inç x 3,5 inç x 2,7 inç",
            metric: "88mm x 88mm x 70mm",
          },
          {
            label: "Alüminyum (Yüksek Çöz.)",
            us: "3,8 inç x 3,8 inç x 3,7 inç",
            metric: "98mm x 98mm x 94mm",
          },
        ],
      },
      note: "*Şu anda, Inconel 718 ve Alüminyum, büyük format X Line makinemizde mevcut olan tek malzemelerdir.",
    },
    layerThickness: {
      title: "Katman Kalınlığı",
      description: "",
      table: {
        headers: ["", "ABD", "Metrik"],
        rows: [
          {
            label: "Normal Çözünürlük",
            us: "0,0012 inç",
            metric: "30 mikron",
          },
          {
            label: "Yüksek Çözünürlük",
            us: "0,00079 inç",
            metric: "20 mikron",
          },
        ],
      },
      note: "*Şu anda, Inconel 718 ve Alüminyum, büyük format X Line makinemizde mevcut olan tek malzemelerdir.",
    },
    minFeatureSize: {
      title: "Minimum Özellik Boyutu",
      description: "",
      table: {
        headers: ["", "ABD", "Metrik"],
        rows: [
          {
            label: "Normal Çözünürlük (Inconel)",
            us: "0,00236 inç",
            metric: "60 mikron",
          },
          {
            label: "Normal Çözünürlük (Alüminyum)",
            us: "0,00157 inç",
            metric: "40 mikron",
          },
          {
            label: "Yüksek Çözünürlük",
            us: "0,00079 inç",
            metric: "20 mikron",
          },
        ],
      },
      note: "*Şu anda, Inconel 718 ve Alüminyum, büyük format X Line makinemizde mevcut olan tek malzemelerdir.",
    },
    tolerances: {
      title: "Metal 3D Baskı Toleransları",
      description:
        "İyi tasarlanmış parçalar için, ilk inç için X/Y boyutunda ±0,003 inç (0,075mm) artı nominal uzunluğun %0,1'i (0,001mm/mm) ve ilk inç için Z boyutunda ±0,006 inç artı nominal uzunluğun %0,1'i toleranslar tipik olarak elde edilebilir. Toleransların parça geometrisine bağlı olarak değişebileceğini unutmayın.",
      table: {
        headers: ["", "ABD", "Metrik"],
        rows: [
          {
            label: "X/Y Boyutu",
            us: "İlk inç için ±0,003 inç + %0,1",
            metric: "İlk mm için ±0,075mm + 0,001mm/mm",
          },
          {
            label: "Z Boyutu",
            us: "İlk inç için ±0,006 inç + %0,1",
            metric: "İlk mm için ±0,153mm + 0,001mm/mm",
          },
          { label: "X Line*", us: "0,006 inç", metric: "0,153mm" },
        ],
      },
      note: "*Şu anda, Inconel 718 ve Alüminyum, büyük format X Line makinemizde mevcut olan tek malzemelerdir.",
    },
    surfaceFinishes: {
      title: "Yüzey İşlemleri",
      description: "",
      table: {
        headers: ["İşlem Seçeneği", "Açıklama"],
        rows: [
          {
            label: "Standart",
            desc: "Destek yapıları çıkarılır ve katman çizgileri görünür.",
          },
          {
            label: "Fırçalanmış",
            desc: "Belirtilen yüzeyler istenen tane seviyesine kadar yönlü olarak zımparalanır.",
          },
          {
            label: "Saten",
            desc: "Belirtilen yüzeyler istenen tane seviyesine kadar zımparalanır, kum püskürtülür ve ardından boncuk püskürtülür.",
          },
          {
            label: "Parlatılmış",
            desc: "Belirtilen yüzeyler istenen tane seviyesine kadar zımparalanır. Yüzeyler bir miktar yansıtıcı ve parlak olacaktır, ancak bazı zımpara izleri veya işaretler hala görülebilir.",
          },
        ],
      },
      note: null,
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  //   second tabels data
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "Paslanmaz Çelik (17-4 PH)",
      resolution: "20 µm",
      condition: "Çözelti & Yaşlandırılmış (H900)",
      ultimateTensile: "199",
      yieldStress: "178",
      elongation: "10",
      hardness: "42 HRC",
    },
    {
      material: "Paslanmaz Çelik (17-4 PH)",
      resolution: "30 µm",
      condition: "Çözelti & Yaşlandırılmış (H900)",
      ultimateTensile: "198",
      yieldStress: "179",
      elongation: "13",
      hardness: "42 HRC",
    },
    {
      material: "Paslanmaz Çelik (316L)",
      resolution: "20 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "82",
      yieldStress: "56",
      elongation: "78",
      hardness: "90 HRB",
    },
    {
      material: "Paslanmaz Çelik (316L)",
      resolution: "30 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "85",
      yieldStress: "55",
      elongation: "75",
      hardness: "88 HRB",
    },
    {
      material: "Alüminyum (AlSi10Mg)",
      resolution: "20 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "39",
      yieldStress: "26",
      elongation: "15",
      hardness: "42 HRB",
    },
    {
      material: "Alüminyum (AlSi10Mg)",
      resolution: "30 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "50",
      yieldStress: "33",
      elongation: "8",
      hardness: "59 HRB",
    },
    {
      material: "Kobalt Krom (Co28Cr6Mo)",
      resolution: "20 µm",
      condition: "İmal Edildiği Gibi",
      ultimateTensile: "182",
      yieldStress: "112",
      elongation: "17",
      hardness: "39 HRC",
    },
    {
      material: "Kobalt Krom (Co28Cr6Mo)",
      resolution: "30 µm",
      condition: "İmal Edildiği Gibi",
      ultimateTensile: "176",
      yieldStress: "119",
      elongation: "14",
      hardness: "38 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "20 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "143",
      yieldStress: "98",
      elongation: "36",
      hardness: "33 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "30 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "144",
      yieldStress: "91",
      elongation: "39",
      hardness: "30 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V)",
      resolution: "60 µm",
      condition: "AMS 5663'e göre Çözelti & Yaşlandırılmış",
      ultimateTensile: "208",
      yieldStress: "175",
      elongation: "18",
      hardness: "46 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V)",
      resolution: "60 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "139",
      yieldStress: "83",
      elongation: "40",
      hardness: "27 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V) - Yaşlandırılmış",
      resolution: "60 µm",
      condition: "AMS 5663'e göre Çözelti & Yaşlandırılmış",
      ultimateTensile: "201",
      yieldStress: "174",
      elongation: "19",
      hardness: "45 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V) - 20µm",
      resolution: "20 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "153",
      yieldStress: "138",
      elongation: "15",
      hardness: "35 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V) - 30µm",
      resolution: "30 µm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "144",
      yieldStress: "124",
      elongation: "18",
      hardness: "33 HRC",
    },
  ];

  const metricData = [
    {
      material: "Paslanmaz Çelik (17-4 PH)",
      resolution: "20 μm",
      condition: "Çözelti & Yaşlandırılmış (H900)",
      ultimateTensile: "1.372",
      yieldStress: "1.227",
      elongation: "10",
      hardness: "42 HRC",
    },
    {
      material: "Paslanmaz Çelik (17-4 PH)",
      resolution: "30 μm",
      condition: "Çözelti & Yaşlandırılmış (H900)",
      ultimateTensile: "1.365",
      yieldStress: "1.234",
      elongation: "13",
      hardness: "42 HRC",
    },
    {
      material: "Paslanmaz Çelik (316L)",
      resolution: "20 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "565",
      yieldStress: "386",
      elongation: "78",
      hardness: "90 HRB",
    },
    {
      material: "Paslanmaz Çelik (316L)",
      resolution: "30 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "586",
      yieldStress: "379",
      elongation: "75",
      hardness: "88 HRB",
    },
    {
      material: "Alüminyum (AlSi10Mg)",
      resolution: "20 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "268",
      yieldStress: "180",
      elongation: "15",
      hardness: "46 HRB",
    },
    {
      material: "Alüminyum (AlSi10Mg)",
      resolution: "30 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "345",
      yieldStress: "228",
      elongation: "8",
      hardness: "59 HRB",
    },
    {
      material: "Kobalt Krom (Co28Cr6Mo)",
      resolution: "20 μm",
      condition: "İmal Edildiği Gibi",
      ultimateTensile: "1.255",
      yieldStress: "772",
      elongation: "17",
      hardness: "39 HRC",
    },
    {
      material: "Kobalt Krom (Co28Cr6Mo)",
      resolution: "30 μm",
      condition: "İmal Edildiği Gibi",
      ultimateTensile: "1.213",
      yieldStress: "820",
      elongation: "14",
      hardness: "38 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "20 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "986",
      yieldStress: "676",
      elongation: "36",
      hardness: "33 HRC",
    },
    {
      material: "Inconel 718",
      resolution: "30 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "993",
      yieldStress: "627",
      elongation: "39",
      hardness: "30 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V)",
      resolution: "60 μm",
      condition: "AMS 5663'e göre Çözelti & Yaşlandırılmış",
      ultimateTensile: "1.434",
      yieldStress: "1.207",
      elongation: "18",
      hardness: "46 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V)",
      resolution: "60 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "958",
      yieldStress: "572",
      elongation: "40",
      hardness: "27 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V) - Yaşlandırılmış",
      resolution: "60 μm",
      condition: "AMS 5663'e göre Çözelti & Yaşlandırılmış",
      ultimateTensile: "1.386",
      yieldStress: "1.200",
      elongation: "19",
      hardness: "45 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V) - 20μm",
      resolution: "20 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "1.055",
      yieldStress: "951",
      elongation: "15",
      hardness: "35 HRC",
    },
    {
      material: "Titanyum (Ti6Al4V) - 30μm",
      resolution: "30 μm",
      condition: "Gerilim Giderilmiş",
      ultimateTensile: "993",
      yieldStress: "855",
      elongation: "18",
      hardness: "33 HRC",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Metal 3D Baskı Hizmeti"
        desc="Kaliteli metal 3D baskılı prototipler ve üretim parçaları alın. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/3d-printing/metal-3d-printing/hero.webp"
        firstButton={{ title: "Parça Yükle", route: "/" }}
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
                    "Yetenekler",
                    "Malzeme Özelliklerini Karşılaştır",
                    "Malzeme Seçenekleri",
                    "İşlem Sonrası",
                    "Neden Metal 3D Baskı?",
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
              {/* What is Metal 3D Printing? Section */}
              <div id="metal-3d-baski-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  3D Baskı Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Doğrudan metal lazer sinterleme (DMLS), tam fonksiyonel metal
                  prototipler ve üretim parçalarını 7 gün veya daha kısa sürede
                  üreten endüstriyel bir metal 3D baskı sürecidir. Bir dizi
                  metal, son kullanım uygulamaları için kullanılabilecek nihai
                  parçalar üretir.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Metal 3D baskı teknolojisi genellikle şunlar için kullanılır:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "Üretim sınıfı malzemelerde prototipleme",
                    "Karmaşık geometriler",
                    "Fonksiyonel, son kullanım parçaları",
                    "Bir montajdaki metal bileşenleri azaltma",
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
        title="Metal 3D Baskı Kılavuzu"
        desc="Malzeme seçimi, tasarım, işlem sonrası ve kalite denetimlerini kapsayan bu kılavuzla metal 3D baskıya hızlı bir başlangıç yapın."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Metal 3D Baskı Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Metal 3D baskı için temel kılavuzlarımız, parça üretilebilirliğini
              iyileştirmeye, kozmetik görünümü geliştirmeye ve genel üretim
              süresini azaltmaya yardımcı olacak önemli tasarım hususlarını
              içerir.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Navigation List */}
            <div className="lg:w-1/3">
              <div className="bg-[#F0F8FF] rounded-xl overflow-hidden sticky top-32">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-4 ${
                      activeTab === tab.id
                        ? "bg-white border-l-[#96E92A] text-[#0B1221] font-semibold shadow-sm"
                        : "border-l-transparent text-gray-600 hover:bg-white/50 hover:text-[#0B1221]"
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  {currentContent.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

                {/* Description */}
                {currentContent.description && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentContent.description}
                  </p>
                )}

                {/* Table */}
                {currentContent.table && (
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0B1221] text-white">
                          {currentContent.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentContent.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className={`border-b border-gray-200 ${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            <td className="p-3 text-gray-700 font-medium text-sm">
                              {row.label}
                            </td>
                            {"us" in row && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.us}
                              </td>
                            )}
                            {"metric" in row && row.metric && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.metric}
                              </td>
                            )}
                            {"desc" in row && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.desc}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Note */}
                {currentContent.note && (
                  <div className="mt-4 p-3 bg-[#F0F8FF] rounded-lg">
                    <p className="text-sm text-gray-500 italic">
                      {currentContent.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-4">
                Daha İyi Baskı Alın
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Eklemeli üretimi enine boyuna bilen mühendislerin desteğiyle
                yüksek kaliteli 3D baskılı parçaları hızlıca alın. Altı 3D baskı
                teknolojisi ve 60'ın üzerinde malzeme ile yüksek performanslı,
                güvenilir parçalar üretin.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🖨️</span>
                <p className="text-gray-500 text-sm mt-2">3D Baskı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Malzeme Özelliklerini Karşılaştır
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUnit("us")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                unit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              ABD
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                unit === "metric"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metrik
            </button>
          </div>

          {/* Material Properties Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Malzemeler
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]">
                    Çözünürlük
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Durum
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[120px]">
                    Maksimum Çekme Mukavemeti{" "}
                    {unit === "us" ? "(ksi)" : "(MPa)"}
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]">
                    Akma Gerilmesi {unit === "us" ? "(ksi)" : "(MPa)"}
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[80px]">
                    Uzama (%)
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[100px]">
                    Sertlik
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 text-gray-700 font-medium">
                      {row.material}
                    </td>
                    <td className="p-3 text-gray-600">{row.resolution}</td>
                    <td className="p-3 text-gray-600">{row.condition}</td>
                    <td className="p-3 text-gray-600">{row.ultimateTensile}</td>
                    <td className="p-3 text-gray-600">{row.yieldStress}</td>
                    <td className="p-3 text-gray-600">{row.elongation}</td>
                    <td className="p-3 text-gray-600">{row.hardness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resolution Note */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">
                20 µm = yüksek çözünürlük (HR)
              </span>
              <br />
              30, 40 ve 60 µm = normal çözünürlük (NR)
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 italic">
              Bu rakamlar yaklaşıktır ve makine ve süreç parametreleriyle
              sınırlı olmamak üzere bir dizi faktöre bağlıdır. Bu nedenle
              sağlanan bilgiler bağlayıcı değildir ve sertifikalı olarak kabul
              edilmez. Performans kritik olduğunda, eklemeli malzemelerin veya
              nihai parçaların bağımsız laboratuvar testlerini de göz önünde
              bulundurun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
