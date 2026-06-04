"use client";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Shield,
  CheckCircle,
  FileCheck,
  Globe,
  Users,
  Building2,
  Download,
  Calendar,
  Star,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Tüm Sertifikalar" },
    { id: "quality", label: "Kalite" },
    { id: "environment", label: "Çevre" },
    { id: "safety", label: "İş Sağlığı" },
    { id: "industry", label: "Sektörel" },
  ];

  const certificates = [
    {
      id: 1,
      name: "ISO 9001:2015",
      category: "quality",
      description:
        "Kalite Yönetim Sistemi sertifikası ile uluslararası kalite standartlarında üretim yapma yetkinliğimizi belgeliyoruz.",
      issuedBy: "TÜV NORD",
      issueDate: "2023",
      expiryDate: "2026",
      image: "/Assets/Images/certificates/iso-9001.jpg",
      icon: Award,
      features: [
        "Sürekli iyileştirme",
        "Müşteri memnuniyeti",
        "Proses yönetimi",
        "Risk tabanlı düşünce",
      ],
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      category: "environment",
      description:
        "Çevre Yönetim Sistemi sertifikası ile çevre dostu üretim anlayışımızı belgeliyoruz.",
      issuedBy: "TÜV NORD",
      issueDate: "2023",
      expiryDate: "2026",
      image: "/Assets/Images/certificates/iso-14001.jpg",
      icon: Shield,
      features: [
        "Çevre dostu üretim",
        "Atık yönetimi",
        "Enerji verimliliği",
        "Sürdürülebilirlik",
      ],
    },
    {
      id: 3,
      name: "ISO 45001:2018",
      category: "safety",
      description:
        "İş Sağlığı ve Güvenliği Yönetim Sistemi ile çalışanlarımızın güvenliğini ön planda tutuyoruz.",
      issuedBy: "TÜV NORD",
      issueDate: "2023",
      expiryDate: "2026",
      image: "/Assets/Images/certificates/iso-45001.jpg",
      icon: Shield,
      features: [
        "Güvenli çalışma ortamı",
        "Risk değerlendirmesi",
        "Acil durum yönetimi",
        "Çalışan sağlığı",
      ],
    },
    {
      id: 4,
      name: "AS9100D",
      category: "industry",
      description:
        "Havacılık ve savunma sanayi için özel kalite yönetim sistemi sertifikası.",
      issuedBy: "TÜV NORD",
      issueDate: "2023",
      expiryDate: "2026",
      image: "/Assets/Images/certificates/as9100.jpg",
      icon: Target,
      features: [
        "Havacılık standartları",
        "Ürün güvenilirliği",
        "İzlenebilirlik",
        "Risk yönetimi",
      ],
    },
    {
      id: 5,
      name: "ISO 13485:2016",
      category: "industry",
      description:
        "Medikal cihaz üretimi için kalite yönetim sistemi sertifikası.",
      issuedBy: "TÜV NORD",
      issueDate: "2023",
      expiryDate: "2026",
      image: "/Assets/Images/certificates/iso-13485.jpg",
      icon: Heart,
      features: [
        "Medikal cihaz standartları",
        "Sterilizasyon yönetimi",
        "Dokümantasyon",
        "Ürün güvenliği",
      ],
    },
    {
      id: 6,
      name: "IATF 16949:2016",
      category: "industry",
      description:
        "Otomotiv sektörü için özel kalite yönetim sistemi sertifikası.",
      issuedBy: "TÜV NORD",
      issueDate: "2023",
      expiryDate: "2026",
      image: "/Assets/Images/certificates/iatf-16949.jpg",
      icon: Zap,
      features: [
        "Otomotiv standartları",
        "Ürün güvenliği",
        "Süreç yaklaşımı",
        "Müşteri memnuniyeti",
      ],
    },
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

  const stats = [
    { value: "6+", label: "Uluslararası Sertifika", icon: Award },
    { value: "100%", label: "Kalite Uyumluluğu", icon: CheckCircle },
    { value: "50+", label: "Denetim Başarısı", icon: FileCheck },
    { value: "15+", label: "Yıl Kalite Yönetimi", icon: Star },
  ];

  const commitments = [
    {
      title: "Kalite Politikamız",
      description:
        "Müşteri memnuniyetini en üst seviyede tutmak, sürekli iyileştirme ve yenilikçi çözümler sunmak temel politikamızdır.",
    },
    {
      title: "Çevre Politikamız",
      description:
        "Doğal kaynakları korumak, atıkları minimize etmek ve çevre dostu üretim teknolojileri kullanmak önceliklerimiz arasındadır.",
    },
    {
      title: "İş Sağlığı ve Güvenliği Politikamız",
      description:
        "Sıfır iş kazası hedefiyle, güvenli çalışma ortamı sağlamak ve çalışan sağlığını korumak temel ilkemizdir.",
    },
  ];

  return (
    <div className="w-full pt-32 pb-36 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Sertifikalarımız
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Kalite ve Güvence
            <br />
            <span className="text-[#0099ff]">Sertifikalarımız</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Uluslararası standartlarda üretim yapma yetkinliğimizi belgeleyen
            sertifikalarımızla kaliteye olan bağlılığımızı gösteriyoruz.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#F0F8FF] rounded-xl">
              <stat.icon className="w-10 h-10 text-[#0099ff] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-[#0B1221]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certification Grid */}
        <div className="mb-20">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Certificate Header */}
                <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center">
                  <div className="text-center">
                    <cert.icon className="w-16 h-16 text-[#0099ff] mx-auto mb-2" />
                    <span className="text-xs text-gray-400">Sertifika</span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#0B1221]">
                      {cert.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Certificate Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-[#0099ff]" />
                      <span className="text-gray-500">Veren Kurum:</span>
                      <span className="text-gray-700 font-medium">
                        {cert.issuedBy}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[#0099ff]" />
                      <span className="text-gray-500">Geçerlilik:</span>
                      <span className="text-gray-700">
                        {cert.issueDate} - {cert.expiryDate}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#0B1221] mb-2">
                      Kapsam:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="w-full mt-2 flex items-center justify-center gap-2 text-[#0099ff] border border-[#0099ff] hover:bg-[#0099ff] hover:text-white font-medium py-2 rounded-lg transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Sertifikayı İndir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Bu kategoride sertifika bulunamadı.
              </p>
            </div>
          )}
        </div>

        {/* Quality Commitments Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Kalite Taahhütlerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Her seviyede kalite bilinci ile hareket ediyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[#F0F8FF] rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <FileCheck className="w-8 h-8 text-[#0099ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditation Bodies Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-2">
              Akreditasyon Kurumları
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["TÜV NORD", "TÜRKAK", "ISO", "IAF"].map((body, idx) => (
              <div
                key={idx}
                className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                <Globe className="w-12 h-12 text-[#0099ff] mx-auto mb-2" />
                <p className="font-semibold text-[#0B1221]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Kalite Belgelerimiz Hakkında Detaylı Bilgi
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Sertifikalarımız ve kalite politikalarımız hakkında daha fazla bilgi
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
