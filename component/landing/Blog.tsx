"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  link: string;
}

interface BlogProps {
  posts?: BlogPost[];
  title?: string;
  itemsPerPage?: number;
  showNavigation?: boolean;
  className?: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "ProDesk by Fasonly ile Tanışın",
    description:
      "Özel parçalarınızı teklif verme, sipariş verme ve yönetme için gelişmiş dijital platformumuz. Gerçek zamanlı fiyatlandırma ve yapay zeka destekli DFM geri bildirimi ile malzeme ve teslim sürelerini kolayca yapılandırın. ProDesk, prototipten üretime geçişte ekibinizin uyum içinde ve daha hızlı hareket etmesine yardımcı olur.",
    image: "/Assets/Images/placeholder.png",
    date: "15 Mart 2025",
    link: "/blog/prodesk",
  },
  {
    id: 2,
    title: "Gelişmiş CNC Freze Hizmetleri",
    description:
      "Genişletilmiş CNC freze hizmetlerimizle parçalarınızı sadece 4 gün gibi kısa sürede teslim alın. Artık yüksek gereksinimli projeler için daha fazla esneklik sunan 2D teknik çizimleri de kabul ediyoruz.",
    image: "/Assets/Images/placeholder.png",
    date: "1 Mart 2025",
    link: "/blog/cnc-milling",
  },
  {
    id: 3,
    title: "Seri Üretim İçin Güvenilir Çözüm Ortağınız",
    description:
      "Ekibimiz, üretim projenizi başlatmanıza yardımcı olmaya hazır. Sürecin her adımında uzmanlarımızdan destek alarak projenizi güvenle tamamlayın.",
    image: "/Assets/Images/placeholder.png",
    date: "10 Şubat 2025",
    link: "/blog/production",
  },
  {
    id: 4,
    title: "3D Baskıda Yeni Malzeme Seçenekleri",
    description:
      "Endüstriyel 3D baskı portföyümüze eklenen yeni malzemelerle daha dayanıklı, hafif ve yüksek performanslı parçalar üretmek artık çok daha kolay.",
    image: "/Assets/Images/placeholder.png",
    date: "25 Ocak 2025",
    link: "/blog/3d-printing-materials",
  },
  {
    id: 5,
    title: "Otomotiv Sektörü İçin Hızlı Prototipleme",
    description:
      "Otomotiv sektöründe prototipleme süreçlerinizi hızlandıran yeni üretim hattımız. Elektrikli ve hibrit araç projeleriniz için özel çözümler.",
    date: "10 Ocak 2025",
    image: "/Assets/Images/placeholder.png",
    link: "/blog/automotive-prototyping",
  },
];

export default function Blog({
  posts = defaultPosts,
  title = "Fasonly'de Neler Yeni?",
  itemsPerPage = 3,
  showNavigation = true,
  className = "",
}: BlogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= posts.length ? 0 : prevIndex + itemsPerPage,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, posts.length - itemsPerPage)
        : prevIndex - itemsPerPage,
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={`w-full bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Görsel</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {post.date && (
                  <span className="text-sm text-[#0099ff] font-medium mb-2">
                    {post.date}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#0B1221] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button
                  onClick={() => (window.location.href = post.link)}
                  className="flex items-center gap-2 text-[#0B1221] font-medium mt-auto hover:text-[#0099ff] transition-colors duration-300 group-hover:gap-3 w-fit">
                  Daha Fazla
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F0F8FF] hover:border-[#0099ff] transition-all duration-300 group"
              aria-label="Önceki">
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#0099ff]" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === idx
                      ? "w-6 bg-[#0099ff]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Sayfa ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F0F8FF] hover:border-[#0099ff] transition-all duration-300 group"
              aria-label="Sonraki">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#0099ff]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
