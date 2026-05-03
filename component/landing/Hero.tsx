// components/Hero.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { RedirectButton } from "../UI/Buttons";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default hover on second item
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Brand logos for infinite slider
  const brands = [
    { name: "Mechanic", logo: "/Assets/Images/brands/mechanimix.png" },
    { name: "Ant Group", logo: "/Assets/Images/brands/antgroup.png" },
    { name: "ANTEK", logo: "/Assets/Images/brands/antek.png" },
    { name: "Marmaram", logo: "/Assets/Images/brands/marmaram.png" },
    { name: "MRM", logo: "/Assets/Images/brands/mrm.png" },
  ];

  // Service cards data
  const services = [
    {
      id: 0,
      title: "CNC İşleme",
      image: "/Assets/Images/parts/CNC.png",
      description:
        "Yüksek hassasiyetli CNC işleme teknolojileriyle prototipten seri üretime kadar kaliteli, hızlı ve güvenilir üretim.",
      detailLink: "#",
    },
    {
      id: 1,
      title: "Sac Metal Üretim",
      image: "/Assets/Images/parts/metal.png",
      description:
        "Lazer kesim, büküm, delme ve kaynak operasyonlarını entegre ederek yüksek hassasiyetli sac metal parçalar üretir.",
      detailLink: "#",
    },
    {
      id: 2,
      title: "3D Baskı",
      image: "/Assets/Images/parts/3d.png",
      description:
        "Fonksiyonel prototipler ve düşük adetli üretimler için, farklı malzeme ve baskı teknolojileriyle hızlı ve mühendislik odaklı 3D baskı çözümleri sunuyoruz.",
      detailLink: "#",
    },
    {
      id: 3,
      title: "Plastik Enjeksiyon",
      image: "/Assets/Images/parts/plastic.png",
      description:
        "Plastik enjeksiyon üretiminde mühendislik hassasiyeti ve hızlı teslimat ile düşük adetli prototip üretimlerinden seri imalata kadar tüm süreçler dijital olarak yönetilir.",
      detailLink: "#",
    },
  ];

  // Infinite slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [brands.length]);

  // Double the brands array for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands];

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-[#0B1221] w-full relative pt-28 pb-16 overflow-hidden">
      {/* Blue glare in the middle */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0099ff] blur-[150px] rounded-full opacity-25 pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#0099ff] blur-[120px] rounded-full opacity-15 pointer-events-none" />

      {/* Container */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        {/* Hero Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Left Side - Text & CTAs */}
          <div className="flex flex-col max-w-xl lg:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Türkiye'nin Akıllı <br />
              <span className="text-[#0099ff]">Üretim Platformu</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 max-w-lg">
              AI destekli hızlı ve güvenilir tekliflendirme, hassas mühendislik
              ve kalite standartlarına tam uyumlu, izlenebilir üretim süreçleri.
            </p>

            <div className="flex flex-row gap-4 mb-8">
              <RedirectButton
                title="Teklif Al"
                url=""
                theme="BlueToGreen"
                style="font-mono"
              />
              <button className="bg-transparent border border-white/30 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                Hizmetleri İncele
              </button>
            </div>

            {/* Infinite Brand Slider - Draggable */}
            <div
              className="w-full overflow-hidden relative py-2 cursor-grab active:cursor-grabbing"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
              <div
                className="flex gap-8 md:gap-12 animate-slide"
                style={{
                  animationPlayState: isDragging ? "paused" : "running",
                }}>
                {duplicatedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={40}
                      className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Panel */}
          <div className="w-full lg:w-[700px] relative">
            <Image
              src={"/Assets/Images/Fasonly-Monitoring.png"}
              width={900}
              height={500}
              alt="Fasonly Panel Image"
              className="rounded-4xl border border-[#0099ff] border-4 w-full h-auto"
            />
          </div>
        </div>

        {/* Services Section - 4 Cards with Hover Effects */}
        <div className="relative">
          {/* Separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#0099ff]/30 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative group h-[280px] md:h-[320px] rounded-xl overflow-hidden cursor-pointer bg-[#151E32]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-contain transition-all duration-700 ease-out ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/70 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-95" : "opacity-80"
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Title */}
                  <h3
                    className={`text-white font-bold text-xl md:text-2xl transition-all duration-500 ${
                      hoveredIndex === index ? "mb-2" : "mb-0"
                    }`}>
                    {service.title}
                  </h3>

                  {/* Description & Button - Shown on hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredIndex === index
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="flex items-center gap-2 text-[#96E92A] font-medium hover:gap-3 transition-all duration-300 bg-white/10 px-4 py-2 rounded-lg">
                      DETAYLI İNCELE
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Blue underline line - animated on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0099ff]/30 overflow-hidden">
                    <div
                      className={`h-full bg-[#0099ff] transition-transform duration-500 ease-out ${
                        hoveredIndex === index
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation for infinite slider */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
