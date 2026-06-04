"use client";

import { useState } from "react";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function Page() {
  const [activeTab, setActiveTab] = useState("maxPartSize");
  const [activeMaterial, setActiveMaterial] = useState("toughBlack");
  const [unit, setUnit] = useState<"us" | "metric">("us");
  const [compareUnit, setCompareUnit] = useState<"us" | "metric">("us");

  const tabs = [
    { id: "maxPartSize", label: "Maks. Parça Boyutu" },
    { id: "layerThickness", label: "Katman Kalınlığı" },
    { id: "minFeatureSize", label: "Minimum Özellik Boyutu" },
    { id: "tolerances", label: "Toleranslar" },
    { id: "surfaceFinish", label: "Yüzey İşlem Seçenekleri" },
    { id: "specialOps", label: "Özel Operasyonlar" },
  ];

  const content = {
    maxPartSize: {
      title: "Maks. Parça Boyutu",
      table: {
        headers: ["ABD", "Metrik"],
        rows: [["9,8 inç x 5,5 inç x 19,4 inç", "249mm x 140mm x 499mm"]],
      },
    },
    layerThickness: {
      title: "Katman Kalınlığı",
      table: {
        headers: ["Çözünürlük", "ABD", "Metrik"],
        rows: [
          ["Normal Çözünürlük", "0,004 inç", "0,100mm"],
          [
            "Yüksek Çözünürlük (seramik dolgulu mevcut)",
            "0,002 inç",
            "0,050mm",
          ],
        ],
      },
    },
    minFeatureSize: {
      title: "Minimum Özellik Boyutu",
      tables: [
        {
          title: "Sert Siyah",
          headers: ["", "ABD", "Metrik"],
          rows: [
            ["Yapısal Duvar Kalınlığı", "0,100 inç", "2,5mm"],
            [
              "Destekli Duvarlar (Kaburgalar, Bosslar vb.)",
              "0,040 inç",
              "1,0mm",
            ],
            ["Pozitif Özellikler", "0,020 inç", "0,5mm"],
            ["Negatif Özellikler/Delikler", "0,025 inç", "0,6mm"],
          ],
        },
        {
          title: "Seramik Dolgulu ve Alev Geciktirici Siyah",
          headers: ["", "ABD", "Metrik"],
          rows: [
            ["Yapısal Duvar Kalınlığı", "0,020 inç", "0,5mm"],
            [
              "Destekli Duvarlar (Kaburgalar, Bosslar vb.)",
              "0,010 inç",
              "0,25mm",
            ],
            ["Pozitif Özellikler", "0,010 inç", "0,25mm"],
            ["Negatif Özellikler/Delikler", "0,020 inç", "0,5mm"],
          ],
        },
      ],
    },
    tolerances: {
      title: "Toleranslar",
      description:
        "İyi tasarlanmış parçalar için, ilk inç için ±0,005 inç (0,13mm) artı nominal uzunluğun %0,1'i toleranslar tipik olarak elde edilebilir. Toleransların parça geometrisine ve malzeme seçimine bağlı olarak değişebileceğini unutmayın.",
    },
    surfaceFinish: {
      title: "Yüzey İşlem Seçenekleri",
      table: {
        headers: ["İşlem Tipi", "Açıklama"],
        rows: [
          [
            "Bitmemiş",
            "Destek yapısı kalıntılarından parçanın alt kısmında noktalar veya dikenler belirgin kalır.",
          ],
          [
            "Doğal (Varsayılan)",
            "Destekli yüzeyler, destek dikenlerini ortadan kaldırmak için zımparalanır.",
          ],
          [
            "Standart",
            "Destekli yüzeyler zımparalanır ve tüm parça tutarlı bir görünüm için ince kumlanır. Katmanların hala mevcut olduğunu unutmayın.",
          ],
          [
            "Özel",
            "İkincil seçenekler arasında uygulanabilen astar veya boya ile kılavuz çekme ve ek parçalar bulunur.",
          ],
        ],
      },
    },
    specialOps: {
      title: "Özel Operasyonlar",
      description:
        "Montaja yardımcı olmak ve tam spesifikasyonlarınızı karşılamak için ek bitirme işlemleri mevcuttur. Bunlar şunları içerir:",
      list: ["Kılavuz çekme", "Dişli ek parçalar"],
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  const materials = [
    { id: "toughBlack", label: "Sert Siyah (Loctite Henkel 3843)" },
    { id: "ceramicFilled", label: "Seramik Dolgulu (BASF 3280)" },
    { id: "flameRetardant", label: "Alev Geciktirici Siyah (Arkema FR512)" },
    { id: "esdBlack", label: "ESD Siyah (Loctite 3380)" },
  ];

  const materialContent = {
    toughBlack: {
      title: "Sert Siyah (Loctite Henkel 3843)",
      description:
        "Sert Siyah (Loctite Henkel 3843), yüksek mukavemet, iyi darbe direnci ve mükemmel yüzey kalitesine sahip, yavaş kürlenen, mühendislik sertliğinde bir reçinedir. Tezgahlar ve fikstürler, gövdeler ve kapaklar gibi çok çeşitli takım uygulamaları için harikadır.",
      benefits: [
        "Yüksek darbe dayanımı",
        "Yarı esnek",
        "Mükemmel pürüzsüz ve mat yüzey kalitesi",
      ],
    },
    ceramicFilled: {
      title: "Seramik Dolgulu (BASF 3280)",
      description:
        "Seramik Dolgulu (BASF 3280), yaklaşık 10 GPa'lık son derece yüksek sertlik ve 536°F (280°C) üzerinde HDT sunan bir kompozittir. Bu malzeme genellikle takım ve kalıplama için kullanılır.",
      benefits: [
        "Üstün sertlik",
        "Mükemmel sıcaklık performansı",
        "Yüksek süspansiyon stabilitesi",
        "Seramik benzeri renk ve his",
      ],
    },
    flameRetardant: {
      title: "Alev Geciktirici Siyah (Arkema FR512)",
      description:
        "Alev Geciktirici Siyah (Arkema FR512), yüksek mukavemet ve ısı sapma sıcaklığı (HDT) sunar. Oda sıcaklığında sıvıdır ve sağlam baskı ve işleme yetenekleri sağlar.",
      benefits: [
        "Yüksek mukavemet ve ısı sapma sıcaklığı (HDT)",
        "Oda sıcaklığında sıvı",
        "Sağlam baskı ve işleme",
      ],
    },
    esdBlack: {
      title: "ESD Siyah (Loctite 3380)",
      description:
        "ESD Siyah (Loctite 3380), elektrostatik dağıtma (ESD) yetenekleri ve yüksek sertliğe sahip yüksek sıcaklığa dayanıklı bir reçinedir. Bunu HPS teknolojimizle birleştirmek, çok pürüzsüz, etkileyici kimyasal dirence ve 374°F (190°C) yüksek ısı sapma sıcaklığına (HDT) sahip parçalar elde edilmesini sağlar.",
      benefits: [
        "Yüksek doğruluk ve ince detay baskısı",
        "Elektrostatik dağıtıcı özellikler gösterir (ESD)",
        "Mükemmel sertlik ve çok yönlülük",
      ],
    },
  };

  const currentMaterial =
    materialContent[activeMaterial as keyof typeof materialContent];

  // Compare HPS Material Properties Data
  const hpsUsData = [
    {
      material: "Sert Siyah (Loctite Henkel 3843)",
      hardness: "85A",
      tensileStrength: "8.700 psi",
      elongation: "%17,5",
    },
    {
      material: "Seramik Dolgulu (BASF 3280)",
      hardness: "n/a",
      tensileStrength: "10.900 psi",
      elongation: "%1",
    },
    {
      material: "Alev Geciktirici Siyah (Arkema FR512)",
      hardness: "80A",
      tensileStrength: "7.500 psi",
      elongation: "%60",
    },
    {
      material: "ESD Siyah (Loctite 3380)",
      hardness: "85A",
      tensileStrength: "8.200 psi",
      elongation: "%15",
    },
  ];

  const hpsMetricData = [
    {
      material: "Sert Siyah (Loctite Henkel 3843)",
      hardness: "85A",
      tensileStrength: "60 MPa",
      elongation: "%17,5",
    },
    {
      material: "Seramik Dolgulu (BASF 3280)",
      hardness: "n/a",
      tensileStrength: "75 MPa",
      elongation: "%1",
    },
    {
      material: "Alev Geciktirici Siyah (Arkema FR512)",
      hardness: "80A",
      tensileStrength: "52 MPa",
      elongation: "%60",
    },
    {
      material: "ESD Siyah (Loctite 3380)",
      hardness: "85A",
      tensileStrength: "56 MPa",
      elongation: "%15",
    },
  ];

  const currentHpsData = unit === "us" ? hpsUsData : hpsMetricData;

  // Compare Material Properties Data
  const compareUsData = [
    {
      material: "Alev Geciktirici Siyah (Arkema FR512)",
      color: "Siyah",
      tensileStrength: "6,0916 ksi",
      tensileModulus: "652,7 ksi",
      elongation: "%4,2",
    },
    {
      material: "Sert Siyah",
      color: "Siyah",
      tensileStrength: "7,4 ksi",
      tensileModulus: "262 ksi",
      elongation: "%43",
    },
    {
      material: "Seramik Dolgulu",
      color: "Kirli Beyaz",
      tensileStrength: "12,6 ksi",
      tensileModulus: "1.537 ksi",
      elongation: "%1,30",
    },
    {
      material: "ESD Siyah (Loctite 3380)",
      color: "Siyah",
      tensileStrength: "6,5267 ksi",
      tensileModulus: "420,6 ksi",
      elongation: "%1,0",
    },
  ];

  const compareMetricData = [
    {
      material: "Alev Geciktirici Siyah (Arkema FR512)",
      color: "Siyah",
      tensileStrength: "42 MPa",
      tensileModulus: "4.500 MPa",
      elongation: "%4,2",
    },
    {
      material: "Sert Siyah",
      color: "Siyah",
      tensileStrength: "51 MPa",
      tensileModulus: "1.806 MPa",
      elongation: "%10",
    },
    {
      material: "Seramik Dolgulu",
      color: "Kirli Beyaz",
      tensileStrength: "87 MPa",
      tensileModulus: "10.597 MPa",
      elongation: "%1,30",
    },
    {
      material: "ESD Siyah (Loctite 3380)",
      color: "Siyah",
      tensileStrength: "45 MPa",
      tensileModulus: "2.900 MPa",
      elongation: "%1,0",
    },
  ];

  const currentCompareData =
    compareUnit === "us" ? compareUsData : compareMetricData;

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="3D Baskı için Gelişmiş Fotopolimerler"
        desc="HPS teknolojimiz yüksek kaliteli 3D baskılı parçalar sunar"
        image="/Assets/Images/services/3d-printing/advanced-photopolymers/hero.png"
        firstButton={{ title: "Parça Yükle", route: "/" }}
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
              <div id="prototipleme-ötesi" className="scroll-mt-32">
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

      {/* Hybrid PhotoSynthesis (HPS) Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Hibrit Fotoğraf Sentezi (HPS)
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                HPS teknolojisi, iç ve dış yapıları eşzamanlı olarak
                görüntülemek için hem hassas bir lazer hem de bir dijital ışık
                işleme (DLP) sistemini entegre eder. Bu ikili yaklaşım, Extra3D
                yazıcının geleneksel sınırlamaları aşmasına ve benzersiz hız ve
                kalitede son derece detaylı parçalar üretmesine olanak tanır.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                HPS için yaygın uygulamalar şunlardır:
              </h3>
              <ul className="space-y-2">
                {[
                  "Test ve doğrulama için yüksek doğruluklu özellikler.",
                  "Mükemmel verimlilikle üretim sınıfı parçalar.",
                  "Kozmetik prototipler için cam benzeri yüzey kalitesi.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/services/3d-printing/advanced-photopolymers/hps-ceramic-filled-part.jpg"
                alt="Hibrit Fotoğraf Sentezi (HPS) Teknolojisi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HPS Material Options Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Dynamic Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                HPS Malzeme Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                  {currentMaterial.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentMaterial.description}
                </p>

                <h4 className="font-semibold text-[#0B1221] text-lg mb-3">
                  Temel Faydalar:
                </h4>
                <ul className="space-y-2">
                  {currentMaterial.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Navigation List */}
            <div className="flex-1">
              <div className="bg-[#F0F8FF] rounded-xl overflow-hidden sticky top-32">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setActiveMaterial(material.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-4 ${
                      activeMaterial === material.id
                        ? "bg-white border-l-[#96E92A] text-[#0B1221] font-semibold shadow-sm"
                        : "border-l-transparent text-gray-600 hover:bg-white/50 hover:text-[#0B1221]"
                    }`}>
                    {material.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare HPS Material Properties Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              HPS Malzeme Özelliklerini Karşılaştır
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
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[100px]">
                    Sertlik
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[150px]">
                    Çekme Mukavemeti
                  </th>
                  <th className="text-left p-4 font-semibold min-w-[100px]">
                    Uzama
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentHpsData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    <td className="p-4 text-gray-700 text-sm font-medium">
                      {row.material}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.hardness}
                    </td>
                    <td className="p-4 text-gray-600 text-sm">
                      {row.tensileStrength}
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

      <GuideDownload
        title="3D Baskı Yüzey İşlem Kılavuzu"
        desc="Altı 3D baskı teknolojimiz genelinde yüzey işlem seçeneklerinizi keşfetmek için bu hızlı referans kılavuzunu alın."
      />

      {/* HPS Guidelines and Capabilities Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              HPS Kılavuzları ve Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              HPS için temel kılavuzlarımız, parça üretilebilirliğini
              iyileştirmeye, kozmetik görünümü geliştirmeye ve genel üretim
              süresini azaltmaya yardımcı olacak önemli tasarım hususlarını
              içerir.
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

                {/* Description */}
                {"description" in currentContent &&
                  currentContent.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentContent.description}
                    </p>
                  )}

                {/* List for Special Operations */}
                {"list" in currentContent && currentContent.list && (
                  <ul className="space-y-2 mb-6">
                    {currentContent.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Single Table */}
                {"table" in currentContent && currentContent.table && (
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

                {/* Multiple Tables for Minimum Feature Size */}
                {"tables" in currentContent && currentContent.tables && (
                  <div className="space-y-8">
                    {currentContent.tables.map((table, tableIdx) => (
                      <div key={tableIdx}>
                        <h4 className="text-lg font-bold text-[#0B1221] mb-3">
                          {table.title}
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-[#0B1221] text-white">
                                {table.headers.map((header, idx) => (
                                  <th
                                    key={idx}
                                    className="text-left p-3 font-semibold border-r border-gray-700 last:border-r-0">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row, rowIdx) => (
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
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Material Properties Section - Last Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Malzeme Özelliklerini Karşılaştır
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Unit Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setCompareUnit("us")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                compareUnit === "us"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              ABD (Imperial)
            </button>
            <button
              onClick={() => setCompareUnit("metric")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                compareUnit === "metric"
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
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[200px]">
                    Malzeme
                  </th>
                  <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[100px]">
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
                {currentCompareData.map((row, idx) => (
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

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Surface Finish Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              HPS Parçalarında Yüzey İşlemi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Unfinished */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Bitmemiş
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Destek yapısı kalıntılarından parçanın alt kısmında noktalar
                  veya dikenler belirgin kalır.
                </p>
              </div>

              {/* Natural (Default) */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Doğal (Varsayılan)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Destekli yüzeyler, destek dikenlerini ortadan kaldırmak için
                  zımparalanır.
                </p>
              </div>

              {/* Standard */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Standart
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Destekli yüzeyler zımparalanır ve tüm parça tutarlı bir
                  görünüm için ince kumlanır. Katmanların hala mevcut olduğunu
                  unutmayın.
                </p>
              </div>

              {/* Custom */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">Özel</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  İkincil seçenekler arasında uygulanabilen astar veya boya ile
                  kılavuz çekme ve ek parçalar bulunur.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - How Does HPS Work? */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                HPS Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Cevap hızlıdır - gerçekten hızlı. İki yerleşik teknoloji,
                parçalarının toplamından daha büyük bir bütün oluşturmak için
                bir araya gelir. Carbon DLS gibi, çeşitli geometriler oluşturmak
                için sıvı reçineyi hızla sertleştirmek üzere ışık kullanılır.
                HPS, hassasiyet ve hız eklemek için bir lazer (SLA'da olduğu
                gibi) ekleyerek bunu bir adım daha ileri götürür. Bir katman
                tamamlandığında, yapı platformu yükselir ve parça tamamlanana
                kadar süreç tekrarlanır. Sonuç olarak, hem Carbon DLS'nin hızını
                hem de SLA'nın özellik detaylarını, çözünürlüğünü ve yapı
                hacmini elde edersiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
