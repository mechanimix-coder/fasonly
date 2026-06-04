import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Elektrikli (Araç) Geleceğe Doğru Hızlanma"
        desc="Otomobil üreticileri ve teknoloji firmaları elektrikli araç geliştirmeyi hızlandırırken otonom inovasyonun daha uzun bir yolculuğu var"
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Image at the top */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/ev-av-automotive-guide/tesla-s-570-x-308.jpg"
                alt="Tesla elektrikli araç - EV pazarının 2030'a kadar 5 trilyon dolara fırlaması bekleniyor"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Bazı analistlerin tahminine göre, EV pazarının 2030 yılına kadar 5
              trilyon dolara fırlaması bekleniyor. Bu büyümeye Tesla (gösterilen
              S modeli) gibi yeni şirketler ve GM ile Ford gibi köklü OEM'ler
              öncülük ediyor ve hızlı prototipleme ile düşük hacimli üretim
              sağlayabilen dijital üreticiler destek oluyor. Fotoğraf: Tesla.com
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* First paragraph block */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Bir elektrikli araç silahlanma yarışının içindeyiz - bir
                endüstri uzmanı bunu böyle adlandırıyor.
              </p>
              <p>
                Wedbush analisti Daniel Ives geçtiğimiz günlerde General Motors
                (GM) ve Ford'un sürekli olarak elektrikli araçlara (EV) yapılan
                yatırımlarla ilgili duyurularla birbirlerini geçmeye çalıştığını
                söyledi. "Detroit'te Ford ve GM arasında pazar ve zihin payı
                için rekabet eden bir EV silahlanma yarışı var." Ve bu
                silahlanma yarışı, Volkswagen gibi Avrupalı OEM ikonlarının
                elektrikli araçlara büyük yatırım yapmasıyla sınırlarımızın
                ötesine de uzanıyor.
              </p>
              <p>
                Geçen yıl EV'ler ABD araç satışlarının %2'sinden azını oluştursa
                da, otomobil üreticileri elektrikli bir gelecek için hazır. Bazı
                örnekler ister misiniz? EV yatırımları sadece 2020 ile 2021
                arasında %41 arttı ve 2021 ile 2025 arasında toplam 330 milyar
                dolar olacak. GM ve Volkswagen, 2020'den 2025'e kadar elektrikli
                ve otonom araçlara sırasıyla 35 milyar dolar ve 42 milyar dolar
                harcayacak. Jaguar 2025'e kadar sadece elektrikli araç satmayı
                planlıyor, Volvo ise 2030'a kadar. Ford, tüm Lincoln lüks
                serisinin 2030'a kadar elektrikli veya gaz-elektrik hibrit
                olacağını söyledi ve otomobil şirketi yakın zamanda EV'ye
                yaptığı yatırımı 2025'in sonuna kadar 22 milyar dolara iki
                katına çıkardı. GM, 2035'e kadar sadece elektrikli binek araç
                satmayı umuyor.
              </p>
              <p>
                Çevrimiçi araba alışveriş sitesi Edmunds, tüketicilerin
                önümüzdeki yıl pazara giren yeni modellerde bir sel göreceğini
                bildirdi: 2020'de 17 modelden 21 markadan 30 EV'ye yükseldi.
              </p>
              <p>
                Büyük otomobil üreticilerinin ötesinde, birçok girişim,
                teknoloji odaklı şirket de bu pazarın tüm segmentlerinde kilit
                oyunculardır: EV'ler, AV'ler, batarya teknolojisi, şarj
                altyapısı ve daha fazlası. Tesla, elbette, bu modern otomobil
                üreticilerinin öncüsüdür. Ancak ayrıca Rivian, Lordstown Motors
                ve Nuro da var. Ve otomobil üreticilerinin ötesinde, otomotiv
                teknolojisi girişimleri çoktur: AV'lerde kullanılan radar
                sensörlerini yapan GhostWave; AV'ler için sensörler geliştiren
                Neteera; EV Safe Charge; AV'ler için yazılım üreten Mighty AI;
                ve yüzlercesi daha. Birçok endüstri kaynağının iddia ettiği
                gibi, Henry Ford'un ilk üretim hattının 1913'te başlamasından bu
                yana motorcılıktaki en büyük devrimin ortasındayız.
              </p>
            </div>

            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mt-8 mb-4">
              Elektrik devrimini akılda tutarak, aşağıdakilere bir göz atacağız:
            </h3>

            {/* Bullet points */}
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  EV'lere geçiş ve elektrikli arabaların neden düşündüğümüzden
                  daha hızlı bir şekilde hakim olacağı
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  Şirketler kısa vadede karlılık olmadan gerekli büyük
                  geliştirme çalışmalarını sürdürmeye çalışırken bu segmentin şu
                  anda kendini içinde bulduğu mücadele
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  Teknoloji ve otomobil şirketlerinin birbirleriyle işbirliği
                  yapmasından ortaya çıkan inovasyon
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  Bu segmentin başarısı için çok önemli olacak batarya
                  teknolojisi ve gerekli, yeni EV altyapısı
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  EV trendinin endüstriyel ve ticari araçları nasıl etkilediği
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  Otonom araçların çeşitli seviyeleri ve AV inovasyonunun neden
                  daha fazla Ar-Ge zamanına ihtiyaç duyduğu.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              Bir EV Geleceği: Yatırım, Yüksek Viteste Geliştirme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/ford-f150-lightning-2-0-570-x-308.jpg"
                    alt="Ford F-150 Lightning elektrikli araç"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Ford F-150 Lightning, otomobil üreticisinin büyüyen elektrikli
                  araç serisi arasında yer alıyor. Ford yakın zamanda EV'ye
                  yaptığı yatırımı 2025'in sonuna kadar 22 milyar dolara iki
                  katına çıkardı. Fotoğraf: Ford.com
                </p>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  GM'nin tamamen elektrikli bir geleceğe yaptığı büyük yatırımda
                  dikkat çekici bir faktör sadece büyük dolar miktarı değil -
                  aynı zamanda zamanlamadır. GM, bir EV geleceğine doğru gaz
                  pedalına sıkıca basmış durumda.
                </p>
                <p>
                  "Bu yatırımları, hissedarlarımıza ve paydaşlarımıza değer
                  sağlayacak şekilde daha hızlı hareket edebilmek ve
                  büyüyebilmek için yapıyoruz," dedi geçtiğimiz günlerde GM
                  Başkanı ve CEO'su Mary Barra. "Kapsayıcı, tamamen elektrikli
                  bir geleceği takip etme stratejimiz, yapılacak doğru şey,
                  yapılması gerekli şey ve dünya dönüşürken işimizin büyümesi ve
                  uzun vadeli sürdürülebilirliği için kritik öneme sahiptir."
                </p>
                <p>
                  Aslında, küresel EV satışları 2020'de hızla ilerledi, pandemi
                  sırasında genel araba satışları beşte bir oranında düşmesine
                  rağmen %43 artarak toplam 3,2 milyona ulaştı.
                </p>
              </div>
            </div>

            {/* Row 2 - Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                2025 yılına kadar, küresel olarak satılan tüm yeni arabaların
                %20'sinin elektrikli olacağı tahmin ediliyor, yatırım bankası
                UBS'nin bir tahminine göre. Ve 2040 yılına kadar, küresel olarak
                satılan hemen hemen her yeni araba elektrikli olacak, UBS tahmin
                ediyor. EV pazar payının 2020'de sadece %2 olduğu düşünüldüğünde
                bu hızlı bir gelişme.
              </p>
              <p>
                Bu hızlanmanın nedeni? Mühendislerin öğrenme eğrisine teşekkür
                edin. BBC News: "Bir şeyi ne kadar çok yaparsak, onu yapmakta o
                kadar iyi oluruz ve yapımı o kadar ucuzlar." Bu nedenle
                bilgisayarlar, mutfak aletleri ve petrol ve gazla çalışan
                arabalar bu kadar uygun fiyatlı hale geldi.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-[#E8F4FD] rounded-xl p-8 text-center border-l-8 border-[#96E92A]">
              <p className="text-xl md:text-2xl text-[#0B1221] font-medium italic">
                "Bir şeyi ne kadar çok yaparsak, onu yapmakta o kadar iyi oluruz
                ve yapımı o kadar ucuzlar."
                <span className="block text-base text-gray-500 font-normal not-italic mt-3">
                  — BBC News
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              EV'ler İçin Bir Hız Tümseği mi? Şimdilik Kârsız Geliştirme
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                EV'ler, kısmen bu öğrenme eğrisi sayesinde geleceğe doğru hızla
                ilerliyor, ancak bu eğitim araştırma ve geliştirme gerektiriyor.
                Çok fazla. Otomobil üreticileri elektrikli araçlara yatırım
                yapıyor, ancak en azından şimdilik, EV'ler geleneksel araçların
                karlarını üretmeyecek, AlixPartners Danışmanlık'ın bir raporuna
                göre. "Şimdi değiştirdiğiniz işten daha az karlı bir işe yatırım
                yapmalısınız."
              </p>
              <p>
                Bu geliştirme harcaması, otomobil üreticileri daha yüksek
                hammadde maliyetleri ve küresel bir yarı iletken kıtlığı ile
                mücadele ederken de gerçekleşiyor.
              </p>
              <p>
                Ayrıca, Ar-Ge aşaması daha uzun sürebilir çünkü otomobil
                üreticileri bir anlamda sıfırdan başlıyor. Standart arabalarla,
                çoğu OEM mevcut bir hattan faaliyet gösteriyor, bu nedenle
                birçok bileşen zaten yerinde. Örneğin yeni bir model
                geliştirirken, temelde sadece birkaç yeni özellikle
                tasarımlarını geliştiriyorlar. Buna karşılık, elektrikli araçlar
                boş bir sayfayla başlıyor.
              </p>
              <p>
                Bu aşamada ihtiyaç duyulan Ar-Ge, inovasyon ve hızlı
                iterasyonlar yoluyla hızlandırılmış öğrenme eğrisi,{" "}
                <a
                  href="https://www.fasonly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  hızlı prototipleme
                </a>{" "}
                ve{" "}
                <a
                  href="https://www.lowvolumedesign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  düşük hacimli üretim
                </a>{" "}
                gibi faydalar sunan ve Ar-Ge'nin döngüsel geliştirme süreci için
                çok uygun olan dijital üreticiler aracılığıyla
                kolaylaştırılabilir. Dijital tedarikçiler, bağlantı elemanları,
                terminaller ve şarj girişlerinden sensörlere, kablosuz çözümlere
                ve güç dağıtım ünitelerine kadar geniş bir bileşen portföyü ile
                yardımcı olabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              Otomobil ve Teknoloji Şirketleri Bağlanıyor
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Image Right, Text Left */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Otomobil üreticileri EV'lere ve otonom araçlara (AV) geçiş
                  yaparken, teknoloji şirketleri artık bu segmentte daha büyük
                  roller oynuyor.{" "}
                  <span className="font-semibold text-[#0B1221]">
                    Yatırımcılar uzun zamandır elektrikli araç öncüsü Tesla'yı
                    bir teknoloji şirketi olarak görüyor
                  </span>
                  ve hisse senedi fiyatı, batarya maliyetleri, yazılım ve
                  elektrikli araçlarının karlılığındaki sürekli üstünlüğü
                  tarafından desteklenmektedir.
                </p>
                <p>
                  Büyük teknolojinin arabalardaki varlığına örnekler çoktur:
                  sesle etkinleştirilen navigasyon, canlı yayın medyası, baş
                  üstü ekranlar, arka kameralar, şerit ve park yardımı ve sürüş
                  deneyimimizi daha iyi ve daha güvenli hale getiren diğer
                  teknolojiler.
                </p>
                <p>
                  Otomobil üreticileri ayrıca teknoloji şirketleriyle ortaklık
                  kuruyor, bazı durumlarda sözleşmeli üretici rolünü üstleniyor.
                  2019'da Fiat Chrysler, Google'ın yan kuruluşu Waymo ile
                  62.000'e kadar kendi kendine giden, elektrikli hibrit minibüs
                  üretmek için ortaklık kurdu. Waymo ayrıca Fransa ve Japonya'da
                  bir robot-taksi filosu için Renault ve Nissan ile ortaklık
                  kurdu.
                </p>
                <p>
                  Yazılım devi Autodesk, GM ile tasarım inovasyonları konusunda
                  işbirliği yaptı ve diğer OEM'lerle tasarım simülasyonu, sanal
                  ve artırılmış gerçeklik araçları, araçlar için gelişmiş
                  yazılım sistemleri ve daha fazlası üzerinde yakın çalışıyor.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/ev-av-redo-570-308.jpg"
                    alt="Bağlantılı araç teknolojisi ve otomotiv teknolojisi entegrasyonu"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                Bu eğilimi her yerde görüyorsunuz - araba reklamlarında bile.
                Nissan için yakın tarihli bir reklam, "Sahip olduğunuz en
                heyecan verici teknoloji arabanızda" diye övünüyordu. Las
                Vegas'taki büyük, gösterişli yıllık CES ticaret fuarı bile,
                tipik olarak yeni tüketici elektroniği ve teknolojisindeki en
                son ürünlere ev sahipliği yapar, son yıllarda otomotiv
                endüstrisi tarafından domine edilmiştir.
              </p>
              <p>
                Teknoloji şirketlerinin otomotiv sektörüne getirdiğinin en iyi
                örneği, bağlantılı araba konseptidir. Bu muhtemelen oyun
                değiştiren bir inovasyon olacaktır. Yakın zamanda, Tesla
                modellerinden birinde frenlerle ilgili bazı sorunlar yaşıyordu.
                Buna göre Tesla, etkilenen tüm arabalara bir yazılım yükseltmesi
                - bir yazılım düzeltmesi - gönderdi ve sorun tam anlamıyla bir
                gecede çözüldü. Bunu, standart bir içten yanmalı motorlu
                arabanın geri çağrılmasının alacağı zaman ve parayla
                karşılaştırın: yüz binlerce araç sahibine e-posta ve normal
                posta bildirimleri, dünya çapındaki bayiliklere geri getirilen
                araçlar ve bu böyle devam eder.
              </p>
              <p>
                Bu tür devrim niteliğindeki teknoloji, ister EV'ler ve AV'ler
                için olsun, ister bataryalar ve şarj istasyonları gibi ilgili
                ürünler için olsun,{" "}
                <span className="font-semibold text-[#0B1221]">
                  dijital üretim
                </span>{" "}
                yardımıyla pazara hızlandırılmaktadır. Şirketler büyük otomotiv
                OEM'leri, teknoloji odaklı girişimler veya güvenilir 1. Kademe
                otomotiv tedarikçileri olsun, hepsi hızlı iterasyon, hızlı düşük
                hacimli üretim, kalite güvence sistemleri ve daha fazlasını
                sağlayan duyarlı, çevik üreticilerden destek bulmaktadır.
              </p>
            </div>

            {/* Brand Logos Strip */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 pt-6 border-t border-gray-200">
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                Tesla
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                RIVIAN
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70 lowercase">
                gm
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                CHEVROLET
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                KIA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              Altyapı İştahı
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/infrastructure-570-308.jpg"
                    alt="Elektrikli araçlar için EV şarj istasyonu altyapısı"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  EV'ler ve mobilite geleceği hakkındaki tüm konuşmalarda
                  kaybolan, EV'lerin yaygın olarak benimsenmesini
                  gerçekleştirmek için gereken altyapı hakkında çok ihtiyaç
                  duyulan bir tartışmadır. Konut araç şarj cihazları gereklidir.
                  Benzin istasyonları gibi ülke genelinde kapsamlı bir ticari
                  şarj istasyonları ağı gereklidir. Bu, Ford Motor Company'nin
                  ilk günlerinde, o zamanlar olduğu gibi, o ilk Model T'lerin
                  yollarda yuvarlanmaya devam etmesi için benzin ve servis
                  istasyonlarının gerekli olduğunu anlamasından farklı değildir.
                </p>
                <p>
                  Yine, dijital üreticiler, batarya paketleri, enerji
                  depolama/şarj istasyonları ve AV'ler için ışık
                  algılama/menzil/aydınlatma (LIDAR) kameralarının yanı sıra
                  contalar, keçeler ve ses sönümleme teknolojisi gibi daha
                  geleneksel otomotiv parçaları için gerekli bileşenleri tedarik
                  etmeye hazırdır. EV'lerin fiyatı bazı tüketiciler için bir
                  endişe kaynağı olduğu gibi, bataryalar ve bir şarjın menzil
                  mesafesi de zorluklardır.
                </p>
              </div>
            </div>

            {/* Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                "Maliyet hala bir faktör ve menzil endişesi kısmen eğitimle ele
                alınacaktır," dedi geçtiğimiz günlerde IHS Markit'te endüstri
                uzmanı Stephanie Brinley. "Bir tüketicinin elektrikli bir araca
                uyum sağlayamaması için hiçbir neden yok." Doğru, ancak hazır
                şarj istasyonları da mevcut olsaydı kesinlikle yardımcı olurdu.
              </p>
              <p>
                Sonuç olarak, bu altyapı ihtiyacı, bu segmentte fırsatlar gören
                yüzlerce girişim şirketini doğuruyor.
              </p>
              <p>
                Ek olarak, büyük OEM'lerin kendileri de bu işe dahil oluyor. GM
                yakın zamanda ABD'de iki yeni Ultium Cells LLC batarya tesisi
                (konumları açıklanmadı) duyurdu; buna ek olarak Ohio ve
                Tennessee'de halihazırda inşaatı devam eden iki tesis daha var.
                Volkswagen, 2030 yılına kadar açılacak olan Avrupa'da altı
                batarya yapımı "gigafabrika" ekliyor. Aslında, bu yeni EV
                pazarındaki tek gerçek farklılaştırıcılar bataryalar ve yazılım
                olabilir (önceki Tesla örneğine bakın).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              Emisyonsuz Bir Gelecek, Yeni Bir Otomotiv Manzarası
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/ev-infrastructure-future-570-308.jpg"
                    alt="Elektrikli araç şarjı - emisyonsuz gelecek"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nihayetinde, bu EV/AV eğilimi daha yeşil bir gelecek anlamına
                  geliyor. Belirtildiği gibi, GM'in Barra'sı yakın tarihli
                  LinkedIn makalesinde tamamen elektrikli bir geleceğin
                  "yapılacak doğru şey, yapılması gerekli şey" olduğunu
                  söylediğinde buna atıfta bulundu. Emisyonsuz araçlar, daha
                  temiz bir gezegen ve daha sürdürülebilir bir enerji kaynağı
                  anlamına gelir.
                </p>
                <p>
                  Petrol ve gaz endüstrisine ne olacak? Bunu görmek için
                  beklememiz gerekiyor. Şimdilik, geleneksel benzinli arabalar
                  hala hakim durumda. Unutmayın, EV'ler pazarın sadece %2'sine
                  sahip. Tesla'nın ünlü kurucusu Elon Musk bu durumu kabul
                  ediyor: Aslında diğer EV üreticilerine karşı değil, petrol ve
                  gaz endüstrisine karşı rekabet ediyor. Bu, patentlerini ve
                  diğer özel bilgilerini EV girişimlerine sunmasının
                  nedenlerinden biridir. EV pazar payında bir değişim yaratmak
                  için, endüstrinin fosil yakıtlardan uzaklaşması gerektiğine
                  inanıyor.
                </p>
              </div>
            </div>

            {/* Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Şüpheciler var. Bu raporda belirtildiği gibi, tamamen elektrikli
                bir geleceğe geçiş, tamamen yeni bir altyapı inşa etmeyi de
                içeren dev bir yıkımdır. Bazı uzmanlar, daha iyi yakıt ekonomisi
                ve elektrikli hibrit teknolojisinde daha fazla ilerlemenin
                endüstrinin geleceği için daha gerçekçi cevaplar olduğunu
                söyledi.
              </p>

              {/* Quote Block */}
              <div className="bg-[#E8F4FD] rounded-xl p-6 md:p-8 mt-6 border-l-8 border-[#96E92A]">
                <p className="text-lg md:text-xl text-[#0B1221] font-medium italic">
                  "İnsanlara ne istediklerini sorsaydım, daha hızlı atlar
                  isterlerdi."
                  <span className="block text-base text-gray-500 font-normal not-italic mt-3">
                    — Henry Ford
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
