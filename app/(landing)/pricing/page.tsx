// app/pricing/page.tsx
"use client";

import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      name: "Basic Plan",
      price: "$250",
      period: "month",
      description:
        "Let your user know what to expect when choosing this plan. Inform users of plan benefits, not features.",
      isPremium: false,
      features: [
        "Focus on the differences",
        "Use a consistent language",
        "Transmit benefits clearly",
      ],
    },
    {
      name: "Regular Plan",
      price: "$390",
      period: "month",
      description:
        "Let your user know what to expect when choosing this plan. Inform users of plan benefits, not features.",
      isPremium: false,
      features: [
        "Focus on the differences",
        "Use a consistent language",
        "Transmit benefits clearly",
      ],
    },
    {
      name: "Premium Plan",
      price: "$540",
      period: "month",
      description:
        "Let your user know what to expect when choosing this plan. Inform users of plan benefits, not features.",
      isPremium: true,
      features: [
        "Focus on the differences",
        "Use a consistent language",
        "Transmit benefits clearly",
      ],
    },
  ];

  const faqItems = [
    {
      question: "How does CloudSproot secure my data?",
      answer:
        "CloudSproot uses industry-standard encryption and security protocols to protect your data. We implement regular security audits and compliance checks to ensure your information remains safe and confidential.",
    },
    {
      question: "Can CloudSproot integrate with our systems?",
      answer:
        "Yes, CloudSproot offers flexible API integrations and custom solutions to connect with your existing systems. Our team can help you set up the integration process smoothly.",
    },
    {
      question: "What industries does CloudSproot serve?",
      answer:
        "CloudSproot serves a wide range of industries including technology, healthcare, finance, manufacturing, and retail. Our solutions are designed to adapt to various business needs.",
    },
    {
      question: "How long does a typical cloud migration take?",
      answer:
        "Cloud migration timelines vary based on the complexity and size of your infrastructure. Most migrations can be completed within 2-6 weeks with proper planning and our expert guidance.",
    },
    {
      question: "What ongoing support does CloudSproot offer?",
      answer:
        "We provide 24/7 technical support, regular system updates, performance monitoring, and dedicated account management to ensure your cloud infrastructure runs smoothly at all times.",
    },
    {
      question: "Do you offer custom cloud solutions?",
      answer:
        "Absolutely! We specialize in creating custom cloud solutions tailored to your specific business requirements. Our team will work closely with you to design and implement the perfect cloud strategy.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Dark Blue with Blue Glare */}
      <div className="relative w-full bg-[#0B1221] pb-28 pt-46 overflow-hidden">
        {/* Blue glare effect */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0099ff] blur-[150px] rounded-full opacity-25 pointer-events-none" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#0099ff] blur-[120px] rounded-full opacity-15 pointer-events-none" />

        {/* Background grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pricing
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              Consider using this if you need to provide more context on why you
              do what you do. Be engaging. Focus on delivering value to your
              visitors.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Light Blue Background */}
      <div className="w-full bg-[#F0F8FF] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221]">
                Choose the Perfect Plan for Your Business
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-600 leading-relaxed">
                A pricing table assists users in selecting a suitable plan by
                simply and clearly differentiating product/service features and
                prices. Use this as supporting text for your plans.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  plan.isPremium
                    ? "bg-[#0B1221] text-white border border-gray-700"
                    : "bg-white text-[#0B1221] border border-gray-100"
                }`}>
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-lg font-medium ${plan.isPremium ? "text-white" : "text-[#0B1221]"}`}>
                    {plan.name}
                  </h3>
                  {plan.isPremium && (
                    <span className="bg-[#96E92A] text-[#0B1221] text-[10px] font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.isPremium ? "text-gray-400" : "text-gray-500"}`}>
                    / {plan.period}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${plan.isPremium ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <button
                  className={`w-full py-2.5 rounded-lg font-medium transition-colors duration-300 mb-8 ${
                    plan.isPremium
                      ? "bg-[#0099ff] hover:bg-[#0088e6] text-white"
                      : "bg-[#0B1221] hover:bg-[#1a2a4a] text-white"
                  }`}>
                  Subscribe Now
                </button>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p
                    className={`text-sm font-medium mb-3 ${plan.isPremium ? "text-white" : "text-[#0B1221]"}`}>
                    What's included?
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div
                          className={`mt-0.5 flex-shrink-0 ${plan.isPremium ? "text-[#0099ff]" : "text-[#0099ff]"}`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-sm ${plan.isPremium ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src="/Assets/Images/pricing/reviews.webp"
                  alt="Reviews"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#0B1221] font-semibold">
                  Got Questions? We Have Answers!
                </h4>
                <p className="text-gray-500 text-sm">
                  Get started by reaching out to our awesome support team today!
                </p>
              </div>
            </div>
            <button className="bg-white border border-gray-300 text-[#0B1221] px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Dark Blue Section - FAQ */}
      <div className="w-full bg-[#0B1221] pt-16 md:py-36">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Thousands, from{" "}
              <span className="text-[#0099ff]">Startups</span>
              <br />
              to Enterprise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Use this space to provide your website visitors with a brief
              description on what to expect before clicking on a section title.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700 py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left hover:text-[#0099ff] transition-colors duration-200">
                  <span className="text-white font-medium">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index
                      ? "max-h-[200px] opacity-100 pt-2"
                      : "max-h-0 opacity-0"
                  }`}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
