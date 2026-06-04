"use client";
import Image from "next/image";
import { companyLogos } from "@/data";
import {
  ArrowRight,
  Layers,
  Wrench,
  ClipboardCheck,
  Quote,
  Download,
  Mail,
  MapPin,
  ChevronDown,
  Check,
  Play,
} from "lucide-react";
import Blog from "@/component/landing/Blog";
import Hint from "@/component/UI/Hint";
import Accordion from "@/component/landing/Accordion";
import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";

export default function InjectionMoldingPage() {
  const faqs = [
    {
      id: 1,
      title: "Enjeksiyon kalıplamanın maliyeti nedir?",
      content:
        "Enjeksiyon kalıplama maliyetleri, parça karmaşıklığı, malzeme seçimi, takım gereksinimleri ve üretim hacmi gibi çeşitli faktörlere bağlı olarak değişir. Özel proje ihtiyaçlarınıza göre uyarlanmış detaylı bir teklif için bizimle iletişime geçin.",
    },
    {
      id: 2,
      title: "Seri üretim kalıplama yapıyor musunuz?",
      content:
        "Evet, hem prototipleme hem de seri üretim kalıplama hizmetleri sunuyoruz. Talep üzerine üretim sürecimiz, bilimsel kalıplama, süreç içi CMM denetimleri ve tam kapsamlı ikincil operasyonlarla üretim ihtiyaçlarınızı karşılamak için tasarlanmıştır.",
    },
    {
      id: 3,
      title: "Kalıplanmış parçalar için toleranslarınız nedir?",
      content:
        "Kalıplanmış parçalar için standart toleranslarımız +/-0.003 inç artı reçine toleransıdır (in./in.). Daha sıkı tolerans gereksinimleri için lütfen mühendislik ekibimizle iletişime geçerek özel ihtiyaçlarınızı görüşün.",
    },
    {
      id: 4,
      title: "Enjeksiyon kalıplama için maksimum parça boyutu nedir?",
      content:
        "Maksimum parça boyutu, spesifik malzeme ve tasarım gereksinimlerine bağlıdır. Ekibimiz 3B CAD dosyanızı değerlendirebilir ve üretilebilirlik ile boyut sınırlamaları konusunda rehberlik sağlayabilir.",
    },
  ];

  return (
    <div className="w-full pt-10 bg-white">
      {/* hero here */}
      <ServicesHero
        title="Enjeksiyon Kalıplama
Hizmetleri"
        desc="Özel parçalar için enjeksiyon kalıplama hizmeti. Prototipler ve talep üzerine üretim parçaları için 1 gün kadar kısa sürede teklif alın."
        image="/Assets/Images/services/injection-molding/hero.png"
        firstButton={{ title: "Teklif Al", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
      />
      {/* Description Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              Daha fazla esneklik, daha tutarlı parçalar ve kalifikasyon
              sürecini kolaylaştırma. Prototiplemeden talebe dayalı üretime
              geçiş yaparak uygun fiyatlı, yüksek kaliteli parçalar elde edin.
              Tek seferlik kalıplama maliyetlerinden kurtulun.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Talebe dayalı üretim aracına geçtiğinizde kalıplama maliyeti
              ortadan kalkar. Ücretsiz tasarım danışmanlığı hizmeti veren tek
              bir tedarikçiyle çalışmak, size esneklik, daha tutarlı parçalar ve
              kalifikasyon sürecinde kolaylık sağlar.
            </p>
          </div>
        </div>
      </div>

      {/* Injection Molding Processes Section */}
      <div className="w-full bg-white pb-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Enjeksiyon Kalıplama Süreçleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Plastic Injection Molding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/1.webp"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Plastik Enjeksiyon Kalıplama
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Yüksek hassasiyetli plastik parça üretimi
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2 - Liquid Silicone Rubber */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/2.jpg"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Sıvı Silikon Kauçuk
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Esnek ve dayanıklı silikon parça üretimi
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 3 - Overmolding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/3.webp"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Kaplama Kalıplama
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Çok malzemeli entegre parça üretimi
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 4 - Insert Molding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/4.webp"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Gömme Parçalı Kalıplama
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Metal parçaların plastikle kaplanması
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Additional Capabilities for Injection Molding Orders */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Enjeksiyon Kalıplama Siparişleri için Ek Yetenekler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Family and Multi-Cavity Molding */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <Layers className="w-10 h-10 text-[#0099ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Aile ve Çok Gözlü Kalıplama
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tek bir kalıpta birden fazla parça veya farklı tasarımlar
                üreterek üretim verimliliğini artırın ve maliyetleri düşürün.
              </p>
            </div>

            {/* Card 2 - Secondary Operations */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <Wrench className="w-10 h-10 text-[#0099ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                İkincil Operasyonlar
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Montaj, kaynak, baskı ve daha fazlası dahil olmak üzere ek
                işlemlerle parçalarınızı son kullanıma hazır hale getirin.
              </p>
            </div>

            {/* Card 3 - Quality and Inspections */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <ClipboardCheck className="w-10 h-10 text-[#0099ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kalite ve Denetimler
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ISO 9001:2015 sertifikalı süreçlerle her parçanın
                spesifikasyonlarınıza uygun olduğundan emin olmak için kapsamlı
                kalite kontrol ve denetim hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Testimonial Section */}
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Quote className="w-8 h-8 text-[#0099ff]" />
            </div>
            <p className="text-xl md:text-2xl text-[#0B1221] leading-relaxed mb-6 italic">
              &quot;Edwards için zaman her zaman en önemli faktördü. Fasonly ile
              ortaklık kurmak bu çevikliği elde etmemizi sağladı ve sonuçta
              mümkün olan en iyi ürünü ortaya çıkardı. Onlar olmadan, başarı
              için gereken hıza ulaşabileceğimize inanmıyorum.&quot;
            </p>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto mb-4"></div>
            <p className="text-[#0B1221] font-semibold">
              — TIM HUMPHREY, ESKİ KIDEMLİ BAŞ ÜRÜN TASARIMCISI
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Injection Mold Tooling Options and Quality Reporting */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-6">
            Enjeksiyon Kalıp Takım Seçenekleri ve Kalite Raporlaması
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Ürün yaşam döngüsünde nerede olursanız olun ihtiyaçlarınızı
            karşılamak için iki benzersiz teklifimiz var. Prototip enjeksiyon
            kalıplama sürecimiz, ürün geliştirme döngülerini haftalarca - bazen
            aylarca - kısaltmanıza ve günler içinde enjeksiyon kalıplanmış
            parçalarla üretime geçiş yapmanıza yardımcı olur. Talep Üzerine
            Üretim sürecimiz, üretim ihtiyaçlarınızı karşılamak için
            tasarlanmıştır ve bilimsel kalıplama, GD&amp;T ile süreç içi CMM
            denetimleri ve parçalarınızın beklendiği gibi gelmesini ve
            performans göstermesini sağlamak için tam kapsamlı ikincil
            operasyonlarla parçaları hızlı bir şekilde kalifiye etmenize
            yardımcı olur.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Prototipleme
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Talep Üzerine Üretim
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Objective Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Amaç
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Tasarımımı Fasonly hızlarında doğrulamam gerekiyor. Üretim
                    öncesinde ekonomik olarak iterasyon yapma esnekliğine
                    ihtiyacım var.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Fasonly hızlarında talep üzerine üretim ihtiyaçlarım var.
                  </td>
                </tr>

                {/* Best When Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    En Uygun Olduğu Durum
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        Tasarım veya malzeme iterasyonlarını tamamlama ve
                        maliyet veya üretilebilirlik ödünleşimlerini
                        değerlendirme
                      </li>
                      <li>
                        Temel odak noktası tasarım riskini azaltmak, Ar-Ge
                        verimliliğini artırmak ve pazara çıkış süresini
                        kısaltmak için daha hızlı iterasyon yapmaktır
                      </li>
                      <li>Tipik Miktarlar &lt;2.000</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        Tasarım sonuçlandırılmıştır ve çalışmadan çalışmaya
                        parça tutarlılığı kritiktir
                      </li>
                      <li>
                        Temel odak noktası kaliteyi iyileştirmek, maliyeti
                        azaltmak ve tedarik zinciri riskini hafifletmektir
                      </li>
                      <li>
                        Süreç geliştirme, kalifikasyon dokümantasyonu ve kalıp
                        yetenek bilgisi gereklidir
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* Mold Cavities Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Kalıp Gözleri
                  </td>
                  <td className="p-4 text-gray-600 bg-white">Tek</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Tek ve çok gözlü
                  </td>
                </tr>

                {/* Mold Life Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Kalıp Ömrü
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Sınırlı (en az 2.000 atış için garanti edilir)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">Sınırsız</td>
                </tr>

                {/* Mold Storage Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Kalıp Saklama
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    18 ay hareketsizlik durumunda saklanır
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    3 yıl hareketsizlik durumunda saklanır
                  </td>
                </tr>

                {/* Mold Ownership Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Kalıp Sahipliği
                  </td>
                  <td className="p-4 text-gray-600 bg-white">Talep üzerine</td>
                  <td className="p-4 text-gray-600 bg-gray-50">Evet</td>
                </tr>

                {/* Quality Documentation Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Kalite Dokümantasyonu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Bilimsel kalıplama süreç geliştirme raporu</li>
                      <li>
                        9 GD&amp;T sembolü dahil olmak üzere kritik boyutların
                        süreç içi CMM denetimi
                      </li>
                      <li>
                        Kalite İçin Kritik (CTQ) - önemli en fazla beş kritik
                        özellik veya boyutu belirleyin
                      </li>
                      <li>
                        CTQ Kısmi FAI: 3 parçalı boyutlu ilk ürün denetimi
                      </li>
                      <li>
                        CTQ Yetenek Çalışması ile DIR: 30 parçalı boyutlu
                        yetenek çalışması
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Kalite Denetim Raporu (QIR), Fasonly'nin üretim süreç
                    kontrollerini doğrular
                  </td>
                </tr>

                {/* Shared Features Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Ortak Özellikler
                  </td>
                  <td colSpan={2} className="p-4 text-gray-600 bg-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <span className="text-sm">✓ Alüminyum kalıplar</span>
                      <span className="text-sm">
                        ✓ 7 gün kadar kısa standart teslim süreleri
                      </span>
                      <span className="text-sm">
                        ✓ +/-0.003 inç artı reçine toleransı (in./in.)
                        toleranslar
                      </span>
                      <span className="text-sm">
                        ✓ Her çalıştırma için kurulum ücretleri uygulanır
                      </span>
                      <span className="text-sm">
                        ✓ Danışmanlık Tasarım Hizmetleri (CDS)
                      </span>
                      <span className="text-sm">✓ Yüzey İşlem Seçenekleri</span>
                      <span className="text-sm">
                        ✓ Minimum sipariş miktarı yok (MOQ)
                      </span>
                      <span className="text-sm">
                        ✓ 1 gün kadar kısa sürede hızlı gönderim
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Hint />
      {/* Section 4: Injection Molding Materials */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Materials List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Enjeksiyon Kalıplama Malzemeleri
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                100'den fazla termoplastik ve termoset malzeme seçeneğimiz
                bulunmaktadır. Alternatif malzeme seçenekleri arıyorsanız, ABS,
                PC, PP ve diğer yaygın kalıplanan plastikler için reçine
                alternatifleri rehberimize göz atın.
              </p>

              {/* Thermoplastics Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Termoplastikler
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                  {[
                    "ABS",
                    "Asetal",
                    "Asetal Kopolimer",
                    "Asetal Homopolimer/Delrin",
                    "ETPU",
                    "HDPE",
                    "LCP",
                    "LDPE",
                    "LLDPE",
                    "Naylon",
                    "PBT",
                    "PC/ABS",
                    "PC/PBT",
                    "PEEK",
                    "PEI",
                    "PET",
                    "PETG",
                    "PMMA (Akrilik, Plexiglas)",
                    "Polikarbonat",
                    "Polipropilen",
                    "PPA",
                    "PPE/PS",
                    "PS",
                    "PSU",
                    "TPU",
                  ].map((material, idx) => (
                    <div key={idx} className="text-gray-600 text-sm py-1">
                      {material}
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermosets Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Termosetler
                </h3>
                <div className="grid grid-cols-1 gap-y-2">
                  {[
                    "Standart silikon (30, 40, 50, 60 ve 70 sertlik dereceleri)",
                    "Medikal sınıfı silikon",
                    "Optik sınıfı silikon",
                    "Florosilikon (yakıt ve yağa dayanıklı)",
                  ].map((material, idx) => (
                    <div key={idx} className="text-gray-600 text-sm py-1">
                      {material}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-6">
              <div className="relative w-full flex justify-center h-64 rounded-xl overflow-hidden">
                <Image
                  src={"/Assets/Images/services/injection-molding/parts/5.jpg"}
                  alt="Injection Molding Part"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <GuideDownload
        title="Enjeksiyon Kalıplama Kesin Kılavuzu"
        desc="Bu tam referans kılavuzu, teklif alma, tasarım analizi ve sevkiyattan, modelinizin kalıplama için optimize edildiğini garanti eden en iyi uygulamalara kadar her şeyde size yol gösterir."
      />

      {/* Section 6: Why Choose Us for Custom Injection Molding - Dark Blue Two Column */}
      <div className="w-full bg-[#0B1221] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Neden Özel Enjeksiyon Kalıplama İçin Bizi Tercih Etmelisiniz?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Eşsiz Teslim Süreleri</strong>{" "}
                  - Ürün geliştirme döngünüzü haftalarca - bazen aylarca -
                  azaltın ve günler içinde enjeksiyon kalıplanmış parçalarla
                  üretime geçin. Bazı enjeksiyon kalıplama siparişleri 1 gün
                  kadar kısa sürede gönderilebilir.
                </p>
                <p>
                  <strong className="text-white">
                    Üretilebilirlik İçin Tasarım Geri Bildirimi
                  </strong>{" "}
                  - Her teklif, gerçek zamanlı fiyatlandırma ve tasarım analizi
                  içerir. 3B CAD dosyanızı değerlendirir ve kalıplama sürecinde
                  zorluk çıkarabilecek işlenmesi zor alt kesimler ve yetersiz
                  çekme açıları gibi özellikleri belirlemenize yardımcı oluruz.
                </p>
                <p>
                  <strong className="text-white">
                    Minimum Sipariş Miktarı Yok (MOQ)
                  </strong>{" "}
                  - Talep üzerine parça tedarik etmek, MOQ olmadan, piyasa veya
                  talep değişkenliğini yönetmenize yardımcı olur ve köprü
                  üretimi, hat duruşu acil durumları, ömür sonu üretimi veya
                  ürün özelleştirme için uygun maliyetli bir kaynak sağlar.
                </p>
                <p>
                  <strong className="text-white">
                    Enjeksiyon Kalıplama Uzmanlığı
                  </strong>{" "}
                  - Projeniz boyunca sizinle birlikte çalışarak, yüzey işlem
                  seçenekleri ve denetim raporlaması dahil olmak üzere
                  prototiplemeden üretime hızlıca geçmenize yardımcı olacağız.
                </p>
              </div>
              <button className="mt-8 bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Örnek Teklif Dene
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              <Image
                src={"/Assets/Images/services/injection-molding/parts/5.jpg"}
                alt="Injection Molding"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Advantages of Injection Molding & Applications - Two Rows */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={"/Assets/Images/services/injection-molding/parts/1.webp"}
                alt="Injection Molding Advantage"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Enjeksiyon Kalıplamanın Avantajları
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enjeksiyon kalıplama, ölçekte yüksek kaliteli parçalar
                üretebilen bir plastik üretim sürecidir. Tipik olarak düşük ila
                yüksek hacimli üretim için kullanılır, ancak alüminyum
                takımlarımız prototip çalışmalarını da ekonomik hale
                getirebilir.
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Daha yüksek hacimlerde düşük maliyet",
                  "Olağanüstü parça estetiği ve yüzey kalitesi",
                  "Tekrarlanabilir",
                  "Karmaşık parçalar",
                  "Düşük hurda oranı",
                  "Geniş termoplastik ve termoset malzeme seçeneği",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2 - Image Right, Text Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Enjeksiyon Kalıplama Uygulamaları
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enjeksiyon kalıplama, tıp, tüketici ve otomotiv endüstrilerinde
                plastik parça üretimi için yaygın olarak kullanılır. Tipik
                parçalar şunları içerir:
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Muhafazalar",
                  "Braketler",
                  "Dişliler",
                  "Tek kullanımlık tıbbi parçalar",
                  "Elektrik konnektörleri",
                  "Şırıngalar",
                  "Kaplar",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={"/Assets/Images/services/injection-molding/parts/2.jpg"}
                alt="Injection Molding Applications"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: What is Injection Molding? - Video + FAQs Accordion */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Video Player Section */}
          <div className="mb-16">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              {/* Video thumbnail / player placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Enjeksiyon Kalıplama Nedir?
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Fasonly | Hızlandırılmış Üretim
                  </p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>
          </div>

          {/* FAQs Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
                Enjeksiyon Kalıplama SSS
              </h2>
            </div>

            <Accordion
              items={faqs}
              defaultOpenIndex={0}
              allowMultiple={false}
            />
          </div>
        </div>

        {/* blog section */}
        <Blog />
      </div>
    </div>
  );
}
