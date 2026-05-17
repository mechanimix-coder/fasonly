"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Users,
  Beaker,
  Layers,
  Wrench,
  ClipboardCheck,
  Quote,
  Download,
  Mail,
  MapPin,
  ChevronDown,
  Clock,
  Clipboard,
  Package,
  Briefcase,
  Check,
  Play,
  Pause,
} from "lucide-react";
import Blog from "@/component/landing/Blog";
import Hint from "@/component/UI/Hint";
import Accordion from "@/component/landing/Accordion";

export default function InjectionMoldingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
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
                Enjeksiyon Kalıplama
                <br />
                Hizmetleri
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Özel parçalar için enjeksiyon kalıplama hizmeti. Prototipler ve
                talep üzerine üretim parçaları için 1 gün kadar kısa sürede
                teklif alın.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Get a Quote
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
                    src={"/Assets/Images/services/injection-molding/hero.png"}
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

      {/* Description Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              Daha fazla esneklik, daha tutarlı parçalar ve kalifikasyon
              sürecini kolaylaştırma. Prototiplemeden talebe dayalı üretime
              geçiş yaparak uygun fiyatlı, yüksek kaliteli parçalar elde edin.
              Tek seferlik kalıplama maliyetlerinden kurtulun.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Talebe dayalı üretim aracına geçtiğinizde kalıplama maliyeti
              ortadan kalkar. Ücretsiz tasarım danışmanlığı hizmeti veren tek
              bir tedarikçiyle çalışmak, size esneklik, daha tutarlı parçalar ve
              kalifikasyon sürecinde kolaylık sağlar.
            </p>
          </div>
        </div>
      </div>

      {/* Injection Molding Processes Section */}
      <div className="w-full bg-white pb-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Enjeksiyon Kalıplama Süreçleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Plastic Injection Molding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/1.webp"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Plastik Enjeksiyon Kalıplama
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Yüksek hassasiyetli plastik parça üretimi
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2 - Liquid Silicone Rubber */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/2.jpg"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Sıvı Silikon Kauçuk
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Esnek ve dayanıklı silikon parça üretimi
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 3 - Overmolding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/3.webp"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Kaplama Kalıplama
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Çok malzemeli entegre parça üretimi
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 4 - Insert Molding */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={
                      "/Assets/Images/services/injection-molding/parts/4.webp"
                    }
                    alt="Plastic Injection Molding"
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                  Gömme Parçalı Kalıplama
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Metal parçaların plastikle kaplanması
                </p>
                <button className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  Daha Fazla Bilgi
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Additional Capabilities for Injection Molding Orders */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-12">
            Enjeksiyon Kalıplama Siparişleri için Ek Yetenekler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Family and Multi-Cavity Molding */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <Layers className="w-10 h-10 text-[#0099ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Aile ve Çok Gözlü Kalıplama
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tek bir kalıpta birden fazla parça veya farklı tasarımlar
                üreterek üretim verimliliğini artırın ve maliyetleri düşürün.
              </p>
            </div>

            {/* Card 2 - Secondary Operations */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <Wrench className="w-10 h-10 text-[#0099ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                İkincil Operasyonlar
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Montaj, kaynak, baskı ve daha fazlası dahil olmak üzere ek
                işlemlerle parçalarınızı son kullanıma hazır hale getirin.
              </p>
            </div>

            {/* Card 3 - Quality and Inspections */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E6F3FF] transition-colors">
                <ClipboardCheck className="w-10 h-10 text-[#0099ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Kalite ve Denetimler
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ISO 9001:2015 sertifikalı süreçlerle her parçanın
                spesifikasyonlarınıza uygun olduğundan emin olmak için kapsamlı
                kalite kontrol ve denetim hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Testimonial Section */}
      <div className="w-full bg-[#F0F8FF] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Quote className="w-8 h-8 text-[#0099ff]" />
            </div>
            <p className="text-xl md:text-2xl text-[#0B1221] leading-relaxed mb-6 italic">
              &quot;Edwards için zaman her zaman en önemli faktördü. Protolabs
              ile ortaklık kurmak bu çevikliği elde etmemizi sağladı ve sonuçta
              mümkün olan en iyi ürünü ortaya çıkardı. Onlar olmadan, başarı
              için gereken hıza ulaşabileceğimize inanmıyorum.&quot;
            </p>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto mb-4"></div>
            <p className="text-[#0B1221] font-semibold">
              — TIM HUMPHREY, FORMER LEAD SENIOR PRODUCT DESIGNER
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Injection Mold Tooling Options and Quality Reporting */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-6">
            Injection Mold Tooling Options and Quality Reporting
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            We have two unique offers to meet your needs wherever you are in the
            product lifecycle. Our prototype injection molding process helps you
            cut product development cycles by weeks—sometimes months—and bridge
            to production with injection-molded parts within days. Our On-demand
            Manufacturing process is designed to meet your production needs, and
            helps you qualify parts quickly to seamlessly transition into
            production with scientific molding, in-process CMM inspections with
            GD&amp;T, and a full suite of secondary operations to make sure that
            your parts show up and perform as expected.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-lg">
                    Prototyping
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    On-Demand Manufacturing
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Objective Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Objective
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    I need to validate my design at Protolabs speeds. I need the
                    flexibility to economically iterate before production.
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    I have on-demand production needs at Protolabs speeds.
                  </td>
                </tr>

                {/* Best When Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Best When
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        Completing design or material iterations, and assessing
                        cost or manufacturability tradeoffs
                      </li>
                      <li>
                        Key focus is to reduce design risk, increase R&amp;D
                        productivity, and iterate faster to reduce time to
                        market
                      </li>
                      <li>Typical Quantities &lt;2,000</li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        Design is finalized and run-to-run part consistency is
                        critical
                      </li>
                      <li>
                        Key focus is to improve quality, reduce cost, and
                        mitigate supply chain risk
                      </li>
                      <li>
                        Process development, qualification documentation, and
                        mold capability information is required
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* Mold Cavities Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Mold Cavities
                  </td>
                  <td className="p-4 text-gray-600 bg-white">Single</td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Single and multi-cavity
                  </td>
                </tr>

                {/* Mold Life Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Mold Life
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Limited (guaranteed for at least 2,000 shots)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">Unlimited</td>
                </tr>

                {/* Mold Storage Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Mold Storage
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Stored for 18 months of inactivity
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Stored for 3 years of inactivity
                  </td>
                </tr>

                {/* Mold Ownership Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Mold Ownership
                  </td>
                  <td className="p-4 text-gray-600 bg-white">Upon request</td>
                  <td className="p-4 text-gray-600 bg-gray-50">Yes</td>
                </tr>

                {/* Quality Documentation Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Quality Documentation
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Scientific molding process development report</li>
                      <li>
                        In-process CMM inspection of critical dimensions,
                        including 9 GD&amp;T symbols
                      </li>
                      <li>
                        Critical to Quality (CTQ) - identify up to five critical
                        features or dimensions of importance
                      </li>
                      <li>
                        CTQ Partial FAI: 3-part dimensional first article
                        inspection
                      </li>
                      <li>
                        CTQ DIR with Capability Study: 30-part dimensional
                        capability study
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Quality Inspection Report (QIR) verifies Protolabs'
                    manufacturing process controls
                  </td>
                </tr>

                {/* Shared Features Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Shared Features
                  </td>
                  <td colSpan={2} className="p-4 text-gray-600 bg-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <span className="text-sm">✓ Aluminum molds</span>
                      <span className="text-sm">
                        ✓ Standard lead times as fast as 7 days
                      </span>
                      <span className="text-sm">
                        ✓ Tolerances of +/-0.003 in. plus resin tolerance
                        (in./in.)
                      </span>
                      <span className="text-sm">
                        ✓ Set-up fees apply to each run
                      </span>
                      <span className="text-sm">
                        ✓ Consultative Design Services (CDS)
                      </span>
                      <span className="text-sm">✓ Finishing Options</span>
                      <span className="text-sm">
                        ✓ No minimum order quantities (MOQ)
                      </span>
                      <span className="text-sm">
                        ✓ Quick-turn shipping in as fast as 1 day
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Hint />
      {/* Section 4: Injection Molding Materials */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Materials List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Enjeksiyon Kalıplama Malzemeleri
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                100'den fazla termoplastik ve termoset malzeme seçeneğimiz
                bulunmaktadır. Alternatif malzeme seçenekleri arıyorsanız, ABS,
                PC, PP ve diğer yaygın kalıplanan plastikler için reçine
                alternatifleri rehberimize göz atın.
              </p>

              {/* Thermoplastics Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Termoplastikler
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                  {[
                    "ABS",
                    "Acetal",
                    "Acetal Copolymer",
                    "Acetal Homopolymer/Delrin",
                    "ETPU",
                    "HDPE",
                    "LCP",
                    "LDPE",
                    "LLDPE",
                    "Nylon",
                    "PBT",
                    "PC/ABS",
                    "PC/PBT",
                    "PEEK",
                    "PEI",
                    "PET",
                    "PETG",
                    "PMMA (Acrylic, Plexiglas)",
                    "Polycarbonate",
                    "Polypropylene",
                    "PPA",
                    "PPE/PS",
                    "PS",
                    "PSU",
                    "TPU",
                  ].map((material, idx) => (
                    <div key={idx} className="text-gray-600 text-sm py-1">
                      {material}
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermosets Section */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  Termosetler
                </h3>
                <div className="grid grid-cols-1 gap-y-2">
                  {[
                    "Standard silicone (30, 40, 50, 60, and 70 durometers)",
                    "Medical-grade silicone",
                    "Optical-grade silicone",
                    "Fluorosilicone (fuel and oil resistant)",
                  ].map((material, idx) => (
                    <div key={idx} className="text-gray-600 text-sm py-1">
                      {material}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-6">
              <div className="relative w-full flex justify-center h-64 rounded-xl overflow-hidden">
                <Image
                  src={"/Assets/Images/services/injection-molding/parts/5.jpg"}
                  alt="Injection Molding Part"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Definitive Guide to Injection Molding - Download Section */}
      <div className="w-full bg-[#F0F8FF] py-36">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                  Definitive Guide to Injection Molding
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bu kapsamlı referans kılavuzu, teklif alma, tasarım analizi ve
                  sevkiyattan, modelinizin kalıplama için optimize edilmesini
                  sağlayan en iyi uygulamalara kadar her şeyi size adım adım
                  gösterir.
                </p>

                {/* Download Form */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Adresi *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          placeholder="ornek@fasonly.com"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ülke *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors appearance-none bg-white">
                          <option value="">Ülke Seçiniz</option>
                          <option value="TR">Türkiye</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="IT">Italy</option>
                          <option value="ES">Spain</option>
                          <option value="NL">Netherlands</option>
                          <option value="CA">Canada</option>
                          <option value="AU">Australia</option>
                          <option value="JP">Japan</option>
                          <option value="CN">China</option>
                          <option value="IN">India</option>
                          <option value="BR">Brazil</option>
                          <option value="MX">Mexico</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <button className="w-full bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Rehberi İndir
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Illustration */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl block mb-2">📘</span>
                    <p className="text-gray-500 text-sm">
                      Injection Molding Guide
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Kılavuzu indirin ve enjeksiyon kalıplama süreçleri hakkında
                  kapsamlı bilgi edinin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Why Choose Us for Custom Injection Molding - Dark Blue Two Column */}
      <div className="w-full bg-[#0B1221] py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Us for Custom Injection Molding?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Unmatched Lead Times</strong> -
                  Reduce your product development cycle by weeks—sometimes
                  months—and bridge to production with injection-molded parts
                  within days. Some injection molding orders can ship in as fast
                  as 1 day.
                </p>
                <p>
                  <strong className="text-white">
                    Design for Manufacturing Feedback
                  </strong>{" "}
                  - Every quote includes real-time pricing and design analysis.
                  We evaluate your 3D CAD and help identify any features that
                  may pose challenges during the molding process such as
                  difficult to machine undercuts and insufficient draft.
                </p>
                <p>
                  <strong className="text-white">
                    No Minimum Order Quantities (MOQs)
                  </strong>{" "}
                  - Procuring parts on demand, without MOQs, helps you manage
                  market or demand volatility and provides a cost-effective
                  source for bridge production, line-down emergencies,
                  end-of-life production, or product customization.
                </p>
                <p>
                  <strong className="text-white">
                    Injection Molding Expertise
                  </strong>{" "}
                  - We'll work with you throughout the course of your project to
                  help you quickly move from prototyping to production,
                  including finishing options and inspection reporting.
                </p>
              </div>
              <button className="mt-8 bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                Try a Sample Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              <Image
                src={"/Assets/Images/services/injection-molding/parts/5.jpg"}
                alt="Injection Molding"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Advantages of Injection Molding & Applications - Two Rows */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Row 1 - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={"/Assets/Images/services/injection-molding/parts/1.webp"}
                alt="Injection Molding Advantage"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Advantages of Injection Molding
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Injection molding is a plastic manufacturing process that can
                produce high quality parts at scale. It's typically used for
                low- to high-volume production but our aluminum tooling can also
                make prototyping runs economical.
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Low cost at higher volumes",
                  "Exceptional part cosmetics and surface finish",
                  "Repeatable",
                  "Complex parts",
                  "Low scrap rate",
                  "Large selection of thermoplastic and thermoset materials",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2 - Image Right, Text Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-6">
                Injection Molding Applications
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Injection molding is widely used for plastic part production in
                medical, consumer, and automotive industries. Typical parts
                include:
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Housings",
                  "Brackets",
                  "Gears",
                  "Single-use medical parts",
                  "Electrical connectors",
                  "Syringes",
                  "Containers",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-[#96E92A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={"/Assets/Images/services/injection-molding/parts/2.jpg"}
                alt="Injection Molding Applications"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: What is Injection Molding? - Video + FAQs Accordion */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Video Player Section */}
          <div className="mb-16">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] shadow-xl">
              {/* Video thumbnail / player placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#96E92A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-[#0B1221] ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    What is Injection Molding?
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    PROTOLABS | Manufacturing Accelerated
                  </p>
                </div>
              </div>
              {/* Optional: Add actual video embed here */}
            </div>
          </div>

          {/* FAQs Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
                Injection Molding FAQs
              </h2>
            </div>

            <Accordion
              items={faqs}
              defaultOpenIndex={0}
              allowMultiple={false}
            />
          </div>
        </div>

        {/* blog section */}
        <Blog />
      </div>
    </div>
  );
}
