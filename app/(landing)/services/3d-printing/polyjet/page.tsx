"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "30A",
      tearStrength: "85 psi",
      tensileStrength: "399 psi",
      elongation: "%245",
    },
    {
      material: "40A",
      tearStrength: "100 psi",
      tensileStrength: "508 psi",
      elongation: "%200",
    },
    {
      material: "50A",
      tearStrength: "114 psi",
      tensileStrength: "508 psi",
      elongation: "%190",
    },
    {
      material: "60A",
      tearStrength: "121 psi",
      tensileStrength: "580 psi",
      elongation: "%160",
    },
    {
      material: "70A",
      tearStrength: "185 psi",
      tensileStrength: "725 psi",
      elongation: "%130",
    },
    {
      material: "85A",
      tearStrength: "341 psi",
      tensileStrength: "1.088 psi",
      elongation: "%80",
    },
    {
      material: "95A",
      tearStrength: "398 psi",
      tensileStrength: "1.740 psi",
      elongation: "%60",
    },
    {
      material: "Rijit",
      tearStrength: "n/a",
      tensileStrength: "8.702 psi",
      elongation: "%17,5",
    },
  ];

  const metricData = [
    {
      material: "30A",
      tearStrength: "0,59 MPa",
      tensileStrength: "2,75 MPa",
      elongation: "%245",
    },
    {
      material: "40A",
      tearStrength: "0,69 MPa",
      tensileStrength: "3,5 MPa",
      elongation: "%200",
    },
    {
      material: "50A",
      tearStrength: "0,79 MPa",
      tensileStrength: "3,5 MPa",
      elongation: "%190",
    },
    {
      material: "60A",
      tearStrength: "0,83 MPa",
      tensileStrength: "4,0 MPa",
      elongation: "%160",
    },
    {
      material: "70A",
      tearStrength: "1,28 MPa",
      tensileStrength: "5,0 MPa",
      elongation: "%130",
    },
    {
      material: "85A",
      tearStrength: "2,35 MPa",
      tensileStrength: "7,5 MPa",
      elongation: "%80",
    },
    {
      material: "95A",
      tearStrength: "2,74 MPa",
      tensileStrength: "12,0 MPa",
      elongation: "%60",
    },
    {
      material: "Rijit",
      tearStrength: "n/a",
      tensileStrength: "60,0 MPa",
      elongation: "%17,5",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="PolyJet 3D Baskı Hizmeti"
        desc="Günler içinde 3D baskılı elastomerik parçalar alın. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/3d-printing/polyjet/hero.png"
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
                    "Malzemeler",
                    "PolyJet 3D Yazıcılar",
                    "PolyJet 3D Baskı Hakkında",
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
              {/* What is PolyJet 3D Printing? Section */}
              <div id="polyjet-3d-baskı-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  3D Baskı Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  PolyJet, esnek özelliklere sahip çok malzemeli prototipler ve
                  karmaşık geometrilere sahip karmaşık parçaları 1 gün kadar
                  kısa sürede üreten endüstriyel bir 3D baskı sürecidir.
                  Contalar, keçeler ve gövdeler gibi elastomerik özelliklere
                  sahip bileşenler için iyi çalışan çeşitli sertlikler (sertlik
                  dereceleri) mevcuttur.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  PolyJet 3D baskı için yaygın uygulamalar:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "kaplama kalıplama veya silikon kauçuk parçalar için prototipleme tasarımları",
                    "tek bir parçada iki rengi veya sertlik derecesini birleştirme",
                    "elastomerleri veya esnek parçaları simüle etme",
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
        title="3D Baskı Yüzey İşlem Kılavuzu"
        desc="Altı 3D baskı teknolojimiz genelinde yüzey işlem seçeneklerinizi keşfetmek için bu hızlı referans kılavuzunu alın."
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              PolyJet Tasarım Kılavuzları ve Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              PolyJet için temel kılavuzlarımız, parça üretilebilirliğini
              iyileştirmeye, kozmetik görünümü geliştirmeye ve genel üretim
              süresini azaltmaya yardımcı olacak önemli tasarım hususlarını
              içerir.
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
                    19,3 inç × 15,4 inç × 7,9 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    490mm × 390mm × 200mm
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Katman Kalınlığı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,00118 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">30 mikron</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Özellik Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,012 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0,3mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Bağımsız Duvar, Delik veya Kanal Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">0,030 inç</td>
                  <td className="p-4 text-gray-600 bg-gray-50">0,76mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">
                PolyJet için Toleranslar:
              </span>{" "}
              İyi tasarlanmış parçalar için, ilk inç için ±0,005 (0,1mm) artı
              nominal uzunluğun %0,1'i toleranslar tipik olarak elde edilebilir.
              Toleransların parça geometrisine bağlı olarak değişebileceğini
              unutmayın.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/polyjet/tpng-web-polyjet-gasket-lr-1017.webp"
                alt="PolyJet Malzeme Seçenekleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                PolyJet Malzeme Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                PolyJet, istenen bir sertliği seçme veya malzeme özelliklerini
                tek bir yapıda birleştirme yeteneği sağlar, bu da onu kaplama
                kalıplama parçalarını prototiplemek için ideal hale getirir.
                30A, 40A, 50A, 60A, 70A, 85A, 95A ve rijit Shore A sertlikleri
                şu renklerde mevcuttur:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Dijital Şeffaf/Yarı Saydam",
                  "Dijital Siyah",
                  "Dijital Beyaz",
                ].map((color, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{color}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                PolyJet malzemeleri hakkında daha fazla bilgi edinin →
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              PolyJet Malzeme Özelliklerini Karşılaştır
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
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700">
                    Malzeme
                  </th>
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700">
                    Çekme Yırtılma Mukavemeti
                  </th>
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700">
                    Çekme Mukavemeti
                  </th>
                  <th className="text-left p-4 font-semibold text-base">
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
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tearStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
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
                PolyJet 3D Baskı Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                PolyJet süreci, anında UV ile kürlenen katmanlar halinde küçük
                sıvı fotopolimer damlacıklarının püskürtülmesiyle başlar.
                Vokseller (üç boyutlu pikseller), yapı sırasında stratejik
                olarak yerleştirilir ve bu,{" "}
                <span className="italic">dijital malzemeler</span> olarak
                bilinen hem esnek hem de rijit fotopolimerlerin
                birleştirilmesine olanak tanır. Her voksel, 30 mikronluk katman
                kalınlığına eşit dikey bir kalınlığa sahiptir. Dijital
                malzemelerin ince katmanları, doğru 3D baskılı parçalar
                oluşturmak için yapı platformunda birikir.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Her PolyJet parçası, yapı sırasında tamamen destek malzemesi ile
                kaplanır ve bu malzeme nihayetinde basınçlı su akışı ve kimyasal
                çözelti banyosu kullanılarak elle çıkarılır. Üretim sürecinden
                sonra son kürleme gerekmez.
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
                    PolyJet 3D Baskı Süreci
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
