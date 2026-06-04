"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PlayCircle, Quote } from "lucide-react";
import {
  companyLogos,
  usTableData,
  metricTableData,
  metalsData,
  faqItems,
} from "@/data";
import React, { useState } from "react";
import Hint from "@/component/UI/Hint";
import MetalsSection from "@/component/landing/MetalsSection";
import GuideDownload from "@/component/landing/GuideDownload";
import { Play } from "next/font/google";
import Accordion from "@/component/landing/Accordion";
import Blog from "@/component/landing/Blog";
import ServicesHero from "@/component/landing/ServicesHero";
export default function ThreePrinting() {
  const [activeTable, setActiveTable] = useState<"us" | "metric">("us");

  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Özel Parçalar için Çevrimiçi 3D Baskı Hizmeti"
        desc="Hızlı prototipleme ve üretim için talep üzerine 3D baskı, 1 gün kadar kısa sürede. Bugün DFAM analizi ile anında 3D baskı teklifi alın."
        image="/Assets/Images/services/injection-molding/3dp.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
      />

      {/* cards section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              3D Baskı Süreçleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Çevrimiçi 3D baskı hizmetimiz, özel parçanızı talep üzerine 3D
              baskı ile üretmenize olanak tanır. 3D dosyalarınızı plastik, metal
              ve elastomerik parçalara dönüştürmek için altı 3D baskı
              teknolojisi sunuyoruz. 120'den fazla 3D yazıcı ile parçaları
              günler içinde güvenilir bir şekilde teslim eden benzersiz bir
              kapasiteye sahibiz. Geniş malzeme seçimine ek olarak, kozmetik
              görünümü iyileştirmek veya mekanik özellikleri geliştirmek için
              çeşitli işlem sonrası seçenekleri sunuyoruz.
            </p>
          </div>

          {/* Cards Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Metal 3D Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Metal 3D Baskı
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Doğrudan metal lazer sinterleme (DMLS), atomize metal tozu
                  yüzeyine çizim yapan bir fiber lazer sistemi kullanarak tozu
                  tam yoğun metal parçalara kaynaklar.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2 - Stereolithography (SLA) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">💧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Stereolitografi (SLA)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Stereolitografi (SLA), sıvı termoset reçinenin yüzeyine çizim
                  yapan bir ultraviyole lazer kullanarak nihai parçalar oluşana
                  kadar binlerce ince katman oluşturur.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 3 - Selective Laser Sintering (SLS) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⚡</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Seçici Lazer Sinterleme (SLS)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Seçici lazer sinterleme (SLS), naylon bazlı tozu katman katman
                  birleştiren bir CO₂ lazer kullanarak nihai termoplastik
                  parçalar inşa eder.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 4 - Fused Deposition Modeling (FDM) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🖨️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Birikimli Modelleme (FDM)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Birikimli modelleme (FDM), termoplastik filamentleri katman
                  katman ekstrüde ederek dayanıklı, doğru ve uygun maliyetli
                  fonksiyonel prototipler ve son kullanım parçaları üretir.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 5 - Multi Jet Fusion (MJF) */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">✨</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Multi Jet Füzyon (MJF)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Multi Jet Füzyon (MJF), naylon tozu yatakları boyunca
                  birleştirme ve detaylandırma maddeleri uygulamak için bir
                  mürekkep püskürtme dizisi kullanarak güçlü, doğru ve detaylı
                  üretim sınıfı parçalar oluşturur.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 6 - PolyJet */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🎨</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  PolyJet
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  PolyJet teknolojisi, fotopolimer damlacıklarını bir yapı
                  platformuna püskürtür ve onları UV ışığıyla anında kürleyerek
                  birden fazla malzeme özelliğine sahip pürüzsüz, detaylı
                  parçalar üretir.
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section 1 - FDM 3D Printing (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🖨️</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Fasonly Network ile FDM 3D Baskı
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                FDM (birikimli modelleme) 3D baskı, termoplastikleri ısıtarak ve
                katman katman ekstrüde ederek parçalar üretir. FDM, güçlü
                prototipler ve fonksiyonel parçalar için iyi bir 3D baskı
                seçeneğidir. Malzeme seçenekleri arasında ABS, TPU, PEI, PETG ve
                daha fazlası gibi popüler termoplastikler bulunur. Günler içinde
                FDM parçaları için anında teklif alın.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 2 - Print it Better (Content Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F0F8FF] rounded-2xl p-8 md:p-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Daha İyi Baskı Alın
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eklemeli üretimi enine boyuna bilen mühendislerin desteğiyle
                yüksek kaliteli 3D baskılı parçaları hızlıca alın. Altı 3D baskı
                teknolojisi ve 60'ın üzerinde malzeme ile yüksek performanslı,
                güvenilir parçalar üretin.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              3D Baskı Süreçlerini Karşılaştır
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              3D baskı hizmetimizde yenisiniz ve hangi eklemeli teknolojinin 3D
              tasarımınız için doğru olduğundan emin değil misiniz?
              Uygulamanızın gereksinimlerine neyin uyduğunu görmek için aşağıda
              her sürecin yeteneklerini karşılaştırın.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTable("us")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTable === "us"
                  ? "bg-[#0B1221] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              ABD
            </button>
            <button
              onClick={() => setActiveTable("metric")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTable === "metric"
                  ? "bg-[#0B1221] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Metrik
            </button>
          </div>

          {/* US Table */}
          {activeTable === "us" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold">Malzemeler</th>
                    <th className="text-left p-4 font-semibold">
                      Maks. Parça Boyutu
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Min. Özellik Boyutu
                    </th>
                    <th className="text-left p-4 font-semibold">Tolerans</th>
                  </tr>
                </thead>
                <tbody>
                  {usTableData.map((row, idx) => (
                    <React.Fragment key={idx}>
                      {/* Technology Row */}
                      <tr className="bg-gray-100">
                        <td
                          colSpan={4}
                          className="p-3 font-bold text-[#0B1221]">
                          {row.technology}
                        </td>
                      </tr>
                      {/* Materials Rows */}
                      {row.materials.map((material, materialIdx) => (
                        <tr
                          key={`${idx}-${materialIdx}`}
                          className="border-b border-gray-200">
                          <td className="p-3 text-gray-600 align-top">
                            {material}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {row.maxPartSize.map((size, sizeIdx) => (
                                  <li key={sizeIdx}>{size}</li>
                                ))}
                              </ul>
                            ) : null}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.minFeatureSize : ""}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.tolerance : ""}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Metric Table */}
          {activeTable === "metric" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold">Malzemeler</th>
                    <th className="text-left p-4 font-semibold">
                      Maks. Parça Boyutu
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Min. Özellik Boyutu
                    </th>
                    <th className="text-left p-4 font-semibold">Tolerans</th>
                  </tr>
                </thead>
                <tbody>
                  {metricTableData.map((row, idx) => (
                    <React.Fragment key={idx}>
                      {/* Technology Row */}
                      <tr className="bg-gray-100">
                        <td
                          colSpan={4}
                          className="p-3 font-bold text-[#0B1221]">
                          {row.technology}
                        </td>
                      </tr>
                      {/* Materials Rows */}
                      {row.materials.map((material, materialIdx) => (
                        <tr
                          key={`${idx}-${materialIdx}`}
                          className="border-b border-gray-200">
                          <td className="p-3 text-gray-600 align-top">
                            {material}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {row.maxPartSize.map((size, sizeIdx) => (
                                  <li key={sizeIdx}>{size}</li>
                                ))}
                              </ul>
                            ) : null}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.minFeatureSize : ""}
                          </td>
                          <td className="p-3 text-gray-600 align-top">
                            {materialIdx === 0 ? row.tolerance : ""}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Hint />

      <MetalsSection metals={metalsData} title="Metal 3D Baskı Malzemeleri" />
      <GuideDownload
        title={"3D Baskı Yüzey İşlem Kılavuzu"}
        desc={
          "Bu kapsamlı referans kılavuzu, teklif alma, tasarım analizi ve sevkiyattan, modelinizin kalıplama için optimize edilmesini sağlayan en iyi uygulamalara kadar her şeyi size adım adım gösterir."
        }
        img={"/"}
      />

      {/* Section 1: Sample Quote - Two Columns */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Örnek Teklif
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                3DP süreçlerinin, malzemelerin ve çözünürlüklerin maliyetini
                karşılaştırmanıza olanak tanıyan malzeme özelliğimizi keşfedin.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Örnek Teklifi Görüntüle
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Testimonial - Black and White */}
      <div className="w-full bg-[#0B1221] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Testimonial Text */}
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-6">
              &quot;Adil fiyata harika hizmet ve parçalarımın kalitesi mükemmel.
              Harika çalışmalarınıza devam edin.&quot;
            </p>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto mb-4"></div>

            {/* Author */}
            <p className="text-gray-400 font-medium">
              — Bob Koch, Johnson & Johnson - Ethicon
            </p>
          </div>
        </div>
      </div>

      {/* 3D Printing Toolkit Section - Two Columns (Image Left, Content Right) */}
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🛠️</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Baskı Araç Seti
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                3D baskılı parçaları optimize etmek için derinlemesine tasarım
                tavsiyeleri alın. Eklemeli üretimi göz önünde bulundurarak
                tasarım yapmak, üretim süresini hızlandırabilir ve genel
                maliyeti azaltabilir.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Araç Setini İncele
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Surface Finish Options Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            3D Baskılar için Yüzey İşlem Seçenekleri
          </h2>

          {/* Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold w-1/4">
                    İşlem Tipi
                  </th>
                  <th className="text-left p-4 font-semibold">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Bitmemiş
                  </td>
                  <td className="p-4 text-gray-600">
                    Destek yapısı kalıntılarından parçanın alt kısmında noktalar
                    veya dikenler belirgin kalır.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Doğal
                  </td>
                  <td className="p-4 text-gray-600">
                    Destekli yüzeyler, destek dikenlerini ortadan kaldırmak için
                    zımparalanır.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Standart
                  </td>
                  <td className="p-4 text-gray-600">
                    Destekli yüzeyler zımparalanır ve tüm parça tutarlı bir
                    görünüm için ince kumlanır. Katmanların hala mevcut olduğunu
                    unutmayın.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 align-top">
                    Özel
                  </td>
                  <td className="p-4 text-gray-600">
                    Yumuşak dokunuşlu boya, şeffaf parça bitirme, boyama,
                    maskeleme, renk eşleme, çıkartmalar/grafikler ve doku
                    yüzeyleri mevcuttur.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Two Images Below Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image - Person working on 3D printer */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-5xl block mb-2">👨‍🔧</span>
                  <p className="text-gray-500 text-sm">3D yazıcıda çalışma</p>
                </div>
              </div>
            </div>

            {/* Right Image - 3D printer nozzle with resin */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-5xl block mb-2">🖨️</span>
                  <p className="text-gray-500 text-sm">
                    3D yazıcı nozulu reçine ile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Finishing Section - Black Background */}
      <div className="w-full bg-[#0B1221] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Özel Bitirme
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            3D baskılı parçalarınızın mukavemetini, şeffaflığını veya görünümünü
            iyileştirmek mi istiyorsunuz? Mikroakışkan ve mikro-çözünürlük
            malzemeleri, metal kaplama, ikincil işleme ve boyama, şeffaf kaplama
            ve dekal uygulama gibi özel yüzey işlemleri arasından seçim yapın.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="text-left p-4 font-semibold w-1/4">
                    İşlem Tipi
                  </th>
                  <th className="text-left p-4 font-semibold">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Şeffaf Kaplama
                  </td>
                  <td className="p-4 text-gray-300">
                    ABS-Benzeri Yarı Saydam/Şeffaf (WaterShed XC 11122) ve
                    PC-Benzeri Yarı Saydam/Şeffaf (Accura 60) malzemelerine
                    uygulanabilen şeffaf kozmetik kaplama.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Boyama
                  </td>
                  <td className="p-4 text-gray-300">
                    Parçayı zımparalama ve parlatma ile düzelttikten sonra,
                    parçalar otomotiv sınıfı boya ile boyanabilir. Teklif
                    talebinizle birlikte bir pantone rengi sağlayın. Ayrıca
                    yumuşak dokunuşlu boya da sunuyoruz.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Kaplama
                  </td>
                  <td className="p-4 text-gray-300">
                    Elektrolizsiz nikel kaplama, döküm alüminyum veya magnezyuma
                    benzer parçalar elde etmek için kullanılabilir.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Boyama (Daldırma)
                  </td>
                  <td className="p-4 text-gray-300">
                    Boyama, 3D baskılara renk eklemek için başka bir yöntemdir.
                    Bu, sınırlı renk seçeneği olan daha hızlı bir seçenektir, bu
                    nedenle boyamadan daha uygun maliyetli bir seçimdir.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Dekal Uygulama
                  </td>
                  <td className="p-4 text-gray-300">
                    Dekal uygulama, kozmetik veya işlevi iyileştirmek için bir
                    logo veya diğer grafikleri eklemek için kullanılabilir.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Parlatma
                  </td>
                  <td className="p-4 text-gray-300">
                    Parçaları ayna benzeri bir yüzeye kadar parlatabiliriz. Bu
                    bir gereksinimse, yüzey işlemi beklentilerinizi gösteren bir
                    çizim veya görüntü sağlamanızı rica ediyoruz.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    Isıl İşlem
                  </td>
                  <td className="p-4 text-gray-300">
                    Metal 3D baskıları birden fazla ısıl işlem seçeneği ile
                    sertleştirin ve güçlendirin: NADCAP ısıl işlem, sıcak
                    izostatik presleme (HIP), çözelti tavlaması ve yaşlandırma.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold text-[#96E92A] bg-white/5 align-top">
                    İşleme
                  </td>
                  <td className="p-4 text-gray-300">
                    Olağanüstü yüzey kalitesi elde etmek veya sıkı toleransları
                    karşılamak için metal 3D baskıları işleyin.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Why Choose Us for Custom 3D Printing - Two Columns (Content Left, Image Right) */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Neden Özel 3D Baskı İçin Bizi Tercih Etmelisiniz?
              </h2>

              <div className="space-y-6">
                {/* Unmatched Quality */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                    Benzersiz Kalite
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Binlerce müşterinin ürünlerini kaliteli 3D baskılı
                    parçalarla pazara sunmasına yardımcı olan deneyimli
                    mühendislik ekibimizden tasarım geri bildirimi alın. Ayrıca,
                    uygulamanızın gereksinimlerine göre optimum parça yönelimini
                    belirlemek için sizinle birlikte çalışacağız.
                  </p>
                </div>

                {/* Wide Material Selection */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                    Geniş Malzeme Seçimi
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Altı 3D baskı teknolojimiz genelinde, çeşitli parça
                    uygulamaları ve endüstrileri için uygun 3D baskılı parçalar
                    üretmek üzere bir dizi ticari sınıf termoset reçine,
                    termoplastik ve metal tozu kullanıyoruz. Parçalarınız için
                    gerekliyse, mekanik özellikleri ve kozmetik görünümü daha da
                    geliştirmek için ısıl işlem, ikincil işleme, kaplama, boyama
                    ve renklendirme gibi çeşitli işlem sonrası seçenekleri
                    sunuyoruz.
                  </p>
                </div>

                {/* Scale and Production */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                    Ölçek ve Üretim
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tesisimiz, metal ve plastik parçalar üreten 120'den fazla 3D
                    baskı makinesine ev sahipliği yapmaktadır. Bu, ister küçük
                    bir parti parça ister üretim seviyesi hacimler olsun,
                    parçaları hızlı bir şekilde ihtiyaç duyduğunuzda her zaman
                    kapasitemiz olacağı anlamına gelir.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-7xl block mb-3">🖨️</span>
                  <p className="text-gray-500 font-medium">3D Baskı Tesisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What is 3D Printing? - Two Columns (Video Left, Content Right) */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              {/* Video thumbnail / player placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    3D Baskı Nedir?
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    FASONLY | Hızlandırılmış Üretim
                  </p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Baskı Nedir?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                3D baskı, bir 3D dijital modelden parçaları her seferinde bir
                katman olacak şekilde üreten bir dizi eklemeli üretim
                teknolojisini tanımlamak için kullanılan bir terimdir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bazı 3D baskı makineleri parçalar oluşturmak için bir filament
                ekstrüde ederken, diğerleri metal veya plastik tozları ve sıvı
                reçineler gibi ham maddeleri sinterlemek veya kürlemek için
                lazerler kullanır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Malzemeler, yüzey kalitesi, maliyet ve miktar açısından
                farklılık gösteren çeşitli 3D baskı teknolojileri bulunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages of 3D Printing & Common Applications - Two Rows with Alternating Layout */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Advantages of 3D Printing (Image Right, Content Left) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3D Baskının Avantajları
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Parçaları katman katman inşa etmek, daha önce enjeksiyon
                kalıplama, işleme veya döküm gibi geleneksel süreçlerle
                ulaşılamayan tasarım olasılıklarını açan birçok fayda sağlar.
              </p>
              <ul className="space-y-2">
                {[
                  "Parça maliyeti üzerinde sınırlı etkisi olan karmaşık, organik geometriler",
                  "Çok bileşenli montajın tek bir parçada birleştirilmesi",
                  "Ön takım maliyeti yok",
                  "24 saat içinde parçalar için hızlı üretim",
                  "Gelişmiş ısı transferi ve akış uygulamaları için iç özellikler",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">📊</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Common 3D Printing Applications (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🏥</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Yaygın 3D Baskı Uygulamaları
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eklemeli üretim, havacılık, medikal, otomotiv ve diğer büyük
                endüstri sektörlerinde hem hızlı prototipleme hem de üretim için
                kullanılabilir. Tipik parça örnekleri şunları içerir:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "Form ve uyum prototipleri",
                  "Gövdeler ve muhafazalar",
                  "Medikal cihazlar",
                  "Geçmeli bağlantılar",
                  "Tezgahlar ve fikstürler",
                  "Isı eşanjörleri ve soğutucular",
                  "Motor bileşenleri",
                  "Yakıt enjektörleri",
                  "Cerrahi aletler",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* next section */}
      {/* Get an Instant 3D Printing Quote - Two Columns (Content Left, Video Right) */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Anında 3D Baskı Teklifi Alın
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                3D baskı tasarımınız için anında teklif almak üzere bir 3D CAD
                dosyası yükleyin. Teklif platformumuzda, 3D baskı malzemesi ve
                çözünürlük seviyesi seçiminize bağlı olarak gerçek zamanlı
                maliyet etkilerini görebilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Teklifiniz veya tasarımınızla ilgili herhangi bir sorunuz varsa,
                uygulama mühendisliği ekibimizle çalışabilir ve süreç boyunca
                size rehberlik etmelerine yardımcı olabilirsiniz.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Anında Teklif Al
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              {/* Video thumbnail / player placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    3D Baskı için Dijital Teklif İyileştirmeleri
                  </p>
                  <p className="text-gray-300 text-sm mt-1">FASONLY</p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>
          </div>
        </div>
      </div>
      {/* faqs section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl w-full flex justify-center font-bold text-[#0B1221] mb-10">
            3D Baskı SSS
          </h2>
          <Accordion items={faqItems} />
        </div>
      </div>
      <Blog />
    </div>
  );
}
