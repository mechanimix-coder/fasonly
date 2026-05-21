"use client";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteProps {
  text: string;
  author: string;
  title?: string;
  className?: string;
  variant?: "default" | "dark" | "light";
}

export default function Quote({
  text,
  author,
  title,
  className = "",
  variant = "default",
}: QuoteProps) {
  const variants = {
    default: {
      container: "bg-[#F0F8FF]",
      iconBg: "bg-white",
      iconColor: "text-[#0099ff]",
      textColor: "text-[#0B1221]",
      dividerColor: "bg-[#96E92A]",
      authorColor: "text-[#0B1221]",
      titleColor: "text-gray-500",
    },
    dark: {
      container: "bg-gradient-to-r from-[#0B1221] to-[#1a2a3a]",
      iconBg: "bg-[#96E92A]/20",
      iconColor: "text-[#96E92A]",
      textColor: "text-white",
      dividerColor: "bg-[#96E92A]",
      authorColor: "text-white",
      titleColor: "text-gray-300",
    },
    light: {
      container: "bg-white",
      iconBg: "bg-[#F0F8FF]",
      iconColor: "text-[#0099ff]",
      textColor: "text-gray-700",
      dividerColor: "bg-[#96E92A]",
      authorColor: "text-[#0B1221]",
      titleColor: "text-gray-400",
    },
  };

  const style = variants[variant];

  return (
    <div className={`w-full py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <div
          className={`max-w-4xl mx-auto text-center rounded-2xl p-8 md:p-12 ${style.container}`}>
          {/* Quote Icon */}
          <div
            className={`w-16 h-16 ${style.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
            <QuoteIcon className={`w-8 h-8 ${style.iconColor}`} />
          </div>

          {/* Quote Text */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl ${style.textColor} leading-relaxed mb-6 italic font-medium`}>
            &quot;{text}&quot;
          </p>

          {/* Divider */}
          <div
            className={`w-16 h-0.5 ${style.dividerColor} mx-auto mb-4`}></div>

          {/* Author */}
          <p className={`font-semibold ${style.authorColor}`}>— {author}</p>

          {/* Author Title (optional) */}
          {title && (
            <p className={`text-sm mt-1 ${style.titleColor}`}>{title}</p>
          )}
        </div>
      </div>
    </div>
  );
}
