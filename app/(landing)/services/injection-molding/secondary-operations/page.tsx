"use client";
import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Secondary Operations for Injection Molding"
        desc="Choose from a wide selection of finishing options for molding that strengthen parts, improve cosmetic appearance, provide customization, and other benefits."
        firstButton={{ title: "Get a Quote", route: "/" }}
      />

      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Secondary Operations Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Turnaround time for each process varies and is dependent on
              factors like part complexity and quantity.
            </p>
          </div>

          {/* 9-Item Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mold Texturing & Engraving */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/mold-texturing.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Mold Texturing & Engraving
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Mold texturing and/or engraving involves applying industry
                  standard textures to a mold and/or engraving the mold cavity
                  with graphics/text.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Laser Engraving */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/laser-engraving.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Laser Engraving
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Laser engraving is applied directly to the parts with
                  information such as logos or part numbers. This process
                  ensures crisp, consistent information on each part.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Pad Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/pad-printing.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Pad Printing
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Transfer a two-dimensional image, like a company logo, onto a
                  three-dimensional object. All images are reviewed for size,
                  color, and complexity restrictions.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* UV Printing */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/im_2024_uv-printing_process_15_lr-1.webp"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  UV Printing
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  UV printing uses state-of-the-art flatbed UV inkjet technology
                  to print directly onto a three-dimensional object. Images can
                  be very small or very large, simple or complex, and contain
                  numerous different colors.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Threaded Inserts */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/inserts.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Threaded Inserts
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  We stock and install a variety of commonly used standard
                  inserts in UNF and metric sizes. We can also accommodate
                  customer-supplied inserts designed for heat staking or
                  ultrasonic installation methods.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Part Cleaning */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/clean-room-operations.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Part Cleaning
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Our comprehensive part cleaning service for injection molding
                  ensures that parts are free from contaminants and ready for
                  subsequent processes or immediate use.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Machining */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/cnc-milling-point.jpg"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Machining
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Machining involves using tools to add precise features like
                  holes, threads, and pockets to a molded part after its initial
                  formation.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Assembly */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/im-sec-ops-assembly.png"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Assembly
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Our standard assembly service includes putting together molded
                  parts we've made, applying labels to individually bagged
                  parts, and installing pins or inserts.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>

            {/* Packaging */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0099ff]/20 to-[#96E92A]/20 flex items-center justify-center">
                <Image
                  src={
                    "/Assets/Images/services/injection-molding/secondary-operations/im-sec-ops-assembly.png"
                  }
                  fill
                  alt="design cube"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0B1221] mb-2">
                  Packaging
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Packing involves custom labeling and packing of parts,
                  including options like sterilized labels, barcodes, and QR
                  codes. We also offer tailored packing solutions.
                </p>
                <a
                  href="#"
                  className="text-[#0099ff] font-medium text-sm hover:text-[#96E92A] transition-colors inline-flex items-center gap-1">
                  View Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
