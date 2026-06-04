import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-36 bg-white">
      <ServicesHero
        title="Çevrimiçi CNC İşleme Hizmeti"
        desc="İşlenmiş prototipler ve üretim parçaları 1 gün kadar kısa sürede. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/injection-molding/slr-hero.webp"
        firstButton={{ title: "Teklif Al", route: "/" }}
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
              {/* What is Liquid Silicone Rubber Molding? Section */}
              <div
                id="sıvı-silikon-kauçuk-kalıplama-hakkında"
                className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Sıvı Silikon Kauçuk (LSR) Kalıplama Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Sıvı silikon kauçuk (LSR) kalıplama sürecimiz, 15 gün veya
                  daha kısa sürede özel prototipler ve son kullanım üretim
                  parçaları üretir. Maliyet etkin takım ve hızlandırılmış üretim
                  döngüleri sunan alüminyum kalıplar kullanıyoruz ve çeşitli
                  kalite ve sertlik derecelerinde LSR malzemeleri stokluyoruz.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Silikon kauçuk kalıplama için yaygın uygulamalar:
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
              Sıvı Silikon Kauçuk Kalıplama Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Silikon kauçuk kalıplama için temel kılavuzlarımız, parça
              kalıplanabilirliğini iyileştirmeye, kozmetik görünümü geliştirmeye
              ve genel üretim süresini azaltmaya yardımcı olacak önemli tasarım
              hususlarını içerir.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              Daha fazla detay için tasarım kılavuzları sayfamızı görüntüleyin.
              →
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
                {/* Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Boyut
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    12 inç x 8 inç x 4 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    304,88mm x 203,2mm x 101,6mm
                  </td>
                </tr>

                {/* Volume Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Hacim
                  </td>
                  <td className="p-4 text-gray-600 bg-white">13,3 inç küp</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    217.948 mm küp
                  </td>
                </tr>

                {/* Depth Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Derinlik
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Herhangi bir ayırma hattından 2 inç'ten fazla olmamalıdır;
                    daha derin parçalar daha küçük bir çevre ile sınırlıdır
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Herhangi bir ayırma hattından 50,88mm'den fazla olmamalıdır;
                    daha derin parçalar daha küçük bir çevre ile sınırlıdır
                  </td>
                </tr>

                {/* Projected Mold Area Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Öngörülen Kalıp Alanı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">48 inç kare</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    30.968 mm kare
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Toleranslar:</span>{" "}
              Fasonly, +/- 0,003 inç (0,08mm) işleme toleransını +/- 0,025
              inç/inç (0,025mm/mm) doğrusal toleransla koruyabilir.
            </p>
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
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/silicone-rubber-parts-570x308-1.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sıvı Silikon Kauçuk Malzemeler
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <ul className="space-y-3">
                {[
                  "Standart Silikon (30, 40, 50, 60 ve 70 sertlik dereceleri)",
                  "Medikal Sınıfı Silikon",
                  "Optik Sınıfı Silikon",
                  "Florosilikon (yakıt ve yağa dayanıklı)",
                ].map((material, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Title and Table */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yüzey İşlem Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-3 font-semibold border-r border-gray-700">
                        YÜZEY
                      </th>
                      <th className="text-left p-3 font-semibold">AÇIKLAMA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        finish: "PM-F0",
                        desc: "kozmetik olmayan, Fasonly'nin takdirine göre bitirme",
                      },
                      {
                        finish: "PM-F1",
                        desc: "düşük kozmetik, çoğu takım izi giderilmiş",
                      },
                      {
                        finish: "PM-F2",
                        desc: "kozmetik olmayan, EDM izin verilebilir",
                      },
                      { finish: "SPI-C1", desc: "600 grit taş, 10-12 Ra" },
                      {
                        finish: "PM-T1",
                        desc: "SPI-C1 + hafif boncuk püskürtme",
                      },
                      {
                        finish: "PM-T2",
                        desc: "SPI-C1 + orta boncuk püskürtme",
                      },
                      { finish: "SPI-B1", desc: "600 grit zımpara, 2-3 Ra" },
                      {
                        finish: "SPI-A2",
                        desc: "2 numara elmas cilalama, 1-2 Ra",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="p-3 text-gray-700 font-mono text-sm">
                          {row.finish}
                        </td>
                        <td className="p-3 text-gray-600 text-sm">
                          {row.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/lsr-durometer-30-material-9590_composite-fn-1-1.png"
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/metrology-lab-at-proto-labs-570308.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Kalite Denetimleri ve İşlem Sonrası Seçenekler
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Uygulamanızın gereksinimlerine bağlı olarak, silikon kauçuk
                parçalarınız için teklif talep ederken aşağıdakiler arasından
                seçim yapabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Talep üzerine üretim siparişleri için mevcut Kalite Denetimleri
              </h3>

              <ul className="space-y-3">
                {[
                  "Üretilebilirlik İçin Tasarım (DFM) Geri Bildirimi",
                  "Bilimsel Kalıplama Süreç Geliştirme Raporu",
                  "Süreç içi CMM denetimi ve makine izleme",
                  "GD&T ile ilk ürün denetimi (FAI) ve süreç yetenek raporu",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/liquid-silicone-rubber-molding/silicone-rubber-operator-900x400.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sıvı Silikon Kauçuk Kalıplama Hakkında Daha Fazla Bilgi
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Sıvı silikon kauçuk (LSR) kılavuzumuz, elastik malzemenin
                enjeksiyon kalıplama sürecini tartışır ve kalıplanmış LSR
                parçalarını iyileştirmek için kılavuzlar sunar. Termoplastik
                enjeksiyon kalıplama ile bazı ortak benzerlikler olsa da, LSR,
                benzersiz bir tasarım özellikleri setine sahip bir termoset
                malzemedir.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Kılavuzu Oku
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sıvı Silikon Kauçuk Kalıplama Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                LSR'nin esnek yapısı nedeniyle, parçalar kalıptan manuel olarak
                çıkarılır ve bu nedenle, kalıp tasarımına itici pimler dahil
                edilmez. Standart bir alüminyum takım gibi, bir LSR kalıplama
                takımı, LSR kalıplama sürecine dayanacak şekilde üretilmiş
                yüksek sıcaklıkta bir takım oluşturmak için CNC işleme
                kullanılarak üretilir. Frezelemeden sonra, takım müşteri
                spesifikasyonlarına göre elle parlatılır, bu da altı standart
                yüzey işlem seçeneğine olanak tanır.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Bitmiş takım, en tutarlı LSR parçalarını üretmek için atış
                boyutunun hassas kontrolü için hassas dişli olarak ayarlanmış
                gelişmiş bir LSR'ye özel enjeksiyon kalıplama presine yüklenir.
                LSR termoset bir polimer olduğundan, kalıplanmış durumu
                kalıcıdır - bir kez ayarlandığında, bir termoplastik gibi tekrar
                eritilemez. Çalıştırma tamamlandığında, parçalar (veya ilk
                numune çalıştırması) kutulanır ve kısa bir süre sonra
                gönderilir.
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
                    LSR Kalıplama Süreci
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
