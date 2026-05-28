"use client";
import Image from "next/image";
import { ChevronDown, Menu, X, CheckCircle } from "lucide-react";
import { RedirectButton } from "../UI/Buttons";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutSubHover, setIsAboutSubHover] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);
  const [isIndustriesHover, setIsIndustriesHover] = useState(false);
  const [isResourcesHover, setIsResourcesHover] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsMobileIndustriesOpen(false);
      setIsMobileServicesOpen(false);
      setIsMobileResourcesOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen);
  };

  const toggleMobileIndustries = () => {
    setIsMobileIndustriesOpen(!isMobileIndustriesOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const toggleMobileResources = () => {
    setIsMobileResourcesOpen(!isMobileResourcesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileIndustriesOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileResourcesOpen(false);
  };

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`flex z-50 px-4 py-5  md:px-6 flex-row fixed top-0 w-full items-center justify-between bg-[#0B1221] text-white h-20 md:h-auto transition-transform duration-300 ease-in-out
      ${visible ? "lg:translate-y-0" : "lg:-translate-y-full"}`}>
      {/* Logo - Always visible */}
      <div className="flex-shrink-0">
        <Link href="/" onClick={closeMenu}>
          <Image
            src={"/Assets/Images/Logo.png"}
            width={400}
            height={400}
            alt="Fasonly Original Logo"
            className="w-24 md:w-40 lg:w-64 h-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:flex flex-row gap-5 items-center">
        <div className="group relative flex flex-row items-center cursor-pointer">
          <span className="flex flex-row items-center justify-center gap-2 hover:text-[#96E92A] relative text-sm xl:text-base">
            Fasonly <ChevronDown className="w-4 h-4" />
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
          </span>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 absolute left-0 w-52 top-8 bg-[#0B1221] text-white shadow-xl rounded-md  z-50">
            <Link
              href="/mission"
              className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A] block">
              Misyonumuz
            </Link>
            <Link
              href="/blog"
              className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A] block">
              Blog
            </Link>

            {/* About Us with Sub-dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutSubHover(true)}
              onMouseLeave={() => setIsAboutSubHover(false)}>
              <div className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A] flex items-center justify-between">
                Hakkımızda
                <ChevronDown className="w-3 h-3 -rotate-90" />
              </div>

              {/* Sub-dropdown that appears to the right */}
              <div
                className={`absolute left-full top-0 ml-1 w-[500px] bg-[#0B1221] text-white shadow-xl rounded-md overflow-hidden transition-all duration-200 z-50 ${isAboutSubHover ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="grid grid-cols-3 gap-4 p-4">
                  <div>
                    <h4 className="text-[#96E92A] text-xs font-semibold mb-2">
                      HAKKIMIZDA
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/about/who-we-are"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Biz Kimiz
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/production-facility"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Üretim Tesisi
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/our-team"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Ekibimiz
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/our-customers"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Müşterilerimiz
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#96E92A] text-xs font-semibold mb-2">
                      KURUMSAL
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/about/certificates"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Sertifikalar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/quality-policy"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Kalite Politikamız
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/sustainability"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Sürdürülebilirlik
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#96E92A] text-xs font-semibold mb-2">
                      İLETİŞİM
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/contact/sakarya-facility"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Sakarya Tesisi
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact/quote-request"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Teklif Talebi
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact/careers"
                          className="text-xs text-gray-300 hover:text-[#96E92A] transition-colors block py-1">
                          Kariyer
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A] block">
              İletişim
            </Link>
          </div>
        </div>

        {/* Services with Clean Dropdown - Updated with Image Box */}
        <div
          className="relative group"
          onMouseEnter={() => setIsServicesHover(true)}
          onMouseLeave={() => setIsServicesHover(false)}>
          <div className="flex flex-row items-center cursor-pointer group">
            <span className="flex flex-row items-center justify-center gap-2 hover:text-[#96E92A] relative text-sm xl:text-base">
              Hizmetler <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* Clean Services Dropdown with 4 columns + Image Box */}
          <div
            className={`fixed left-0 right-0 top-20 bg-white text-[#0B1221] shadow-2xl transition-all duration-300
            ${isServicesHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[-10px]"}`}>
            <div className="container mx-auto px-4 py-10">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Injection Molding Service */}
                <div>
                  <Link
                    href="/services/injection-molding"
                    className="font-bold hover:text-[#96E92A] text-lg text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Enjeksiyon Kalıplama
                  </Link>
                  <ul className="space-y-2 mt-4">
                    {[
                      {
                        name: "Plastik Enjeksiyon Kalıplama",
                        link: "/services/injection-molding/plastic-injection-molding",
                      },
                      {
                        name: "Sıvı Silikon Kauçuk Kalıplama",
                        link: "/services/injection-molding/liquid-silicone-rubber-molding",
                      },
                      {
                        name: "Kaplama Kalıplama",
                        link: "/services/injection-molding/overmolding",
                      },
                      {
                        name: "Gömme Parçalı Kalıplama",
                        link: "/services/injection-molding/insert-molding",
                      },
                      {
                        name: "Aile ve Çok Gözlü Kalıplama",
                        link: "/services/injection-molding/family-multi-cavity",
                      },
                      {
                        name: "Prototipleme",
                        link: "/services/injection-molding/prototyping",
                      },
                      {
                        name: "Seri Üretim",
                        link: "/services/injection-molding/production",
                      },
                      {
                        name: "Kalite",
                        link: "/services/injection-molding/quality",
                      },
                      {
                        name: "İkincil Operasyonlar",
                        link: "/services/injection-molding/secondary-operations",
                      },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="text-sm text-gray-600 hover:text-[#0099ff] transition-colors cursor-pointer block py-1">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CNC Machining Service */}
                <div>
                  <Link
                    href="/services/cnc-machining"
                    className="font-bold  hover:text-[#96E92A] text-lg text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                    CNC İşleme
                  </Link>
                  <ul className="space-y-2 mt-4">
                    {[
                      {
                        name: "CNC Frezeleme",
                        link: "/services/cnc-machining/cnc-milling",
                      },
                      {
                        name: "CNC Tornalama",
                        link: "/services/cnc-machining/cnc-turning",
                      },
                      {
                        name: "Seri Üretim İşleme",
                        link: "/services/cnc-machining/production-machining",
                      },
                      {
                        name: "Diş Açma Seçenekleri",
                        link: "/services/cnc-machining/threading-options",
                      },
                      {
                        name: "Kalite",
                        link: "/services/cnc-machining/quality",
                      },
                      {
                        name: "Yüzey İşlem Seçenekleri",
                        link: "/services/cnc-machining/finishing-options",
                      },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="text-sm text-gray-600 hover:text-[#0099ff] transition-colors cursor-pointer block py-1">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3D Printing Service */}
                <div>
                  <Link
                    href="/services/3d-printing"
                    className="font-bold text-lg hover:text-[#96E92A] text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                    3D Baskı
                  </Link>
                  <ul className="space-y-2 mt-4">
                    {[
                      {
                        name: "Metal 3D Baskı",
                        link: "/services/3d-printing/metal-3d-printing",
                      },
                      {
                        name: "Stereolitografi",
                        link: "/services/3d-printing/stereolithography",
                      },
                      {
                        name: "Multi Jet Fusion",
                        link: "/services/3d-printing/multi-jet-fusion",
                      },
                      {
                        name: "Seçici Lazer Sinterleme",
                        link: "/services/3d-printing/selective-laser-sintering",
                      },
                      {
                        name: "PolyJet",
                        link: "/services/3d-printing/polyjet",
                      },
                      {
                        name: "Gelişmiş Fotopolimerler",
                        link: "/services/3d-printing/advanced-photopolymers",
                      },
                      {
                        name: "Fused Deposition Modeling",
                        link: "/services/3d-printing/fused-deposition-modeling",
                      },
                      {
                        name: "Seri Üretim",
                        link: "/services/3d-printing/production",
                      },
                      {
                        name: "Büyük Format",
                        link: "/services/3d-printing/large-format",
                      },
                      { name: "Kalite", link: "/services/3d-printing/quality" },
                      {
                        name: "Yüzey İşlem Seçenekleri",
                        link: "/services/3d-printing/finishing-options",
                      },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="text-sm text-gray-600 hover:text-[#0099ff] transition-colors cursor-pointer block py-1">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sheet Metal Fabrication */}
                <div>
                  <Link
                    href="/services/sheet-metal-fabrication"
                    className="font-bold hover:text-[#96E92A] text-lg text-[#0B1221] mb-4 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Sac Metal İşleme
                  </Link>
                  <ul className="space-y-2 mt-4">
                    {[
                      {
                        name: "Lazer Kesim",
                        link: "/services/sheet-metal-fabrication/laser-cutting",
                      },
                      {
                        name: "Zımbalama",
                        link: "/services/sheet-metal-fabrication/punching",
                      },
                      {
                        name: "Şekillendirme ve Bükme",
                        link: "/services/sheet-metal-fabrication/forming-bending",
                      },
                      {
                        name: "Birleştirilmiş Montajlar",
                        link: "/services/sheet-metal-fabrication/assemblies",
                      },
                      {
                        name: "Prototipleme",
                        link: "/services/sheet-metal-fabrication/prototyping",
                      },
                      {
                        name: "Seri Üretim",
                        link: "/services/sheet-metal-fabrication/production",
                      },
                      {
                        name: "Tasarım Kılavuzları",
                        link: "/services/sheet-metal-fabrication/design-guidelines",
                      },
                      {
                        name: "Kalite",
                        link: "/services/sheet-metal-fabrication/quality",
                      },
                      {
                        name: "Yüzey İşlem Seçenekleri",
                        link: "/services/sheet-metal-fabrication/finishing-options",
                      },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="text-sm text-gray-600 hover:text-[#0099ff] transition-colors cursor-pointer block py-1">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 5 - Image Box (Same style as Resources dropdown) */}
                <div className="bg-[#F0F8FF] h-fit rounded-xl p-5 border border-gray-100">
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src={
                          "/Assets/Images/services/production_order_cnc_machining-1-1.jpg"
                        }
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-[#0B1221] mb-2">
                    Hızlı Üretim Çözümleri
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Prototiplemeden seri üretime kadar tüm ihtiyaçlarınız için
                    tek noktadan çözüm ortağınız. Modern makine parkuru ve uzman
                    mühendislik desteği ile üretim süreçlerinizi hızlandırın.
                  </p>
                  <Link href="/contact/quote-request">
                    <button className="w-full bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium py-2 rounded-lg transition-colors text-sm">
                      Hemen Teklif Al
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries with Full-Width Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsIndustriesHover(true)}
          onMouseLeave={() => setIsIndustriesHover(false)}>
          <div className="flex flex-row items-center cursor-pointer group">
            <Link
              href={"/resources"}
              className="flex flex-row items-center justify-center gap-2 hover:text-[#96E92A] relative text-sm xl:text-base">
              Endüstriler <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Full-Width Industries Dropdown */}
          <div
            className={`fixed left-0 right-0 top-20 bg-white text-[#0B1221] shadow-2xl transition-all duration-300
            ${isIndustriesHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[-10px]"}`}>
            <div className="container mx-auto px-4 py-10">
              {/* Three Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - Industries We Serve */}
                <div>
                  <h2 className="text-xl font-bold text-[#0B1221] mb-5 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Hizmet Verdiğimiz Sektörler
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    {[
                      {
                        title: "Medikal",
                        desc: "Medikal cihazlar ve sağlık ürünlerinin hızlandırılmış geliştirilmesi",
                        link: "/industries/medical",
                      },
                      {
                        title: "Havacılık ve Uzay",
                        desc: "Erken prototiplemeden ateşleme testlerine ve fırlatmaya kadar yüksek kaliteli bileşenler",
                        link: "/industries/aerospace",
                      },
                      {
                        title: "Otomotiv",
                        desc: "Geleneksel, elektrikli ve otonom araçlar için hızlı prototipleme ve hızlandırılmış üretim",
                        link: "/industries/automotive",
                      },
                      {
                        title: "Robotik",
                        desc: "Robotik ve otomasyon uygulamaları için karmaşık son kullanım üretim parçaları",
                        link: "/industries/robotics",
                      },
                      {
                        title: "Tüketici Elektroniği",
                        desc: "Tüketici ve bilgisayar elektroniği parçalarının fonksiyonel prototiplenmesi ve talep üzerine üretimi",
                        link: "/industries/consumer-electronics",
                      },
                      {
                        title: "Endüstriyel Ekipman",
                        desc: "Dayanıklı aparatlar, fikstürler ve montajı kolaylaştırmak ve üretim maliyetlerini düşürmek için diğer bileşenler",
                        link: "/industries/industrial-equipment",
                      },
                    ].map((industry, idx) => (
                      <Link
                        href={industry.link}
                        key={idx}
                        className="block bg-white rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 group">
                        <h3 className="font-bold text-[#0B1221] mb-2 group-hover:text-[#0099ff] transition-colors text-sm">
                          {industry.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {industry.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2 - Industry Resources */}
                <div>
                  <h2 className="text-xl font-bold text-[#0B1221] mb-5 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Sektör Kaynakları
                  </h2>
                  <div className="space-y-3 mt-5">
                    {[
                      {
                        name: "Medikal Enjeksiyon Kalıplama",
                        link: "/resources/medical-injection-molding",
                      },
                      {
                        name: "Medikal Malzemeler",
                        link: "/resources/medical-materials",
                      },
                      {
                        name: "Havacılık Üretim Rehberi",
                        link: "/resources/aerospace-manufacturing-guide",
                      },
                      {
                        name: "Havacılık İşleme",
                        link: "/resources/aerospace-machining",
                      },
                      {
                        name: "EV/AV Otomotiv Rehberi",
                        link: "/resources/ev-av-automotive-guide",
                      },
                      {
                        name: "Sektör Vaka Çalışmaları",
                        link: "/resources/industry-case-studies",
                      },
                    ].map((resource, idx) => (
                      <Link
                        href={resource.link}
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0099ff] transition-colors cursor-pointer group">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full group-hover:scale-125 transition-transform"></div>
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Industry Certifications */}
                <div>
                  <h2 className="text-xl font-bold text-[#0B1221] mb-5 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Sektör Sertifikaları
                  </h2>
                  <div className="mt-5">
                    {/* ISO 9001 - Main Certification */}
                    <div className="bg-gradient-to-br from-[#96E92A]/10 to-transparent rounded-xl p-5 border border-[#96E92A]/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#96E92A]/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-[#96E92A]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#0B1221]">
                            ISO 9001
                          </h3>
                          <p className="text-xs text-gray-500">
                            Kalite Yönetim Sistemi
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Fasonly, ISO 9001 sertifikası ile uluslararası kalite
                        standartlarında üretim yapma yetkinliğine sahiptir.
                      </p>
                    </div>

                    {/* Additional Certifications Note */}
                    <div className="mt-4 p-4 bg-white/50 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        Tüm üretim süreçlerimiz ISO 9001:2015 standartlarına
                        uygun olarak yönetilmektedir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Dropdown - Bilgi Merkezi */}
        <div
          className="relative group"
          onMouseEnter={() => setIsResourcesHover(true)}
          onMouseLeave={() => setIsResourcesHover(false)}>
          <div className="flex flex-row items-center cursor-pointer group">
            <span className="flex flex-row items-center justify-center gap-2 hover:text-[#96E92A] relative text-sm xl:text-base">
              Bilgi Merkezi <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* Resources Dropdown - 4 Columns with Image */}
          <div
            className={`fixed left-0 right-0 top-20 bg-white text-[#0B1221] shadow-2xl transition-all duration-300
            ${isResourcesHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[-10px]"}`}>
            <div className="container mx-auto px-4 py-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1 - Design Tips, Toolkits, Guides */}
                <div className="space-y-6">
                  <div>
                    <Link href="/resources/design-tips">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Tasarım İpuçları
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Yaygın üretilebilirlik sorunları ve malzeme seçimi
                      hakkında tavsiyeler
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/toolkits">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Araç Setleri
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Parçalarınızı prototiplemeden seri üretime optimize edecek
                      kaynaklar
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/guides-reports">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Rehberler ve Trend Raporları
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Dijital üretim konularında derinlemesine rehberler ve
                      raporlar
                    </p>
                  </div>
                </div>

                {/* Column 2 - Partnerships, Design Aids, Events */}
                <div className="space-y-6">
                  <div>
                    <Link href="/resources/partnerships">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        İş Ortaklıkları
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Yenilikçi şirketlerden gerçek dünya başarı hikayeleri
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/design-aids">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Tasarım Yardımcıları
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Parça tasarımını geliştirmek için fiziksel araçlar ve
                      kaynaklar edinin
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/events">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Etkinlikler ve Fuarlar
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Sektör etkinliklerine katılın, isteğe bağlı veya canlı web
                      seminerleri
                    </p>
                  </div>
                </div>

                {/* Column 3 - Blog, Videos, FAQs, Educators */}
                <div className="space-y-6">
                  <div>
                    <Link href="/blog">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Blog
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Tasarım kaynakları, derinlemesine özellikler ve sektör
                      haberleri için kaynağınız
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/videos">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Videolar
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Tesislerimizi, teknolojilerimizi, malzeme seçimini ve daha
                      fazlasını keşfedin
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/faqs">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        SSS
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Hizmet hatlarımız genelinde sık sorulan sorulara yanıtlar
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/educators-students">
                      <h3 className="font-bold text-base text-[#0B1221] mb-2 hover:text-[#0099ff] transition-colors">
                        Eğitimciler ve Öğrenciler
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Sınıf ve geleceğin mühendisleri için kaynaklar
                    </p>
                  </div>
                </div>

                {/* Column 4 - Image with Description and Request Button */}
                <div className="bg-[#F0F8FF] rounded-xl p-5 border border-gray-100">
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-4xl">🎯</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-[#0B1221] mb-2">
                    Tasarım Küpü
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Yardımcı tasarım aracımız, enjeksiyon kalıplama için
                    parçalar tasarlarken dikkat edilmesi gereken çok ince veya
                    çok kalın parça özelliklerini, kötü boss'ları, doğru ve
                    yanlış kaburgaları ve diğer hususları gösterir.
                  </p>
                  <Link href="/resources/design-cube">
                    <button className="w-full bg-[#0B1221] hover:bg-[#1a2a3a] text-white font-medium py-2 rounded-lg transition-colors text-sm">
                      Tasarım Küpü İste
                    </button>
                  </Link>
                </div>
              </div>

              {/* Bottom Links - Manufacturing Glossary, Help Center, etc. */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6 flex-wrap">
                    <Link
                      href="/resources/glossary"
                      className="text-sm text-gray-500 hover:text-[#0099ff] transition-colors">
                      Üretim Sözlüğü
                    </Link>
                    <Link
                      href="/resources/help-center"
                      className="text-sm text-gray-500 hover:text-[#0099ff] transition-colors">
                      Yardım Merkezi
                    </Link>
                    <Link
                      href="/resources/product-life-cycle"
                      className="text-sm text-gray-500 hover:text-[#0099ff] transition-colors">
                      Ürün Yaşam Döngüsü
                    </Link>
                    <Link
                      href="/resources/product-releases"
                      className="text-sm text-gray-500 hover:text-[#0099ff] transition-colors">
                      Ürün Duyuruları
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RedirectButton
          title={"Anında Teklif Al"}
          url="/contact/quote-request"
          theme="BlueToGreen"
        />
      </div>

      {/* Desktop Login/Register - Hidden on mobile */}
      <div className="hidden lg:block">
        <RedirectButton
          title="Giriş Yap / Kayıt Ol"
          url="/auth/login"
          theme="GreenToBlue"
        />
      </div>

      {/* Mobile Hamburger Menu Button - Visible on mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-[#96E92A] transition-colors"
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Full-Screen Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-[#0B1221] z-[60] lg:hidden transition-transform duration-300 ease-in-out 
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10 h-20">
          <div className="flex-shrink-0">
            <Image
              src={"/Assets/Images/Logo.png"}
              width={200}
              height={200}
              alt="Fasonly Original Logo"
              className="w-32 h-auto"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#96E92A] transition-colors"
            aria-label="Close menu">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Menu Content - Full remaining height */}
        <div className="flex flex-col bg-[#0B1221] h-[calc(100vh-80px)] overflow-y-auto p-6">
          {/* Button Row - Anında Teklif Al & Login/Register side by side */}
          <div className="mb-8 grid grid-cols-2 gap-3">
            <RedirectButton
              title={"Anında Teklif Al"}
              url="/contact/quote-request"
              theme="BlueToGreen"
              style="w-full text-sm py-2.5"
            />
            <RedirectButton
              title="Giriş Yap / Kayıt Ol"
              url="/auth/login"
              theme="GreenToBlue"
              style="w-full text-sm py-2.5"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-1">
            {/* Fasonly with dropdown */}
            <div className="border-b border-white/10 py-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-[#96E92A] transition-colors">
                <span>Fasonly</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown items */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/10 ml-1 pt-2 pb-3">
                  <Link
                    href={"/mission"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    Misyonumuz
                  </Link>
                  <Link
                    href={"/blog"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    Blog
                  </Link>
                  <div>
                    <button
                      onClick={toggleMobileAbout}
                      className="flex items-center justify-between w-full py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                      <span>Hakkımızda</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isMobileAboutOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="pl-4 mt-1 flex flex-col gap-2 border-l-2 border-white/10 ml-2">
                        <div>
                          <h4 className="text-xs font-semibold text-[#96E92A] mb-1">
                            HAKKIMIZDA
                          </h4>
                          <div className="flex flex-col gap-1 mb-2">
                            <Link
                              href="/about/who-we-are"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Biz Kimiz
                            </Link>
                            <Link
                              href="/about/production-facility"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Üretim Tesisi
                            </Link>
                            <Link
                              href="/about/our-team"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Ekibimiz
                            </Link>
                            <Link
                              href="/about/our-customers"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Müşterilerimiz
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#96E92A] mb-1">
                            KURUMSAL
                          </h4>
                          <div className="flex flex-col gap-1 mb-2">
                            <Link
                              href="/about/certificates"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Sertifikalar
                            </Link>
                            <Link
                              href="/about/quality-policy"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Kalite Politikamız
                            </Link>
                            <Link
                              href="/about/sustainability"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Sürdürülebilirlik
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#96E92A] mb-1">
                            İLETİŞİM
                          </h4>
                          <div className="flex flex-col gap-1">
                            <Link
                              href="/contact/sakarya-facility"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Sakarya Tesisi
                            </Link>
                            <Link
                              href="/contact/quote-request"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Teklif Talebi
                            </Link>
                            <Link
                              href="/contact/careers"
                              onClick={closeMenu}
                              className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                              Kariyer
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={"/contact"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    İletişim
                  </Link>
                </div>
              </div>
            </div>

            {/* Hizmetler with dropdown - Mobile */}
            <div className="border-b border-white/10 py-2">
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-[#96E92A] transition-colors">
                <span>Hizmetler</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Services Dropdown items - Mobile */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/10 ml-1 pt-2 pb-3">
                  <div>
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Enjeksiyon Kalıplama
                    </h4>
                    <div className="flex flex-col gap-1 mb-3">
                      {[
                        {
                          name: "Plastik Enjeksiyon Kalıplama",
                          link: "/services/injection-molding/plastic-injection-molding",
                        },
                        {
                          name: "Sıvı Silikon Kauçuk Kalıplama",
                          link: "/services/injection-molding/liquid-silicone-rubber-molding",
                        },
                        {
                          name: "Kaplama Kalıplama",
                          link: "/services/injection-molding/overmolding",
                        },
                        {
                          name: "Gömme Parçalı Kalıplama",
                          link: "/services/injection-molding/insert-molding",
                        },
                        {
                          name: "Aile ve Çok Gözlü Kalıplama",
                          link: "/services/injection-molding/family-multi-cavity",
                        },
                        {
                          name: "Prototipleme",
                          link: "/services/injection-molding/prototyping",
                        },
                        {
                          name: "Seri Üretim",
                          link: "/services/injection-molding/production",
                        },
                        {
                          name: "Kalite",
                          link: "/services/injection-molding/quality",
                        },
                        {
                          name: "İkincil Operasyonlar",
                          link: "/services/injection-molding/secondary-operations",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      CNC İşleme
                    </h4>
                    <div className="flex flex-col gap-1 mb-3">
                      {[
                        {
                          name: "CNC Frezeleme",
                          link: "/services/cnc-machining/cnc-milling",
                        },
                        {
                          name: "CNC Tornalama",
                          link: "/services/cnc-machining/cnc-turning",
                        },
                        {
                          name: "Seri Üretim İşleme",
                          link: "/services/cnc-machining/production-machining",
                        },
                        {
                          name: "Diş Açma Seçenekleri",
                          link: "/services/cnc-machining/threading-options",
                        },
                        {
                          name: "Kalite",
                          link: "/services/cnc-machining/quality",
                        },
                        {
                          name: "Yüzey İşlem Seçenekleri",
                          link: "/services/cnc-machining/finishing-options",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      3D Baskı
                    </h4>
                    <div className="flex flex-col gap-1 mb-3">
                      {[
                        {
                          name: "Metal 3D Baskı",
                          link: "/services/3d-printing/metal-3d-printing",
                        },
                        {
                          name: "Stereolitografi",
                          link: "/services/3d-printing/stereolithography",
                        },
                        {
                          name: "Multi Jet Fusion",
                          link: "/services/3d-printing/multi-jet-fusion",
                        },
                        {
                          name: "Seçici Lazer Sinterleme",
                          link: "/services/3d-printing/selective-laser-sintering",
                        },
                        {
                          name: "PolyJet",
                          link: "/services/3d-printing/polyjet",
                        },
                        {
                          name: "Gelişmiş Fotopolimerler",
                          link: "/services/3d-printing/advanced-photopolymers",
                        },
                        {
                          name: "Fused Deposition Modeling",
                          link: "/services/3d-printing/fused-deposition-modeling",
                        },
                        {
                          name: "Seri Üretim",
                          link: "/services/3d-printing/production",
                        },
                        {
                          name: "Büyük Format",
                          link: "/services/3d-printing/large-format",
                        },
                        {
                          name: "Kalite",
                          link: "/services/3d-printing/quality",
                        },
                        {
                          name: "Yüzey İşlem Seçenekleri",
                          link: "/services/3d-printing/finishing-options",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Sac Metal İşleme
                    </h4>
                    <div className="flex flex-col gap-1">
                      {[
                        {
                          name: "Lazer Kesim",
                          link: "/services/sheet-metal-fabrication/laser-cutting",
                        },
                        {
                          name: "Zımbalama",
                          link: "/services/sheet-metal-fabrication/punching",
                        },
                        {
                          name: "Şekillendirme ve Bükme",
                          link: "/services/sheet-metal-fabrication/forming-bending",
                        },
                        {
                          name: "Birleştirilmiş Montajlar",
                          link: "/services/sheet-metal-fabrication/assemblies",
                        },
                        {
                          name: "Prototipleme",
                          link: "/services/sheet-metal-fabrication/prototyping",
                        },
                        {
                          name: "Seri Üretim",
                          link: "/services/sheet-metal-fabrication/production",
                        },
                        {
                          name: "Tasarım Kılavuzları",
                          link: "/services/sheet-metal-fabrication/design-guidelines",
                        },
                        {
                          name: "Kalite",
                          link: "/services/sheet-metal-fabrication/quality",
                        },
                        {
                          name: "Yüzey İşlem Seçenekleri",
                          link: "/services/sheet-metal-fabrication/finishing-options",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Endüstriler with dropdown - Mobile */}
            <div className="border-b border-white/10 py-2">
              <button
                onClick={toggleMobileIndustries}
                className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-[#96E92A] transition-colors">
                <span>Endüstriler</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileIndustriesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Industries Dropdown items - Mobile */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isMobileIndustriesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/10 ml-1 pt-2 pb-3">
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Hizmet Verdiğimiz Sektörler
                    </h4>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: "Medikal", link: "/industries/medical" },
                        {
                          name: "Havacılık ve Uzay",
                          link: "/industries/aerospace",
                        },
                        { name: "Otomotiv", link: "/industries/automotive" },
                        { name: "Robotik", link: "/industries/robotics" },
                        {
                          name: "Tüketici Elektroniği",
                          link: "/industries/consumer-electronics",
                        },
                        {
                          name: "Endüstriyel Ekipman",
                          link: "/industries/industrial-equipment",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Sektör Kaynakları
                    </h4>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          name: "Medikal Enjeksiyon Kalıplama",
                          link: "/resources/medical-injection-molding",
                        },
                        {
                          name: "Medikal Malzemeler",
                          link: "/resources/medical-materials",
                        },
                        {
                          name: "Havacılık Üretim Rehberi",
                          link: "/resources/aerospace-manufacturing-guide",
                        },
                        {
                          name: "Havacılık İşleme",
                          link: "/resources/aerospace-machining",
                        },
                        {
                          name: "EV/AV Otomotiv Rehberi",
                          link: "/resources/ev-av-automotive-guide",
                        },
                        {
                          name: "Sektör Vaka Çalışmaları",
                          link: "/resources/industry-case-studies",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Sektör Sertifikaları
                    </h4>
                    <div className="flex flex-col gap-2">
                      <Link
                        href={"/about/certificates"}
                        onClick={closeMenu}
                        className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                        ISO 9001:2015
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilgi Merkezi with dropdown - Mobile */}
            <div className="border-b border-white/10 py-2">
              <button
                onClick={toggleMobileResources}
                className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-[#96E92A] transition-colors">
                <span>Bilgi Merkezi</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileResourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Resources Dropdown items - Mobile */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isMobileResourcesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/10 ml-1 pt-2 pb-3">
                  <div>
                    <Link href="/resources/design-tips" onClick={closeMenu}>
                      <h4 className="text-xs font-semibold text-[#96E92A] mb-1 hover:text-white transition-colors">
                        Tasarım İpuçları
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 mb-2">
                      Yaygın üretilebilirlik sorunları ve malzeme seçimi
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/toolkits" onClick={closeMenu}>
                      <h4 className="text-xs font-semibold text-[#96E92A] mb-1 hover:text-white transition-colors">
                        Araç Setleri
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 mb-2">
                      Parçalarınızı prototiplemeden seri üretime optimize edin
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/guides-reports" onClick={closeMenu}>
                      <h4 className="text-xs font-semibold text-[#96E92A] mb-1 hover:text-white transition-colors">
                        Rehberler ve Trend Raporları
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 mb-2">
                      Dijital üretim konularında derinlemesine rehberler
                    </p>
                  </div>
                  <div>
                    <Link href="/blog" onClick={closeMenu}>
                      <h4 className="text-xs font-semibold text-[#96E92A] mb-1 hover:text-white transition-colors">
                        Blog
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 mb-2">
                      Tasarım kaynakları ve sektör haberleri
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/videos" onClick={closeMenu}>
                      <h4 className="text-xs font-semibold text-[#96E92A] mb-1 hover:text-white transition-colors">
                        Videolar
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 mb-2">
                      Tesislerimizi, teknolojilerimizi keşfedin
                    </p>
                  </div>
                  <div>
                    <Link href="/resources/design-cube" onClick={closeMenu}>
                      <h4 className="text-xs font-semibold text-[#96E92A] mb-1 hover:text-white transition-colors">
                        Tasarım Küpü
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 mb-2">
                      Enjeksiyon kalıplama için yardımcı tasarım aracı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
