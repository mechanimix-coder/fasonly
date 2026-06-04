import GetAQuote from "@/component/landing/GetAQuote";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-20 pb-20 bg-white">
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Dişli Delik Kılavuzları
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                CNC işleme hizmetimiz, frezelenmiş ve tornalanmış parçalara
                kolayca dişli özellikler ekleme yeteneği sağlar. Otomatik
                fabrikamız için uygun olan parçalar için, dişler otomatik
                etkileşimli tekliflerimiz içinde belirtilir. Bir teklif
                döndürüldüğünde, 3B görüntü, her özellik için hangi diş
                tiplerinin mümkün olduğunu gösterecektir. Mümkün olduğunda
                farklı dişler veya dişsiz seçenekler, özellik bazında
                seçilebilir. Dişli bir 3B modeli keşfetmek için örnek bir
                teklifi görüntüleyin.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Parçanın eşleşen 3B CAD dosyasıyla birlikte yüklenmiş bir teknik
                çizimde diş açma gerektiren parçalar için, ekibimiz özellikleri
                inceleyecek ve yeteneklerimizle eşleşen gereksinimlerinize göre
                size bir teklif sunacaktır.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Frezelenmiş ve Tornalanmış Parçalar
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Otomatik fabrikamızda, işleme için sınırlı sayıda UNF, UNC ve
                metrik dişler ile bobin ve anahtar ek parça delik hazırlığı
                sunuyoruz (ancak otomatik fabrikamızda ek parçaları tedarik
                etmiyor veya monte etmiyoruz). Hem frezelenmiş hem de
                tornalanmış parçalarda, dişli delikler uygun çapta
                modellenmelidir, ancak diş açma seçenekleri frezelenmiş ve
                tornalanmış parçalar için farklılık gösterir. Otomatik dış
                dişler şu anda frezeleme için mevcut değildir. Dişler
                modellenmişse ve en az ½-13 (M12) veya daha büyükse, bilyalı ve
                düz uçlu freze çakıları kullanarak yaklaşık dış dişler işlemek
                mümkündür. Tornalanmış parçalardaki dişli delikler de mevcuttur
                ve eksenel çaplarda dış dişler sunulmaktadır. Nominal çapı
                modelleyin; dişleri modellemeyin.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Mevcut tüm seçeneklerimiz aşağıdaki kılavuzda listelenmiştir.
                Herhangi bir sorunuz veya sorunuz varsa, lütfen bir uygulama
                mühendisiyle şu adresten iletişime geçin:{" "}
                <a
                  href="mailto:customerservice@Fasonly.com"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  customerservice@Fasonly.com
                </a>{" "}
                veya 877-479-3680.
              </p>
            </div>

            {/* Right Column - THREADING CONSIDERATIONS */}
            <div className="flex-1">
              <div className="bg-[#F0F8FF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  DİŞ AÇMA HUSUSLARI
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Bir geçme deliği veya sürekli dış çapı parçanın her iki
                      tarafından diş açabiliriz. Deliğin derinliği veya dış
                      çapın uzunluğu takımlarımızın ulaşabileceğinden daha
                      derinse, özelliğin her iki ucunu da diş açmayı teklif
                      edeceğiz. Bu dişlerin sürekli olmayacağı varsayılmalıdır.
                      Daha fazla bilgi için maksimum erişim sekme bölümümüze
                      bakın.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Tüm dişler sağ elli olacaktır. Sol elli dişler ve tabloda
                      gösterilmeyen çap ve hatveler şu anda işleme
                      süreçlerimizle üretilememektedir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Bir parça üzerindeki diğer öğeler tarafından veya
                      fikstürümüz tarafından engellenen özelliklere diş
                      açamayabiliriz. Bir özelliğe diş açılamıyorsa, teklifte bu
                      özellik için diş seçeneği sunulmayacaktır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Dişli özellikler .STL formatında yüklenen parçalar için
                      mevcut değildir.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GetAQuote Component below both columns */}
          <div className="mt-12">
            <GetAQuote
              title="Son Kullanım Parçaları için CNC İşleme Hizmetleri"
              desc="Genişletilmiş otomatik CNC frezeleme ile yüksek kaliteli işlenmiş parçaları daha hızlı alın - parçalar 4 gün kadar kısa sürede hazır"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 - Standard Holes */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/StandardHoles.webp"
                  alt="Standart Delikler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Standart Delikler
                </h3>
                <p className="text-xs text-gray-400 mt-1">→</p>
              </div>
            </div>

            {/* Item 2 - Coil Inserts */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/CoilInserts.jpg"
                  alt="Bobin Ek Parçalar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Bobin Ek Parçalar
                </h3>
                <p className="text-xs text-gray-400 mt-1">→</p>
              </div>
            </div>

            {/* Item 3 - Key Inserts */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/KeyInserts.jpg"
                  alt="Anahtar Ek Parçalar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Anahtar Ek Parçalar
                </h3>
                <p className="text-xs text-gray-400 mt-1">→</p>
              </div>
            </div>

            {/* Item 4 - OD Threads */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/ODThreads.webp"
                  alt="Dış Çap Dişleri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Dış Çap Dişleri
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  * Yalnızca Tornalama
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              DİŞ AÇMA: MAKSİMUM ERİŞİM
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 6 Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-[#96E92A] rounded"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    deliğin seçilen tarafı →
                  </p>
                  <p className="text-xs text-gray-400">maks. erişim ↓</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Örnek 1
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu, bir taraftan diş açılmış bir geçme deliğinin kesit
                  görünümüdür. Bu durumda, delik derinliği takımın erişimini
                  aşmaktadır. Sonuç, seçilen tarafın karşısında diş açılmamış
                  bir bölümdür.
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-24 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[#96E92A]/40 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Örnek 2
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu, bir taraftan diş açılmış bir geçme deliğinin kesit
                  görünümüdür. Bu durumda, delik derinliği takımın erişimini
                  aşmamaktadır. Sonuç olarak dişler deliğin tüm uzunluğu boyunca
                  oluşturulacaktır.
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/4 w-8 h-full bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-0 right-1/4 w-8 h-full bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Örnek 3
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu, iki taraftan diş açılmış bir geçme deliğinin kesit
                  görünümüdür. Bu durumda, delik derinliği sadece bir taraftan
                  erişmek için çok uzundur. Ancak, her iki taraftan merkezin
                  ötesine erişilebilir. Bu deliğin her iki taraftan diş açılması
                  seçilirse, deliğin ortasında bir süreksizlik olacaktır. Bu,
                  bir cıvatanın yaklaşık olarak deliğin derinliğinin yarısına
                  kadar diş açılabileceği anlamına gelir.
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-40 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/4 w-8 h-1/2 bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute bottom-0 right-1/4 w-8 h-1/2 bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Örnek 4
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu, her iki taraftan diş açılmış bir geçme deliğinin kesit
                  görünümüdür. Bu, Örnek 3'e benzer, ancak delik daha uzundur ve
                  takım her iki taraftan da merkeze ulaşamaz. Bu durumda, delik
                  her iki taraftan maksimum erişime kadar diş açılacak ve ortada
                  diş açılmamış bir bölüm kalacaktır.
                </p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-5/6 bg-[#96E92A]/40 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-300 rounded"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    1/2 hatve + 0.010" ↓
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Örnek 5
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu, bir kör deliğin (tabanı olan / parçanın içinden geçmeyen
                  delik) kesit görünümüdür. Bu durumda, delik tam erişimden daha
                  azdır ve diş açma tabandan yaklaşık 0.010 inç uzakta
                  duracaktır. Delik takımın ulaşabileceğinden daha derinse,
                  dişler mümkün olduğunca derin kesilecektir.
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-5/6 bg-[#96E92A]/40 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-gray-300"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">nokta açısı</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Örnek 6
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bir tasarımcı, bir kör deliğin tabanına bir nokta ekleyebilir.
                  Çoğu durumda bu, bir kılavuz deliğin matkap ucuyla delinmesi
                  durumunda kalan noktayı temsil eder. Ayrıca tasarımlarına bir
                  işlev görebilir veya diş açma işlemi sırasında oluşan
                  talaşların düşmesi için bir alan sağlayabilir. Bu nokta modele
                  eklenirse, diş açma nokta açısının başlangıcının yaklaşık
                  0.010 inç üzerinde duracaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
