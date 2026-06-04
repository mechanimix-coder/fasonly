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
      image: "/Assets/Images/Industries/medical/pl_service_im.webp",
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
      image: "/Assets/Images/Industries/medical/pl_service_cnc.webp",
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
      image: "/Assets/Images/Industries/medical/pl_service_3dp-2.webp",
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
      image: "/Assets/Images/Industries/medical/sheet-metal-home.webp",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Medikal Cihaz Prototipleme ve Üretimini Hızlandırma"
        desc="Hızlı prototipleme ve medikal bileşenlerin talep üzerine üretimi ile pazara daha hızlı çıkın ve tedarik zincirinizi kolaylaştırın"
        bg="/Assets/Images/Industries/medicalHero.jpg"
        text="black"
        firstButton={{ title: "Parça Yükle", route: "/" }}
        secondButton={{ title: "Üretim Teklifi Başlat", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Medikal Şirketleri Fasonly'yi Nasıl Kullanıyor?
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
                Fonksiyonel ve düzenleyici testler için üretim sınıfı
                malzemelerde prototipler oluşturun veya medikal prosedürlerden
                önce önizleme yapmak için modeller ve organ taramaları basmak
                üzere 3D baskı hizmetimizi kullanın.
              </p>
            </div>

            {/* Quality Certification */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kalite Sertifikası
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yüksek gereksinimli uygulamalara ve ISO 13485 kalite
                sertifikasına yönelik kalıplama yetenekleri ile FDA Sınıf II ve
                cihazların veya implant olmayan bileşenlerin geliştirilmesini
                kolaylaştırın.
              </p>
            </div>

            {/* Low-Volume Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Düşük Hacimli Üretim
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kaliteli son kullanım parçalarını pazara hızlıca ulaştırmak için
                üretimi artırın ve minimum sipariş miktarı (MOQ) ve düşük toplam
                sahip olma maliyeti (TCO) ile finansal riski azaltmak için parti
                üretimini kullanın.
              </p>
            </div>

            {/* On-Demand Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Talep Üzerine Üretim
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Geliştirme aşamasından bağımsız olarak, gerektiğinde hızlı
                teslim parçalar sipariş ederek tedarik zincirinize çeviklik
                kazandırın.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Description Text */}
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Dünya çapındaki yenilikçi medikal şirketleri için 25 yılı aşkın
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
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Hesap Yöneticisi
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Özel bir hesap yöneticisi, platform ve dosya yüklemelerinde
                yardım dahil olmak üzere destek sağlar.
              </p>
            </div>

            {/* Applications Engineers */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Uygulama Mühendisleri
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tasarımlarınızı optimize etmek için kurum içi uygulama
                mühendisleri tarafından özelleştirilmiş uzman CAD çözümleri ve
                maliyet azaltma stratejileri.
              </p>
            </div>

            {/* Logistics */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Lojistik
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Deneyimli operasyon uzmanlarından kesintisiz lojistik yerine
                getirme ve verimlilik optimizasyonu.
              </p>
            </div>

            {/* Quality Control */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
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
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Medikal Ürünler için Üretim Hizmetleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
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
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                {currentContent.title}
              </h3>
              <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentContent.description}
              </p>
              <ul className="space-y-3 mb-6">
                {currentContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-[#0099ff] hover:text-[#96E92A] font-medium transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={currentContent.image}
                  alt={currentContent.title}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Medikal Ürün Geliştirmede Güvenilir Ortağınız
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hız, kalite ve teknik uzmanlık tüm sürecimize entegre
                edilmiştir. Bizimle ortaklık yapmak, tasarımınızın optimize
                edilmesini, geliştirme zaman çizelgenizin hızlandırılmasını ve
                prototiplemeden son kullanım üretimine kadar desteklenmenizi
                sağlamaya yardımcı olur.
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
                    Medikal Ürün Geliştirme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={"/Assets/Images/Industries/medical/quality_measures.jpg"}
                  alt={"Kalite önlemleri"}
                  fill
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Medikal Endüstrisi için Kalite Önlemleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Endüstri standardı prosedürlerimiz ve sertifikalarımız, kalite
                ve düzenleyici uyumluluğu garanti eder.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        CMM denetim raporu
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Boyutsal Denetim Raporu (DIR)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Malzeme Sertifikaları + Analiz Sertifikası
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        REACH + RoHS Sertifikaları
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Endüstri Sertifikaları: ISO 9001, AS 9100 ve ISO 13485
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        İlk Ürün Denetimi (FAI)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">PPAP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Çatışma Mineral Raporlaması
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">Prop65</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">
                        Uygunluk Sertifikası (CoC)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Grid of 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Process Traceability */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Süreç İzlenebilirliği
              </h3>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* CTQ Reporting */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                CTQ Raporlaması
              </h3>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Report Comparison */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Rapor Karşılaştırması
              </h3>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
                Daha Fazla Bilgi →
              </a>
            </div>

            {/* Industry Certifications (Network) */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Ağ Sertifikaları
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                ISO 13485, ISO 14001, ISO 45001, ISO TS16949
              </p>
              <a
                href="#"
                className="text-[#0099ff] hover:text-[#96E92A] text-sm font-medium inline-flex items-center gap-1">
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
              Medikal Uygulamalar için Malzemeler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 6 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* High-temp Plastics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/peek.jpg"}
                  alt={"Yüksek sıcaklık plastikleri"}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Yüksek Sıcaklık Plastikleri
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  PEEK ve PEI (Ultem) yüksek sıcaklık direnci, sünme direnci
                  sunar ve sterilizasyon gerektiren uygulamalar için uygundur.
                </p>
              </div>
            </div>

            {/* Medical-grade Silicone Rubber */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/silicone_parts.jpg"}
                  alt={"Medikal sınıfı silikon kauçuk"}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medikal Sınıfı Silikon Kauçuk
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Dow Corning'in QP1-250'si mükemmel termal, kimyasal ve
                  elektrik direncine sahiptir. Ayrıca biyouyumludur, bu nedenle
                  cilt teması gerektiren uygulamalarda kullanılabilir.
                </p>
              </div>
            </div>

            {/* Advanced Photopolymers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/frame-9-1.jpg"}
                  alt={"Gelişmiş fotopolimerler"}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Gelişmiş Fotopolimerler
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sert Siyah ve seramik dolgulu, Hibrit Fotosentez (HPS)
                  teknolojimiz aracılığıyla sunulan üretim sınıfı malzemelerdir
                  ve geç aşama prototipleme veya son kullanım cihazları için
                  idealdir.
                </p>
              </div>
            </div>

            {/* Micro-resolution */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/micro_fine.jpg"}
                  alt={"Mikro çözünürlük"}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Mikro Çözünürlük
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  MicroFine™ (yeşil ve gri), Fasonly tarafından 0,0025 inç kadar
                  küçük mikro boyutlu özelliklere sahip karmaşık 3D baskılı
                  parçalar üretmek için geliştirilmiş özel bir malzemedir.
                </p>
              </div>
            </div>

            {/* Microfluidics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/watershed.jpg"}
                  alt={"Mikroakışkan"}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Mikroakışkan
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Watershed (ABS-benzeri) ve Accura 60 (PC-benzeri),
                  mikroakışkan parçalar ve lensler ve gövdeler gibi şeffaf
                  bileşenler için kullanılabilen şeffaf malzemelerdir.
                </p>
              </div>
            </div>

            {/* Medical Alloys */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={"/Assets/Images/Industries/medical/titanium.jpg"}
                  alt={"Medikal alaşımlar"}
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medikal Alaşımlar
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  İşlenmiş ve 3D baskılı metaller ile sac metal arasında,
                  medikal bileşenler ve diğer uygulamalar için 20'den fazla
                  metal malzeme seçeneği mevcuttur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Title and Description */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yaygın Medikal Uygulamalar
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Üretim hizmetlerimiz içinde medikal endüstrisine yönelik çeşitli
                yeteneklerimiz bulunmaktadır. İşte sıkça gördüğümüz birkaç
                uygulama.
              </p>
            </div>

            {/* Right Column - List of Applications with Tick Icons */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Elde taşınan cihazlar",
                  "Cerrahi aletler",
                  "Muhafazalar ve gövdeler",
                  "Ventilatörler",
                  "İmplant prototipleri",
                  "Protez bileşenleri",
                  "Mikroakışkanlar",
                  "Giyilebilir cihazlar",
                  "Kartuşlar",
                  "Laboratuvar ekipmanları",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#96E92A] rounded-full flex items-center justify-center flex-shrink-0">
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
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
