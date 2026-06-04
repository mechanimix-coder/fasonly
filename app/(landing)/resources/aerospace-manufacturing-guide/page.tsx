import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Havacılık Parçaları Üretimi İçin Bir Kılavuz"
        desc="Havacılık ve savunmada hız, bileşen azaltma, çoklu üretim yöntemleri ve kalite güvencesi kullanarak ürün geliştirmeyi iyileştirmenin 4 yolu"
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              Havacılık ve savunma endüstrisi, jet motorları, uçaklar, roketler,
              uydular, drone'lar ve daha fazlası gibi karmaşık ve gelişmiş
              ürünler üretmesiyle bilinir - bunların hepsi yüksek düzeyde
              düzenlenmiş bir ortamda hızlı hareket eder. Bu hız, karmaşıklık ve
              politika uyumluluğu faktörlerinin üretim sürecinde kilit roller
              oynaması şaşırtıcı değildir. Bu tasarım ipucu, havacılık
              geliştirme döngülerinin aşağıdaki yollarla nasıl
              iyileştirileceğini araştırmaktadır:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  dijital üretim ile üretimi hızlandırma
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  parça tasarımında hafifletmeye yardımcı olan, genel montajdaki
                  öğeleri azaltan ve maliyetleri düşüren bileşenlerin
                  azaltılması
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  geliştirmeyi hızlandırabilen ve tasarımlarınıza değer
                  katabilen bir dizi üretim yöntemi ve malzemesi kullanma
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  kalite ve uyumluluk güvencelerini kolaylaştırma
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Pure Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              1. Ürün Geliştirmeyi Hızlandırmak için Dijital Üretimi Kullanın
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Protolabs'ta hızın önemini anlıyoruz. Havacılık ve savunma
              endüstrisindeki şirketlerle kapsamlı bir şekilde çalışarak, yıllar
              içinde aşağıdakileri içeren bir dizi metal ve plastik havacılık
              parçası ve ürününün geliştirilmesini hızlandırdık:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                "Isı eşanjörleri",
                "Manifoldlar",
                "Turbo pompalar",
                "Sıvı ve gaz akış bileşenleri",
                "Yakıt nozulları",
                "Konformal soğutma kanalları",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Metal havacılık parçaları, CFM International'ın LEAP uçak motoru
              için GE'nin eklemeli olarak ürettiği yakıt nozulu dahil olmak
              üzere çeşitli dijital üretim yöntemleriyle üretilmiştir.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Başarımızın itici güçlerinden biri, deneyim ve dijital üretim
              araçlarının titiz geliştirilmesidir. Havacılık taleplerini
              karşılamak için otonom dijital araçlar ve uygulamalı uygulama
              mühendisleri ile çalışmanın doğru karışımını bulduk.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Birçok üreticiyle dijital üretim sürecine başlarken, bir CAD
              dosyasını birden fazla çevrimiçi teklif aracına yüklemek kolay
              olabilir. Ne yazık ki, bazı üreticilerin çevrimiçi teklif
              araçları, tüm arka uç gereksinimlerini dikkate almaz veya bir
              üreticinin tüm süreçlerini sunmaz. Burada, parça veya proje için
              gereken her adımın ilk teklife yansıtılması için açık sözlü olmayı
              tercih ediyoruz.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Çevrimiçi dijital araçları kullanırken, teklif yazılımı geliştirme
              ve üretim döngülerini büyük ölçüde hızlandırabilir. Ancak, bu
              araçlardan en iyi şekilde yararlanmak için, aşağıdakileri içeren
              bir yazılım (ve üretici) ile çalıştığınızdan emin olun:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Yapının veya projenin tüm gereksinimlerini ve adımlarını
                  dikkate alır
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Mevcut tüm süreçleri ve malzemeleri sunar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Yıllarca üretim deneyimine sahip eğitimli ve deneyimli
                  personel sunar
                </span>
              </li>
            </ul>
          </div>

          {/* Row 2 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-fuelnosel.png"
                alt="CFM International LEAP uçak motoru için GE tarafından eklemeli olarak üretilen yakıt nozulu"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                Havacılık ve savunma endüstrisindeki büyük bir zorluk, zamanında
                teslimat ve kalitedir. Endüstri kaynakları, siparişlerin
                yaklaşık %80'inin genellikle zamanında teslim edildiğini
                söylüyor. Ancak, bu siparişler zamanında geldiğinde, parçaların
                yaklaşık %25'i gerekli kaliteyi karşılamıyor. Havacılık
                şirketlerinden gelen yaygın bir şikayet, tedarikçilerin daha
                ucuz bir fiyatla bir teslim süresi vaat etmesi ancak teklif
                edilen zaman çizelgesi içinde teslim edememesidir. Gecikmeler,
                kaçırılan son teslim tarihlerine ve daha pahalı tedarikçiyle
                başlamış olsalardı olacağından daha fazla düzeltme maliyetine
                yol açmıştır.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Çevrimiçi, etkileşimli teklif sistemimiz, CAD modelinizi anında
                tasarım analizi ve geri bildirimi ile bir teklife dönüştürür.
                Tasarımınız, süreçler, malzemeler, zaman ve maliyetin ideal
                dengesini belirlemek için yeniden çalışılabilir. Bu, her
                seferinde bir parçaya ihtiyaç duyulduğunda biriyle konuşmak
                gerekmediği için verimliliği büyük ölçüde artırır. Ancak bilgili
                bir kişinin sizin tarafınızda olması gerektiğinde, otomatik
                araçlarımızı desteklemeye hazır bir uygulama mühendisleri
                ekibimiz var. Müşteri olsun ya da olmasın tüm kişiler,
                süreçlerimiz için nasıl tasarım yapılacağını anlayan, maliyeti
                azaltan ve sayısız diğer teknik soruyu yanıtlayan duyarlı
                ekibimize ücretsiz erişim sağlar.
              </p>
            </div>
          </div>

          {/* Row 3 - Pure Text (empty for now, but structure is ready) */}
          <div className="max-w-4xl mx-auto">
            {/* Additional text can go here if needed */}
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              2. Ürün Tasarımına Fayda Sağlamak için Bileşenleri Azaltın
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Bir parça veya ürün tasarımındaki genel bileşenleri birkaç
              nedenden dolayı azaltmak isteyebilirsiniz.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              İlk olarak, havacılıkta hafifletme çok önemlidir. Şirketler,
              örneğin bir gram ağırlığın uçuşta taşınmasının kaç ons yakıt
              gerektirdiğini bilir, bu nedenle küçük azaltmalar büyük kazançlar
              sağlar. Malzeme seçimi ve bazen üretim yöntemi de bu hafifletme
              denkleminde rol oynar. Ancak parça sayısını azaltmak da yardımcı
              olur.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              İkinci olarak, maliyetleri düşürmek önemlidir. Plastikler ve
              metaller pahalı olabilir ve montaj süresi de öyle. Buna göre,
              tasarımlar bileşen veya parça sayısını azaltabilirse, bu
              malzemeleri ve montaj süresini azaltabilir.
            </p>

            {/* Image floated to the right with text wrapping */}
            <div className="float-right ml-6 mb-4 w-full md:w-80 lg:w-96">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-ge-exploded-part.png"
                  alt="Havacılık bileşenleri"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Bu hafifletme ve maliyet hususlarını akılda tutarak, havacılık
              bileşenleri için hangi malzemeler en iyi sonucu verir? Titanyum,
              işleme ve 3D baskı hizmetleriyle mevcut olan sıklıkla tercih
              edilen bir seçimdir. Bu hafif ve güçlü malzeme, mükemmel korozyon
              ve sıcaklık direnci sunar. Yüksek mukavemet-ağırlık oranına sahip
              alüminyum, yüksek yüklemeyi desteklemesi gereken gövdeler ve
              braketler için iyi bir adaydır. Alüminyum ayrıca hem işlenmiş hem
              de 3D baskılı parçalar için mevcuttur. 3D baskılı bir metal olan
              Inconel, roket motoru bileşenleri ve yüksek sıcaklık direnci
              gerektiren diğer uygulamalar için ideal bir nikel krom süper
              alaşımdır.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Paslanmaz çelik de sık kullanılan bir malzeme seçeneğidir.
              Örneğin, SS 17-4 PH, yüksek mukavemeti, iyi korozyon direnci ve
              600 derece F'ye kadar sıcaklıklarda iyi mekanik özellikleri
              nedeniyle havacılık endüstrisinde kullanılır. Titanyum gibi,
              işlenebilir veya 3D baskı ile üretilebilir. Sıvı silikon kauçuk da
              endüstride yaygın olarak kullanılmaktadır. Bu elastik florosilikon
              malzeme, özellikle yakıt ve yağ direncine yöneliktirken, optik
              silikon kauçuk iyi bir PC/PMMA alternatifidir. Havacılıkta yaygın
              uygulamalar arasında yumuşak dokunuşlu yüzeyler, contalar, keçeler
              ve O-ringler bulunur.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Son olarak, hafifletme ve maliyet düşürme konularının ötesinde,
              havacılık endüstrisi yüksek riskler ve ödüllerle benzersiz
              faydalar ve zorluklarla karşı karşıyadır. Şirketler, geliştirme
              döngüleri, prototipleme, sıcak ateş testi ve üretim ile
              ilgilenmektedir. Bu nedenle, bileşen azaltma parça ağırlığını ve
              montaj süresini azaltmaya yardımcı olabilirken, gerçek tasarruf,
              tedarik zinciri ve her parça için kağıt izi ile ilgili baş
              ağrılarının ve genel giderlerin azaltılmasındadır. Havacılıkta,
              nihai ürüne giren her bileşen, malzeme izlenebilirliği, şok ve
              titreşim testleri, titiz denetimler ve çok daha fazlası gibi
              arkasında muazzam miktarda doğrulama barındırır. Bu kadar
              düzenlenmiş bir endüstride, parçaları azaltmak, envanteri
              azaltarak, takip edilecek daha az belgeye sahip olarak ve tedarik
              zincirinizi kolaylaştırarak büyük değer sağlayabilir.
            </p>

            {/* Clear float to ensure proper layout after the image */}
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                3. Bir Dizi Üretim Yöntemi ve Malzemesi Kullanın
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full"></div>
            </div>

            {/* Two Columns Layout - Text on Left, Blue Section on Right */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column - All Text Content */}
              <div className="lg:w-2/3">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dahili bir işleme atölyeniz varsa ancak küçük bir alanda
                  birçok farklı üretim türüyle uğraşmak zorunda kalıyorsanız,
                  geliştirme çalışmaları için projeleri dış tedarikçilere vermiş
                  olabilirsiniz. Kalite ve hız konusundaki yüksek taleplerinizi
                  karşılayacak kapasiteye sahip doğru tedarikçiyi bulmak
                  önemlidir. Evrensel süreçler veya malzemeler olmadığını
                  biliyor olabilirsiniz ancak tekrarlamakta fayda var. En iyi
                  çözümleri bulmak ve rekabet avantajınızı korumak için
                  cephaneliğinizdeki tüm araçlara ihtiyacınız vardır. Bu
                  nedenle, bir dizi üretim süreci ve malzemesi sunabilen
                  şirketlerle çalışın. CNC işleme, sac metal imalatı, enjeksiyon
                  kalıplama ve altı farklı endüstriyel sınıf 3D baskı (eklemeli
                  üretim) yöntemi sunuyoruz. Ek olarak, hem prototipleme hem de
                  üretim için uygun yüzlerce ticari sınıf plastik, metal ve
                  elastomer arasından seçim yapabilirsiniz. Tam liste için
                  Malzeme Karşılaştırma Kılavuzumuza bakın.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3 mt-6">
                  Çıkarımlı Süreçler ve Malzemeler:
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CNC işleme yöntemleri, özellikle üç ve beş eksenli frezeleme,
                  günümüzde üretimde sıklıkla kullanılmaktadır. Havacılık
                  endüstrisi için yaygın malzemeler 6061-T6 alüminyum, 304, 316
                  ve 17-4PH paslanmaz çelik gibi sert metaller ve titanyumdur.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Yaygın olmayan şey, birçok atölyenin boyut ve geometrik
                  boyutlandırma ve toleranslandırma (GD&amp;T) yetenekleridir.
                  Müşterinin hangi toleransların gerekli olduğunu belirtmesi
                  yaygın olsa da, hangi boyut ve GD&amp;T'yi teslim
                  edebileceklerini belirten şirketleri arayın.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Havacılık müşterilerinin çoğu, otomatik işleme tesislerimizin
                  bile işleyebileceğinden daha gelişmiş olabilen karmaşık
                  parçalara sahiptir.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Bu sorunu çözmek için, daha büyük parçaları ve daha karmaşık
                  geometrileri barındırabilen yüksek gereksinimli veya hassas
                  işleme seçeneğimizi tanıttık. Bu seçenek, programlar son
                  kullanım üretimine doğru ilerledikçe daha karmaşık parçaları
                  tekrar tekrar ve güvenilir bir şekilde teslim ederek havacılık
                  müşterilerimize yardımcı olur. Ayrıca, bu yüksek gereksinimli
                  seçenek, hem bir CAD dosyasını hem de bir çizimi okuyabilir,
                  daha karmaşık özelliklere sahip daha büyük parçaları
                  barındırabilir, daha sıkı toleranslar sağlayabilir, ikincil
                  işlemler gerçekleştirebilir ve kalite raporlama seçenekleri
                  sunabilir.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Toleranslar, minimum ve maksimum parça boyutları ve diğer
                  tasarım kılavuzları dahil olmak üzere bu yüksek gereksinimli
                  veya hassas işleme seçenekleri hakkında detaylı bilgi için CNC
                  işleme sayfamızı ziyaret edin. Ayrıca, CNC frezeleme için
                  temel tasarım kılavuzları için web sitemizi ziyaret edin.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-3 mt-6">
                  Eklemeli Üretim - Süreçler ve Malzemeler:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Havacılık ve savunma parçalarının önemli bir kısmı metaldir.
                  Buna göre, metal 3D baskı veya eklemeli üretim söz konusu
                  olduğunda, en yaygın malzemeler Inconel 718, alüminyum alaşımı
                  AlSi10Mg, paslanmaz çelik (304 ve 17-4), titanyum ve kobalt
                  kromdur (CoCr). Yine, buradaki fark, mevcut malzeme ve
                  eklemeli üretim süreçleri olacaktır.
                </p>
              </div>

              {/* Right Column - Light Blue Section */}
              <div className="lg:w-1/3">
                <div className="bg-[#F0F8FF] rounded-2xl p-8 sticky top-32">
                  <h3 className="text-2xl font-bold text-[#0B1221] mb-6 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Uçuş Planınızı Hazırlama
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Havacılık ve savunma endüstrisi için ürün tasarımı ve
                    geliştirme hakkında daha fazla bilgi için bu sayfaları
                    ziyaret edin.
                  </p>
                  <ul className="space-y-4">
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          <span className="font-semibold">TREND RAPORU:</span>{" "}
                          Prototipleme ve Üretim için Havacılık Üretim
                          Yöntemleri
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          <span className="font-semibold">KILAVUZ:</span>{" "}
                          Eklemeli Üretim ile Parça Montajlarını Birleştirme
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Eklemeli ve Çıkarımlı Üretim Havacılık Geliştirmeyi
                          Nasıl Hızlandırıyor
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Havacılık Şirketleri Riski Nasıl Azaltır?
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          3D Baskı Havacılık Endüstrisinin Ayakta Kalmasına
                          Yardımcı Oluyor
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Lockheed Martin'in Büyük Ruhlu Küçük Drone'u
                        </span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="flex items-start gap-2 hover:gap-3 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-sm font-medium hover:text-[#0099ff] transition-colors">
                          Kalkışa Hazır
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Image and Caption */}
            <div className="flex-1">
              <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-md bg-gray-100 mb-4">
                <Image
                  src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-process-materials-deuce.png"
                  alt="GE Additive Concept Laser X-Line makinesinden büyük formatlı metal 3D baskılı parça"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                DMLS'nin sınırlı bir yapı alanı vardır. Ancak, büyük formatlı
                metal parçalar da sunuyoruz. 31,5 inç x 15,7 inç x 19,7 inç
                (800mm x 398mm x 500mm) kadar büyük üretim sınıfı metal parçalar
                üretebiliriz. Başlangıçta, havacılık endüstrisinde daha büyük
                karmaşık parçalara olan talebi daha iyi karşılamak için Inconel
                718'i kullanmaya odaklanıyoruz. GE Additive Concept Laser X-Line
                makinemizden yapılan bu büyük formatlı metal 3D baskı,
                şirketimizin çeşitli şirketlerden tedarik edilen makineler,
                ekipmanlar ve süreçleri kullanarak teknolojiye bağlı olmadığının
                bir örneğidir.
              </p>
            </div>

            {/* Right Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                DMLS, büyük, üretim sınıfı metal parçaları eklemeli olarak
                üretebilir (gösterildiği gibi). GE Additive Concept Laser X-Line
                makinemizden yapılan bu büyük formatlı metal 3D baskı,
                şirketimizin çeşitli şirketlerden tedarik edilen makineler,
                ekipmanlar ve süreçleri kullanarak teknolojiye bağlı olmadığının
                bir örneğidir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Birden fazla eklemeli süreç kullanıyoruz: stereolitografi,
                doğrudan metal lazer sinterleme (DMLS), seçici lazer sinterleme,
                Multi Jet Fusion, Carbon DLS ve PolyJet. DMLS'nin aşağıdakileri
                sunduğu için havacılık endüstrisinde arzu edilen bir süreç
                olduğu kanıtlanmıştır:
              </p>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">geniş malzeme yelpazesi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">artırılmış işlevsellik</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    karmaşıklığı ve organik tasarımları barındırma yeteneği
                  </span>
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Atıfta bulunulan üretim yöntemlerinin (çıkarımlı ve eklemeli)
                ötesinde, tasarımınız bu uygulamaları gerektiriyorsa, bir dizi
                ikincil veya yüzey işlem seçeneği de sunuyoruz:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                "İşlem sonrası işleme - 3D baskılı metal parçalar için",
                "Isıl işlem - 3D baskılı parçalar için HIP dahil",
                "Ek kaplama",
                "Anodizasyon",
                "Temel montaj",
                "Kromat kaplama",
                "Temizleme",
                "Elektrolizsiz nikel kaplama",
                "Parça işaretleme",
                "Pasivasyon",
                "Toz boya",
                "Pres geçme ve donanım",
                "İpek baskı",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Farklı süreçler veya ikincil işlemler için birkaç tedarikçiye
              ihtiyacınız varsa, birden fazla süreci olan tek bir tedarikçi
              kullanmanın daha önce bahsedilen faydalarını unutmayın. Zaman ve
              maliyetleri azaltmak için yerel bir tedarikçi olarak faaliyet
              gösterirken birçok süreç ve malzeme sunuyoruz.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Ek olarak, havacılık üretimi hakkındaki trend raporumuzda yakın
              zamanda belirttiğimiz gibi, havacılık ve savunma için en iyi
              çözümler genellikle birden fazla teknolojiyi birlikte kullanan
              hibrit bir yaklaşımı içerecektir. Geleneksel bir alet kutusu hem
              çekiç hem de pense içerdiği gibi, günümüzün gelişmiş üretim
              operasyonları da hem eklemeli hem de çıkarımlı üretim sistemlerini
              ve bilgi birikimini barındırır.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                4. Kalite ve Uyumluluk Güvencesine Güvenin
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Son olarak, havacılık ürün tasarımcıları ve geliştiricileri,
                hükümet ve güvenlik politikası ile uyumluluk konularını
                dikkatlice yönetmelidir. Bu kadar yüksek düzenlemeye tabi bir
                endüstride çalışırken, havacılık gereksinimlerine aşina
                tedarikçiler bulmak önemlidir. İzlenebilirlik, dokümantasyon,
                test ve ISO 9001 ortamında ABD/ITAR uyumlu sertifikalı parçalar,
                şirket içinde yapılması, test edilmesi veya doğrulanması gereken
                işlerin çoğunu azaltabilir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Yönetim organları, eklemeli üretim için standartlar üzerinde
                sürekli çalışmaktadır, bu nedenle geleneksel olmayan süreçler
                için tam olarak neyin gerekli olduğunu bulmak zor olabilir.
                Ancak, bitmiş parçalar için standartlar veya sertifikalar, nasıl
                üretildiğine bakılmaksızın uygulanır. Tedarikçilerin,
                ihtiyaçlarınıza bağlı olarak sertifikalı malzemelere, toz
                analizine, malzeme izlenebilirliğine ve daha fazlasına sahip
                olduğundan emin olmak isteyeceksiniz.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Size otomatik araçlar, dokümantasyon, test ve izlenebilirlik
                sağlamak için dijital üretim yöntemlerine zaten büyük yatırım
                yaptık, tümü uygulama mühendislerimiz tarafından desteklenmekte
                ve size kolaylaştırılmış ve verimli bir dijital bağlantı
                sunmaktadır. ISO 9001, AS9100 sertifikalı, ABD/ITAR uyumlu bir
                ortamda aşağıdaki kalite dokümantasyonu ve rapor seçeneklerini
                sunuyoruz:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Malzeme sertifikaları ve ısı parti numaraları",
                  "Uygunluk sertifikası (CoC)",
                  "İlk ürün denetimleri (FAI) - 3D baskılı parçalar için AS9102 FAI dahil",
                  "CMM, X-Ray veya CT tarama gibi çeşitli diğer denetim talepleri",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Sonuç olarak, en iyi çözümü bulmak ve projenizin tüm adımlarını
                dikkate almak için sizinle çalışacağız. Daha fazla bilgi
                isterseniz, uygulama mühendislerimizle{" "}
                <a
                  href="tel:+902641234567"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium">
                  +90 264 123 45 67
                </a>{" "}
                numaralı telefondan iletişime geçin,{" "}
                <a
                  href="mailto:info@fasonly.com"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors font-medium">
                  info@fasonly.com
                </a>{" "}
                adresinden e-posta gönderin veya 3B CAD modelinizi yükleyerek
                saatler içinde etkileşimli bir teklif almak için tasarımınıza
                bugün başlayın.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/aerospace-manufacturing-guide/pl-dt-oct-2020-570x308-quality-assurance.png"
                alt="Kalite ve Uyumluluk Güvencesi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
