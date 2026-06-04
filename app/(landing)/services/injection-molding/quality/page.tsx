"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function page() {
  const [activeTab, setActiveTab] = useState<"partial" | "capability">(
    "partial",
  );

  const partialData = {
    title: "CTQ Kısmi FAI",
    rows: [
      {
        label: "Faydalar",
        value:
          "Kritik özelliklerin boyutsal yetenek çalışmasını sağlar (müşteri, bir Muayene İş Tanımı aracılığıyla tanımlanan özellikleri seçer)",
      },
      {
        label: "Ölçümler",
        value:
          "Muayene İş Tanımı başına seçilen özellikler. Kritik özellikler olarak düzlemler arası, delikler arası, iç çap/dış çap veya yarıçap ölçümlerini içerebilir",
      },
      { label: "Hizmet Sağlayıcı", value: "Fasonly" },
      {
        label: "Ek Özellikler",
        value:
          "Baloncuklu parça görseli ve sonuç özet tablosu içeren biçimlendirilmiş rapor",
      },
      {
        label: "Uygunluk",
        value:
          "Talep üzerine üretim, enjeksiyon kalıplama siparişleri. Diğer tüm siparişlere eklenebilir (Termoplastik elastomerler (TPU, TPV, TPO, vb.) ve sıvı silikon kauçuk (LSR) hariç)",
      },
      { label: "Ek Teslim Süresi", value: "Yok" },
      {
        label: "Fiyat",
        value:
          "Varsayılan olarak, yeni sınırsız kalıp siparişlerinde ek ücret olmaksızın 5 özelliğe kadar 3 parçalı kısmi FAI sağlanır. Ek parça miktarları, özellikler veya tekrar eden siparişlere eklemek için kısmi FAI a la carte olarak değiştirilebilir. (500$'dan başlayan fiyatlarla)",
      },
      {
        label: "Örneklem Planı",
        value:
          "Kalıplama süreci kurulduktan sonra, takımdan çıkan ilk parçaların örnekleri kullanılarak kısmi bir FAI yapılır",
      },
      {
        label: "Ek Bilgiler",
        value:
          'Ödeme sırasında "denetimler" bölümünde seçilebilir. Kritik özellikleri belirtilmiş bir 2B çizim yükleyin. Ayrıca, gerekli parça ve özellik miktarlarını tanımlayın. Sorularınız için hesap temsilcinizle iletişime geçin',
      },
    ],
    downloadLink: "#",
  };

  const capabilityData = {
    title: "CTQ Yetenek Çalışması ile DIR",
    rows: [
      {
        label: "Faydalar",
        value:
          "Kritik özelliklerin boyutsal yetenek çalışmasını sağlar (müşteri, bir Muayene İş Tanımı aracılığıyla tanımlanan özellikleri seçer)",
      },
      {
        label: "Ölçümler",
        value:
          "Muayene İş Tanımı başına seçilen özellikler. Kritik özellikler olarak düzlemler arası, delikler arası, iç çap/dış çap veya yarıçap ölçümlerini içerebilir",
      },
      { label: "Hizmet Sağlayıcı", value: "Fasonly" },
      {
        label: "Ek Özellikler",
        value:
          "Baloncuklu parça görseli ve sonuç özet tablosu içeren biçimlendirilmiş rapor",
      },
      {
        label: "Uygunluk",
        value:
          "Talep üzerine üretim, enjeksiyon kalıplama siparişleri. Diğer tüm siparişlere eklenebilir (Termoplastik elastomerler (TPU, TPV, TPO, vb.) ve sıvı silikon kauçuk (LSR) hariç)",
      },
      { label: "Ek Teslim Süresi", value: "Yok" },
      {
        label: "Fiyat",
        value:
          "Varsayılan olarak, yeni sınırsız kalıp siparişlerinde ek ücret olmaksızın 5 özelliğe kadar 30 parçalı Yetenek Çalışması sağlanır. Ek parça miktarları, özellikler veya tekrar eden bir siparişe eklemek için Yetenek Çalışması a la carte olarak değiştirilebilir. (1.500$'dan başlayan fiyatlarla)",
      },
      {
        label: "Örneklem Planı",
        value:
          "Kalıplama süreci kurulduktan sonra, yetenek raporu, sipariş çalışırken eşit dağıtılmış örneklerden alınan müşteri tarafından tanımlanan parça miktarına dayanacaktır (minimum 30 parça)",
      },
      {
        label: "Ek Bilgiler",
        value:
          'Ödeme sırasında "denetimler" bölümünde seçilebilir. Kritik özellikleri belirtilmiş bir 2B çizim yükleyin. Ayrıca, gerekli parça ve özellik miktarlarını tanımlayın. Sorularınız için hesap temsilcinizle iletişime geçin',
      },
    ],
    downloadLink: "#",
  };

  const currentData = activeTab === "partial" ? partialData : capabilityData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Enjeksiyon Kalıplama Kalite Kontrolü"
        desc="Tutarlı bir şekilde kaliteli parçalar üretmek için dijital süreçleri, bilimsel kalıplamayı ve denetim raporlamasını nasıl kullandığımız"
        image="/Assets/Images/services/injection-molding/hero.png"
        firstButton={{ title: "Teklif Al", route: "/" }}
        secondButton={{ title: "Denetim Seçeneklerini Görüntüle", route: "/" }}
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
              {/* What is Quality Control? Section */}
              <div id="kalite-kontrol-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Kalite Kontrol Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  İki enjeksiyon kalıplama hizmet seçeneğimiz var—prototipleme
                  ve talep üzerine üretim—ve her biri proje ihtiyaçlarınıza
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
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Üretilebilirlik İçin Tasarım (DFM) Analizi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Çevrimiçi teklif sistemimiz üzerinden bir teklif talep
              ettiğinizde, üretim analizi ve fiyatlandırma alacaksınız.
            </p>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Üretim analizimiz enjeksiyon kalıplanmış parçaların kalitesini
                nasıl iyileştirebilir:
              </h3>
              <ul className="space-y-3">
                {[
                  "Kalın duvarları tanımlar",
                  "Yetersiz çekme açısına sahip özellikleri tanımlar",
                  "Kalıp akış analizi",
                  "Kapak konumu seçimi",
                  "İtici pim konumu seçimi",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/group-1-2.webp"
                  }
                  fill
                  alt="DFM analizi"
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/scientific-molding-guide-image_570x308-6.webp"
                  }
                  fill
                  alt="Bilimsel kalıplama"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Bilimsel Kalıplama: Tutarlı Kaliteli Parçaların Teslimatı
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Müşterilerimiz için tutarlı parçalar üretmek üzere{" "}
                <span className="font-semibold">bilimsel</span> veya{" "}
                <span className="font-semibold">ayrıştırılmış</span>{" "}
                <span className="font-semibold">enjeksiyon kalıplama</span>{" "}
                kullanıyoruz. Her proje, her çalıştırmada tekdüzeliği sağlayan
                optimize edilmiş, belgelenmiş bir sürece sahiptir.
                Değişiklikler, çalıştırmalar arasında izlenebilirlik için takip
                edilir. Bilimsel kalıplama, parça yeniden çalıştırılsa veya daha
                sonra sipariş edilse bile, belirli reçine ve boyutsal
                gereksinimleri karşılayan süreçte tutarlılığı garanti eder.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Doldurma, paketleme ve tutmayı kontrol ederek, her parçanın bir
                öncekiyle eşleşmesini sağlıyoruz ve müşterilerimize daha yüksek
                kalite ve tutarlı denetim raporlarının faydalarını sunuyoruz.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Kapak Dondu
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Basınçlı Kanal
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Daha Fazla Basınçlandırma Yok
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">👨‍🔧</span>
                <p className="text-gray-500 text-sm mt-2">
                  Mühendislik Desteği
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Enjeksiyon Kalıplama Uzmanlarından Tasarım Desteği
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold">
                  Danışmanlık Tasarım Hizmetleri:
                </span>{" "}
                Tasarımınızın kalıplanabilirliğini iyileştirmek için doğrudan
                bir enjeksiyon kalıplama uygulama mühendisiyle çalışın. Bunu,
                ekibinizde kendi enjeksiyon kalıplama danışmanınıza sahip olmak
                gibi düşünün. Bu süreçte, uygulama mühendisimiz tasarım
                hedeflerinizi anlamak, çevrimiçi teklifinizde sağlanan üretim
                analizini incelemek ve 3B CAD dosyasında değişiklikler yapmak
                için sizinle işbirliği yapacaktır.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold">
                  Fasonly Önerilen Revizyon (PPR):
                </span>{" "}
                Bazı durumlarda, size ikinci bir CAD modeli sağlayabiliriz—buna
                Fasonly Önerilen Revizyon (PPR) denir. Bu, değişikliklerin zaten
                yapılmış olduğu yeni bir CAD dosyasıdır. Revize edilmiş model
                hemen kullanılabilir veya değişiklikleri orijinal modele
                aktarabilirsiniz. DFM analizini ve bazı durumlarda PPR'yi
                takiben, parça onaylandıktan sonra, Fasonly gerçek üretimden
                önceki son adıma—dijital hazırlığa—geçer.
              </p>

              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Bir Uygulama Mühendisiyle Görüşün.
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Enjeksiyon Kalıplanmış Parçalar için Denetimler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Enjeksiyon kalıplama siparişleri için çeşitli kalite denetim
              raporları sunuyoruz. Proje gereksinimlerinize bağlı olarak
              aşağıdaki raporlar arasından seçim yapabilirsiniz.
            </p>
          </div>

          {/* Row 1 - Image Left, Text Right (Inspection Reports List) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/im_quality_inspection_3_hi_res.jpg"
                  }
                  fill
                  alt="Denetim raporları"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Mevcut Denetim Raporları
              </h3>
              <ul className="space-y-2">
                {[
                  "CTQ Kısmi FAI",
                  "CTQ Yetenek Çalışması ile DIR",
                  "Üretim Parçası Onay Süreci (PPAP)",
                  "Dijital Denetim Raporu / Tam FAI",
                  "Özel Denetim",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right (Standard Inspection Process) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Enjeksiyon Kalıplama Denetim Raporları
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fasonly standardının bir parçası olarak, CAD modelinize (X, Y,
                Z) ve teklif edilen toleranslara dayalı olarak dörde kadar
                düzlemler arası ve dış çap boyutunu ölçüyoruz. Bu kalite kontrol
                kontrollerini otomatik olarak tanımlıyor ve parçalardan örneklem
                alarak ölçümleri gerçekleştiriyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ek olarak, geniş bir yelpazede başka kalite dokümantasyonu da
                sağlıyoruz. Proje ihtiyaçlarınıza en uygun olanı görmek için her
                denetim raporunun faydalarını karşılaştırın.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/frame-1-5.jpg"
                  }
                  fill
                  alt="Denetim süreci"
                />
              </div>
            </div>
          </div>

          {/* Row 3 - Image Left, Text Right (How Parts are Measured) */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/quality/scientific-molding-wp-cmm-570x308.png"
                  }
                  fill
                  alt="CMM ölçümü"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Parça Boyutları Nasıl Ölçülür?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sektör lideri bir üretim ortağından bekleyeceğiniz gibi,
                endüstri standardı koordinat ölçüm makineleri (CMM) - kumpaslar
                ve pim ölçüleri - kullanıyoruz. Sürecimizi farklı kılan şey,
                CMM'lerimize patentli otomasyon teknolojisi uygulayarak ek
                maliyet veya teslim süresi olmadan süreç içi denetime olanak
                tanımamızdır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Parçalar, n = toplam parça sipariş miktarı olmak üzere eşit
                mesafeli bir n/30 ritminde ölçülür. Her parçadan gelen ölçüm
                verileriyle birlikte, Yetenek Raporu ayrıca tüm kritik boyutlar
                için ortalama ölçümü, standart sapmayı ve Süreç Yetenek İndeksi
                (Cpk) değerini sağlayacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kalite İçin Kritik (CTQ)
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("partial")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "partial"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              CTQ Kısmi FAI
            </button>
            <button
              onClick={() => setActiveTab("capability")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "capability"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              CTQ Yetenek Çalışması ile DIR
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {currentData.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 font-semibold text-[#0B1221] w-1/3 align-top">
                      {row.label}
                    </td>
                    <td className="p-4 text-gray-600 align-top">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Excludes Note */}
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500 italic">
              *Hariç: Termoplastik elastomerler (TPU, TPV, TPO, vb.) ve Sıvı
              Silikon Kauçuk (LSR).
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mt-6">
            <a
              href={currentData.downloadLink}
              className="inline-flex items-center gap-2 text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium">
              <Download className="w-4 h-4" />
              Örnek {currentData.title} İndir
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Ek Kalite Yetenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medikal Kalıplama Yetenekleri
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Güvenilir ortaklar aracılığıyla ISO 13485 enjeksiyon kalıplama
                  yetenekleri sunuyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Özel Denetim
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gereksinimlerinize göre uyarlanmış, çok sayıda kritik boyutun
                  doğrulanmasına olanak tanıyan ek denetim seçenekleri
                  mevcuttur.
                </p>
                <p className="text-gray-600">
                  Özel bir denetim talep etmek için hesap temsilcinizle
                  iletişime geçin.
                </p>
              </div>
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
                    Kalite Yetenekleri Genel Bakış
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
