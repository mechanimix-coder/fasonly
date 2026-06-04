import Blog from "@/component/landing/Blog";
import GuideDownload from "@/component/landing/GuideDownload";
import Quote from "@/component/landing/Quote";
import ServicesHero from "@/component/landing/ServicesHero";
import Hint from "@/component/UI/Hint";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-36 bg-white">
      <ServicesHero
        title="Çevrimiçi CNC İşleme Hizmeti"
        desc="İşlenmiş prototipler ve üretim parçaları 1 gün kadar kısa sürede. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/injection-molding/yellow-plastic-part.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Jump to Section Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-[#0B1221] mb-4">
                  Bölüme Atla
                </h3>
                <div className="space-y-2">
                  {[
                    "Yetenekler",
                    "Malzemeler",
                    "Yüzey İşlemleri",
                    "Kalite Denetimleri",
                    "İşlem Sonrası Seçenekler",
                    "Plastik Enjeksiyon Kalıplama Hakkında",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block text-gray-500 hover:text-[#0099ff] transition-colors duration-200 text-sm py-1">
                      → {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3">
              {/* What is Plastic Injection Molding? Section */}
              <div
                id="plastik-enjeksiyon-kalıplama-hakkında"
                className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Plastik Enjeksiyon Kalıplama Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Enjeksiyon kalıplama, bir metal kalıp boşluğunun sıvı plastik
                  reçine ile doldurulmasından oluşan ve daha sonra soğuyarak
                  plastik bir parça oluşturan bir üretim sürecidir.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Düşük malzeme israfı ve parça başına düşük maliyet nedeniyle
                  çoğunlukla ölçekte plastik parçaların üretilmesi için
                  kullanılır. Medikal cihazlar, tüketici ürünleri ve otomotiv
                  gibi endüstriler için ideal bir üretim sürecidir.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Plastik enjeksiyon kalıplama sürecimiz, 1 gün kadar kısa
                  teslim süreleriyle özel prototipler ve son kullanım üretim
                  parçaları üretir. Maliyet etkin takım ve hızlandırılmış üretim
                  döngüleri sunan alüminyum kalıplar kullanıyoruz ve yaklaşık
                  200 farklı termoplastik reçine stokluyoruz.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Plastik enjeksiyon kalıplama için yaygın uygulamalar:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "düşük hacimli üretim",
                    "köprü takımı",
                    "pilot çalışmalar",
                    "fonksiyonel test ve prototipleme",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional sections can be added here with matching IDs for navigation */}
            </div>
          </div>
        </div>
      </div>
      <Quote
        text="HP'de bizim için gerçek son üretimde kullanacağımız malzemelerden parçaları bu kadar hızlı alabiliyor olmamız çok aydınlatıcı oldu."
        author="J.D. HANKINS"
        title="YENİ ÜRÜN TANITIM MÜHENDİSİ, HP"
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Plastik Kalıplama Yetenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Plastik enjeksiyon kalıplama için temel kılavuzlarımız, parça
              kalıplanabilirliğini iyileştirmeye, kozmetik görünümü geliştirmeye
              ve genel üretim süresini azaltmaya yardımcı olacak önemli tasarım
              hususlarını içerir.
            </p>
            <a
              href="#"
              className="inline-block text-[#0099ff] hover:text-[#96E92A] transition-colors mt-2">
              Daha fazla detay için tasarım kılavuzları sayfamızı görüntüleyin.
              →
            </a>
          </div>

          {/* Capabilities Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    ABD
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Metrik
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Boyut
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    18,9 inç x 29,6 inç x 8 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    480mm x 751mm x 203mm
                  </td>
                </tr>

                {/* Volume Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Hacim
                  </td>
                  <td className="p-4 text-gray-600 bg-white">59 inç küp</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    966.837 mm küp
                  </td>
                </tr>

                {/* Depth Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Derinlik
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Ayırma hattından 4 inç
                    <div className="text-sm text-gray-400 mt-1">
                      Ayırma hattı parçanın ortasından geçebiliyorsa 8 inç'e
                      kadar
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Ayırma hattından 101mm
                    <div className="text-sm text-gray-400 mt-1">
                      Ayırma hattı parçanın ortasından geçebiliyorsa 203,2mm'ye
                      kadar
                    </div>
                  </td>
                </tr>

                {/* Projected Mold Area Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Öngörülen Kalıp Alanı
                  </td>
                  <td className="p-4 text-gray-600 bg-white">175 inç kare</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    112.903 mm kare
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tolerances Info */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-[#0B1221]">Toleranslar:</span>{" "}
              Tipik olarak Fasonly, +/- 0,003 inç (0,08mm) işleme toleransını
              koruyabilir ve bu toleransa, +/- 0,002 inç/inç'ten (0,002mm/mm)
              büyük ancak daha az olmayan bir reçine toleransı dahildir.
            </p>
          </div>
        </div>
      </div>
      <Hint />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Tasarım Küpü Alın
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Enjeksiyon kalıplama hakkında daha fazla bilgi edinmek ister
                misiniz? Bir Tasarım Küpü almak için kaydolun. Bu fiziksel
                yardımcı, kalıplanmış parçalarda yaygın olarak bulunan
                özelliklerin nasıl doğru şekilde tasarlanacağını gösterir.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Tasarım Küpü Al
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <Image
                src={
                  "/Assets/Images/services/injection-molding/plastic-injection-molding/protolabs-educator-design-cube.jpg"
                }
                fill
                alt="design cube"
              />
            </div>
          </div>
        </div>
      </div>

      <GuideDownload
        title="Enjeksiyon Kalıplama Kesin Kılavuzu"
        desc="Bu tam referans kılavuzu, teklif alma, tasarım analizi ve sevkiyattan, modelinizin kalıplama için optimize edildiğini garanti eden en iyi uygulamalara kadar her şeyde size yol gösterir."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Termoplastik Malzemeler
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                100'den fazla termoplastik ve termoset malzeme seçeneğimiz
                bulunmaktadır. Alternatif malzeme seçenekleri arıyorsanız, ABS,
                PC, PP ve diğer yaygın kalıplanan plastikler için{" "}
                <a
                  href="#"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  reçine alternatifleri rehberimize
                </a>{" "}
                göz atın.
              </p>

              {/* Materials Grid - 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 mt-6">
                {[
                  "ABS",
                  "ABS/PC",
                  "Asetal",
                  "Asetal Homopolimer/Delrin",
                  "ETPU",
                  "HDPE",
                  "LCP",
                  "LDPE",
                  "LLDPE",
                  "Naylon",
                  "PBT",
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
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {material}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-auto min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <Image
                src={
                  "/Assets/Images/services/injection-molding/plastic-injection-molding/blue-injection-molding-thermoplastic-rendered-part.jpg"
                }
                fill
                alt="design cube"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden  flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/plastic-injection-molding/subq-it-injection-molded-part.jpg"
                  }
                  width={400}
                  height={800}
                  alt="design cube"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Malzeme Seçim Kılavuzu
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Enjeksiyon kalıplama projeniz için yüzlerce mühendislik sınıfı
                reçine arasından seçim yapın. Malzeme seçim kılavuzumuz, özel
                ihtiyaçlarınız için mükemmel malzemeyi bulmanıza yardımcı olmak
                üzere özellikleri, uygulamaları ve maliyet hususlarını
                karşılaştırmanıza olanak tanır.
              </p>

              {/* Material Categories */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F0F8FF] rounded-lg p-4">
                  <h3 className="font-bold text-[#0B1221] mb-2">
                    Termoplastikler
                  </h3>
                  <p className="text-sm text-gray-500">
                    ABS, PC, Naylon, PEEK ve daha fazlası
                  </p>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-4">
                  <h3 className="font-bold text-[#0B1221] mb-2">Termosetler</h3>
                  <p className="text-sm text-gray-500">
                    Silikon, Epoksi, Fenolik
                  </p>
                </div>
              </div>

              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Malzemeleri Keşfet
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Özel Kalıplanmış Parçalar için Kalite Denetimleri ve İşlem Sonrası
              Seçenekler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Uygulamanızın gereksinimlerine bağlı olarak, bir enjeksiyon
              kalıplama teklifi talep ederken aşağıdakiler arasından seçim
              yapabilirsiniz.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Quality Inspections */}
            <div className="bg-[#F0F8FF] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                Kalite Denetimleri
              </h3>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                talep üzerine üretim siparişleri için mevcuttur
              </p>
              <ul className="space-y-3">
                {[
                  "Üretilebilirlik İçin Tasarım Geri Bildirimi (DFM)",
                  "Bilimsel kalıplama süreç geliştirme raporu",
                  "Süreç içi CMM denetimi ve makine izleme",
                  "GD&T ile ilk ürün denetimi (FAI) ve süreç yetenek raporu",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Post-Processing */}
            <div className="bg-[#F0F8FF] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                İşlem Sonrası
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0B1221] mb-2">
                    Kalıp Dokulandırma (Mold Tech Yüzey İşlemleri)
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-700">Lazer Gravür</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1221] mb-2">
                    Dişli Ekleme Parçaları
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                      <span className="text-gray-700">Bileşen Montajı</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1221] mb-2">
                    Pad Baskı
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Video Player */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Videoyu İzle
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    Prototipleme vs Talep Üzerine Üretim
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Prototipleme mi Talep Üzerine Üretim mi?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kalıpların kendileri benzer olsa da, parça miktarları, ömür boyu
                bakım, kalite dokümantasyonu ve fiyatlandırma, hangi hizmet
                seçeneğinin seçildiğine bağlı olarak değişir. Doğru seçenek,
                proje ihtiyaçlarınıza bağlıdır.
              </p>
              <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Plastik Enjeksiyon Kalıplama Nasıl Çalışır?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Kalıplanmış parçalar için üretim süreci karmaşıktır.
                Parçalarınız kalıplanmadan önce bile, kapsamlı üretilebilirlik
                geri bildirimi ve danışmanlık tasarım hizmetleriyle size
                yardımcı olmak için oradayız, böylece reçine kalıba girmeden
                önce kalıp tasarımı tuzaklarından kaçınabilirsiniz. Oradan,
                üretim sürecimiz belgelenir ve bilimsel kalıplama kullanılarak
                optimize edilir, böylece her üretim çalışmasında tutarlı ve
                güvenilir bir şekilde yüksek kaliteli parçalar elde edersiniz.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Modellerde belirttiğiniz kalite için kritik (CTQ) boyutlar,
                hangi alanların parçalarınızın başarısı için en önemli olduğunu
                bilmemizi sağlar. Parçalar kalıplanmaya başladığında, süreç ve
                numuneler otomatik entegre CMM teknolojisi kullanılarak kalifiye
                edilir ve ek teslim süresi olmadan ayrıntılı bir FAI ve süreç
                yetenek çalışması oluşturulur.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Termoplastik enjeksiyon kalıplamamız, içinden ısıtma veya
                soğutma hatları geçmeyen alüminyum bir kalıp içeren standart bir
                süreçtir, bu da çevrim sürelerinin biraz daha uzun olduğu
                anlamına gelir. Bilimsel kalıplama sürecinin bir parçası olarak,
                kalıpçılarımız dolum hızını, tutma basıncını ve tutma süresini
                bağımsız olarak optimize eder ve izler ve periyodik olarak parça
                kalitesini ve estetiğini denetler. Kalıplama süreci sırasında,
                boyutsal doğruluğu sağlamak için otomatik bir entegre CMM
                kullanırız ve ayrıca ayrıntılı bir süreç yetenek çalışması ve
                FAI raporu oluştururuz.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Reçine peletleri bir hazneye yüklenir, burada eritilir,
                sıkıştırılır ve kalıbın kanal sistemine enjekte edilir. Sıcak
                reçine, kapaklardan kalıp boşluğuna püskürtülür ve parça
                kalıplanır. İtici pimler, parçanın bir yükleme haznesine düştüğü
                kalıptan çıkarılmasını kolaylaştırır. Çalıştırma
                tamamlandığında, parçalar (veya ilk numune çalıştırması)
                kutulanır ve kısa bir süre sonra gönderilir.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/plastic-injection-molding/plastic-injection-molding-process-illustration-570x308.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}
