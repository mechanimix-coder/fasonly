"use client";
import Hero from "@/component/landing/Hero";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import useLanding from "@/store/store";
import Blog from "@/component/landing/Blog";
import SectorsSection from "@/component/landing/Sectors"; // Import the new component

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Fetch data from store
  const { data, fetchLanding } = useLanding();

  useEffect(() => {
    fetchLanding();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Accordion data from API (faqs)
  const accordionItems =
    data?.faqs?.map((faq) => ({
      title: faq.question,
      content: faq.answer,
    })) || [];

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

      {/* Part 3 - Sectors Section - REPLACED WITH NEW COMPONENT */}
      <SectorsSection />

      {/* blog section */}
      <Blog />

      {/* Pro section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Video */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#0B1221] aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/Assets/Videos/manufacture-poster.jpg">
                  <source
                    src="/Assets/Videos/manufacture-like-a-pro.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Side - Badge, Title, Description, Button */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="text-[#0099ff] font-semibold text-sm tracking-wider uppercase bg-[#F0F8FF] px-4 py-1.5 rounded-full">
                  Profesyonel Gibi Üretin™
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-6 leading-tight">
                Profesyonel Gibi Üretin™
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Prototiplemeden seri üretime kadar tüm süreçleriniz için tek
                kaynağınız. Fasonly ile ürün geliştirmeyi hızlandırın ve her
                zamankinden daha hızlı pazara sunun. Seri üretime hazır
                olduğunuzda, projenizi maliyet, adet ve kalite etrafında
                optimize etmenize yardımcı olacak bir üretim uzmanları ekibiyle
                tam program yönetimi elde edin.
              </p>

              <button className="group inline-flex items-center gap-2 bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3">
                Daha Fazla Bilgi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support section */}
      <div className="w-full bg-[#F0F8FF] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Tasarım ve Mühendislik Desteği
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Hem otomatik hem de canlı üretim desteği sunuyoruz. Her teklifle
                birlikte, parça tasarımını hızla iyileştirmek için ücretsiz
                etkileşimli üretilebilirlik analizi (DFM) alırsınız. Ek
                sorularınız varsa, uygulama mühendislerimiz projeniz hakkında
                sizinle görüşmek için her zaman hazırdır.
              </p>
            </div>

            <div className="flex-1 text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl p-6 shadow-sm w-full lg:w-auto">
                <p className="text-gray-500 text-sm mb-3">Bize Ulaşın</p>
                <div className="space-y-2 mb-4">
                  <a
                    href="tel:0850 XXX XX XX"
                    className="text-[#0099ff] hover:text-[#0077cc] font-medium transition-colors block">
                    0850 XXX XX XX
                  </a>
                  <a
                    href="mailto:info@fasonly.com"
                    className="text-[#0099ff] hover:text-[#0077cc] font-medium transition-colors block">
                    info@fasonly.com
                  </a>
                </div>
                <button className="w-full group inline-flex items-center justify-center gap-2 bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300">
                  Bizimle İletişime Geçin
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Life Cycle section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Ürün Yaşam Döngünüz Boyunca Dijital Üretim
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Tam Ürün Yaşam Döngüsü
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bir günde prototip parçalara veya tam hizmet seri üretime
                ihtiyacınız olsun, her projede hız, kalite ve maliyet
                verimliliği için tüm ürün yaşam döngünüz boyunca bizimle
                ortaklık kurabilirsiniz.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <svg
                  className="w-8 h-8 text-[#0099ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Hızlı Prototipleme
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Herhangi bir fiili üretim başlamadan önce parça tasarımında
                ayarlamalar yapmak için anlık tekliflerimizdeki DFM geri
                bildirimlerinden yararlanın, ardından prototipleme sürecinde
                kolayca ilerleyin.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Devam Eden Üretim
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Projenizi maliyet, adet ve kalite etrafında optimize etmenize
                yardımcı olacak bir üretim uzmanları ekibiyle Fasonly'de tam
                program yönetimi bulacaksınız.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
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
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kısa Vadeli Üretim
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aparatlar, fikstürler ve endüstriyel bileşenler gibi kısa vadeli
                ihtiyaçlar veya ürün yaşam döngüsünün sonuna doğru envanter ve
                finansal maliyetleri yönetmek için üretim yeteneklerimizden
                yararlanın.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="group inline-flex items-center gap-2 bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3">
              Daha Fazla Bilgi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Industries we Serve */}
      <div className="w-full bg-[#F0F8FF] py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Başlıca Hizmet Verilen Sektörler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hedef sektörlerimizdeki Fortune 100 şirketlerinin %90'ından
              fazlasıyla çalışıyoruz.
            </p>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/aerospace.jpg"
                  alt="Havacılık ve Uzay"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Havacılık ve Uzay
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Erken prototiplemeden ateşleme testlerine ve fırlatmaya kadar
                  yüksek kaliteli bileşenler
                </p>
                <button className="flex items-center gap-2 text-[#0099ff] font-medium text-sm hover:gap-3 transition-all duration-300">
                  Daha Fazla
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

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/automotive.jpg"
                  alt="Otomotiv"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Otomotiv
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Geleneksel, elektrikli ve otonom araçlar için hızlı
                  prototipleme ve hızlandırılmış üretim
                </p>
                <button className="flex items-center gap-2 text-[#0099ff] font-medium text-sm hover:gap-3 transition-all duration-300">
                  Daha Fazla
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

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/electronics.jpg"
                  alt="Tüketici Elektroniği"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Tüketici Elektroniği
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Tüketici ve bilgisayar elektroniği parçalarının fonksiyonel
                  prototiplenmesi ve talep üzerine üretimi
                </p>
                <button className="flex items-center gap-2 text-[#0099ff] font-medium text-sm hover:gap-3 transition-all duration-300">
                  Daha Fazla
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

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/Industries/medical_industry.jpg"
                  alt="Medikal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Medikal
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Medikal cihazlar ve sağlık ürünlerinin hızlandırılmış
                  geliştirilmesi
                </p>
                <button className="flex items-center gap-2 text-[#0099ff] font-medium text-sm hover:gap-3 transition-all duration-300">
                  Daha Fazla
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
      </div>
    </div>
  );
}
