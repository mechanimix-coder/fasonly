"use client";
import Image from "next/image";
import { ChevronDown, Menu, X, CheckCircle } from "lucide-react";
import { RedirectButton } from "../UI/Buttons";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);
  const [isIndustriesHover, setIsIndustriesHover] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsDropdownOpen(false);
      setIsMobileIndustriesOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  const toggleMobileIndustries = () => {
    setIsMobileIndustriesOpen(!isMobileIndustriesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileIndustriesOpen(false);
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
      className={`flex z-50 px-4 py-5 md:px-6 flex-row fixed top-0 w-full items-center justify-between bg-[#0B1221] text-white h-20 md:h-auto transition-transform duration-300 ease-in-out
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
          <div className="invisible flex flex-col group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 absolute left-0 w-40 top-8 bg-[#0B1221] text-white shadow-xl rounded-md overflow-hidden">
            <Link
              href="/mission"
              className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A]">
              Our Mission
            </Link>
            <Link
              href="/blog"
              className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A]">
              Blog
            </Link>
            <Link
              href="/about"
              className="p-3 w-full cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A]">
              About Us
            </Link>
            <Link
              href="/contact"
              className="p-3 cursor-pointer hover:bg-white/15 transition-all hover:text-[#96E92A]">
              Contact
            </Link>
          </div>
        </div>

        {/* Services with Full-Width Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsServicesHover(true)}
          onMouseLeave={() => setIsServicesHover(false)}>
          <div className="flex flex-row items-center cursor-pointer group">
            <span className="flex flex-row items-center justify-center gap-2 hover:text-[#96E92A] relative text-sm xl:text-base">
              Services <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* Full-Width Services Dropdown */}
          <div
            className={`fixed left-0 right-0 top-20 bg-[#F0F8FF] text-[#0B1221] shadow-2xl transition-all duration-300
            ${isServicesHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[-10px]"}`}>
            <div className="container mx-auto px-4 py-8">
              {/* Top Row - 4 Service Cards */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: "CNC İşleme Hizmetleri",
                    desc: "Yüksek hassasiyetli CNC işleme teknolojileriyle prototipten seri üretime kadar kaliteli, hızlı ve güvenilir üretim.",
                    image: "/Assets/Images/parts/CNC.png",
                    url: "/services",
                  },
                  {
                    title: "Sac Metal Parça Üretimi",
                    desc: "Lazer kesim, büküm, delme ve kaynak operasyonlarını entegre ederek yüksek hassasiyetli sac metal parçalar üretir.",
                    image: "/Assets/Images/parts/metal.png",
                    url: "/services",
                  },
                  {
                    title: "3D Baskı Hizmetleri",
                    desc: "Fonksiyonel prototipler ve düşük adetli üretimler için, farklı malzeme ve baskı teknolojileriyle hızlı ve mühendislik odaklı 3D baskı çözümleri sunuyoruz.",
                    image: "/Assets/Images/parts/3d.png",
                    url: "/services",
                  },
                  {
                    title: "Plastik Enjeksiyon ile Parça Üretimi",
                    desc: "Plastik enjeksiyon üretiminde mühendislik hassasiyeti ve hızlı teslimat ile düşük adetli prototip üretimlerinden seri imalata kadar tüm süreçler dijital olarak yönetilir.",
                    image: "/Assets/Images/parts/plastic.png",
                    url: "/services",
                  },
                ].map((service, index) => (
                  <Link
                    href={service.url}
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                    <div className="h-32 flex items-center justify-center mb-4">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-[#0B1221] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Bottom Row - 3 Support Cards */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    title: "Tasarım ve Mühendislik Desteği",
                    icon: "/Assets/Images/Services/1.png",
                    url: "/services",
                  },
                  {
                    title: "Canlı Üretim Takibi ve Kontrolü",
                    icon: "/Assets/Images/Services/2.png",
                    url: "/services",
                  },
                  {
                    title: "Hızlı ve Güvenilir Tekliflendirme",
                    icon: "/Assets/Images/Services/3.png",
                    url: "/services",
                  },
                ].map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-[#0B1221]">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industries with Full-Width Dropdown - UPDATED with 2 columns for Industries We Serve */}
        <div
          className="relative group"
          onMouseEnter={() => setIsIndustriesHover(true)}
          onMouseLeave={() => setIsIndustriesHover(false)}>
          <div className="flex flex-row items-center cursor-pointer group">
            <span className="flex flex-row items-center justify-center gap-2 hover:text-[#96E92A] relative text-sm xl:text-base">
              Endüstriler <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* Full-Width Industries Dropdown */}
          <div
            className={`fixed left-0 right-0 top-20 bg-[#F0F8FF] text-[#0B1221] shadow-2xl transition-all duration-300
            ${isIndustriesHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[-10px]"}`}>
            <div className="container mx-auto px-4 py-10">
              {/* Three Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - Industries We Serve (White background cards in 2 columns) */}
                <div>
                  <h2 className="text-xl font-bold text-[#0B1221] mb-5 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Industries We Serve
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    {[
                      {
                        title: "Medical",
                        desc: "Accelerated development of medical devices and health care products",
                      },
                      {
                        title: "Aerospace",
                        desc: "High-quality components from early prototyping to hot-fire testing to launch",
                      },
                      {
                        title: "Automotive",
                        desc: "Rapid prototyping and ramp-up production for traditional, electric, and autonomous vehicles",
                      },
                      {
                        title: "Robotics",
                        desc: "Complex end-use production parts for robotics and automation applications",
                      },
                      {
                        title: "Consumer Electronics",
                        desc: "Functional prototyping and on-demand production of consumer and computer electronics parts",
                      },
                      {
                        title: "Industrial Equipment",
                        desc: "Durable jigs, fixtures, and other components to streamline assembly and reduce production costs",
                      },
                    ].map((industry, idx) => (
                      <Link
                        href="/industries"
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
                    Industry Resources
                  </h2>
                  <div className="space-y-3 mt-5">
                    {[
                      "Medical Injection Molding",
                      "Medical Materials",
                      "Aerospace Manufacturing Guide",
                      "Aerospace Machining",
                      "EV/AV Automotive Guide",
                      "Industry Case Studies",
                    ].map((resource, idx) => (
                      <Link
                        href="/resources"
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0099ff] transition-colors cursor-pointer group">
                        <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full group-hover:scale-125 transition-transform"></div>
                        {resource}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Industry Certifications (ISO 9001 highlighted) */}
                <div>
                  <h2 className="text-xl font-bold text-[#0B1221] mb-5 pb-2 border-b-2 border-[#96E92A] inline-block">
                    Industry Certifications
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

        <Link
          href={"/gallery"}
          className="cursor-pointer hover:text-[#96E92A] relative group text-sm xl:text-base">
          Bilgi Merkezi
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href={"/pricing"}
          className="cursor-pointer hover:text-[#96E92A] relative group text-sm xl:text-base">
          Malzemeler
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <RedirectButton title={"Anında Teklif Al"} url="" theme="BlueToGreen" />
      </div>

      {/* Desktop Login/Register - Hidden on mobile */}
      <div className="hidden lg:block">
        <RedirectButton title="Log in / Register" url="" theme="GreenToBlue" />
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
              url=""
              theme="BlueToGreen"
              style="w-full text-sm py-2.5"
            />
            <RedirectButton
              title="Log in / Register"
              url=""
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
                className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 flex flex-col gap-1 border-l-2 border-white/10 ml-1">
                  <Link
                    href={"/mission"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    Our Mission
                  </Link>
                  <Link
                    href={"/blog"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    Blog
                  </Link>
                  <Link
                    href={"/about"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    About Us
                  </Link>
                  <Link
                    href={"/contact"}
                    onClick={closeMenu}
                    className="py-2 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href={"/services"}
              onClick={closeMenu}
              className="py-3 text-lg font-medium cursor-pointer hover:text-[#96E92A] transition-colors border-b border-white/10 block">
              Services
            </Link>

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
                      Industries We Serve
                    </h4>
                    <div className="flex flex-col gap-2">
                      {[
                        "Medical",
                        "Aerospace",
                        "Automotive",
                        "Robotics",
                        "Consumer Electronics",
                        "Industrial Equipment",
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={"/industries"}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Industry Resources
                    </h4>
                    <div className="flex flex-col gap-2">
                      {[
                        "Medical Injection Molding",
                        "Medical Materials",
                        "Aerospace Manufacturing Guide",
                        "Aerospace Machining",
                        "EV/AV Automotive Guide",
                        "Industry Case Studies",
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={"/resources"}
                          onClick={closeMenu}
                          className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#96E92A] mb-2">
                      Industry Certifications
                    </h4>
                    <div className="flex flex-col gap-2">
                      <Link
                        href={"/certifications"}
                        onClick={closeMenu}
                        className="py-1 cursor-pointer hover:text-[#96E92A] transition-colors text-gray-300 text-sm">
                        ISO 9001:2015
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={"/gallery"}
              onClick={closeMenu}
              className="py-3 text-lg font-medium cursor-pointer hover:text-[#96E92A] transition-colors border-b border-white/10 block">
              Bilgi Merkezi
            </Link>

            <Link
              href={"/pricing"}
              onClick={closeMenu}
              className="py-3 text-lg font-medium cursor-pointer hover:text-[#96E92A] transition-colors border-b border-white/10 block">
              Malzemeler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
