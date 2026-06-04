"use client";

import { ArrowRight, Check } from "lucide-react";
import Hint from "@/component/UI/Hint";
import GuideDownload from "@/component/landing/GuideDownload";
import Blog from "@/component/landing/Blog";
import SheetMetalTables from "@/component/landing/SheetMetalTables";
import ServicesHero from "@/component/landing/ServicesHero";
export default function SheetMetalFabrication() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title=" Çevrimiçi Özel Sac Metal İmalat Hizmeti"
        desc="Sac metal bileşenler ve montajlar 1 gün kadar kısa sürede. Bugün prototip veya düşük hacimli üretim projeniz için çevrimiçi teklif alın."
        image="/Assets/Images/services/injection-molding/complexity.webp"
        firstButton={{ title: "Teklif Al", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sac Metal İmalat Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Çevrimiçi sac metal imalat hizmetimiz, dakikalar içinde teklif
              almanızı ve parçalarınızın günler içinde teslim edilmesini sağlar.
              Proje maliyetlerini yönetmenize ve uygulanabilir tasarım
              içgörüleri elde etmenize yardımcı olmak için 3D görselleştirilmiş
              Üretilebilirlik İçin Tasarım (DFM) geri bildirimi sunuyoruz. Geniş
              bir imalat ve yüzey işlem yetenekleri yelpazesi ile teknoloji ve
              yetenekli operatörlerin güçlü kombinasyonumuz, projeniz tek bir
              bileşenden oluşsa veya birçoğundan oluşsa da hassas kaliteli
              parçalar üretir.
            </p>
          </div>

          {/* 4 Capability Boxes */}
          <div className="space-y-6">
            {/* Box 1 - Laser Cutting */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⚡</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Lazer Kesim
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lazer kesim, sac metal malzemelerde hassas kesimler oluşturmak
                  için yüksek güçlü ve odaklanmış bir lazer ışını kullanan bir
                  çıkarımlı üretim sürecidir.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Box 2 - Forming and Bending */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔧</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Şekillendirme ve Bükme
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pres freni şekillendirme, eşleşen bir zımba ve kalıp seti ile
                  düz bir eksen boyunca kuvvet uygulayarak metal levhalar
                  üzerinde doğrusal bükümler üretir.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Box 3 - Punching */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⭕</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Zımbalama
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zımbalama, bir zımba takımını alt kalıpla birleştiren ve parça
                  profillerini kesmek ve metal levhaları belirli şekil ve
                  desenlere dönüştürmek için presleme kuvveti kullanan bir
                  süreçtir.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Box 4 - Fabricated Assemblies */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full md:w-80 h-56 md:h-auto bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔗</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Fabrikasyon Montajlar
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sac metal montajları, monte edilmiş bir nihai ürün oluşturmak
                  için kaynak veya perçinleme gibi çeşitli süreçlerle birden
                  fazla sac metal bileşenin birleştirilmesini içerir.
                </p>
                <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left Column - Image */}
            <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📊</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Fasonly ile Sac Metal Teklif Alma
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sac metal imalatı için çevrimiçi teklif platformumuz, sac metal
                projenizi geleneksel teklif yöntemlerinin çok daha kısa bir
                süresinde yüklemenize, yapılandırmanıza ve sipariş etmenize
                olanak tanır. Bu kılavuz, platformun kilit unsurlarına bir bakış
                sağlayarak siparişinizi tam spesifikasyonlarınıza göre
                tamamlayabilmenizi sağlar.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <SheetMetalTables />
      <Hint />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal İmalatı Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed">
                Sac metal imalat süreci sırasında, ince sac metal stoku, bir
                lazer kesicinin (1) programlanmış parça desenlerini çizdiği düz
                bir yatağa yerleştirilir. Parça geometrisine bağlı olarak, bir
                sac metal zımba (2) ek özellikler oluşturabilir. Parçaların
                çapağı alındıktan sonra, nihai geometrilere şekillendirildikleri
                pres frenine (3) taşınırlar. Sac metal parçaları bitirmek için
                genellikle ek ikincil işlemler kullanılır.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🔧</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Video Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
            {/* Left Column - Video Player */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl flex-shrink-0">
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
                    Sac Metal İmalatı Nedir?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal İmalatı Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed">
                Sac metal imalat süreci metal bileşenler için idealdir ve hem
                prototipleme hem de üretim miktarlarını destekleyebilir.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-[#96E92A]" />
                  <span className="text-gray-600">Düşük malzeme israfı</span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-[#96E92A]" />
                  <span className="text-gray-600">
                    Üretim hacimlerine uygun maliyetle ölçeklenebilir
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-[#96E92A]" />
                  <span className="text-gray-600">
                    Anodizasyon ve toz boya gibi çoklu yüzey işlem seçenekleri
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3 - Text Left, Video Right with Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left Column - Text with Buttons */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal İmalatının Avantajları
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sac metal imalat süreci metal bileşenler için idealdir ve yüksek
                verimlilik ve hassasiyetle hem prototipleme hem de üretim
                miktarlarını destekleyebilir.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-300">
                  Havşa Tablosunu Görüntüle
                </button>
                <button className="border-2 border-[#0B1221] hover:bg-[#0B1221] hover:text-white text-[#0B1221] font-medium px-5 py-2.5 rounded-lg transition-all duration-300">
                  Tasarım Kılavuzunu Görüntüle
                </button>
              </div>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl flex-shrink-0">
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
                    Sac Metal Süreci Genel Bakış
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
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Her Sac Metal Teklifinde Üretilebilirlik İçin Tasarım (DFM) Geri
                Bildirimi
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Artık tüm sac metal bileşenler için otomatik tasarım analizi
                sunuyoruz; bu analiz, imalat süreci sırasında zorluk
                çıkarabilecek özellikleri vurgular. Sac metal parçalarınızın
                kalitesini iyileştirebilecek DFM geri bildirimi artık dakikalar
                içinde sunulmaktadır.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Proje Başlat
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image with Feature List Overlay */}
            <div className="flex-1 relative">
              <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                <div className="flex items-center justify-center h-full">
                  <span className="text-6xl">📐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🔧</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal Uygulamaları
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sac metal, bir dizi metal bileşen için çok yönlü bir üretim
                sürecidir. Süreç, yüksek hacimli ticari ürünleri ve düşük
                hacimli, benzersiz uygulamaları destekleyebilir. Yaygın sac
                metal parçalar şunları içerir:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Elektrik muhafazası",
                  "Bilgisayar elektroniği parçaları",
                  "Şasi",
                  "Braketler",
                  "Dolaplar",
                  "Montaj parçaları",
                  "Ev aletleri",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <svg
                className="w-8 h-8 text-[#0099ff]"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-xl md:text-2xl lg:text-3xl text-[#0B1221] leading-relaxed mb-6 italic font-medium">
              &quot;Fasonly ile ortaklık kurmak çok kolaydı. Çok rekabetçi bir
              programa karşılık uygun fiyata yüksek kaliteli donanım elde
              ettik.&quot;
            </p>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto mb-4"></div>

            {/* Author */}
            <p className="text-[#0B1221] font-semibold">
              — CHRIS CLOUTIER, GELİŞMİŞ PROGRAMLAR PROTOTİP LİDERİ
            </p>
            <p className="text-gray-500 text-sm mt-1">LOCKHEED MARTIN</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal Malzeme Seçeneklerimiz
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>

              <div className="space-y-3 mb-6">
                {[
                  "Alüminyum (1)",
                  "Pirinç (2)",
                  "Bakır (3)",
                  "Paslanmaz Çelik (4)",
                  "Çelik: CR İşlem Görmemiş (5)",
                  "Çelik: CR Galvanizli Tavlanmış ve CR Galvanizli (6)",
                ].map((material, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>

              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Fasonly'nin sac metal malzemeleri hakkında daha fazla bilgi
                edinin →
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Image with Number Overlays */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📦</span>
              </div>
              {/* Number indicators overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  1
                </div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  2
                </div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  3
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  4
                </div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  5
                </div>
                <div className="absolute bottom-1/2 right-1/2 w-6 h-6 bg-[#0B1221] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Neden Sac Metal Parçalar için Fasonly'yi Seçmelisiniz?
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 5 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 - Fast and Simple Online Quoting */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Hızlı ve Basit Çevrimiçi Teklif Alma
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kullanımı kolay arayüzümüz, ortalama bir gün yüklemeden teklife
                teslim süresi sunar (basit tasarım teklifi 1 saat kadar kısa
                sürede). Malzeme seçimi ve yüzey işlem seçenekleri gibi parça
                özelliklerini kolayca yapılandırın.
              </p>
            </div>

            {/* Item 2 - Reliable Delivery */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Güvenilir Teslimat
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beş günlük standart teslim süremiz içinde teslim edilen kaliteli
                parçalar.
              </p>
            </div>

            {/* Item 3 - Expansive Capacity */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Geniş Kapasite
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tek bir çatı altında 200'den fazla makine ile yeteneklerimizi
                sürekli geliştirmeye kendimizi adadık.
              </p>
            </div>

            {/* Item 4 - Domestic Production */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Yerli Üretim
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tüm sac metal parçalar New Hampshire'da üretilir ve donanım
                yerleştirme, kaynak ve yüzey işlem gibi ikincil işlemler şirket
                içinde veya yerel olarak onaylı bir tedarikçi tarafından
                yapılır.
              </p>
            </div>

            {/* Item 5 - Sheet Metal Technical Expertise */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 lg:col-start-2">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Sac Metal Teknik Uzmanlığı
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teknik tasarım rehberliği sunan ve sizi üretilebilirlik ve
                maliyet tasarrufu fırsatları hakkında bilgilendirebilen
                mühendislik uzmanları ekibimizle çalışın.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🎨</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Sac Metal Yüzey İşlem Seçenekleri
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Birkaç temel sac metal parçadan daha fazlasını mı arıyorsunuz?
                Tek bir çatı altında eksiksiz sac metal bileşenler sağlamak için
                kaynak, donanım yerleştirme, kaplama, ipek baskı ve toz boya
                sunuyoruz.
              </p>
              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Yüzey İşlem Seçeneklerini Görüntüle
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="Sac Metal Yüzey İşlem Kılavuzu"
        desc="Çeşitli sac metal malzemeler için mevcut Standart ve Kozmetik yüzey işlem seçeneklerimizin hızlı bir özeti için sac metal kılavuzumuza göz atın."
      />
      <Blog />
    </div>
  );
}
