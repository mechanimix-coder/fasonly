"use client";
import Hero from "@/component/landing/Hero";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Accordion data
  const accordionItems = [
    {
      title: "Ürün Yaşam Döngüsünün Tamamında Destek",
      content:
        "Fasonly olarak, ürününüzün tasarım aşamasından seri üretimine kadar tüm süreçlerde yanınızdayız. Mühendislik ekibimiz, her aşamada size teknik destek sağlar ve üretim sürecinizi optimize eder.",
    },
    {
      title: "Hızlı Prototipleme",
      content:
        "Prototip üretiminde hız ve kaliteyi bir arada sunuyoruz. 3D baskı, CNC işleme ve diğer üretim yöntemlerini kullanarak, tasarımlarınızı hızlıca test edebilmeniz için prototipler üretiyoruz.",
    },
    {
      title: "Sürekli Üretim Desteği",
      content:
        "Seri üretim aşamasında da yanınızdayız. Üretim süreçlerinizi sürekli izler, kalite kontrolü yapar ve gerektiğinde süreç iyileştirmeleri öneririz.",
    },
    {
      title: "Kısa Süreli ve Esnek Üretim",
      content:
        "Düşük adetli üretimlerden büyük serilere kadar, esnek üretim kapasitemizle ihtiyaçlarınıza en uygun çözümleri sunuyoruz. Kısa teslim süreleri ve yüksek kalite standardı ile hizmet veriyoruz.",
    },
  ];

  // 4 Step Cards Data
  const steps = [
    {
      title: "CAD Dosyanızı Yükleyin",
      description:
        "3D CAD dosyalarınızı sisteme güvenle yükleyin. Mühendislerimiz tasarımınızı inceleyerek en uygun maliyetli üretim teklifini hızla iletsin.",
      icon: "/Assets/Images/services/2.1.png",
    },
    {
      title: "Teklif ve Üretilebilirlik Analizi (DFM)",
      description:
        "Tasarımınız DFM (üretilebilirlik) kriterlerine göre analiz edilir. Onayınızla birlikte, en güncel teknolojilerle üretim planınız oluşturulur.",
      icon: "/Assets/Images/services/2.2.png",
    },
    {
      title: "Üretim Süreci Başlar",
      description:
        "Parçalarınız modern makine parkurunda yüksek hassasiyetle işlenir. Kalite kontrol süreçlerinin ardından özenle paketlenerek hazırlanır.",
      icon: "/Assets/Images/services/2.3.png",
    },
    {
      title: "Parçalarınız Sevkiyata Hazır!",
      description:
        "Kusursuz hale getirilen parçalarınız, hızlı sevkiyat seçenekleriyle adresinize teslim edilir. Projeniz tam zamanında kapanır!",
      icon: "/Assets/Images/services/2.4.png",
    },
  ];

  // Sectors Data
  const sectors = [
    {
      title: "Havacılık & Savunma",
      description:
        "Yüksek hassasiyet gerektiren bileşenler için hızlı prototipleme, test numuneleri ve düşük adetli özel üretim hizmetleri sunuyoruz. Fasonly, kritik uygulamalar için kalite ve tekrarlanabilirlik sağlar.",
      image: "/Assets/Images/sectors/1.png",
    },
    {
      title: "Otomotiv",
      description:
        "Elektrikli, hibrit veya konvansiyonel araç projeleri için hızlı üretim, prototip geliştirme ve özel parça imalatı. Tasarımdan üretime geçiş sürecinizi hızlandırır.",
      image: "/Assets/Images/sectors/2.png",
    },
    {
      title: "Tüketici Elektroniği",
      description:
        "Fonksiyonel prototiplerden nihai ürün bileşenlerine kadar, hızlı üretim ve DFM destekli tasarım iyileştirme hizmetleri sunuyoruz.",
      image: "/Assets/Images/sectors/3.png",
    },
    {
      title: "Medikal Teknolojiler",
      description:
        "Medikal cihazlar ve sağlık ekipmanları için hızlı prototipleme, hassas üretim ve düşük adetli özel parça çözümleri. Güvenlik ve kalite odaklı bir üretim yaklaşımı sunarız.",
      image: "/Assets/Images/sectors/4.png",
    },
  ];

  return (
    <div className="mt-10 pb-20 bg-white">
      <Hero />

      {/* Part 1 - 4 Steps */}
      <div className="w-full bg-[#F0F8FF] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group">
                <div className="flex justify-center mb-4 h-24">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={100}
                    height={100}
                    className="object-contain w-auto h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-200 mb-16" />

          {/* Part 2 - Design & Engineering Support with Accordion */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Content & Accordion */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Tasarım ve Mühendislik Desteği
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fasonly, üretim süreçlerinizi kolaylaştırmak için hem otomatik
                hem de uzman ekibimiz tarafından sağlanan canlı mühendislik
                desteği sunar.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Tasarımınızla ilgili ek sorularınız, optimizasyon ihtiyaçlarınız
                veya proje özelinde değerlendirme talepleriniz olduğunda,
                deneyimli mühendislerimiz sizinle birlikte süreci adım adım
                ilerletmek için her zaman hazırdır.
              </p>

              {/* Accordion */}
              <div className="space-y-2">
                {accordionItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between py-4 text-left hover:text-[#0099ff] transition-colors duration-200">
                      <span className="font-medium text-[#0B1221]">
                        {item.title}
                      </span>
                      {openAccordion === index ? (
                        <ChevronUp className="w-5 h-5 text-[#0099ff]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === index
                          ? "max-h-[200px] opacity-100 pb-4"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image with Button Overlay */}
            <div className="flex-1 relative">
              <div className="relative rounded-xl overflow-hidden h-full">
                <Image
                  src="/Assets/Images/Engineering.png"
                  alt="Mühendislik Desteği"
                  width={500}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 right-0 px-6">
                  <div className="w-fit p-3 bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-medium py-3 rounded-lg transition-colors duration-300">
                    Özel Projeleriniz İçin Destek Ekibimizle İletişime Geçin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3 - Sectors Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Hizmet Verilen Başlıca Sektörler
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Geniş üretim ağı ve hızlı teklif altyapısıyla birçok sektöre
              dijital üretim çözümleri sunar. Prototiplemeden seri üretime kadar
              tüm süreçlerde mühendislik destekli, güvenilir ve ölçeklenebilir
              üretim hizmetleri sağlarız.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="bg-[#F0F8FF] p-6 flex-1 flex flex-col">
                  <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {sector.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#0B1221] font-medium mt-4 hover:text-[#0099ff] transition-colors duration-300 group-hover:gap-3">
                    İncele
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
