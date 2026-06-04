"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Enjeksiyon Kalıplama için İkincil Operasyonlar"
        desc="Parçaları güçlendiren, kozmetik görünümü iyileştiren, özelleştirme sağlayan ve diğer faydalar sunan kalıplama için geniş bir yüzey işlem seçeneği yelpazesinden seçim yapın."
        firstButton={{ title: "Teklif Al", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              İkincil Operasyon Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Her süreç için geri dönüş süresi değişir ve parça karmaşıklığı ve
              miktarı gibi faktörlere bağlıdır.
            </p>
          </div>

          {/* 9-Item Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mold Texturing & Engraving */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/mold-texturing.jpg"
                  }
                  fill
                  alt="Kalıp dokulandırma ve gravür"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Kalıp Dokulandırma ve Gravür
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Kalıp dokulandırma ve/veya gravür, bir kalıba endüstri
                  standardı dokuların uygulanmasını ve/veya kalıp boşluğuna
                  grafik/metin gravürü yapılmasını içerir.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Laser Engraving */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/laser-engraving.jpg"
                  }
                  fill
                  alt="Lazer gravür"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Lazer Gravür
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Lazer gravür, logolar veya parça numaraları gibi bilgilerle
                  doğrudan parçalara uygulanır. Bu süreç, her parça üzerinde
                  net, tutarlı bilgi sağlar.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Pad Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/pad-printing.webp"
                  }
                  fill
                  alt="Pad baskı"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Pad Baskı
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  İki boyutlu bir görüntüyü, örneğin bir şirket logosunu, üç
                  boyutlu bir nesneye aktarır. Tüm görüntüler boyut, renk ve
                  karmaşıklık kısıtlamaları açısından incelenir.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* UV Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/im_2024_uv-printing_process_15_lr-1.webp"
                  }
                  fill
                  alt="UV baskı"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  UV Baskı
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  UV baskı, doğrudan üç boyutlu bir nesne üzerine baskı yapmak
                  için son teknoloji düz yatak UV mürekkep püskürtme
                  teknolojisini kullanır. Görüntüler çok küçük veya çok büyük,
                  basit veya karmaşık olabilir ve çok sayıda farklı renk
                  içerebilir.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Threaded Inserts */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/inserts.jpg"
                  }
                  fill
                  alt="Dişli ek parçalar"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Dişli Ek Parçalar
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  UNF ve metrik boyutlarda çeşitli yaygın olarak kullanılan
                  standart ek parçaları stokluyor ve monte ediyoruz. Ayrıca, ısı
                  çakma veya ultrasonik montaj yöntemleri için tasarlanmış
                  müşteri tarafından sağlanan ek parçaları da karşılayabiliriz.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Part Cleaning */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/clean-room-operations.jpg"
                  }
                  fill
                  alt="Parça temizleme"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Parça Temizleme
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Enjeksiyon kalıplama için kapsamlı parça temizleme hizmetimiz,
                  parçaların kirleticilerden arındırılmış olmasını ve sonraki
                  işlemlere veya hemen kullanıma hazır olmasını sağlar.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Machining */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/cnc-milling-point.jpg"
                  }
                  fill
                  alt="İşleme"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  İşleme
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  İşleme, ilk şekillendirmeden sonra kalıplanmış bir parçaya
                  delikler, dişler ve cepler gibi hassas özellikler eklemek için
                  takımların kullanılmasını içerir.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Assembly */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/im-sec-ops-assembly.png"
                  }
                  fill
                  alt="Montaj"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Montaj
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Standart montaj hizmetimiz, ürettiğimiz kalıplanmış parçaların
                  birleştirilmesini, ayrı ayrı torbalanmış parçalara etiket
                  uygulanmasını ve pim veya ek parçaların takılmasını içerir.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>

            {/* Packaging */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/im-sec-ops-assembly.png"
                  }
                  fill
                  alt="Paketleme"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Paketleme
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Paketleme, sterilize edilmiş etiketler, barkodlar ve QR kodlar
                  gibi seçenekler dahil olmak üzere parçaların özel
                  etiketlenmesini ve paketlenmesini içerir. Ayrıca özel
                  paketleme çözümleri de sunuyoruz.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Detayları Görüntüle →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
