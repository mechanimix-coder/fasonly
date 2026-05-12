"use client";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { RedirectButton } from "../UI/Buttons";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down - hide header
        setVisible(false);
      } else {
        // Scrolling up - show header
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

        <Link
          href={"/reviews"}
          className="cursor-pointer hover:text-[#96E92A] relative group text-sm xl:text-base">
          Endüstriler
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#96E92A] transition-all duration-300 group-hover:w-full"></span>
        </Link>

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

            <Link
              href={"/reviews"}
              onClick={closeMenu}
              className="py-3 text-lg font-medium cursor-pointer hover:text-[#96E92A] transition-colors border-b border-white/10 block">
              Endüstriler
            </Link>

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
