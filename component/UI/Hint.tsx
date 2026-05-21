import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";

export default function Hint({ text }: { text?: string }) {
  return (
    <div className="bg-blue-50 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl border border-blue-200 shadow-sm container mx-auto mt-10">
      {/* Icon */}
      <div className="flex-shrink-0">
        <FaRegLightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <span className="font-bold text-xl sm:text-2xl text-gray-800">
          Production Pro Tip
        </span>
        <span className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          {text
            ? text
            : "Add quality documentation to your order, such as PPAP, First ArticleInspection (FAI) and custom inspection reports."}
        </span>
      </div>
    </div>
  );
}
