"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  Building2,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  Quote,
  Briefcase,
  HeartHandshake,
  Rocket,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function OurCustomers() {
  const [activeIndustry, setActiveIndustry] = useState("all");

  const industries = [
    { id: "all", label: "Tüm Sektörler" },
    { id: "automotive", label: "Otomotiv" },
    { id: "medical", label: "Medikal" },
    { id: "aerospace", label: "Havacılık" },
    { id: "electronics", label: "Elektronik" },
    { id: "industrial", label: "Endüstriyel" },
  ];

  const successStories = [
    {
      id: 1,
      company: "Otomotiv Teknoloji A.Ş.",
      industry: "automotive",
      logo: "/Assets/Images/customers/automotive-logo.png",
      quote:
        "Fasonly ile çalışmaya başladığımızdan beri prototipleme sürelerimiz %60 azaldı. Tekliften teslimata kadar olan süreçteki profesyonellikleri takdire şayan.",
      author: "Mehmet Yılmaz",
      title: "Üretim Direktörü",
      result: "Prototipleme süresinde %60 azalma",
      image: "/Assets/Images/customers/automotive.jpg",
    },
    {
      id: 2,
      company: "Medikal Sistemler",
      industry: "medical",
      logo: "/Assets/Images/customers/medical-logo.png",
      quote:
        "Medikal cihaz üretiminde yüksek hassasiyet ve kalite standartları bizim için çok önemli. Fasonly bu konuda bize mükemmel bir ortak oldu.",
      author: "Dr. Ayşe Kaya",
      title: "AR-GE Müdürü",
      result: "ISO 13485 sertifikalı üretim",
      image: "/Assets/Images/customers/medical.jpg",
    },
    {
      id: 3,
      company: "Havacılık ve Savunma",
      industry: "aerospace",
      logo: "/Assets/Images/customers/aerospace-logo.png",
      quote:
        "Havacılık sektöründe toleranslar çok dardır. Fasonly'nin hassas işçiliği ve zamanında teslimatı ile her zaman doğru sonuçları aldık.",
      author: "Ahmet Demir",
      title: "Teknik Müdür",
      result: "AS9100 sertifikalı üretim",
      image: "/Assets/Images/customers/aerospace.jpg",
    },
    {
      id: 4,
      company: "Elektronik Çözümler",
      industry: "electronics",
      logo: "/Assets/Images/customers/electronics-logo.png",
      quote:
        "Karmaşık elektronik parçalarımızı kısa sürede, yüksek kalitede ürettiler. Dijital teklif platformları sayesinde süreç çok hızlı ilerliyor.",
      author: "Zeynep Şahin",
      title: "Satın Alma Müdürü",
      result: "Teslim süresinde %50 iyileşme",
      image: "/Assets/Images/customers/electronics.jpg",
    },
    {
      id: 5,
      company: "Endüstriyel Makine",
      industry: "industrial",
      logo: "/Assets/Images/customers/industrial-logo.png",
      quote:
        "Endüstriyel makine parçalarımızın üretiminde her zaman güvendiğimiz bir partner. Tekliften teslimata kadar tüm süreç profesyonelce yönetiliyor.",
      author: "Mustafa Aydın",
      title: "Operasyon Direktörü",
      result: "Maliyette %35 tasarruf",
      image: "/Assets/Images/customers/industrial.jpg",
    },
    {
      id: 6,
      company: "Robotik Teknolojileri",
      industry: "industrial",
      logo: "/Assets/Images/customers/robotics-logo.png",
      quote:
        "Robotik projelerimizde karmaşık geometrili parçaları hızlıca üretebilmek çok önemli. Fasonly bu konuda beklentilerimizi aşıyor.",
      author: "Can Öztürk",
      title: "AR-GE Lideri",
      result: "30+ başarılı proje",
      image: "/Assets/Images/customers/robotics.jpg",
    },
  ];

  const filteredStories =
    activeIndustry === "all"
      ? successStories
      : successStories.filter((story) => story.industry === activeIndustry);

  const stats = [
    { value: "500+", label: "Mutlu Müşteri", icon: Users },
    { value: "15+", label: "Sektörde Tecrübe", icon: Award },
    { value: "95%", label: "Müşteri Memnuniyeti", icon: TrendingUp },
    { value: "30+", label: "Ülkeye İhracat", icon: Globe },
  ];

  const benefits = [
    {
      title: "Hızlı Teslimat",
      description: "Ortalama 5 iş gününde teslimat",
      icon: Rocket,
    },
    {
      title: "Rekabetçi Fiyat",
      description: "En uygun maliyetli üretim çözümleri",
      icon: TrendingUp,
    },
    {
      title: "Kalite Garantisi",
      description: "ISO 9001:2015 sertifikalı üretim",
      icon: Shield,
    },
    {
      title: "7/24 Destek",
      description: "Uzman ekibimizle sürekli iletişim",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full pt-32 pb-36 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Müşterilerimiz
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Değerli İş Ortaklarımız
            <br />
            <span className="text-[#0099ff]">ve Başarı Hikayeleri</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            500'den fazla mutlu müşterimizle birlikte, onların başarılarına
            ortak olmaktan gurur duyuyoruz. İşte sizlerle paylaştığımız bazı
            başarı hikayelerimiz.
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

        {/* Industries We Serve Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Hizmet Verdiğimiz Sektörler
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Farklı sektörlerden yüzlerce firmaya özel üretim çözümleri
              sunuyoruz
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Otomotiv", icon: "🚗", count: "120+" },
              { name: "Medikal", icon: "🏥", count: "85+" },
              { name: "Havacılık", icon: "✈️", count: "45+" },
              { name: "Elektronik", icon: "💻", count: "100+" },
              { name: "Savunma", icon: "🛡️", count: "40+" },
              { name: "Enerji", icon: "⚡", count: "60+" },
            ].map((sector, idx) => (
              <div
                key={idx}
                className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-3xl mb-2 block">{sector.icon}</span>
                <div className="font-bold text-[#0B1221] text-sm">
                  {sector.name}
                </div>
                <div className="text-xs text-gray-400">
                  {sector.count} müşteri
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-[#F0F8FF] rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-2">
              Neden Fasonly Tercih Ediliyor?
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <benefit.icon className="w-8 h-8 text-[#0099ff]" />
                </div>
                <h3 className="font-bold text-[#0B1221] mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Başarı Hikayelerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Müşterilerimizin Fasonly ile elde ettiği başarıları keşfedin
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {industry.label}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="space-y-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Image/Logo Section */}
                  <div className="lg:w-1/3 relative">
                    <div className="relative h-64 lg:h-full w-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                          <Building2 className="w-10 h-10 text-[#0099ff]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1221]">
                          {story.company}
                        </h3>
                        <div className="inline-block px-2 py-0.5 bg-white/80 rounded-full text-xs text-gray-500 mt-2">
                          {story.result}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="lg:w-2/3 p-8 bg-white">
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-[#96E92A] opacity-50" />
                    </div>
                    <p className="text-gray-700 leading-relaxed italic mb-6">
                      &quot;{story.quote}&quot;
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="font-bold text-[#0B1221]">
                          {story.author}
                        </p>
                        <p className="text-sm text-gray-500">{story.title}</p>
                      </div>
                      <Link
                        href={`/customers/${story.id}`}
                        className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                        Detaylı İncele
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Bu sektör için henüz başarı hikayesi bulunmuyor.
              </p>
            </div>
          )}
        </div>

        {/* Logo Cloud Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-2">
              Güvenen Markalar
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3">
              Türkiye'nin önde gelen firmaları Fasonly'yi tercih ediyor
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div
                key={i}
                className="h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300">
                <span className="text-gray-400 text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center mb-20">
          <div className="w-16 h-16 bg-[#96E92A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Quote className="w-8 h-8 text-[#96E92A]" />
          </div>
          <p className="text-xl md:text-2xl text-white leading-relaxed italic mb-6 max-w-3xl mx-auto">
            &quot;Fasonly ile çalışmak, üretim süreçlerimizde devrim yarattı.
            Hızlı teklif, kaliteli üretim ve zamanında teslimat ile
            beklentilerimizin çok üzerindeler.&quot;
          </p>
          <div>
            <p className="text-white font-bold">Mehmet Yılmaz</p>
            <p className="text-gray-300 text-sm">
              Üretim Müdürü, Otomotiv Teknoloji A.Ş.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
            Siz de Başarı Hikayenizi Yazmaya Hazır mısınız?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Projenizi bugün başlatın, Fasonly farkıyla kaliteli üretimin keyfini
            çıkarın.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/quote-request"
              className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Teklif Al
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#0B1221] hover:bg-[#0B1221] hover:text-white text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
