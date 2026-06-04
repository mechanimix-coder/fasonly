import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Tasarım Yardımcıları"
        desc="Ücretsiz tasarım yardımcılarımıza kaydolarak enjeksiyon kalıplanmış parçaların tasarım öğeleri, malzemeleri ve yüzey işlemleri hakkında bilgi edinin."
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Design Cube */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative w-full h-56 md:h-64 bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/aerospace-machining/design-cube.jpg"
                    alt="Tasarım Küpü - Enjeksiyon kalıplama öğrenme aracı"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0B1221] mb-3">
                    Tasarım Küpü
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Enjeksiyon kalıplama sürecimiz hakkında öğrenmenin en iyi
                    yollarından biri, keşfetmek için gerçek bir plastik parçayı
                    elinizde bulundurmaktır. Bu nedenle, çok ince veya çok kalın
                    parça özelliklerini, kötü boss'ları, doğru ve yanlış
                    kaburgaları ve enjeksiyon kalıplama için parça tasarlarken
                    dikkat edilmesi gereken diğer hususları gösteren Tasarım
                    Küpü'nü oluşturduk.
                  </p>
                  <a
                    href="#"
                    className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                    Tasarım Küpü Alın ➔
                  </a>
                </div>
              </div>

              {/* Right Column - Material Selectors */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative w-full h-56 md:h-64 bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/aerospace-machining/material-selectors.jpg"
                    alt="Malzeme Seçiciler - Plastik ve metal malzemeler için hızlı referans kılavuzları"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0B1221] mb-3">
                    Malzeme Seçiciler
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Bu cep boyutundaki Malzeme Seçiciler, bir sonraki projeniz
                    için doğru plastik ve metal malzemeleri belirlemenize
                    yardımcı olacak hızlı referans kılavuzlarıdır. Parçanızın
                    uygulaması için en uygun malzeme ve sürece sahip olmanızı
                    sağlamak amacıyla özelliklere ilişkin spesifik ölçümleri
                    listeler.
                  </p>
                  <a
                    href="#"
                    className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                    Sac Metal Malzeme Seçici →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
