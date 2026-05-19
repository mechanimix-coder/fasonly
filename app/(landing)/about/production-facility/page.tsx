"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  Users,
  Factory,
  Wrench,
  Clock,
  Award,
  Target,
  Shield,
  Cpu,
} from "lucide-react";

export default function ProductionFacility() {
  return (
    <div className="w-full pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
              <span className="text-[#96E92A] text-sm font-semibold">
                Üretim Tesisi
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
              Modern Üretim
              <br />
              <span className="text-[#0099ff]">Tesisi</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fasonly'nin son teknoloji üretim tesisinde, dijital dönüşümle
              desteklenen modern makineler ve uzman mühendislik ekibiyle
              kaliteli parçalar üretiyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact/quote-request"
                className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Teklif Al
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact/sakarya-facility"
                className="border-2 border-[#0B1221] hover:bg-[#0B1221] hover:text-white text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Tesisi Ziyaret Edin
                <MapPin className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Assets/Images/facility/hero.jpg"
                alt="Fasonly Production Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "10,000+", label: "Yıllık Üretim", icon: Factory },
            { value: "50+", label: "Uzman Mühendis", icon: Users },
            { value: "100+", label: "Modern Makine", icon: Cpu },
            { value: "7/24", label: "Kesintisiz Üretim", icon: Clock },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#F0F8FF] rounded-xl">
              <stat.icon className="w-10 h-10 text-[#0099ff] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#0B1221]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Facility Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Tesis Özelliklerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Modern altyapımız ve teknolojik ekipmanlarımızla yüksek kaliteli
              üretim
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CNC İşleme Parkuru",
                desc: "Yüksek hassasiyetli CNC freze ve torna tezgahları",
                icon: Wrench,
              },
              {
                title: "Enjeksiyon Kalıplama",
                desc: "Modern enjeksiyon makineleri ile seri üretim",
                icon: Factory,
              },
              {
                title: "Sac Metal İşleme",
                desc: "Lazer kesim, büküm ve punta kaynak makineleri",
                icon: Target,
              },
              {
                title: "Kalite Kontrol Lab",
                desc: "CMM ve 3D ölçüm cihazları ile tam denetim",
                icon: Award,
              },
              {
                title: "Son İşlem Atölyesi",
                desc: "Yüzey işlem, boya ve montaj hizmetleri",
                icon: Shield,
              },
              {
                title: "Dijital Teklif Sistemi",
                desc: "Yapay zeka destekli anlık fiyatlandırma",
                icon: Cpu,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-[#F0F8FF] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#0099ff]" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 bg-[#F0F8FF] rounded-2xl p-8 lg:p-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
              Sakarya / Türkiye
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tesisimiz, stratejik konumu ile İstanbul, Bursa ve Kocaeli gibi
              sanayi merkezlerine yakın mesafede hizmet vermektedir.
            </p>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#0099ff] flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">
                Baksan, 10000 Nilüfer / Sakarya, Türkiye
              </span>
            </div>
            <Link
              href="/contact/sakarya-facility"
              className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2">
              Yol Tarifi Al
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 relative w-full h-64 rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">Harita</span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
            Sertifikalarımız
          </h2>
          <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-8"></div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "ISO 9001:2015", label: "Kalite Yönetim Sistemi" },
              { name: "ISO 14001", label: "Çevre Yönetim Sistemi" },
              { name: "ISO 45001", label: "İş Sağlığı ve Güvenliği" },
            ].map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-[#0099ff]" />
                </div>
                <div className="font-bold text-[#0B1221]">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0B1221] rounded-2xl p-8 lg:p-12 text-center">
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
              className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
              Randevu Talep Et
            </Link>
            <Link
              href="/contact"
              className="border border-white hover:bg-white hover:text-[#0B1221] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
