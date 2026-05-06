// app/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0B1221] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#0099ff]/20 rounded-full animate-spin border-t-[#0099ff] border-r-[#96E92A] border-b-[#0099ff] border-l-[#96E92A]"></div>
        </div>

        {/* Loading Text */}
        <div className="text-white/80 font-medium text-lg animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}
