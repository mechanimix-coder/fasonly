import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full pt-10 pb-36 bg-white">
      <ServicesHero
        title="Enjeksiyon Kalıplama için Prototip Takım"
        desc="Düşük maliyetli prototip takım ile kalıp maliyetlerini azaltın ve parça tasarımlarını doğrulayın"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
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
                    "İşlem Sonrası Seçenekler",
                    "Plastik Enjeksiyon Kalıplama Hakkında",
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
              {/* What is Prototyping? Section */}
              <div id="prototipleme-hakkında" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Prototipleme Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  İki enjeksiyon kalıplama hizmet seçeneğimiz var - prototipleme
                  ve talep üzerine üretim - ve her biri proje ihtiyaçlarınıza
                  bağlı olarak kendi avantajlarını sunar. Parça miktarları daha
                  düşükse, takım için uygun fiyatlı bir giriş noktası önemliyse
                  ve kısa bir süre içinde hızlı geliştirme kritikse,
                  prototipleme seçeneğimiz harika çalışır.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Plastik enjeksiyon kalıplama için yaygın uygulamalar:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "düşük hacimli üretim",
                    "köprü takımı",
                    "pilot çalışmalar",
                    "fonksiyonel test ve prototipleme",
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

      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Prototiplemeden Üretime Enjeksiyon Kalıplama
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Projenizin her aşamasında bizimle ortaklık kurarak tek bir
                kaynakla prototiplemeden üretime sorunsuzca geçin. İşbirlikçi
                yaklaşımımız, pazara çıkış sürenizi kısaltmak, daha iyi maliyet
                verimliliği sağlamak ve projenizin gerektirdiği kalite ve
                sertifikasyon seviyelerine ulaşmak için sizi daha iyi
                konumlandırır.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/prototyping/injection-molding-production-570x308.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kalıplama için Prototip Takım
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Two Column Layout - Image Left, Table Right */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/prototyping/pl-production-page-image-02-570x608.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {/* Mold Price Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50 w-2/5">
                        Kalıp Fiyatı
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Talep üzerine üretim takımından daha düşük
                      </td>
                    </tr>
                    {/* Part Price Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Parça Fiyatı
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Talep üzerine üretim takımından daha yüksek
                      </td>
                    </tr>
                    {/* Mold Cavities Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Kalıp Gözleri
                      </td>
                      <td className="p-3 text-gray-600 bg-white">Tek</td>
                    </tr>
                    {/* Guaranteed Mold Life Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Garantili Kalıp Ömrü
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Sınırlı (en az 2.000 atış için garanti edilir)
                      </td>
                    </tr>
                    {/* Mold Storage Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Kalıp Saklama
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        18 ay hareketsizlik durumunda saklanır
                      </td>
                    </tr>
                    {/* Quality Documentation Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                        Kalite Dokümantasyonu
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        Temel ve dijital denetim raporları talep üzerine
                        mevcuttur
                      </td>
                    </tr>
                    {/* Additional Features Row */}
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#0B1221] bg-gray-50 align-top">
                        Ek Özellikler
                      </td>
                      <td className="p-3 text-gray-600 bg-white">
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>Alüminyum kalıplar</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>
                              7 gün kadar kısa standart teslim süreleri
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>
                              +/-0,003 inç artı reçine toleransı (in./in.)
                              toleranslar
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                            <span>
                              Her çalıştırma için kurulum ücretleri uygulanır
                            </span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Compare Link */}
              <div className="text-center mt-6">
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors inline-flex items-center gap-2">
                  Üretim ile karşılaştır →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/prototyping/pl-prototyping-page-image-570x308-image-03.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Neden Prototip Takım Kullanmalısınız?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Design Feedback Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Tasarım Geri Bildirimi
                </h3>
                <ul className="space-y-2">
                  {[
                    "Prototipleme başlamadan önce erken ayarlamalar yapmak için her teklifte etkileşimli üretilebilirlik için tasarım geri bildirimi alın.",
                    "Ortaya çıkan herhangi bir tasarım zorluğu ve üretim sorusunu tartışmak için uygulama mühendisleriyle görüşün.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Iterative Development Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Döngüsel Geliştirme
                </h3>
                <ul className="space-y-2">
                  {[
                    "Erken ürün geliştirme sırasında tasarımları hızla değiştirmek için günler içinde fiziksel prototiplere sahip olun.",
                    "Tasarımları aynı anda karşılaştırmak ve döngüsel olarak geliştirmek için aynı anda birden fazla prototip üretin.",
                    "Döngüsel ürün geliştirme döngüsü ile pazara çıkış süresini kısaltın.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Validation Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Tasarım Doğrulama
                </h3>
                <ul className="space-y-2">
                  {[
                    "Az miktarda kalıplanmış parça ile bileşenlerin form ve uyumunu test edin.",
                    "Üretim sınıfı malzemelerle üretilmiş prototiplerle fonksiyonel test gerçekleştirin.",
                    "Kılavuzlar, ipuçları, teknik makaleler ve videolar dahil olmak üzere çevrimiçi tasarım kaynaklarının tam kütüphanesi.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Market Testing Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Pazar Testi
                </h3>
                <ul className="space-y-2">
                  {[
                    "Lansmandan önce pazar ilgisini doğrulamak için enjeksiyon kalıplanmış parçalardan oluşan bir pilot çalıştırma üretin.",
                    "Tam ölçekli üretim başlamadan önce uygun fiyatlı alüminyum takım uygulayarak pazar lansmanında finansal riski azaltın.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
