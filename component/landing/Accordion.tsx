"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | number[];
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIndex = 0,
  className = "",
  itemClassName = "",
  titleClassName = "",
  contentClassName = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(() => {
    if (defaultOpenIndex !== undefined) {
      if (Array.isArray(defaultOpenIndex)) {
        return defaultOpenIndex;
      }
      return [defaultOpenIndex];
    }
    return [];
  });

  const toggleItem = (id: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id)
          : [...prev, id],
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`border border-gray-200 rounded-xl overflow-hidden bg-white ${itemClassName}`}>
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200">
            <span
              className={`font-semibold text-[#0B1221] text-base sm:text-lg ${titleClassName}`}>
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                isOpen(item.id) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen(item.id)
                ? "max-h-[500px] opacity-100 pb-5 px-5"
                : "max-h-0 opacity-0"
            }`}>
            <p
              className={`text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 ${contentClassName}`}>
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
