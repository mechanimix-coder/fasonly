"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Upload,
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Headphones,
  Zap,
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageCircle,
  AlertCircle,
  Check,
  X,
  Plus,
  Trash2,
} from "lucide-react";

export default function QuoteRequest() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    serviceType: "",
    quantity: "",
    material: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    // Handle form submission here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const features = [
    { icon: Clock, text: "24 saat içinde teklif" },
    { icon: Shield, text: "Güvenli dosya yükleme" },
    { icon: Headphones, text: "Uzman destek" },
    { icon: Zap, text: "Hızlı üretim" },
  ];

  return (
    <div className="w-full pt-32 pb-36 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#96E92A]/10 rounded-full mb-4">
            <span className="text-[#96E92A] text-sm font-semibold">
              Hızlı Teklif
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
            Teklif Talebi
            <br />
            <span className="text-[#0099ff]">Hemen Fiyat Alın</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Projenizi bize iletin, uzman ekibimiz en kısa sürede size özel
            teklif sunsun. CAD dosyalarınızı yükleyin, üretim sürecini başlatın.
          </p>
        </div>

        {/* Features Banner */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-600">
              <feature.icon className="w-5 h-5 text-[#0099ff]" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2">
            {formSubmitted ? (
              <div className="bg-[#F0F8FF] rounded-2xl p-12 text-center border border-[#96E92A]/30">
                <div className="w-20 h-20 bg-[#96E92A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#96E92A]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B1221] mb-3">
                  Teklif Talebiniz Alındı!
                </h2>
                <p className="text-gray-600 mb-6">
                  Talebiniz başarıyla iletilmiştir. En kısa sürede size dönüş
                  yapılacaktır.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
                  Yeni Talep Oluştur
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0B1221] mb-6">
                  Proje Bilgileri
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
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
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                        placeholder="ahmet@fasonly.com"
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                        placeholder="+90 555 123 45 67"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket Adı
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                        placeholder="Şirket Adı"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors bg-white">
                      <option value="">Seçiniz</option>
                      <option value="cnc">CNC İşleme</option>
                      <option value="injection">Enjeksiyon Kalıplama</option>
                      <option value="3dprinting">3D Baskı</option>
                      <option value="sheetmetal">Sac Metal İşleme</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adet
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                      placeholder="Tahmini adet"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Malzeme Tercihi
                  </label>
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors"
                    placeholder="Örn: ABS, Alüminyum, Paslanmaz Çelik"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Açıklaması *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CAD Dosyalarınızı Yükleyin
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0099ff] transition-colors cursor-pointer">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".stl,.step,.stp,.iges,.igs,.pdf,.zip"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer block">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">
                        Dosyalarınızı sürükleyin veya tıklayarak seçin
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        STL, STEP, IGES, PDF, ZIP (Max 50MB)
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
                  Teklif Talebi Gönder
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Talebiniz 24 saat içinde değerlendirilecektir.
                </p>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-[#0B1221] to-[#1a2a3a] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Neden Fasonly?</h3>
              <div className="space-y-3">
                {[
                  { text: "7/24 Online Teklif", icon: Clock },
                  { text: "Uzman Mühendis Desteği", icon: User },
                  { text: "ISO 9001:2015 Sertifikalı", icon: Shield },
                  { text: "Hızlı Teslimat", icon: Zap },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#96E92A]" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#F0F8FF] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                İletişim Bilgileri
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0099ff]" />
                  <span className="text-sm text-gray-600">
                    +90 264 123 45 67
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0099ff]" />
                  <span className="text-sm text-gray-600">
                    info@fasonly.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#0099ff]" />
                  <span className="text-sm text-gray-600">
                    Sakarya / Türkiye
                  </span>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                Sık Sorulan Sorular
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#0B1221] text-sm">
                    Teklif ne kadar sürede gelir?
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    24 saat içinde teklifiniz hazırlanır.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#0B1221] text-sm">
                    Minimum sipariş adedi var mı?
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Hayır, her adette üretim yapıyoruz.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#0B1221] text-sm">
                    Hangi formatlarda dosya kabul ediyorsunuz?
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    STL, STEP, IGES, PDF, ZIP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
