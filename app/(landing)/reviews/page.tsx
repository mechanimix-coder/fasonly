// app/industries/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function IndustriesPage() {
  const industries = [
    {
      id: 1,
      category: "HAVACILIK VE SAVUNMA SANAYİ ÇÖZÜMLERİ",
      title: "Havacılık ve Savunma Sektörü İçin Hassas Üretim",
      description:
        "Yüksek stres ortamlarında çalışan havacılık ve savunma parçaları mikroskobik hassasiyet gerektirir. Fasonly, AS9100 standartlarına uygun, belgelenmiş üretim süreçleriyle yanınızdadır.",
      image: "/Assets/Images/reviews/1.jpg",
      stats: [
        { value: "±0.01mm", label: "Tolerans hassasiyeti" },
        { value: "99%", label: "İzlenebilir üretim süreci" },
        { value: "48 saat", label: "Prototip teslim süresi" },
      ],
      isLeftAligned: true,
      buttonText: "Detaylar",
    },
    {
      id: 2,
      category: "OTOMOTİV SANAYİ ÇÖZÜMLERİ",
      title: "Otomotiv ve Elektrikli Araç Projelerinde Hız & Hassasiyet",
      description:
        "EV, hibrit veya konvansiyonel araç geliştirme süreçlerinde hızlı prototip, işlevsel parça ve fonksiyonel test parçaları üretiyoruz. Tasarımdan üretime geçişi hızlandırıyoruz.",
      image: "/Assets/Images/reviews/2.jpg",
      stats: [
        { value: "24 saat", label: "Anında teklif" },
        { value: "±0.05mm", label: "Üretim hassasiyeti" },
        { value: "98%", label: "Zamanında teslimat" },
      ],
      isLeftAligned: false,
      buttonText: "Detaylar",
    },
    {
      id: 3,
      category: "ENDÜSTRİYEL EKİPMAN ÜRETİMİ",
      title: "Kritik Makine Parçalarında Üstün Mühendislik",
      description:
        "Konveyör sistemlerinden hidrolik bloklara, pnömatik bileşenlerden sensör yuvalarına endüstriyel üretim ihtiyacı duyduğu her parçayı üretiyoruz. Özel aparatlar, bağlantı elemanları, makine gövdeleri ve yedek parçalar dahil tüm ekipman bileşenlerinde seri üretim kalitesi.",
      image: "/Assets/Images/reviews/3.jpg",
      stats: [
        { value: "±0.02mm", label: "Makine parçası toleransı" },
        { value: "72 saat", label: "Prototip üretim süresi" },
        { value: "500+", label: "Teslim edilen endüstriyel parça" },
      ],
      isLeftAligned: true,
      buttonText: "Detaylar",
    },
    {
      id: 4,
      category: "MEDİKAL VE SAĞLIK TEKNOLOJİLERİ",
      title: "Medikal Üretimde Hassasiyet",
      description:
        "Bir tıbbi cihazın içindeki tek bir parça bile hayat kurtarabilir. Bu yüzden medikal projelerimizde toleransı değil, sorumluluğu esas alıyoruz. Cerrahi aletlerden tıbbi cihaz bileşenlerine, protezlerden laboratuvar ekipmanlarına kadar her üretimde aynı titizlik.",
      image: "/Assets/Images/reviews/4.jpg",
      stats: [
        { value: "±0.01mm", label: "Tolerans hassasiyeti" },
        { value: "Ti & SS", label: "Titanyum ve paslanmaz çelik işleme" },
        { value: "48 saat", label: "Acil teslim kapasitesi" },
      ],
      isLeftAligned: false,
      buttonText: "Detaylar",
    },
    {
      id: 5,
      category: "TÜKETİCİ ELEKTRONİĞİ",
      title: "Fikirden Ürüne, Tasarımdan Rafa",
      description:
        "Akıllı cihaz gövdelerinden kulaklık kasalarına, kamera aksesuarlarından şarj ünitesi bileşenlerine tüketici elektroniğinde form ve fonksiyon bir arada olmalı zorunludur. Esneklik toleranslardan ödün vermeden, seri üretime hazır parçalar üretiyoruz.",
      image: "/Assets/Images/reviews/5.jpg",
      stats: [
        { value: "A yüzey", label: "Görsel-işlev yüzey kalitesi" },
        { value: "72 saat", label: "Konseptten prototipe" },
        { value: "Plastik & Al", label: "Enjeksiyon ve alüminyum işleme" },
      ],
      isLeftAligned: true,
      buttonText: "Detaylar",
    },
    {
      id: 6,
      category: "ROBOTİK VE OTOMASYON SİSTEMLERİ",
      title: "Robotların Parçalarında Üretim Partneriniz",
      description:
        "Robot kol bileşenlerinden otomasyon hücresi aparatlarına, servo motor yuvalarından end-effektörlere kadar hareket eden her parçada hassasiyet şarttır. Tekrarlayan yüklere dayanıklı, boyutsal kararlılığı yüksek parçalarla otomasyon sistemlerinizin performansını güvence altına alıyoruz.",
      image: "/Assets/Images/reviews/6.jpg",
      stats: [
        { value: "±0.02mm", label: "Kinematik parça toleransı" },
        {
          value: "Al & Çelik",
          label: "Hafif ve dayanıklı malzeme seçenekleri",
        },
        { value: "48 saat", label: "Hızlı iterasyon ve prototip teslimi" },
      ],
      isLeftAligned: false,
      buttonText: "Detaylar",
    },
  ];

  return (
    <div className="w-full bg-white ">
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
              Hizmet Verdiğimiz{" "}
              <span className="text-[#0099ff]">Endüstriler</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              Havacılık, medikal teknoloji, otomotiv ve savunma gibi kritik
              sektörlerde prototiplemeden seri üretime kadar sürekli ve
              kesintisiz üretim çözümleri sağlıyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Light Blue Background */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Industries Sections */}
          <div className="flex flex-col gap-16">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  industry.isLeftAligned ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}>
                {/* Text Section */}
                <div className="lg:w-1/2 flex flex-col relative z-10">
                  <p className="text-[#0099ff] text-sm font-medium uppercase tracking-wider mb-2">
                    {industry.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 leading-tight">
                    {industry.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Stats Card */}
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-6 w-full max-w-[340px]">
                    {industry.stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-4 py-2">
                        <span className="text-2xl font-bold text-[#0099ff]">
                          {stat.value}
                        </span>
                        <span className="text-sm text-gray-600">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-medium px-6 py-2.5 rounded-lg transition-colors duration-300 w-fit shadow-sm hover:shadow-md">
                    {industry.buttonText}
                  </button>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center relative">
                  <div className="relative w-full max-w-[420px] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-[#F0F8FF]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NEW SECTION: Neden Fasonly? */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mt-20 pt-8 pb-20">
            {/* Left - Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Neden Fasonly? Çünkü Üretim Durdurulamaz
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Prototipten seri üretime, acil siparişten tekrarlayan tedarike
                her aşamada yanınızdayız. Türkiye'nin dört bir yanına, hızlı
                teslim ve şeffaf fiyatlandırmayla güvenilir üretim ortağınız.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-medium px-6 py-2.5 rounded-lg transition-colors duration-300 w-fit shadow-sm hover:shadow-md">
                Detaylar
              </button>
            </div>

            {/* Right - Testimonial Card */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                  Onlar Denendi, Bize Güvendi!
                </h3>
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  "İlk siparişimizde tereddüt ettik, küçük firmayız diye. Ama
                  Fasonly büyük müşteri gibi ilgilendi. Şimdi düzenli
                  çalışıyoruz."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden relative">
                    <Image
                      src="/Assets/Images/members/1.webp"
                      alt="Burcu Yılmaz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#0B1221] font-medium">Burcu Yılmaz</p>
                    <p className="text-gray-500 text-sm">
                      Ar-Ge Mühendisi, Bursa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
