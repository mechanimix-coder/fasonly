"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "PA 12 Siyah",
      color: "Siyah",
      tensileStrength: "7,1 ksi",
      tensileModulus: "276 ksi",
      elongation: "%8,5",
    },
    {
      material: "PA 12 %40 Cam Dolgulu Siyah",
      color: "Siyah",
      tensileStrength: "4,35 ksi",
      tensileModulus: "508 ksi",
      elongation: "%8,5",
    },
  ];

  const metricData = [
    {
      material: "PA 12 Siyah",
      color: "Siyah",
      tensileStrength: "49 MPa",
      tensileModulus: "1.900 MPa",
      elongation: "%8,5",
    },
    {
      material: "PA 12 %40 Cam Dolgulu Siyah",
      color: "Siyah",
      tensileStrength: "30 MPa",
      tensileModulus: "3.500 MPa",
      elongation: "%8,5",
    },
  ];
  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Multi Jet Fusion (MJF) 3D Baskı Hizmeti"
        desc="MJF 3D baskı, hızlı prototipleme ve üretim için uygun kaliteli naylon parçalar üretir."
        image="/Assets/Images/services/3d-printing/multi-jet-fusion/hero.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
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
              {/* What is Multi Jet Fusion? Section */}
              <div id="multi-jet-fusion-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Multi Jet Fusion Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Multi Jet Fusion, fonksiyonel naylon prototipler ve son
                  kullanım üretim parçalarını 1 gün kadar kısa sürede üreten
                  endüstriyel bir 3D baskı sürecidir. Nihai parçalar, seçici
                  lazer sinterleme gibi süreçlerle karşılaştırıldığında kaliteli
                  yüzey kalitesi, ince özellik çözünürlüğü ve daha tutarlı
                  mekanik özellikler sergiler.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Multi Jet Fusion için yaygın uygulamalar şunlardır:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "tutarlı izotropik mekanik özellikler gerektiren parçalar",
                    "fonksiyonel prototipler ve son kullanım parçaları",
                    "ince özelliklere sahip karmaşık ve organik geometriler",
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
        title="Multi Jet Fusion Kitapçığı"
        desc="HP'nin Multi Jet Fusion Hizmeti hakkındaki bu 104 sayfalık kapsamlı kitapçık, en iyi uygulamalar ve bu teknolojiyi kullanarak parçanızı en iyi şekilde üretmeye yönelik derinlemesine tasarım kılavuzları hakkında olmazsa olmaz bilgiler sağlar."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Multi Jet Fusion için Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Multi Jet Fusion için temel kılavuzlarımız, parça
              üretilebilirliğini iyileştirmeye, kozmetik görünümü geliştirmeye
              ve genel üretim süresini azaltmaya yardımcı olacak önemli tasarım
              hususlarını içerir.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-8">
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
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Maksimum Parça Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    11,1 inç x 14,9 inç x 14,9 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    284mm x 380mm x 380mm
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Katman Kalınlığı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,00315 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">80 mikron</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Özellik Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,020 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0,5mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Duvar Kalınlığı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,020 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0,5mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mb-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Toleranslar:</span>{" "}
              İyi tasarlanmış parçalar için, +/- 0,012 inç (0,30mm) artı her ek
              inç için nominal uzunluğun %0,1'i toleranslar tipik olarak elde
              edilebilir. Toleransların parça geometrisine bağlı olarak
              değişebileceğini unutmayın.
            </p>
          </div>

          {/* Warpage Info */}
          <div className="p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Eğrilme:</span>{" "}
              Daha büyük parça boyutları (&gt;7 inç) ve ince özelliklere sahip
              parçalar eğrilmeye en yatkın olanlardır. Stabiliteyi sağlamak için
              0,125 inç (3,175mm) uniform kalınlık korunmasını öneririz.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden sticky top-32">
              <Image
                src="/Assets/Images/services/3d-printing/multi-jet-fusion/service-page-render-mjf.webp"
                alt="Multi Jet Fusion Malzeme Seçenekleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Multi Jet Fusion (MJF) Malzeme Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* PA 12 Black */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PA 12 Siyah
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  PA 12 Siyah, yüksek çekme mukavemetli bir naylondur. Nihai
                  parçalar siyaha boyanır ve SLS ile karşılaştırıldığında
                  kaliteli yüzey kalitesi ve biraz daha izotropik mekanik
                  özellikler sergilerler. Daha fazla detay gerektiğinde, PA 12,
                  SLS malzemelerine (0,03 inç) kıyasla daha küçük minimum
                  özellik çözünürlüğü (0,02 inç) elde edebilir. PA 12 Siyah,
                  hareketli menteşeler içeren tasarımlar için en iyi malzeme
                  seçeneğidir.
                </p>
                <div>
                  <h4 className="font-semibold text-[#0B1221] text-sm mb-2">
                    Temel Faydalar:
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Neredeyse izotropik mekanik özellikler
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Ekonomik malzeme seçeneği
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PA 12 40% Glass-Filled Black */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PA 12 %40 Cam Dolgulu Siyah
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  PA 12 %40 Cam Dolgulu Siyah, %40 cam dolgulu bir naylondur.
                  Nihai parçalar siyaha boyanır. Bu malzemenin sunduğu en büyük
                  avantaj, 347°F'de (66 psi'de ölçülür) ısı sapmasıdır ve PA 12
                  Mineral Dolgulu'dan sonra ikinci sırada yer alır.
                </p>
                <div>
                  <h4 className="font-semibold text-[#0B1221] text-sm mb-2">
                    Temel Faydalar:
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">
                        Ekonomik malzeme seçeneği
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                      <span className="text-gray-600 text-sm">Isı sapması</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              MJF Malzeme Özelliklerini Karşılaştır
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUnit("us")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              ABD (Imperial)
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "metric"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metrik (SI)
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[200px]">
                    Malzeme
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[100px]">
                    Renk
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Çekme Mukavemeti
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Çekme Modülü
                  </th>
                  <th className="text-left p-4 font-semibold min-w-[100px]">
                    Uzama
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    <td className="p-4 text-gray-700 text-sm font-medium">
                      {row.material}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">{row.color}</td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileModulus}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.elongation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
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
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Multi Jet Fusion Yüzey İşlemi
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Standard */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Standart
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Boncuk püskürtme tüm tozu temizler ve tutarlı bir genel doku
                  bırakır. Parçalar daha sonra standart siyah renge boyanır.
                </p>
              </div>

              {/* Vapor Smoothing */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Buhar Düzeltme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yüzey pürüzlülüğünde 250+ μm RA'dan (baskı durumu) düzeltmeden
                  sonra 64 – 100 μm RA'ya önemli azalma. PA12 Siyah için
                  mevcuttur.
                </p>
              </div>

              {/* Custom */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">Özel</h3>
                <p className="text-gray-600 leading-relaxed">
                  İkincil seçenekler arasında uygulanabilen bir astar ile
                  kılavuz çekme ve ek parçalar bulunur.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/multi-jet-fusion/3dp_sf_520x560-mjf-threaded-inserts-standard-1-1.png"
                alt="Multi Jet Fusion Yüzey İşlemi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Video Player */}
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
                    Neden Multi Jet Fusion Kullanmalı?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Neden Multi Jet Fusion Kullanmalı?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Multi Jet Fusion ile 3D baskının fonksiyonel prototipler ve son
                kullanım üretim parçaları için neden ideal olduğunu görün.
              </p>
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
                Multi Jet Fusion Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Multi Jet Fusion, bir naylon tozu yatağı boyunca seçici olarak
                birleştirme ve detaylandırma maddeleri uygulamak için bir
                mürekkep püskürtme dizisi kullanır ve bunlar daha sonra ısıtma
                elemanları tarafından katı bir tabaka halinde birleştirilir. Her
                katmandan sonra, toz yatağın üzerine dağıtılır ve parça
                tamamlanana kadar süreç tekrarlanır.
              </p>

              <p className="text-gray-600 leading-relaxed">
                İnşa tamamlandığında, kapsüllenmiş parçaları içeren tüm toz
                yatağı, gevşek tozun çoğunun entegre bir vakum tarafından
                temizlendiği bir işlem istasyonuna taşınır. Parçalar daha sonra,
                nihayet kozmetik görünümü iyileştirmek için siyaha boyandıkları
                bitirme bölümüne ulaşmadan önce kalan artık tozu temizlemek için
                boncuk püskürtülür.
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
                    Multi Jet Fusion Süreci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
