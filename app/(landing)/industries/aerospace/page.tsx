"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("injection");

  const tabs = [
    { id: "injection", label: "Enjeksiyon Kalıplama" },
    { id: "cnc", label: "CNC İşleme" },
    { id: "printing", label: "3D Baskı" },
    { id: "sheet", label: "Sac Metal İmalatı" },
  ];

  const content = {
    injection: {
      title: "Enjeksiyon Kalıplama",
      description:
        "Günler içinde uygun fiyatlı, yüksek kaliteli kalıplanmış parçalar ve köprü takımı alın. Ücretsiz kalıplanabilirlik danışmanlığımız ile tasarım ve kalıplama süreci, size zaman ve para kazandırmak için hızla hızlandırılır.",
      features: [
        "Hacim fiyatlandırması ile 100.000+ parçaya kadar düşük hacimli kalıplama - MOQ gerekmez",
        "100'den fazla plastik, elastomerik ve silikon kauçuk malzeme",
        "Hızlı, kurum içi kalite dokümantasyonu için otomatik CMM",
      ],
      image: "/Assets/Images/Industries/aerospace/pl_service_im.webp",
    },
    cnc: {
      title: "CNC İşleme",
      description:
        "Fasonly'de alıştığınız aynı hız, hassasiyet ve güvenilirlikten işlemede yararlanın, ancak üretim ağımız aracılığıyla daha sıkı toleranslar ve hacim fiyatlandırması gibi gelişmiş işleme yeteneklerini açığa çıkarın.",
      features: [
        "1 gün kadar kısa sürede işlenmiş parçalar, 4 gün kadar kısa sürede isteğe bağlı kaplama ve anodizasyon",
        "Daha yüksek hacimlerde uygun maliyetli işlenmiş parçalar",
        "Dijital ağımız aracılığıyla ±0,001 inç'e (0,020mm) kadar toleranslar",
      ],
      image: "/Assets/Images/Industries/aerospace/pl_service_cnc.webp",
    },
    printing: {
      title: "3D Baskı",
      description:
        "Tek bir 3D baskı kaynağında kaliteli parçalar ve eklemeli üretim uzmanlığı mı istiyorsunuz? Uygun maliyetli prototipleme ve son derece hassas, tekrarlanabilir üretim parçaları için yedi farklı eklemeli üretim teknolojisi arasından seçim yapın.",
      features: [
        "Eklemeli teknolojiler metal 3D baskı, SLA, SLS, FDM ve daha fazlasını içerir",
        "Çeşitli yüzey işlemlerinde 30 plastik ve metal malzeme",
        "25 yıllık eklemeli üretim uzmanlığı",
      ],
      image: "/Assets/Images/Industries/aerospace/pl_service_3dp-2.webp",
    },
    sheet: {
      title: "Sac Metal İmalatı",
      description:
        "Kolay teklif almadan hızlı teslim üretim ve yüzey işlem seçeneklerine kadar, tek bir tedarikçiden günler içinde 500'e kadar kaliteli sac metal parçayı elinize alın.",
      features: [
        "Etkileşimli üretilebilirlik geri bildirimi ile anında teklifler",
        "Alüminyum, paslanmaz çelik, çelik, pirinç ve bakır dahil altı sac metal malzeme",
        "Kaynak ve donanım yerleştirmeden toz boya ve ipek baskıya kadar yüzey işlem seçenekleri",
      ],
      image: "/Assets/Images/Industries/aerospace/sheet-metal-home.webp",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Prototipleme ve Üretim için Havacılık Bileşen İmalatı"
        desc="Hızlı prototipleme ve talep üzerine üretim ile riski azaltın, lansmana daha hızlı çıkın ve tedarik zincirinizi kolaylaştırın"
        bg="/Assets/Images/Industries/aerospaceHero.jpg"
        text="white"
        firstButton={{ title: "Parça Yükle", route: "/" }}
        secondButton={{ title: "Üretim Teklifi Başlat", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Havacılık ve Savunma Şirketleri Fasonly'yi Nasıl Kullanıyor?
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 4 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Rapid Prototyping */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Hızlı Prototipleme
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Herhangi bir havacılık imalatı başlamadan önce parça tasarımında
                ayarlamalar yapmak için anlık tekliflerimizdeki üretilebilirlik
                için tasarım (DFM) geri bildiriminden yararlanın, ardından erken
                ve geç aşama prototipleme boyunca kolayca hızlı bir şekilde
                ilerleyin.
              </p>
            </div>

            {/* Quality Certification */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kalite Sertifikaları ve İzlenebilirlik
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yüksek gereksinimli parçalar için AS9100 ve ISO9001 sertifikalı
                işleme ve 3D baskı süreçlerimizden yararlanın. Alüminyum
                izlenebilirliği de uygun projelerde mevcuttur.
              </p>
            </div>

            {/* Low-Volume Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Uçtan Uca Ürün Geliştirme
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hızlı prototipleme ve düşük hacimli üretim hizmetlerimizle
                döngüsel geliştirme boyunca hızla ilerleyin. Hazır olduğunuzda,
                son kullanım havacılık uygulamaları için tüm üretim
                ihtiyaçlarınızı karşılamak üzere uygulama mühendisleri
                ekibimizle çalışın.
              </p>
            </div>

            {/* On-Demand Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Havacılık Malzemeleri
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yüksek sıcaklık plastikleri, medikal sınıfı silikon kauçuk ve 3D
                baskılı mikro-çözünürlük ve mikroakışkan parçalar ile yüzlerce
                diğer plastik, metal ve elastomerik malzeme arasından seçim
                yapın.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Description Text */}
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Dünya çapındaki yenilikçi havacılık şirketleri için 25 yılı aşkın
            süredir ürün geliştiren sektördeki en hızlı ve en kapsamlı dijital
            üreticiyiz.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Stat 1 - 96% */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#96E92A] mb-2">
                96%
              </div>
              <p className="text-white text-sm md:text-base">
                Fortune 500
                <br />
                Medikal Şirketlerine Hizmet Verildi
              </p>
            </div>

            {/* Stat 2 - 700 Million */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#96E92A] mb-2">
                700 Milyon
              </div>
              <p className="text-white text-sm md:text-base">Parça Üretildi</p>
            </div>

            {/* Stat 3 - 300,000 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#96E92A] mb-2">
                300.000
              </div>
              <p className="text-white text-sm md:text-base">
                Müşteriye Hizmet Verildi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Production Support Team Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Tam Üretim Destek Ekibi
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Üretim siparişinizi yerine getirmek için perde arkasında çalışan
              bir üretim uzmanları ekibimiz var - tüm süreci yönetiyor ve sizi
              yol boyunca güncel tutuyoruz.
            </p>
          </div>

          {/* 4 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Account Manager */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/customer_support.jpg"
                  alt="Hesap Yöneticisi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Hesap Yöneticisi
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Özel bir hesap yöneticisi, platform ve dosya yüklemelerinde
                  yardım dahil olmak üzere destek sağlar.
                </p>
              </div>
            </div>

            {/* Applications Engineers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/application_engineer.jpg"
                  alt="Uygulama Mühendisleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Uygulama Mühendisleri
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tasarımlarınızı optimize etmek için kurum içi uygulama
                  mühendisleri tarafından özelleştirilmiş uzman CAD çözümleri ve
                  maliyet azaltma stratejileri.
                </p>
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/logistics.jpg"
                  alt="Lojistik"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Lojistik
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Deneyimli operasyon uzmanlarından kesintisiz lojistik yerine
                  getirme ve verimlilik optimizasyonu.
                </p>
              </div>
            </div>

            {/* Quality Control */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/quality_control.jpg"
                  alt="Kalite Kontrol"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Kalite Kontrol
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Yetenekli uzman yerinde kalite kontrol ekiplerimiz,
                  parçalarınızın beklentilerinizi ve tam spesifikasyonlarınızı
                  karşılamasını sağlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aerospace CNC-Machined Parts and Drone Development Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Aerospace CNC-Machined Parts (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                4 Gün Kadar Kısa Sürede Havacılık CNC İşlenmiş Parçalar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                4 gün kadar kısa sürede teslim edilen CNC işlenmiş parçalarla
                havacılık prototiplerini daha hızlı tamamlayın. Tüm bileşenler,
                görev kritik güvenilirlik için izlenebilirlik ve FAI desteği ile
                ITAR ve AS9100 kontrollü tesislerde üretilir. Hassas işleme
                yetenekleri, 4 gün kadar kısa sürede teslim edilen CNC işlenmiş
                parçalarla sıkı toleranslı havacılık prototiplerini daha hızlı
                destekler.
              </p>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/Industries/aerospace/cpp_parts_09-670x360-2c99d11.png"
                alt="Havacılık CNC İşlenmiş Parçalar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Innovative Drone Development (Image Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/Industries/aerospace/amazon-drone.jpg"
                alt="Yenilikçi Drone Geliştirme"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yenilikçi Drone Geliştirme
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Birçok ileri teknoloji drone geliştiricisi, savunma,
                arama-kurtarma, teslimat ve hatta taşımacılık uygulamaları için
                Fasonly ile ortaklık kuruyor. Amazon'un Prime Air drone ekibi,
                şirketin gelişmiş teslimat drone'larında son kullanım üretim
                parçaları için Fasonly'nin hızlı teslim metal 3D baskı ve işleme
                hizmetlerinden yararlandı.
              </p>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Services for Aerospace Products Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Havacılık Ürünleri için Üretim Hizmetleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area - Two Columns */}
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

              <ul className="space-y-3 mb-8">
                {currentContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden ">
              <div className="flex items-center justify-center h-full text-6xl">
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
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                NASA Üretken Tasarım x Hızlı Teslim Üretim
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Altmış yılı aşkın süredir imkansız uzay yolculuğu dünyasını
                mümkün kılan devlet kurumu NASA, şimdi daha dünyevi bir sınırı
                keşfediyor. Yapay zeka (AI) kullanarak yeni CAD tasarımları
                oluşturma olan üretken tasarım için bir test alanı haline geldi.
                Hızlı teslim üretimin havacılık devi için son derece döngüsel
                tasarımı nasıl mümkün kıldığını izleyin.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">FASONLY</span>
                <span className="text-gray-400 text-sm">NASA</span>
              </div>
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
                    NASA x Üretken Tasarım
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Havacılık Endüstrisi için Kalite Önlemleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Endüstri standardı prosedürlerimiz ve sertifikalarımız, kalite ve
              düzenleyici uyumluluğu garanti eder.
            </p>
          </div>

          {/* Part 1 - Image Left, Table Right */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/Industries/aerospace/quality_measures.jpg"
                alt="Havacılık Endüstrisi için Kalite Önlemleri"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Dokümantasyon
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Sertifika
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700">CMM denetim raporu</td>
                      <td className="p-4 text-gray-600">
                        İlk Ürün Denetimi (FAI)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700">
                        Boyutsal Denetim Raporu (DIR)
                      </td>
                      <td className="p-4 text-gray-600">PPAP</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700">
                        Malzeme Sertifikaları + Analiz Sertifikası
                      </td>
                      <td className="p-4 text-gray-600">
                        Çatışma Mineral Raporlaması
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700">
                        REACH + RoHS Sertifikaları
                      </td>
                      <td className="p-4 text-gray-600">Prop65</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700">
                        Endüstri Sertifikaları: ISO 9001 ve AS 9100
                      </td>
                      <td className="p-4 text-gray-600">
                        Uygunluk Sertifikası (CoC)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700">
                        Endüstri Sertifikaları (Fasonly Network): ISO 13485, ISO
                        14001, ISO 45001 ve ISO TS16949
                      </td>
                      <td className="p-4 text-gray-600"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 2 - Grid of 4 Items with Light Blue Background */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Process Traceability */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Süreç İzlenebilirliği
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* CTQ Reporting */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                CTQ Raporlaması
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Report Comparison */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Rapor Karşılaştırması
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Additional Resource */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kalite Güvencesi
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Daha Fazla Bilgi →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Havacılık Bileşenleri için Malzemeler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 5 Items Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Titanium */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/titanium.jpg"
                  alt="Titanyum"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Titanyum
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  İşleme ve metal 3D baskı hizmetleri aracılığıyla mevcut olan
                  bu hafif ve güçlü malzeme, mükemmel korozyon ve sıcaklık
                  direnci sunar.
                </p>
              </div>
            </div>

            {/* Aluminum */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/aluminum.jpg"
                  alt="Alüminyum"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Alüminyum
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Bu metalin yüksek mukavemet-ağırlık oranı, onu yüksek
                  yüklemeyi desteklemesi gereken gövdeler ve braketler için iyi
                  bir aday yapar. Alüminyum, hem işlenmiş hem de 3D baskılı
                  parçalar için mevcuttur.
                </p>
              </div>
            </div>

            {/* Inconel */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/inconel.jpg"
                  alt="Inconel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Inconel
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Bu 3D baskılı metal, roket motoru bileşenleri ve yüksek
                  sıcaklık direnci gerektiren diğer uygulamalar için ideal olan
                  bir nikel krom süper alaşımdır.
                </p>
              </div>
            </div>

            {/* Stainless Steel */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/stainless_steel.jpg"
                  alt="Paslanmaz Çelik"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Paslanmaz Çelik
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  SS 17-4 PH, yüksek mukavemeti, iyi korozyon direnci ve
                  600°F'ye kadar sıcaklıklarda iyi mekanik özellikleri nedeniyle
                  havacılık endüstrisinde yaygın olarak kullanılır.
                </p>
              </div>
            </div>

            {/* Liquid Silicone Rubber */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace/fluorosilicone.jpg"
                  alt="Sıvı Silikon Kauçuk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Sıvı Silikon Kauçuk
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Yakıt ve yağ direncine yönelik olan bu malzeme, optik silikon
                  kauçuğumuz harika bir PC/PMMA alternatifidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yaygın Havacılık Uygulamaları
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Üretim hizmetlerimiz içinde havacılık endüstrisine yönelik
                çeşitli yeteneklerimiz bulunmaktadır. İşte sıkça gördüğümüz
                birkaç uygulama.
              </p>
            </div>

            {/* Right Column - List Items */}
            <div className="flex-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Isı eşanjörleri",
                  "Manifoldlar",
                  "Turbo pompalar",
                  "Tezgahlar ve fikstürler",
                  "Drone'lar",
                  "Sıvı ve gaz akış bileşenleri",
                  "Yakıt nozulları",
                  "Konformal soğutma kanalları",
                  "Vekil parçalar",
                  "Küçük sensörler",
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
  );
}
