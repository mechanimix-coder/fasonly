"use client";

import Quote from "@/component/landing/Quote";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Büyük Format 3D Baskı"
        desc="Bugün çevrimiçi teklif talep edin. Kaliteli parçaları hızlı bir şekilde almak için 3D baskı uzmanları ekibimizle çalışın."
        image="/Assets/Images/services/3d-printing/large-format/hero.webp"
        firstButton={{ title: "Büyük 3D Baskılar Alın", route: "/" }}
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
                    "Üretim Boyutları",
                    "Büyük Format 3D Yazıcılarımız",
                    "Parça Birleştirme",
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
              <div id="buyuk-format-3d-baski" className="scroll-mt-32">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Büyük format 3D baskı, büyük, karmaşık geometriler için ve çok
                  parçalı montajları tek bir tasarıma indirgemek için
                  kullanılır. 31,5 inç x 15,7 inç x 19,7 inç kadar büyük metal
                  parçalar ve 29 inç x 25 inç x 21 inç kadar büyük plastik
                  parçalar 3D baskı ile üretin.
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
              Büyük Format 3D Baskı için Maksimum Parça Boyutları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[200px]">
                    Malzeme
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Üretim Boyutu
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Metal Section Header */}
                <tr className="bg-gray-100">
                  <td
                    colSpan={2}
                    className="p-3 font-bold text-[#0B1221] text-md">
                    Metal
                  </td>
                </tr>

                {/* Aluminum (AlSi10Mg) */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium align-top">
                    Alüminyum (AlSi10Mg)
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    31,5 inç x 15,7 inç x 19,7 inç
                    <div className="text-gray-400 text-xs mt-1">
                      400mm x 800mm x 500mm
                    </div>
                  </td>
                </tr>

                {/* Inconel 718 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium align-top">
                    Inconel 718
                  </td>
                  <td className="p-4 text-gray-600 text-sm">—</td>
                </tr>

                {/* Plastic Section Header */}
                <tr className="bg-gray-100">
                  <td
                    colSpan={2}
                    className="p-3 font-bold text-[#0B1221] text-md">
                    Plastik
                  </td>
                </tr>

                {/* ABS-Like Materials */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium align-top">
                    ABS-Benzeri Beyaz
                  </td>
                  <td className="p-4 text-gray-600 text-sm" rowSpan={3}>
                    29 inç x 25 inç x 21 inç
                    <div className="text-gray-400 text-xs mt-1">
                      736mm x 635mm x 533mm
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    ABS-Benzeri Gri
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    ABS-Benzeri Yarı Saydam/Şeffaf
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    PC-Benzeri Yarı Saydam/Şeffaf
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    29 inç x 25 inç x 21 inç
                    <div className="text-gray-400 text-xs mt-1">
                      736mm x 635mm x 533mm
                    </div>
                  </td>
                </tr>

                {/* PA 12 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700 text-sm font-medium">
                    PA 12
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    19 inç x 19 inç x 17 inç
                    <div className="text-gray-400 text-xs mt-1">
                      482mm x 482mm x 431mm
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Format Metal 3D Printer */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/large-format/sla-3dp-blog-size-1.jpg"
                  alt="Büyük Format Metal 3D Yazıcı"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Büyük Format Metal 3D Yazıcı
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Büyük metal parçalar için Concept Laser X Line 2000R 3D
                  yazıcıyı kullanıyoruz. Bu makine,{" "}
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    400 × 800 × 500 mm
                  </span>{" "}
                  üretim hacmi sağlar. X Line 2000R, özellikle büyük, kaliteli
                  parçaların üretimi için tasarlanmıştır.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Büyük, 3D baskılı parçalar genellikle endüstriyel ortamlarda,
                  havacılık uygulamalarında, otomotiv ve enerji sektörlerinde
                  kullanılır.
                </p>
              </div>
            </div>

            {/* Large Format Plastic 3D Printing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/large-format/dmls-xline-large-format-570x308-1.png"
                  alt="Büyük Format Plastik 3D Baskı"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Büyük Format Plastik 3D Baskı
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <span className="font-semibold text-[#0B1221]">
                    Stereolitografi (SLA):
                  </span>{" "}
                  Büyük SLA parçalar, büyük üretim hacmi sağlarken aynı zamanda
                  detaylı parçalar üreten 3D System iPro'lar üzerinde inşa
                  edilir.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold text-[#0B1221]">
                    Seçici Lazer Sinterleme (SLS):
                  </span>{" "}
                  PA 12'de üretilen büyük parçalar için sPro140 makineleri
                  kullanıyoruz.
                </p>
              </div>
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
                Büyük Plastik Parçalar için Birleştirme
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Makinemizin üretim hacmini aşan bir parçaya mı ihtiyacınız var?
                Daha da büyük parça boyutları elde etmek için SLA, SLS ve MJF
                için parça kesme ve birleştirme mevcuttur.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                İyi bir kesim için duvar kalınlığının yeterli olması gerekir.
                Büyük geometriler için iyi bir kesim elde etmek amacıyla minimum{" "}
                <span className="font-semibold">0,1" (2,54mm)</span> veya{" "}
                <span className="font-semibold">0,12" (3mm)</span> duvar
                kalınlığına ihtiyacımız var. Unutmayın, en iyi kesimi elde etmek
                için duvar ne kadar kalın olursa o kadar iyidir. Bir parça tek
                parça halinde baskı için çok büyükse, olası parça eğrilmesini
                önlemek için muhtemelen kalın duvarlara sahip olmak
                isteyeceksiniz.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Kesme ve birleştirme işlemi, kesme ve birleştirme arayüzünde
                belirgin görünür dikişler bırakacaktır. Bunlar çirkin olabilir,
                ancak parçayı yalnızca işlev için kullanıyorsanız kabul
                edilebilir olabilir. Parçanın estetik olması amaçlanıyorsa,
                birleştirme arayüzü dikişlerini düzeltmek, doldurmak, astarlamak
                ve boyamak için özel bitirme yapılabilir. Bunun işlevsel olarak
                şeffaf parçalarla elde edilmesinin zor olduğunu unutmayın.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/large-format/bonded-sla-part.jpg"
                alt="Büyük Plastik Parçalar için Birleştirme"
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
