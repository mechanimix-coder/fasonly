import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full bg-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-bold text-[#0B1221]">
            4<span className="text-[#0099ff]">0</span>4
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B1221] mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#0B1221] hover:bg-[#1a2a3a] text-white px-6 py-3 rounded-xl transition-colors">
          <Home className="w-4 h-4" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
