// app/contact/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Headphones, Clock, MapPin, Plus, Minus } from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Fasonly hangi üretim hizmetlerini sunuyor?",
      answer:
        "CNC işleme, sac metal üretim, 3D baskı ve plastik enjeksiyon gibi çeşitli dijital üretim hizmetleri sunuyoruz. Prototipten seri üretime kadar tüm süreçlerde hizmet vermekteyiz.",
    },
    {
      question: "Hangi dosya formatlarını kabul ediyorsunuz?",
      answer:
        "STL, STEP, IGES, OBJ, 3MF ve diğer yaygın 3D CAD formatlarını kabul ediyoruz. Dosyanızı yüklemeden önce mühendislik ekibimiz uygunluğu kontrol eder.",
    },
    {
      question: "Üretim süresini etkileyen faktörler nelerdir?",
      answer:
        "Parça karmaşıklığı, seçilen üretim yöntemi, malzeme türü ve adet sayısı üretim süresini etkileyen başlıca faktörlerdir. Tüm projelerde size özel bir zaman çizelgesi sunarız.",
    },
    {
      question: "Üretim sürecinde teknik destek alabilir miyim?",
      answer:
        "Evet, üretim sürecinin her aşamasında teknik destek sağlıyoruz. Mühendislik ekibimiz, tasarımınızın üretilebilirliğini değerlendirir ve gerekli iyileştirmeleri önerir.",
    },
    {
      question: "Özel veya teknik sorularım için nasıl iletişime geçebilirim?",
      answer:
        "Teknik destek ekibimize e-posta veya telefon yoluyla ulaşabilirsiniz. Ayrıca web sitemizdeki canlı destek kanalı üzerinden de anında iletişime geçebilirsiniz.",
    },
    {
      question: "CAD dosyası yüklendikten sonra süreç nasıl ilerliyor?",
      answer:
        "CAD dosyanız yüklendikten sonra mühendislik ekibimiz tarafından incelenir, üretilebilirlik analizi yapılır ve size özel bir teklif hazırlanır. Onayınız sonrasında üretim süreci başlatılır.",
    },
    {
      question: "Teklif süreci ne kadar sürer?",
      answer:
        "Teklif süreci genellikle 24-48 saat içinde tamamlanır. Karmaşık parçalar için bu süre biraz daha uzayabilir. Her durumda size en kısa sürede geri dönüş sağlarız.",
    },
    {
      question: "Seri üretim taleplerini de karşılıyor musunuz?",
      answer:
        "Evet, prototip üretiminden seri üretime kadar tüm ölçeklerde hizmet veriyoruz. Projenizin büyüklüğüne göre en uygun üretim yöntemini belirleyerek çözüm sunuyoruz.",
    },
    {
      question: "Parçalarım sevkiyata nasıl hazırlanıyor?",
      answer:
        "Üretim tamamlandıktan sonra parçalarınız kalite kontrol sürecinden geçirilir, özenle paketlenir ve sevkiyata hazır hale getirilir. İsteğinize göre farklı teslimat seçenekleri sunuyoruz.",
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
              İletişim
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              Üretim süreçlerinizle ilgili sorularınız, proje talepleriniz veya
              teknik değerlendirme ihtiyaçlarınız için bizimle iletişime
              geçebilirsiniz.{" "}
              <span className="text-[#0099ff]">Doğru üretim</span> kararlarını
              birlikte planlamak için buradayız.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Light Blue Background */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Contact Info Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Fasonly İle İletişime Geçin
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tasarım dosyalarınızdan üretim ihtiyaçlarınıza kadar her konuda
              sizi dinliyor, en uygun üretim yaklaşımını birlikte belirliyoruz.
              Projeniz ister tek parça ister seri üretim olsun, mühendislik
              ekibimiz süreci en başından itibaren netleştirir.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 - Technical Support */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#0B1221] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                Teknik Destek & Proje İletişimi:
              </h3>
              <p className="text-gray-600 text-sm mb-1">support@fasonly.com</p>
              <p className="text-gray-600 text-sm mb-1">+90 (541) 773-1256</p>
              <p className="text-gray-500 text-xs">24/7 Destek</p>
            </div>

            {/* Card 2 - Working Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#0B1221] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#0B1221] font-bold text-lg mb-2">
                Çalışma Saatleri:
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                Pazartesi-Cuma: 8:00 - 17:00
              </p>
              <p className="text-gray-500 text-xs">Cumartesi-Pazar: Kapalı</p>
            </div>

            {/* Card 3 - Address */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#0B1221] rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#0B1221] font-bold text-lg mb-2">Adres:</h3>
              <p className="text-[#96E92A] text-sm font-medium">
                Baksan, 10000 Nilüfer/Bursa
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-300 mb-16" />

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row justify-between mb-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
                  Sıkça Sorulan Sorular
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-gray-600 text-sm md:text-base">
                  Dijital üretim sürecine başlamadan önce bilmeniz gereken temel
                  konular
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left hover:text-[#0099ff] transition-colors duration-200">
                    <span className="text-[#0B1221] font-medium text-sm">
                      {item.question}
                    </span>
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-[#0099ff] flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#0B1221] flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index
                        ? "max-h-[200px] opacity-100 pt-2"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Map Section */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.5!2d28.9!3d40.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5a5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sNil%C3%BCfer%2C%20Bursa%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Map Overlay - Fix for missing API key */}
            <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-[#0B1221]">Balkan</h4>
              <p className="text-sm text-gray-600">
                Balkan, Nilüfer/Bursa, Türkiye
              </p>
              <p className="text-sm text-gray-500">No reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
