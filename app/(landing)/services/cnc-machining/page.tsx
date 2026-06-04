"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Hint from "@/component/UI/Hint";
import MetalsSection from "@/component/landing/MetalsSection";
import FactoryVsNetwork from "@/component/landing/FactoryVsNetwork";
import GuideDownload from "@/component/landing/GuideDownload";
import Accordion from "@/component/landing/Accordion";
import { companyLogos, metalsData, plasticMaterials, faqItems } from "@/data";
import ServicesHero from "@/component/landing/ServicesHero";

export default function CncMachining() {
  return (
    <div className="w-full pt-10 bg-white">
      <ServicesHero
        title="Çevrimiçi CNC İşleme Hizmeti"
        desc="İşlenmiş prototipler ve üretim parçaları 1 gün kadar kısa sürede. Bugün çevrimiçi teklif talep edin."
        image="/Assets/Images/services/injection-molding/cnc-hero.webp"
        firstButton={{ title: "Anında Teklif Al", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
      />

      {/* CNC Machining Capabilities Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            CNC İşleme Yetenekleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - CNC Milling */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⚙️</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Frezeleme
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  CNC frezeleme, katı plastik ve metal blokları nihai parçalara
                  kesmek için 3 eksenli frezeleme ve 5 eksenli endeksli
                  frezeleme süreçlerini kullanan bir çıkarımlı üretim sürecidir.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/capabilities/cnc-milling"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Yetenekler →
                  </Link>
                  <Link
                    href="/design-guidelines/cnc-milling"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Tasarım Kılavuzları →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 - CNC Turning */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔧</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Tornalama
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Canlı takım tezgahına sahip CNC tornalama, metal çubuk
                  stokundan silindirik özelliklere sahip parçaları işlemek için
                  torna ve freze yeteneklerini birleştirir.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/capabilities/cnc-turning"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Yetenekler →
                  </Link>
                  <Link
                    href="/design-guidelines/cnc-turning"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Tasarım Kılavuzları →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - Fasonly Network */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🌐</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Fasonly Network
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Üretim ağımız, daha sıkı toleranslar, hacim fiyatlandırması ve
                  anodizasyon seçenekleri gibi gelişmiş CNC işleme yetenekleri
                  sağlar.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/capabilities/network"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Yetenekler →
                  </Link>
                  <Link
                    href="/design-guidelines/network"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Tasarım Kılavuzları →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CNC Machining Services for End-Use Parts Section - Centered */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-4">
              Son Kullanım Parçaları için CNC İşleme Hizmetleri
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Genişletilmiş otomatik CNC frezeleme ile yüksek kaliteli işlenmiş
              parçaları daha hızlı alın - parçalar 4 gün kadar kısa sürede hazır
            </p>
            <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Teklif Al
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Metals section */}
      <MetalsSection title="Metaller" metals={metalsData} />
      {/* Plastics section */}
      <MetalsSection title="Plastikler" metals={plasticMaterials} />

      {/* More Machining Materials Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🔧</span>
              </div>
              {/* Uncomment below to add actual image */}
              {/* <Image
          src="/Assets/Images/more-machining-materials.jpg"
          alt="More Machining Materials"
          fill
          className="object-cover"
        /> */}
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                Ağ Üzerinden Daha Fazla İşleme Malzemesi Mevcut
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Aradığınız malzemeyi görmüyor musunuz? Fasonly Network
                aracılığıyla mevcut 24 yeni seçenek ekledik.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Malzemelere Göz At
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* tables section */}
      <FactoryVsNetwork />

      <Hint />

      {/* Surface Finish and Post-Processing Options Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Surface Finish Options */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Yüzey İşlem ve <br />
                İşlem Sonrası Seçenekleri
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fasonly, parça gereksinimlerinizi karşılamak için çeşitli CNC
                işleme yüzey işlem seçenekleri sunar. Daha gelişmiş kaplama ve
                plakalama seçenekleri de mevcuttur.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Yüzey İşlem Seçenekleri
              </h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Görünür takım izleriyle kırılmış kenarlar
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Hafif boncuk püskürtme ile kırılmış kenarlar
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Keskin kenarlar (takım izleri görünür)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Kaplama ve Plakalama Seçenekleri
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Anodizasyon
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Kromat kaplama
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Toz boya
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Çinko kaplama
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Nikel kaplama
                </li>
              </ul>
            </div>

            {/* Right Column - Image / Illustration */}
            <div className="relative w-full h-80 md:h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl block mb-4">🔧</span>
                <p className="text-gray-500 text-sm">Yüzey İşlem Gösterimi</p>
              </div>
              {/* Uncomment below to add actual image */}
              {/* <Image
          src="/Assets/Images/surface-finish.jpg"
          alt="Surface Finish Options"
          fill
          className="object-cover"
        /> */}
            </div>
          </div>

          {/* Learn More Link */}
          <div className="mt-10 text-left lg:text-left">
            <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
              CNC işleme için işlem sonrası seçenekler hakkında daha fazla bilgi
              edinin →
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Custom CNC Machining Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Neden Özel CNC İşleme İçin Bizi Tercih Etmelisiniz?
          </h2>

          {/* Features Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Fast and Reliable Delivery */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Hızlı ve Güvenilir Teslimat
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hızlı teslim parçalarla parça tasarımlarını hızla yineleyin ve
                ürün geliştirmeyi hızlandırın. Otomatik tasarım analizimiz,
                tasarımınız üretim katına gönderilmeden önce işlenmesi zor
                özellikleri tespit etmenize yardımcı olacak ve ürün geliştirme
                döngüsünde maliyetli yeniden işlemelerden kurtaracaktır.
              </p>
            </div>

            {/* Card 2 - Manufacturing Analysis and Online Quotes */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Üretim Analizi ve Çevrimiçi Teklifler
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                3B CAD dosyanızı teklif talep etmek için yüklediğinizde, parça
                geometrinizi analiz ederek yüksek, ince duvarlar veya diş
                açılamayan delikler gibi işlenmesi zor olabilecek özellikleri
                tanımlayacağız.
              </p>
            </div>

            {/* Card 3 - Domestic Production and Support */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Yerli Üretim ve Destek
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ITAR düzenlemelerine uyması gereken parçalar için, parçaları
                yurt dışına gönderme riskinden kaçınmak için güvenilir bir ABD
                üreticisiyle ortaklık kurun. Ayrıca, istediğiniz zaman bizi
                arayabilir veya e-posta gönderebilirsiniz, parça siparişi,
                tasarım geri bildirimi, malzeme önerileri konusunda yardımcı
                olacak ve sorularınızı yanıtlayacağız.
              </p>
            </div>

            {/* Card 4 - Infinite Capacity */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Sınırsız Kapasite
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Talep üzerine, sınırsız üretim kapasitesi sağlayan otomatik
                sürecimizi kullanarak kesinti süresini azaltın ve dahili işleme
                işlemleriniz üzerindeki baskıyı hafifletin.
              </p>
            </div>

            {/* Card 5 - Material Selection */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Malzeme Seçimi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Çeşitli parça uygulamaları ve endüstriler için uygun 30'dan
                fazla mühendislik sınıfı plastik ve metal malzeme stokluyoruz.
                Malzemeler ABS, polikarbonat, naylon ve PEEK gibi plastiklerden
                alüminyum, paslanmaz çelik, platin ve bakıra kadar uzanmaktadır.
              </p>
            </div>

            {/* Card 6 - Advanced Capabilities */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Gelişmiş Yetenekler
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Daha sıkı toleranslar, hacim indirimleri ve daha fazla malzeme
                seçeneği gibi genişletilmiş üretim yetenekleri sunan üretim
                ağımızı kullanarak uygun maliyetli fiyatlandırmadan yararlanın.
                Prototiplerden nihai ürünlere kadar uluslararası ve yerel
                tedarikçilerin bir karışımıyla esneklik kazanın. Ayrıca, daha
                pürüzsüz yüzeyler, fırçalanmış yüzeyler, siyah oksit ve özel
                talep seçeneği gibi ekstra yüzey işlemlerine erişin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-6 leading-tight">
                CNC İşleme Nedir ve Nasıl Çalışır?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CNC işleme, katı bir blok veya malzeme çubuğunu parçalara
                  dönüştürmek için parmak frezeler kullanan otomatik bir üretim
                  sürecidir. Parmak frezeler, bir 3B CAD modeline atıfta
                  bulunarak stok malzemeyi istenen geometriye indirgeyen yazılım
                  (G-kodu) tarafından kontrol edilir. Parçalar, otomasyon
                  seviyesi nedeniyle nispeten hızlı bir şekilde üretilebilir.
                </p>
                <p>
                  CNC frezeleme ve CNC tornalamayı içeren birçok CNC makinesi
                  türü vardır. CNC işleme, tek seferlik prototipler veya özel
                  bileşenler ile orta hacimli üretim miktarları için uygun bir
                  üretim sürecidir.
                </p>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-[#0099ff] font-semibold hover:text-[#96E92A] transition-colors group">
                CNC işleme kılavuzumuza göz atın
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    CNC İşleme Açıklaması
                  </p>
                  <p className="text-gray-300 text-sm mt-1">Videoyu izleyin</p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>
          </div>

          {/* Row 2 - Two Text Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4">
                CNC İşleme Nasıl Çalışır?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                CNC işleme, bir 3B CAD modelini, kesici takımları yönlendiren
                bir dizi bilgisayar talimatına (G-kodu) dönüştürerek çalışır.
                Makine, katı bir blok veya çubuktan hassas bir şekilde malzeme
                çıkararak istenen şekli oluşturur. Bu çıkarımlı üretim süreci
                yüksek hassasiyetli ve tekrarlanabilirdir, bu da onu karmaşık
                geometriler ve sıkı toleranslar için ideal hale getirir.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4">
                CNC Makinesi Türleri
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yaygın CNC makinesi türleri arasında, dönen kesici takımlar
                kullanarak sabit bir iş parçasından malzeme çıkaran CNC freze
                makineleri ve iş parçasını sabit bir kesici takıma karşı
                döndüren CNC torna tezgahları bulunur. Diğer türler arasında
                router'lar, plazma kesiciler ve EDM makineleri bulunur; bunların
                her biri farklı malzemeler ve uygulamalar için uygundur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload
        title="CNC İşleme Tasarım Kılavuzu"
        desc="Bu CNC işleme kılavuzunda, prototipleme ve üretim için verimli, üretilebilir metal ve plastik parçaların nasıl oluşturulacağını öğreneceksiniz."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Video Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Genel Bakışı İzleyin
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Anında CNC İşleme Teklifi Alın
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                İşlenmiş parçanızın 3B CAD dosyasını yükleyin ve saniyeler ila
                saatler içinde, talebinize özel üretim analizi ve teklif
                göndereceğiz. Otomatik fabrikada, teklifiniz içinde malzemeleri
                ve miktarları değiştirebilir, gerçek zamanlı fiyat
                güncellemelerini görebilir ve fare tıklamasıyla diş
                atayabilirsiniz. Teknik çizimleri kabul eden yarı otomatik iş
                akışında, yüklediğiniz genişletilmiş ihtiyaçlara özel bir teklif
                alacaksınız.
              </p>
              <button className="inline-flex items-center gap-2 text-[#0099ff] font-semibold hover:text-[#96E92A] transition-colors duration-300 group">
                Örnek Teklifi Görüntüleyin
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
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

          {/* Row 2 - Content Left, Video Right (Reverse, no button) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Otomatik CNC İşleme Atölyemizi Gezin
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Minnesota'daki 215.000 feet karelik CNC işleme tesisimizde,
                sektörün en iyi teslim sürelerini elde etmek için dijital olarak
                etkinleştirilmiş süreçlerden nasıl yararlandığımızı görmek için
                hızlı bir tur atın.
              </p>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Genel Bakışı İzleyin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faqs section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl w-full flex justify-center font-bold text-[#0B1221] mb-10">
            CNC İşleme SSS
          </h2>
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
