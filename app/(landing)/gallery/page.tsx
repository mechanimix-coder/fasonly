// app/gallery/page.tsx
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    "/Assets/Images/gallery/S1.jpg",
    "/Assets/Images/gallery/S2.jpg",
    "/Assets/Images/gallery/S3.jpg",
  ];

  // Auto-slide effect - moving right to left
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Resource cards data
  const resources = [
    {
      title: "Malzeme Seçim Rehberi",
      icon: "/Assets/Images/gallery/icons/1.png",
    },
    {
      title: "Tasarım İpuçları",
      icon: "/Assets/Images/gallery/icons/2.png",
    },
    {
      title: "Yüzey İşlem Kılavuzu",
      icon: "/Assets/Images/gallery/icons/3.png",
    },
    {
      title: "DFM - Üretilebilir Tasarım",
      icon: "/Assets/Images/gallery/icons/4.png",
    },
    {
      title: "Hangi Üretim Yöntemi Bana Uygun?",
      icon: "/Assets/Images/gallery/icons/5.png",
    },
    {
      title: "Dosya Hazırlama Rehberi",
      icon: "/Assets/Images/gallery/icons/1.png",
    },
    {
      title: "Sık Sorulan Sorular",
      icon: "/Assets/Images/gallery/icons/2.png",
    },
    {
      title: "Prototipten Seriye Geçiş",
      icon: "/Assets/Images/gallery/icons/3.png",
    },
    {
      title: "7/24 Teklif & Sipariş Yönetimi",
      icon: "/Assets/Images/gallery/icons/4.png",
    },
    {
      title: "Blog",
      icon: "/Assets/Images/gallery/icons/5.png",
    },
  ];

  return (
    <div className="w-full bg-white ">
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
              Tasarımdan <span className="text-[#0099ff]">Üretime</span>{" "}
              Rehberiniz
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              Malzeme rehberlerinden tasarım ipuçlarına, tolerans tablolarından
              yüzey işlem kılavuzlarına üretim sürecinizi hızlandıracak tüm
              teknik kaynaklar burada.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Light Blue Background */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Resources Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Bilgi Merkezi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Üretim sürecinizi hızlandıracak rehberler, ipuçları ve teknik
              kaynaklar tek bir yerde.
            </p>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                    <Image
                      src={resource.icon}
                      alt={resource.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[#0B1221] text-xs md:text-sm font-semibold leading-tight">
                  {resource.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-200 mb-16" />

          {/* Gallery Section - Standardized Size */}
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
            {/* Left - Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Üretim Atölyemizden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Makinelerimiz, ekibimiz ve teslim ettiğimiz işler. Fasonly'de
                üretim nasıl görünür, yakından inceleyin.
              </p>
              <button className="bg-white border border-gray-300 text-[#0B1221] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Tüm Galeriyi Gör
              </button>
            </div>

            {/* Right - Gallery */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={galleryImages[currentSlide]}
                  alt="Üretim Atölyesi"
                  fill
                  className="object-cover transition-transform duration-500"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + galleryImages.length) %
                        galleryImages.length,
                    )
                  }
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#0B1221]" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
                  }
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#0B1221]" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-[#0B1221] w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-200 mb-16" />

          {/* Bottom CTA Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left - Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Teklif Almak Artık Saniyeler Sürüyor
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dosyanızı yükleyin, malzemenizi ve miktarı seçin yapay zeka
                destekli sistemimiz anında fiyat hesaplasın.
              </p>
              <button className="bg-white border border-gray-300 text-[#0B1221] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Hemen Deneyin
              </button>
            </div>

            {/* Right - Illustration */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <Image
                  src="/Assets/Images/gallery/network.png"
                  alt="Teklif İllüstrasyonu"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Testimonials Section - Top */}
          <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/Assets/Images/gallery/B1.png"
                      alt="Logo"
                      width={140}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#0B1221] font-medium mb-3 text-center">
                    "CloudSprout Elevated Our Business!"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Testimonials, as authentic endorsements from satisfied
                    customers, serve as potent social proof, significantly
                    inspiring trust in potential consumers.
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/Assets/Images/gallery/B2.png"
                      alt="Logo"
                      width={140}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#0B1221] font-medium mb-3 text-center">
                    "Seamless Integration with CloudSprout!"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Testimonials, as authentic endorsements from satisfied
                    customers, serve as potent social proof, significantly
                    inspiring trust in potential consumers.
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/Assets/Images/gallery/B3.png"
                      alt="Logo"
                      width={140}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#0B1221] font-medium mb-3 text-center">
                    "Growth Powered by CloudSprout!"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Testimonials, as authentic endorsements from satisfied
                    customers, serve as potent social proof, significantly
                    inspiring trust in potential consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance Section - Standardized Size */}
          <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left - Text */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                    Security and Compliance
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Use a clear and attention-grabbing short paragraph to engage
                    your audience and draw them into reading the rest of your
                    content.
                  </p>
                  <button className="bg-white border border-gray-300 text-[#0B1221] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    Schedule a Demo
                  </button>
                </div>

                {/* Right - Gallery Carousel */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={galleryImages[currentSlide]}
                      alt="Security and Compliance"
                      fill
                      className="object-cover transition-transform duration-500"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) =>
                            (prev - 1 + galleryImages.length) %
                            galleryImages.length,
                        )
                      }
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#0B1221]" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) => (prev + 1) % galleryImages.length,
                        )
                      }
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#0B1221]" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-[#0B1221] w-6"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full bg-[#F0F8FF]">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="w-full h-[1px] bg-gray-200" />
            </div>
          </div>

          {/* Data Analytics Section */}
          <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left - Text */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                    Data Analytics and Insights
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Use this paragraph section to get your website visitor to
                    know you. Consider writing about you or your organization,
                    the products or services you offer, or why you exist. Keep a
                    consistent communication style.
                  </p>
                  <button className="bg-white border border-gray-300 text-[#0B1221] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    Schedule a Demo
                  </button>
                </div>

                {/* Right - Illustration */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    <Image
                      src="/Assets/Images/gallery/laptops.webp"
                      alt="Data Analytics"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section - Bottom */}
          <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 4 */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/Assets/Images/gallery/B4.png"
                      alt="Logo"
                      width={140}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#0B1221] font-medium mb-3 text-center">
                    "Team collaboration has never been smoother"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Testimonials, as authentic endorsements from satisfied
                    customers, serve as potent social proof, significantly
                    inspiring trust in potential consumers.
                  </p>
                </div>

                {/* Testimonial 5 */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/Assets/Images/gallery/B5.png"
                      alt="Logo"
                      width={140}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#0B1221] font-medium mb-3 text-center">
                    "CloudSprout's analytics boosted our efficiency"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Testimonials, as authentic endorsements from satisfied
                    customers, serve as potent social proof, significantly
                    inspiring trust in potential consumers.
                  </p>
                </div>

                {/* Testimonial 6 */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/Assets/Images/gallery/B6.png"
                      alt="Logo"
                      width={140}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#0B1221] font-medium mb-3 text-center">
                    "CloudSprout scaled our operations effortlessly"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Testimonials, as authentic endorsements from satisfied
                    customers, serve as potent social proof, significantly
                    inspiring trust in potential consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEW SECTION: Collaboration and Productivity Tools */}
          <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left - Text */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                    Collaboration and Productivity Tools
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Use a clear and attention-grabbing short paragraph to engage
                    your audience and draw them into reading the rest of your
                    content.
                  </p>
                  <button className="bg-white border border-gray-300 text-[#0B1221] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    Schedule a Demo
                  </button>
                </div>

                {/* Right - Gallery Carousel */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={galleryImages[currentSlide]}
                      alt="Collaboration and Productivity"
                      fill
                      className="object-cover transition-transform duration-500"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) =>
                            (prev - 1 + galleryImages.length) %
                            galleryImages.length,
                        )
                      }
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#0B1221]" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) => (prev + 1) % galleryImages.length,
                        )
                      }
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#0B1221]" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-[#0B1221] w-6"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
