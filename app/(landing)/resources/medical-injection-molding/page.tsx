"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Medikal Enjeksiyon Kalıplama"
        desc="Medikal endüstrisinde yeni ürün geliştirme üretimini hızlandırmak için yüksek kaliteli, hızlı teslim enjeksiyon kalıplanmış parçalar"
        bg="/Assets/Images/resources/medical-injection-molding/bg.jpg"
        text="black"
        firstButton={{ title: "Teklif Al", route: "/" }}
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Medikal Ekipler Neden Protolabs'ı Seçiyor
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 6 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 - Move faster without increasing risk */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Risk artırmadan daha hızlı hareket edin
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Erken süreç öğrenimlerinin, takım kararlarının ve
                üretilebilirlik içgörülerinin tekrarlanabilir, üretime yönelik
                kalıplama süreçlerine taşınabildiği tasarımlar. Dijital
                teklifimiz, yerleşik DFM geri bildirimimiz ve hızlı
                iterasyonumuz, medikal ekiplerin klinik, düzenleyici ve
                yatırımcı hedeflerine ulaşmasına yardımcı olur.
              </p>
            </div>

            {/* Item 2 - Production-grade quality from the start */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Başlangıçtan itibaren üretim sınıfı kalite
              </h3>
              <p className="text-gray-600 leading-relaxed">
                FDA Sınıf II ve III cihazlar ve implant olmayan bileşenler,
                tutarlı kalite, izlenebilirlik ve dokümantasyon gerektirir. ISO
                13485 sertifikalı süreçlerimiz, doğrulama, denetimler ve
                düzenleyici hazırlığı destekler.
              </p>
            </div>

            {/* Item 3 - Simplify a complex supplier ecosystem */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Karmaşık bir tedarikçi ekosistemini basitleştirin
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Prototipten üretime kadar tek bir ortak, devirleri, onay
                döngülerini ve genel program riskini azaltır. Zorlu
                geometrilere, malzeme gereksinimlerine veya çoklu tedarikçi
                bağımlılıklarına sahip parçalar, basitleştirilmiş tedarik ve
                dijital olarak koordine edilmiş üretim iş akışlarından
                yararlanır.
              </p>
            </div>

            {/* Item 4 - Scale on-demand */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Talep üzerine ölçeklendirin
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Talep öngörülemez olduğunda, MOQ olmamasına, istikrarlı teslim
                sürelerine ve erken Ar-Ge'den artışa kadar kolay sonraki
                ölçeklendirme ile küresel dijital üretime güvenin.
              </p>
            </div>

            {/* Item 5 - Proven in real medical programs */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Gerçek medikal programlarda kanıtlanmış
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mobilite cihazlarından robotik cerrahi sistemlerine ve
                enfeksiyon önleme ürünlerine kadar Protolabs, hız, hassasiyet ve
                güvenilirliğin en önemli olduğu hızlı hareket eden medikal
                ekipleri destekler.
              </p>
            </div>

            {/* Item 6 - U.S.-based manufacturing with global resilience */}
            <div className="bg-[#F0F8FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Küresel dayanıklılığa sahip ABD merkezli üretim
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yerli üretim, düzenleyici güveni, fikri mülkiyet korumasını ve
                tedarik sürekliliğini desteklerken, titizlikle seçilmiş bir
                üretim ortakları ağı, gerektiğinde ek kapasite ve coğrafi
                esneklik sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Protolabs, hızlı iterasyon ve üretim sınıfı kalite için
                tasarlanmış enjeksiyon kalıplama hizmetleriyle medikal ekiplerin
                konseptten üretime daha hızlı geçmesine yardımcı olur. Ücretsiz
                dijital teklif platformumuz ProDesk, fiyatlandırma ve yerleşik
                üretilebilirlik için tasarım geri bildirimi sağlayarak ekiplerin
                riskleri erken belirlemesine ve takım başlamadan önce parçaların
                enjeksiyon kalıplamaya hazır olmasını sağlamasına yardımcı olur.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/medical-injection-molding/medical-device.jpg"
                alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/medical-injection-molding/medical-figure3.jpg"
                alt="Medikal Enjeksiyon Kalıplama Yetenekleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                Geniş bir termoplastik ve medikal sınıfı sıvı silikon kauçuk
                yelpazesine erişim, minimum sipariş miktarı olmaması ve sektör
                lideri teslim süreleri ile ekipler, tutarlılık, kalite ve
                kontrolü korurken hızlı bir şekilde iterasyon yapabilir. Üretim
                uzmanlarımız, müşteri tarafından sağlanan reçineler, kaplama
                kalıplama ve gömme parçalı kalıplama ile diğer ikincil
                enjeksiyon kalıplama operasyonları dahil olmak üzere esnek
                seçenekler sunarak ürün yaşam döngüsü boyunca size destek olur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Protolabs'ın talep üzerine üretim modeli, prototiplemeden
                sürekli üretime kadar uyum sağlayarak daha hızlı karar verme,
                daha az geç aşama değişikliği ve programlar ilerledikçe
                öngörülebilir sonuçlar sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Medikal Cihazlar için Plastik Malzemeler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Yüksek performanslı polimerlerden elastomerlere kadar, medikal
              ekiplerin güvendiği malzemeleri tedarik ediyor ve işliyoruz.
            </p>
          </div>

          {/* 6 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical-Grade Liquid Silicone Rubber (LSR) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/silicone_parts.jpg"
                    alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medikal Sınıfı Sıvı Silikon Kauçuk (LSR)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Contalar ve prototip implantlar için tercih edilen elastomer,
                  mükemmel biyouyumluluk ve geniş, ayarlanabilir yumuşaklık
                  aralığı sunar.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* PC-ABS and PC Blends */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/watershed.jpg"
                    alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PC-ABS ve PC Karışımları
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Gövdeler, muhafazalar, giyilebilir cihazlar ve laboratuvar
                  ekipmanları için çok yönlü seçim; temiz, dayanıklı kozmetik ve
                  medikal sınıfı seçeneklerle yüksek kalıplanabilirlik.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* PEEK */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/peek.jpg"
                    alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">PEEK</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  İmplant prototipleri ve cerrahi aletler gibi zorlu işler için
                  tasarlanmıştır; en üst düzey mukavemet ve ısı/kimyasal direnç
                  sunar.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* Polycarbonate (PC) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/pc_material.webp"
                    alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Polikarbonat (PC)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Şeffaflığı ve dayanıklı performansı sayesinde şeffaf gövdeler,
                  cerrahi aletler ve IV konnektörleri için güvenilir tercihtir,
                  ancak zorlu ortamlarda gerilim çatlamasına dikkat edin.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* Polypropylene (PP) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/im_thermo_2017_enclosure_pp_ltgray_polypropylene.jpg"
                    alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Polipropilen (PP)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Şırıngalar ve hap kapları gibi yüksek hacimli tek kullanımlık
                  ürünler için uygun maliyetli temel malzeme, kimyasal/ısı
                  direnci ve çatlamayı azaltmak için bir miktar esneklik sunar.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* Thermoplastic Elastomers (TPE/TPU) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/resources/medical-injection-molding/tpu-im-img.webp"
                    alt="Medikal Cihaz Geliştirme için Enjeksiyon Kalıplama"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Termoplastik Elastomerler (TPE/TPU)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Yumuşak dokunuşlu tutma yerleri, contalar ve kateterler için
                  tercih edilir, kaplama kalıplanmış tasarımlarda güçlü kimyasal
                  yapışma sağlar.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
