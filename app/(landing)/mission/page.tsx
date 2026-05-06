// app/mission/page.tsx
"use client";

import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";

export default function MissionPage() {
  const stats = [
    {
      label: "Müşteri Memnuniyeti",
      value: "99.9%",
    },
    {
      label: "Sektör Deneyimi",
      value: "10 + Years",
    },
    {
      label: "Tamamlanan Projeler",
      value: "500+",
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
              Misyonumuz
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              Firmaların ihtiyaç duyduğu üretim çözümlerine hızlı erişebilmesini
              sağlarken; <span className="text-[#0099ff]">şeffaf süreçler</span>
              , teknik doğruluk ve kontrollü üretim anlayışıyla{" "}
              <span className="text-[#0099ff]">
                uzun vadeli değer yaratmayı
              </span>{" "}
              hedefleriz.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 - Stats & Information */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
              Dijital Üretimde Güvenilir ve Kaliteli Mühendislik Standartları
              Oluşturmak
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#0099ff]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Information Text Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Mühendislik Odaklı Dijital Üretim Yaklaşımı
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Üretim süreçlerinin başarısı, yalnızca teknolojiyle değil doğru
                mühendislik yaklaşımıyla mümkündür. Bu nedenle her proje;
                tasarım, işlevsellik ve gerekli hesaplamalar yapılarak
                değerlendirilir.
              </p>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-600 leading-relaxed">
                Üretim süreçlerinde güvenilir sonuçlar elde edebilmek için
                dijital altyapının, süreçlerin ve üretim süreçlerinin kontrol
                altında tutulması gerekir. Bu nedenle her proje; geometri,
                toleranslar, malzeme seçimi ve üretim yöntemleri kontrol
                edilerek süreçlerin yönetilmesi gerekmektedir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Dark Blue Video Section */}
      <div className="w-full bg-[#0B1221] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dijital Üretimin Geleceğini{" "}
              <span className="text-[#0099ff]">Şekillendirmek</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Üretim dünyası hızla değişirken, bu dönüşümün merkezinde doğru
              mühendislik kararları yer alır. Dijital araçlar ve üretim
              teknolojileri, süreçlerini daha ileriye taşır.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/Assets/Images/mission/video-placeholder.jpg"
              alt="Dijital Üretim Videosu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0099ff] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Founder Message */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left - Image with Text Overlay */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Assets/Images/samples/3.jpg"
                  alt="Umutcan Özer"
                  fill
                  className="object-cover"
                />
                {/* Image Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <p className="text-[#0B1221] font-bold">Umutcan ÖZER</p>
                    <p className="text-gray-500 text-sm">
                      Co-Founder of Fasonly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Kurucumuzdan Bir Mesaj:
                <br />
                Vizyonumuzu Tanımlarken
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bugün hedefimiz; firmaların yalnızca parça üretmesini değil,
                doğru üretim kararlarını güvenle alabilmesini sağlamaktır.
                Tasarımdan üretime uzanan bu yolculukta; mühendislik, şeffaflık
                ve teknik doğruluğu her zaman öncelikli görüyoruz.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <span className="text-[#0B1221] font-bold text-xs">X</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <span className="text-[#0B1221] font-bold text-xs">in</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
