"use client";

import GetAQuote from "@/component/landing/GetAQuote";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

// Type definitions
interface TableRow {
  material: string;
  us: string;
  metric?: string;
}

interface InkStampRow {
  stamp: string;
  spec: string;
}

interface ThreadRow {
  material: string;
  us: string;
  metric?: string;
}

interface ToleranceSection {
  subtitle: string;
  content: string;
}

interface MaximumDimensionsContent {
  title: string;
  description: string;
  table: {
    headers: string[];
    rows: TableRow[];
  };
  note?: string;
  note2?: string;
}

interface MinimumDimensionsContent {
  title: string;
  description: string;
  table: {
    headers: string[];
    rows: TableRow[];
  };
  note: string;
}

interface ThreadingContent {
  title: string;
  description: string;
  table: {
    headers: string[];
    rows: ThreadRow[];
  };
  additionalOptions: string[];
  link: string;
}

interface TolerancesContent {
  title: string;
  description: string;
  sections: ToleranceSection[];
}

interface RadiiContent {
  title: string;
  description: string;
  table: null;
}

interface TextContent {
  title: string;
  description: string;
  sections: ToleranceSection[];
  bulletPoints: string[];
  note: string;
  inkTable: {
    headers: string[];
    rows: InkStampRow[];
  };
}

type TabContent =
  | MaximumDimensionsContent
  | MinimumDimensionsContent
  | ThreadingContent
  | TolerancesContent
  | RadiiContent
  | TextContent;

interface Tab {
  id: string;
  label: string;
}
export default function page() {
  const [activeTab, setActiveTab] = useState<string>("maximumDimensions");

  const tabs: Tab[] = [
    { id: "maximumDimensions", label: "Maksimum Boyutlar" },
    { id: "minimumDimensions", label: "Minimum Boyutlar" },
    { id: "threading", label: "Diş Açma" },
    { id: "tolerances", label: "Toleranslar" },
    { id: "radii", label: "Yarıçaplar" },
    { id: "text", label: "Metin" },
  ];

  const content: Record<string, TabContent> = {
    maximumDimensions: {
      title: "Maksimum Boyutlar",
      description:
        "Malzemeye göre belirli frezeleme boyutları için işleme için maksimum parça boyutlarına bakın.",
      table: {
        headers: ["Malzeme", "ABD", "Metrik"],
        rows: [
          {
            material: "3 eksenli - ABS",
            us: "10 inç x 14 inç x 1,75 inç",
            metric: "254mm x 356mm x 44,5mm",
          },
          {
            material: "3 eksenli - Asetal",
            us: "22 inç x 14 inç x 0,75 inç",
            metric: "559mm x 356mm x 19,1mm",
          },
          {
            material: "3 eksenli - Naylon",
            us: "22 inç x 14 inç x 0,75 inç",
            metric: "559mm x 356mm x 19,1mm",
          },
          {
            material: "3 eksenli - Alüminyum",
            us: "22 inç x 14 inç x 3,75 inç",
            metric: "559mm x 356mm x 95,3mm",
          },
          {
            material: "3 eksenli - Sert metaller*",
            us: "22 inç x 14 inç x 3,75 inç",
            metric: "559mm x 356mm x 95,3mm",
          },
          {
            material: "5 eksenli - Pirinç",
            us: "10 inç x 7 inç x 1,75 inç",
            metric: "254mm x 178mm x 44,5mm",
          },
          {
            material: "5 eksenli - Bakır",
            us: "10 inç x 7 inç x 1,75 inç",
            metric: "254mm x 178mm x 44,5mm",
          },
          {
            material: "5 eksenli - Alüminyum",
            us: "10 inç x 7 inç x 3,75 inç",
            metric: "254mm x 178mm x 95,3mm",
          },
          {
            material: "5 eksenli - Paslanmaz Çelik 304",
            us: "4,25 inç x 3,25 inç x 3,75 inç",
            metric: "107,95mm x 82,55mm x 95,25mm",
          },
        ],
      },
      note: "*Sert metaller: Titanyum (6Al-4V), Paslanmaz Çelikler (303, 316, 17-4PH), Çelik Alaşımı (4140)",
      note2: "**Yalnızca iki taraflı işlemeyi belirtir",
    },
    minimumDimensions: {
      title: "Minimum Boyutlar",
      description: "CNC frezeleme için minimum parça boyutu gereksinimleri.",
      table: {
        headers: ["", "ABD", "Metrik"],
        rows: [
          {
            material: "Boyut",
            us: "0,25 inç x 0,25 inç",
            metric: "6,35mm x 6,35mm",
          },
          {
            material: "Nominal Kalınlık",
            us: "0,040 inç",
            metric: "1,02mm",
          },
        ],
      },
      note: "Freze edilebilecek maksimum derinlik, parçanın her iki tarafından 2 inçtir (50,8mm).",
    },
    threading: {
      title: "Diş Açma",
      description:
        "Fasonly otomatik fabrikasında, şu anda #2'den 0,5 inç'e kadar UNC ve UNF dişleri ve M2'den M12'ye kadar metrik dişleri destekliyoruz. Parça tasarımınızda iç diş modellemekten kaçının.",
      table: {
        headers: ["Diş Tipi", "Boyut Aralığı"],
        rows: [
          { material: "UNC / UNF", us: "#2'den 0,5 inç'e kadar" },
          { material: "Metrik", us: "M2'den M12'ye" },
        ],
      },
      additionalOptions: ["Bobin ek parçalar", "Anahtar ek parçalar"],
      link: "Diş Açma Seçeneklerini Görüntüle",
    },
    tolerances: {
      title: "Toleranslar",
      description: "",
      sections: [
        {
          subtitle: "Standart Toleranslar",
          content:
            "Teknik çizim gerektirmeyen parçalar için tipik olarak +/- 0,005 inç (0,13mm) işleme toleransı uygulayabiliriz. Parça özelliklerinin tüm bölgelerde 0,020 inçten (0,51mm) daha kalın ve nominal parça kalınlığının 0,040 inçin üzerinde olması önerilir.",
        },
        {
          subtitle: "Yüksek Gereksinimli Toleranslar",
          content:
            "Ek tolerans gereksinimleri için, yükleme sırasında bir teknik çizim talep ediyoruz. ISO 2768-1-1989-f standardına göre doğrusal tolerans belirtilir, standart delik toleransı +/- 0,005 inçtir (0,13mm) ve belirtilen özelliklerde delik ve silindirik delik toleransı +/- 0,0005 inç (0,01mm) olabilir.",
        },
      ],
    },
    radii: {
      title: "Yarıçaplar",
      description:
        "Bir parça üzerindeki keskin iç köşeler, CNC işleme sürecinin doğal bir sonucu olarak yuvarlatılır (radislenir). Ortaya çıkan yarıçaplar, izin verilen minimum takım yarıçapı olacaktır.",
      table: null,
    },
    text: {
      title: "Metin",
      description: "",
      sections: [
        {
          subtitle: "Gravür",
          content:
            "Fasonly'nin tam otomatik fabrikası, gravürü tasarımınıza dahil etmenize olanak tanır.",
        },
      ],
      bulletPoints: [
        "Plastikler ve yumuşak metaller: Minimum genişlik 0,018 inç (0,457mm), derinlik 0,0118 inç (0,3mm). Örnek metin boyutu 16 punto Arial Rounded MT yazı tipi olacaktır.",
        "Sert metaller: Minimum genişlik 0,033 inç (0,838mm) ve derinlik 0,0118 inç (0,3mm). Örnek metin boyutu 22 punto Arial Rounded MT yazı tipi olacaktır.",
        "Tasarım izin veriyorsa, kabartma metin yerine girintili metni tercih edin.",
      ],
      note: "Fasonly ayrıca yarı otomatik fabrika yeteneğimiz ve Fasonly Network web sitesi aracılığıyla Lazer Parça İşaretleme ve Mürekkep Damgası sunmaktadır.",
      inkTable: {
        headers: ["Mürekkep Damgası", "Özellik"],
        rows: [
          {
            stamp: "Siyah Mürekkep",
            spec: 'MIL-A-208, 13 punto (1/8") Karakterler',
          },
          {
            stamp: "Siyah Epoksi Mürekkep",
            spec: 'MIL-A-56032, 13 punto (1/8") Karakterler',
          },
          {
            stamp: "Beyaz Mürekkep",
            spec: 'MIL-A-208, 13 punto (1/8") Karakterler',
          },
          {
            stamp: "Beyaz Epoksi Mürekkep",
            spec: 'MIL-A-56032, 13 punto (1/8") Karakterler',
          },
        ],
      },
    },
  };

  const currentContent = content[activeTab];

  // Helper function to check if content has a table
  const hasTable = (
    content: TabContent,
  ): content is
    | MaximumDimensionsContent
    | MinimumDimensionsContent
    | ThreadingContent => {
    return "table" in content && content.table !== null;
  };

  // Helper function to check if content has additionalOptions
  const hasAdditionalOptions = (
    content: TabContent,
  ): content is ThreadingContent => {
    return "additionalOptions" in content;
  };

  // Helper function to check if content has link
  const hasLink = (content: TabContent): content is ThreadingContent => {
    return "link" in content;
  };

  // Helper function to check if content has sections
  const hasSections = (
    content: TabContent,
  ): content is TolerancesContent | TextContent => {
    return "sections" in content;
  };

  // Helper function to check if content has bulletPoints
  const hasBulletPoints = (content: TabContent): content is TextContent => {
    return "bulletPoints" in content;
  };

  // Helper function to check if content has inkTable
  const hasInkTable = (content: TabContent): content is TextContent => {
    return "inkTable" in content;
  };

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="CNC Frezeleme Hizmeti"
        desc="Hızlı prototipleme ve üretim için özel frezelenmiş parçalar alın."
        image="/Assets/Images/services/injection-molding/cnc_circflange_al_beadblastededge.webp"
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
              {/* What is CNC Milling? Section */}
              <div id="cnc-frezeleme-nedir" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  CNC Frezeleme Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Sıvı silikon kauçuk (LSR) kalıplama sürecimiz, 15 gün veya
                  daha kısa sürede özel prototipler ve son kullanım üretim
                  parçaları üretir. Maliyet etkin takım ve hızlandırılmış üretim
                  döngüleri sunan alüminyum kalıplar kullanıyoruz ve çeşitli
                  kalite ve sertlik derecelerinde LSR malzemeleri stokluyoruz.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Silikon kauçuk kalıplama için yaygın uygulamalar:
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
        title="CNC İşleme Tasarım Kılavuzu"
        desc="Bu CNC işleme kılavuzunda, prototipleme ve üretim için verimli, üretilebilir metal ve plastik parçaların nasıl oluşturulacağını öğreneceksiniz."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              CNC Frezeleme Tasarım Kılavuzları ve Yetenekler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              CNC frezeleme için temel kılavuzlarımız, parça üretilebilirliğini
              iyileştirmeye, kozmetik görünümü geliştirmeye ve genel üretim
              süresini azaltmaya yardımcı olacak önemli tasarım hususlarını
              içerir.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              Daha fazla detay için tasarım kılavuzları sayfamızı görüntüleyin.
              →
            </a>
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

                {/* Description */}
                {currentContent.description && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentContent.description}
                  </p>
                )}

                {/* Table */}
                {hasTable(currentContent) && currentContent.table && (
                  <div className="overflow-x-auto mb-6">
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
                            <td className="p-3 text-gray-700 text-sm font-medium">
                              {row.material}
                            </td>
                            <td className="p-3 text-gray-600 text-sm">
                              {row.us}
                            </td>
                            {"metric" in row && row.metric && (
                              <td className="p-3 text-gray-600 text-sm">
                                {row.metric}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Note */}
                {"note" in currentContent && currentContent.note && (
                  <p className="text-sm text-gray-500 italic mb-4">
                    {currentContent.note}
                  </p>
                )}
                {"note2" in currentContent && currentContent.note2 && (
                  <p className="text-sm text-gray-500 italic mb-4">
                    {currentContent.note2}
                  </p>
                )}

                {/* Additional Options for Threading */}
                {hasAdditionalOptions(currentContent) &&
                  currentContent.additionalOptions && (
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">
                        Frezelenmiş parçalar için ayrıca şunları da sunuyoruz:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        {currentContent.additionalOptions.map((opt, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Link for Threading */}
                {hasLink(currentContent) && currentContent.link && (
                  <a
                    href="#"
                    className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                    {currentContent.link} →
                  </a>
                )}

                {/* Sections for Tolerances and Text */}
                {hasSections(currentContent) && currentContent.sections && (
                  <div className="space-y-4 mb-6">
                    {currentContent.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-bold text-[#0B1221] mb-2">
                          {section.subtitle}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points for Text */}
                {hasBulletPoints(currentContent) &&
                  currentContent.bulletPoints && (
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      {currentContent.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                {/* Note for Text (when no table) */}
                {"note" in currentContent &&
                  currentContent.note &&
                  !hasTable(currentContent) && (
                    <p className="text-gray-600 text-sm mb-4">
                      {currentContent.note}
                    </p>
                  )}

                {/* Ink Stamp Table for Text */}
                {hasInkTable(currentContent) && currentContent.inkTable && (
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0B1221] text-white">
                          {currentContent.inkTable.headers.map(
                            (header, idx) => (
                              <th
                                key={idx}
                                className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                                {header}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {currentContent.inkTable.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className={`border-b border-gray-200 ${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            <td className="p-3 text-gray-700 text-sm font-medium">
                              {row.stamp}
                            </td>
                            <td className="p-3 text-gray-600 text-sm">
                              {row.spec}
                            </td>
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
      <GetAQuote
        title="Son Kullanım Parçaları için CNC İşleme Hizmetleri"
        desc="Genişletilmiş otomatik CNC frezeleme ile yüksek kaliteli işlenmiş parçaları daha hızlı alın - parçalar 4 gün kadar kısa sürede hazır"
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part.webp"
                  }
                  fill
                  alt="Alüminyum CNC frezelenmiş parça"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                CNC Frezeleme Malzemeleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Çeşitli parça uygulamaları ve endüstriler için uygun 30'dan
                fazla üretim sınıfı plastik ve metal malzeme stokluyoruz.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Plastics */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                    Plastikler
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "ABS",
                      "Asetal",
                      "CPVC",
                      "HDPE",
                      "Naylon",
                      "PEEK",
                      "PEI",
                      "PET",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metals */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                    Metaller
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Alüminyum",
                      "Pirinç",
                      "Bakır",
                      "Paslanmaz Çelik",
                      "Çelik Alaşımı",
                      "Yumuşak Düşük Karbonlu Çelik",
                      "Titanyum",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                CNC işlenmiş parçalar için standart yüzey işlemlerini ve ayrıca
                dayanıklılığı, yüzey kalitesini iyileştirmek ve renk eklemek
                için gelişmiş yetenekleri değerlendirin.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium mt-4 group">
                Seçenekleri Keşfet →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frezelenmiş Parçalarda Yüzey İşlemi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              Tipik olarak, tüm işlenmiş parçaların kenarlarını kırarız (çapak
              alırız). Tüm işlenmiş plastik parçalar işlenmiş olarak bırakılır,
              bu da görünür takım izleri bırakabilir. Diğer yandan, bazı metal
              parçalar daha fazla seçenek sunar. Keskin kenarlı bırakılan
              parçalar dikkatle tutulmalıdır.
            </p>
          </div>

          {/* Grid of Finish Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 - ABS Black */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/black-abs-plastic-milled-part.webp"
                  }
                  fill
                  alt="Siyah ABS plastik parça"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">ABS Siyah</h3>
                <p className="text-gray-300 text-sm">İşlem: Kırık kenar</p>
              </div>
            </div>

            {/* Item 2 - ABS Natural */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/abs-natural-cnc-milled-part.png"
                  }
                  fill
                  alt="Doğal ABS parça"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">ABS Doğal</h3>
                <p className="text-gray-300 text-sm">İşlem: Kırık kenar</p>
              </div>
            </div>

            {/* Item 3 - Aluminum (Broken Edge) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part-broken-edges.webp"
                  }
                  fill
                  alt="Alüminyum parça - kırık kenar"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">Alüminyum</h3>
                <p className="text-gray-300 text-sm">İşlem: Kırık kenar</p>
              </div>
            </div>

            {/* Item 4 - Aluminum (Bead Blast) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part-with-bead-blast.png"
                  }
                  fill
                  alt="Alüminyum parça - boncuk püskürtme"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">Alüminyum</h3>
                <p className="text-gray-300 text-sm">İşlem: Boncuk Püskürtme</p>
              </div>
            </div>

            {/* Item 5 - Aluminum (Sharp Edge) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/cnc-machining/cnc-milling/aluminum-cnc-milled-part-with-sharp-edges.webp"
                  }
                  fill
                  alt="Alüminyum parça - keskin kenar"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">Alüminyum</h3>
                <p className="text-gray-300 text-sm">İşlem: Keskin kenar</p>
              </div>
            </div>

            {/* Item 6 - Additional Example */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <span className="text-5xl">🔩</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg">
                  Paslanmaz Çelik
                </h3>
                <p className="text-gray-300 text-sm">İşlem: İşlenmiş olarak</p>
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
              Dijital İşleme Atölyemizi Gezin
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Minnesota'daki 215.000 feet karelik CNC işleme tesisimizde
              parçaları 24 saat kadar kısa sürede nasıl ürettiğimizi görmek için
              hızlı bir tur atın.
            </p>
          </div>

          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🏭</span>
                <p className="text-gray-500 text-sm mt-2">
                  CNC İşleme Atölyesi
                </p>
                <span className="absolute bottom-4 left-4 bg-[#0B1221]/80 text-white text-xs px-2 py-1 rounded">
                  Freze Başlığı (2 eksenli)
                </span>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                CNC Frezeleme Nedir ve Nasıl Çalışır?
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                CNC frezeleme, çıkarımlı bir üretim sürecidir. Bir metal veya
                plastik malzeme bloğunu CNC freze makinesinin içine sabitleyerek
                başlar. G-kodu kullanarak, CNC makinesi ham malzeme bloğundan
                hızla parçalar frezelemek üzere programlanır. 3 ve 5 eksenli CNC
                makinelerimiz, verimliliği ve üretim hızını maksimize etmek için
                çeşitli takım setleriyle donatılmıştır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                İşlenmiş plastik parçalar frezelenmiş olarak bırakılır, bu tipik
                olarak görünür takım izleri gösterdikleri anlamına gelir. Bazı
                metal parçalar, anodizasyon ve kromat kaplama gibi daha fazla
                bitirme seçeneğine izin verir. Çalıştırma tamamlandığında ve
                gerekli yüzey işleminiz uygulandığında, parçalar kutulanır ve
                kısa bir süre sonra gönderilir.
              </p>
            </div>
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Gelişmiş CNC Yetenekleri
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Son teknoloji tesisimiz, parçalarınızı zamanında teslim etmek
                için 7/24 çalışan 200'den fazla CNC makinesine ev sahipliği
                yapmaktadır. Otomatik takım değiştiriciler, süreç içi problar ve
                gerçek zamanlı izleme ile her üretim çalışmasında tutarlı kalite
                sağlıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hızlı prototiplerden yüksek hacimli üretime kadar, dijital
                üretim sürecimiz geleneksel darboğazları ortadan kaldırır. CAD
                dosyanızı yükleyin, anında DFM geri bildirimi alın ve
                parçalarınızı haftalar değil, günler içinde teslim alın.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">⚙️</span>
                <p className="text-gray-500 text-sm mt-2">
                  5 Eksenli CNC Makinesi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
