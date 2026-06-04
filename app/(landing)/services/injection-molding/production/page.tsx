import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-36 bg-white">
      <ServicesHero
        title="Üretim Enjeksiyon Kalıplama için Takım"
        desc="Otomatik enjeksiyon kalıplama ile parça maliyetlerini azaltın ve tedarik zinciri esnekliği oluşturun"
        image="/Assets/Images/services/injection-molding/pl_service_im.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        secondButton={{ title: "Üretim Teklifi Başlat", route: "/" }}
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

      <div className="w-full bg-white">
        {/* Top Description Section */}
        <div className="container mx-auto px-4 md:px-10 lg:px-20 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              İki enjeksiyon kalıplama hizmet seçeneğimiz var - prototipleme ve
              talep üzerine üretim - ve her biri proje ihtiyaçlarınıza bağlı
              olarak kendi avantajlarını sunar. Parça miktarları daha yüksekse,
              uygun fiyatlı bir parça fiyatı önemliyse ve ürün yaşam döngünüz
              boyunca hızlı teslim üretim kritikse, talep üzerine üretim
              seçeneğimiz idealdir.
            </p>
          </div>
        </div>

        {/* Production Grade Tooling Section */}
        <div className="w-full bg-white py-20">
          <div className="container mx-auto px-4 md:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Column - Image */}
              <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/production/pl-production-page-image-02-570x608.jpg"
                    }
                    width={600}
                    height={900}
                    alt="design cube"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  Enjeksiyon Kalıplama için Üretim Sınıfı Takım
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {/* Mold Price Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50 w-2/5">
                          Kalıp Fiyatı
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Prototip takımından daha yüksek
                        </td>
                      </tr>
                      {/* Part Price Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Parça Fiyatı
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Prototip takımından daha düşük
                        </td>
                      </tr>
                      {/* Mold Cavities Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Kalıp Gözleri
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          Tek ve çok gözlü
                        </td>
                      </tr>
                      {/* Guaranteed Mold Life Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Garantili Kalıp Ömrü
                        </td>
                        <td className="p-3 text-gray-600 bg-white">Sınırsız</td>
                      </tr>
                      {/* Mold Storage Row */}
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-[#0B1221] bg-gray-50">
                          Kalıp Saklama
                        </td>
                        <td className="p-3 text-gray-600 bg-white">
                          3 yıl hareketsizlik durumunda saklanır
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quality Documentation Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                    Kalite Dokümantasyonu
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Kalıplama süreç geliştirme raporu ve temel denetim
                        raporları dahildir; gelişmiş denetim raporları talep
                        üzerine mevcuttur
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Additional Features Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                    Ek Özellikler
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Alüminyum kalıplar",
                      "15 gün veya daha kısa standart teslim süresi",
                      "+/-0,003 inç artı reçine toleransı (in./in.) toleranslar",
                      "Her çalıştırma için kurulum ücretleri uygulanır",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hint />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Son Kullanım Üretimi için Enjeksiyon Kalıplama
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Fasonly talep üzerine üretim hizmeti, tedarik zincirinizi
              basitleştirmenize yardımcı olarak kaliteli parçaları daha kolay ve
              hızlı bir şekilde almanızı sağlar. Bilimsel kalıplama gibi
              endüstri en iyi uygulamalarını kullanarak, üretim döngülerini
              hızlandırır ve pazara çıkış sürenizi kısaltırız. Minimum sipariş
              miktarı olmadan envanter ihtiyaçlarınızı karşılıyoruz ve köprü
              takımından tam zamanında (JIT) üretime ve hat duruşu acil durum
              kapsamına kadar tedarik zinciri esnekliği sunuyoruz.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Low-volume Runs */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Düşük Hacimli Çalıştırmalar
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Seri üretimden önce pilot çalıştırmalarla parça tasarımını,
                    montaj süreçlerini ve pazar talebini doğrulayın.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Parçaları yalnızca talep gerektirdiğinde üreterek envanter
                    genel giderlerini yönetin.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Yıllık satış hacmi birkaç bin adet olan ürünler için
                    birincil üretim yöntemi olarak kullanın.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bridge Tooling */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Köprü Takımı
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Çelik takımla sermaye harcaması yapmadan önce uygun
                    maliyetli alüminyum takım uygulayın.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Çelik takım için "bekleme maliyetini" en aza indirin - ve
                    pazara daha hızlı çıkın.
                  </span>
                </li>
              </ul>
            </div>

            {/* Optimizing Supply Chain */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Tedarik Zinciri Optimizasyonu
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Büyük ölçekli üretim takımları onarılırken kesinti süresini
                    en aza indirin ve stok tükenmesi riskini azaltın.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Düşük hacimli parçaların güvenilir, talep üzerine
                    tedarikçisine sahip olarak yerel ve küresel nakliye
                    gecikmeleri riskini azaltın.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Ön siparişe geçmeden talep değişkenliğindeki artışları
                    yönetin.
                  </span>
                </li>
              </ul>
            </div>

            {/* Reduce Production Costs */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Üretim Maliyetlerini Azaltın
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Düşük hacimli, son kullanım parçalarının uygun maliyetli
                    üretimi ile yeni pazar fırsatlarının kapılarını açın.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Herhangi bir Minimum Sipariş Miktarı (MOQ) gereksinimi
                    olmadan parçaları talep üzerine tedarik edin.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Talep üzerine tedarik ile envanter maliyetlerini ve depolama
                    giderlerini düşürün.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
