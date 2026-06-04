import ServicesHero from "@/component/landing/ServicesHero";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Yardım Merkezi"
        desc="Dijital teklif ve üretim analizi platformlarımıza yakından bakarak yeteneklerimizden nasıl yararlanacağınızı ve hız ile kaliteyi nasıl en üst düzeye çıkaracağınızı öğrenin."
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kaynaklar ve Destek
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 9 Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 - Pricing and Payment Options */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Fiyatlandırma ve Ödeme Seçenekleri
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Fiyatlandırma hakkında bilgi edinmek ister misiniz? Protolabs'ın
                standart bir fiyatlandırma yapısı olsa da, maliyet her hizmet
                hattı için ve bireysel projelere göre birkaç temel faktöre bağlı
                olarak değişir.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 2 - Lead Times */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Teslim Süreleri
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Protolabs, belirli hizmetler için standart teslim süreleri
                sunar. Proje zaman çizelgenizi planlamanıza yardımcı olması için
                her hizmet hattıyla ilişkili teslim sürelerini görüntüleyin.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 3 - ProDesk Quoting Platform */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                ProDesk Teklif Platformu
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                ProDesk, Protolabs'ın işbirlikçi çevrimiçi ortamıdır. Gelişmiş
                üretilebilirlik için tasarım analizi, sorunsuz gezinme ve
                gelişmiş yeteneklerle yapay zeka destekli teklif alma deneyimi
                yaşayın.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 4 - Basic Design Guidelines */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Temel Tasarım Kılavuzları
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Bazen tasarımlarınızın hızlı bir şekilde onaylanmasına ihtiyaç
                duyarsınız ve en iyi tavsiye temellere geri dönmektir.
                Toleranslar, min. ve maks. parça boyutları ve ek hususlar
                hakkında hızlı, ön bilgileri burada edinin.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 5 - Manufacturing Analysis */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Üretim Analizi
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Parçanızı üretim için onaylamadan önce, sistemlerimize hazır
                olduğunu bildiren anında geri bildirim almak yardımcı olur.
                Gelişmiş üretilebilirlik için tasarım (DFM) analizimiz size
                gönül rahatlığı sağlar.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 6 - FAQs */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">SSS</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                İşte müşterilerimizin sıkça sorduğu yaygın soruların yanıtları.
                Tüm hizmet hatlarımızda geniş bir konu yelpazesini kapsayarak
                ihtiyacınız olan bilgilere sahip olmanızı sağlarlar.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 7 - Sheet Metal Quoting */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Sac Metal Teklif Alma
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Dijital teklif platformumuz, ihtiyacınız olan üretilebilirlik
                için tasarım geri bildirimini almanızı sağlayarak doğru
                tekliflere ve mükemmel estetiğe sahip dayanıklı parçalara yol
                açar.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 8 - ABS Lustran Update & FAQ */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                ABS Lustran Güncellemesi ve SSS
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                30 Ekim 2024'te Ineos Styrolution, Addstyon, Ohio
                operasyonlarını kalıcı olarak kapatma niyetini duyurdu. Şu an
                itibarıyla, Lustran markalı ABS malzemelerinin üretiminin
                durdurulduğuna dair bildirim aldık.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>

            {/* Item 9 - Injection Molding Inspections */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Enjeksiyon Kalıplama Denetimleri
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Dijitalleştirilmiş süreçlerimiz, bilimsel kalıplamamız ve kalite
                önlemlerimiz hem tekrarlanabilirliği hem de kaliteyi sağlar.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Daha Fazla Bilgi →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
