"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  FileCheck,
  Heart,
  Globe,
  Zap,
  Clock,
  Star,
  ThumbsUp,
  RefreshCw,
  BarChart,
} from "lucide-react";

export default function QualityPolicy() {
  const principles = [
    {
      title: "Müşteri Odaklılık",
      description:
        "Müşteri beklentilerini anlamak ve aşmak, tüm faaliyetlerimizin merkezinde yer alır.",
      icon: Users,
      color: "#0099ff",
    },
    {
      title: "Sürekli İyileştirme",
      description:
        "Tüm süreçlerimizi düzenli olarak gözden geçirir ve iyileştirme fırsatlarını değerlendiririz.",
      icon: TrendingUp,
      color: "#96E92A",
    },
    {
      title: "Çalışan Katılımı",
      description:
        "Tüm çalışanlarımızı kalite hedeflerimize ulaşma sürecine aktif olarak dahil ederiz.",
      icon: Users,
      color: "#0099ff",
    },
    {
      title: "Süreç Yaklaşımı",
      description:
        "Faaliyetlerimizi birbirleriyle ilişkili süreçler olarak yönetir ve optimize ederiz.",
      icon: RefreshCw,
      color: "#96E92A",
    },
    {
      title: "Veriye Dayalı Kararlar",
      description:
        "Kararlarımızı veri analizine ve somut kanıtlara dayandırarak alırız.",
      icon: BarChart,
      color: "#0099ff",
    },
    {
      title: "Sürdürülebilirlik",
      description:
        "Çevreye duyarlı üretim anlayışıyla gelecek nesillere karşı sorumluluğumuzun bilincindeyiz.",
      icon: Globe,
      color: "#96E92A",
    },
  ];

  const objectives = [
    { value: "99.5%", label: "Zamanında Teslimat Oranı", icon: Clock },
    { value: "<1%", label: "Hata Oranı", icon: Target },
    { value: "100%", label: "Müşteri Memnuniyeti", icon: Heart },
    { value: "98%", label: "Tekrarlayan Müşteri Oranı", icon: ThumbsUp },
  ];

  const commitments = [
    {
      title: "Ürün Kalitesi",
      items: [
        "Tüm ürünlerimiz uluslararası kalite standartlarına uygun olarak üretilir",
        "Her parti için kapsamlı kalite kontrol ve test prosedürleri uygulanır",
        "İzlenebilirlik sistemi ile her parçanın üretim geçmişi takip edilir",
      ],
      icon: Award,
    },
    {
      title: "Teslimat Güvencesi",
      items: [
        "Belirtilen teslimat sürelerine %99,5 oranında uyum sağlanır",
        "Acil durumlar için hızlı teslimat seçenekleri sunulur",
        "Lojistik süreçler düzenli olarak izlenir ve iyileştirilir",
      ],
      icon: Clock,
    },
    {
      title: "Müşteri Desteği",
      items: [
        "Uzman mühendis ekibimizle 7/24 teknik destek sağlanır",
        "Her müşteriye özel proje yöneticisi atanır",
        "Düzenli müşteri memnuniyet anketleri yapılır ve geri bildirimler değerlendirilir",
      ],
      icon: Users,
    },
  ];

  return (
    <div className="w-full pt-32 pb-36 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Kalite Politikamız
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Kaliteye Olan
            <br />
            <span className="text-[#0099ff]">Bağlılığımız</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fasonly olarak, her aşamada en yüksek kalite standartlarını
            hedefliyor, müşterilerimize güvenilir ve sürdürülebilir çözümler
            sunuyoruz.
          </p>
        </div>

        {/* Quality Statement Banner */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center mb-20">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-12 h-12 text-[#96E92A] mx-auto mb-4" />
            <p className="text-white text-xl md:text-2xl leading-relaxed italic">
              &quot;Sıfır hata hedefiyle, müşteri memnuniyetini en üst düzeyde
              tutarak, sürekli iyileştirme felsefesi ile çalışıyoruz.&quot;
            </p>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto my-4"></div>
            <p className="text-gray-300">— Fasonly Yönetim Kurulu</p>
          </div>
        </div>

        {/* Quality Objectives Stats */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kalite Hedeflerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Ölçülebilir hedeflerle kalite performansımızı sürekli takip
              ediyoruz
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[#F0F8FF] rounded-xl hover:shadow-md transition-all duration-300">
                <obj.icon className="w-10 h-10 text-[#0099ff] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-[#0B1221]">
                  {obj.value}
                </div>
                <div className="text-sm text-gray-500">{obj.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Principles Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kalite İlkelerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Kalite yönetim sistemimizin temelini oluşturan ilkeler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${principle.color}15` }}>
                  <principle.icon
                    className="w-7 h-7"
                    style={{ color: principle.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Taahhütlerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Müşterilerimize verdiğimiz sözler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                    <commitment.icon className="w-6 h-6 text-[#0099ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1221]">
                    {commitment.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {commitment.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#96E92A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Improvement Process */}
        <div className="mb-20 bg-[#F0F8FF] rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
                <span className="text-[#96E92A] text-sm font-semibold">
                  Süreç
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Sürekli İyileştirme
                <br />
                <span className="text-[#0099ff]">Döngümüz</span>
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                PDCA (Planla-Uygula-Kontrol Et-Önlem Al) döngüsünü tüm
                süreçlerimizde uygulayarak sürekli iyileştirmeyi sağlıyoruz.
              </p>
              <div className="space-y-3">
                {[
                  {
                    step: "Planla",
                    desc: "Hedefler belirlenir ve süreçler planlanır",
                  },
                  {
                    step: "Uygula",
                    desc: "Planlanan faaliyetler hayata geçirilir",
                  },
                  { step: "Kontrol Et", desc: "Sonuçlar izlenir ve ölçülür" },
                  {
                    step: "Önlem Al",
                    desc: "İyileştirme fırsatları değerlendirilir",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#0099ff]">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1221]">
                        {item.step}:
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center">
              <div className="text-center">
                <RefreshCw className="w-16 h-16 text-[#0099ff] mx-auto mb-3 animate-spin-slow" />
                <p className="text-gray-500 text-sm">PDCA Döngüsü</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Highlight */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-2">
              Sertifikalarımızla Tescillenmiş Kalite
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3">
              Uluslararası geçerliliğe sahip sertifikalarla kalitemizi
              belgeliyoruz
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "ISO 9001:2015",
              "ISO 14001:2015",
              "ISO 45001:2018",
              "AS9100D",
              "ISO 13485:2016",
              "IATF 16949:2016",
            ].map((cert, idx) => (
              <div
                key={idx}
                className="text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <Award className="w-6 h-6 text-[#0099ff] mx-auto mb-2" />
                <span className="text-xs font-semibold text-[#0B1221]">
                  {cert}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/about/certificates"
              className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2">
              Tüm Sertifikalarımızı Görüntüleyin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Kalite Politikamız Hakkında Daha Fazla Bilgi
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Kalite yönetim sistemimiz ve politikalarımız hakkında detaylı bilgi
            almak için uzman ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/quote-request"
              className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Bilgi Al
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border border-white hover:bg-white hover:text-[#0B1221] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
