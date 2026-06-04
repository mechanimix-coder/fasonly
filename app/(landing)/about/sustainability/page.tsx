"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Droplets,
  Sun,
  TreePine,
  Factory,
  Shield,
  Heart,
  Globe,
  Zap,
  Battery,
  Wind,
  Users,
  TrendingDown,
  Package,
  Truck,
  Award,
  BarChart,
  CheckCircle,
  Download,
} from "lucide-react";

export default function Sustainability() {
  const initiatives = [
    {
      title: "Enerji Verimliliği",
      description:
        "Yenilenebilir enerji kaynakları kullanımı ve enerji tasarruflu üretim teknolojileri ile karbon ayak izimizi azaltıyoruz.",
      icon: Zap,
      stats: "30% enerji tasarrufu",
      color: "#0099ff",
    },
    {
      title: "Atık Yönetimi",
      description:
        "Üretim atıklarını minimuma indiriyor, geri dönüştürülebilir malzemeleri tekrar kazanarak döngüsel ekonomiye katkı sağlıyoruz.",
      icon: Recycle,
      stats: "85% geri dönüşüm oranı",
      color: "#96E92A",
    },
    {
      title: "Su Tasarrufu",
      description:
        "Su tüketimini optimize eden teknolojilerle su kaynaklarını koruyor, atık su arıtma sistemleriyle çevreye duyarlı üretim yapıyoruz.",
      icon: Droplets,
      stats: "40% su tasarrufu",
      color: "#0099ff",
    },
    {
      title: "Yeşil Lojistik",
      description:
        "Karbon salınımı düşük taşımacılık yöntemleri ve optimize edilmiş lojistik rotaları ile çevre dostu teslimat sağlıyoruz.",
      icon: Truck,
      stats: "25% karbon azaltımı",
      color: "#96E92A",
    },
  ];

  const goals = [
    {
      year: "2025",
      title: "Karbon Nötr Hedefi",
      description: "Üretim faaliyetlerimizde karbon nötr olmayı hedefliyoruz.",
      progress: 65,
      icon: Leaf,
    },
    {
      year: "2026",
      title: "Sıfır Atık",
      description:
        "Tüm üretim atıklarını geri dönüştürerek sıfır atık hedefine ulaşmayı amaçlıyoruz.",
      progress: 70,
      icon: Recycle,
    },
    {
      year: "2027",
      title: "Yenilenebilir Enerji",
      description:
        "Toplam enerji tüketimimizin %50'sini yenilenebilir kaynaklardan karşılamayı hedefliyoruz.",
      progress: 45,
      icon: Sun,
    },
    {
      year: "2028",
      title: "Yeşil Tedarik Zinciri",
      description:
        "Tüm tedarikçilerimizin sürdürülebilirlik standartlarımıza uyumunu sağlayacağız.",
      progress: 40,
      icon: Globe,
    },
  ];

  const reports = [
    {
      title: "Sürdürülebilirlik Raporu 2024",
      date: "Ocak 2024",
      size: "2.5 MB",
      icon: BarChart,
    },
    {
      title: "Karbon Ayak İzi Raporu",
      date: "Aralık 2023",
      size: "1.8 MB",
      icon: Leaf,
    },
    {
      title: "Enerji Yönetim Raporu",
      date: "Kasım 2023",
      size: "1.2 MB",
      icon: Zap,
    },
  ];

  const stats = [
    { value: "5,000+", label: "Ton CO2 Azaltımı", icon: Leaf },
    { value: "85%", label: "Geri Dönüşüm Oranı", icon: Recycle },
    { value: "40%", label: "Su Tasarrufu", icon: Droplets },
    { value: "30%", label: "Enerji Verimliliği", icon: Zap },
  ];

  return (
    <div className="w-full pt-32 pb-36 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Sürdürülebilirlik
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Gelecek Nesiller İçin
            <br />
            <span className="text-[#0099ff]">Sürdürülebilir Üretim</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fasonly olarak, çevreye duyarlı üretim anlayışımızla doğal
            kaynakları koruyor, karbon ayak izimizi azaltıyor ve sürdürülebilir
            bir gelecek için çalışıyoruz.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-[#F0F8FF] rounded-xl hover:shadow-md transition-all duration-300">
              <stat.icon className="w-10 h-10 text-[#0099ff] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-[#0B1221]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Green Mission Banner */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center mb-20">
          <div className="max-w-3xl mx-auto">
            <Leaf className="w-12 h-12 text-[#96E92A] mx-auto mb-4" />
            <p className="text-white text-xl md:text-2xl leading-relaxed italic">
              &quot;Daha yeşil bir dünya için, üretim süreçlerimizi çevre dostu
              teknolojilerle dönüştürüyor, sürdürülebilir bir geleceğe katkıda
              bulunuyoruz.&quot;
            </p>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto my-4"></div>
            <p className="text-gray-300">— Fasonly Sürdürülebilirlik Ekibi</p>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sürdürülebilirlik Girişimlerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Çevresel etkimizi azaltmak için hayata geçirdiğimiz projeler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${initiative.color}15` }}>
                    <initiative.icon
                      className="w-7 h-7"
                      style={{ color: initiative.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {initiative.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-[#F0F8FF] rounded-full text-sm font-semibold text-[#0099ff]">
                      {initiative.stats}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals & Progress Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Sürdürülebilirlik Hedeflerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              2025-2028 dönemi sürdürülebilirlik hedeflerimiz ve ilerlememiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <goal.icon className="w-10 h-10 text-[#0099ff]" />
                  <span className="text-2xl font-bold text-[#96E92A]">
                    {goal.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  {goal.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {goal.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">İlerleme</span>
                    <span className="text-[#0099ff] font-semibold">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#96E92A] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eco-Friendly Manufacturing */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 bg-[#F0F8FF] rounded-2xl p-8 lg:p-12">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
              <span className="text-[#96E92A] text-sm font-semibold">
                Yeşil Üretim
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
              Çevre Dostu
              <br />
              <span className="text-[#0099ff]">Üretim Teknolojileri</span>
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Üretim süreçlerimizde enerji verimli makineler kullanıyor, atık
              ısı geri kazanım sistemleri ile enerji tasarrufu sağlıyoruz.
              Ayrıca, tesislerimizde kullanılan yenilenebilir enerji kaynakları
              sayesinde karbon emisyonumuzu minimuma indiriyoruz.
            </p>
            <ul className="space-y-2">
              {[
                "Enerji verimli CNC makineleri",
                "Atık ısı geri kazanım sistemleri",
                "Güneş enerjisi panelleri (2025 hedefi)",
                "LED aydınlatma ve hareket sensörleri",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#96E92A]" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center">
            <div className="text-center">
              <Factory className="w-16 h-16 text-[#0099ff] mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Yeşil Üretim Tesisi</p>
            </div>
          </div>
        </div>

        {/* Reports & Downloads */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-2">
              Sürdürülebilirlik Raporları
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3">
              Çevresel performansımızı şeffaflıkla paylaşıyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((report, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                    <report.icon className="w-6 h-6 text-[#0099ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1221]">
                      {report.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {report.date} • {report.size}
                    </p>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-[#0099ff] border border-[#0099ff] hover:bg-[#0099ff] hover:text-white font-medium py-2 rounded-lg transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Raporu İndir
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-2">
              Çevre Sertifikalarımız
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "ISO 14001:2015",
                desc: "Çevre Yönetim Sistemi",
                icon: Shield,
              },
              { name: "ISO 50001", desc: "Enerji Yönetim Sistemi", icon: Zap },
              { name: "ISO 14064", desc: "Sera Gazı Emisyonu", icon: Leaf },
              {
                name: "Yeşil Dönüşüm",
                desc: "Çevre Dostu Üretim",
                icon: Recycle,
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <cert.icon className="w-10 h-10 text-[#0099ff] mx-auto mb-2" />
                <p className="font-semibold text-[#0B1221] text-sm">
                  {cert.name}
                </p>
                <p className="text-xs text-gray-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sürdürülebilirlik Çalışmalarımız Hakkında Bilgi Alın
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Çevre politikalarımız ve sürdürülebilirlik hedeflerimiz hakkında
            daha fazla bilgi için ekibimizle iletişime geçin.
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
