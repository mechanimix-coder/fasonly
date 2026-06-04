"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="CNC İşleme için Kalite Önlemleri"
        desc="Kaliteli parçaları tutarlı bir şekilde üretmek için dijital üretim ve kalite kontrol süreçlerini nasıl kullandığımız"
        image="/Assets/Images/services/cnc-machining/qualityHero.png"
        firstButton={{ title: "Teklif Al", route: "/" }}
        secondButton={{ title: "Denetimi Görüntüle", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Video Player on Left, Text on Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
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
                    Kalite Standartları Genel Bakış
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Kalite İş Standartlarımızda ve DNA'mızdadır
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kaliteye olan bağlılığımız üretim süreci boyunca belirgindir ve
                bunu ilk etkileşiminizden itibaren deneyimleyeceksiniz. Teklif
                için bir CAD dosyası gönderdiğinizde, tasarımınızın analizini
                alırsınız.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Otomatik üretilebilirlik için tasarım analizimiz, potansiyel
                sorunları hızla tanımlar, örneğin:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Çok ince duvarlar",
                  "Çok büyük parçalar",
                  "Diş açmaya uygun delikler",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bu uyarılardan birini alırsanız, modelinizi düzeltmek için
                önerilen bir çözüm içerdiğini de fark edeceksiniz. Tek bir
                tıklamayla, sorunu kabul edip olduğu gibi devam etmeyi veya geri
                dönüp yeniden tasarlayıp modelinizi yeniden göndermeyi
                seçebilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">
                  Kalite Teslimatına Adanmış
                </span>
                <br />
                Misyonumuz her seferinde harika parçalar teslim etmektir. Bunu
                yapmak için, açıkça belgelenmiş iş standartları ve prosedürleri
                kullanıyoruz. Hataları en aza indirmek için, özel yazılımımız
                fabrika CNC makinelerimize her benzersiz geometride süreç içi
                kalite kontrolleri yapmalarını emreder. Fabrikalarımızda veya
                Fasonly Network aracılığıyla üretilmiş olsun, parça
                tamamlandıktan sonra, kalite kontrol uzmanlarımız devralır ve
                fiziksel parçayı 3B modelinizle (veya gerekirse çıktınızla)
                tutarlılığı sağlamak için görsel ve boyutsal olarak denetler.
              </p>
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right (Inspection Documentation) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/012-pl_brandcampaign_2024_techinical-expert-test.jpg"
                  alt="Kalite denetimi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                CNC İşleme Projeleri için Denetim Dokümantasyonu
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modellerinizin karmaşıklığına bağlı olarak CNC işlenmiş parça
                siparişleriniz için birden fazla kalite denetim dokümantasyonu
                biçimi arasından seçim yapabilirsiniz. Proje gereksinimlerinize
                bağlı olarak, aşağıdaki raporlar çevrimiçi teklifiniz içinde
                mevcuttur. Ayrıca, Uygunluk Sertifikaları, Malzeme Sertifikaları
                ve Donanım Sertifikaları talep edebilirsiniz.
              </p>
              <ul className="space-y-2">
                {[
                  "Temel Üretim/Kalite Denetim Raporu",
                  "Boyutsal Denetim Raporu",
                  "İlk Ürün Denetimi",
                  "Üretim Parçası Onay Süreci (PPAP)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3 - Image Right, Text Left (Quality Process) */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Kalite Sürecimiz
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tesisimizden çıkan her parça titiz kalite kontrol
                kontrollerinden geçer. İlk malzeme doğrulamasından son boyut
                denetimine kadar, her spesifikasyonun karşılandığından emin
                oluyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kalite yönetim sistemimiz ISO 9001:2015 sertifikalıdır ve
                endüstri standartlarına sıkı sıkıya bağlılığı sürdürüyoruz. PPAP
                seviye 3 dokümantasyonuna veya basit COC'ye ihtiyacınız olsun,
                sizi koruyoruz.
              </p>
              <ul className="space-y-2">
                {[
                  "ISO 9001:2015 Sertifikalı",
                  "Havacılık için AS9100D",
                  "Medikal Cihazlar için ISO 13485",
                  "ITAR Kayıtlı",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/quality_control.jpg"
                  alt="Kalite kontrol"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
              CNC İşleme için Kalite Denetimleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Main Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Faydalar
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[200px]">
                    Rapor Olmadan Denetim
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[220px]">
                    Temel Üretim/Kalite Denetim Raporu
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[220px]">
                    Boyutsal Denetim Raporu
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[220px]">
                    İlk Ürün Denetimi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-3 text-gray-700 font-medium align-top">
                    Faydalar
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Parçalar boyutsal ve görsel olarak denetlenir. Uygunluk
                    Sertifikası mevcuttur, ancak ölçüm sonuçları dahil değildir.
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Parçalar boyutsal ve görsel olarak denetlenir. İlgili
                    ölçümleri içeren bir denetim raporu dahildir.
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Hassas işlenmiş parçalar için 2B çizim gerektirmeden çok
                    sayıda boyutsal spesifikasyonu doğrular. Hızlı teslim
                    parçalar 2B çizim gerektirir. GD&T denetlenmez.
                  </td>
                  <td className="p-3 text-gray-600 text-sm align-top">
                    Örnek parçanın, GD&T dahil olmak üzere 2B çizimde sağlanan
                    tüm boyutlara uygun olduğunu doğrular. Sonuçlar AS9102
                    formatında sağlanır.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mb-12 p-3 bg-[#F0F8FF] rounded-lg text-center">
            <p className="text-sm text-gray-500 italic">
              *Not: Yetenekler üretim sahasına göre değişiklik gösterebilir
            </p>
          </div>

          {/* Sampling-Based Inspection Process Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-4 text-center">
              Fasonly'nin Örnekleme Tabanlı Denetim Süreci
            </h3>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Hızlı geri dönüş sürelerini korurken tutarlı kaliteyi sağlamak
              için Fasonly, BIR/DIR denetim raporları için bir partideki her
              parçayı denetlemek yerine örnekleme tabanlı bir denetim süreci
              kullanır. Örneklem boyutları, aşağıdaki tabloda belirtildiği gibi
              toplam parti miktarına göre seçilir ve boyutsal doğruluk ve
              işçiliğin güvenilir doğrulamasını sağlamak için tasarlanmıştır.
            </p>

            {/* Sample Size Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      Parti Boyutu
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      1 - 50
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      51 - 90
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      91 - 150
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      151 - 280
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      281 - 500
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      501 - 1.200
                    </th>
                    <th className="text-center p-3 font-semibold border-r border-gray-700">
                      1.201 - 3.200
                    </th>
                    <th className="text-center p-3 font-semibold">
                      3.201 - 10.000
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-3 font-semibold text-[#0B1221] text-center">
                      Örneklem Boyutu
                    </td>
                    <td className="p-3 text-gray-600 text-center">1</td>
                    <td className="p-3 text-gray-600 text-center">2</td>
                    <td className="p-3 text-gray-600 text-center">3</td>
                    <td className="p-3 text-gray-600 text-center">5</td>
                    <td className="p-3 text-gray-600 text-center">8</td>
                    <td className="p-3 text-gray-600 text-center">13</td>
                    <td className="p-3 text-gray-600 text-center">20</td>
                    <td className="p-3 text-gray-600 text-center">32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/pl_brandcampaign_technical_expert_02.webp"
                  alt="Uzman desteği"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                CNC İşleme Uzmanlarından Destek
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tasarımınızı, sahip olabileceğiniz her türlü üretilebilirlik
                sorusunu yanıtlayabilecek bir CNC işleme uygulama mühendisiyle
                tartışın. Yaygın tasarım inceleme konuları arasında maliyet
                optimizasyonu, toleranslar, diş açma ve yüzey işlem seçenekleri
                yer alır.
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Bugün ücretsiz sanal toplantı planlayın →
              </a>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Havacılık Uygulamaları için İşlenmiş Parçalar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                AS9100, FAI, malzeme izlenebilirliği, NADCAP sertifikalı
                kaplamalar ve tam teknik çizim ve kalite gereksinim incelemeleri
                gibi yeteneklerle, parçalarınızı tasarlandığı gibi, 1 iş günü
                kadar kısa sürede size ulaştırabiliriz. Bu, iterasyon süresini
                kısaltır ve havacılık endüstrisi için kritik ihtiyaçlar olan
                nihai parça tasarımlarına geçişinizi hızlandırır.
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/quality/comparison-guide.jpg"
                  alt="Havacılık parçaları"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
