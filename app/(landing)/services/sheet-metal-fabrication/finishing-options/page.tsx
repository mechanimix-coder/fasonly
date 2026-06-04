"use client";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    { tape: "0,250 inç", rounds: "0,3125 inç" },
    { tape: "0,500 inç", rounds: "0,375 inç" },
    { tape: "0,675 inç", rounds: "0,500 inç" },
    { tape: "0,750 inç", rounds: "0,625 inç" },
    { tape: "1,000 inç", rounds: "0,750 inç" },
    { tape: "2,000 inç", rounds: "1,000 inç" },
  ];

  const metricData = [
    { tape: "6,35mm", rounds: "7,938mm" },
    { tape: "12,7mm", rounds: "9,525mm" },
    { tape: "17,145mm", rounds: "12,7mm" },
    { tape: "19,05mm", rounds: "15,875mm" },
    { tape: "25,4mm", rounds: "19,05mm" },
    { tape: "50,8mm", rounds: "25,4mm" },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sac Metal Yüzey İşlemleri ve İşlem Sonrası"
        desc="Sac metal imalat hizmetimiz, projelerinizi özelleştirmek için geniş bir yüzey işlem ve işlem sonrası seçenekleri yelpazesi sunar."
        image="/Assets/Images/services/sheet-metal-fabrication/finishing-options/hero.webp"
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
                  Bölüme Atla
                </h3>
                <div className="space-y-2">
                  {[
                    "Yüzey İşlemleri",
                    "Toz Boya",
                    "Kaplama",
                    "Islak Boya",
                    "İpek Baskı",
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
              {/* What is Sheet Metal Finishing? Section */}
              <div id="sac-metal-yuzey-islemleri" className="scroll-mt-32">
                <h1 className="text-black text-4xl font-bold mb-4">
                  Bir veya Daha Fazla Üretim Kalitesi Yüzey İşlemi ile
                  İstediğiniz Görünümü Elde Edin
                </h1>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sac metal bileşeninizi veya montajınızı özelleştirmek için
                  100'den fazla yüzey işlem seçeneği sunuyoruz. Tasarımınızın
                  fonksiyonel veya estetik unsurlarını geliştirmek için
                  tasarlanan bu yüzey işlemleri, kısa teslim süreleriyle, yüksek
                  kaliteli sonuçlar sunan uzmanlar tarafından uygulanır.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Çeşitli işlem sonrası operasyonlar şunlar için kullanılabilir:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "Yüzey pürüzlülüğünü azaltmak",
                    "Özel renk eklemek",
                    "Şeffaflığı artırmak",
                    "Parça mukavemetini artırmak",
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
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-800">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/finishing-options/support.jpg"
                alt="Ücretsiz Yüzey İşlem Danışmanlığı"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
                <span className="text-[#96E92A] text-sm font-semibold">
                  YENİLİK
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fabrikasyon Projeler için Ücretsiz Yüzey İşlem Danışmanlığı
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Sac metal uygulama mühendislerimizden biriyle ücretsiz 30
                dakikalık sanal yüzey işlem danışmanlığından yararlanın.
                Projenizin spesifikasyonlarınıza uygun şekilde ulaşmasını
                sağlamak için yüzey işlem gereksinimlerinizi gözden geçirmek
                için mükemmel bir fırsattır.
              </p>
              <a
                href="#"
                className="text-[#96E92A] font-medium hover:text-[#85d122] transition-colors inline-flex items-center gap-2 group">
                Şimdi Planla →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Yüzey İşlemleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-10">
              Sac metal parçanız için iki yüzey işlemi arasında seçim yapın. Bu
              seçenekler, parçanızı kullanıma hazır ve dokunmak için güvenli
              bırakacaktır:
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Orbital Zımpara
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bu, sac metal parçalar için en yaygın yüzey işlemidir ve son
                kesme işleminden kaynaklanan cüruf ile diğer yüzey kalıntılarını
                ve birikintileri temizlemek için rastgele bir orbital zımpara
                cihazı kullanmayı içerir. Orbital zımparalama, kozmetik
                uygulamalar için önerilmez ve en iyi şekilde iç bileşenler veya
                form, uyum ve işlevin öncelikli olduğu durumlar için kullanılır.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Düz Tane / Fırçalanmış
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bu yüzey işlemi, sac metalin yüzeyine uniform bir yönde/desende
                bir zımpara bandı uygulamayı içerir. Tane yönüne sahip
                tasarımlar genellikle kozmetik veya son kullanıcıya yönelik
                amaçlar içindir. Düz tane, parçanıza üç şekilde uygulanabilir:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    En uzun büküme (şekillendirilmişse) veya kenara (düzse) dik
                    olarak
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    En uzun büküme veya kenara paralel olarak
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    En uzun büküme veya kenara 45 derecelik açıyla
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed italic">
                Kaynaklı parçalar hakkında not: Kaynak boncukları kaynak
                alanında yükseltilmiş bir yüzey bırakır. Sürecimiz, kaynak
                boncuğunu metal malzemeye karıştırmayı ve uniform bir kenar
                bırakmayı içerir.
              </p>
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
                src="/Assets/Images/services/sheet-metal-fabrication/finishing-options/powder-coating.jpg"
                alt="Toz Boya Süreci"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Toz Boya
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Toz boya, sac metal parçaların yüzeyine kuru bir toz uygular.
                Ardından, geleneksel boyadan daha sert bir kaplama oluşturmak
                için büyük bir fırında kürlenirler. Bu işlem, parçaların
                dayanıklılığını artırır ve estetik amaçlar için özel renk ekler.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                En hızlı geri dönüş süresi için 50 stok renk arasından seçim
                yapın. Çeşitli doku ve parlaklık seviyeleri mevcuttur.
              </p>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Toz boya hakkında daha fazla bilgi edinin →
              </a>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sac Metal Yüzey İşlem Kılavuzu"
        desc="Çeşitli sac metal malzemeler için mevcut Standart ve Kozmetik yüzey işlem seçeneklerimizin hızlı bir özeti için sac metal kılavuzumuza göz atın."
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Islak Boya
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Islak boya ile, parçanıza estetik açıdan hoş bir yüzey sağlamak
              için sıvı bir kaplama uygulanır. Bu işlem, neredeyse her renkte
              sunulur ve genellikle boya yapışmasını ve dayanıklılığı artırmak
              için bir astar katmanıyla birlikte kullanılır.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Islak boya, genellikle parçalar arasında yüzey işleminin görsel
              tutarlılığının önemli bir husus olduğu durumlarda kullanılır, bu
              nedenle öncelikle otomotiv veya tüketici elektroniği ürünlerinde
              görürsünüz.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Islak boya seçeneklerimiz astarlı veya astarsız olarak mevcuttur.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Spesifikasyonlarınızı tam olarak karşılayabildiğimizden emin olmak
              için, tam boya spesifikasyonunu (renk ve doku dahil) sağlamanızı
              rica ediyoruz. Bu detaylar iki şekilde iletilebilir. Sizin için en
              kolay olan seçeneği seçin. Her iki şekilde de göndermeniz
              gerekmez:
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Islak boya spesifikasyonlarını içeren bir 2B çizim gönderin.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Çevrimiçi teklifinizin "Kaplama" bölümünde, proje
                  ihtiyaçlarınıza bağlı olarak açılır menüden "Islak Boya" veya
                  "Astar ile Islak Boya" seçeneğini seçin.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  "Spesifikasyon" alanına, yukarıda açıklandığı gibi islak boya
                  spesifikasyonlarını girin.
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
              Islak boya özel hususlar:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Islak boya hizmeti içeren teklifler 24 saatten biraz daha uzun
                  sürebilir.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Nihai ürününüzün bir bileşeni olarak maskeleme gerekiyorsa,
                  lütfen bir 2B çizim gönderin.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              İpek Baskı
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sac metal üzerinde ipek baskı, istenen tasarımı elde etmek için
              alanları bloke eden bir şablon içeren ince bir mesh elekten
              mürekkep geçirmeyi içerir. Mürekkep, şablon tarafından kaplanmayan
              alanlardan metal yüzeye aktarılır. Bu işlem genellikle fabrikasyon
              metal ürünlere etiket, talimat veya dekoratif desenler eklemek
              için kullanılır.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Bir sonraki projenizde ipek baskı talep etmek kolaydır. Sadece
              aşağıdaki bilgileri gönderin:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  .ai, .dxf veya .PDF dosyası olarak kaydedilmiş bir görüntü
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  İpek baskılı sanat eseri için parça konumu
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Pantone Eşleme Sistemi'ne (PMS) dayalı renk verileri
                </span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-4">
              Ek olarak, lütfen bu ipek baskı hususlarını not edin:
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Minimum ekran boyutu: 1 inç (25,4 mm) kare
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Maksimum ekran boyutu: 24 inç (609,6 mm) x 14 inç (355,6 mm)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  İç yüzeylerin ekranlanması, bükümlerden ve diğer parça
                  özelliklerinden en az 1 inç (25,4 mm) kenar boşluğu gerektirir
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Maskeleme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Maskeleme, sac metal bileşenler, montajlar veya elektrik
              muhafazaları söz konusu olduğunda yüzey işlem sürecinde yaygın bir
              adımdır. Tasarımınızda seçici olarak yüzey işlemi uygulamak için
              bant, yuvarlak ve tapa kullanıyoruz. Maskenin bazı önemli
              faydaları şunlardır:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Donanım ek parçaları, dişli delikler veya yüzeyler gibi
                  parçanın fonksiyonel alanlarının korunması
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Bitmemiş durumda sağlam boyutsal toleranslar. Yüzey işlem
                  süreçleri parçanızın kalınlığını artırır, bu da belirli
                  tasarımların uyumunu veya işlevini etkileyebilir.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Elektriksel iletkenliğin gerekli olduğu alanlarda kaplama
                  uygulamalarından kaçınma
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Genel tasarımın iyileştirilmiş estetik çekiciliği
                </span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              CAD dosyanızla birlikte gönderilen bir 2B çizimde maskeleme talep
              edin. 2B çizim, maskeli alanların konumunun yanı sıra hangi
              deliklerin/ek parçaların tıkanacağını içermelidir.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Maskeleme Bandı ve Yuvarlaklar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Bir dizi bant ve yuvarlak (disk) sunuyoruz:
            </p>

            {/* Unit Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setUnit("us")}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  unit === "us"
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                Standart (ABD)
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  unit === "metric"
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                Metrik
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Bant
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Yuvarlak/Disk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 text-gray-700">{row.tape}</td>
                      <td className="p-4 text-gray-600">{row.rounds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Parça İşaretleme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Parça işaretleme, bileşenlerin tedarik zincirinizde hareket
              ederken kolayca tanımlanabilmesini ve izlenebilir olmasını
              sağlamak için yararlı bir araçtır. Tesisimizden çıkan her sipariş,
              parçaların toplu olarak paketlendiği ve tanımlayıcı bilgilerle
              etiketlendiği bir <span className="italic">poşet ve etiket</span>{" "}
              işaretleme yöntemi içerir.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Tedarik zinciriniz izlenebilirlik amacıyla tüm parçaların
              benzersiz şekilde işaretlenmesini gerektiriyorsa, aşağıdakileri
              sağlayabilen bir şablonlama süreci sunuyoruz:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Parça numarası</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Revizyon seviyesi</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Tedarikçi kodu/kimliği</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Kafes kodu</span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-4">
              Parça veya projenize parça işaretlemesi eklemek için,
              aşağıdakileri içeren bir 2B çizim gönderin:
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  İşaretleme yerleşimi için parça üzerinde konum
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Yazı tipi boyutu (minimum 12 punto, maksimum 16 punto)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">Renk</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  İşaretlenecek bilgi (soldaki listeden seçin)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Standart ve Kozmetik Parçalar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-10">
              İster form, uyum veya işlevi kontrol etmek için bir prototip
              geliştiriyor olun, ister bir sonraki ticaret fuarınız için hızlı
              teslim kozmetik parçalara ihtiyacınız olsun, sizi koruyoruz.
              Projeniz için en iyi seçeneği seçmek üzere bu kılavuzu kullanın.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Açıklama
                    </th>
                    <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                      Standart
                    </th>
                    <th className="text-left p-4 font-semibold text-lg">
                      Kozmetik
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Kullanım Alanları
                    </td>
                    <td className="p-4 text-gray-600">
                      Düşük maliyet, görünümden daha büyük bir öncelik olduğunda
                    </td>
                    <td className="p-4 text-gray-600">
                      Sizi ve parçalarınızı paydaşlara iyi gösteren fonksiyonel
                      kozmetik parçalar
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Parça Uygulamaları
                    </td>
                    <td className="p-4 text-gray-600">
                      Form, uyum, işlev prototipleme; iç bileşenler
                    </td>
                    <td className="p-4 text-gray-600">
                      Test veya demonstrasyon üniteleri, ticaret fuarı
                      parçaları, dış bileşenler
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Yüzey İşlemi
                    </td>
                    <td className="p-4 text-gray-600">
                      Fasonly'nin takdirine bağlı
                    </td>
                    <td className="p-4 text-gray-600">
                      Gövdeler, kapaklar, ön paneller, dış braketler ve montaj
                      parçaları
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-[#0B1221]">
                      Maliyet
                    </td>
                    <td className="p-4 text-gray-600">Evet</td>
                    <td className="p-4 text-gray-600">Evet</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold text-[#0B1221]">Miktar</td>
                    <td className="p-4 text-gray-600">1-100+ parça</td>
                    <td className="p-4 text-gray-600">
                      1-25 parça için en iyisi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
