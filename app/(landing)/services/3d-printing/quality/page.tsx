"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState<
    "standard" | "reference" | "as9102"
  >("standard");

  const tables = {
    standard: {
      title: "Standart Denetim Raporu",
      headers: [
        "Faydalar",
        "Ölçümler",
        "Ek Özellikler",
        "Uygunluk",
        "Ek Teslim Süresi",
        "Örneklem Planı",
      ],
      rows: [
        [
          "İstenen özelliklerin boyutsal raporunu içerir",
          "Belirtilmişse baloncuklu/CTQ boyutları, aksi takdirde tüm toleranslı boyutlar",
          "Baloncuklu parça görseli ve sonuç özet tablosu içeren biçimlendirilmiş rapor",
          "Tüm 3D baskı teknolojileri",
          "Denetim gereksinimlerine bağlı olarak iki iş günü veya daha fazla",
          "Aksi belirtilmedikçe geometri başına bir parça",
        ],
      ],
      additionalInfo:
        "İstenen denetim özelliklerini içeren bir 2B çizim yükleyin. Referans Raporu yalnızca bilgilendirme amaçlıdır ve geçer/kalır değildir. Ölçemediğimiz herhangi bir özellik, parçanın Üretim Analizinde belirtilecektir.",
    },
    reference: {
      title: "Referans Raporu",
      headers: [
        "Faydalar",
        "Ölçümler",
        "Ek Özellikler",
        "Uygunluk",
        "Ek Teslim Süresi",
        "Örneklem Planı",
      ],
      rows: [
        [
          "İstenen özelliklerin geçer/kalır boyutsal raporunu içerir",
          "Belirtilmişse baloncuklu/CTQ boyutları, aksi takdirde tüm toleranslı boyutlar",
          "Baloncuklu parça görseli ve sonuç özet tablosu içeren biçimlendirilmiş rapor",
          "DMLS, SLS, MJF",
          "Denetim gereksinimlerine bağlı olarak iki iş günü veya daha fazla",
          "Aksi belirtilmedikçe geometri başına bir parça",
        ],
      ],
      additionalInfo:
        "Referans Raporu yalnızca bilgilendirme amaçlıdır ve geçer/kalır değildir.",
    },
    as9102: {
      title: "AS9102 İlk Ürün Denetim Raporu",
      headers: [
        "Faydalar",
        "Ölçümler",
        "Ek Özellikler",
        "Uygunluk",
        "Ek Teslim Süresi",
        "Örneklem Planı",
      ],
      rows: [
        [
          "AS9102 FAIR formatında tüm özelliklerin boyutsal raporunu içerir",
          "Tüm boyutlar ve çizim notları",
          "Tam 3 sayfalık AS9102 belgesi ve eşleşen baloncuklu çizim",
          "DMLS, SLS, MJF",
          "Denetim gereksinimlerine bağlı olarak 2-5 iş günü veya daha fazla",
          "Geometri başına bir parça",
        ],
      ],
      additionalInfo:
        "AS9102 sertifikası, seçici lazer sinterleme (SLS), Multi Jet Füzyon (MJF) ve doğrudan metal lazer sinterleme (DMLS) için mevcuttur.",
    },
  };

  const currentTable = tables[activeTab];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Kaliteli 3D Baskı için Süreçler, Denetimler ve Raporlama"
        desc="Doğru parçaları tutarlı bir şekilde üretmek için dijital üretim ve kalite kontrol süreçlerini nasıl kullandığımız"
        image="/Assets/Images/services/3d-printing/quality/hero.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        secondButton={{ title: "Denetim Seçeneklerini Görüntüle", route: "/" }}
        simple
      />
      <div className="w-full bg-white py-20">
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
                  <p className="text-gray-300 text-xs mt-1">
                    Eklemeli Üretim için Tasarım Analizi
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Eklemeli Üretim için Tasarım Analizi
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Kaliteye olan bağlılığımız üretim süreci boyunca belirgindir ve
                bunu ilk etkileşiminizden itibaren deneyimleyeceksiniz. Teklif
                gönderdiğinizde, 3D baskı tasarımınızın bir analizini
                alacaksınız.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Eklemeli üretim için otomatik tasarım analizimiz hızla şunları
                tanımlar:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Parça boyutuyla ilgili sorunlar (büyük veya küçük)",
                  "Çökmeden oluşamayacak kadar küçük malzeme boşlukları",
                  "Fazla tozu temizlemek, destekleri çıkarmak veya yüzey işlemi uygulamak için erişilemeyen yüzeyler",
                  "Optimum metin çözünürlüğü için metin boyutu",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Bu uyarılardan birini alırsanız, modelinizi düzeltmek için
                önerilen bir çözüm içerdiğini de fark edeceksiniz. Tek bir
                tıklamayla, sorunu kabul edip olduğu gibi devam etmeyi veya geri
                dönüp yeniden tasarlayıp modelinizi yeniden göndermeyi
                seçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Support from 3D Printing Experts */}
            <div className="bg-gradient-to-br from-[#F0F8FF] to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#0099ff]/10 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                3D Baskı Uzmanlarından Destek
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tasarımınızı, sahip olabileceğiniz her türlü üretilebilirlik
                sorusunu yanıtlayabilecek bir 3D baskı uygulama mühendisiyle
                tartışın. Yaygın tasarım inceleme konuları arasında maliyet
                optimizasyonu, özellik konumu ve aralığı ile yüzey işlem
                seçenekleri hakkındaki sorular yer alır.
              </p>
              <a
                href="#"
                className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Bugün ücretsiz sanal toplantı planlayın →
              </a>
            </div>

            {/* Repeatability and Precision */}
            <div className="bg-gradient-to-br from-[#F0F8FF] to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#0099ff]/10 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-3">
                Tekrarlanabilirlik ve Hassasiyet
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Misyonumuz her seferinde kaliteli parçalar teslim etmektir. Bunu
                yapmak için, açıkça belgelenmiş iş standartları ve prosedürleri
                kullanıyoruz. Hataları en aza indirmek için, yetenekli eklemeli
                üretim teknisyenlerinden oluşan ekibimiz her benzersiz
                geometride süreç içi kalite kontrolleri gerçekleştirir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Parça tamamlandıktan sonra, kalite kontrol uzmanlarımız devralır
                ve fiziksel parçayı 3B modelinizle (veya varsa çıktınızla)
                tutarlılığı sağlamak için görsel ve boyutsal olarak denetler.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Daha İyi Baskı Alın
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eklemeli üretimi enine boyuna bilen mühendislerin desteğiyle
                yüksek kaliteli 3D baskılı parçaları hızlıca alın. Altı 3D baskı
                teknolojisi ve 60'ın üzerinde malzeme ile yüksek performanslı,
                güvenilir parçalar üretin.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
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

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/3dp_brand_campaign_01.jpg"
                alt="Daha İyi Baskı Alın"
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
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              3D Baskılı Parçalar için Denetim Dokümantasyonu
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Tüm parçalar %100 görsel denetime ve temel boyutların teklif
              edilen toleransları karşıladığını doğrulamak için parça örnekleme
              ölçümlerine tabi tutulur. AS9100 sertifikalı tekliflerimizle -
              seçici lazer sinterleme (SLS), Multi Jet Füzyon (MJF) ve doğrudan
              metal lazer sinterleme (DMLS) - parçalar, üretim sürecimizin bir
              parçası olarak AQL (Kabul Edilebilir Kalite Limiti) seviye II
              kullanılarak örneklenir.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Bir rapora ihtiyacınız varsa, üç farklı seçenek ve kapsamlı bir
              Yapı Raporu sunuyoruz. Proje ihtiyaçlarınıza en uygun olanı görmek
              için her denetim raporunun faydalarını karşılaştırın.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "standard"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Standart Rapor
            </button>
            <button
              onClick={() => setActiveTab("reference")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "reference"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Referans Raporu
            </button>
            <button
              onClick={() => setActiveTab("as9102")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "as9102"
                  ? "bg-[#0B1221] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              AS9102 FAIR
            </button>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-[#0B1221] mb-6 text-center">
            {currentTable.title}
          </h3>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  {currentTable.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="text-left p-4 font-semibold border-r border-gray-700 last:border-r-0 min-w-[150px]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTable.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-gray-200">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="p-4 text-gray-600 text-sm align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Information */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Ek Bilgiler:</span>{" "}
              {currentTable.additionalInfo}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Referans Raporu
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Tipik olarak, Referans Raporu, dahil ettiğiniz herhangi bir
                çizime göre bir parça hakkında geri bildirim almak istiyorsanız
                kullanılır, ancak geçer/kalır denetimleri için kullanılamaz. Tüm
                3D baskı teknolojilerimiz için bir Referans Raporu sunuyoruz.
              </p>
              <h3 className="text-2xl font-bold text-[#0B1221] mt-6 mb-4">
                Boyutsal Denetim Raporu (DIR)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                DIR, parçaları bir çizimle karşılaştırmak ve geçer/kalır sonucu
                sağlamak için kullanılan standart bir denetim aracıdır ve bu
                durum herhangi bir başarısızlık için müşteri geri bildirimi
                gerektirir. Ölçtüğümüz boyut sayısında bir sınır yoktur, ancak
                herhangi bir ek değerlendirme çalışma süresini artıracak ve
                dolayısıyla parçalarınızın teslim süresini ve fiyatını
                artıracaktır. Standart denetim için bir parça kullanırken, talep
                üzerine daha fazla parça denetlenebilir, bu da teslim süresi ve
                maliyet ekler. Malzemenin doğası gereği, stereolitografi (SLA),
                PolyJet ve gelişmiş fotopolimer (AP) teknolojileri için DIR
                sunamıyoruz.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/frame-1-2.jpg"
                alt="Denetim Raporları"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/frame-3-3.jpg"
                alt="Yapı Raporu ve AS9102 FAI"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                Yapı Raporu
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                SLS, MJF ve DMLS parçaları için, DIR'inizi yapı sürecinden
                alınan bilgilerin kapsamlı bir listesiyle birleştiren bir Yapı
                Raporu sunuyoruz. Bunlar, parti numaraları, yapı numaraları,
                döngüler, uygunluk sertifikaları ve dış kaynaklı süreçler için
                sertifikaları içerir ancak bunlarla sınırlı değildir.
              </p>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-4">
                AS9102 İlk Ürün Denetimi (FAI)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AS9102 FAI, parçaları yapmak için kullanılan gerçek süreci
                doğrulayan daha sıkı bir rapordur. Fasonly kalite kontrol, GD&T
                dahil olmak üzere 2B çizimde sağlanan boyutların %100'ünü
                denetleyecektir. AS9102, genellikle havacılık endüstrisinde
                gerekli olan bir endüstri standardı formatıdır, ancak diğer
                alanlar da kullanabilir. Tamamlanma açısından önemli ölçüde daha
                yoğundur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
