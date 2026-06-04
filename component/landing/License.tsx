import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function License() {
  return (
    <div className="bg-[#0B1221] z-10 w-full flex justify-center">
      <div className="container flex flex-col md:flex-row items-center font-medium justify-between py-6 md:py-10 px-4 md:px-10 lg:px-40 text-white gap-6 md:gap-0">
        <span className="text-sm md:text-base text-center md:text-left">
          © 2026 Fasonly - Tüm Hakları Saklıdır
        </span>

        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
          <li className="hover:text-blue-300 transition-all cursor-pointer flex flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
            <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Facebook</span>
          </li>
          <li className="hover:text-blue-300 transition-all cursor-pointer flex flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
            <ImLinkedin className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Linkedin</span>
          </li>
          <li className="hover:text-blue-300 transition-all cursor-pointer flex flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
            <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">YouTube</span>
          </li>
          <li className="hover:text-blue-300 transition-all cursor-pointer flex flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
            <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Instagram</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
