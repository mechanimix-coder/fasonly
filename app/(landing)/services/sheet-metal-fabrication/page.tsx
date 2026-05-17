"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PlayCircle, Quote } from "lucide-react";
import {
  companyLogos,
  usTableData,
  metricTableData,
  metalsData,
  faqItems,
} from "@/data";
import React, { useState } from "react";
import Hint from "@/component/UI/Hint";
import MetalsSection from "@/component/landing/MetalsSection";
import GuideDownload from "@/component/landing/GuideDownload";
import Accordion from "@/component/landing/Accordion";
import Blog from "@/component/landing/Blog";
export default function SheetMetalFabrication() {
  return (
    <div className="w-full pt-10 bg-white">
      {/* Hero Section - Two Columns */}
      <div className="w-full bg-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1221] leading-tight mb-4">
                Online Custom Sheet Metal Fabrication Service
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Sheet metal components and assemblies in as fast as 1 day. Get
                an online quote for your prototype or low-volume production
                project today.
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
                    src={
                      "/Assets/Images/services/injection-molding/complexity.webp"
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
    </div>
  );
}
