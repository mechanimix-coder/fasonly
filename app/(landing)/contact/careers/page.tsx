"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Users,
  Heart,
  TrendingUp,
  Clock,
  Coffee,
  GraduationCap,
  Award,
  Globe,
  Zap,
  Shield,
  ChevronDown,
  ChevronUp,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  CheckCircle,
  Upload,
  FileText,
  Trash2,
  Building2,
  Target,
  Sparkles,
} from "lucide-react";

export default function Careers() {
  const [openJob, setOpenJob] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [selectedJob, setSelectedJob] = useState("");

  const openPositions = [
    {
      id: 1,
      title: "Kıdemli CNC Operatörü",
      department: "Üretim",
      location: "Sakarya",
      type: "Tam Zamanlı",
      experience: "5+ yıl",
      description:
        "CNC freze ve torna tezgahlarında deneyimli operatör aranmaktadır.",
      requirements: [
        "CNC freze ve torna tezgahlarında en az 5 yıl deneyim",
        "G kod ve M kodlarına hakimiyet",
        "Teknik çizim okuma becerisi",
        "Takım tezgahı seçimi ve kesme parametreleri bilgisi",
        "Kalite kontrol süreçlerine hakimiyet",
      ],
      benefits: [
        "Rekabetçi maaş",
        "Yemek ve yol desteği",
        "Özel sağlık sigortası",
        "Sürekli eğitim imkanı",
      ],
    },
    {
      id: 2,
      title: "Enjeksiyon Kalıplama Mühendisi",
      department: "Mühendislik",
      location: "Sakarya",
      type: "Tam Zamanlı",
      experience: "3+ yıl",
      description:
        "Enjeksiyon kalıplama süreçlerinde deneyimli mühendis aranmaktadır.",
      requirements: [
        "Makine veya malzeme mühendisliği mezunu",
        "Enjeksiyon kalıplama süreçlerinde en az 3 yıl deneyim",
        "Kalıp tasarımı ve analizi bilgisi",
        "Müşteri iletişiminde başarılı",
        "Takım çalışmasına yatkın",
      ],
      benefits: [
        "Rekabetçi maaş",
        "Yemek ve yol desteği",
        "Özel sağlık sigortası",
        "Kariyer gelişim fırsatları",
      ],
    },
    {
      id: 3,
      title: "Kalite Kontrol Uzmanı",
      department: "Kalite",
      location: "Sakarya",
      type: "Tam Zamanlı",
      experience: "3+ yıl",
      description: "Kalite kontrol süreçlerinde deneyimli uzman aranmaktadır.",
      requirements: [
        "Makine veya endüstri mühendisliği mezunu",
        "Kalite kontrol süreçlerinde en az 3 yıl deneyim",
        "CMM ve ölçüm cihazları kullanımı",
        "ISO 9001, ISO 14001 bilgisi",
        "Analitik düşünme becerisi",
      ],
      benefits: [
        "Rekabetçi maaş",
        "Yemek ve yol desteği",
        "Özel sağlık sigortası",
        "Sertifika programlarına katılım",
      ],
    },
    {
      id: 4,
      title: "Satış ve Pazarlama Uzmanı",
      department: "Satış",
      location: "İstanbul / Sakarya",
      type: "Tam Zamanlı",
      experience: "2+ yıl",
      description:
        "Endüstriyel üretim sektöründe satış ve pazarlama uzmanı aranmaktadır.",
      requirements: [
        "İşletme veya mühendislik mezunu",
        "Endüstriyel satışta en az 2 yıl deneyim",
        "Müşteri ilişkileri yönetimi",
        "Yeni iş geliştirme becerisi",
        "İngilizce bilgisi tercih sebebi",
      ],
      benefits: [
        "Rekabetçi maaş + prim",
        "Yemek ve yol desteği",
        "Özel sağlık sigortası",
        "Esnek çalışma saatleri",
      ],
    },
    {
      id: 5,
      title: "Yazılım Geliştirici (Full Stack)",
      department: "Bilgi Teknolojileri",
      location: "İstanbul / Remote",
      type: "Tam Zamanlı",
      experience: "3+ yıl",
      description:
        "Next.js, React ve Node.js teknolojilerinde deneyimli yazılım geliştirici aranmaktadır.",
      requirements: [
        "Bilgisayar mühendisliği veya ilgili bölüm mezunu",
        "Next.js ve React'te en az 3 yıl deneyim",
        "Node.js ve MongoDB bilgisi",
        "Tailwind CSS deneyimi",
        "Git ve versiyon kontrol sistemleri",
      ],
      benefits: [
        "Rekabetçi maaş",
        "Uzaktan çalışma imkanı",
        "Özel sağlık sigortası",
        "Teknoloji eğitim bütçesi",
      ],
    },
  ];

  const toggleJob = (id: number) => {
    setOpenJob(openJob === id ? null : id);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const benefits = [
    {
      icon: Heart,
      title: "Sağlık Sigortası",
      desc: "Özel sağlık sigortası imkanı",
    },
    {
      icon: TrendingUp,
      title: "Kariyer Gelişimi",
      desc: "Sürekli eğitim ve gelişim fırsatları",
    },
    {
      icon: Coffee,
      title: "Dinamik Ortam",
      desc: "Modern ve keyifli çalışma ortamı",
    },
    {
      icon: GraduationCap,
      title: "Eğitim Desteği",
      desc: "Sertifika ve kurs desteği",
    },
    {
      icon: Globe,
      title: "Esnek Çalışma",
      desc: "Uzaktan veya hibrit çalışma imkanı",
    },
    {
      icon: Zap,
      title: "Yenilikçi Projeler",
      desc: "Son teknoloji projelerde görev alma",
    },
  ];

  const values = [
    {
      title: "Yenilikçilik",
      icon: Sparkles,
      desc: "Sürekli yeni fikirler üretiyoruz",
    },
    {
      title: "Kalite",
      icon: Shield,
      desc: "Her işte mükemmelliği hedefliyoruz",
    },
    {
      title: "Takım Çalışması",
      icon: Users,
      desc: "Birlikte başarıya ulaşıyoruz",
    },
    {
      title: "Müşteri Odaklılık",
      icon: Target,
      desc: "Müşteri memnuniyetini ön planda tutuyoruz",
    },
  ];

  return (
    <div className="w-full pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Kariyer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Hayalinizdeki İşe
            <br />
            <span className="text-[#0099ff]">Birlikte Ulaşalım</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fasonly ailesine katılın, yenilikçi projelerde çalışın, kendinizi
            geliştirin ve hayalinizdeki kariyere adım atın.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "50+", label: "Uzman Personel", icon: Users },
            { value: "15+", label: "Açık Pozisyon", icon: Briefcase },
            { value: "95%", label: "Çalışan Memnuniyeti", icon: Heart },
            { value: "100+", label: "Proje Tamamlandı", icon: Award },
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

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Şirket Değerlerimiz
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Birlikte çalıştığımız değerlerimizle başarıya ulaşıyoruz
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
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Size Sunduklarımız
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-3">
              Fasonly'de çalışmanın avantajları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-white/10 rounded-xl">
                <benefit.icon className="w-6 h-6 text-[#96E92A] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Açık Pozisyonlar
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Ekibimize katılmak için sizi bekleyen fırsatlar
            </p>
          </div>
          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#0B1221]">
                        {job.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-[#96E92A]/10 text-[#96E92A] text-xs rounded-full">
                        {job.department}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{job.description}</p>
                  </div>
                  <div className="ml-4">
                    {openJob === job.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openJob === job.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="font-semibold text-[#0B1221] mb-3">
                          Gereksinimler
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#96E92A] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0B1221] mb-3">
                          Yan Haklar
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#96E92A] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        <span>Deneyim: {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(job.title);
                        document
                          .getElementById("application-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-4 bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium px-5 py-2 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                      Bu Pozisyona Başvur
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="application-form" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Başvuru Formu
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Açık pozisyonlarımıza başvurmak için formu doldurun
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#F0F8FF] rounded-2xl p-12 text-center border border-[#96E92A]/30">
              <div className="w-20 h-20 bg-[#96E92A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#96E92A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B1221] mb-3">
                Başvurunuz Alındı!
              </h2>
              <p className="text-gray-600 mb-6">
                Başvurunuz başarıyla iletilmiştir. En kısa sürede size dönüş
                yapılacaktır.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
                Yeni Başvuru Yap
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresi *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                      placeholder="ahmet@ornek.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                      placeholder="+90 555 123 45 67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Başvurulan Pozisyon *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors bg-white">
                      <option value="">Pozisyon Seçiniz</option>
                      {openPositions.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Neden Fasonly?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors resize-none"
                  placeholder="Bizi neden tercih etmeliyiz? Kendinizi ve yeteneklerinizi anlatın..."
                />
              </div>

              {/* CV Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CV'nizi Yükleyin *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0099ff] transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer block">
                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">
                      CV'nizi sürükleyin veya tıklayarak seçin
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      PDF, DOC, DOCX (Max 10MB)
                    </p>
                  </label>
                </div>
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#0099ff]" />
                          <span className="text-sm text-gray-600">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Başvuruyu Gönder
              </button>
            </form>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0B1221] to-[#1a2a3a] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sorularınız mı Var?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Kariyer fırsatları ve başvuru süreci hakkında merak ettikleriniz
            için İK ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="mailto:ik@fasonly.com"
              className="bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              ik@fasonly.com
            </Link>
            <Link
              href="/contact"
              className="border border-white hover:bg-white hover:text-[#0B1221] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              İletişim Sayfası
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
