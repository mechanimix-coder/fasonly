"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("bendRadius");

  const tabs = [
    { id: "bendRadius", label: "Bükülme Yarıçapı" },
    { id: "hems", label: "Kıvırmalar" },
    { id: "offsets", label: "Ofsetler" },
    { id: "holesSlots", label: "Delikler ve Yuvalar" },
    { id: "notchesTabs", label: "Çentikler ve Tırnaklar" },
    { id: "countersinks", label: "Havşa Açıklıkları" },
  ];

  const content = {
    bendRadius: {
      title: "Bükülme Yarıçapı",
      description:
        "Tüm bükülme açılarında +/-1 derece tolerans uyguluyoruz. Yaygın bükülme yarıçaplarından oluşan geniş bir yelpaze sunuyoruz, ancak standart seçeneklerimiz .030 (.762mm), .060 (1.524mm), .090 (2.286mm), .120 (3.048mm)'dir. Bu dört bükülme yarıçapı takım seçeneği 3 günlük teslim süresiyle mevcuttur. Sac metal parçalarda minimum flanş uzunluğu, malzeme kalınlığının en az 4 katı olmalıdır.",
      additionalInfo:
        "Tüm bükülmelerde aynı yarıçapların kullanılması önerilir ve flanş uzunluğu malzeme kalınlığının en az 4 katı olmalıdır.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T1.webp",
    },
    hems: {
      title: "Kıvırmalar",
      description:
        "Hem açık hem de kapalı kıvırmalar yapıyoruz. Bir kıvırmanın toleransı, kıvırmanın yarıçapına, malzeme kalınlığına ve kıvırma yakınındaki özelliklere bağlıdır.",
      additionalInfo:
        "Minimum iç çapın malzeme kalınlığına eşit olmasını ve kıvırma dönüş uzunluğunun 6x malzeme kalınlığı olmasını öneriyoruz.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T2.webp",
    },
    offsets: {
      title: "Ofsetler",
      description:
        "Ofsetler, sac metal parçalarda Z şekilli profiller oluşturmak için kullanılır. Sacın üstünden formun üstüne kadar +/-0,012 inç (0,304mm) ofset yükseklik toleransı uyguluyoruz ve 0,030 inç (0,762mm) ofset öneriyoruz.",
      additionalInfo:
        "Ek standart seçenekler şunları içerir: 0,060 inç (1,524mm), 0,093 inç (2,362mm), 0,125 inç (3,175mm), 0,187 inç (4,749mm), 0,213 inç (5,410mm), 0,250 inç (6,35mm), 0,281 inç (7,137mm) ve 0,312 inç (7,924mm) mevcuttur.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T3.webp",
    },
    holesSlots: {
      title: "Delikler ve Yuvalar",
      description:
        "Delikler ve yuvalar çap olarak minimum malzeme kalınlığında olmalıdır. Malzeme 0,036 inç (0,914mm) veya daha ince ise, delik malzeme kenarından 0,062 inç (1,574mm) uzakta olmalıdır; malzeme 0,036 inçten (0,914mm) kalınsa, delik malzeme kenarından en az 0,125 inç (3,175mm) uzakta olmalıdır.",
      additionalInfo:
        "Donanım ek parçaları gerekiyorsa, aralık üretici spesifikasyonlarına göre olmalıdır.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T4.webp",
    },
    notchesTabs: {
      title: "Çentikler ve Tırnaklar",
      description:
        "Çentikler, malzeme kalınlığı veya 0,04 inçten (1,016mm) hangisi daha büyükse en az o kadar olmalı ve genişliğinin 5 katından daha uzun olamaz.",
      additionalInfo:
        "Tırnaklar, malzeme kalınlığının 2 katı veya 0,126 inçten (3,200mm) hangisi daha büyükse en az o kadar olmalı ve genişliğinin 5 katından daha uzun olamaz.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T5.webp",
    },
    countersinks: {
      title: "Havşa Açıklıkları",
      description:
        "Hem işlenmiş hem de şekillendirilmiş havşa açıklıkları sunuyoruz - bir vidanın, çivinin veya cıvatanın yüzeyle aynı hizada yerleştirilmesine olanak tanıyan, üretilmiş bir nesneye açılmış konik delikler.",
      additionalInfo:
        "Havşa açıklıklarının ana çaplarının aşağıdaki standart açılardan birini kullanarak 0,090 inç (2,286mm) ile 0,500 inç (12,7mm) arasında ölçülmesini öneriyoruz: 82°, 90°, 100° ve 120°. Şekillendirilmiş havşa ana ve küçük çapları için tolerans +0,020/-0,010 (+0,508mm/-0,254mm)'dir.",
      image:
        "/Assets/Images/services/sheet-metal-fabrication/design-guidelines/T6.webp",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];
  return (
    <div className="w-full mt-20 pt-10 pb-20 bg-white">
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
                    "Dosya formatı ve yapılandırma",
                    "Malzemeler",
                    "Montaj yapım kılavuzları",
                    "Donanım yerleştirme",
                    "Kaynak ve perçinleme",
                    "Montajlar için yüzey işlem seçenekleri",
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
              <div id="sac-metal-tasarim-kurallari" className="scroll-mt-32">
                <h1 className="text-black text-5xl mb-10">
                  Sac Metal İmalatı için Tasarım Kılavuzları
                </h1>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sac metal imalatı için bu kılavuzlar, parça üretilebilirliğini
                  iyileştirmeye, kozmetik görünümü geliştirmeye ve genel üretim
                  süresini azaltmaya yardımcı olacak önemli tasarım hususlarını
                  içerir.
                </p>
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
              Sac Metal Parçalar için Bileşen Boyutları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Minimum Dimensions Table */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
                Minimum Boyutlar
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Parça Tipi
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Boyut
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Düz Parça
                      </td>
                      <td className="p-4 text-gray-600">
                        0,250 inç x 0,250 inç
                        <br />
                        <span className="text-gray-400 text-sm">
                          6,35mm x 6,35mm
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Şekillendirilmiş Parça
                      </td>
                      <td className="p-4 text-gray-600">
                        0,500 inç x 0,500 inç
                        <br />
                        <span className="text-gray-400 text-sm">
                          12,7mm x 12,7mm
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Maximum Dimensions Table */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
                Maksimum Boyutlar
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Parça Tipi
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Boyut
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Düz Parça
                      </td>
                      <td className="p-4 text-gray-600">
                        39 inç x 47 inç
                        <br />
                        <span className="text-gray-400 text-sm">
                          990,6mm x 1.193,8mm
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-semibold text-[#0B1221]">
                        Şekillendirilmiş Parça
                      </td>
                      <td className="p-4 text-gray-600">
                        47 inç
                        <br />
                        <span className="text-gray-400 text-sm">1.193,8mm</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              Sac Metal İmalatı için Toleranslar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tolerances on One Surface */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Tek Yüzeyde Toleranslar
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Özellik
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Malzeme &lt; ,13 inç
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Malzeme &gt; ,13 inç
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Kenardan Kenara
                    </td>
                    <td className="p-4 text-gray-600">0,005 inç (0,13mm)</td>
                    <td className="p-4 text-gray-600">0,015 inç (0,38mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Kenardan Deliğe
                    </td>
                    <td className="p-4 text-gray-600">0,005 inç (0,13mm)</td>
                    <td className="p-4 text-gray-600">0,015 inç (0,38mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Delikten Deliğe
                    </td>
                    <td className="p-4 text-gray-600">0,005 inç (0,13mm)</td>
                    <td className="p-4 text-gray-600">0,015 inç (0,38mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Bükümden Deliğe
                    </td>
                    <td className="p-4 text-gray-600">0,015 inç (0,38mm)</td>
                    <td className="p-4 text-gray-600">0,025 inç (0,635mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Bükümden Kenara
                    </td>
                    <td className="p-4 text-gray-600">0,010 inç (0,25mm)</td>
                    <td className="p-4 text-gray-600">0,020 inç (0,508mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      Bükümden Büküme
                    </td>
                    <td className="p-4 text-gray-600">0,015 inç (0,38mm)</td>
                    <td className="p-4 text-gray-600">0,025 inç (0,635mm)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tolerances on Multiple Surfaces (across bends) */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Çoklu Yüzeylerde Toleranslar (bükümler boyunca)
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Özellik
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Malzeme &lt; ,13 inç
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Malzeme &gt; ,13 inç
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      Kenar veya Delikten Şekillendirilmiş Özelliğe
                    </td>
                    <td className="p-4 text-gray-600">0,010 inç (0,25mm)</td>
                    <td className="p-4 text-gray-600">0,020 inç (0,508mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700 font-medium">
                      2 Büküm Arası Ölçümler
                    </td>
                    <td className="p-4 text-gray-600">0,015 inç (0,38mm)</td>
                    <td className="p-4 text-gray-600">0,025 inç (0,635mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-700 font-medium">
                      3+ Büküm Arası Ölçümler
                    </td>
                    <td className="p-4 text-gray-600">0,030 inç (0,76mm)</td>
                    <td className="p-4 text-gray-600">0,040 inç (1,016mm)</td>
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
              Sac Metal Malzeme Kalınlık Aralığı
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Sac metal parçalar tek bir metal sacdan üretildiği için parça
              uniform duvar kalınlığını korumalıdır. Sac metal kalınlığı 0,024
              inç (0,609mm) ile 0,250 inç (6,35mm) arasında değişir. Altı
              malzeme tipimizin her biri için hangi kalınlıkların mevcut
              olduğunu görmek için aşağıdaki tabloları kullanın:{" "}
              <span className="font-semibold">Alüminyum</span>,{" "}
              <span className="font-semibold">Pirinç</span>,{" "}
              <span className="font-semibold">Bakır</span>,{" "}
              <span className="font-semibold">Paslanmaz Çelik</span>,{" "}
              <span className="font-semibold">Çelik: CR İşlem Görmemiş</span>,{" "}
              <span className="font-semibold">
                Çelik: CR Galvanizli Tavlanmış veya CR Galvanizli
              </span>
              .
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]">
                    Çelik
                  </th>
                  <th
                    className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]"
                    colSpan={3}>
                    Paslanmaz
                  </th>
                  <th
                    className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]"
                    colSpan={2}>
                    Alüminyum
                  </th>
                  <th
                    className="text-left p-3 font-semibold border-r border-gray-700 min-w-[100px]"
                    colSpan={2}>
                    Bakır
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[100px]">
                    Pirinç
                  </th>
                </tr>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    CRS/HRPO*
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    Galvanizli Tavlanmış
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    Galvanizli
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    304-2B
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    304-2#4
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    316-2B
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    5052-H32
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    6061-T6
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    C101
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700">
                    C110
                  </th>
                  <th className="text-left p-3 font-semibold">C260</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    row: "0,024",
                    values: [
                      "0,024",
                      "",
                      "",
                      "0,024",
                      "0,024",
                      "0,024",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,028",
                    values: [
                      "",
                      "0,028",
                      "0,028",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,029",
                    values: [
                      "",
                      "",
                      "",
                      "0,029",
                      "0,029",
                      "0,029",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,030",
                    values: ["0,030", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,032",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,032",
                      "0,032",
                      "0,032",
                      "0,032",
                      "0,032",
                    ],
                  },
                  {
                    row: "0,034",
                    values: [
                      "",
                      "0,034",
                      "0,034",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,036",
                    values: [
                      "0,036",
                      "",
                      "",
                      "0,036",
                      "0,036",
                      "0,036",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,040",
                    values: [
                      "0,040",
                      "0,040",
                      "0,040",
                      "",
                      "",
                      "",
                      "0,040",
                      "0,040",
                      "0,040",
                      "0,040",
                      "0,040",
                    ],
                  },
                  {
                    row: "0,042",
                    values: ["0,042", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,048",
                    values: [
                      "0,048",
                      "",
                      "",
                      "0,048",
                      "0,048",
                      "0,048",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,050",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,050",
                      "0,050",
                      "0,050",
                      "0,050",
                      "0,050",
                    ],
                  },
                  {
                    row: "0,052",
                    values: [
                      "",
                      "0,052",
                      "0,052",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,060",
                    values: [
                      "0,060",
                      "",
                      "",
                      "0,060",
                      "0,060",
                      "0,060",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,063",
                    values: [
                      "0,063",
                      "0,063",
                      "0,063",
                      "",
                      "",
                      "",
                      "0,063",
                      "0,063",
                      "",
                      "",
                      "0,063",
                    ],
                  },
                  {
                    row: "0,064",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,064",
                      "0,064",
                      "",
                    ],
                  },
                  {
                    row: "0,075",
                    values: [
                      "0,075",
                      "",
                      "",
                      "0,075",
                      "0,075",
                      "0,075",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,079",
                    values: [
                      "",
                      "0,079",
                      "0,079",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,080",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,080",
                      "0,080",
                      "0,080",
                      "0,080",
                      "0,080",
                    ],
                  },
                  {
                    row: "0,090",
                    values: [
                      "0,090",
                      "0,093",
                      "0,093",
                      "0,090",
                      "0,090",
                      "0,090",
                      "0,090",
                      "0,090",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,093",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,093",
                      "0,093",
                      "0,093",
                    ],
                  },
                  {
                    row: "0,100",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,100",
                      "0,100",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,105",
                    values: [
                      "0,105",
                      "",
                      "",
                      "0,105",
                      "0,105",
                      "0,105",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,108",
                    values: [
                      "",
                      "0,108",
                      "0,108",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,120",
                    values: [
                      "0,120",
                      "",
                      "",
                      "0,120",
                      "0,120",
                      "0,120",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,123",
                    values: [
                      "",
                      "0,123",
                      "0,123",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,125",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,125",
                      "0,125",
                      "0,125",
                      "0,125",
                      "0,125",
                    ],
                  },
                  {
                    row: "0,135",
                    values: [
                      "0,135*",
                      "",
                      "",
                      "0,135",
                      "0,134",
                      "0,135",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,138",
                    values: [
                      "",
                      "0,138",
                      "0,138",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,160",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,160",
                      "0,160",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,164",
                    values: ["0,164*", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,165",
                    values: ["", "", "0,165", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,179",
                    values: ["0,179*", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,187",
                    values: ["", "", "0,187", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,190",
                    values: [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "0,190",
                      "0,190",
                      "",
                      "",
                      "",
                    ],
                  },
                  {
                    row: "0,239",
                    values: ["0,239*", "", "", "", "", "", "", "", "", "", ""],
                  },
                  {
                    row: "0,250",
                    values: [
                      "",
                      "",
                      "0,250",
                      "",
                      "",
                      "",
                      "0,250",
                      "0,250",
                      "",
                      "",
                      "",
                    ],
                  },
                ].map((rowData, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 text-gray-700 font-medium">
                      {rowData.row}
                    </td>
                    {rowData.values.map((val, colIdx) => (
                      <td key={colIdx} className="p-3 text-gray-600">
                        {val || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-4 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              *Bu kalınlıklar yalnızca Sıcak Haddelenmiş, Dekapaj ve Yağlanmış
              (HRPO) olarak mevcuttur
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
                Sac Metal Bileşenler için Yüzey İşlem Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Kaynaklı montajlar, standart hadde, kenar kırma ve orbital
                zımparalı yüzey işlemlerinin yanı sıra bir dizi ek sac metal
                bitirme seçeneği sunuyoruz:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Dikiş, teyel ve sıyırma kaynak
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Donanım yerleştirme ve perçinleme: Standart PEM sac metal
                    donanımı
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Toz boya: Dokulu ve dokusuz yüzeylerde, RAL renkleri dahil
                    çeşitli toz boya renkleri mevcuttur
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    İpek baskı: Çoğu Pantone numarasıyla eşleşecek şekilde
                    karıştırılmış renkler
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Montajlar: POP-perçinli ve kaynaklı
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    Kaplama: Anodizasyon, kromat, çinko ve pasivasyon
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/rapid_17-670x360-a597047.webp"
                alt="Sac Metal Bileşenler için Yüzey İşlem Seçenekleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sac Metal Yüzey İşlem Kılavuzu"
        desc="Çeşitli sac metal malzemeler için mevcut Standart ve Kozmetik yüzey işlem seçeneklerimizin hızlı bir özeti için sac metal kılavuzumuza göz atın."
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sac Metal İmalatı için Büküm Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Bu kılavuzları, ürün tasarımcılarının{" "}
              <span className="font-semibold">sac metal imalatı</span> süreçleri
              hakkındaki bilgilerini geliştirmelerine ve parça kalitesi ile
              tutarlılığını etkileyen temel faktörleri tanımalarına yardımcı
              olmak için tasarladık. Bir sonraki projenizde bu rehberlikten
              yararlanmak, maliyetleri yönetmenize, istediğiniz estetiği elde
              etmenize ve tutarlı doğru parçalar sağlamanıza yardımcı olabilir.
            </p>
          </div>

          {/* Row 1 - Understanding Brake Lines (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Pres Freni İzlerini Anlamak
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pres freni izleri, sac metal üzerinde bükme işlemi sırasında
                uygulanan kuvvetin bir sonucu olarak oluşur ve bu işlem bir pres
                freninde gerçekleşir. Bunlar, üretim sürecinin doğal bir
                sonucudur ve ek işlem veya işleme tabi tutulmadan nihai
                ürününüzde bulunacaktır.
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 italic">Pres freni izi mevcut</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-01.webp"
                alt="Pres freni izi mevcut"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Brake line removed (Image Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-02.webp"
                alt="Pres freni izi giderilmiş"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Pres Freni İzi Giderilmiş
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Doğası gereği kozmetik olan veya belirli estetik nitelikler
                gerektiren ürünler için, pres freni izlerini aşağıdaki gibi
                ikincil işlemlerle kaldırmak mümkündür:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Pres freni izini çevreleyen malzemeyle birleştirmek için
                    doğrudan salınımlı (DA) bir alet kullanmak
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Bükme sırasında kalıp takımının üzerine bir kauçuk kayma
                    tabakası yerleştirmek
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Şekillendirmeden sonra - parçanın tüm yüzeyini kaplayan -
                    toz boya gibi bir yüzey işlemi uygulamak. Not: Plaka
                    kalınlığı genellikle pres freni izlerini kapatmak için
                    yetersizdir. Bu nedenle, kaplama uygulandıktan sonra pres
                    freni izleri görünür olacaktır.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Parça uygulamanız için (görünür pres freni izleri olmadan)
                uniform bir yüzey işlemi gerekiyorsa, hangi yöntemin
                ihtiyaçlarınıza en uygun olacağını görüşmek için uygulama
                mühendislerimizle iletişime geçin.
              </p>
            </div>
          </div>

          {/* Row 3 - Feature Proximity to Bends (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Özelliklerin Bükümlere Yakınlığı
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Temel bir kural vardır: sac metal bir pres freninde
                büküldüğünde, malzeme bir büküm hattı boyunca ve yakınında
                gerilir. Bir büküme yakın (tipik olarak bükümün 4x malzeme
                kalınlığı içinde) olan herhangi bir özellik deformasyon riski
                altındadır.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Neyse ki, bunu hesaba katmanın ve amaçlanan tasarım hedefine
                ulaşmanın birkaç yolu vardır. Bu durum için yaygın tasarım
                çözümleri şunlardır:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 italic">Deforme olmuş alan</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-03.jpg"
                alt="Özelliklerin Bükümlere Yakınlığı"
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
              Olası Çözümler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Bu Çözümü Kullanma Gerekçesi
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[250px]">
                      Çözüm
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Gerekçe / Açıklama
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221] align-top">
                      Özelliğin bükme sırasında deforme olmasına izin verme
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Yalnızca düşük özellik kritikliği nedeniyle
                            deformasyon kabul edilebilirse veya gelecekteki
                            tasarım değişikliklerinin sorunu çözeceği erken
                            prototipleme aşamalarında önerilir
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Fasonly üretilebilirlik için tasarım analizi,
                            özellik deformasyonunu bir çözüm olarak önerir.
                            Üretim başlamadan önce, sac metal imalat
                            uzmanlarımız deformasyonun mümkün olduğu tüm
                            durumları değerlendirecek ve herhangi bir endişe
                            ortaya çıkarsa sizinle iletişime geçecektir
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-[#0B1221] align-top">
                      Risk altındaki özelliği yeniden konumlandırma/taşıma
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Özelliğin boyutsal doğruluğunu koruması gereken
                            durumlar için en yaygın çözüm
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Sac metal üretilebilirlik için tasarım araç setimiz,
                            özellik bozulma sorunlarından kaçınmak için malzeme
                            tipine ve kalınlığına dayalı minimum özellik
                            mesafelerinin referans kılavuzunu içerir
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221] align-top">
                      Bükülme yarıçapını değiştirme
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Özellikler bir büküme yakın ancak içinden geçmiyorsa
                            daha küçük bir iç bükülme yarıçapı tercih edin
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Bükümde gerilen malzeme miktarını azaltmak için daha
                            küçük bir bükülme yarıçapı seçin
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                          <span className="text-sm">
                            Mevcut iç bükülme yarıçaplarının bu listesine bakın
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                Çoğu durumda, bu çözümler tasarımınızla ilgili maliyeti ve
                teslim süresini etkilemez, ancak parçanızın ömrü boyunca ek
                işlem maliyetlerinden kaçınmanıza yardımcı olabilirler.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tasarımınız için hangi çözümün en iyi olduğundan emin değil
                misiniz? Sac metal uzmanlarımız, ücretsiz 30 dakikalık tasarım
                incelemesi (aynı gün randevular mevcuttur) sağlamak için hazır
                bekliyor. Tasarım incelemenizi{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  buradan
                </a>{" "}
                planlayın.
              </p>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 italic">
                  Bükülme yarıçapını değiştirmek deformasyonu çözdü
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-03.jpg"
                alt="Bükülme yarıçapını değiştirmek deformasyonu çözdü"
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
              Özellikleri Bükümler Boyunca Uzatma
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Bükümler boyunca deformasyonu önlemek için göz önünde
              bulundurabileceğiniz ek bir seçenek daha vardır - bir özelliği
              büküm boyunca uzatmak.
            </p>
          </div>

          {/* First Description */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-600 leading-relaxed">
              A ve B görüntülerinde (aşağıda), braket büküm boyunca biten iki L
              şeklinde kesik içerir. Her bir L'nin üst kısmının bükümle
              buluştuğu noktada malzeme deforme olur.
            </p>
          </div>

          {/* Images A and B - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Image A */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-05.jpg"
                  alt="Büküm hattında malzeme şişmesi/deformasyonu - Görüntü A"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Büküm hattında malzeme şişmesi/deformasyonu
              </p>
              <p className="text-center text-gray-500 text-sm">Görüntü A</p>
            </div>

            {/* Image B */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-07.jpg"
                  alt="Deformasyona neden olan fazla malzeme (ön görünüm) - Görüntü B"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Deformasyona neden olan fazla malzeme (ön görünüm)
              </p>
              <p className="text-center text-gray-500 text-sm">Görüntü B</p>
            </div>
          </div>

          {/* Second Description */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-600 leading-relaxed">
              Sac metal DFM araç setimizin bükümler yakınına özellik yerleştirme
              bölümündeki özellik mesafesi kılavuzlarını takip ederek, L şeklini
              büküm hattı boyunca uzatarak deformasyonu ortadan kaldırmak
              mümkündür. Bu yaklaşım, bükümün tipik olarak bulunacağı yerde
              malzemeyi kaldırır ve aşağıdaki C ve D görüntülerinde
              gösterilmiştir.
            </p>
          </div>

          {/* Images C and D - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image C */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-05.jpg"
                  alt="Malzemeyi boşaltmak için kesik büküm hattı boyunca uzatıldı - Görüntü C"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Malzemeyi boşaltmak için kesik büküm hattı boyunca uzatıldı
              </p>
              <p className="text-center text-gray-500 text-sm">Görüntü C</p>
            </div>

            {/* Image D */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 mb-3">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-07.jpg"
                  alt="Büküm hattı boyunca malzeme kaldırıldı (ön görünüm) - Görüntü D"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic">
                Büküm hattı boyunca malzeme kaldırıldı (ön görünüm)
              </p>
              <p className="text-center text-gray-500 text-sm">Görüntü D</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Büküm Boyunca Özelliklere Sahip Tasarımların Üretimi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Elbette, özellik konumunun ürün gereksinimleriniz için çok önemli
              olduğu tasarım senaryoları olabilir. Bu durumlarda, bir büküm
              boyunca malzemeyi boşaltmak için bir özelliği değiştirmek veya bir
              özelliği bükümden uzağa taşımak mümkün olmayabilir.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Bu kategoriye giren tasarımlar genellikle boyutsal doğruluğu elde
              etmek için üretilebilir, ancak bu ek maliyet ve teslim süresi ile
              gelir. Bükümün fiziksel sınırlamaları etrafında nasıl tasarım
              yapılacağını hesaba katmak yerine, özellikler bükme işleminden
              sonra dahil edilebilir. Bükmeden önce özellikleri lazerle kesmeye
              alternatif olarak, bükmeden sonra deliklerin elle delinmesi ve
              kesikler ile ceplerin CNC frezelenmesi yapılabilir.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold">NOT:</span> Delme ve CNC işleme,
              bir ürüne maliyet ve teslim süresi ekleyen ek hizmetlerdir. Üretim
              hacimleri için hangi üretim teknolojisini kullanmayı
              planladığınıza bağlı olarak, bu maliyetler projenizin toplam
              maliyeti üzerinde kalıcı bir etkiye sahip olabilir.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Minimum Flanş Uzunlukları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                Bir pres freninde doğru bir büküm elde etmek için, bir tasarım
                makine ile üç (3) temas noktası oluşturmalıdır. Sağdaki görüntü
                bu temas noktalarını göstermektedir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bir tasarım yalnızca iki temas noktası oluşturursa, nihai
                parçanızda deforme olmuş bir flanş elde edebilirsiniz. Aşağıdaki
                görüntüde, "H" braketinin orta kısmı z-ekseninde iki flanşa
                sahiptir. Bu flanşlar pres freninde üç temas noktası
                oluşturmamış, bu da tutarsız ve deforme olmuş bükümlerle
                sonuçlanmıştır.
              </p>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-[#0B1221] mb-2">
                  Gerekli üç temas noktası:
                </h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                  <li>Üst Kalıp (Zımba)</li>
                  <li>Arka Mesnet</li>
                  <li>Alt Kalıp</li>
                </ol>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/image-1-5.webp"
                alt="Pres freni ile üç temas noktası"
                width={600}
                height={550}
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Two Images and Description Below */}
          <div>
            {/* Two Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-09.jpg"
                  alt="Her flanşa malzeme eklemek, iş parçasının üç temas noktası oluşturmasını sağlar"
                  width={400}
                  height={350}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-10.webp"
                  alt="Flanşları bükmek için yetersiz malzeme miktarı"
                  width={400}
                  height={350}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Image Captions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <p className="text-center text-gray-500 text-sm italic">
                Her flanşa malzeme eklemek, iş parçasının pres freni ile üç
                temas noktası oluşturmasını sağlar
              </p>
              <p className="text-center text-gray-500 text-sm italic">
                Flanşları bükmek için yetersiz malzeme miktarı
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 leading-relaxed">
                Üretilebilirlik için tasarım araç setimizde sağlanan rehberliği
                takip ederek bu sorundan kaynaklanan kaliteyle ilgili
                sorunlardan kaçınabilirsiniz.{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  Bu bağlantıyı kullanmak
                </a>{" "}
                sizi doğrudan tasarımınızdaki minimum flanş uzunluklarının
                üstesinden gelme çözümüne götürecektir. Tasarımınızın orijinal
                boyutlarını karşılamak için flanşlar gerektiriyorsa,
                şekillendirme sonrası işleme gibi alternatif üretim yöntemlerini
                görüşmek için uygulama mühendislerimizle{" "}
                <span className="font-semibold">877-***-****</span> numaralı
                telefondan iletişime geçmenizi öneririz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Bükümler Yakınındaki Donanım Ek Parçaları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sac metal tasarımınıza donanım ek parçaları dahil etmek,
              bileşenleri birbirine bağlamanın çok yönlü ve uygun maliyetli bir
              yoludur. Tasarım gereksinimlerinize bağlı olarak, kendinizi
              donanım delikleri ve ek parçalarını bükümlere yakın yerleştirirken
              bulabilirsiniz.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Donanım ek parçalarının büküm hatlarına yakın olduğu durumlarda,
              herhangi bir donanım deliği deformasyonunun (pres freninde malzeme
              gerilmesi nedeniyle) ek parçanın işlevselliğini etkileyebileceğini
              dikkate almak önemlidir.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Donanım ek parçalarınızı tasarımınız üzerinde nereye
              yerleştireceğiniz konusunda esnekliğiniz varsa, bu belgede daha
              önceki{" "}
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                özelliklerin bükümlere yakınlığı kılavuzlarımızı
              </a>{" "}
              gözden geçirmenizi öneririz. Bu tavsiyeye uymak, tutarlı parça
              kalitesi ve donanım işlevselliği sağlayacaktır.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Bükümler Yakınındaki Donanım Delikleri ve Ek Parçalarla İlgili
              Zorluk
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Donanım konumu gereksinimleriniz için en önemliyse, aşağıdaki
              montaj braketi bükme işleminin donanım kurulumunu ve
              işlevselliğini nasıl etkilediğini göstermektedir. Zorluğun
              üstesinden gelmek için bir öneri için okumaya devam edin.
            </p>
          </div>

          {/* Two Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-11.jpg"
                  alt="Donanım delikleri büküme çok yakınsa bozulabilir"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic mt-3">
                Donanım delikleri büküme çok yakınsa bozulabilir
              </p>
            </div>

            {/* Image 2 */}
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-13.jpg"
                  alt="Deliğin büküme yakınlığı nedeniyle yanlış oturan donanım"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic mt-3">
                Deliğin büküme yakınlığı nedeniyle yanlış oturan donanım
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Malzeme Boşaltma ile Zorluğu Çözme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Sac metal üretilebilirlik terimi{" "}
              <span className="italic">boşaltma</span> ile aşina olabilirsiniz,
              en çok <span className="italic">büküm boşaltma</span> ifadesinde
              kullanılır, ancak diğer tasarım senaryolarına da uygulanabilir.
              Sac metali boşaltma eylemi, kritik özellikleri bozmadan bükme
              sırasında malzeme gerilmesine izin vermek için stratejik olarak
              kesikler yerleştirmeyi içerir.
            </p>
          </div>

          {/* Two Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/2025-009-sm-design-guidelines_design-tip_images-12.jpg"
                  alt="Deliklerin etrafına küçük kesikler yerleştirme"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-500 text-sm italic mt-3">
                Deliklerin etrafına küçük kesikler yerleştirmek
                <br />
                doğru bükümlere izin verebilir
                <br />
                ve doğru oturan donanıma olanak sağlayabilir
              </p>
            </div>
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/design-guidelines/sm_parts_hw-relief-after-_02_hr-1.jpg"
                  alt="Malzeme boşaltma örneği"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Rest of the Text */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              Bükümlere yakın donanım delikleri için, donanım deliğinin etrafına
              kesikler eklemek, bükme sırasında gerekli malzeme boşalmasını
              sağlar ve deliğin bozulmadan kalmasını sağlar. Bu yaklaşım,
              tasarım amacını koruma ve parça maliyetlerini düşük tutma
              avantajına sahiptir.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ek parçalarınızın malzemeye doğru şekilde oturmasını sağlamak için
              deliğin etrafında ne kadar malzeme gerektiğini bilmek önemlidir.
              Çevrimiçi PennEngineering® (PEM) ürün kataloğu yararlı bir
              araçtır.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              PEM kataloğunda belirli bir ürünü araştırırken, "spesifikasyonlar"
              bölümü altında, "min. mesafe delik C/L'den kenara" ifadesine
              bakın. Bu sayı (milimetre cinsinden görüntülenir), deliğin merkez
              hattından tasarımın kenarına kadar gereken minimum mesafedir.
              Örneğin, CLS-M4-2 için{" "}
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                bu örnek ürün sayfasına
              </a>{" "}
              göz atın.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sac metal projenizin tasarım aşamasında malzeme boşaltmayı
              düşünmek, donanım kurulumunun ötesinde aşağıdakiler dahil faydalar
              sağlar:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Büküm hatları veya köşeler gibi gerilim noktaları boyunca
                  malzeme yırtılmalarını ve çatlaklarını önleme
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Boyutsal doğruluğu etkileyebilecek eğrilme veya özellik
                  deformasyonu gibi kalite sorunlarını en aza indirme
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Parçadan parçaya ve siparişten siparişe üretim tutarlılığını
                  sağlama
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Malzeme stresini azaltarak parça dayanıklılığını ve
                  performansını iyileştirme
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Yaygın Sac Metal Özellikleri için Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                {currentContent.description}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {currentContent.additionalInfo}
              </p>
            </div>

            {/* Image at the bottom */}
            <div className="relative bg-gray-100 h-64 md:h-80">
              <Image
                src={currentContent.image}
                alt={currentContent.title}
                width={600}
                height={550}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
