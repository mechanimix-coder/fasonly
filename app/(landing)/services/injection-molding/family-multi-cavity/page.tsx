"use client";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("maximumPartSize");

  const tabs = [
    { id: "maximumPartSize", label: "Maksimum Parça Boyutu" },
    { id: "maximumPartVolume", label: "Maksimum Parça Hacmi" },
    { id: "maximumNumberOfCavities", label: "Maksimum Göz Sayısı" },
    { id: "maximumSurfaceArea", label: "Maksimum Yüzey Alanı" },
    { id: "leadTimes", label: "Teslim Süreleri" },
  ];

  const content = {
    maximumPartSize: {
      title: "Maksimum Parça Boyutu",
      description:
        "Maksimum parça boyutu, kalıp boyutunun ve parça karmaşıklığının bir fonksiyonudur. Plastik enjeksiyon kalıplama ile destekleyebileceğimiz en büyük boyut 18,9 inç x 29,6 inç x 8 inç'tir (480mm x 751mm x 203mm).",
      table: null,
    },
    maximumPartVolume: {
      title: "Maksimum Parça Hacmi",
      description:
        "Maksimum 59 inç (1.499mm)'dir. Aşağıdaki özellikler 0,05 inçten (1,27mm) küçük parçaları hariç tutar. İki parça arasında, hacim şu şekildeyse:",
      table: {
        headers: ["Parça boyutu:", "Parça Hacmindeki Maksimum Fark"],
        rows: [
          ["< 2 inç (50,8mm)", "%20"],
          ["2 inç (50,8mm) ile < 5 inç (127mm)", "%15"],
          ["5 inç (127mm) ile < 10 inç (254mm)", "%10"],
          ["10 inç (254mm) ile 59 inç (1499mm)", "%5"],
        ],
      },
    },
    maximumNumberOfCavities: {
      title: "Maksimum Göz Sayısı",
      description:
        "Olası göz sayısı kalıp başına 2, 4 veya 8 olabilir. Bu nihayetinde parça karmaşıklığına ve boyutuna bağlıdır.",
      table: null,
    },
    maximumSurfaceArea: {
      title: "Maksimum Yüzey Alanı",
      description:
        "Maksimum 175 inç (4.445mm)'dir, her bir göz birbirine eklenir. İki parça arasında, yüzey alanı şu şekildeyse:",
      table: {
        headers: ["Parça boyutu:", "Parça Yüzey Alanındaki Maksimum Fark"],
        rows: [
          ["< 5 inç (127mm)", "%20"],
          ["5 inç (127mm) ile < 10 inç (254mm)", "%15"],
          ["10 inç (254mm) ile < 20 inç (508mm)", "%10"],
          ["20 inç (508mm) ile < 59 inç (1499mm)", "%5"],
        ],
      },
    },
    leadTimes: {
      title: "Çok Gözlü ve Aile Kalıpları için Teslim Süreleri",
      description:
        "Temel olarak, teslim süreleri kalıbınızın karmaşıklığına ve boyutuna bağlıdır ve bu özelliklere göre 1 ila 20 gün arasında değişebilir. Aşağıda parçalarınızın teslim süresi açısından ne bekleyebileceğinize dair kabaca bir fikir verilmiştir.",
      table: {
        headers: [
          "Maksimum parça boyutu:",
          "Tasarım Özellikleri",
          "Teslim Süresi:",
        ],
        rows: [
          [
            "Maksimum Parça Hacmi",
            "Yan çekme yok, sıcak uçlu kapaklar, konturlu iticiler, çelik çekirdek pimleri, aile ve çok gözlü kalıplar yok",
            "1 iş günü",
          ],
          ["Maksimum Yüzey Alanı", "", ""],
          ["Teslim Süreleri", "", ""],
          [
            "15 inç x 9 inç x 4 inç (381mm x 229mm x 101,6mm); kapak tipine bağlı olarak maksimum parça boyutu daha küçük olabilir",
            "İkiden fazla yan çekme içermez; seçmeli kam yok; aile ve çok gözlü kalıplar yalnızca iki basit parça içerebilir",
            "5 iş günü",
          ],
          [
            "15 inç x 9 inç x 4 inç (381mm x 229mm x 101,6mm); kapak tipine bağlı olarak maksimum parça boyutu daha büyük olabilir",
            "İkiden fazla yan çekme içermez; seçmeli kam yok; aile ve çok gözlü kalıplar yalnızca iki basit parça içerebilir",
            "7 iş günü",
          ],
        ],
      },
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Çok Gözlü ve Aile Enjeksiyon Kalıplama"
        desc="Tek bir kalıptan aynı veya farklı parçaların birden fazlası ile her atışı maksimize edin"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
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
                    "Malzeme Seçenekleri",
                    "Yüzey İşlemleri",
                    "Çok Gözlü veya Aile Enjeksiyon Kalıplama Nedir?",
                    "Yaygın Uygulamalar",
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
              {/* What is Family and Multi-Cavity Molding? Section */}
              <div
                id="çok-gözlü-veya-aile-enjeksiyon-kalıplama-nedir"
                className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Aile ve Çok Gözlü Kalıplama Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Aile kalıplama ve çok gözlü kalıplama, tek bir kalıptan birden
                  fazla parça üretmek için kullanılan tekniklerdir. Her döngüde
                  tek bir parça üretmek yerine, tek bir enjeksiyonla birden
                  fazla parça üretilebilir. Çok gözlü kalıplama, aynı parçaların
                  birden fazlasını üretmek için tasarlanmış aynı göze sahip bir
                  takımı tanımlar. Aile kalıplama ise birbirine uyan sol ve sağ
                  bileşenler gibi çeşitli göz tasarımlarına sahip bir takımı
                  tanımlar.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Gömme parçalı kalıplama için yaygın uygulamalar:
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
              Aile ve Çok Gözlü Kalıplama Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Çok gözlü ve aile enjeksiyon kalıplama için temel kılavuzlarımız,
              parça kalıplanabilirliğini iyileştirmeye, kozmetik görünümü
              geliştirmeye ve genel üretim süresini azaltmaya yardımcı olacak
              önemli tasarım hususlarını içerir.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Navigation List */}
            <div className="lg:w-1/3">
              <div className="bg-[#F0F8FF] rounded-xl overflow-hidden sticky top-32">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-4 ${
                      activeTab === tab.id
                        ? "bg-white border-l-[#96E92A] text-[#0B1221] font-semibold shadow-sm"
                        : "border-l-transparent text-gray-600 hover:bg-white/50 hover:text-[#0B1221]"
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  {currentContent.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentContent.description}
                </p>

                {/* Table */}
                {currentContent.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0B1221] text-white">
                          {currentContent.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentContent.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className={`border-b border-gray-200 ${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="p-3 text-gray-600 text-sm">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* General Note for all tabs */}
                <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-semibold text-[#0B1221]">
                      Toleranslar:
                    </span>{" "}
                    Tipik olarak Fasonly, +/- 0,003 inç (0,08mm) işleme
                    toleransını koruyabilir ve buna dahil olan reçine toleransı
                    +/- 0,002 inç/inç'ten (0,002mm/mm) büyük ancak daha az
                    olmayabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Materials List */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Enjeksiyon Kalıplama Malzemeleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  "ABS",
                  "Asetal Kopolimer",
                  "Asetal Homopolimer/Delrin",
                  "ETPU",
                  "HDPE",
                  "LCP",
                  "LDPE",
                  "LLDPE",
                  "Naylon",
                  "PBT",
                  "PC/ABS",
                  "PC/PBT",
                  "PEEK",
                  "PEI",
                  "PET",
                  "PETG",
                  "PMMA (Akrilik, Plexiglas)",
                  "Polikarbonat",
                  "Polipropilen",
                  "PPA",
                  "PPE/PS",
                  "PS",
                  "PSU",
                  "TPU",
                ].map((material, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700 text-sm">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/family-multi-cavity/im-nylon_resin_pellets_570x308.jpg"
                  }
                  fill
                  alt="Enjeksiyon kalıplama malzemeleri"
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
                    "/Assets/Images/services/injection-molding/family-multi-cavity/im-services-img.png"
                  }
                  fill
                  alt="Yüzey işlem seçenekleri"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yüzey İşlem Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Finish List */}
              <div className="space-y-2">
                {[
                  "PM-FO - kozmetik olmayan, Fasonly'nin takdirine göre bitirme",
                  "PM-F1 - düşük kozmetik, çoğu takım izi giderilmiş",
                  "PM-F2 - kozmetik olmayan, EDM izin verilebilir",
                  "SPI-C1 - 600 grit taş",
                  "PM-T1 - SPI-C1 + hafif boncuk püskürtme",
                  "PM-T2 - SPI-C1 + orta boncuk püskürtme",
                  "SPI-B1 - 600 grit zımpara",
                  "SPI-A2 - 2 numara elmas cilalama",
                ].map((finish, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">{finish}</span>
                  </div>
                ))}
              </div>
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
                Çok Gözlü veya Aile Kalıplama Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Çok gözlü kalıplar, tek bir enjeksiyonda aynı parçanın birden
                fazla versiyonunun üretilmesini sağlar. Aynı kalıp üzerinde
                birçok farklı parçayı birleştirerek bir aile kalıbı
                oluşturduğunuzda bu süreci bir sonraki mantıksal adıma
                taşıyabilirsiniz. Hiç plastik model yaptıysanız, muhtemelen bir
                aile kalıbında üretilmiş parçalarla çalışmışsınızdır. Her parça
                arasındaki kanallar sağlam bırakılır ve sizi her bir parçayı
                bütünden ayırmaya zorlar.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3 mt-6">
                Avantajlar:
              </h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Yüksek Üretim Hacmi: Tek gözlü bir kalıba kıyasla saatte üretilen parça sayısını önemli ölçüde artırır",
                  "Verimlilik: Makine kullanımını maksimize eder",
                  "Daha Düşük Parça Başı Maliyet: Kalıbın kendisi başlangıçta daha pahalı olsa da, artan çıktı hızı ve parça başına azalan döngü süresi nedeniyle bireysel parça başına maliyet önemli ölçüde düşer",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Zorluklar:
              </h3>
              <ul className="space-y-2">
                {[
                  "Kalıp Karmaşıklığı ve Maliyeti: Dengeleyici bir çok gözlü kalıp tasarlamak ve üretmek, eklenen karmaşıklık ve kalıbı kesme süresi nedeniyle daha pahalıya mal olur, ancak bunu daha düşük parça fiyatıyla telafi edebilirsiniz",
                  "Dengeleme: Tutarlı parça kalitesi için tüm gözlerin eşit ve aynı oranda dolmasını sağlayın. Dikkatli kanal sistemi tasarımı kritik öneme sahiptir",
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
                  src={
                    "/Assets/Images/services/injection-molding/family-multi-cavity/sec_ops_custom_color_22_hr-600x400-bf06395-1.jpg"
                  }
                  fill
                  alt="Çok gözlü kalıplama süreci"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Uygulamalar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Applications Grid - 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Automotive */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Otomotiv
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yüksek hacimli bağlantı elemanları, konnektörler, alt montaj
                bileşenleri, iç trim setleri ve küçük standart parçalar için.
              </p>
            </div>

            {/* Consumer Electronics */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Tüketici Elektroniği
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Birçok ünitede kullanılan standartlaştırılmış bileşenler,
                gövdeler ve belirli cihazlar için dahili bileşenler.
              </p>
            </div>

            {/* Medical Devices */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Medikal Cihazlar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Özellikle tek kullanımlık ürünler ve el tipi teşhis aletleri
                veya kitleri için gövdeler.
              </p>
            </div>

            {/* Packaging */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Ambalajlama
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Özellikle içecek, gıda, kozmetik ve ilaç ambalajları.
              </p>
            </div>

            {/* Appliances */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Ev Aletleri
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Küçük ev aletleri için gövdeler ve bileşenler.
              </p>
            </div>

            {/* Industrial Equipment */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Endüstriyel Ekipman
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Endüstriyel makine ve ekipmanlar için dayanıklı bileşenler,
                gövdeler ve yapısal parçalar.
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
              Parça Tipleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    Parça Tipleri
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Fonksiyon
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    part: "Elektronik cihaz gövdeleri",
                    function:
                      "Ön/arka kasalar, pil kapakları, belirli bir uzaktan kumanda, telefon veya cihaz için düğme setleri",
                  },
                  {
                    part: "Düğmeler ve tuşlar",
                    function:
                      "Klavyeler, kontrol panelleri, uzaktan kumandalar",
                  },
                  {
                    part: "Kapaklar ve kapatmalar",
                    function:
                      "Şişe kapakları, kavanoz kapakları, açılır kapanır kapaklar, sprey nozulu bileşenleri (büyük hacimler gerekir)",
                  },
                  {
                    part: "Konnektörler",
                    function:
                      "Elektrik konnektörleri, terminal gövdeleri, fiber optik konnektörler (standartlaştırılmış, yüksek miktar)",
                  },
                  {
                    part: "Bağlantı Elemanları",
                    function:
                      "Plastik klipsler, perçinler, vida ankrajları, kablo bağları (emtia, yüksek hacim)",
                  },
                  {
                    part: "Medikal tek kullanımlık ürünler ve gövdeler",
                    function:
                      "Şırınga gövdeleri/plungerları, pipet uçları, test tüpleri, flakon kapakları, IV setleri için parçalar, numune kapları. Bir glikoz metre kasasının iki yarısı, belirli bir teşhis test kiti için parçalar (yüksek hacim, tutarlılık kritik)",
                  },
                  {
                    part: "Küçük burçlar, rondelalar",
                    function: "Standartlaştırılmış mekanik bileşenler",
                  },
                  {
                    part: "Küçük boru bağlantı parçaları",
                    function:
                      "Dirsekler, T-konnektörler, sıhhi tesisat/sulama için kapaklar",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-4 text-gray-700 font-medium align-top">
                      {row.part}
                    </td>
                    <td className="p-4 text-gray-600 align-top">
                      {row.function}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
