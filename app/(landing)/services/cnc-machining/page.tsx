"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Hint from "@/component/UI/Hint";
import MetalsSection from "@/component/landing/MetalsSection";
import FactoryVsNetwork from "@/component/landing/FactoryVsNetwork";
import GuideDownload from "@/component/landing/GuideDownload";
import Accordion from "@/component/landing/Accordion";

export default function InjectionMoldingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      id: 1,
      title: "How much does injection molding cost?",
      content:
        "Injection molding costs vary based on several factors including part complexity, material selection, tooling requirements, and production volume. Contact us for a detailed quote tailored to your specific project needs.",
    },
    {
      id: 2,
      title: "Do you do production molding?",
      content:
        "Yes, we offer both prototyping and production molding services. Our on-demand manufacturing process is designed to meet your production needs with scientific molding, in-process CMM inspections, and a full suite of secondary operations.",
    },
    {
      id: 3,
      title: "What are your tolerances for molded parts?",
      content:
        "Our standard tolerances for molded parts are +/-0.003 inches plus resin tolerance (in./in.). For tighter tolerance requirements, please contact our engineering team to discuss your specific needs.",
    },
    {
      id: 4,
      title: "What is the maximum part size for injection molding?",
      content:
        "The maximum part size depends on the specific material and design requirements. Our team can evaluate your 3D CAD file and provide guidance on manufacturability and size limitations.",
    },
  ];

  const plasticMaterials = [
    {
      id: "abs",
      name: "ABS",
      description:
        "ABS (Acrylonitrile Butadiene Styrene) is a tough, impact-resistant thermoplastic with good mechanical properties and excellent surface finish. It is widely used for automotive parts, consumer goods, and electronic housings due to its durability and ease of machining.",
      image: "/",
    },
    {
      id: "acetal",
      name: "Acetal",
      description:
        "Acetal (POM) is a high-strength, low-friction engineering plastic with excellent dimensional stability and wear resistance. It is commonly used for gears, bearings, bushings, and other precision mechanical components.",
      image: "/",
    },
    {
      id: "cpvc",
      name: "CPVC",
      description:
        "CPVC (Chlorinated Polyvinyl Chloride) offers excellent chemical resistance and can withstand higher temperatures than standard PVC. It is commonly used for industrial piping, chemical processing, and hot water systems.",
      image: "/",
    },
    {
      id: "delrin",
      name: "Delrin",
      description:
        "Delrin (Acetal Homopolymer) is a high-performance engineering plastic known for its high stiffness, low friction, and excellent dimensional stability. It is ideal for precision parts like gears, cams, and slides.",
      image: "/",
    },
    {
      id: "hdpe",
      name: "HDPE",
      description:
        "HDPE (High-Density Polyethylene) is a durable, chemical-resistant plastic with good impact strength and low moisture absorption. It is widely used for containers, tanks, cutting boards, and outdoor applications.",
      image: "/",
    },
    {
      id: "nylon",
      name: "Nylon",
      description:
        "Nylon (Polyamide) is a strong, wear-resistant engineering plastic with good chemical resistance and high impact strength. It is commonly used for gears, bushings, wear pads, and structural components.",
      image: "/",
    },
    {
      id: "peek",
      name: "PEEK",
      description:
        "PEEK (Polyetheretherketone) is a high-performance thermoplastic with exceptional mechanical properties, chemical resistance, and thermal stability. It is ideal for aerospace, medical implants, and high-temperature applications.",
      image: "/",
    },
    {
      id: "pei",
      name: "PEI",
      description:
        "PEI (Polyetherimide) is a high-strength, heat-resistant engineering plastic with excellent electrical insulation properties. Commonly known as Ultem, it is used in aerospace, automotive, and medical devices.",
      image: "/",
    },
    {
      id: "pet",
      name: "PET",
      description:
        "PET (Polyethylene Terephthalate) is a strong, lightweight plastic with good chemical resistance and dimensional stability. It is commonly used for food containers, beverage bottles, and packaging applications.",
      image: "/",
    },
    {
      id: "pmma",
      name: "PMMA (Acrylic)",
      description:
        "PMMA (Polymethyl Methacrylate), also known as acrylic or Plexiglas, is a transparent thermoplastic with excellent optical clarity, UV resistance, and good weatherability. It is used for displays, lenses, and signage.",
      image: "/",
    },
    {
      id: "polycarbonate",
      name: "Polycarbonate",
      description:
        "Polycarbonate (PC) is a tough, transparent engineering plastic with high impact resistance and good dimensional stability. It is widely used for bulletproof glass, eyewear lenses, and electronic enclosures.",
      image: "/",
    },
    {
      id: "polypropylene",
      name: "Polypropylene",
      description:
        "Polypropylene (PP) is a lightweight, chemical-resistant thermoplastic with good fatigue resistance and low moisture absorption. It is commonly used for automotive parts, containers, and living hinges.",
      image: "/",
    },
    {
      id: "polystyrene",
      name: "Polystyrene",
      description:
        "Polystyrene (PS) is a rigid, economical thermoplastic with good dimensional stability and ease of machining. It is widely used for disposable cutlery, CD cases, and laboratory equipment.",
      image: "/",
    },
    {
      id: "ppsu",
      name: "PPSU",
      description:
        "PPSU (Polyphenylsulfone) is a high-performance engineering plastic with excellent thermal stability, impact strength, and hydrolysis resistance. It is commonly used in medical devices, aircraft components, and food processing equipment.",
      image: "/",
    },
    {
      id: "psu",
      name: "PSU",
      description:
        "PSU (Polysulfone) is a rigid, high-strength engineering plastic with excellent thermal and chemical stability. It is used in medical instruments, automotive components, and electrical applications.",
      image: "/",
    },
    {
      id: "ptfe",
      name: "PTFE",
      description:
        "PTFE (Polytetrafluoroethylene), also known as Teflon, has an extremely low coefficient of friction and excellent chemical resistance. It is used for non-stick coatings, seals, gaskets, and bearings.",
      image: "/",
    },
    {
      id: "pvc",
      name: "PVC",
      description:
        "PVC (Polyvinyl Chloride) is a versatile, durable, and chemical-resistant plastic available in rigid and flexible forms. It is widely used for pipes, fittings, electrical insulation, and construction materials.",
      image: "/",
    },
  ];
  const metalsData = [
    {
      id: "aluminum",
      name: "Aluminum",
      description:
        "Aluminum is a popular choice for machining due to its low density, good mechanical properties, high thermal and electrical conductivity, and resistance to corrosion. Aluminum alloys, such as 6061-T651, 7075-T651, and 2024-T351, are commonly used in CNC machining because they offer a good balance of strength, machinability, and cost.",
      image: "/",
    },
    {
      id: "brass",
      name: "Brass",
      description:
        "Brass is an alloy of copper and zinc, known for its excellent machinability, corrosion resistance, and attractive gold-like appearance. It is commonly used for fittings, valves, and decorative components.",
      image: "/",
    },
    {
      id: "copper",
      name: "Copper",
      description:
        "Copper offers exceptional electrical and thermal conductivity, making it ideal for electrical components, heat exchangers, and plumbing applications. It has good corrosion resistance and is easily machined.",
      image: "/",
    },
    {
      id: "stainless-steel",
      name: "Stainless Steel",
      description:
        "Stainless steel is known for its excellent corrosion resistance, high strength, and durability. It is widely used in medical devices, food processing equipment, and automotive components.",
      image: "/",
    },
    {
      id: "steel-alloy",
      name: "Steel Alloy",
      description:
        "Alloy steel contains additional elements like chromium, nickel, and molybdenum to enhance strength, hardness, and wear resistance. It is commonly used in gears, shafts, and structural components.",
      image: "/",
    },
    {
      id: "steel-mild",
      name: "Steel Mild Low Carbon",
      description:
        "Mild steel (low carbon steel) is ductile, machinable, and weldable, making it ideal for general engineering applications, brackets, frames, and structural parts.",
      image: "/",
    },
    {
      id: "titanium",
      name: "Titanium",
      description:
        "Titanium offers an excellent strength-to-weight ratio, exceptional corrosion resistance, and biocompatibility. It is widely used in aerospace, medical implants, and high-performance automotive applications.",
      image: "/",
    },
  ];

  const faqs = [
    {
      question: "How much does injection molding cost?",
      answer:
        "Injection molding costs vary based on several factors including part complexity, material selection, tooling requirements, and production volume. Contact us for a detailed quote tailored to your specific project needs.",
    },
    {
      question: "Do you do production molding?",
      answer:
        "Yes, we offer both prototyping and production molding services. Our on-demand manufacturing process is designed to meet your production needs with scientific molding, in-process CMM inspections, and a full suite of secondary operations.",
    },
    {
      question: "What are your tolerances for molded parts?",
      answer:
        "Our standard tolerances for molded parts are +/-0.003 inches plus resin tolerance (in./in.). For tighter tolerance requirements, please contact our engineering team to discuss your specific needs.",
    },
    {
      question: "What is the maximum part size for injection molding?",
      answer:
        "The maximum part size depends on the specific material and design requirements. Our team can evaluate your 3D CAD file and provide guidance on manufacturability and size limitations.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Company logos data
  const companyLogos = [
    {
      name: "Antek",
      logo: "/Assets/Images/brands/antek.png",
    },
    {
      name: "Antgroup",
      logo: "/Assets/Images/brands/antgroup.png",
    },
    {
      name: "Marmaram",
      logo: "/Assets/Images/brands/marmaram.png",
    },
    {
      name: "Mechanimix",
      logo: "/Assets/Images/brands/mechanimix.png",
    },
    {
      name: "MRM",
      logo: "/Assets/Images/brands/mrm.png",
    },
  ];

  return (
    <div className="w-full pt-10 bg-white">
      {/* Hero Section - Two Columns */}
      <div className="w-full bg-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
                Çevrimiçi CNC İşleme Hizmeti
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                İşlenmiş prototipler ve üretim parçaları 1 gün kadar kısa
                sürede. Bugün çevrimiçi teklif talep edin.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Get Instant Quote
                </button>
                <button className="flex items-center gap-2 text-[#0B1221] font-semibold hover:text-[#0099ff] transition-colors duration-300">
                  Malzemeleri İncele
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Certifications Text */}
              <p className="text-sm text-gray-500">
                Sertifikalar: ISO 9001:2015 | CTQ Denetimleri | ITAR
              </p>
            </div>

            {/* Right Column - Image and Stats */}
            <div>
              <div className="relative w-full h-80 rounded-2xl overflow-hidden  mb-8">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/cnc-hero.webp"
                    }
                    alt="Injection Molding"
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-[#0B1221]">
                    50,000+
                  </div>
                  <p className="text-xs text-gray-500">Aylık Üretilen Parça</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-[#0B1221]">
                    100+
                  </div>
                  <p className="text-xs text-gray-500">
                    Hizmet Verilen Ürün Geliştirici
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-[#0B1221]">
                    100+
                  </div>
                  <p className="text-xs text-gray-500">
                    Plastic and elastomeric materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Section - Logos with Icons */}
      <div className="w-full bg-[#F0F8FF] py-12">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            DESTEK VERDİĞİMİZ YENİLİKÇİ ŞİRKETLER
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {companyLogos.map((company, idx) => (
              <div key={idx} className="relative w-32 h-12">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CNC Machining Capabilities Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            CNC Machining Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - CNC Milling */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">⚙️</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Milling
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  CNC milling is a subtractive manufacturing process that uses
                  3-axis milling and 5-axis indexed milling processes to cut
                  solid plastic and metal blocks into final parts.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/capabilities/cnc-milling"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Capabilities →
                  </Link>
                  <Link
                    href="/design-guidelines/cnc-milling"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Design Guidelines →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 - CNC Turning */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🔧</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  CNC Turning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  CNC turning with live tooling combines both lathe and mill
                  capabilities to machine parts with cylindrical features from
                  metal rod stock.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/capabilities/cnc-turning"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Capabilities →
                  </Link>
                  <Link
                    href="/design-guidelines/cnc-turning"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Design Guidelines →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - Protolabs Network */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
                <div className="flex items-center justify-center h-full">
                  <span className="text-5xl">🌐</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Protolabs Network
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Our manufacturing network provides advanced CNC machining
                  capabilities like tighter tolerances, volume pricing, and
                  anodizing options.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/capabilities/network"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Capabilities →
                  </Link>
                  <Link
                    href="/design-guidelines/network"
                    className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 w-fit">
                    Design Guidelines →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CNC Machining Services for End-Use Parts Section - Centered */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-4">
              CNC Machining Services for End-Use Parts
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Get high-quality machined parts faster with our expanded automated
              CNC milling—parts ready in as fast as 4 days
            </p>
            <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Metals section */}
      <MetalsSection title="Metals" metals={metalsData} />
      {/* Plastics section */}
      <MetalsSection title="Plastics" metals={plasticMaterials} />

      {/* More Machining Materials Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10">
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🔧</span>
              </div>
              {/* Uncomment below to add actual image */}
              {/* <Image
          src="/Assets/Images/more-machining-materials.jpg"
          alt="More Machining Materials"
          fill
          className="object-cover"
        /> */}
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1221] mb-4">
                More Machining Materials Available Through the Network
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Not seeing the material you're looking for? We have added 24 new
                options available through the Protolabs Network.
              </p>
              <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Browse Materials
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* tables section */}
      <FactoryVsNetwork />

      <Hint />

      {/* Surface Finish and Post-Processing Options Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Surface Finish Options */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-4">
                Surface Finish and <br />
                Post-Processing Options
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Protolabs offers a variety of CNC machining surface finishing
                options to meet your part requirements. More advanced coating
                and plating options are also available.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Surface Finish Options
              </h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Edges broken with tool marks visible
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Edges broken with light bead blasting
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Sharp edges (tool marks visible)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Coating and Plating Options
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Anodizing
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Chromate coating
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Powder coating
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Zinc coating
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#96E92A] rounded-full"></span>
                  Nickel plating
                </li>
              </ul>
            </div>

            {/* Right Column - Image / Illustration */}
            <div className="relative w-full h-80 md:h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl block mb-4">🔧</span>
                <p className="text-gray-500 text-sm">
                  Surface Finish Illustration
                </p>
              </div>
              {/* Uncomment below to add actual image */}
              {/* <Image
          src="/Assets/Images/surface-finish.jpg"
          alt="Surface Finish Options"
          fill
          className="object-cover"
        /> */}
            </div>
          </div>

          {/* Learn More Link */}
          <div className="mt-10 text-left lg:text-left">
            <button className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
              Learn more about post-processing options for CNC machining →
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Custom CNC Machining Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Why Choose Us for Custom CNC Machining?
          </h2>

          {/* Features Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Fast and Reliable Delivery */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Fast and Reliable Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Iterate part designs quickly and accelerate product development
                with quick-turn parts. Our automated design analysis will help
                spot any difficult to machine features before your design is
                sent to the manufacturing floor and save you from costly reworks
                further down the product development cycle.
              </p>
            </div>

            {/* Card 2 - Manufacturing Analysis and Online Quotes */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Manufacturing Analysis and Online Quotes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When you upload your 3D CAD file to request a quote, we'll
                analyze your part geometry to identify any features that may be
                difficult to machine such as tall, thin walls or holes that
                cannot be threaded.
              </p>
            </div>

            {/* Card 3 - Domestic Production and Support */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Domestic Production and Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For parts that need to meet ITAR regulations, partner with a
                reliable US manufacturer to avoid the risk of shipping parts
                abroad. You can also call or email us at any time and we'll help
                with ordering parts, design feedback, material recommendations,
                and answer any questions.
              </p>
            </div>

            {/* Card 4 - Infinite Capacity */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Infinite Capacity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce downtime and alleviate pressure on your in-house
                machining by using our automated process, which provides
                on-demand, unlimited manufacturing capacity.
              </p>
            </div>

            {/* Card 5 - Material Selection */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Material Selection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We stock more than 30 engineering-grade plastic and metal
                materials that are suitable for various part applications and
                industries. Materials range from plastics like ABS,
                polycarbonate, nylon, and PEEK to aluminum, stainless steel,
                platinum, and copper.
              </p>
            </div>

            {/* Card 6 - Advanced Capabilities */}
            <div className="group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3 group-hover:text-[#0099ff] transition-colors">
                Advanced Capabilities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Benefit from cost-effective pricing by using our manufacturing
                network, which offers expanded production capabilities such as
                tighter tolerances, volume discounts, and more material choices.
                Gain flexibility with a mix of international and local vendors
                for everything from prototypes to final products. Plus, access
                extra finishes like smoother surfaces, brushed finishes, black
                oxide, and the option for custom requests.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Text Left, Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-6 leading-tight">
                What is CNC Machining and How Does it Work?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CNC machining is an automated manufacturing process that
                  transforms a solid block or rod of material into a part using
                  end mills. The end mills are controlled by software (G-code)
                  which references a 3D CAD model to reduce the stock material
                  into a desired geometry. Parts can be manufactured relatively
                  quickly due to the level of automation.
                </p>
                <p>
                  There are many types of CNC machines, which include CNC
                  milling and CNC turning. CNC machining is a suitable
                  manufacturing process for one-off prototypes or custom
                  components as well as mid-volume production quantities.
                </p>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-[#0099ff] font-semibold hover:text-[#96E92A] transition-colors group">
                Check out our guide to CNC machining
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    CNC Machining Explained
                  </p>
                  <p className="text-gray-300 text-sm mt-1">Watch the video</p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>
          </div>

          {/* Row 2 - Two Text Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4">
                How Does CNC Machining Work?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                CNC machining works by converting a 3D CAD model into a set of
                computer instructions (G-code) that guide the cutting tools. The
                machine removes material from a solid block or rod with
                precision, creating the desired shape. This subtractive
                manufacturing process is highly accurate and repeatable, making
                it ideal for complex geometries and tight tolerances.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mb-4">
                Types of CNC Machines
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Common types of CNC machines include CNC milling machines, which
                use rotating cutting tools to remove material from a stationary
                workpiece, and CNC lathes, which rotate the workpiece against a
                stationary cutting tool. Other types include routers, plasma
                cutters, and EDM machines, each suited for different materials
                and applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <GuideDownload />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Video Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Watch Overview
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Get an Instant CNC Machining Quote
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Upload a 3D CAD file of your machined part and in seconds to
                hours, we'll send you manufacturing analysis and quote specific
                to your request. In the automated factory, within your quote you
                can modify materials and quantities, see pricing updates in
                real-time, and assign threading with a click of your mouse. In
                the semi-automated workflow that accepts technical drawings,
                you'll receive a quote specific to the expanded needs you've
                uploaded.
              </p>
              <button className="inline-flex items-center gap-2 text-[#0099ff] font-semibold hover:text-[#96E92A] transition-colors duration-300 group">
                View a Sample Quote
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Row 2 - Content Left, Video Right (Reverse, no button) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Tour Our Automated CNC Machine Shop
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Take a quick tour through our 215,000 sq. ft. CNC machining
                facility in Minnesota to see how we leverage digitally-enabled
                processes to achieve industry-best lead times.
              </p>
            </div>

            {/* Right Column - Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0B1221] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Watch Overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faqs section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl w-full flex  justify-center font-bold text-[#0B1221] mb-10">
            CNC Machining FAQs
          </h2>
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
