import React from "react";

export default function Footer() {
  // Certifications data
  const certifications = [
    { name: "ISO 9001", description: "Kalite Yönetim Sistemi" },
  ];

  return (
    <div className="bg-[#0B1221] w-full relative pt-16 pb-10 text-white font-sans min-h-[800px]">
      {/* 🔵 Blue Glare - Less bright, moved more down */}
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0099ff] blur-[100px] rounded-full pointer-events-none opacity-40" />

      {/* Container */}
      <div className="container mx-auto px-4 md:px-10 lg:px-40 relative z-10">
        {/* Top Section - Contact & Form */}
        <div className="relative flex flex-col lg:flex-row justify-between items-start mb-16 px-4">
          {/* Contact Text Section */}
          <div className="flex flex-col items-start max-w-full lg:max-w-[25rem] gap-3 pt-4 relative z-10 mb-8 lg:mb-0">
            <h1 className="font-bold text-3xl md:text-4xl leading-tight text-white">
              Diğer Sorularınız ve <br />
              Destek Talepleriniz!
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bizimle iletişime geçin, tasarımlarınız için en uygun üretim
              yöntemini ve maliyet avantajlarını birlikte keşfedelim.
            </p>
          </div>

          {/* Form */}
          <div className="relative lg:absolute bottom-0 right-0 w-full lg:w-[500px] p-6 lg:p-15 bg-gradient-to-b from-[#1a2a4a] to-[#0B1221] rounded-xl border border-white/10 shadow-2xl lg:ml-8">
            <form className="flex flex-col gap-4">
              {/* Name & Email Row */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                    Ad-Soyad
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-500/50 py-1 text-sm focus:outline-none focus:border-[#96E92A] transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-500/50 py-1 text-sm focus:outline-none focus:border-[#96E92A] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                  Mesajınız
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-500/50 py-1 text-sm resize-none focus:outline-none focus:border-[#96E92A] transition-colors"
                />
              </div>

              {/* Send Button */}
              <button className="w-full bg-[#96E92A] hover:bg-[#85d122] text-black font-medium py-2.5 rounded mt-2 transition-colors">
                Gönder
              </button>
            </form>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/10 mb-12" />

        {/* Call to Action */}
        <div className="flex flex-col items-center text-center mb-16 gap-4 relative z-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Üretim Süreçlerinizi <br />
            Fasonly ile Hızlandırmaya <br />
            <span className="text-[#0099ff]">Hazır mısınız?</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl">
            Projelerinizi bizimle paylaşın, CAD dosyasından sevkiyata kadar tüm
            süreci birlikte planlayalım.
          </p>
        </div>

        {/* Bottom Info Section */}
        <div className="relative z-10 flex flex-col md:flex-row bg-[#151E32] rounded-lg overflow-hidden max-w-4xl mx-auto shadow-xl border border-white/5">
          {/* Contact Block */}
          <div className="flex-1 p-6 flex flex-col items-center justify-center border-r-0 md:border-r border-white/10 border-b md:border-b-0 border-white/10">
            <h3 className="text-white font-bold text-lg mb-2">İletişim</h3>

            <span className="text-xs text-gray-400 text-center">
              e-posta: info@fasonly.com / tel: +90 541 773 1298
            </span>
          </div>

          {/* Address Block */}
          <div className="flex-1 p-6 flex flex-col items-center justify-center border-r-0 md:border-r border-white/10 border-b md:border-b-0 border-white/10">
            <h3 className="text-white font-bold text-lg mb-2">Adres</h3>
            <span className="text-xs text-[#96E92A] text-center">
              Baksan, 10000 Nilüfer/Bursa
            </span>
          </div>

          {/* Certifications Block - New */}
          <div className="flex-1 p-6 flex flex-col items-center justify-center">
            <h3 className="text-white font-bold text-lg mb-2">Sertifikalar</h3>
            <div className="flex flex-col items-center gap-1">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <span className="text-xs text-[#96E92A] font-medium">
                    {cert.name}
                  </span>
                  <span className="text-[10px] text-gray-400 block">
                    {cert.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
