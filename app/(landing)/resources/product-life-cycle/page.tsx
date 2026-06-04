import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Ürün Yaşam Döngünüz Boyunca Dijital Üretim"
        desc="Hızlı prototiplemeden son kullanım üretimine kadar - ve aradaki her şeyde tek kaynağınız siziz"
        simple
        firstButton={{ title: "Proje Başlat", route: "/" }}
        bg="/Assets/Images/resources/product-life-cycle/use_cases_hub_hero.jpg"
        text="white"
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/full_product_life_cycle.jpg"
                    alt="Baştan sona tam ürün yaşam döngüsü desteği"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Baştan Sona Tam Ürün Yaşam Döngüsü Desteği Alın
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  İster bir günde prototip parçalara ihtiyacınız olsun ister tam
                  hizmet üretime, her projede hız, kalite ve maliyet verimliliği
                  için tüm ürün yaşam döngünüz boyunca bizimle ortaklık
                  kurabilirsiniz. Üretim yolculuğunuz boyunca sizi destekleyecek
                  tek kaynak budur.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* Row 2 - Grid of 2 items with light blue background */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 - End-to-end Product Development */}
              <div className="bg-[#E8F4FD] rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Uçtan Uca Ürün Geliştirme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hızlı prototipleme ve düşük hacimli üretim hizmetlerimizle
                  parça tasarımını optimize edin ve döngüsel geliştirme boyunca
                  hızla ilerleyin. Hazır olduğunuzda, son kullanım parçaları
                  için tüm üretim ihtiyaçlarınızı karşılamak üzere uygulama
                  mühendisleri ekibimizle çalışın.
                </p>
              </div>

              {/* Item 2 - Supply Chain Diversification */}
              <div className="bg-[#E8F4FD] rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Tedarik Zinciri Çeşitlendirmesi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hat duruşu durumlarında veya planlanmamış aksaklıklarda
                  başvurabileceğiniz tedarik zincirinize bir üretim emniyet ağı
                  oluşturun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Hızlı Prototipleme ile Ürün Geliştirmeyi Hızlandırın
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Herhangi bir gerçek üretim başlamadan önce parça tasarımında
                  ayarlamalar yapmak için anlık tekliflerimizdeki
                  üretilebilirlik için tasarım (DFM) geri bildiriminden
                  yararlanın, ardından erken ve geç aşama prototipleme boyunca
                  kolayca hızlı bir şekilde ilerleyin.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Daha Fazla Bilgi →
                </a>
              </div>

              {/* Right Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/rapid_prototyping.jpg"
                    alt="Hızlı prototipleme ile ürün geliştirmeyi hızlandırın"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 - Grid of 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 - Early Prototyping */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Erken Prototipleme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Form, uyum ve işlevin döngüsel prototip testi için günler
                  içinde kaliteli parçaları elinize alın.
                </p>
              </div>

              {/* Item 2 - Late Prototyping */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3">
                  Geç Prototipleme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Üretim öncesinde tasarım riskini azaltmak için pilot
                  çalışmalar ve pazar testleri ile parça tasarımlarını
                  doğrulayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="w-full">
          <div className="relative flex justify-center w-full h-fit overflow-hidden">
            <Image
              src="/Assets/Images/resources/product-life-cycle/infographic_v2_def.jpg"
              alt="Üretim tesisi banner"
              width={1000}
              height={1500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/end_use_production.jpg"
                    alt="Son kullanım üretimine sorunsuz geçiş"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Son Kullanım Üretimine Sorunsuz Geçiş Yapın
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Protolabs'ta, projenizi maliyet, miktar ve kalite etrafında
                  optimize etmeye yardımcı olacak bir üretim uzmanları ekibiyle
                  tam program yönetimi bulacaksınız.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Daha Fazla Bilgi →
                </a>
              </div>
            </div>

            {/* Row 2 - Grid of 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1 - Low-Volume Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Düşük Hacimli Üretim
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kaliteli son kullanım parçalarını pazara hızlıca ulaştırmak
                  için üretimi artırın ve minimum sipariş miktarı ve düşük
                  toplam sahip olma maliyeti ile finansal riski azaltmak için
                  parti üretimini kullanın.
                </p>
              </div>

              {/* Item 2 - Mass Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Seri Üretim
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bütçenize uygun hacim fiyatlandırması ile 1 milyon+ parçaya
                  kadar sipariş miktarları.
                </p>
              </div>

              {/* Item 3 - On-Demand Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Talep Üzerine Üretim
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gerektiğinde hızlı teslim parçalar sipariş ederek tedarik
                  zincirinize çeviklik kazandırın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* Left Column - Text */}
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                  Kısa Vadeli Üretimden Yararlanın
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-5"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tezgahlar, fikstürler ve endüstriyel bileşenler gibi son
                  kullanım parçalarının acil kısa vadeli ihtiyaçları için veya
                  ürün yaşam döngüsünün sonuna doğru envanter seviyelerini ve
                  finansal maliyetleri yönetmek için üretim yeteneklerimizden de
                  yararlanabilirsiniz.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Daha Fazla Bilgi →
                </a>
              </div>

              {/* Right Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/product-life-cycle/short_term_production.jpg"
                    alt="Tezgahlar, fikstürler ve endüstriyel bileşenler için kısa vadeli üretimden yararlanın"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 - Grid of 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1 - Jigs & Fixtures */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Tezgahlar ve Fikstürler
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dayanıklı tezgahlar ve fikstürler ile parça montajını
                  kolaylaştırın ve üretim maliyetlerini düşürmeye yardımcı olun.
                </p>
              </div>

              {/* Item 2 - End-of-Life Production */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Ömür Sonu Üretimi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tam zamanında düşük hacimli ürün parçaları sipariş ederek ürün
                  ömrü sonunda finansal riskinizi ve depolama maliyetlerinizi
                  azaltın.
                </p>
              </div>

              {/* Item 3 - Maintenance, Repair, and Operations (MRO) */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Bakım, Onarım ve Operasyonlar (MRO)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ekipmanın gecikmeden çalışmaya devam etmesi için MRO
                  uygulamaları için talep üzerine özel üretim parçaları sipariş
                  edin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
