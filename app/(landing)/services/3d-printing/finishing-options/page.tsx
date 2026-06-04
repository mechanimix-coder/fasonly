"use client";

import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="3D Baskı için İşlem Sonrası"
        desc="3D baskılı parçalar için standart yüzey işlemlerini ve ayrıca dayanıklılığı, yüzey kalitesini iyileştirmek ve renk eklemek için gelişmiş, özel bitirme yeteneklerini değerlendirin."
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
                    "Stereolitografi",
                    "Multi Jet Füzyon",
                    "Seçici Lazer Sinterleme",
                    "PolyJet",
                    "Carbon DLS",
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
              {/* Post-Processing Introduction Section */}
              <div id="islem-sonrasi-giris" className="scroll-mt-32">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Metal ve plastik 3D baskılı parçalar için çeşitli yüzey işlem
                  ve işlem sonrası seçenekleri sunuyoruz. Bu seçenekler,
                  yalnızca destek yapıları çıkarılmış baskı durumundan, son
                  derece estetik parçalar için özel bitirmeye kadar değişebilir.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Çeşitli işlem sonrası operasyonlar şunlar için kullanılabilir:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "Yüzey pürüzlülüğünü azaltmak",
                    "Özel renk eklemek",
                    "Şeffaflığı artırmak",
                    "Parça mukavemetini artırmak",
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
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Daha İyi Baskı Alın
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eklemeli üretimi enine boyuna bilen mühendislerin desteğiyle
                yüksek kaliteli 3D baskılı parçaları hızlıca alın. Altı 3D baskı
                teknolojisi ve 60'ın üzerinde malzeme ile yüksek performanslı,
                güvenilir parçalar üretin.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Daha Fazla Bilgi
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

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/services/3d-printing/quality/3dp_brand_campaign_01.jpg"
                alt="Daha İyi Baskı Alın"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Teknolojiye Göre Yüzey İşlem Seçenekleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Metals Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Metaller
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/M1.jpg"
                    alt="Metaller Standart İşlem"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                    Standart
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Malzeme ve çözünürlüğe bağlı olarak 200 ila 400 μin Ra
                    (0,005 ila 0,010mm Ra) pürüzlülük değerleri bekleyin. Destek
                    yapıları çıkarılır ve katman çizgileri görünür.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/M2.jpg"
                    alt="Metaller Özel İşlem"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                    Özel
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Metal 3D baskılı parçalar için özel bitirme, işlem sonrası
                    işleme, ısıl işlemler ve çeşitli tane boyutlarında birkaç
                    fırçalanmış yüzey kalitesini içerir.
                  </p>
                  <a
                    href="#"
                    className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors">
                    Özel bitirme seçeneklerinin tam listesini görüntüleyin →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Plastics - Stereolithography Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Plastikler - Stereolitografi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                {
                  title: "Bitmemiş",
                  desc: "Destek yapısı kalıntılarından parçanın alt kısmında noktalar veya dikenler belirgin kalır. Hızlı teslim süreleri gerektiğinde veya maliyet faktör olduğunda iyidir.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P1.jpg",
                },
                {
                  title: "Doğal",
                  desc: "Destekli yüzeyler, destek dikenlerini ortadan kaldırmak için zımparalanır.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P2.jpg",
                },
                {
                  title: "Standart",
                  desc: "Destekli yüzeyler zımparalanır ve tüm parça tutarlı bir görünüm için ince kumlanır. Katmanların hala mevcut olduğunu unutmayın.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P3.jpg",
                },
                {
                  title: "Özel",
                  desc: "Yumuşak dokunuşlu boya, şeffaf parça bitirme, boyama, maskeleme, renk eşleme, çıkartmalar/grafikler ve doku yüzeyleri mevcuttur.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/P4.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Özel" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        Özel seçenekleri görüntüle →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multi Jet Fusion Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Multi Jet Füzyon
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                {
                  title: "Baskı Durumu",
                  desc: "Parçalar gri renkte olacak ve standart işleme kıyasla dokuda biraz daha pürüzlü olacaktır.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ1.jpg",
                },
                {
                  title: "Standart",
                  desc: "Boncuk püskürtme tüm tozu temizler ve tutarlı bir genel doku bırakır. Parçalar daha sonra standart siyah renge boyanır.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ2.jpg",
                },
                {
                  title: "Buhar Düzeltme",
                  desc: "Yüzey pürüzlülüğünde 250+ μin RA'dan (baskı durumu) düzeltmeden sonra 64 – 100 μin RA'ya önemli azalma. PA12 Siyah ve PA12 %40 Cam Dolgulu Siyah için mevcuttur.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ3.jpg",
                },
                {
                  title: "Özel",
                  desc: "MJF parçaları için yaygın işlem sonrası seçenekleri arasında uygulanabilen bir astar ile kılavuz çekme ve ek parçalar bulunur.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/MJ4.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Özel" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        Özel seçenekleri görüntüle →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selective Laser Sintering Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Seçici Lazer Sinterleme
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: "Standart",
                  desc: "Parçalar gevşek tozu temizlemek ve pürüzsüz bir mat yüzey oluşturmak için boncuk püskürtülür.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/S1.jpg",
                },
                {
                  title: "Buhar Düzeltme",
                  desc: "Yüzey pürüzlülüğünde 250+ μin RA'dan (baskı durumu) düzeltmeden sonra 64 – 100 μin RA'ya önemli azalma. PA 11 Siyah, PA 12 Beyaz, PA 12 %40 Cam Dolgulu ve TPU 70-A'da mevcuttur.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/S2.jpg",
                },
                {
                  title: "Özel",
                  desc: "SLS parçaları için yaygın işlem sonrası seçenekleri arasında uygulanabilen bir astar ile kılavuz çekme ve ek parçalar bulunur.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/S3.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Özel" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        Özel seçenekleri görüntüle →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PolyJet Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              PolyJet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Standart",
                  desc: "Destek yapıları çıkarılır ve dikenleri gidermek için zımparalanır.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/PJ1.jpg",
                },
                {
                  title: "Özel",
                  desc: "Yaygın özel bitirme, şeffaflığı artırmak için dijital şeffaf malzeme üzerine şeffaf bir katmandır.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/PJ2.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.title === "Özel" && (
                      <a
                        href="#"
                        className="text-[#0099ff] text-sm font-medium hover:text-[#96E92A] transition-colors mt-2 inline-block">
                        Özel seçenekleri görüntüle →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carbon DLS Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Carbon DLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Doğal",
                  desc: "Estetik, yapı yönelimine bağlı olarak değişir. Dikenler düzleştirilir.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/C1.jpg",
                },
                {
                  title: "Standart",
                  desc: "Parçalar gevşek tozu temizlemek ve pürüzsüz bir mat yüzey oluşturmak için boncuk püskürtülür.",
                  img: "/Assets/Images/services/3d-printing/finishing-options/C2.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-[#0B1221] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Özel Bitirme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Tam spesifikasyonlarınızı karşılamak için özel bitirme seçenekleri
              mevcuttur.
            </p>
          </div>

          {/* Plastics Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Plastikler
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[180px]">
                      İşlem Tipi
                    </th>
                    <th className="text-left p-4 font-semibold">Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Şeffaf Kaplama",
                      desc: "Plastik parçalara şeffaf, parlak bir yüzey oluşturmak için uygulanır. Lensler ve diğer optik uygulamalar için idealdir.",
                    },
                    {
                      name: "Isıl Kürleme",
                      desc: "Accura 5530 ve PerForm'un mekanik özelliklerini geliştirir. Bu işlem parçaları daha kırılgan hale getirir.",
                    },
                    {
                      name: "Kaplama",
                      desc: "Elektrolizsiz nikel kaplama, plastik parçalara mukavemet ve dayanıklılık katar.",
                    },
                    {
                      name: "Boyama",
                      desc: "Parçalar herhangi bir Pantone numarasına uyacak şekilde boyanabilir. En iyi sonuçlar için, parçalar tipik olarak boya uygulanmadan önce zımparalanır ve parlatılır.",
                    },
                    {
                      name: "Boyama (Daldırma)",
                      desc: "Bir malzemenin doğal rengi istenmediğinde boyama düşük maliyetli bir seçenektir. Renk seçenekleri arasında siyah, yeşil, kırmızı, mavi ve sarı bulunur.",
                    },
                    {
                      name: "Doku",
                      desc: "Mold-Tech marka benzeri bir yüzeyi taklit etmek veya SLA parçalarının UV direncini iyileştirmek için bir sprey doku uygulayın.",
                    },
                    {
                      name: "Lazer Gravür",
                      desc: "Lazer gravür, ham 3D baskılı bir parçaya veya Cerakote veya boya ile kaplanmış bir parçaya uygulanabilir. Lazer gravür, her parça üzerinde net, tutarlı bilgi sağlar ve logolar, parça numaraları veya serileştirme için harikadır.",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 text-gray-700 font-medium text-sm align-top">
                        {item.name}
                      </td>
                      <td className="p-4 text-gray-600 text-sm align-top leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Metals Table */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
              Metaller
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0B1221] text-white">
                    <th className="text-left p-4 font-semibold border-r border-gray-700 min-w-[180px]">
                      İşlem Tipi
                    </th>
                    <th className="text-left p-4 font-semibold">Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "CNC İşleme",
                      desc: "İşlem sonrası işleme ile pürüzsüz yüzey kaliteleri, daha sıkı toleranslar veya diş açma elde edin.",
                    },
                    {
                      name: "Cerakote",
                      desc: "Cerakote, seçtiğiniz baskı sürecinden bağımsız olarak çok çeşitli baskılı parçalar için yüksek kaliteli, dayanıklı bir kaplamadır.",
                    },
                    {
                      name: "Isıl İşlem",
                      desc: "Metal eklemeli parçaların mekanik özelliklerini daha da geliştirmek için çeşitli ısıl işlemler mevcuttur. NADCAP sertifikası talep üzerine mevcuttur.",
                    },
                    {
                      name: "Sıcak İzostatik Presleme (HIP)",
                      desc: "Sıcak İzostatik Presleme (HIP)",
                    },
                    { name: "Tavlama", desc: "Tavlama" },
                    { name: "Yaşlandırma", desc: "Yaşlandırma" },
                    {
                      name: "Parlatma",
                      desc: "Fırçalanmış ve parlatılmış yüzey kaliteleri talep üzerine mevcuttur.",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 text-gray-700 font-medium text-sm align-top">
                        {item.name}
                      </td>
                      <td className="p-4 text-gray-600 text-sm align-top leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Özel Bitirmeli Parçalar Nasıl Sipariş Edilir
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#96E92A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                  1
                </div>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/step1.jpg"
                    alt="Adım 1: Özel İşlem Seçin"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Adım 1
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Teklif yapılandırmanızda, işlem açılır menüsünden "özel"
                  seçeneğini seçin. Buradan, ne tür bir işlem aradığınızı
                  tanımlamanız istenecektir.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#96E92A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                  2
                </div>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/step2.jpg"
                    alt="Adım 2: Mühendis İncelemesi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Adım 2
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Özel bitirme talebi ekleyerek, bu bir teklifin manuel
                  incelemesini tetikleyecek ve bir uygulama mühendisi, parça
                  gereksinimleriniz hakkında daha fazla bilgi edinmek ve
                  ilerleme yolu hakkında önerilerde bulunmak için sizinle
                  iletişime geçecektir.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#96E92A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                  3
                </div>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/Assets/Images/services/3d-printing/finishing-options/step3.jpg"
                    alt="Adım 3: Sipariş Verin"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Adım 3
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gerekli özel bitirmeyi içeren nihai bir teklife götürecek bir
                  bağlantı alacaksınız. Siparişinizi verin ve özel bitirilmiş
                  parçalarınızın gelmesini bekleyin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
