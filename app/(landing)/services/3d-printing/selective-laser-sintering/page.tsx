"use client";

import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("maxDimensions");

  const tabs = [
    { id: "maxDimensions", label: "Maks. Boyutlar" },
    { id: "layerThickness", label: "Katman Kalınlığı / Çözünürlük" },
    { id: "wallThickness", label: "Duvar Kalınlığı" },
    { id: "minFeatureSize", label: "Minimum Özellik Boyutu" },
    { id: "tolerances", label: "Toleranslar" },
    { id: "warpage", label: "Eğrilme" },
    { id: "surfaceFinish", label: "Yüzey İşlem Seçenekleri" },
  ];

  const content = {
    maxDimensions: {
      title: "Maks. Boyutlar",
      table: {
        headers: ["Malzeme", "ABD", "Metrik"],
        rows: [
          [
            "Naylon, TPU ve diğer PA12 Malzemeler",
            "12,2 inç x 10,3 inç x 10 inç",
            "309,88mm x 261,62mm x 254mm",
          ],
          [
            "PP (Polipropilen)",
            "12,2 inç x 10,3 inç x 8 inç",
            "309,88mm x 261,62mm x 203,2mm",
          ],
          ["PA12 Beyaz", "19 inç x 19 inç x 17 inç", "482mm x 482mm x 431mm"],
        ],
      },
    },
    layerThickness: {
      title: "Katman Kalınlığı / Çözünürlük",
      table: {
        headers: ["ABD", "Metrik"],
        rows: [["0,004 inç", "0,1016mm"]],
      },
    },
    wallThickness: {
      title: "Duvar Kalınlığı",
      table: {
        headers: ["Malzeme", "ABD", "Metrik"],
        rows: [
          ["Naylonlar", "0,030 inç", "0,762mm"],
          ["PP ve TPU", "0,040 inç", "1,01mm"],
        ],
      },
    },
    minFeatureSize: {
      title: "Minimum Özellik Boyutu",
      description:
        "Minimum özellik boyutu malzemeye ve parça geometrisine bağlıdır. Özel gereksinimler için mühendislik ekibimizle iletişime geçin.",
      table: null,
    },
    tolerances: {
      title: "SLS Toleransları",
      description:
        "İyi tasarlanmış parçalar için, ±0,010 inç (0,25mm) artı nominal uzunluğun %0,1'i toleranslar tipik olarak elde edilebilir. Toleransların parça geometrisine bağlı olarak değişebileceğini unutmayın.",
      table: null,
    },
    warpage: {
      title: "SLS Parça Eğrilmesi",
      description:
        "Daha büyük parça boyutları (>7 inç) ve ince özelliklere sahip parçalar eğrilmeye en yatkın olanlardır. Stabiliteyi sağlamak için 0,125 inç (3,175mm) uniform kalınlık korunmasını öneririz.",
      table: null,
    },
    surfaceFinish: {
      title: "Yüzey İşlem Seçenekleri",
      table: {
        headers: ["İşlem Tipi", "Açıklama"],
        rows: [
          [
            "Standart",
            "Tüm tozu temizleyen ve tutarlı bir genel doku bırakan boncuk püskürtme.",
          ],
          [
            "Buhar Düzeltme",
            "Yüzey pürüzlülüğünde 250+ μm RA'dan (baskı durumu) düzeltmeden sonra 64 – 100 μm RA'ya önemli azalma. PA11 Siyah için mevcuttur.",
          ],
          [
            "Özel",
            "İkincil seçenekler arasında uygulanabilen bir astar veya boya rengi ile kılavuz çekme ve ek parçalar bulunur.",
          ],
        ],
      },
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  //   accordion

  //   Accordion section data

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const materials = [
    {
      id: 0,
      title: "ABS-Benzeri Beyaz (Accura Xtreme White 200)",
      content: `ABS-Benzeri Beyaz (Accura Xtreme White 200), yaygın olarak kullanılan genel amaçlı bir stereolitografi malzemesidir. Esneklik ve mukavemet açısından, bu malzeme kalıplanmış polipropilen ve kalıplanmış ABS arasında yer alır, bu da onu fonksiyonel prototipler için iyi bir seçim haline getirir. 29 inç x 25 inç x 21 inç kadar büyük parçalar ABS-Benzeri Beyaz ile üretilebilir, bu nedenle geniş parça boyutu yapı hacmi gerektiriyorsa birincil seçenek olarak düşünün.`,
      benefits: [
        "Dayanıklı, genel amaçlı reçine",
        "Ekstra büyük parçaları barındırır",
      ],
    },
    {
      id: 1,
      title: "ABS-Benzeri Gri (Accura Xtreme Gray)",
      content: `ABS-Benzeri Gri (Accura Xtreme Gray), yaygın olarak kullanılan genel amaçlı bir stereolitografi malzemesidir. Esneklik ve mukavemet açısından, bu malzeme kalıplanmış polipropilen ve kalıplanmış ABS arasında yer alır, bu da onu fonksiyonel prototipler için iyi bir seçim haline getirir. ABS-Benzeri Gri, ABS-benzeri SLA reçineleri arasında en yüksek HDT'yi sunar.`,
      benefits: [
        "Dayanıklı, genel amaçlı reçine",
        "ABS-benzeri SLA reçinelerinin en yüksek HDT'si",
      ],
    },
    {
      id: 2,
      title: "ABS-Benzeri Siyah (Accura 7820)",
      content: `ABS-Benzeri Siyah (Accura 7820), yaygın olarak kullanılan genel amaçlı bir malzemedir. Derin siyah rengi ve üst profilde parlak üst yüzeyleri, kalıplanmış bir parça görünümü sunarken, yan profilde katman çizgileri görülebilir. Accura 7820 ayrıca düşük nem emilimine sahiptir (ASTM D570 başına %0,25), böylece parçalar daha boyutsal olarak kararlıdır. Stereolitografi için kullanılan diğer malzemelerle karşılaştırıldığında, tüm mekanik özellikler için orta aralık değerlerine sahiptir.`,
      benefits: ["Düşük nem emilimi", "Parlak kozmetik görünüm"],
    },
    {
      id: 3,
      title: "ABS-Benzeri Yarı Saydam/Şeffaf (WaterShed XC 11122)",
      content: `ABS-Benzeri Yarı Saydam/Şeffaf (WaterShed XC 11122), düşük nem emilimi (ASTM D570 başına %0,35) ve neredeyse renksiz şeffaflığın benzersiz bir kombinasyonunu sunar. Fonksiyonel parça şeffaflığı elde etmek için ikincil işlemler gereklidir ve parça daha sonra çok açık mavi bir renk tonunu da koruyacaktır. Genel amaçlı uygulamalar için iyi olsa da, WaterShed akış görselleştirme modelleri, ışık boruları ve lensler için en iyi seçimdir.`,
      benefits: [
        "SLA reçinelerinin en düşük nem emilimi",
        "Fonksiyonel şeffaflık",
      ],
    },
    {
      id: 4,
      title: "MicroFine™ (Gri ve Yeşil)",
      content: `MicroFine™, Fasonly'ye özel gri ve yeşil renklerde mevcut olan özel formüle edilmiş bir malzemedir. Bu ABS-benzeri termoset, 0,002 inç kadar küçük yüksek çözünürlüklü özellikler elde etmek için Fasonly'nin özelleştirilmiş makinelerinde basılır. MicroFine, genellikle 1 inç x 1 inç x 1 inçten küçük küçük parçalar için idealdir. Mekanik özellikler açısından, MicroFine çekme mukavemeti ve modülü için stereolitografi malzemelerinin orta aralığında ve darbe dayanımı ve uzama için düşük uçta yer alır.`,
      benefits: [
        "En yüksek çözünürlüklü parçalar üretir",
        "Ekstra küçük parçalar için ideal",
      ],
    },
    {
      id: 5,
      title: "PP-Benzeri Yarı Saydam Beyaz (Somos 9120)",
      content: `PP-Benzeri Yarı Saydam Beyaz (Somos 9120), Carbon RPU 70 ve FPU 50 dışındaki en esnek SLA seçeneğidir. Enjeksiyon kalıplanmış bir polipropilenin ortalama değerleriyle doğrudan karşılaştırıldığında, 9120 benzer çekme mukavemeti, çekme modülü, eğilme modülü ve darbe dayanımına sahiptir. Kalıplanmış PP'den tek farkı, kalıplanmış termoplastiğin sadece %25'i olan uzama değeridir.`,
      benefits: ["Yarı esnek", "Yarı saydamlık"],
    },
    {
      id: 6,
      title: "PC-Benzeri Gelişmiş Yüksek Sıcaklık (Accura 5530)",
      content: `PC-Benzeri Gelişmiş Yüksek Sıcaklık (Accura 5530), yüksek sıcaklık direncine sahip güçlü, sert parçalar oluşturur. Bir termal son kürleme seçeneği, HDT'yi 0,46 MPa yüklemede 482°F kadar yükseğe çıkarabilir. Accura 5530, tüm dolgusuz SLA malzemeleri arasında en yüksek E-modülüne sahiptir ve otomotiv sıvılarına dayanıklı olmasıyla bilinir. Ancak, termal kürleme işlemi Accura 5530'u daha az dayanıklı hale getirerek uzamada %50 azalmaya neden olur.`,
      benefits: [
        "Yüksek elastik modül",
        "Isıtılmış sıvılara karşı yüksek direnç",
      ],
    },
    {
      id: 7,
      title: "PC-Benzeri Yarı Saydam/Şeffaf (Accura 60)",
      content: `PC-Benzeri Yarı Saydam/Şeffaf (Accura 60), sertlik istendiğinde genel amaçlı ABS-benzeri malzemelere ve WaterShed XC 11122'ye bir alternatiftir. WaterShed gibi, bu malzeme ikincil işlemlerle fonksiyonel şeffaflık elde etmek için özel olarak bitirilebilir. Accura 60, çoğunlukla termal olarak kürlenen Gelişmiş Yüksek Sıcaklık seçenekleri dışındaki tüm stereolitografi malzemeleri arasında en yüksek çekme mukavemetine ve elastik modülüne sahiptir.`,
      benefits: ["Yüksek sertlik", "Fonksiyonel şeffaflık"],
    },
    {
      id: 8,
      title: "Seramik-Benzeri Gelişmiş Yüksek Sıcaklık (PerFORM)",
      content: `Seramik-Benzeri Gelişmiş Yüksek Sıcaklık (PerFORM), en yüksek çekme mukavemeti ve E-modülü sergileyerek SLA malzemelerinin en sert performans malzemesi olmasını sağlar. PerFORM'dan yapılan parçalara termal kürleme seçeneği uygulandığında, SLA malzemelerinin en yüksek HDT'sini (0,46 MPa yüklemede 514°F kadar yüksek) sergiler.`,
      benefits: ["En sert SLA reçinesi", "SLA reçinelerinin en yüksek HDT'si"],
    },
    {
      id: 9,
      title: "Gerçek Silikon",
      content: `Gerçek silikon, aşağıda detaylandırıldığı gibi farklı shore-A sertliklerinde mevcut olan %100 saf silikondur. Malzeme, hem fonksiyonel prototipleri hem de son kullanım ürünlerini üretmek için uygundur. Malzeme, sert çevre koşullarına, çeşitli asitlere, bazlara ve polar olmayan çözücülere karşı yüksek direnç gösterir.`,
      benefits: ["%100 saf silikon", "Yüksek kimyasal direnç"],
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  //   Units table
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "PA 11 Siyah (PA 850)",
      color: "Siyah",
      tensileStrength: "7,54 ksi",
      tensileModulus: "261 ksi",
      elongation: "%30",
    },
    {
      material: "PA12 Siyah",
      color: "Boyalı Siyah",
      tensileStrength: "6,7 ksi",
      tensileModulus: "276 ksi",
      elongation: "%13",
    },
    {
      material: "PA 12 Beyaz (PA 650)",
      color: "Beyaz",
      tensileStrength: "7,25 ksi",
      tensileModulus: "290 ksi",
      elongation: "%11",
    },
    {
      material: "PA12 Değer",
      color: "Kirli Beyaz",
      tensileStrength: "6,7 ksi",
      tensileModulus: "276 ksi",
      elongation: "%13",
    },
    {
      material: "PA 12 Mineral Dolgulu (Duraform HST)",
      color: "Açık Gri",
      tensileStrength: "5,51 ksi",
      tensileModulus: "450 ksi",
      elongation: "%3",
    },
    {
      material: "PA 12 %40 Cam Dolgulu",
      color: "Beyaz",
      tensileStrength: "7,25 ksi",
      tensileModulus: "522 ksi",
      elongation: "%5",
    },
    {
      material: "Polipropilen Doğal",
      color: "Doğal",
      tensileStrength: "2,61 ksi",
      tensileModulus: "123 ksi",
      elongation: "%15",
    },
    {
      material: "TPU 70-A",
      color: "Beyaz",
      tensileStrength: "580 psi",
      tensileModulus: "",
      elongation: "%210",
    },
  ];

  const metricData = [
    {
      material: "PA 11 Siyah (PA 850)",
      color: "Siyah",
      tensileStrength: "52 MPa",
      tensileModulus: "1.800 MPa",
      elongation: "%30",
    },
    {
      material: "PA12 Siyah",
      color: "Siyah",
      tensileStrength: "46 MPa",
      tensileModulus: "1.900 MPa",
      elongation: "%13",
    },
    {
      material: "PA 12 Beyaz (PA 650)",
      color: "Beyaz",
      tensileStrength: "50,0 MPa",
      tensileModulus: "2.000 MPa",
      elongation: "%11",
    },
    {
      material: "PA12 Değer",
      color: "Kirli Beyaz",
      tensileStrength: "46 MPa",
      tensileModulus: "1.900 MPa",
      elongation: "%13",
    },
    {
      material: "PA 12 Mineral Dolgulu (Duraform HST)",
      color: "Açık Gri",
      tensileStrength: "38 MPa",
      tensileModulus: "3.100 MPa",
      elongation: "%3",
    },
    {
      material: "PA 12 %40 Cam Dolgulu",
      color: "Beyaz",
      tensileStrength: "50 MPa",
      tensileModulus: "3.600 MPa",
      elongation: "%5",
    },
    {
      material: "Polipropilen Doğal",
      color: "Doğal",
      tensileStrength: "18 MPa",
      tensileModulus: "848 MPa",
      elongation: "%15",
    },
    {
      material: "TPU 70-A",
      color: "Beyaz",
      tensileStrength: "4,0 MPa",
      tensileModulus: "",
      elongation: "%210",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="SLS 3D Baskı Hizmeti"
        desc="Hızlı prototipleme, fonksiyonel test ve son kullanım üretimi için uygun özel SLS parçaları sipariş edin."
        image="/Assets/Images/services/3d-printing/selective-laser-sintering/hero.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
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
                    "Yetenekler",
                    "Malzemeler",
                    "Yüzey İşlemleri",
                    "SLS 3D Yazıcılar",
                    "Seçici Lazer Sinterleme Hakkında",
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
              {/* What is Selective Laser Sintering? Section */}
              <div id="seçici-lazer-sinterleme-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  3D Baskı Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Seçici lazer sinterleme (SLS), doğru prototipler ve
                  fonksiyonel üretim parçalarını 1 gün kadar kısa sürede üreten
                  endüstriyel bir 3D baskı sürecidir. Isı direnci, kimyasal
                  direnç, esneklik veya boyutsal kararlılık gerektiren son
                  derece dayanıklı nihai parçalar oluşturan çoklu naylon bazlı
                  malzemeler ve bir termoplastik poliüretan (TPU) mevcuttur. SLS
                  3D baskı ile destek yapıları gerekmez, bu da birden fazla
                  parçayı tek bir yapıya yerleştirmeyi kolaylaştırır ve daha
                  yüksek hacimlerde 3D baskılı parça gerektiğinde ekonomik bir
                  çözüm sunar.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Seçici lazer sinterleme için yaygın kullanımlar şunlardır:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "tezgahlar ve fikstürler",
                    "gövdeler",
                    "geçmeli bağlantılar ve hareketli menteşeler",
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
            {/* Left Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 shadow-xl">
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
                    Neden SLS Kullanmalı?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Neden SLS Kullanmalı?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed">
                SLS'nin, iyi mekanik özelliklere sahip parçalar üretmek için
                gerçek termoplastik ve elastomerik malzemeleri nasıl
                kullandığını görün. Nihai parçalar, gelecekteki enjeksiyon
                kalıplama tasarımlarını test etmek veya fonksiyonel, son
                kullanım bileşenleri olarak kullanılabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Buhar Düzeltme Burada!
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Buhar düzeltme artık seçili 3D baskılı naylon parçalar için
                mevcuttur. Süreç, pürüzlü yüzeyleri ortadan kaldırır ve
                parçalarda parlak, estetik bir yüzey bırakır.
              </p>
              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/selective-laser-sintering/vapor-smooth-part-3jpg.jpg"
                alt="Buhar Düzeltme"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="3D Baskı Kesin Kılavuzu"
        desc="Kapsamlı kılavuzumuz, tüm eklemeli üretim sürecinde - prototiplemeden üretime - yol gösterir."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Seçici Lazer Sinterleme (SLS) için Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Seçici lazer sinterleme için temel kılavuzlarımız, parça
              üretilebilirliğini iyileştirmeye, kozmetik görünümü geliştirmeye
              ve genel üretim süresini azaltmaya yardımcı olacak önemli tasarım
              hususlarını içerir.
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

                {/* Check if description exists */}
                {"description" in currentContent &&
                  currentContent.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentContent.description}
                    </p>
                  )}

                {/* Check if table exists */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Full Height Image */}
            <div className="flex-1 relative w-full h-96 lg:h-auto min-h-[500px] rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/selective-laser-sintering/sls-med-device-part-v1-cutout-lr.webp"
                alt="SLA Malzeme Seçenekleri"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>

            {/* Right Column - Section Header and Accordions */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Seçici Lazer Sinterleme (SLS) Malzemeleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              {/* Material List */}
              <div className="space-y-2">
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => toggleAccordion(material.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200">
                      <span className="font-semibold text-[#0B1221] text-sm md:text-base">
                        {material.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openAccordion === material.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === material.id
                          ? "max-h-[500px] opacity-100 pb-4 px-4"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {material.content}
                      </p>
                      <div className="mt-3">
                        <h4 className="font-semibold text-[#0B1221] text-sm mb-2">
                          Temel Faydalar:
                        </h4>
                        <ul className="space-y-1">
                          {material.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-1.5"></div>
                              <span className="text-gray-600 text-sm">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              SLS Malzeme Özelliklerini Karşılaştır
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUnit("us")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              ABD (Imperial)
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                unit === "metric"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metrik (SI)
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[220px]">
                    Malzeme
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[120px]">
                    Renk
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Çekme Mukavemeti
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Çekme Modülü
                  </th>
                  <th className="text-left p-4 font-semibold min-w-[100px]">
                    Uzama
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    <td className="p-4 text-gray-700 text-sm font-medium">
                      {row.material}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">{row.color}</td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileModulus || "-"}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.elongation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              Bu rakamlar yaklaşıktır ve makine ve süreç parametreleriyle
              sınırlı olmamak üzere bir dizi faktöre bağlıdır. Bu nedenle
              sağlanan bilgiler bağlayıcı değildir ve sertifikalı olarak kabul
              edilmez. Performans kritik olduğunda, eklemeli malzemelerin veya
              nihai parçaların bağımsız laboratuvar testlerini de göz önünde
              bulundurun.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SLS Parçalarında Yüzey İşlemi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              SLS parçalarında yüzey işlemi tipik olarak diğer 3D baskı
              teknolojilerinden daha pürüzlüdür - 100-250 RMS arasında
              değişebilir. Ayrıca, gevşek tozu temizlemek ve pürüzsüz bir mat
              yüzey oluşturmak için müşterilerimizin parçalarının çoğuna boncuk
              püskürtme uyguluyoruz. Buhar düzeltme, PA11 Siyah parçalar için
              mevcut bir işlem sonrası seçeneğidir ve bu da 64-100 pin RA
              arasında yüzey işlemi pürüzlülüğü ile sonuçlanacaktır.
            </p>
          </div>

          {/* Two Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 - PA12 40% Glass-Filled */}
            <div className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔬</span>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-300 text-sm">
                  Malzeme: PA12 %40 Cam Dolgulu
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Çözünürlük: Normal (0,004 inç katman kalınlığı)
                </p>
                <p className="text-[#96E92A] text-xs mt-1 font-semibold">
                  İşlem: Standart
                </p>
              </div>
            </div>

            {/* Image 2 - PA11 Black (PA850) */}
            <div className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔬</span>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-300 text-sm">
                  Malzeme: PA11 Siyah (PA850)
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Çözünürlük: Normal (0,004 inç katman kalınlığı)
                </p>
                <p className="text-[#96E92A] text-xs mt-1 font-semibold">
                  İşlem: Standart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/selective-laser-sintering/sls-machines-570x308-1.webp"
                alt="SLS 3D Yazıcılar"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                SLS 3D Yazıcılarımız
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                SLS ekipmanlarımız, dünyanın en büyük sinterleme yapı hacmine
                sahip sPro140 makinelerini içerir ve tamamen dijital yüksek
                hızlı tarama sistemleri, eşsiz süreç tutarlılığı ve güvenilir
                parça kalitesi için toz karıştırma ve dağıtım için kapalı
                sistemler sunar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ayrıca, birden fazla malzeme ve yüksek verim sağlayan sPro60
                makinelerini de kullanıyoruz.
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Video Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                SLS 3D Baskı Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Seçici lazer sinterleme makinesi, her bir parça geometrisi
                katmanını ısıtılmış bir naylon bazlı toz yatağına sinterleyerek
                başlar. Her katman kaynaştırıldıktan sonra, bir silindir bir
                sonraki toz katmanını dağıtmak için yatak boyunca hareket eder.
                Süreç, yapı tamamlanana kadar katman katman tekrarlanır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yapı tamamlandığında, kapsüllenmiş parçaları içeren tüm toz
                yatağı, yükseltildiği ve parçaların yataktan çıkarıldığı bir
                ayırma istasyonuna taşınır. Gevşek tozun çoğunu temizlemek için
                manuel olarak bir ilk fırçalama uygulanır. Parçalar daha sonra,
                nihayet bitirme bölümüne ulaşmadan önce kalan artık tozu
                temizlemek için boncuk püskürtülür.
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
                    SLS 3D Baskı Süreci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <p className="text-gray-300 text-xs mt-1">
                    3D Baskı Tesisi Turu
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Baskı Tesisimizi Gezin
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Dünyanın en büyük 3D baskı operasyonlarından biri olan Kuzey
                Carolina'daki eklemeli üretim tesisimizde, yüksek kaliteli
                prototipler ve tam fonksiyonel son kullanım bileşenleri ile
                montajları nasıl ürettiğimizi görmek için hızlı bir tur atın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
