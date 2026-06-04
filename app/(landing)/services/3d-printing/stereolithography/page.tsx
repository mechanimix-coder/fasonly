"use client";

import { useState } from "react";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Define types for the content
interface TableContent {
  title: string;
  table: {
    headers: string[];
    rows: string[][];
  };
  description?: never;
}

interface DescriptionContent {
  title: string;
  description: string;
  table: null;
}

type ContentItem = TableContent | DescriptionContent;

export default function Page() {
  const [activeTab, setActiveTab] = useState("maxPartSize");

  const tabs = [
    { id: "maxPartSize", label: "Maks. Parça Boyutu" },
    { id: "layerThickness", label: "Katman Kalınlığı" },
    { id: "minFeatureSize", label: "Minimum Özellik Boyutu" },
    { id: "minWallThickness", label: "Minimum Duvar Kalınlığı" },
    { id: "minHoleSize", label: "Minimum Delik Boyutu" },
    { id: "tolerances", label: "Toleranslar" },
  ];

  const content: Record<string, ContentItem> = {
    maxPartSize: {
      title: "Maks. Parça Boyutu",
      table: {
        headers: ["Çözünürlük", "ABD", "Metrik"],
        rows: [
          [
            "Normal Çözünürlük",
            "29 inç x 25 inç x 21 inç",
            "736mm x 635mm x 533mm",
          ],
          [
            "Yüksek Çözünürlük",
            "10 inç x 10 inç x 10 inç",
            "254mm x 254mm x 254mm",
          ],
          [
            "Mikro Çözünürlük",
            "5 inç x 5 inç x 2,5 inç",
            "127mm x 127mm x 63,5mm",
          ],
        ],
      },
    },
    layerThickness: {
      title: "Katman Kalınlığı",
      table: {
        headers: [
          "Çözünürlük",
          "Katman Kalınlığı (ABD)",
          "Katman Kalınlığı (Metrik)",
        ],
        rows: [
          ["Normal Çözünürlük", "0,004 inç", "0,1016mm"],
          ["Yüksek Çözünürlük", "0,002 inç", "0,0508mm"],
          ["Mikro Çözünürlük", "0,001 inç", "0,0254mm"],
        ],
      },
    },
    minFeatureSize: {
      title: "Minimum Özellik Boyutu",
      table: {
        headers: [
          "Çözünürlük",
          "X-Y (ABD)",
          "X-Y (Metrik)",
          "Z (ABD)",
          "Z (Metrik)",
        ],
        rows: [
          ["Normal Çözünürlük", "0,010 inç", "0,254mm", "0,016 inç", "0,406mm"],
          [
            "Yüksek Çözünürlük",
            "0,005 inç",
            "0,1016mm",
            "0,016 inç",
            "0,406mm",
          ],
          [
            "Mikro Çözünürlük",
            "0,0025 inç",
            "0,0635mm",
            "0,008 inç",
            "0,203mm",
          ],
        ],
      },
    },
    minWallThickness: {
      title: "Minimum Duvar Kalınlığı",
      table: {
        headers: ["Çözünürlük", "ABD", "Metrik"],
        rows: [
          ["Normal Çözünürlük", "0,010 inç", "0,254mm"],
          ["Yüksek Çözünürlük", "0,004 inç", "0,1016mm"],
          ["Mikro Çözünürlük", "0,0025 inç", "0,0635mm"],
        ],
      },
    },
    minHoleSize: {
      title: "Minimum Delik Boyutu",
      table: {
        headers: ["Çözünürlük", "ABD", "Metrik"],
        rows: [
          ["Normal Çözünürlük", "0,025 inç", "0,635mm"],
          ["Yüksek Çözünürlük", "0,020 inç", "0,508mm"],
          ["Mikro Çözünürlük", "0,015 inç", "0,381mm"],
        ],
      },
    },
    tolerances: {
      title: "Stereolitografi (SLA) 3D Baskı Toleransları",
      description:
        "İyi tasarlanmış parçalar için, ilk inç için X/Y boyutunda ±0,002 inç (0,05mm) artı nominal uzunluğun %0,1'i (0,001mm/mm) ve ilk inç için Z boyutunda ±0,005 inç artı nominal uzunluğun %0,1'i toleranslar tipik olarak elde edilebilir. Toleransların parça geometrisine bağlı olarak değişebileceğini unutmayın.",
      table: null,
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

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

  //   metric tables data
  const [unit, setUnit] = useState<"us" | "metric">("us");

  const usData = [
    {
      material: "ABS-Benzeri Beyaz (Accura Xtreme White 200)",
      color: "Beyaz",
      tensileStrength: "7,9 ksi",
      tensileModulus: "479 ksi",
      elongation: "%9",
    },
    {
      material: "ABS-Benzeri Gri (Accura Xtreme Gray)",
      color: "Gri",
      tensileStrength: "5,8 ksi",
      tensileModulus: "290 ksi",
      elongation: "%9",
    },
    {
      material: "ABS-Benzeri Siyah (Accura 7820)",
      color: "Siyah",
      tensileStrength: "7,0 ksi",
      tensileModulus: "435 ksi",
      elongation: "%5",
    },
    {
      material: "ABS-Benzeri Yarı Saydam/Şeffaf (WaterShed XC 11122)",
      color: "Yarı Saydam/Şeffaf",
      tensileStrength: "7,9 ksi",
      tensileModulus: "421 ksi",
      elongation: "%6",
    },
    {
      material: "MicroFine™ (Gri ve Yeşil)",
      color: "Gri veya Yeşil",
      tensileStrength: "8,7 ksi",
      tensileModulus: "377 ksi",
      elongation: "%8",
    },
    {
      material: "PP-Benzeri Yarı Saydam Beyaz (Somos 9120)",
      color: "Yarı Saydam/Beyaz",
      tensileStrength: "5,0 ksi",
      tensileModulus: "232 ksi",
      elongation: "%25",
    },
    {
      material: "PC-Benzeri Yarı Saydam/Şeffaf (Accura 60)",
      color: "Yarı Saydam/Şeffaf",
      tensileStrength: "10,8 ksi",
      tensileModulus: "508 ksi",
      elongation: "%7",
    },
    {
      material: "PC-Benzeri Gelişmiş Yüksek Sıcaklık* (Accura 5530)",
      color: "Yarı Saydam/Kehribar",
      tensileStrength: "6,5 ksi",
      tensileModulus: "566 ksi",
      elongation: "%1,5",
    },
    {
      material: "Seramik-Benzeri Gelişmiş Yüksek Sıcaklık* (PerFORM)",
      color: "Beyaz",
      tensileStrength: "10,9 ksi",
      tensileModulus: "1.523 ksi",
      elongation: "%1",
    },
    {
      material: "Gerçek Silikon",
      color: "Yarı Saydam/Beyaz",
      tensileStrength: "0,711 ksi",
      tensileModulus: "n/a",
      elongation: ">%1.000",
    },
  ];

  const metricData = [
    {
      material: "ABS-Benzeri Beyaz (Accura Xtreme White 200)",
      color: "Beyaz",
      tensileStrength: "54,47 MPa",
      tensileModulus: "3.300 MPa",
      elongation: "%9",
    },
    {
      material: "ABS-Benzeri Gri (Accura Xtreme Gray)",
      color: "Gri",
      tensileStrength: "39,98 MPa",
      tensileModulus: "2.000 MPa",
      elongation: "%9",
    },
    {
      material: "ABS-Benzeri Siyah (RenShape SL7820)",
      color: "Siyah",
      tensileStrength: "48,26 MPa",
      tensileModulus: "3.000 MPa",
      elongation: "%5",
    },
    {
      material: "ABS-Benzeri Yarı Saydam/Şeffaf (WaterShed XC 11122)",
      color: "Yarı Saydam/Şeffaf",
      tensileStrength: "54,47 MPa",
      tensileModulus: "2.600 MPa",
      elongation: "%6",
    },
    {
      material: "MicroFine™ (Gri ve Yeşil)",
      color: "Gri veya Yeşil",
      tensileStrength: "59,98 MPa",
      tensileModulus: "2.600 MPa",
      elongation: "%8",
    },
    {
      material: "PP-Benzeri Yarı Saydam Beyaz (Somos 9120)",
      color: "Yarı Saydam/Beyaz",
      tensileStrength: "34,47 MPa",
      tensileModulus: "1.600 MPa",
      elongation: "%25",
    },
    {
      material: "PC-Benzeri Yarı Saydam/Şeffaf (Accura 60)",
      color: "Yarı Saydam/Şeffaf",
      tensileStrength: "74,46 MPa",
      tensileModulus: "3.503 MPa",
      elongation: "%7",
    },
    {
      material: "PC-Benzeri Gelişmiş Yüksek Sıcaklık* (Accura 5530)",
      color: "Yarı Saydam/Kehribar",
      tensileStrength: "44,81 MPa",
      tensileModulus: "3.902 MPa",
      elongation: "%1,5",
    },
    {
      material: "Seramik-Benzeri Gelişmiş Yüksek Sıcaklık* (PerFORM)",
      color: "Beyaz",
      tensileStrength: "75,15 MPa",
      tensileModulus: "10.500 MPa",
      elongation: "%1",
    },
    {
      material: "Gerçek Silikon",
      color: "Yarı Saydam/Beyaz",
      tensileStrength: "4,9 MPa",
      tensileModulus: "n/a",
      elongation: ">%1.000",
    },
  ];

  const currentData = unit === "us" ? usData : metricData;

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Stereolitografi (SLA) Reçine 3D Baskı Hizmeti"
        desc="Hızlı prototipleme için SLA 3D baskı hizmeti. Birden fazla termoset reçine malzemesi mevcuttur. Anında çevrimiçi teklif alın."
        image="/Assets/Images/services/3d-printing/stereolithography/hero.png"
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
                    "SLA Malzemeleri",
                    "Yüzey İşlemleri",
                    "İşlem Sonrası Seçenekleri",
                    "SLA 3D Yazıcılarımız",
                    "Neden SLA 3D Baskıyı Seçmelisiniz?",
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
              {/* What is Stereolithography? Section */}
              <div id="stereolitografi-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Stereolitografi Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Stereolitografi (SLA), konsept modelleri, kozmetik
                  prototipleri ve karmaşık geometrilere sahip karmaşık parçalar
                  oluşturmak için kullanılan bir 3D baskı sürecidir. Termoset
                  reçineyi bir UV lazerle kürleyerek parçalar oluşturan bir
                  eklemeli üretim teknolojisidir. SLA ile geniş malzeme
                  seçenekleri, son derece yüksek özellik çözünürlükleri ve
                  kaliteli yüzey işlemleri mümkündür.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  SLA 3D baskı öncelikle şunlar için kullanılır:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "0,002 inç kadar küçük yüksek doğruluk ve özellikler gerektiren parçalar",
                    "kozmetik prototipler için iyi yüzey kalitesi",
                    "form ve uyum testi",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stereolithography (SLA) Design Guidelines and Capabilities Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Stereolitografi (SLA) Tasarım Kılavuzları ve Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Stereolitografi için temel kılavuzlarımız, parça
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

                {/* Check if description exists before rendering */}
                {"description" in currentContent &&
                  currentContent.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentContent.description}
                    </p>
                  )}

                {/* Check if table exists before rendering */}
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

                {/* Note for all tabs */}
                <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    *Aşağıdaki malzemeler için mevcuttur: ABS-Benzeri Beyaz ve
                    Gri ile ABS-Benzeri Yarı Saydam/Şeffaf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GuideDownload
        title="3D Baskı Yüzey İşlem Kılavuzu"
        desc="Altı 3D baskı teknolojimiz genelinde yüzey işlem seçeneklerinizi keşfetmek için bu hızlı referans kılavuzunu alın."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Full Height Image */}
            <div className="flex-1 relative w-full h-96 lg:h-auto min-h-[500px] rounded-xl overflow-hidden ">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/service-page-render-sla.jpg"
                alt="SLA Malzeme Seçenekleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Section Header and Accordions */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                SLA Malzeme Seçenekleri
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
              SLA Malzeme Özelliklerini Karşılaştır
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
                      {row.tensileModulus}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.elongation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-4 text-right">
            <p className="text-xs text-gray-400">
              *Listelenen özellikler termal kürlemeye dayalıdır
            </p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SLA Parçalarında Yüzey İşlem Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 font-semibold text-white text-lg">
                    İşlem
                  </th>
                  <th className="text-left p-4 font-semibold text-white text-lg">
                    Açıklama
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Bitmemiş
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Destek yapısı kalıntılarından parçanın alt kısmında noktalar
                    veya dikenler belirgin kalır. Hızlı teslim süreleri
                    gerektiğinde veya maliyet faktör olduğunda iyidir.
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Doğal
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Destekli yüzeyler, destek dikenlerini ortadan kaldırmak için
                    zımparalanır.
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Standart
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Destekli yüzeyler zımparalanır ve tüm parça tutarlı bir
                    görünüm için ince kumlanır. Katmanların hala mevcut olduğunu
                    unutmayın.
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="p-4 text-[#96E92A] font-semibold align-top">
                    Özel
                  </td>
                  <td className="p-4 text-gray-300 leading-relaxed">
                    Yumuşak dokunuşlu boya, şeffaf parça bitirme, boyama,
                    maskeleme, renk eşleme, çıkartmalar/grafikler ve doku
                    yüzeyleri mevcuttur.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Image Grid Section Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              İşlem Örnekleri
            </h3>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Image Grid - Row 1 (ABS-like Translucent/Clear) */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">
              Malzeme: ABS-benzeri Yarı Saydam/Şeffaf
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Bitmemiş", "Standart", "Doğal", "Özel"].map((finish, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
                  <div className="relative w-full h-48 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                    <span className="text-5xl">🔬</span>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-gray-300 text-sm">İşlem: {finish}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid - Row 2 (MicroFine Gray™) */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 text-center">
              Malzeme: MicroFine Gri™
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Bitmemiş", "Standart", "Doğal", "Özel"].map((finish, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-xl overflow-hidden border border-gray-700 hover:border-[#96E92A] transition-all duration-300">
                  <div className="relative w-full h-48 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                    <span className="text-5xl">🔬</span>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-gray-300 text-sm">İşlem: {finish}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Stereolitografi için Ek Yüzey İşlem Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Özel bitirme, bir parçayı tam spesifikasyonlarınıza dönüştürebilen
              bir bilim, teknoloji ve güzel sanatlar karışımıdır. Yüzey
              işlemleri şunları içerir:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[
                "Yumuşak dokunuşlu boya",
                "Şeffaf parça bitirme",
                "Boya yüzeyleri",
                "Maskeleme",
                "Renk eşleme",
                "Çıkartmalar/grafikler",
                "Doku",
              ].map((finish, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 bg-[#F0F8FF] rounded-full text-sm text-gray-600">
                  {finish}
                </span>
              ))}
            </div>
          </div>

          {/* Row 1 - Metal Plating */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/metal-plating.png"
                alt="Metal Kaplama Süreci"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Metal Kaplama
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                SLA için metal kaplama sürecimiz, seramik dolgulu PC-benzeri bir
                malzemeyi (Somos PerFORM) nikel ile kaplayarak parçalara metalin
                görünümünü, hissini ve mukavemetini, ancak ağırlığını vermez.
                Malzemenin mukavemeti, sertliği ve sıcaklık direncinin nikel
                kaplama ile kombinasyonu, mukavemeti, sertliği ve darbe ile
                sıcaklık direncini daha önce SLA parçalarında ulaşılamayan bir
                dereceye taşır.
              </p>
            </div>
          </div>

          {/* Row 2 - Microfluidics */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/microfluidics.webp"
                alt="Mikroakışkan Süreci"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Mikroakışkan
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Mikroakışkan üretim sürecimiz, şeffaf bir ABS-benzeri malzeme
                (WaterShed XC 11122) kullanan yüksek çözünürlüklü SLA'nın
                modifiye edilmiş bir formudur. Parçalar su ve neme karşı
                dirençlidir ve lensler ile akış görselleştirme modelleri için
                iyi çalışır.
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
                SLA 3D Yazıcılarımız
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stereolitografi makinelerimiz Vipers, ProJets ve iPros'tan
                oluşur. Yüksek çözünürlük modunda, Vipers ve ProJets son derece
                küçük özelliklere ve keskin detaylara sahip parçalar
                üretebilirken, normal çözünürlük modunda uygun maliyetli
                parçaları çok hızlı bir şekilde üretebilirler.
              </p>
              <p className="text-gray-600 leading-relaxed">
                iPros'lar 29 inç x 25 inç x 21 inç (736mm x 635mm x 533mm) gibi
                son derece büyük yapı hacimlerine sahiptir, ancak yine de
                oldukça detaylı parçaları kolayca görüntüleyebilirler.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/stereolithography/sla-0894.jpg"
                alt="SLA 3D Yazıcılar"
                fill
                className="object-cover"
              />
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
                    Neden SLA Kullanmalı?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Neden SLA Kullanmalı?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed">
                Stereolitografi (SLA), küçük özelliklere, sıkı tolerans
                gereksinimlerine ve pürüzsüz yüzey kalitelerine sahip parçaları
                3D baskı ile üretebilen bir eklemeli üretim sürecidir.
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
                SLA 3D Baskı Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                SLA makinesi, bir sıvı termoset reçinenin yüzeyine yönlendirilen
                bir ultraviyole lazer ile destek yapılarının katmanlarını ve
                ardından parçanın kendisini çizmeye başlar. Reçine yüzeyinde bir
                katman görüntülendikten sonra, yapı platformu aşağı kayar ve bir
                yeniden kaplama çubuğu bir sonraki reçine katmanını uygulamak
                için platform boyunca hareket eder. Süreç, yapı tamamlanana
                kadar katman katman tekrarlanır.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Yeni üretilen parçalar makineden çıkarılır ve herhangi bir ek
                reçineyi çıkarmak için çözücülerin kullanıldığı bir laboratuvara
                götürülür. Parçalar tamamen temizlendiğinde, destek yapıları
                manuel olarak çıkarılır. Oradan, parçalar parçanın dış yüzeyini
                tamamen katılaştırmak için bir UV kürleme döngüsünden geçer. SLA
                sürecindeki son adım, herhangi bir özel veya müşteri tarafından
                belirtilen bitirmenin uygulanmasıdır. SLA'da üretilen parçalar,
                bozulmamaları için minimum UV ve nem maruziyeti ile
                kullanılmalıdır.
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
                    SLA 3D Baskı Süreci
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
