// app/about/page.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { FileText, Users, Network, PenTool, Layers, Scale } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Hızlı, Teklif ve Planlı Üretim Süreci",
      description:
        "CAD dosyanızı yükledikten sonra, kısa sürede tekliflendirme yapılır ve üretim süreci net bir planla başlatılır. Gereksiz bekleme süreleri ortadan kaldırılır.",
      icon: FileText,
    },
    {
      title: "Güvenilir Çözüm Ortağı",
      description:
        "Fasonly, farklı sektörlerden firmalarla çalışarak prototip, özel parça ve seri üretim projelerinde uçtan uca üretim desteği sağlar.",
      icon: Users,
    },
    {
      title: "Doğrulanmış ve Geniş Üretim Ağı",
      description:
        "CNC işleme, sac metal ve özel imalat süreçlerinde kalite standartlarına uygun çalışan üretim iş ortaklarıyla hizmet veriyoruz.",
      icon: Network,
    },
    {
      title: "Üretilebilirlik Odaklı Mühendislik Yaklaşımı",
      description:
        "Her tasarım, üretime geçmeden önce üretilebilirlik (DFM) açısından değerlendirilir. Böylece hem maliyet hem de üretim süresi daha baştan optimize edilir.",
      icon: PenTool,
    },
    {
      title: "Ölçeklenebilir Üretim Altyapısı",
      description:
        "Tek parça üretimden düşük ve orta adetli seri üretime kadar farklı ihtiyaçlara uygun çözümler sunarız. Projeniz büyüdükçe üretim kapasiteniz de aynı hızla ölçeklenir.",
      icon: Layers,
    },
    {
      title: "Maliyet ve Kalite Dengesi",
      description:
        "Fasonly, üretim maliyetlerini kontrol altında tutarken kalite standartlarından ödün vermeyen bir yaklaşım benimser. Amaç, sürdürülebilir ve güvenilir üretimdir.",
      icon: Scale,
    },
  ];

  // Trust Section - Gallery Images
  const trustImages = [
    "/Assets/Images/samples/1.jpg",
    "/Assets/Images/samples/2.jpg",
    "/Assets/Images/samples/3.jpg",
    "/Assets/Images/samples/4.jpg",
    "/Assets/Images/samples/5.jpg",
  ];

  // Trust Section - Brands
  const brands = [
    { name: "Mechanic", logo: "/Assets/Images/brands/mechanimix.png" },
    { name: "Ant Group", logo: "/Assets/Images/brands/antgroup.png" },
    { name: "ANTEK", logo: "/Assets/Images/brands/antek.png" },
    { name: "Marmaram", logo: "/Assets/Images/brands/marmaram.png" },
    { name: "MRM", logo: "/Assets/Images/brands/mrm.png" },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trustImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [trustImages.length]);

  // Sync scroll position with current slide
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const slideWidth =
        (container.firstChild as HTMLElement)?.clientWidth || 0;
      const gap = 16; // matches gap-4 (16px)
      const scrollPosition = currentSlide * (slideWidth + gap);
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, [currentSlide]);

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
    <div className="w-full bg-white pb-10">
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
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              Üretimi, kaliteyi ve inovasyonu{" "}
              <span className="text-[#0099ff]">dijitalde</span> buluşturuyoruz.
            </p>
          </div>
        </div>
      </div>
      {/* Content Section - Light Blue Background */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
              Kaliteli Mühendislik İle Dijital Üretimi Güçlendiriyoruz
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Firmaların tasarımdan üretime geçiş sürecini daha hızlı ve
              kontrollü yönetebilmesi için dijital üretim çözümleri sunar.
              Mühendislik odaklı yaklaşımımız sayesinde, CAD dosyalarınız
              üretime uygun hale getirilir ve güvenilir bir üretim süreciyle
              hayata geçirilir.
            </p>
          </div>

          {/* Features Grid - 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-[#0B1221] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0099ff] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0099ff] transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Commitment & Excellence Section - Text only */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="lg:w-1/3">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221]">
                  Taahhüt, Mühendislik ve Mükemmellik
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-600 leading-relaxed">
                  Fasonly, dijital üretim süreçlerinde kaliteyi ve mühendislik
                  disiplinini ön planda tutar. Her projeye aynı özdişliyle
                  yaklaşır, tasarımdan üretime kadar olan tüm aşamalarda şeffaf,
                  güvenilir ve sürdürülebilir çözümler sunar. Amacımız,
                  müşterilerimizin üretim süreçlerini yalnızca hızlandırmak
                  değil, aynı zamanda doğru mühendislik kararlarıyla sağlam
                  temellere oturtmaktır.
                </p>
              </div>
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-12">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/Assets/Images/about/video-placeholder.jpg"
                alt="Fasonly Production Process"
                fill
                className="object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0099ff] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                </div>
              </div>
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Text */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Fasonly Yolculuğu: Dijital Üretimde Güvenilir Bir Adım
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mühendislik bilgisi ile dijital üretim altyapısını bir araya
                getirerek firmaların ürün geliştirme süreçlerini daha verimli
                hale getiririz. Prototipten seri üretime uzanan bu yolculukta,
                her adım planlı, ölçülebilir ve kontrol edilebilir şekilde
                ilerler.
              </p>
            </div>

            {/* Right Stats */}
            <div className="lg:w-1/2 flex flex-row gap-8 md:gap-16 justify-start lg:justify-end">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#0099ff] mb-1">
                  12+
                </div>
                <p className="text-gray-600 text-sm">
                  Dijital üretim ve mühendislik odaklı proje deneyimi
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#0099ff] mb-1">
                  980+
                </div>
                <p className="text-gray-600 text-sm">
                  Farklı sektörlerde başarıyla tamamlanan üretim çalışması
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trust Section */}
      <div className="w-full bg-[#0B1221] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              <span className="text-[#0099ff]">Girişimlerden</span> Kurumsal
              Firmalara
              <br />
              Güvenilen Bir Üretim Ortağı
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fasonly, farklı ölçeklerdeki firmaların dijital üretim
              süreçlerinde tercih ettiği güvenilir bir iş ortağıdır.
              Startuplardan kurumsal yapılara kadar birçok ekip, tasarımdan
              üretime uzanan yolculuklarında Fasonly'nin mühendislik odaklı
              yaklaşımını kullanır.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="relative mb-12">
            <div
              className="flex gap-4 overflow-x-hidden cursor-grab active:cursor-grabbing"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
              {trustImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] flex-shrink-0">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`Trust image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {trustImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mb-12">
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              Amacımız, müşterilerimizin üretim hedeflerine güvenle ulaşmasını
              sağlamaktır.
            </p>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20 ">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
                Fasonly Ekibi ile Tanışın
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-gray-600 leading-relaxed">
                Mühendislik bilgisi ile dijital üretim deneyimini bir araya
                getiren uzman bir ekip tarafından yönetilir. Tasarımdan üretime
                uzanan her projede, teknik doğruluk, net iletişim ve çözüm
                odaklı yaklaşım ön plandadır. Ekibimiz, müşterilerimizin üretim
                süreçlerini güvenle yönetebilmesi için birlikte çalışır.
              </p>
            </div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sağlar Vefa",
                title: "Co-Founder",
                image: "/Assets/Images/members/sample.jpg",
              },
              {
                name: "Umutcan Özer",
                title: "Co-Founder",
                image: "/Assets/Images/members/umutcan.png",
              },
              {
                name: "Hakan Erman",
                title: "Chief Operating Officer",
                image: "/Assets/Images/members/sample.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#0B1221] font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{member.title}</p>
                <button className="w-10 h-10 bg-[#F0F8FF] rounded-full flex items-center justify-center hover:bg-[#0099ff] hover:text-white transition-colors duration-300 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0B1221] group-hover:text-white transition-colors duration-300">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
