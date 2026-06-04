"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Üretim 3D Baskı"
        desc="Her miktarda tutarlı tekrarlanabilirliğe sahip endüstriyel sınıf 3D baskılı parçalar"
        firstButton={{ title: "Proje Gereksinimlerini Görüşün", route: "/" }}
        bg="/Assets/Images/services/3d-printing/production/bg.jpg"
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Son Kullanım için 3D Baskı
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Prototiplemenin ötesinde, Fasonly aynı zamanda 3D baskılı üretim
                parçaları için güvenilir bir kaynaktır. Endüstriyel eklemeli
                üretim teknolojileri ve geniş plastik ve metal malzeme yelpazesi
                ile projeleri erken tasarım aşamalarından son kullanım parça
                üretimine kadar destekleyebiliriz.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Üretim 3D baskı hizmetlerimiz, mühendislerin verimli bir şekilde
                ölçeklenmesine yardımcı olur. Kendi fabrikalarımızın ve küresel
                ağımızın birleşik yetenekleriyle, tasarım, zaman çizelgeleri ve
                maliyet üzerinde esnekliği korurken çeşitli miktarlarda
                dayanıklı, fonksiyonel bileşenler üretebiliriz. Bu yaklaşım, son
                kullanım parçalarını ihtiyacınız olduğunda, sıkı zaman
                çerçevelerinde ve olağanüstü kalitede üretmenize olanak tanır.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/production/3dp-production-1.jpg"
                alt="Son Kullanım için 3D Baskı"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Fasonly'nin Avantajları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Industrial-Grade */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Endüstriyel Sınıf
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Müşteriye hazır uygulamalar için üretim yetenekleri
              </p>
            </div>

            {/* Repeatability */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Tekrarlanabilirlik
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Üretim çalıştırmalarında aynı parçalar
              </p>
            </div>

            {/* Lead time */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Teslim Süresi
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                İhtiyaçlarınıza göre özelleştirilir
              </p>
            </div>

            {/* Finishing Options */}
            <div className="bg-[#F0F8FF] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                Yüzey İşlem Seçenekleri
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Isıl işlem, ikincil işleme, buhar düzeltme ve daha fazlası
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
              3D Baskı için Üretim Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Hizmetimiz tamamen çözümler ve esneklikle ilgilidir. Projenizi
              anlamak için zaman ayırıyoruz ve iş için doğru üreticiyi bulmak
              için kendi fabrikalarımızdan ve küresel ağımızdan yararlanıyoruz.
              Üretim sınıfı 3D baskıda en son teknolojiyi sunuyoruz:
            </p>
          </div>

          {/* 7 Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Metal 3D Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C1.jpg"
                  alt="Metal 3D Baskı"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Metal 3D Baskı
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
              </div>
            </div>

            {/* Stereolithography */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C2.jpg"
                  alt="Stereolitografi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Stereolitografi
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
              </div>
            </div>

            {/* PolyJet & Silicone */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C3.jpg"
                  alt="PolyJet ve Silikon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  PolyJet ve Silikon
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
              </div>
            </div>

            {/* Multi Jet Fusion */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C4.jpg"
                  alt="Multi Jet Füzyon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Multi Jet Füzyon
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
              </div>
            </div>

            {/* Fused Deposition Modeling */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C5.jpg"
                  alt="Birikimli Modelleme"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Birikimli Modelleme
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
              </div>
            </div>

            {/* Selective Laser Sintering */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C6.jpg"
                  alt="Seçici Lazer Sinterleme"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Seçici Lazer Sinterleme
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
              </div>
            </div>

            {/* Advanced Photopolymers */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/3d-printing/production/C7.jpg"
                  alt="Gelişmiş Fotopolimerler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Gelişmiş Fotopolimerler
                </h3>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi →
                </button>
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
                Üretim Parçalarının İmalat Yolculuğu
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dijital otomasyon ve kapsamlı üretim uzmanlığını kullanarak, son
                kullanım için parça üretme sürecini optimize ettik, böylece
                kaliteli, üretim sınıfı parçaları her zamankinden daha hızlı
                alabilirsiniz. Ürününüzü konseptten tamamlanmaya nasıl
                götürdüğümüzü görmek için videoyu izleyin.
              </p>
              <p className="text-gray-400 text-sm">FASONLY</p>
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
                  <p className="text-gray-300 text-xs mt-1">İmalat Yolculuğu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Video Player */}
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
                  <p className="text-gray-300 text-xs mt-1">Nasıl Çalışır</p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Nasıl Çalışır
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fasonly uzmanları, 3D baskı projeniz boyunca size destek olur,
                talep üzerine yeteneklerimizden en iyi şekilde yararlanmanıza ve
                üretim çalıştırmalarında tutarlılık sağlamanıza yardımcı olur.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Proje Gereksinimlerini Görüşün
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Ölçekte 3D Baskı için Fasonly'ye Güvenmek için 5 Neden
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 5 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 - Production Capabilities */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Üretim Yetenekleri
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yüksek doğruluk ve tutarlı tekrarlanabilirlik ile güçlü,
                fonksiyonel parçalar sunan MJF, Gelişmiş Fotopolimerler, DMLS ve
                endüstriyel FDM'nin gelişmiş performansından yararlanın. Bu
                süreçler, dayanıklı malzemelerle karmaşık geometriler yazdırmak
                için idealdir.
              </p>
            </div>

            {/* Reason 2 - Complete Order Management */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Tam Sipariş Yönetimi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Üretim siparişinizi yerine getirmek için perde arkasında çalışan
                bir üretim uzmanları ekibimiz var - tüm süreci yönetiyor ve sizi
                yol boyunca güncel tutuyoruz.
              </p>
            </div>

            {/* Reason 3 - Strong Supply Chain */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Güçlü Tedarik Zinciri
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Talep üzerine üretim yaparak tedarik zincirinize çeviklik
                kazandırın, kitlesel özelleştirme için ideal olan yüksek
                karışımlı, düşük hacimli BOM'lar dahil. Bizim aracılığıyla
                yurtiçinde üretim, tedarik zinciri riskini azaltmaya yardımcı
                olur ve üretimi nihai pazarlarınıza yaklaştırır.
              </p>
            </div>

            {/* Reason 4 - Quality Documentation and Certifications */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kalite Dokümantasyonu ve Sertifikalar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Geleneksel AS9102 FA (İlk Ürün Denetimi) raporlaması, tam
                Boyutsal Denetim Raporları (DIR), Referans raporları ve endüstri
                sertifikalarından (ISO 13485, ISO 9001, vb.) ek kalite güvencesi
                alın.
              </p>
            </div>

            {/* Reason 5 - Engineering Support */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group lg:col-start-2">
              <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#96E92A]/20 transition-colors">
                <span className="text-xl font-bold text-[#0099ff] group-hover:text-[#96E92A] transition-colors">
                  5
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Mühendislik Desteği
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mühendislerimizi ekibinizin bir parçası olarak düşünün.
                Mühendislerimiz birlikte, metallerden gelişmiş polimerlere,
                yüzey işlemlerinden işlem sonrası hizmetlere kadar her büyük 3D
                baskı teknolojisinde on yılların deneyimini getiriyor. Bir
                prototip tasarlıyor veya üretim hacimlerine hazır olun,
                projenizle ilgili teknik, kalite uygunluğu ve iş gereksinimleri
                konusunda size danışmanlık yapmak için hazırlar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Hint text="Birden fazla bileşeni tek bir parçada birleştirmeyi, montaj adımlarını azaltmayı ve genel güvenilirliği iyileştirmeyi düşünün. Üretim için daha fazla uzman ipucu alın." />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Ürün Yaşam Döngüsü Boyunca 3D Baskı
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-6">
                3D baskı çözümlerimiz, esnek kapasite ve minimum sipariş miktarı
                olmadan prototiplemeden üretime ölçeklenir. Son kullanım
                parçaları için MJF, Gelişmiş Fotopolimerler ve DMLS gibi
                gelişmiş süreçler, uygulamaya özel işlem sonrası, denetim ve
                uygunluk dokümantasyonu ile desteklenen tutarlı kalite ve
                performans sağlar.
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Polyjet", "FDM", "SLA", "MJF", "SLS", "DMLS", "AP"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F0F8FF] rounded-full text-sm text-gray-600">
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* Applications Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Talep Üzerine Üretim
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Tezgahlar, Fikstürler ve Takımlar
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Erken Prototipleme
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Geç Prototipleme
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Düşük Hacimli Üretim
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Artan Üretim
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Seri Üretim
                  </span>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-3 text-center">
                  <span className="text-sm font-semibold text-[#0B1221]">
                    Nihai Ürün
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Assets/Images/services/3d-printing/production/3dp-technologies-v3_amer.webp"
                alt="Ürün Yaşam Döngüsü Boyunca 3D Baskı"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
