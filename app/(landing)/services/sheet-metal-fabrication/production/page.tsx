"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sac Metal Düşük Hacimli Üretim Hizmeti"
        desc="Tek, güvenilir bir ortakla sac metal tedarik sürecinizi kolaylaştırın. Uzman teknik ve lojistik rehberlik, doğrulanmış denetim dokümantasyonu ve esnek parti üretimi ile desteklenen kaliteyi sağlayabilir, karmaşıklığı azaltabilir ve değişen pazar taleplerine daha hızlı yanıt verebilirsiniz."
        image="/Assets/Images/services/sheet-metal-fabrication/production/smf_moderate_parts_02_600x400-1.png"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        secondButton={{ title: "Üretim Teklifi Başlat", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal Parçalar ve Montajlar için Üretim Yetenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Üretim Yetenekleri
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Üretim malzeme listeniz basit tasarımlar, karmaşık tasarımlar
                veya her ikisini de içerse de, fabrikasyon yeteneklerimiz sac
                metal geometrilerinizi destekleyebilir.
              </p>

              <div className="space-y-4 mb-4">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Zımbalama
                    </span>{" "}
                    daha yüksek hacimlere kolayca ölçeklenen ve paneller,
                    kapaklar, muhafazalar ve gövdeler gibi ürünlerde
                    şekillendirilmiş özellikleri birleştirebilen bir sac kesme
                    işlemidir.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">Bükme</span>{" "}
                    genellikle braketler, montaj parçaları ve şasilerde bulunan
                    karmaşık şekilleri dahil etme yeteneği sunar.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">Montaj</span>{" "}
                    birden fazla sac metal bileşenin bir araya getirilmesi,
                    kaynaklı konstrüksiyonlar, alt montajlar ve özel muhafazalar
                    gibi karmaşık ürünlerin üretime sorunsuz geçişi için bir yol
                    sağlar.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Yüzey İşlem
                    </span>{" "}
                    seçenekleri fonksiyonel ve estetik özellikler sağlar.
                    Uzmanlar, toz boya, kaplama, ıslak boya, maskeleme ve ipek
                    baskı seçenekleriyle yüzey işlem hizmetlerinizi uygular.
                    Gerekirse birden fazla yüzey işlemini birleştirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/smf_complexity_assembly_2.jpg"
                alt="Sac Metal Parçalar ve Montajlar için Üretim Yetenekleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Hint text="Ürün yaşam döngüsünün her aşamasında üretim desteği ile her projede verimlilik oluşturun ve tekrarı azaltın." />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
                  <p className="text-gray-300 text-xs mt-1">Üretim Yolculuğu</p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Üretim Parçalarının İmalat Yolculuğu
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dijital otomasyon ve kapsamlı üretim uzmanlığını kullanarak, son
                kullanım için parça üretme sürecini optimize ettik, böylece
                kaliteli, üretim sınıfı parçaları her zamankinden daha hızlı
                alabilirsiniz. Ürününüzü konseptten tamamlanmaya nasıl
                götürdüğümüzü görmek için videoyu izleyin.
              </p>
              <p className="text-gray-400 text-sm">FASONLY</p>
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
                Teknik Destek
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Bu teknik araçları kullanarak tasarım doğrulamadan pilot
                çalışmalara ve ardından üretime geçiş yapmanıza yardımcı
                olabiliriz:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    3D görselleştirilmiş üretilebilirlik için tasarım (DFM)
                    analizimiz, üretim kalite hedeflerinizi karşılamak için
                    tasarımınızı optimize etmenize yardımcı olur. Ayrıca,
                    tasarımlarınızı basitleştirmek için içgörüler sağlayarak
                    maliyet tasarrufu sağlar.{" "}
                    <a
                      href="#"
                      className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                      Sac metal teklif ve sipariş sürecimiz hakkında daha fazla
                      bilgi edinin →
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Montaj için tasarım (DFA), bir projenin titiz teslimat
                    güvenilirliği ve kalite kriterlerine dayanabileceğini
                    doğrulamaya yardımcı olabilir. Bir tasarımın yeterli takım
                    erişimine ve boşluğuna sahip olduğundan emin olmak, tam
                    üretim başladığında zorluklardan kaçınmanın bir yoludur.
                    Uygulama mühendisleri ekibimiz, montaj için tasarım
                    sorularınızı desteklemek için hazır bekliyor.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Projenizi görüşmek için bugün zaman planlayın →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/support.jpg"
                alt="Teknik Destek"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center">
            <div className="mb-8">
              <p className="text-[#0B1221] font-bold text-2xl md:text-3xl tracking-wider">
                Teslimat ve Lojistik
              </p>
              <p className="text-gray-500 mt-5 text-lg md:text-xl tracking-wide">
                Bir üretim siparişi vermeye hazır olduğunuzda, ekibimiz gerekli
                kalite maddeleri için satın alma siparişinizi inceleyerek* ve
                gerektiğinde parti boyutlarını ve teslimat programlarını
                koordine ederek sizi destekler. *Not: Kalite maddeleri içeren
                satın alma siparişlerinin işlenmesi ek süre alabilir, bu da
                sipariş onaylarının geri dönüş süresini uzatacaktır.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-300">
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
                Not: Kalite maddeleri içeren satın alma siparişlerinin işlenmesi
                ek süre alabilir, bu da sipariş onaylarının geri dönüş süresini
                uzatacaktır.
              </p>
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
                Üretim Malzemeleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Üretim parça uygulamaları için kullanılan yaygın sac metal
                malzemeleri stokluyoruz. Hangi malzeme seçeneğinin projeniz için
                en iyi olduğuna karar vermenize yardımcı olması için malzeme
                karşılaştırma aracımızı deneyin. Araç, aşağıdaki malzemeler için
                şekillendirilebilirlik, korozyon direnci, maliyet etkinliği ve
                daha fazlası açısından malzemeleri karşılaştırır:
              </p>

              <ul className="space-y-2">
                {[
                  "Alüminyum 5052, 6061",
                  "Pirinç C260",
                  "Galvanizli, Galvanizli Tavlanmış (ön kaplamalı çelik)",
                  "Düşük Karbonlu Çelik CR 1008",
                  "Paslanmaz Çelik 304, 316",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/protolabs-sheet-metal-materials-570-x308.jpg"
                alt="Üretim Malzemeleri Karşılaştırma Tablosu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/sheet-metal-powder-coating-570x308.jpg"
                alt="Üretim Yüzey İşlemleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Üretim Yüzey İşlemleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Kapsamlı yüzey işlem seçeneklerimiz, tasarım veya yüzey
                işlemleri ne kadar karmaşık olursa olsun, sac metal
                bileşeninizin veya montajınızın tam gereksinimlerini
                karşılamanıza yardımcı olur. Bu seçenekler, fonksiyonel ve/veya
                estetik yüzey işlem ihtiyaçları olan ürünlerle çalışmak üzere
                tasarlanmıştır.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Toz Boya",
                  "Kaplama",
                  "Islak Boya",
                  "İpek Baskı",
                  "Maskeleme",
                  "Parça İşaretleme",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                100'den fazla yüzey işlem seçeneğimizden oluşan menümüze göz
                atın →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Kalite Süreçleri ve Dokümantasyonu
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Belirli bir parça numarası veya SKU'nun üretimi için bir
                tedarikçiyi nitelendirmek, genellikle süreç kalitesinin bir
                değerlendirmesini gerektirir. Kalite yönetim sistemimiz (QMS),
                parçalarınızın hem süreç içi hem de üretim sonrası kontroller
                almasını sağlar. Ayrıca, kalite kontrol uzmanlarımız her partiyi
                görsel ve boyutsal doğruluk açısından inceler.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Çalışan kalite süreçlerimizin kendi değerlendirmenizi almak için
                aşağıdaki denetim dokümantasyonu menüsünden seçim yapın:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Boyutsal Denetim Raporu",
                  "İlk Ürün Denetimi",
                  "Uygunluk Sertifikası",
                  "Malzeme Sertifikası",
                  "Yüzey İşlem Sertifikası",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-[#96E92A] font-medium hover:text-[#85d122] transition-colors inline-flex items-center gap-2 group">
                Kaliteyi ciddiye alıyoruz. Nasıl olduğunu görün →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-800">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/04_sm_digital_twin_400x400.webp"
                alt="Kalite Süreçleri ve Dokümantasyonu"
                width={400}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/production/batch-production-670x360-1.jpg"
                alt="Parti Üretimi"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Parti Üretimi
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Envanter taşımak ve depolamak maliyetlidir, özellikle de yeni
                ürünleri pazara sunarken olduğu gibi talep tahminleri yapmak
                zorsa. Bu durum için yaygın bir azaltma stratejisi, parti
                üretimi olarak bilinen ürün teslimatlarını kademelendirmek ve
                büyük hacimli envanter almaktan kaçınmaktır.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Dijital teklif sistemimiz, üretim miktarlarını kolayca
                yapılandırmanıza olanak tanır. İstediğiniz miktardaki parça için
                fiyat ve teslim süresini aldıktan sonra, ekibimiz bu toplam
                miktarı partilere dönüştürmek için sizinle çalışabilir. Toplam
                parça miktarını tek bir sevkiyatta göndermek yerine, ideal bir
                parti boyutu (toplamın alt miktarı) ve teslimat programı
                belirlemek için sizinle çalışacağız.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Parti üretim siparişinizle devam etmek için,{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  müşteri hizmetleri ekibimizle iletişime geçin
                </a>{" "}
                ve aşağıdaki bilgileri sağlayın:
              </p>

              <ul className="space-y-2">
                {[
                  "İstenen parti boyutu (her sevkiyatta ihtiyaç duyulan parça sayısı)",
                  "İstenen sevkiyat programı/sıklığı (her partinin konumunuza ne sıklıkta ulaşması gerektiği)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
