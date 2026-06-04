import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-36 bg-white">
      <ServicesHero
        title="Gömme Parçalı Kalıplama Hizmeti"
        desc="Metal ek parçalarla kalıplanmış özel plastik parçalar alın. Çevrimiçi teklif almak için bir parça yükleyin."
        image="/Assets/Images/services/injection-molding/propeller-part.webp"
        firstButton={{ title: "Parça Yükle", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
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
                    "Yüzey İşlemleri",
                    "Kalite Denetimleri",
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
              {/* What is Plastic Insert Molding? Section */}
              <div
                id="plastik-gömme-parçalı-kalıplama-nedir"
                className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Plastik Gömme Parçalı Kalıplama Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Gömme parçalı kalıplama süreçlerimiz, 15 gün kadar kısa sürede
                  özel prototipler ve talep üzerine üretim parçaları üretir.
                  Maliyet etkin takım sunan alüminyum kalıplar kullanıyoruz ve
                  çeşitli termoplastik ve sıvı silikon kauçuk malzemelerden
                  parçalar üretiyoruz.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Gömme parçalı kalıplama için yaygın uygulamalar:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "düşük hacimli üretim",
                    "köprü takımı",
                    "pilot çalışmalar",
                    "fonksiyonel prototipleme",
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
        title="Enjeksiyon Kalıplama Kesin Kılavuzu"
        desc="Bu tam referans kılavuzu, teklif alma, tasarım analizi ve sevkiyattan, modelinizin kalıplama için optimize edildiğini garanti eden en iyi uygulamalara kadar her şeyde size yol gösterir."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Gömme Parçalı Kalıplama Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Kaplama kalıplama ve gömme parçalı kalıplama için temel
              kılavuzlarımız, parça üretilebilirliğini iyileştirmeye, kozmetik
              görünümü geliştirmeye ve genel üretim süresini azaltmaya yardımcı
              olacak önemli tasarım hususlarını içerir.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              Daha derinlemesine detaylar için tasarım kılavuzları sayfamızı
              görüntüleyin. →
            </a>
          </div>

          {/* Capabilities Table */}
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
                {/* Maximum Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Maksimum Parça Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    18,9 inç x 29,6 inç x 8 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    480mm x 751,8mm x 203,2mm
                  </td>
                </tr>

                {/* Volume Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Hacim
                  </td>
                  <td className="p-4 text-gray-600 bg-white">59 inç küp</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    966.837 mm küp
                  </td>
                </tr>

                {/* Depth Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Derinlik
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Ayırma hattından 4 inç
                    <div className="text-sm text-gray-400 mt-1">
                      Ayırma hattı parçanın ortasından geçebiliyorsa 8 inç'e
                      kadar
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Ayırma hattından 101mm
                    <div className="text-sm text-gray-400 mt-1">
                      Ayırma hattı parçanın ortasından geçebiliyorsa 203,2mm'ye
                      kadar
                    </div>
                  </td>
                </tr>

                {/* Projected Mold Area Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Öngörülen Kalıp Alanı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    175 inç kare (plastik)
                    <div className="text-sm text-gray-400 mt-1">
                      48 inç kare (silikon kauçuk)
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    112.903 mm kare (plastik)
                    <div className="text-sm text-gray-400 mt-1">
                      30.958 mm kare (silikon kauçuk)
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Ek Notlar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Minimum parça hacmi 0,025 inç küp (40,98 mm küp)'tür.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Alt tabaka kalıpları ile, +/- 0,003 inç (0,08mm) işleme
                    toleransını koruyabiliriz ve buna dahil olan reçine
                    toleransı 0,002 inç/inç'ten (0,002mm/mm) büyük ancak daha az
                    olmayabilir.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Termoplastik kaplamalı kalıplarda toleranslar alt tabaka
                    kalıplarıyla aynı kalır, ancak kaplama LSR ise toleranslar
                    0,025 inç/inç'e (0,025mm) kayar.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/green-overmold-part.webp"
                  }
                  fill
                  alt="Gömme parçalı kalıplama örneği"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gömme Parçalı Kalıplama Yetenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Kaplama kalıplama gibi iki ayrı enjeksiyon kullanarak nihai bir
                parça üreten bir kalıp yerine, gömme parçalı kalıplama
                genellikle bir kalıba yüklenen ve daha sonra gelişmiş
                fonksiyonel veya mekanik özelliklere sahip bir parça oluşturmak
                için plastikle kaplanan, genellikle metal olan önceden
                şekillendirilmiş bir parçadan oluşur. Şu anda PEM, Dodge,
                Tri-Star, Spirol ve Tappex'ten ek parçalar kabul ediyoruz.
                Fasonly'deki{" "}
                <a
                  href="#"
                  className="text-[#96E92A] hover:text-[#85d122] transition-colors">
                  stoktaki ek parçaların
                </a>{" "}
                tam listesi burada mevcuttur.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Gömme parçalı kalıplamanın kullanıldığı bir yöntem, özellikle
                tekrarlanan montajlarda plastik parçaların birbirine bağlanma
                yeteneğinin mekanik özelliklerini güçlendiren dişli ek
                parçalardır. Burçlar ve manşonlar, hareketli parçalar nedeniyle
                daha fazla aşınma direnci gerektiren birleşen bileşenler için
                parça dayanıklılığını artırmanın başka bir harika yoludur.
              </p>
            </div>

            {/* Right Column - Image with Labeled Elements */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/insert-molding/om-dg-insertmold-tiny.webp"
                  }
                  fill
                  alt="Gömme parçalı kalıplama şeması"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image with Numbered Overlays */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/insert-molding/overmolding-and-insert-molding-process-illustration-900x600.png"
                  }
                  fill
                  alt="Gömme parçalı kalıplama süreci"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Gömme Parçalı Kalıplama Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gömme parçalı kalıplama benzer bir süreçtir ancak bunun yerine
                bir kalıba yüklenen ve daha sonra nihai bir bileşen oluşturmak
                için bir termoplastik reçine ile kaplanan, genellikle metal olan
                önceden şekillendirilmiş bir parça kullanır. Çalıştırma
                tamamlandığında, parçalar kutulanır ve kısa bir süre sonra
                gönderilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
