import GuideDownload from "@/component/landing/GuideDownload";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-36 bg-white">
      <ServicesHero
        title="Kaplama Kalıplama Hizmeti"
        desc="İki malzeme veya metal ek parçalarla kalıplanmış özel plastik parçalar alın."
        image="/Assets/Images/services/injection-molding/green-overmold-part.webp"
        firstButton={{ title: "Teklif Al", route: "/" }}
        secondButton={{ title: "Malzemeleri İncele", route: "/" }}
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
                    "Tasarım Kılavuzları",
                    "Kaplama Kalıplama Malzeme Yapışması",
                    "Kaplama Kalıplama Hakkında",
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
              {/* What is Over Molding? Section */}
              <div id="kaplama-kalıplama-hakkında" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                  Kaplama Kalıplama Nedir?
                </h2>
                <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Kaplama kalıplama sürecimiz, 15 gün kadar kısa sürede özel
                  prototipler ve talep üzerine üretim parçaları üretir. Maliyet
                  etkin takım sunan alüminyum kalıplar kullanıyoruz ve çeşitli
                  termoplastik ve sıvı silikon kauçuk malzemelerden parçalar
                  üretiyoruz.
                </p>

                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Kaplama kalıplama için yaygın uygulamalar:
                </h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "düşük hacimli üretim",
                    "köprü takımı",
                    "pilot çalışmalar",
                    "fonksiyonel prototipleme ve test",
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

      <GuideDownload
        title="Enjeksiyon Kalıplama Kesin Kılavuzu"
        desc="Bu tam referans kılavuzu, teklif alma, tasarım analizi ve sevkiyattan, modelinizin kalıplama için optimize edildiğini garanti eden en iyi uygulamalara kadar her şeyde size yol gösterir."
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kaplama Kalıplama Tasarım Kılavuzları
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Kaplama kalıplama için temel kılavuzlarımız, parça
              üretilebilirliğini iyileştirmeye, kozmetik görünümü geliştirmeye
              ve genel üretim süresini azaltmaya yardımcı olacak önemli tasarım
              hususlarını içerir.
            </p>
          </div>

          {/* Capabilities Table */}
          <div className="overflow-x-auto mb-8">
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
                {/* Maximum Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Maksimum Parça Boyutu
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    18,9 inç x 29,6 inç x 8 inç
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    480mm x 751,8mm x 203,2mm
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
                  <td className="p-4 text-gray-600 bg-white">
                    175 inç kare (plastik)
                    <div className="text-sm text-gray-400 mt-1">
                      48 inç kare (silikon kauçuk)
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    112.903 mm kare (plastik)
                    <div className="text-sm text-gray-400 mt-1">
                      30.958 mm kare (silikon kauçuk)
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Notes */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-[#0B1221] mb-3">Ek Notlar</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  Kaplama malzemesi olarak silikon kullanılıyorsa yükseklik
                  sınırlanabilir ve daha derin parçalar daha küçük bir çevre ile
                  sınırlıdır.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  Minimum parça hacmi 0,025 inç küp (40,98 mm küp)'tür.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  Alt tabaka kalıpları ile, +/- 0,003 inç (0,08mm) işleme
                  toleransını koruyabiliriz ve buna dahil olan reçine toleransı
                  0,002 inç/inç'ten (0,002mm/mm) büyük ancak daha az
                  olmayabilir.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2"></div>
                <span className="text-gray-600 text-sm">
                  Termoplastik kaplamalı kalıplarda toleranslar alt tabaka
                  kalıplarıyla aynı kalır, ancak kaplama LSR ise toleranslar
                  0,025 inç/inç'e (0,025mm) kayar.
                </span>
              </li>
            </ul>
          </div>

          {/* Link */}
          <div className="text-center">
            <a
              href="#"
              className="text-[#0099ff] hover:text-[#96E92A] transition-colors inline-flex items-center gap-2">
              Tam tasarım kılavuzlarımızı görüntüleyin →
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kaplama Kalıplama Malzeme Yapışması
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Kaplama kalıplanmış malzemeler arasında kimyasal yapışma
              mümkündür, ancak istenen yapışma mukavemetini elde etmek için
              malzeme uyumluluğu dikkate alınmalıdır. Yapışma uygulamanız için
              kritikse, yeterli bir mekanik bağlantının dahil edilmesi şiddetle
              tavsiye edilir. Bir alt kesim, mekanik bağlantıya iyi bir
              örnektir.
            </p>
          </div>

          {/* Material Bonding Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[180px]">
                    Alt Tabaka Malzemesi
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[160px]">
                    ABS/PC CYCOLOY C2950-111
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[140px]">
                    PC Lexan 940-701
                  </th>
                  <th className="text-left p-3 font-semibold border-r border-gray-700 min-w-[140px]">
                    PBT Valox 357-1001
                  </th>
                  <th className="text-left p-3 font-semibold min-w-[140px]">
                    PP Profax 6323
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    overmold: "TPU - Texin 983-000000",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                  {
                    overmold: "TPV - Santoprene 101-87",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "C",
                  },
                  {
                    overmold: "TPE - Santoprene 101-64",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "C",
                  },
                  {
                    overmold: "LSR - Elastosil 3003/30 A/B",
                    abs: "-",
                    pc: "-",
                    pbt: "M",
                    pp: "-",
                  },
                  {
                    overmold: "TPC - Hytrel 3078",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versaflex OM 1060X-1",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versafflex OM 6240-1",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versaflex OM 6258-1",
                    abs: "M",
                    pc: "M",
                    pbt: "M",
                    pp: "M",
                  },
                  {
                    overmold: "TPE-Versaflex OM 1040X-1",
                    abs: "C",
                    pc: "C",
                    pbt: "C",
                    pp: "M",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-3 font-semibold text-[#0B1221]">
                      {row.overmold}
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.abs === "C"
                            ? "text-[#96E92A]"
                            : row.abs === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.abs}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.pc === "C"
                            ? "text-[#96E92A]"
                            : row.pc === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.pc}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.pbt === "C"
                            ? "text-[#96E92A]"
                            : row.pbt === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.pbt}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-semibold">
                      <span
                        className={
                          row.pp === "C"
                            ? "text-[#96E92A]"
                            : row.pp === "M"
                              ? "text-[#0099ff]"
                              : "text-gray-400"
                        }>
                        {row.pp}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 p-4 bg-[#F0F8FF] rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#96E92A] rounded"></div>
              <span className="text-sm text-gray-600">
                C = kimyasal yapışma
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#0099ff] rounded"></div>
              <span className="text-sm text-gray-600">
                M = mekanik yapışma (önerilir)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <span className="text-sm text-gray-600">
                - = önerilmez / mevcut değil
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Kaplama Kalıplama Nedir?
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kaplama kalıplama ile alt tabaka parçalarının üretimi, içinden
                ısıtma veya soğutma hatları geçmeyen alüminyum bir kalıp içeren
                standart bir enjeksiyon kalıplama sürecidir. Çevrim süreleri
                biraz daha uzundur, bu da kalıpçılarımızın dolum basıncını,
                kozmetik sorunları ve parçaların temel kalitesini izlemesine
                olanak tanır.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alt tabaka parçalarının tüm çalıştırması kalıplandığında,
                kaplama takımı pres'e monte edilir. Alt tabaka parçaları elle
                kalıba yerleştirilir ve her parça bir termoplastik veya sıvı
                silikon kauçuk malzeme ile kaplanır.
              </p>
            </div>

            {/* Right Column - Image with Numbered Steps */}
            <div className="flex-1 relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/overmolding/overmolding-and-insert-molding-process-illustration-900x600.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              {/* Numbered indicators overlay - representing steps 1-9 */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="absolute top-2/3 left-1/2 w-6 h-6 bg-[#96E92A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
