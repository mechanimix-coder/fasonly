// app/services/page.tsx
"use client";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Headphones,
  Clock,
  MapPin,
  Zap,
  Users,
  Activity,
} from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Service cards data
  const services = [
    {
      id: 0,
      title: "CNC İşleme Hizmetleri",
      description:
        "Yüksek Hassasiyetli CNC işleme ve torna ile prototiplerden seri üretime kadar her ölçekte parça. CAD dosyasından çizim ve üretim takibi dahil.",
      icon: "/Assets/Images/services/WB1.png",
    },
    {
      id: 1,
      title: "Sac Metal Üretimi",
      description:
        "Lazer kesim, büküm ve kaynak işlemleri ile sac metal parçaların üretimi. Prototipten seri üretim projelerine kadar hızlı ve güvenilir çözümler.",
      icon: "/Assets/Images/services/WB2.png",
    },
    {
      id: 2,
      title: "3D Baskı Hizmetleri",
      description:
        "Fonksiyonel prototipler ve düşük adetli üretimler için endüstriyel 3D baskı çözümleri. Farklı malzeme ve teknolojilerle hızlı teslimat.",
      icon: "/Assets/Images/services/WB3.png",
    },
    {
      id: 3,
      title: "Plastik Enjeksiyon",
      description:
        "Plastik parçaların seri üretimi için kalıp tasarımı ve enjeksiyon çözümleri. Yüksek kalite ve maliyet avantajı sağlayan seri üretim hizmetleri.",
      icon: "/Assets/Images/services/WB4.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Dark Blue with Blue Glare */}
      <div className="relative w-full bg-[#0B1221] pb-28 pt-46 overflow-hidden">
        {/* Blue glare effect */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0099ff] blur-[150px] rounded-full opacity-25 pointer-events-none" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#0099ff] blur-[120px] rounded-full opacity-15 pointer-events-none" />

        {/* Background grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hızlı Ve Güvenilir <span className="text-[#0099ff]">Üretim</span>{" "}
              Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              CNC işleme, sac metal üretim, 3D baskı ve plastik enjeksiyon gibi
              modern üretim süreçleri ile tasarımlarınızı gerçeğe
              dönüştürüyoruz. CAD dosyasından yüksek kaliteli ürünlere kadar her
              aşamada yanınızdayız.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Light Blue Background */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
                Modern Üretim Hizmetlerimizi Keşfedin
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-600 leading-relaxed">
                CNC işleme, sac metal üretim, 3D baskı ve plastik enjeksiyon
                süreçlerinde uluslararası üretim standartlarını uygulayarak
                kaliteli üretim sağlıyoruz. Her proje için üretim sürecinde size
                kalite kontrol desteği ve güvenilir teslimat garantisi
                sunuyoruz.
              </p>
            </div>
          </div>

          {/* Services Grid - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 bg-[#F0F8FF] rounded-lg flex items-center justify-center group-hover:bg-[#0B1221] transition-colors duration-300">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0099ff] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0099ff] transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second Section - Video on Left, 2 Boxes Stacked on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {/* Left - Video Card (Full Height) */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 bg-[#F0F8FF] rounded-lg flex items-center justify-center group-hover:bg-[#0B1221] transition-colors duration-300">
                  <Headphones className="w-8 h-8 text-[#0B1221] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0099ff] transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0099ff] transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                Canlı Üretim Takibi ve Kontrolü
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Projenizin üretim sürecini platform üzerinden adım adım takip
                edin. Üretim aşamaları, kalite kontrol süreçleri ve teslimat
                durumunu şeffaf bir şekilde izleyerek projenizin üzerinde tam
                kontrol sağlayın.
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/Assets/Images/services/2.png"
                  alt="Üretim Takibi"
                  fill
                  className="object-cover"
                />
                {/* Video Player - Empty URL */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/Assets/Images/services/2.png">
                  <source src="/" type="video/mp4" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              </div>
            </div>

            {/* Right - Two Boxes Stacked */}
            <div className="flex flex-col gap-6">
              {/* Card 2 - Design Support */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 bg-[#F0F8FF] rounded-lg flex items-center justify-center group-hover:bg-[#0B1221] transition-colors duration-300">
                    <Clock className="w-8 h-8 text-[#0B1221] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0099ff] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0099ff] transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                  Tasarım ve Mühendislik Desteği
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deneyimli mühendislik ekibimiz tasarımlarınızı üretime uygun
                  hale getirmenize yardımcı olur. Malzeme seçimi, toleranslar ve
                  üretilebilirlik analizi ile daha verimli ve güvenilir üretim
                  süreçleri oluşturmanızı sağlarız.
                </p>
                <div className="mt-4">
                  <button className="flex items-center gap-2 text-[#0099ff] font-medium hover:gap-3 transition-all duration-300">
                    Daha Fazla Bilgi
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card 3 - AI Support */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 bg-[#F0F8FF] rounded-lg flex items-center justify-center group-hover:bg-[#0B1221] transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-[#0B1221] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0099ff] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0099ff] transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                  AI Destekli Hızlı ve Güvenilir Teklif Hizmeti
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yapay zeka destekli teklif sistemimiz ile CAD dosyalarınızı
                  anında analiz eder ve doğru üretim maliyetini hesaplar. Hızlı,
                  şeffaf ve güvenilir teklif süreci ile projenize hemen
                  başlayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Blue Section - Why Choose Fasonly */}
      <div className="w-full bg-[#0B1221] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Neden Fasonly'yi <br />
                <span className="text-[#0099ff]">Seçmelisiniz?</span>
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#0099ff]/20 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#0099ff]" />
                  </div>
                  <span className="text-white/90">
                    48 saat içinde AI destekli üretim teklifi
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#0099ff]/20 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#0099ff]" />
                  </div>
                  <span className="text-white/90">
                    Prototipten seri üretime kesintisiz süreç
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#0099ff]/20 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#0099ff]" />
                  </div>
                  <span className="text-white/90">
                    Canlı üretim takibi ve şeffaf süreç
                  </span>
                </div>
              </div>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-medium px-8 py-3 rounded-lg transition-colors duration-300">
                Hemen Teklif Alın
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square">
                <Image
                  src="/Assets/Images/services/3.png"
                  alt="Fasonly Dashboard"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Neden Fasonly'ye <br />
                <span className="text-[#0099ff]">Güveniyorlar?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimizin başarısı, bizim başarımızdır. Müşterilerimizin
                memnuniyeti, üretim süreçlerimizin kalitesi ve güvenilirliğinin
                en büyük kanıtıdır. Her projede aynı titizlik ve özenle
                çalışarak müşterilerimizin beklentilerini aşmayı hedefliyoruz.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-[#0B1221] font-bold text-xl mb-2">
                  Fasonly'yi kendi üretimhaneniz gibi düşünebilirsiniz!
                </h3>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "CAD dosyasını yükledikten 24 saat içinde teklif aldık. Üretim
                  sürecinin kontrolü ve kalitesi çok iyi."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src="/Assets/Images/members/umutcan.png"
                      alt="Umutcan Özer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#0B1221] font-medium text-sm">
                      Umutcan Özer
                    </p>
                    <p className="text-gray-500 text-xs">Mühendis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="w-full bg-[#0B1221] pt-10 pb-36">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0099ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-[#0099ff]" />
              </div>
              <div>
                <h4 className="text-white font-bold">
                  AI Destekli Hızlı Teklif
                </h4>
                <p className="text-gray-400 text-sm">
                  48 saat içinde üretim teklifi alın
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0099ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#0099ff]" />
              </div>
              <div>
                <h4 className="text-white font-bold">
                  Uzman Mühendislik Desteği
                </h4>
                <p className="text-gray-400 text-sm">
                  Deneyimli mühendislerle çalışın
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0099ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-[#0099ff]" />
              </div>
              <div>
                <h4 className="text-white font-bold">Canlı Üretim Takibi</h4>
                <p className="text-gray-400 text-sm">
                  Üretim sürecini adım adım izleyin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
