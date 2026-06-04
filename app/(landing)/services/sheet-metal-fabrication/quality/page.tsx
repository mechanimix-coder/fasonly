"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";
export default function page() {
  const [activeTab, setActiveTab] = useState<"standard" | "dir" | "coC">(
    "standard",
  );

  const tabs = [
    { id: "standard", label: "Standart Denetim" },
    { id: "dir", label: "Boyutsal Denetim Raporu (DIR)" },
    { id: "coC", label: "Uygunluk Sertifikası / FAI" },
  ];

  const content = {
    standard: {
      title: "Standart Denetim",
      headers: [
        "Faydalar",
        "Ölçümler",
        "Uygunluk",
        "Ek Özellikler",
        "Teslim Süresi",
        "Fiyat",
        "Örneklem Planı",
      ],
      rows: [
        [
          "Tüm sevkiyatlarda bulunur. Ölçüm sonuçları sağlanmaz",
          "Fasonly kalite kontrol, parçaların teklif edilen boyutsal ve görsel standartlarla tutarlılığını doğrulamak için denetler",
          "Tüm siparişlerde mevcuttur.",
          "Yok",
          "Yok",
          "Yok",
          "Parçalar üretildikten sonra, partiden bir parça teklif edilen boyutsal toleransları ve görsel standartları doğrulamak için denetlenir.",
        ],
      ],
    },
    dir: {
      title: "Boyutsal Denetim Raporu (DIR)",
      headers: [
        "Faydalar",
        "Ölçümler",
        "Uygunluk",
        "Ek Özellikler",
        "Teslim Süresi",
        "Fiyat",
        "Örneklem Planı",
        "Örnek Rapor",
      ],
      rows: [
        [
          "2B çizim gerektirmeden çok sayıda boyutsal spesifikasyonu doğrular.",
          "Fasonly kalite kontrol, teklif edilen toleransları doğrulamak için yaklaşık 10 boyutu denetler. GD&T denetimden hariçtir.",
          "N/A",
          "Baloncuklu parça görseli ve sonuç özet tablosu içeren biçimlendirilmiş rapor.",
          "Yok",
          "250$",
          "Parçalar üretildikten sonra, partiden bir parça teklif edilen boyutsal toleransları ve görsel standartları doğrulamak için denetlenir.",
          "Örnek DIR İndir",
        ],
      ],
    },
    coC: {
      title: "Uygunluk Sertifikası / FAI",
      headers: [
        "Faydalar",
        "Ölçümler",
        "Uygunluk",
        "Ek Özellikler",
        "Teslim Süresi",
        "Fiyat",
        "Örneklem Planı",
        "Örnek Rapor",
      ],
      rows: [
        [
          "Numune parçanın 2B çizimde sağlanan tüm boyutlara uygun olduğunu doğrular.",
          "Fasonly kalite kontrol, GD&T dahil olmak üzere 2B çizimde sağlanan boyutların %100'ünü denetler. Teklif edilen toleranslar geçerlidir.",
          "N/A",
          "FAI, AS9102C standardına uygun bir şablon kullanılarak üretilir.",
          "1 gün ekler",
          "500$",
          "Parçalar üretildikten sonra, partiden bir parça teklif edilen boyutsal toleransları ve görsel standartları doğrulamak için denetlenir.",
          "Örnek FAI İndir",
        ],
      ],
    },
  };

  const currentContent = content[activeTab];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sac Metal İmalatı Kalite Kontrolü"
        desc="Kaliteli parçaları ve montajları tutarlı bir şekilde üretmek için dijital süreçleri, belgelenmiş iş standartlarını ve denetim raporlamasını nasıl kullandığımız"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sac Metal Projeleri için Denetim Dokümantasyonu
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold">Sac metal imalatı</span>{" "}
              siparişleri için birden fazla kalite denetim dokümantasyonu ve
              raporu sunuyoruz. Proje gereksinimlerinize bağlı olarak, çevrimiçi
              teklifiniz içinde bu raporlar arasından seçim yapabilirsiniz:
            </p>
          </div>

          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/quality/sm-quality-work-standards-1.jpg"
                alt="Denetim Dokümantasyonu Seçenekleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <ul className="space-y-3">
                {[
                  "Boyutsal Denetim Raporu",
                  "İlk Ürün Denetimi (2B çizim gereklidir)",
                  "Uygunluk Sertifikası",
                  "Malzeme Sertifikası",
                  "Yüzey İşlem Sertifikası",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">
                Projeniz için hangisinin en iyi seçim olduğunu belirlemenize
                yardımcı olması için bu raporlama seçeneklerinin her biri
                hakkında daha fazla bilgi:
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Kalite İş Standartlarımızda ve DNA'mızdadır
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Misyonumuz her seferinde harika parçalar teslim etmektir. Bunu
                yapmak için, açıkça belgelenmiş iş standartları ve prosedürleri
                kullanıyoruz. Hataları en aza indirmek için, yetenekli
                üreticilerden oluşan ekibimiz her benzersiz geometride süreç içi
                kalite kontrolleri gerçekleştirir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Parça tamamlandıktan sonra, kalite kontrol uzmanlarımız devralır
                ve fiziksel parçayı 3B modelinizle (veya gerekirse çıktınızla)
                tutarlılığı sağlamak için görsel ve boyutsal olarak denetler.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/quality/customerservice-male_g8a1478_low_res-1-2-1.jpg"
                alt="Kalite İş Standartları"
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
              Sac Metal Denetimleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  {currentContent.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="text-left p-4 font-semibold border-r border-gray-700 last:border-r-0 min-w-[150px]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentContent.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="border-b border-gray-200 bg-white">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="p-4 text-gray-600 text-sm align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Üretilebilirlik İçin Tasarım (DFM) Analizi
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Dijital teklif platformumuz üzerinden bir teklif talep
                ettiğinizde, hem üretilebilirlik analizi hem de fiyatlandırma
                alacaksınız. Dijital üretim sürecindeki bu önemli ilk adım,
                birden fazla tasarımı aynı anda test etmenize olanak tanır,
                böylece tasarım doğrulamasını daha erken elde edersiniz, bu da
                geliştirme döngüsünde zaman tasarrufu sağlar.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Üretim analizimiz, sac metal parçaların kalitesini aşağıdaki
                şekillerde iyileştirebilir:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Non-uniform parça kalınlıklarını tanımlama",
                  "Bir özelliğin (örn. kesikler, delikler) bükümlere yakınlığını doğrulama",
                  "Donanım ek parçası ve sac metal malzeme uyumluluğunu doğrulama",
                  "Flanş uzunluğunu analiz etme",
                  "Büküm yarıçapı takımını değerlendirme",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column - Image */}
              <div className="flex-1 relative w-full h-80 md:h-[600px] rounded-xl overflow-hidden">
                <Image
                  src="/Assets/Images/services/sheet-metal-fabrication/quality/resized-featured-content-2-0-dfm-img.jpg"
                  alt="Üretilebilirlik İçin Tasarım (DFM) Analizi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Sac Metal Uzmanlarından Tasarım Desteği
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-center mb-10">
              Uzmanlarımız, sac metal tasarımınızı incelemek ve sahip
              olabileceğiniz soruları görüşmek için hazırdır. Aşağıdaki iki
              tasarım desteği seçeneğinden birini seçin:
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Danışmanlık Tasarım Hizmeti
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tasarımınızın üretilebilirliğini iyileştirmek için doğrudan bir
                sac metal uygulama mühendisiyle çalışın. Bunu, ekibinizde
                kişisel bir sac metal imalatı danışmanına sahip olmak gibi
                düşünün. Süreç boyunca, uygulama mühendisimiz tasarım
                hedeflerinizi anlamak, çevrimiçi teklifinizde sağlanan üretim
                analizini incelemek ve CAD dosyasında gerekli değişiklikleri
                yapmak için sizinle işbirliği yapacaktır.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Tasarım İncelemesi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tasarımınızı bir sac metal uygulama mühendisiyle tartışarak
                sahip olabileceğiniz üretilebilirlik sorularını yanıtlayın.
                Yaygın tasarım inceleme konuları arasında maliyet optimizasyonu,
                özellik konumu ve aralığı ile pres freni şekillendirme
                hakkındaki sorular yer alır.
              </p>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Bugün ücretsiz sanal toplantı planlayın →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
