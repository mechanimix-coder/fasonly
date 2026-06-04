"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="CNC Tornalama Hizmeti"
        desc="Hızlı prototipleme ve son kullanım üretimi için kaliteli özel tornalanmış parçalar alın. Teslim süreleri 1 gün kadar kısadır."
        image="/Assets/Images/services/injection-molding/cnc_turn_2017_cylindr_al_sharpedge_.webp"
        firstButton={{ title: "Teklif Al", route: "/" }}
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
              {/* What is CNC turning services? Section */}
              <div id="cnc-tornalama-hizmetleri-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  CNC Tornalama Hizmetleri Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  CNC tornalama sürecimiz, 1 gün kadar kısa sürede özel
                  prototipler ve son kullanım üretim parçaları üretir. Eksenel
                  ve radyal delikler, düz yüzeyler, kanallar ve yuvalar gibi
                  özelliklerin işlenebilmesi için canlı takım tezgahına sahip
                  bir CNC torna tezgahı kullanıyoruz.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  CNC tornalama genellikle şunlar için kullanılır:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "fonksiyonel prototipler ve son kullanım parçaları",
                    "silindirik özelliklere sahip parçalar",
                    "eksenel ve radyal delikler, düz yüzeyler, kanallar ve yuvalar içeren parçalar",
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
        title="CNC İşleme Tasarım Kılavuzu"
        desc="Bu CNC işleme kılavuzunda, prototipleme ve üretim için verimli, üretilebilir metal ve plastik parçaların nasıl oluşturulacağını öğreneceksiniz."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              CNC Tornalama için Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              CNC tornalama için temel kılavuzlarımız, parça üretilebilirliğini
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
                {/* Maximum Dimensions Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3 align-top">
                    Maksimum Boyutlar
                  </td>
                  <td className="p-4 text-gray-600 bg-white align-top">
                    <div className="mb-2">
                      <span className="font-medium">Çap:</span> 3,95 inç *
                    </div>
                    <div>
                      <span className="font-medium">Uzunluk:</span> 9 inç
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50 align-top">
                    <div className="mb-2">
                      <span className="font-medium">Çap:</span> 100,33mm
                    </div>
                    <div>
                      <span className="font-medium">Uzunluk:</span> 228,6mm
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mb-8 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[#0B1221]">
                *Sert metaller için maksimum çap 2,95 inçtir (75mm)
              </span>{" "}
              malzemeye göre belirli tornalama boyutları için işleme için
              maksimum parça boyutlarının tam listesine bakın.
            </p>
          </div>

          {/* Additional Notes */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1221] mb-4">
              CNC Tornalama Kılavuzlarına Ek Notlar
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Küçük özelliklere izin verilebilir, ancak herhangi bir
                  bölgedeki çap 0,030 inçten (0,76mm) az olmamalıdır.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Keskin konik uçlara izin verilir; açılar 30 dereceden büyük
                  olmalıdır. 0,020 inçten (0,5mm) daha ince duvarlar tipik
                  olarak işleme sürecinde dayanmaz.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              {/* Materials Section */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  CNC Tornalama için Malzemeler
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Çeşitli parça uygulamaları ve endüstriler için uygun bir dizi
                  metal malzeme stokluyoruz. Tornalanmış parçalar için
                  alüminyum, pirinç, düşük karbonlu çelik, paslanmaz çelik,
                  çelik alaşımı ve titanyum arasından seçim yapın.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Alüminyum",
                    "Pirinç",
                    "Düşük Karbonlu Çelik",
                    "Çelik Alaşımı",
                    "Paslanmaz Çelik",
                    "Titanyum",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Surface Finish Options Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  Tornalanmış Parçalar için Yüzey İşlem Seçenekleri
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tornalanan parçalar tipik olarak çok pürüzsüz bir yüzey
                  kalitesine sahiptir. Silindirik alanların işlenmiş yüzey
                  kalitesi, torna tezgahı kullanıldığında freze tezgahına göre
                  tipik olarak çok daha pürüzsüz olacaktır, bu nedenle her iki
                  yöntem için de uygun olan parçalar için işleme yöntemini
                  seçerken bunu göz önünde bulundurun. Düz yüzeyler ve yuvalar
                  gibi canlı takım tezgahı ile kesilen alanlarda görünür takım
                  izleri olabilir.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  İstenirse, metal parçalar ince bir mat yüzey bırakarak hafifçe
                  boncuk püskürtülebilir. Çelik ve paslanmaz çelik gibi sert
                  metaller de metal kıymıkları ve keskin veya pürüzlü alanları
                  temizlemek için hafif boncuk püskürtme ile kenarları
                  kırılabilir (çapak alınabilir).
                </p>
              </div>
            </div>

            {/* Right Column - Image and Table */}
            <div className="flex-1">
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center mb-6">
                <div className="text-center">
                  <Image
                    src={
                      "/Assets/Images/services/cnc-machining/cnc-turning/aluminum-cnc-turned-part-bead-blast.webp"
                    }
                    fill
                    alt="CNC tornalanmış parçalar"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    CNC Tornalanmış Parçalar
                  </p>
                </div>
              </div>

              {/* Table below image */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-3 font-semibold border-r border-gray-700">
                        Malzeme
                      </th>
                      <th className="text-left p-3 font-semibold">
                        İşlem Seçenekleri
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-3 font-semibold text-[#0B1221]">
                        Alüminyum
                      </td>
                      <td className="p-3 text-gray-600">
                        Görünür takım izleriyle kırılmış kenarlar, hafif boncuk
                        püskürtmeyle kırılmış kenarlar veya görünür takım
                        izleriyle keskin kenarlar
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-semibold text-[#0B1221]">
                        Diğer tüm metaller
                      </td>
                      <td className="p-3 text-gray-600">
                        Görünür takım izleriyle kırılmış kenarlar veya hafif
                        boncuk püskürtmeyle kırılmış kenarlar
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              Yüzey İşlem Örnekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Alüminyum parçalar için farklı yüzey işlem seçenekleri: kırık
              kenar, boncuk püskürtme ve keskin kenar.
            </p>
          </div>

          {/* Three Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Image 1 - Aluminum Broken Edge */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-turning/12-cnc-sf-turn-570x308-sproket-aluminum-brokenedge.jpg"
                  }
                  fill
                  alt="Alüminyum parça - kırık kenar"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-[#0B1221]">
                  Malzeme: Alüminyum
                </p>
                <p className="text-gray-500 text-sm">
                  Yüzey İşlemi: Kırık Kenar
                </p>
              </div>
            </div>

            {/* Image 2 - Aluminum Bead Blast */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-turning/13-cnc-sf-turn-570x308-sproket-aluminum-beadblastededge.jpg"
                  }
                  fill
                  alt="Alüminyum parça - boncuk püskürtme"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-[#0B1221]">
                  Malzeme: Alüminyum
                </p>
                <p className="text-gray-500 text-sm">
                  Yüzey İşlemi: Boncuk Püskürtme
                </p>
              </div>
            </div>

            {/* Image 3 - Aluminum Sharp Edge */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-turning/14-cnc-sf-turn-570x308-sproket-aluminum-sharpedge.jpg"
                  }
                  fill
                  alt="Alüminyum parça - keskin kenar"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-[#0B1221]">
                  Malzeme: Alüminyum
                </p>
                <p className="text-gray-500 text-sm">
                  Yüzey İşlemi: Keskin Kenar
                </p>
              </div>
            </div>
          </div>

          {/* Anodizing and Chromate Plating Specifications Table */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-6 text-center">
              Anodizasyon ve Kromat Kaplama Özellikleri
            </h3>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Anodizasyon
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Sert Anodizasyon
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Kromat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-gray-600 align-top">
                      MIL-A-8625 Tip II, Sınıf 2 (Bik)
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      MIL-A-8625 Tip III, Sınıf 2 (Bik)
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      MIL-DTL-5541 Tip II, Sınıf 3 (Clr)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-600 align-top">
                      MIL-A-8625 Tip II, Sınıf 1 (Clr)
                    </td>
                    <td className="p-4 text-gray-600 align-top">&nbsp;</td>
                    <td className="p-4 text-gray-600 align-top">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Hızlı Teslim Bitirme
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Parçaları 4 gün kadar kısa sürede almak için gerekenler (1 gün
                hızlandırma + 3 gün kaplama):
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Alüminyum 6061/6082 ve 7075 malzeme uygunluğu",
                  "Dişli delikler tıkalı",
                  "Maskeleme mevcut değil",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yüksek Gereksinimli Bitirme
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                AS9100 ve ITAR gereksinimleriniz mi var? Yerel hassas işleme
                seçeneğimizi deneyin. Daha karmaşık anodizasyon ve kaplama
                gereksinimleriniz varsa, dijital üretici ağımızla çalışın. Ağ,
                titanyum veya nikel gibi özel bir renk veya malzeme seçeneği
                gerektiren bileşenler için iyi çalışır.
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right (What is CNC Turning) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                CNC Tornalama Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                CNC tornalama, bir metal çubuğu döndürürken bir kesici takımın
                malzemeyi çıkarmak ve nihai parçalar oluşturmak için malzeme
                üzerinde tutulduğu çıkarımlı bir üretim sürecidir. CNC torna
                tezgahlarımız ayrıca iş parçasına düz yüzey özellikleri ve
                delikler işleyebilen canlı takım tezgahı ile donatılmıştır. Dış
                çap (OD) ve iç çap (ID) diş açma da mevcuttur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tornalanmış parçalar daha sonra, görünür takım izleriyle
                işlenmiş olarak bırakılabilir veya boncuk püskürtülebilir.
                Çalıştırma tamamlandığında, parçalar denetlenir, kutulanır ve
                kısa bir süre sonra gönderilir.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🔧</span>
                <p className="text-gray-500 text-sm mt-2">
                  CNC Tornalama Süreci
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
