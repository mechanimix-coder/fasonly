"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Award,
  Users,
  Briefcase,
  Heart,
  Target,
  Coffee,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import { useState } from "react";

export default function OurTeam() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Tüm Ekip" },
    { id: "management", label: "Yönetim" },
    { id: "engineering", label: "Mühendislik" },
    { id: "production", label: "Üretim" },
    { id: "quality", label: "Kalite" },
    { id: "sales", label: "Satış" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      title: "Genel Müdür",
      department: "management",
      experience: "15+ yıl deneyim",
      image: "/Assets/Images/team/ahmet-yilmaz.jpg",
      linkedin: "#",
      email: "ahmet@fasonly.com",
      bio: "Üretim ve operasyon yönetiminde 15 yılı aşkın deneyim.",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      title: "Teknik Direktör",
      department: "engineering",
      experience: "12+ yıl deneyim",
      image: "/Assets/Images/team/mehmet-demir.jpg",
      linkedin: "#",
      email: "mehmet@fasonly.com",
      bio: "CNC ve enjeksiyon kalıplama uzmanı.",
    },
    {
      id: 3,
      name: "Ayşe Kaya",
      title: "Üretim Müdürü",
      department: "production",
      experience: "10+ yıl deneyim",
      image: "/Assets/Images/team/ayse-kaya.jpg",
      linkedin: "#",
      email: "ayse@fasonly.com",
      bio: "Yalın üretim ve süreç iyileştirme lideri.",
    },
    {
      id: 4,
      name: "Mustafa Şahin",
      title: "Kalite Kontrol Müdürü",
      department: "quality",
      experience: "8+ yıl deneyim",
      image: "/Assets/Images/team/mustafa-sahin.jpg",
      linkedin: "#",
      email: "mustafa@fasonly.com",
      bio: "ISO 9001 ve kalite sistemleri uzmanı.",
    },
    {
      id: 5,
      name: "Zeynep Çelik",
      title: "Satış ve Pazarlama Direktörü",
      department: "sales",
      experience: "10+ yıl deneyim",
      image: "/Assets/Images/team/zeynep-celik.jpg",
      linkedin: "#",
      email: "zeynep@fasonly.com",
      bio: "Dijital pazarlama ve müşteri ilişkileri lideri.",
    },
    {
      id: 6,
      name: "Emre Aydın",
      title: "Kıdemli CNC Mühendisi",
      department: "engineering",
      experience: "8+ yıl deneyim",
      image: "/Assets/Images/team/emre-aydin.jpg",
      linkedin: "#",
      email: "emre@fasonly.com",
      bio: "5 eksen CNC işleme uzmanı.",
    },
    {
      id: 7,
      name: "Selin Öztürk",
      title: "Enjeksiyon Uzmanı",
      department: "engineering",
      experience: "7+ yıl deneyim",
      image: "/Assets/Images/team/selin-ozturk.jpg",
      linkedin: "#",
      email: "selin@fasonly.com",
      bio: "Plastik enjeksiyon kalıplama uzmanı.",
    },
    {
      id: 8,
      name: "Burak Koç",
      title: "Üretim Sorumlusu",
      department: "production",
      experience: "6+ yıl deneyim",
      image: "/Assets/Images/team/burak-koc.jpg",
      linkedin: "#",
      email: "burak@fasonly.com",
      bio: "Sac metal işleme ve montaj lideri.",
    },
    {
      id: 9,
      name: "Elif Taş",
      title: "Kalite Mühendisi",
      department: "quality",
      experience: "5+ yıl deneyim",
      image: "/Assets/Images/team/elif-tas.jpg",
      linkedin: "#",
      email: "elif@fasonly.com",
      bio: "CMM ve ölçüm teknikleri uzmanı.",
    },
  ];

  const filteredMembers =
    activeFilter === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeFilter);

  // Company values
  const values = [
    {
      title: "Kalite",
      description: "Her parçada mükemmelliği hedefliyoruz",
      icon: Award,
    },
    {
      title: "İnovasyon",
      description: "Sürekli gelişen teknolojiler",
      icon: Zap,
    },
    {
      title: "Müşteri Odaklılık",
      description: "Çözüm odaklı hizmet anlayışı",
      icon: Target,
    },
    {
      title: "Takım Çalışması",
      description: "Birlikte başarıya ulaşıyoruz",
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
              Ekibimiz
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Uzman Ekibimizle
            <br />
            <span className="text-[#0099ff]">Tanışın</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fasonly ailesi olarak, her biri alanında uzman mühendis ve
            teknisyenlerden oluşan ekibimizle sizlere en kaliteli üretim
            hizmetini sunuyoruz.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "50+", label: "Uzman Personel", icon: Users },
            { value: "15+", label: "Mühendis", icon: Briefcase },
            { value: "10+", label: "Yıl Ortalama Tecrübe", icon: Award },
            { value: "100%", label: "Müşteri Memnuniyeti", icon: Heart },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#F0F8FF] rounded-xl">
              <stat.icon className="w-10 h-10 text-[#0099ff] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-[#0B1221]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Şirket Değerlerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Başarımızın temelinde yatan değerlerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#0099ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Ekibimizle Tanışın
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

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

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image Placeholder */}
                <div className="relative w-full h-64 bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl">👤</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-[#0B1221] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0099ff] text-sm font-medium mb-2">
                    {member.title}
                  </p>
                  <div className="inline-block px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-500 mb-3">
                    {member.experience}
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-[#0099ff] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer">
                      <BsLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-[#96E92A] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Bu kategoride ekip üyesi bulunamadı.
              </p>
            </div>
          )}
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ailemize Katılın!
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Yenilikçi projelerde çalışmak ve kendini geliştirmek isteyen
            yetenekleri ekibimizde görmekten mutluluk duyarız.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/careers"
              className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Açık Pozisyonlar
            </Link>
            <Link
              href="/contact"
              className="border border-white hover:bg-white hover:text-[#0B1221] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
              Bize Ulaşın
            </Link>
          </div>
        </div>

        {/* Office Culture Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
              <div className="text-center">
                <Coffee className="w-16 h-16 text-[#0099ff] mx-auto mb-3" />
                <span className="text-gray-400 text-sm">Office Culture</span>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
              <span className="text-[#96E92A] text-sm font-semibold">
                Çalışma Kültürü
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
              Dinamik ve Yenilikçi
              <br />
              Çalışma Ortamı
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fasonly'de her gün yeni fikirlerin doğduğu, takım çalışmasına önem
              veren ve sürekli öğrenmeyi teşvik eden bir ortamda çalışıyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#96E92A]" />
                <span className="text-sm text-gray-600">Yenilikçi Düşünce</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#96E92A]" />
                <span className="text-sm text-gray-600">Küresel Vizyon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
