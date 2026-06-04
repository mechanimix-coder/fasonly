"use client";

import GetAQuote from "@/component/landing/GetAQuote";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="CNC İşlenmiş Parçalar için Yüzey İşlemleri ve Kaplamalar"
        desc="CNC işlenmiş parçalar için standart yüzey işlemlerini ve ayrıca dayanıklılığı, yüzey kalitesini iyileştirmek ve renk eklemek için gelişmiş yetenekleri değerlendirin."
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Standart Yüzey İşlemleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              CNC işlenmiş parçalar için üç standart yüzey işlem seçeneği
              arasından seçim yapın.
            </p>
          </div>

          {/* 3 Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1 - Edges broken (tool marks visible) */}
            <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/finishing-options/cnc-circularflange-aluminum-brokenedge.jpg"
                  alt="Dış Dişler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] text-center mb-3">
                  Kırılmış Kenarlar (takım izleri görünür)
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Görünür takım izleriyle çapak alınmış kenarlar.
                </p>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Malzemeler:</span>
                    <span className="text-gray-700 font-medium">
                      Plastik, Metaller
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Maliyet:</span>
                    <span className="text-[#96E92A] font-bold">$</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 - Edges broken and light bead blast */}
            <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/finishing-options/cnc-milling-circularflange-aluminum-beadblasted.jpg"
                  alt="Dış Dişler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] text-center mb-3">
                  Kırılmış Kenarlar ve Hafif Boncuk Püskürtme
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Hafif boncuk püskürtme ile çapak alınmış kenarlar.
                </p>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Malzemeler:</span>
                    <span className="text-gray-700 font-medium">Metaller</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Maliyet:</span>
                    <span className="text-[#96E92A] font-bold">$$</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 - Leave sharp (tool marks visible) */}
            <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src="/Assets/Images/services/cnc-machining/finishing-options/cnc-milling-circularflange-aluminum-sharpedge.jpg"
                  alt="Dış Dişler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] text-center mb-3">
                  Keskin Bırak (takım izleri görünür)
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Keskin bırakılan kenarlar (takım izleri görünür) dikkatle
                  tutulmalıdır.
                </p>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Malzemeler:</span>
                    <span className="text-gray-700 font-medium">Metaller</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Maliyet:</span>
                    <span className="text-[#96E92A] font-bold">$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetAQuote
        title="Son Kullanım Parçaları için CNC İşleme Hizmetleri"
        desc="Genişletilmiş otomatik CNC frezeleme ile yüksek kaliteli işlenmiş parçaları daha hızlı alın - parçalar 4 gün kadar kısa sürede hazır"
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kaplama ve Plakalama Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              CNC işlenmiş parçalar için çeşitli kaplama ve plakalama
              seçenekleri arasından seçim yapın.
            </p>
          </div>

          {/* Anodizing Type II */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
              Tip II Anodizasyon
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Tip II Siyah Anodizasyon", color: "bg-gray-800" },
                { name: "Tip II Mavi Anodizasyon", color: "bg-blue-600" },
                { name: "Tip II Şeffaf Anodizasyon", color: "bg-gray-300" },
                { name: "Tip II Altın Anodizasyon", color: "bg-amber-500" },
                { name: "Tip II Kırmızı Anodizasyon", color: "bg-red-600" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div
                    className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                    <Image
                      src="/Assets/Images/services/cnc-machining/finishing-options/A1.webp"
                      alt="Anodizasyon örneği"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anodizing Type III */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
              Tip III Anodizasyon
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Tip III Siyah Anodizasyon", color: "bg-gray-800" },
                { name: "Tip III Mavi Anodizasyon", color: "bg-blue-600" },
                { name: "Tip III Şeffaf Anodizasyon", color: "bg-gray-300" },
                { name: "Tip III Altın Anodizasyon", color: "bg-amber-500" },
                { name: "Tip III Kırmızı Anodizasyon", color: "bg-red-600" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div
                    className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Powder Coating */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6">Toz Boya</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Siyah Düz Pürüzsüz (Kuzgun Siyahı)",
                  color: "bg-gray-900",
                },
                {
                  name: "Siyah Düz İnce Dokulu (Siyah Gri RAL 7021)",
                  color: "bg-gray-700",
                },
                { name: "Siyah Düz Pürüzsüz", color: "bg-gray-800" },
                {
                  name: "Beyaz Parlak Pürüzsüz (Sinyal Beyazı RAL 9003)",
                  color: "bg-white border border-gray-200",
                },
                {
                  name: "Beyaz Parlak Pürüzsüz (Gökyüzü Beyazı)",
                  color: "bg-gray-50 border border-gray-200",
                },
                {
                  name: "Ten Rengi Düz Pürüzsüz (Çöl Ten Rengi)",
                  color: "bg-amber-700",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div
                    className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                    {item.name.includes("Beyaz") && (
                      <span className="text-gray-300 text-2xl">●</span>
                    )}
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700 line-clamp-2">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Orange & Chromate Plating Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Safety Orange */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Güvenli Turuncu
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-32 w-full bg-orange-600 flex items-center justify-center">
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      Güvenli Turuncu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chromate Plating */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Kromat Kaplama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Tip I Sınıf 1A Şeffaf Kromat Kaplama",
                    color: "bg-yellow-100",
                  },
                  {
                    name: "Tip I Sınıf 3 Şeffaf Kromat Kaplama",
                    color: "bg-yellow-200",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <div
                      className={`relative h-32 w-full ${item.color} flex items-center justify-center`}>
                      <span className="text-yellow-600 text-2xl">●</span>
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-xs font-medium text-gray-700">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Electroless Nickel Plating & Zinc Coating Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Electroless Nickel Plating */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Elektrolizsiz Nikel Kaplama
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-32 w-full bg-gray-400 flex items-center justify-center">
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      Şeffaf Elektrolizsiz Nikel Kaplama
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zinc Coating */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-6">
                Çinko Kaplama
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#F0F8FF] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-32 w-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-white text-opacity-50 text-2xl">
                      ●
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">
                      Sarı Çinko Kaplama Tip II
                    </p>
                  </div>
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
              CNC İşleme Parçaları için Gelişmiş İşlem Sonrası Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Hem Fabrika hem de Fasonly Network aracılığıyla, parçanızın
              özelliklerini karşılamak için geniş bir yelpazede işlem sonrası
              yeteneklere erişebilirsiniz.
            </p>
          </div>

          {/* Post-Processing Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[160px]">
                    Açıklama
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Malzemeler
                  </th>
                  <th className="text-center p-3 font-semibold border-r border-gray-700 w-20">
                    Fabrika
                  </th>
                  <th className="text-center p-3 font-semibold w-20">
                    Network
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Boncuk Püskürtme",
                    desc: "Homojen yüzey ve hafif doku sağlamak için hafif boncuk püskürtme",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Anodizasyon",
                    desc: "Parça dayanıklılığını artırmak ve renk eklemek için Tip I, II ve III yüzey işlemleri mevcuttur",
                    materials: "Alüminyum, Titanyum",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Kromat Kaplama",
                    desc: "Korozyon direncini artırır, elektriksel bağlantı ekler ve parçaların daha iyi boyanmasını sağlar",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Elektrolizsiz Nikel Kaplama",
                    desc: "Alüminyum, paslanmaz çelik ve yumuşak çelik ile uyumlu, aşınmaya, sürtünmeye ve korozyona dayanıklı bir yüzey işlemi",
                    materials: "Alüminyum, Çelik",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Parça İşaretleme",
                    desc: "Parçalara etiketleme ve diğer metinleri eklemek için lazer gravür veya pad baskı",
                    materials: "Metaller, Plastikler",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Pasivasyon",
                    desc: "Metal parçaların dayanıklılığını ve korozyon direncini artırın",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Toz Boya",
                    desc: "Dayanıklılığı artırırken parçalara özel renk ekleyin",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Ek Parçalar",
                    desc: "Montajı kolaylaştırmak için hazır donanım bileşenlerini entegre edin",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "İpek Baskı",
                    desc: "Parçalara tasarım öğeleri veya etiketler ekleyin",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Fırçalama",
                    desc: "Homojen, saten benzeri yüzey kalitesi elde edin",
                    materials: "Paslanmaz Çelik",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Parlatma",
                    desc: "Metal parçalarda ayna benzeri yüzeyler oluşturun",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Siyah Oksit",
                    desc: "Korozyon direncini artırın",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                  {
                    name: "Fırçalama + Elektro Parlatma",
                    desc: "Bu işlem kombinasyonu, korozyona dayanıklı, temizlemesi kolay parçalar elde edilmesini sağlar",
                    materials: "Metaller",
                    factory: true,
                    network: true,
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 font-semibold text-[#0B1221] align-top">
                      {item.name}
                      <p className="font-normal text-gray-500 text-xs mt-1">
                        {item.desc}
                      </p>
                    </td>
                    <td className="p-3 text-gray-600 text-sm align-top">
                      {item.materials}
                    </td>
                    <td className="p-3 text-center align-top">
                      {item.factory ? (
                        <span className="text-[#96E92A] text-lg font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="p-3 text-center align-top">
                      {item.network ? (
                        <span className="text-[#96E92A] text-lg font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
