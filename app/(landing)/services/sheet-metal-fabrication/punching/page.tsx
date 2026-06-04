"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Sac Metal Zımbalama Hizmeti"
        desc="Zımbalanmış bileşenler ve montajlarla ölçek ve özelleştirme elde edin, 3 gün kadar kısa sürede teslim edilir."
        image="/Assets/Images/services/sheet-metal-fabrication/punching/hero.webp"
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
                  {["Yetenekler", "SLA Malzemeleri", "Yüzey İşlemleri"].map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block text-gray-500 hover:text-[#0099ff] transition-colors duration-200 text-sm py-1">
                        → {item}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3">
              {/* Beyond Prototyping Section */}
              <div id="zımbalama-hakkında" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Prototipleme Ötesi
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Projeniz stereolitografi (SLA) ve PolyJet'in ötesinde gelişmiş
                  mekanik özellikler gerektirdiğinde, Axtra3D Hibrit Fotoğraf
                  Sentezi (HPS) teknolojileriyle açığa çıkan gelişmiş
                  fotopolimer malzemelerimizi keşfedin. HPS, Carbon dijital ışık
                  sentezi (DLS) yazıcılarının hız, neredeyse izotropik parçalar
                  ve pürüzsüz yüzey kalitesi gibi en iyi özelliklerinden
                  yararlanır, ancak stereolitografinin (SLA) daha yüksek hızını
                  ve daha yüksek çözünürlüğünü ekler.
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
              Zımbalama Projeleri için Ücretsiz Tasarım İncelemesi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tasarım incelememiz, sac metal uygulama mühendislerimizden biriyle
              30 dakikalık sanal bir toplantıdan oluşur. Projeniz hakkında sahip
              olabileceğiniz soruları görüşmek için bir fırsattır. Zımbalama
              konusundaki yaygın tartışma soruları şunları içerir:
            </p>
            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "Kurum içi zımba takım seçimi",
                "Malzeme yüksekliği ve derinlik parametreleri",
                "Özellik aralığı (bükümlerden, parça kenarlarından veya yakındaki özelliklerden)",
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Zımbalama Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Sac metal zımbalama, bir zımba presinin{" "}
                <span className="italic">zımba</span> ve{" "}
                <span className="italic">kalıp</span> olarak adlandırılan
                takımları kullanarak profile, delik ve diğer şekillendirilmiş
                formları oluşturmak için malzemeye kuvvet uyguladığı bir metal
                kesme/şekillendirme işlemidir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Zımba, hızlı, tekrarlayan bir işlemde sac metali bir kalıba
                karşı keserek hassas bir dizi özellik ve kesik oluşturur.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                Fasonly süreci ile zımbalanabilen özellik türleri şunları
                içerir:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Havşa açıklıkları",
                  "Parça profilleri/çevreleri",
                  "Delik özellikleri",
                  "Delik desenleri",
                  "Şekillendirilmiş özellikler (ör. kaburgalar, çukurlar)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed italic">
                Hassas zımbalama, projenize benzersiz doğrulukla özellikler
                ekler.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/sm-img.jpg"
                alt="Sac Metal Zımbalama Süreci"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Fasonly ile Zımbalamanın Avantajları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-center mb-8">
              Zımbalama için Fasonly'yi kullanmak, bir sonraki sac metal bileşen
              veya montaj projeniz için çeşitli avantajlar sunar:
            </p>
            <ul className="space-y-3">
              {[
                "Hızlı geri dönüş süreleri: Zımbalanmış parçalar 3 gün kadar kısa sürede teslim edilir.",
                "Tasarım esnekliği ve özelleştirme: Kurum içi veya özel takım kullanarak zımba ile şekillendirilmiş özellikler elde edin.",
                "Teknik tavsiyeye erişim: Uygulama mühendislerimiz, projenizin spesifikasyonlarınızı karşıladığından emin olmak için hazırdır.",
                "Üretim hacimleri için geniş kapasite: Her ay 1'den 1000+'a kadar miktarlarda binlerce benzersiz geometri üretiyoruz.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Zımbalama için Malzemeler
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Çoğu sac metal malzeme türü zımbalama veya lazer kesim
                teknikleri kullanılarak kesilebilir, ancak kalınlık aralığı
                farklıdır. Uygun malzeme kalınlıkları hakkında bilgi için
                aşağıdaki listeye bakın:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  {
                    text: "Alüminyum 5052-H32: 0,040 inç - 0,250 inç (1,016mm - 6,35mm) kalınlıklar",
                    note: null,
                  },
                  {
                    text: "Alüminyum 6061-T651: 0,040 inç - 0,250 inç (1,016mm - 6,35mm) kalınlıklar",
                    note: "Alüminyum 6061 profil/çevre zımbalama için uygundur ancak şekillendirilmiş özellikler için uygun değildir.",
                  },
                  {
                    text: "Düşük Karbonlu Çelik CR 1008: 0,036 inç - 0,119 inç (0,914mm - 3,023mm) kalınlıklar",
                    note: null,
                  },
                  {
                    text: "CR Galvanizli: 0,036 inç - 0,119 inç (0,914mm - 3,023mm) kalınlıklar",
                    note: null,
                  },
                  {
                    text: "CR Galvanizli Tavlanmış: 0,036 inç - 0,119 inç (0,914mm - 3,023mm) kalınlıklar",
                    note: null,
                  },
                  {
                    text: "Bakır C101, C110: 0,040 inç - 0,125 inç (1,016mm - 3,175mm) kalınlıklar",
                    note: null,
                  },
                  {
                    text: "Pirinç C260: 0,040 inç - 0,125 inç (1,016mm - 3,175mm) kalınlıklar",
                    note: null,
                  },
                  {
                    text: "Paslanmaz Çelik 304/304L, 316/316L: 0,036 inç - 0,074 inç (0,914mm - 1,88mm) kalınlıklar",
                    note: null,
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-600">{item.text}</span>
                      {item.note && (
                        <p className="text-gray-500 text-sm mt-1 ml-4">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-gray-500 text-sm italic">
                *Alüminyum 5052-H32, şekillendirilebilir ve kaynaklanabilir bir
                malzeme olarak korozyon direnci sunar.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[550px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/material_smf_aluminum-5052_v2_hr.jpg"
                alt="Zımbalama için Malzemeler"
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
              Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Sac metal parçaları zımbalamak karmaşık olabilir, bu nedenle bir
              sonraki projenize dahil etmeyi kolaylaştırmak için tasarım
              sürecinde dikkate almanız gereken faydalı üretilebilirlik
              hatırlatıcılarının bir listesi aşağıda verilmiştir. Bu kılavuzlar,
              proje maliyetlerini yönetmenize ve yüksek parça kalitesi elde
              etmenize yardımcı olabilir.
            </p>
          </div>

          {/* Guidelines List */}
          <div className="space-y-4 mb-12">
            {[
              "Deliklerinizi malzeme kalınlığının 1,5 katı aralıkla yerleştirin. Küme takımlar, delikleri 1x malzeme kalınlığı mesafesinde oluştururken, tek vuruşlu delik takımları aynı delik kalitesini korumak için ek malzemeye ihtiyaç duyar.",
              "En küçük deliklerinizi malzeme kalınlığının 1,2 katı olarak tasarlayın.",
              "Tasarımınız boyunca benzersiz zımba ile şekillendirilmiş özellik boyutlarının/şekillerinin sayısını en aza indirin. Aynı boyuttaki özellikleri kullanmak, makine kurulum süresinden (ve olası takım maliyetlerinden) tasarruf sağlar.",
              "Tipik zımba özellik toleranslarını +/-0,05 inç (+/- 0,127mm) aralığında belirtin. Düz durumdaki toleransların şekillendirilmiş durumdakilerden farklı olduğunu akılda tutmak önemlidir. Birden fazla bükümü geçen özellik toleranslarını yönetme hakkında ek bilgi için tolerans kılavuzumuza bakın.",
              "Herhangi bir kademeli zımba özelliğinin (örn. kaburgalar, panjurlar, küme desenleri) boyutsal uzunluğunu göz önünde bulundurun. Aşırı uzun özellikler, eğrilme gibi kalite sorunlarına neden olabilir.",
              "Tüm şekillendirilmiş özelliklerinizi tek tip bir yöne bakacak şekilde tutun. Yukarı ve aşağı form içeren tasarımlar kalite sorunları riski taşır.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Additional Guidelines */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              Aşağıdaki ek zımbalama tasarım kılavuzları, boyutsal olarak doğru
              ve kaliteli zımbalanmış parçalar elde etmede yararlı bir kaynak
              olabilir.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Maksimum şekillendirilmiş özellik yüksekliği: 4x malzeme
                  kalınlığı.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Takım istasyonu çapları, zımba ile şekillendirilmiş özellikler
                  arasında önerilen boşlukla doğrudan ilişkilidir. Özellik
                  aralığı için takım istasyonu çapının %50'sini kullanmanızı
                  öneririz.
                </span>
              </li>
            </ul>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    Takım İstasyonu Çapı
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Özellikler Arasında Gereken Boşluk
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    diameter: "0,500 inç (12,7mm)",
                    space: "0,250 inç (6,35mm)",
                  },
                  {
                    diameter: "1,250 inç (31,75mm)",
                    space: "0,625 inç (15,875mm)",
                  },
                  {
                    diameter: "2,000 inç (50,8mm)",
                    space: "1,000 inç (25,4mm)",
                  },
                  {
                    diameter: "3,500 inç (88,9mm)",
                    space: "1,750 inç (44,45mm)",
                  },
                  {
                    diameter: "4,500 inç (101,6mm)",
                    space: "2,250 inç (57,15mm)",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 text-gray-700 text-sm">
                      {row.diameter}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">{row.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Zımba Form Takımı
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Zımbalama, profil ve form takım şekilleri aracılığıyla sac metal
              projeleri için işlevsellik ve özelleştirme sağlar. Aşağıdaki
              bilgiler, sunduğumuz yaygın kesik ve şekillendirilmiş özellikler
              için bir referanstır. Takım seçimi (kurum içi veya özel) hakkında
              sorularınız varsa, uygulama mühendislerimizle ücretsiz 30
              dakikalık tasarım incelemesinden yararlanın.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Özel zımba takımının projenizin fiyatına ve teslim süresine ek
              maliyet getirdiğini unutmayın. Maliyet bir öncelikse, kurum içi
              takım seçeneğini öneririz. Tasarım incelemeniz sırasında,
              tasarımınız için hangi boyutun en önemli olduğunu (örn. yükseklik,
              iç çap, dış çap, açık alan, vb.) görüşerek yeterli bir kurum içi
              takım önerisi sağlayacağız.
            </p>
          </div>

          {/* Grid of Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lance Tab */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kanca Tırnak
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Bu form takımı, bir kanca veya tırnak şekli oluşturmak için sac
                metalin bir bölümünü keser ve yükseltir. Kanca tırnaklar,
                mekanik bağlantı/asma, havalandırma, klipsler ve durdurucular
                için kullanılır.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Tasarımınız birkaç küçük, basit büküm içeriyorsa, tek vuruşlu
                zımba takımı en etkili üretim ve maliyet yönetimi yöntemi
                olabilir.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca tek vuruş
              </p>
            </div>

            {/* Bridge Lance */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Köprü Kanca
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Köprü kancalar birçok şekil ve boyutta gelir. Kurum içi
                seçeneklerimiz öncelikle tek köprü yukarı form takımlarıdır,
                ancak özel takım talep üzerine mevcuttur. Köprü kancalar, kanca
                tırnaklardan farklıdır çünkü sac ile iki temas noktası
                kullanarak köprü benzeri bir özellik oluştururlar.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Köprü kancalar, dekoratif veya fonksiyonel amaçlar için
                kullanılır, bunlar arasında klips bağlantıları, hava akışı,
                kablo geçişleri veya bağlantı elemanları bulunur. Bir köprü
                kanca özelliği, PEM® aracılığıyla mevcut olan TD (kablo bağı
                montajı) donanımına benzer işlevselliğe sahiptir.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca tek vuruş
              </p>
            </div>

            {/* Extrusion */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Ekstrüzyon
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Sac metal tasarımlarında zımbalanmış ekstrüzyonlar, yükseltilmiş
                bir şekil oluşturmak için malzemeyi bir kalıptan iterek
                oluşturulur. Yaygın ekstrüzyon uygulamaları elektrik temas
                noktaları, dişli delikler, ayaklar ve hava akışı veya gaz
                kanallarıdır.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Daha yüksek miktarların gerekli olduğu üretim durumları için,
                ekstrüde etme ve kılavuz çekme özellikleri, donanım
                yerleştirmeye başarılı bir alternatif olabilir ve daha düşük
                parça maliyetleriyle sonuçlanır.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca tek vuruş
              </p>
            </div>

            {/* Perforation Pattern (Cluster Tool) */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Delik Deseni (Küme Takımı)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Delik desenleri birçok şekil ve boyutta gelir, ancak tek bir
                hedefleri vardır: delikler/yuvalar arasında az miktarda malzeme
                bırakarak bir delik/yuva tasarımı zımbalarlar. Bu tür tasarım
                elemanları tipik olarak en iyi zımbada elde edilir, çünkü
                lazerden gelen ısı malzeme deformasyonuna katkıda bulunabilir.
                Bir küme takımı, tek bir zımba vuruşuyla birden fazla delik/yuva
                oluşturmak için yaygın olarak kullanılır.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Delik desenlerinde önemli bir tasarım hususu, deliğin veya
                özelliğin boyutunun malzeme kalınlığına eşit veya daha büyük
                olması gerektiğidir. Ek olarak, aynı malzeme kalınlığı
                kılavuzunu takip etmek için özellikler arasındaki ağ veya
                boşluğu tasarlamayı düşünün. Delik desenleri genellikle
                havalandırma, filtrasyon, drenaj, dekoratif veya ağırlık azaltma
                kullanım durumları için kullanılır.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca tek vuruş
              </p>
            </div>

            {/* Louver */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Panjur</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Panjur takımları, yarıklı bir açıklık veya havalandırma
                oluşturur ve sac metalden yapılmış paneller veya elektrik
                muhafazaları için yaygındır. Elektronik muhafazalarına
                uygulandığında, panjurlar iç bileşenlerin havalandırılmasına ve
                termal yönetimine yardımcı olur.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: her ikisi için de uygundur
              </p>
            </div>

            {/* Rib */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Kaburga</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Tipik olarak, kaburgalar bir tasarımın mukavemetine, sertliğine
                veya katılığına yardımcı olmak için kullanılan yükseltilmiş
                metal dikdörtgen şekillerdir. Ayrıca, kaburgalar ağırlığı
                artırmadan mukavemet ekleyebilir. Düz bir üst veya yarım daire
                profil olabilirler. Elektronik muhafazalarında, kaburgalar
                tasarım sertliğinin yanı sıra termal yönetime de yardımcı
                olabilir. Kaburgalar ayrıca bileşenler arasında bir boşluk
                oluşturarak ikinci bir bileşeni ana bileşenin tabanından
                yükseltebilir.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca kademeli
              </p>
            </div>

            {/* Half Shear */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Yarım Kesme
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Bu çok yönlü takım seçeneği, sacı kısmen keser ve yükseltilmiş
                özellikler veya kasıtlı malzeme deformasyonları oluşturur. Yarım
                kesmeler, montaj işlemleri için görsel ve fiziksel işaretler
                sağlamaya yardımcı olabilir çünkü parçalar birbirine geçebilir
                veya tırnak veya kancalara alternatif olarak hizmet edebilir.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca tek vuruş
              </p>
              <a
                href="#"
                className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                Stoklu zımba takım kütüphanemizi görüntüleyin →
              </a>
            </div>

            {/* Emboss */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kabartma
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Kabartma veya çukur form takımları, sac metal geometrilerine
                fonksiyonel veya estetik iyileştirmeler sunar. Bu tip özellik
                tek başına veya bir desen halinde kullanılabilir ve ara parçası,
                montaj noktası olarak işlev görebilir veya genel görsel
                çekicilik sağlayabilir. Kabartmalar herhangi bir şekilde
                olabilir, ancak en yaygın olarak yuvarlak, oval veya
                dikdörtgendir. Kabartmalar, gizli bir başlığın sağladığı yapısal
                bütünlükten ödün vermeden mıknatısları veya donanım başlıklarını
                gizleyebilir.
              </p>
              <p className="text-gray-500 text-xs italic">
                Tek vuruş vs. kademeli takım: yalnızca tek vuruş
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
                Montaj
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Zımbalanmış özellikler içeren sac metal tasarımları bağımsız
                parçalar olabilir, ancak daha yaygın olarak montajlarda, alt
                montajlarda veya kaynaklı konstrüksiyonlarda bulunur.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                Aşağıdaki{" "}
                <span className="font-semibold">montaj yapım hizmetlerini</span>{" "}
                sunuyoruz, böylece projeniz geldiğinde hemen kullanıma hazır
                olur:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Donanım yerleştirme",
                  "Kaynak (tek ve çok bileşenli)",
                  "Perçinleme",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-2">
                <span className="font-semibold">Teslim süresi:</span> Montaj
                teslim süresi 1-3 gün ekler (bileşen sayısına bağlı olarak).
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                Montaj hizmetlerimiz, müşterilerin parçalarını geldiklerinde
                kullanmalarına olanak tanır.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/smf_complexity_assembly_2.jpg"
                alt="Montaj Hizmetleri"
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
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Zımbalanmış Parçalar için Yüzey İşlem Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Özellik veya geometri özelleştirmesine ek olarak, zımbalanmış
                bileşenler ve montajlar için yüzey işlem hizmetlerimiz, estetik
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
                Ek bilgi için lütfen{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  yüzey işlem seçenekleri
                </a>{" "}
                sayfamızı ziyaret edin.
              </p>

              <p className="text-gray-600 leading-relaxed mb-2">
                <span className="font-semibold">Teslim süresi:</span> Çoğu yüzey
                işlem seçeneği, işlem başına 1-2 gün ekler. Yüzey işlem
                seçenekleri sayfamız daha fazla ayrıntı sunar.
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                Çeşitli yüzey işlem seçenekleri, herhangi bir sac metal parçaya
                gerekli estetiği ekler.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/Assets/Images/services/sheet-metal-fabrication/punching/sm-parts.jpg"
                alt="Zımbalanmış Parçalar için Yüzey İşlem Seçenekleri"
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
