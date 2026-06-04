"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sac Metal Montajları"
        desc="Beş gün kadar kısa sürede teslim edilen özel fabrikasyon montajlar alın. Montaj dosyanızı yükleyerek çevrimiçi teklif alın"
        image="/Assets/Images/services/sheet-metal-fabrication/assembly/hero.png"
        firstButton={{ title: "Montajınızı Yükleyin", route: "/" }}
        simple
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
                    "Dosya formatı ve yapılandırma",
                    "Malzemeler",
                    "Montaj yapım kılavuzları",
                    "Donanım yerleştirme",
                    "Kaynak ve perçinleme",
                    "Montajlar için yüzey işlem seçenekleri",
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
              <div id="sac-metal-montaj" className="scroll-mt-32">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Çevrimiçi sac metal montaj hizmetimiz, günler içinde teslim
                  edilen fonksiyonel, son kullanım ürünleri oluşturmanıza olanak
                  tanır. Her projede, üretilebilirlik için tasarım (DFM) geri
                  bildirimi ve uzman seviyesinde destek alırsınız. Estetik
                  gereksinimlerinizi karşılamak için geniş bir yüzey işlem
                  seçeneği yelpazesinden seçim yapabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fabrikasyon montajlar sıklıkla şunlar için kullanılır:
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "Fonksiyonel prototipleme",
                "Ürün testi ve kalifikasyon",
                "Düşük hacimli, son kullanım üretimi",
                "Pilot çalışmalar",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Şimdi Planla
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Dosya Formatı ve Yapılandırma
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Montajlar için tercih edilen dosya formatları, üst düzey montaj
              STEP dosyalarıdır. SOLIDWORKS kullanıcıları için, ayrı bileşen
              dosyalarına (.sldpart) sahip bir katı montaj dosyası (.sldasm)
              tercih edilir.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Projeniz bir kaynaklı konstrüksiyon ise veya kaynak gereksinimleri
              varsa, lütfen CAD gönderiminizle birlikte bir 2B çizim sağlayın.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Fasonly'nin proje bileşenlerinizi monte etmeyeceği durumlarda,
              katı (veya üst düzey) bir montaj dosyası gerekli değildir.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Materials */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Malzemeler
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Kolayca temin edilebilen ve nihai bir montaj halinde kolayca
                inşa edilebilen malzemeler arasından seçim yapın. Tüm malzeme
                türleri için endüstri standardı malzeme kalınlıkları kullanılır.
                Fabrikasyon montajlarda bulunan yaygın malzemeler şunlardır:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Alüminyum 5052-H32",
                  "Düşük karbonlu çelik CR 1008",
                  "Paslanmaz çelik 304/304L",
                  "Paslanmaz çelik 316/316L",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4">
                Bu malzemelerin her biri mükemmel şekillendirilebilirlik ve
                kaynaklanabilirlik özelliklerinin yanı sıra zorlu ortamlarda
                üstün korozyon direnci sağlar.
              </p>

              <p className="text-gray-600 leading-relaxed mb-2">
                Ön kaplamalı çelikler (galvanizli veya galvanizli tavlanmış)
                gibi ek malzemeler mevcuttur. Ancak, ön işlem görmüş kaplama, bu
                malzemeleri perçin tabanlı montaj yapımı için aday haline
                getirir.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Malzeme karşılaştırma aracımız, sac metal tipleri ve kalınlık
                aralıkları hakkında daha fazla bilgi sunar.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/material_smf_low-carbon-steel-cr-galvannealed_v2_hr.jpg"
                alt="Fabrikasyon Montajlar için Malzemeler"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Assembly Construction Guidelines */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Montaj Yapım Kılavuzları
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Montaj tasarımınızı özelleştirmek birçok şekilde olabilir. Bir
                sonraki sac metal projeniz için aşağıdakileri göz önünde
                bulundurun.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold">
                  Maksimum montaj boyutu (tamamen inşa edildiğinde):
                </span>{" "}
                47 inç x 39 inç x 36 inç (1194mm x 991mm x 914mm)
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold">Mevcut montaj yöntemleri:</span>
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Kaynak (dikiş, teyel, dikişli kaynak teknikleri)",
                  "Perçinleme (pop ve katı perçinler)",
                  "Donanım yerleştirme",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed italic">
                Soğuk haddelenmiş galvanizli tavlanmış çelik, mukavemet ve
                korozyon direnci için harika bir seçimdir.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/insert-img.jpg"
                alt="Montaj Yapım Kılavuzları"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formed Features */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Şekillendirilmiş Özellikler
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Doğrusal bükme (pres fren ile) 0,010 inç ile 1 inç (0,254mm
                    ile 25,4mm) arasında takım seçenekleri ile.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Kademeli şekillendirme veya haddeleme şekillendirme
                    teknikleri kullanarak ek fonksiyonel veya estetik
                    gereksinimler için büyük yarıçaplı bükme.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Panjur, kaburga, çukur gibi zımba ile şekillendirilmiş
                    özellikler.
                  </span>
                </li>
              </ul>
            </div>

            {/* Machined Features */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                İşlenmiş Özellikler
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                İşlem sonrası CNC işleme, tipik olarak daha karmaşık
                geometrilerde bulunan ek özellikler sunabilir. Bu tasarım
                elemanlarına yalnızca lazer kesim, zımbalama veya pres fren
                şekillendirme ile ulaşmak zordur. Olası özellikler şunları
                içerir:
              </p>
              <ul className="space-y-2">
                {[
                  "Cepler",
                  "Şekillendirme sırasında deformasyon riski olan delikler, kesikler veya özellikler",
                  "Flanş uzunluğu azaltma",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tolerances */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Toleranslar
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Tipik sac metal toleransları montajlar için geçerlidir. Daha
                    fazla detay için{" "}
                    <a
                      href="#"
                      className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                      tasarım kılavuzlarımızı
                    </a>{" "}
                    inceleyin.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Kümülatif tolerans ve uyum dahil olmak üzere belirli
                    tolerans soruları, ücretsiz{" "}
                    <a
                      href="#"
                      className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                      30 dakikalık tasarım incelemesi
                    </a>{" "}
                    planlayarak ele alınabilir.
                  </span>
                </li>
              </ul>
            </div>

            {/* Inspection Reporting Options */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Denetim Raporlama Seçenekleri
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Malzeme ve/veya yüzey işlem sertifikaları mevcuttur*
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    İlk Ürün Denetimi dahil denetim dokümantasyonu*
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Tüm parçalar ve montajlar, gönderim öncesinde Fasonly iş
                    standartlarına göre boyutsal ve görsel doğruluk açısından
                    denetlenir.
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-xs italic mt-3">
                *Siparişiniz verilmeden önce talep edilmelidir. Çevrimiçi
                teklifinizde gösterilen seçenekler arasından seçim yapın.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Donanım Yerleştirme Kılavuzları
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                PEM ve Southco gibi markalardan kapsamlı bir stoklanmış bağlantı
                elemanı kütüphanesi mevcuttur.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold">Dosya Biçimlendirme:</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Önerilen: Herhangi bir donanımı ana sac metal gövdeden ayrı
                    katı gövdeler olarak 3B CAD modelinize dahil edin. Mümkün
                    olduğunda endüstri standardı donanım parça numaralarını
                    kullanın (örn., CLS-M6-1)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Alternatif: CAD dosyanızı donanım olmadan yükleyin ve
                    donanım türlerini ve konumlarını belirten bir 2B çizim
                    ekleyin.
                  </span>
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">Teslim Süresi:</span> Parça
                tasarımınıza donanım eklemek teslim süresine ek süre eklemez.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/welding-smf.jpg"
                alt="Donanım Yerleştirme Kılavuzları"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Text Left, Text Right (two columns of text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Examples of Hardware Types */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Projenizi Özelleştirmek için Mevcut Donanım Türlerine Örnekler:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Kendinden sıkışan somunlar",
                  "Kendinden sıkışan ayaklar",
                  "Gömme başlı saplamalar",
                  "Minyatür kendinden sıkışan somunlar",
                  "Kendinden sıkışan gömme somunlar",
                  "Gömme başlı pimler",
                  "Kendinden sıkışan kör bağlantı elemanları",
                  "İnce sac gömme olmayan saplamalar",
                  "Kendinden sıkışan kilitli somunlar",
                  "Kendinden sıkışan mikro pimler",
                  "Panel bağlantı elemanları",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Design Guidelines */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Tasarım Kılavuzları
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Ek parçaların sac metali doğru şekilde kavraması için,
                    donanım ek parçasının malzemesi, yerleştirildiği malzemeye
                    eşit veya daha büyük bir sertliğe sahip olmalıdır. Donanım
                    ve malzeme uyumluluğu hakkında daha fazla ayrıntı,
                    Üretilebilirlik için Tasarım Araç Setimizde bulunabilir.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">
                    Etkili donanım entegrasyonu hakkındaki tasarım ipucumuz,
                    donanım kullanım durumlarını ve parça yerleştirme
                    hususlarını kapsar.
                  </span>
                </li>
              </ul>
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
                Montajlar için Yüzey İşlem Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Özellik veya geometri özelleştirmesine ek olarak, bileşenler ve
                montajlar için yüzey işlem hizmetlerimiz, estetik
                gereksinimlerinizin özelleştirilmesine olanak tanır. Yüzey işlem
                seçeneklerimiz şunları içerir:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Kaplama",
                  "Toz boya",
                  "Islak boya",
                  "Maskeleme",
                  "Parça işaretleme",
                  "Metal yüzey işleme",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-2">
                <span className="font-semibold">Teslim Süresi:</span> Çoğu yüzey
                işlem seçeneği, işlem başına 1-2 gün ekler. Daha fazla detay
                için{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  yüzey işlem seçenekleri sayfamızı
                </a>{" "}
                ziyaret edin.
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                Bazıları, parçalar bitirilene kadar bitmiş sayılmaz der.
                Parçalarınızı bir sonraki seviyeye taşımak için seçeneklerinizi
                keşfedin.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/assembly/finishing-options.jpg"
                alt="Montajlar için Yüzey İşlem Seçenekleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
