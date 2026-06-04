"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState<
    "standard" | "advanced" | "finishing"
  >("standard");
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Bileşenler ve Montajlar için Sac Metal Prototip Hizmeti"
        desc="Tasarımlarınız için dakikalar içinde fiyatlandırma ve teslim süreleri alın ve hassas fabrikasyon prototipleri günler içinde teslim alın. Her teklifte, üretilebilirlik için 3D görselleştirilmiş tasarım geri bildirimi sunuyoruz, ayrıca parça tasarımlarını doğrulayabilir ve güvenle üretime geçiş yapabilirsiniz."
        image="/Assets/Images/services/sheet-metal-fabrication/prototyping/hero.png"
        firstButton={{ title: "Proje Başlat", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Jump to Section Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-[#0B1221] mb-4">
                  Sac Metal Prototip Hizmetimiz Hakkında Daha Fazla Bilgi
                </h3>
                <div className="space-y-2">
                  {[
                    "Sac Metal Yetenekleri",
                    "Teslim Sürelerimiz Nasıl Çalışır",
                    "Sac Metal İmalatının Prototipleme Avantajları",
                    "Prototipleme için Ürün Uygulamaları",
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
              <div id="neden-fasonly" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Neden Fasonly?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Dakikalar içinde teklifler ve günler içinde parçalar Hem basit
                  hem de karmaşık sac metal tasarımlarını geleneksel yöntemlerin
                  çok daha kısa bir süresinde tekliflendiriyor ve üretiyoruz.
                  Pazartesi günü parçalarınızı yükleyin, yapılandırın ve sipariş
                  edin, Cuma günü masanızda olsunlar. Tekrarlanabilir süreç
                  kalitesi Üreticilerimiz, yüksek kaliteli sac metal bileşenler
                  ve montajlar üretmede on yılların deneyimine sahiptir, böylece
                  siz ve paydaşlarınız tasarımınızın doğru bir temsilini
                  değerlendirebilirsiniz. Parça kalitesini nasıl koruduğumuz
                  hakkında daha fazla bilgi edinin. Her tasarımda
                  üretilebilirlik analizi Potansiyel üretim zorluklarına ilişkin
                  3D görselleştirilmiş içgörüler için sac metal üretilebilirlik
                  için tasarım (DFM) analiz aracımızdan yararlanın ve
                  tasarımınızı hız ve maliyet için optimize etme fırsatlarını
                  belirleyin. Her ay binlerce benzersiz tasarım üretme
                  kapasitesi Her ay her şekil ve boyutta binlerce benzersiz sac
                  metal tasarımı üretiyoruz. Otomatik sürecimiz zamanında
                  teslimat güvenilirliği sağlar, böylece sevkiyatınız zamanında
                  ulaşır. Montajlar ve karmaşık projeler için gelişmiş tasarım
                  desteği Uygulama mühendisleri ekibimiz, tasarımınızın tüm
                  yönleri hakkında size danışmanlık yapmak için hazır olan
                  eğitimli sac metal uzmanlarıdır. İster özellik yerleşimi,
                  ister takım seçimi veya montaj yapım seçenekleri hakkında
                  tavsiye arıyor olun, sorularınızı ücretsiz 30 dakikalık sanal
                  bir oturumda yanıtlıyoruz. Oturumunuzu bugün planlayın.
                </p>
              </div>
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
                Sac Metal Yetenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Prototip bileşenleriniz ve montaj projeleriniz için geniş bir
                sac metal fabrikasyon yetenekleri yelpazesine sahibiz. Üretim
                süreçleri koleksiyonumuz, daha basit düz geometriler, karmaşık
                şekillendirilmiş parçalar ve karmaşık kaynaklı montajları
                benzersiz hızlarda elde etmenizi sağlar.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Yeteneklerimizi keşfedin:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Lazer kesim",
                  "Zımbalama",
                  "Şekillendirme ve Bükme",
                  "Donanım yerleştirme",
                  "Kaynak",
                  "Montaj",
                  "Yüzey İşlem",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-800">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/prototyping/smf-countersink-img.jpg"
                alt="Sac Metal Yetenekleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Teslim Sürelerimiz Nasıl Çalışır
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Dijital sac metal fabrikasyon hizmetimiz, bileşenleri ve
              montajları günler içinde size ulaştırır. Hassas kaliteli
              parçalarınızın nasıl nitelendirileceğini görmek için aşağıdaki
              aracı inceleyin.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "standard"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Standart (3-5 Gün)
            </button>
            <button
              onClick={() => setActiveTab("advanced")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "advanced"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Gelişmiş Yetenekler
            </button>
            <button
              onClick={() => setActiveTab("finishing")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "finishing"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Yüzey İşlem ve Montaj
            </button>
          </div>

          {/* Tab Content - Standard (3-5 Day) */}
          {activeTab === "standard" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Fabrikasyon Yetenekleri
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Uygunluk
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Uygulamalar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-gray-600 bg-white align-top">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Kesim (lazer veya zımba)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Çapak Alma
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Şekillendirme/Bükme (≤12 büküm)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Donanım yerleştirme (kapsamlı PEM® kütüphanesi)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Kılavuz çekme/Havşa açma
                        </li>
                      </ul>
                    </td>
                    <td className="p-4 text-gray-600 bg-gray-50 align-top">
                      Malzeme kalınlıkları: ≤0,125 inç (≤3,175mm)
                    </td>
                    <td className="p-4 text-gray-600 bg-white align-top">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Braketler
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Kapaklar
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Paneller
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Düz geometriler
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                          Montaj parçaları
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Tab Content - Advanced Capabilities */}
          {activeTab === "advanced" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Fabrikasyon Yetenekleri
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Tüm 3 günlük fabrikasyon seçenekleri artı CNC işlenmiş
                      özellikler (cepler, flanşlar, diğer özellikler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Ek şekillendirme seçenekleri (karmaşık sıralamalar veya
                      kurulumlar, &gt;12 büküm)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Karmaşık şekillendirilmiş özellikler (kıvırmalar,
                      itmeler/ofsetler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Zımba ile şekillendirilmiş özellikler
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Uygunluk
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Tüm malzeme kalınlıkları:
                </p>
                <p className="text-gray-600 text-sm font-mono">
                  0,024 inç - 0,250 inç (0,61mm - 6,35mm)
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Uygulamalar
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Karmaşık iç bileşenler
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Kalite veya işlevsellik için kritik özelliklere sahip
                      parçalar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Muhafaza veya şasi gövdeleri
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab Content - Finishing & Assembly */}
          {activeTab === "finishing" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Fabrikasyon Yetenekleri
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Kaynak (1 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Montaj (1-3 gün ekler)
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-[#0B1221] mt-6 mb-4">
                  Ek Özelleştirmeler
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Toz boya (2 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Kaplama (2 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Maskeleme (1-2 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      İpek baskı (1 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Parça işaretleme (1 gün ekler)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Teslim Süreleri
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  3 Gün Teslim Süresi
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  5 Gün Teslim Süresi
                </p>
                <h3 className="text-xl font-bold text-[#0B1221] mt-6 mb-4">
                  Uygulamalar
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Kaynaklı Konstrüksiyonlar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Çok bileşenli montajlar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Son kullanıcıya yönelik projeler
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Yüzey İşlem Seçenekleri
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Toz boya (2 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Kaplama (2 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Maskeleme (1-2 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      İpek baskı (1 gün ekler)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                    <span className="text-gray-600 text-sm">
                      Parça işaretleme (1 gün ekler)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Sac Metal İmalatı ile Prototiplemenin Avantajları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Tasarımınızı uygun maliyetle doğrulayın
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tasarımınızı sert takım gibi daha yüksek ön yatırım gerektiren
                  teknolojilere geçirmeden önce, sac metal imalatı, tasarımınızı
                  son kullanım üretimi için dondurmadan önce işlevselliğini ve
                  fiziksel veya mekanik özelliklerini doğrulamak için uygun
                  maliyetli bir yol sağlar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Yüksek düzeyde özelleştirilebilir süreçler birçok geometri
                  türü üretir
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Karmaşık ürün uygulamaları genellikle çeşitli şekil, boyut ve
                  özellik setlerine sahip sac metal parçalar gerektirir. Sac
                  metal imalatı, çeşitli özel tasarımlar elde etmek için lazer
                  kesim, pres freni şekillendirme ve kaynak gibi birkaç üretim
                  teknolojisini birleştirir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Tasarımınızı gerçek dünya analoguyla simüle edin
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bir ürünü pazara sunmak için hangi sertifikaların
                  gerekebileceğine bağlı olarak, sac metal imalatı test amacıyla
                  bir tasarım üretebilir. Bunu yapmak, yüksek ön takım
                  maliyetlerinden kaçınma gibi ek bir fayda sağlar. Makine
                  kurulum maliyetleri, üretilen her ek birim ile hızla amorti
                  edilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Bol miktarda tasarım esnekliği ve maliyet optimizasyonu
                  yolları
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Birçok üretim teknolojisi gibi, sac metal imalatı da
                  ödünleşimlere yabancı değildir. Sac metal yüksek derecede
                  tasarım esnekliği sunarken, tasarım basitleştirmesi önemli
                  maliyet tasarrufları sağlayabilir. Örneğin, bir deliği veya
                  kesiği bir büküm hattından birkaç milimetre uzağa taşımak,
                  maliyetli CNC işleme veya elle delme işlemlerini ortadan
                  kaldırarak önemli tasarruflar sağlayabilir.
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
              Prototipleme için Ürün Uygulamaları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Sac metal imalatı, her şekil ve boyutta geometriler üretebilen bir
              üretim süreçleri koleksiyonudur. Pratik anlamda bu, aşağıdakiler
              gibi birçok ürün türünün ihtiyaçlarını karşılayabileceği anlamına
              gelir:
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700 min-w-[250px]">
                    Genel Ürünler
                  </th>
                  <th className="text-left p-4 font-semibold text-lg min-w-[300px]">
                    Özel Uygulamalar
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600 align-top bg-white">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Braketler</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Baralar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Kapaklar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Elektronik muhafazaları</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Gövdeler</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Mekanik şasiler</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Montaj parçaları</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Paneller</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Kaynaklı konstrüksiyonlar</span>
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 align-top bg-gray-50">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Ses/Görüntü teknolojisi gövdeleri</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Ticari aydınlatma bileşenleri</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>
                          Bilgisayar ürünleri (örn. sunucu rafları, veri
                          depolama)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Enerji depolama cihazları</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Robotik çözümleri</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Sağlam endüstriyel ürünler</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span>Bilimsel veya medikal aletler</span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
