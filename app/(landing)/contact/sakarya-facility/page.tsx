"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Factory,
  Users,
  Clock,
  Award,
  Truck,
  Phone,
  Mail,
  Navigation,
  Building2,
  Wifi,
  Shield,
  Zap,
  Droplets,
  Recycle,
  Coffee,
  Car,
  Calendar,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export default function SakaryaFacility() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Genel Bakış" },
    { id: "capabilities", label: "Üretim Kapasiteleri" },
    { id: "transportation", label: "Ulaşım" },
    { id: "contact", label: "İletişim" },
  ];

  const capabilities = [
    { name: "CNC İşleme", count: "25+", icon: Factory },
    { name: "Enjeksiyon Kalıplama", count: "15+", icon: Building2 },
    { name: "Sac Metal İşleme", count: "10+", icon: Zap },
    { name: "Kalite Kontrol", count: "8", icon: Shield },
    { name: "Son İşlem", count: "6", icon: Award },
    { name: "Lojistik", count: "4", icon: Truck },
  ];

  const features = [
    {
      title: "7/24 Güvenlik",
      description: "7/24 gözetim ve güvenlik kamera sistemi",
      icon: Shield,
    },
    {
      title: "Kesintisiz Enerji",
      description: "Jeneratör ve UPS desteği",
      icon: Zap,
    },
    {
      title: "Atık Yönetimi",
      description: "Sıfır atık politikası",
      icon: Recycle,
    },
    {
      title: "Personel Alanları",
      description: "Dinlenme ve yemekhane",
      icon: Coffee,
    },
    {
      title: "Otopark",
      description: "200 araç kapasiteli otopark",
      icon: Car,
    },
    {
      title: "Ziyaretçi Merkezi",
      description: "Müşteri karşılama ve toplantı odaları",
      icon: Users,
    },
  ];

  return (
    <div className="w-full pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Üretim Tesisi
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Sakarya
            <br />
            <span className="text-[#0099ff]">Üretim Tesisi</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fasonly'nin modern üretim tesisi, yüksek teknoloji ekipmanları ve
            uzman ekibiyle sizlere en kaliteli üretim hizmetini sunuyor.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-20">
          <div className="w-full h-full bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
            <div className="text-center">
              <Factory className="w-20 h-20 text-[#0099ff] mx-auto mb-3" />
              <p className="text-gray-500">Facility Image</p>
            </div>
          </div>
        </div>

        {/* Facility Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "10,000+", label: "m² Kapalı Alan", icon: Building2 },
            { value: "50+", label: "Uzman Personel", icon: Users },
            { value: "24/7", label: "Kesintisiz Üretim", icon: Clock },
            { value: "100+", label: "Modern Makine", icon: Factory },
          ].map((stat, idx) => (
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

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0B1221] text-white shadow-md"
                    : "text-gray-600 hover:text-[#0099ff] hover:bg-gray-50"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Overview */}
        {activeTab === "overview" && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  Tesis Hakkında
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sakarya tesisimiz, stratejik konumu ile İstanbul, Bursa,
                  Kocaeli ve Ankara gibi sanayi merkezlerine yakın mesafede
                  hizmet vermektedir. 10.000 m² kapalı alana sahip modern
                  tesisimizde, son teknoloji CNC makineler, enjeksiyon kalıplama
                  üniteleri ve sac metal işleme ekipmanları bulunmaktadır.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tesisimiz, ISO 9001:2015, ISO 14001:2015 ve ISO 45001:2018
                  sertifikalarına sahip olup, uluslararası kalite
                  standartlarında üretim yapma yetkinliğine sahiptir.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#96E92A]" />
                    <span className="text-sm text-gray-600">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#96E92A]" />
                    <span className="text-sm text-gray-600">
                      ISO 14001:2015
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#96E92A]" />
                    <span className="text-sm text-gray-600">
                      ISO 45001:2018
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#0099ff] mx-auto mb-2" />
                    <p className="text-gray-500">Tesisi Konum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content - Capabilities */}
        {activeTab === "capabilities" && (
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  Üretim Kapasitelerimiz
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tesisimizde CNC işleme, enjeksiyon kalıplama, sac metal işleme
                  ve son işlem operasyonları olmak üzere dört ana üretim
                  biriminde hizmet vermekteyiz. Her bir ünite, alanında uzman
                  personel ve modern ekipmanlarla donatılmıştır.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-[#F0F8FF] rounded-lg">
                      <cap.icon className="w-8 h-8 text-[#0099ff]" />
                      <div>
                        <p className="font-semibold text-[#0B1221]">
                          {cap.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {cap.count} Makine
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0B1221] mb-3">
                    Günlük Üretim Kapasitesi
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "CNC İşleme", value: "5,000+", percent: 85 },
                      {
                        name: "Enjeksiyon Kalıplama",
                        value: "10,000+",
                        percent: 90,
                      },
                      { name: "Sac Metal", value: "3,000+", percent: 75 },
                      { name: "Son İşlem", value: "2,000+", percent: 70 },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{item.name}</span>
                          <span className="text-[#0099ff] font-semibold">
                            {item.value}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#96E92A] h-2 rounded-full"
                            style={{ width: `${item.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content - Transportation */}
        {activeTab === "transportation" && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  Ulaşım ve Konum
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sakarya tesisimiz, TEM otoyoluna yakın konumu ile İstanbul,
                  Bursa, Kocaeli ve Ankara gibi önemli sanayi merkezlerine kolay
                  erişim imkanı sunmaktadır.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0099ff] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1221]">Adres</p>
                      <p className="text-gray-500 text-sm">
                        Baksan Organize Sanayi Bölgesi, 10000 Nilüfer/Sakarya,
                        Türkiye
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-[#0099ff] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1221]">
                        Konum Bilgileri
                      </p>
                      <p className="text-gray-500 text-sm">
                        TEM Otoyolu'na 5 km • İstanbul'a 120 km • Bursa'ya 150
                        km
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-[#0099ff] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1221]">Lojistik</p>
                      <p className="text-gray-500 text-sm">
                        Hızlı kargo ve nakliye hizmetleri ile Türkiye'nin her
                        yerine teslimat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Navigation className="w-12 h-12 text-[#0099ff] mx-auto mb-2" />
                    <p className="text-gray-500">Harita</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content - Contact */}
        {activeTab === "contact" && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                  İletişim Bilgileri
                </h2>
                <div className="w-16 h-1 bg-[#96E92A] rounded-full mb-6"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#F0F8FF] rounded-lg">
                    <Phone className="w-5 h-5 text-[#0099ff]" />
                    <div>
                      <p className="font-semibold text-[#0B1221]">Telefon</p>
                      <p className="text-gray-600">+90 264 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#F0F8FF] rounded-lg">
                    <Mail className="w-5 h-5 text-[#0099ff]" />
                    <div>
                      <p className="font-semibold text-[#0B1221]">E-posta</p>
                      <p className="text-gray-600">sakarya@fasonly.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#F0F8FF] rounded-lg">
                    <Clock className="w-5 h-5 text-[#0099ff]" />
                    <div>
                      <p className="font-semibold text-[#0B1221]">
                        Çalışma Saatleri
                      </p>
                      <p className="text-gray-600">
                        Pazartesi - Cumartesi: 08:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1221] mb-4">
                  Ziyaret Randevusu
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Tesisi ziyaret etmek ve üretim süreçlerimizi yerinde görmek
                  için önceden randevu almanız gerekmektedir.
                </p>
                <Link
                  href="/contact/quote-request"
                  className="inline-flex items-center gap-2 bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Randevu Talep Et
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Facility Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Tesis Özellikleri
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Modern altyapı ve teknolojik ekipmanlarla donatılmış tesisimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#0099ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1221] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tesisi Ziyaret Etmek İster misiniz?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Üretim süreçlerimizi yerinde görmek ve ekibimizle tanışmak için
            randevu talebinde bulunun.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/quote-request"
              className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Randevu Talep Et
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
