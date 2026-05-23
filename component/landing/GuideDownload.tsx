import { ChevronDown, Download, Mail, MapPin } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  desc: string;
  img?: string;
  simple?: boolean;
}

export default function GuideDownload({ title, desc, img, simple }: Props) {
  if (simple) {
    return (
      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                {title}
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </button>
              <p className="text-gray-400 text-xs mt-4">
                Fasonly - Table of Manufacturing Materials
              </p>
            </div>

            {/* Right Column - Full Size Image */}
            <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex-shrink-0 shadow-md">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-6xl block mb-2">📊</span>
                  <p className="text-gray-500 text-sm">
                    Periodic Table of Materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Right Column - White Box with Title, Text and Form */}
          <div className="flex-1 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-3">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-[#96E92A] rounded-full mb-4"></div>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              {desc}
            </p>

            {/* Form Inputs in Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Adresi *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="ornek@fasonly.com"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ülke *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099ff] transition-colors appearance-none bg-white text-gray-900">
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
              <div className="flex-shrink-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  &nbsp;
                </label>
                <button className="w-full sm:w-auto bg-[#96E92A] hover:bg-[#85d122] text-[#0B1221] font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  İndir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
