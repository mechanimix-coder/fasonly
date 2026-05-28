"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Latest Partnerships",
      subtitle: "NASA",
      description:
        "NASA partners with Protolabs to machine a crowdsourced, generatively designed part that was delivered in only 36 hours so the design could be presented at the PowerSource Global Summit.",
      image: "/Assets/Images/resources/nasa-part-background.jpg",
      link: "#",
    },
    {
      id: 1,
      title: "Helping Electrical Engines for Aircraft Soar",
      subtitle: "Hinetics",
      description:
        "Hinetics works with Protolabs to 3D print two designs for large heat sinks.",
      image: "/Assets/Images/resources/hinetics.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "3D-Printed Tablet Teaches Braille",
      subtitle: "Blind and Low-Vision Kids",
      description:
        "3D-Printed Tablet Teaches Braille to Blind and Low-Vision Kids.",
      image: "/Assets/Images/resources/brailedoodle-featured.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "3D Printing Bolsters Innovation",
      subtitle: "Nordson Adhesives",
      description:
        "Rapid iteration capabilities and solid quality helped Nordson Adhesives quickly get their part.",
      image: "/Assets/Images/resources/nordson-featured-img.jpg",
      link: "#",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Manufacturing Resources"
        desc="Check out our library of free manufacturing resources—from technical white papers to quick design tips to live webinars"
        bg="/Assets/Images/resources/bg.jpg"
        text="white"
        fade
        simple
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guides and Trend Reports */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Guides and Trend Reports
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Design Tips */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Design Tips
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Toolkits */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Toolkits
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Design Aids */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Design Aids
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Blog */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Blog</h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Educators and Students */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Educators and Students
              </h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* Events */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">Events</h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">FAQs</h3>
              <a
                href="#"
                className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1 group">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Slider Container */}
          <div className="relative">
            {/* Card */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              {/* Left Column - Image (Full Height) */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-gray-100">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className="flex-1 p-8 md:p-10">
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  {currentSlide.title}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1221] mt-2 mb-4">
                  {currentSlide.subtitle}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentSlide.description}
                </p>
                <a
                  href={currentSlide.link}
                  className="text-[#0099ff] font-medium hover:text-[#96E92A] transition-colors inline-flex items-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              aria-label="Previous slide">
              <svg
                className="w-5 h-5 text-[#0B1221]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              aria-label="Next slide">
              <svg
                className="w-5 h-5 text-[#0B1221]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#0099ff]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
