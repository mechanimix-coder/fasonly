"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("aluminum");

  const tabs = [
    { id: "aluminum", label: "Alüminyum" },
    { id: "brass", label: "Pirinç" },
    { id: "copper", label: "Bakır" },
    { id: "stainless", label: "Paslanmaz Çelik" },
    { id: "steelAlloy", label: "Çelik Alaşımı" },
    { id: "steelMild", label: "Yumuşak Düşük Karbonlu Çelik" },
    { id: "titanium", label: "Titanyum" },
  ];

  const content = {
    aluminum: {
      title: "Alüminyum",
      description:
        "Alüminyum, düşük yoğunluğu, iyi mekanik özellikleri, yüksek termal ve elektriksel iletkenliği ve korozyon direnci nedeniyle işleme için popüler bir seçimdir. 6061-T651, 7075-T651 ve 2024-T351 gibi alüminyum alaşımları, mukavemet, işlenebilirlik ve maliyet arasında iyi bir denge sundukları için CNC işlemede yaygın olarak kullanılır.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_aluminum-2024_02_hr.jpg",
      link: "#",
    },
    brass: {
      title: "Pirinç",
      description:
        "Pirinç, hem bakır hem de çinkodan oluşan bir alaşımdır. Altın rengi malzeme, yumuşak çeliğe benzer çekme mukavemetine sahip, hava koşullarına ve korozyona dayanıklı bir metaldir. Ayrıca işlenmesi kolay bir malzemedir, bu nedenle ilerleme hızları yüksek kalabilir ve soğutma sıvısı ihtiyacı minimumdur.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_brass_02_hr.jpg",
      link: "#",
    },
    copper: {
      title: "Bakır",
      description:
        "Bakır, korozyona dayanıklı, son derece elektriksel iletken ve yüksek sünekliğe sahip bir metaldir. Parlak turuncu-kırmızımsı görünümü anında tanınabilir ve metal, çevresine tepki olarak patina adı verilen mavimsi-yeşil bir kaplama oluşturan doğal bir oksidasyon sürecinden geçse bile çekici görünür. Bununla birlikte, bakır kaynaklanabilirliğinin orta ila zayıf olduğunu unutmayın.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_copper_02_hr.jpg",
      link: "#",
    },
    stainless: {
      title: "Paslanmaz Çelik",
      description:
        "Paslanmaz çelik, yüksek mukavemeti, dayanıklılığı ve mükemmel işlenebilirliği ile bilinen korozyona dayanıklı bir alaşımdır. Sert ortamlara dayanma ve çeşitli sıcaklıklarda yapısal bütünlüğü koruma yeteneği nedeniyle havacılık, medikal ve gıda işleme endüstrilerinde yaygın olarak kullanılır.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_stainless-steel-303_02_hr.jpg",
      link: "#",
    },
    steelAlloy: {
      title: "Çelik Alaşımı",
      description:
        "Çelik alaşımları, belirli mekanik özellikler elde etmek için demiri karbon ve diğer elementlerle birleştiren mühendislik malzemeleridir. Mükemmel mukavemet, sertlik ve aşınma direnci sunarlar, bu da onları dişliler, miller ve yapısal bileşenler gibi zorlu uygulamalar için ideal kılar.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_steel-alloy-4140_02_hr.jpg",
      link: "#",
    },
    steelMild: {
      title: "Yumuşak Düşük Karbonlu Çelik",
      description:
        "Yumuşak çelik (düşük karbonlu çelik), iyi işlenebilirlik ve kaynaklanabilirliğe sahip çok yönlü ve uygun maliyetli bir malzemedir. Düşük miktarda karbon (tipik olarak %0,05-0,25) içerir, bu da onu sünek ve şekillendirmesi kolay hale getirir. Yüksek mukavemetin birincil gereklilik olmadığı braketler, montaj parçaları ve yapısal bileşenler için yaygın olarak kullanılır.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_low-carbon-steel_02_hr.jpg",
      link: "#",
    },
    titanium: {
      title: "Titanyum",
      description:
        "Titanyum, olağanüstü korozyon direnci ve biyouyumluluğa sahip hafif, yüksek mukavemetli bir metaldir. Havacılık, medikal implantlar ve yüksek performanslı otomotiv uygulamalarında yaygın olarak kullanılır. Titanyumun mükemmel mukavemet-ağırlık oranı, onu hem dayanıklılık hem de azaltılmış kütle gerektiren bileşenler için ideal kılar.",
      image:
        "/Assets/Images/resources/aerospace-machining/material_cnc_milling_titanium_02_hr.jpg",
      link: "#",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Havacılık CNC İşleme"
        desc="Güvenilir teslimat, tutarlı kalite ve duyarlı bir uzman ekibi ile havacılık projesi ve tedarik zinciri riskini azaltın"
        simple
        bg="/Assets/Images/resources/aerospace-machining/short-term-production-hero_v3.jpg"
        firstButton={{ title: "Teklif Al", route: "/" }}
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/cnc-milling-production.jpg"
                alt="Havacılık Endüstrisi için CNC İşleme"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Havacılık Endüstrisi için CNC İşleme
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Hız, güvenilirlik ve kalite uygunluğu, havacılık bileşenlerinin
                temel beklentileridir. CNC işleme hizmetlerimiz, tutarlı ve
                güvenilir hızlı teslim süreleri, uzman tasarım ve
                üretilebilirlik desteği ile basit teklif alma ve sipariş verme
                için çevrimiçi bir platform sunarak zorlu düşük hacimli, yüksek
                karışımlı üretim programlarını destekler.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
              Havacılık Endüstrisindeki Müşterileri Nasıl Destekliyoruz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Dayanıklı, hassas, üretim sınıfı bileşenlerin günler içinde %95+ zamanında teslimatı",
                "Geliştirme ve üretimin her aşamasında uygulama ve teknik uzmanlık",
                "Karmaşık bileşenler için canlı takım tezgahlı yüksek hızlı 3 eksenli ve 5 eksenli frezeleme ve tornalama",
                "Kalifiye alüminyum parçalar için izlenebilirlik",
                "Kalite sertifikaları: ISO 9001:2015, AS9100, ITAR kayıtlı",
                "Daha sıkı toleranslar, çeşitli yüzey işlemleri, arkada malzeme bırakmama ve kapsamlı kalite dokümantasyonu ile parça sipariş etme imkanı",
                "Tutarlı tek kaynaklı tedarikçi",
                "Denetime hazır fabrikalar",
                "Anodizasyon ve kromat kaplama gibi işlem sonrası iyileştirmeler",
                "Hızlı prototipleme ve üretim ile azaltılmış geliştirme maliyeti",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#96E92A] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </span>
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
              Havacılık Parçaları için CNC İşleme Süreçleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - CNC Milling */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row h-full">
              <div className="relative w-2/5 h-auto min-h-[200px] bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-machining/cnc-milling-production.jpg"
                  alt="CNC Frezeleme"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Frezeleme
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  CNC frezeleme, katı plastik ve metal blokları nihai parçalara
                  kesmek için 3 eksenli frezeleme ve 5 eksenli endeksli
                  frezeleme süreçlerini kullanan bir çıkarımlı üretim sürecidir.
                </p>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Yetenekler →
                  </a>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Tasarım Kılavuzları →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 - CNC Turning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row h-full">
              <div className="relative w-2/5 h-auto min-h-[200px] bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-machining/cnc-turning-process-793-hr.jpg"
                  alt="CNC Tornalama"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Tornalama
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Canlı takım tezgahına sahip CNC tornalama, metal çubuk
                  stokundan silindirik özelliklere sahip parçaları işlemek için
                  torna ve freze yeteneklerini birleştirir.
                </p>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Yetenekler →
                  </a>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Tasarım Kılavuzları →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 - Protolabs Network */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row h-full">
              <div className="relative w-2/5 h-auto min-h-[200px] bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-machining/cnc-hubs-parts.jpg"
                  alt="Protolabs Network"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Fasonly Network
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Üretim ağımız, daha sıkı toleranslar, hacim fiyatlandırması ve
                  anodizasyon seçenekleri gibi gelişmiş CNC işleme yetenekleri
                  sağlar.
                </p>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Yetenekler →
                  </a>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors block">
                    Tasarım Kılavuzları →
                  </a>
                </div>
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
              CNC İşlenmiş Havacılık Bileşenleri için Malzemeler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Havacılık endüstrisi için en önemli malzemeleri daha iyi anlamak
                amacıyla kapsamlı araştırmalar yaptık ve müşterilerimizle
                görüştük. Bu araştırma, en çok talep edilen ve işlevsel olarak
                en kullanışlı metalleri içeren özel bir malzeme listesi ortaya
                çıkardı. Uygun fiyatlı ve ağırlığına göre çok güçlü olan
                alüminyum 6061 gibi çalışkan seçenekler, işlediğimiz parçaların
                çoğunluğunu oluşturur, ancak daha zorlu uygulamalar için çeşitli
                çelikler, pirinç, bakır ve hatta titanyum da sunuyoruz.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/pl_cnc_machining_mild_steel.jpg"
                alt="CNC takım tezgahı"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/blog_cnc_chamfers___fillets-chamfers.jpg"
                alt="Havacılık malzemeleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Tasarımcılar, uzaya giden - hatta daha düşük jet uçuş
                seviyelerinde bile - herhangi bir şeyin ağırlığını azaltmanın
                yakıt tüketimini azaltmaya yardımcı olduğunu ve bunun da önemli
                tasarruflar sağladığını bilir. Uygulamalarda sürekli bir ağırlık
                ve mukavemet dengesi vardır ve mevcut malzemelerimiz, nihai
                malzemenin hala değerlendirme altında olabileceği erken tasarım
                ve prototipleme aşamalarında bile ihtiyaçların büyük çoğunluğunu
                karşılar. Mühendisler, birden fazla farklı malzeme
                konfigürasyonunu temsil eden birden fazla versiyonu aynı
                platform içinde oluşturabilir ve test edebilir ve bunu çok hızlı
                bir şekilde yaparak aşırı zaman kaybetmeden mükemmel malzeme
                uyumunu bulabilir.
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
              CNC İşlenmiş Parçalar için Metaller
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area - Two Columns (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentContent.description}
              </p>
              <a
                href={currentContent.link}
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                {currentContent.title.toLowerCase()} CNC işleme hakkında daha
                fazla bilgi edinin →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src={currentContent.image}
                alt={currentContent.title}
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
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/cnc_machining_pom_c.jpg"
                alt="Havacılık için plastik CNC işlenmiş parçalar"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Plastik CNC İşlenmiş Parçalar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Havacılığın odağı genellikle güçlü, hafif metallere yönelse de,
                endüstri ihtiyaçlarıyla tutarlı çeşitli nitelikler sunan bazı
                plastikleri de düşünmek isteyebilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-[#0B1221]">Asetaller</span>{" "}
                özellikle zorlu mekanik uygulamalar için akla gelirken,{" "}
                <span className="font-semibold text-[#0B1221]">Ultem</span> ve{" "}
                <span className="font-semibold text-[#0B1221]">PEEK</span>{" "}
                yüksek sıcaklık uygulamaları için harika seçimlerdir.
              </p>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Plastikleri Keşfedin →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Havacılık Uygulamaları için CNC İşleme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Havacılık endüstrisi, birçok nedenden dolayı CNC işlenmiş
              parçalara güvenir. Bunlardan en önemlileri doğruluk ve
              tekrarlanabilirliktir. Havacılık uygulamalarında parçalar aşırı
              soğuk ve sıcağa, titreşime ve büyük basınç değişikliklerine maruz
              kalır. CNC işleme, genellikle aşağıdaki gibi havacılık bileşenleri
              üretmek için kullanılır:
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Brackets */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Braketler
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hacimli açısal tasarımlar CNC işleme için her zaman iyi bir uyum
                sağlar. Braketler basit ortogonal tabanlı tasarımlar olma
                eğilimindedir ve CNC işleme bunun için harikadır, ancak braket
                yeterince inceyse sac metal imalat hizmetimiz daha iyi bir yol
                olabilir.
              </p>
            </div>

            {/* Card 2 - Engine Components */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Motor Bileşenleri
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bu kritik parçalar aşınma ve yıpranmaya, zorlu ortamlara
                dayanmalı ve pürüzsüz, doğru geometriler gerektirir. İşte çirkin
                bir senaryo: Pistonların pürüzlü silindir kafalarına sürtündüğü
                bir motor hayal edin. CNC işleme bu potansiyel felaketten
                kaçınmaya yardımcı olur. Bu bileşenlerin önemli kuvvetlere ve
                gerilimlere dayanacağına dair güven çok önemlidir.
              </p>
            </div>

            {/* Card 3 - Heat Exchangers */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Isı Eşanjörleri
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bunlar bir CNC freze tezgahında üretmek için iyi parçalardır.
                Parmak freze, görmeye alıştığınız kanat benzeri yapıları
                oluşturmak için katı blokları kesebilir. Kanatlar, çevredeki
                havaya ısı dağılımına yardımcı olmak için ek alan sağlar.
                Bunları iyi tasarlayın ve fanlar gibi aktif soğutma ihtiyacından
                kaçınmak mümkündür.
              </p>
            </div>

            {/* Card 4 - Turbo Pumps */}
            <div className="bg-[#E8F4FD] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Turbo Pompalar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CNC işleme için bir başka yüksek hassasiyetli uygulama olan bu
                pompalar, dakikada binlerce kez döner. Tipik olarak, pervaneler
                ve kanatlar kavislidir ve optimal aerodinamik ve yapısal
                bütünlüğü sağlamak için pürüzsüz ve doğru bir şekilde
                yapılmalıdır. CNC işlemenin parladığı yer burasıdır.
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
              Havacılık Tasarım ve İmalatında Trendler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/maelstrom_engine-1-resized-1.png"
                alt="Düzlemler ve ortogonal özelliklerle geleneksel havacılık tasarımı"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Tarihsel olarak, tasarımcılar düzlemler ve ortogonal özellikler
                açısından düşünme eğilimindedir (çok karmaşık havacılık
                parçaları olmadığı söylenemez). Bu tasarımlar, işleme sürecine
                çok iyi uyum sağlar çünkü tasarım kavramı, nihayetinde bu
                parçaları üreten takım yolundan (yani düzlemlerde ve nispeten
                basit açılarda çalışmak) çok farklı değildir. Bu tarihsel
                zihniyet, modern tasarımları etkileyen mevcut tarihsel verilerin
                çoğunun, işlenmiş malzemelerin çeşitli koşullar ve gerilim
                altında nasıl tepki vereceğine dair geçmiş bilgilerden türetilen
                daha yüksek bir güven derecesi sağlayan aynı CNC'ye uygun açısal
                yaklaşımdan doğduğu anlamına gelir.
              </p>
            </div>
          </div>

          {/* Row 2 - Image Right, Text Left */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Right Column - Image (appears left in DOM but right visually due to flex-row-reverse) */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-machining/nasa-part-background.jpg"
                alt="NASA üretken yapay zeka organik kavisli tasarımları"
                fill
                className="object-cover"
              />
            </div>

            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Yapay zekanın (AI) ortaya çıkmasıyla birlikte yeni tasarım
                süreçleri ortaya çıkmıştır. Desteklediğimiz NASA üretken/AI
                projelerinde, CNC işlemeden ziyade eklemeli üretim için çok daha
                uygun görünen organik kavisli tasarımlara sahip parçalar
                ürettik. Ancak, NASA'nın ortaklığımız hakkındaki bilgisi
                sayesinde, işleme sürecimizle hala uyumlu olan bu organik,
                yapısal olarak optimize edilmiş tasarımları üretebildiler ve
                sonlu elemanlar analizi (FEA) simülasyonlarının farklı bir
                üretim süreciyle yapılmış parçaları doğru şekilde
                yakalayamayacağı endişesini bir miktar hafiflettiler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
