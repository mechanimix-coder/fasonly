import Image from "next/image";
export default function page() {
  return (
    <div className="w-full py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Design Tips
          </h2>
          <p className="text-gray-600 text-lg">
            Get quick advice on creating plastic, metal, and elastomeric parts
            for injection molding, CNC machining, 3D printing, and sheet metal
            fabrication. Designing with manufacturability in mind can accelerate
            production time and reduce production costs.
          </p>
        </div>

        {/* Grid Section - 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 - Injection Molding */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/Assets/Images/resources/design-tips/im-link.jpg"
                alt="Injection Molding"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-xl tracking-tight">
                Injection Molding
              </h3>
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Item 2 - CNC Machining */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/Assets/Images/resources/design-tips/cnc-link.jpg"
                alt="CNC Machining"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-xl tracking-tight">
                CNC Machining
              </h3>
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Item 3 - 3D Printing */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/Assets/Images/resources/design-tips/3dp-link.jpg"
                alt="3D Printing"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-xl tracking-tight">
                3D Printing
              </h3>
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Item 4 - Sheet Metal Fabrication */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/Assets/Images/resources/design-tips/sm-link.jpg"
                alt="Sheet Metal Fabrication"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-xl tracking-tight">
                Sheet Metal Fabrication
              </h3>
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Item 5 - Materials */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/Assets/Images/resources/design-tips/im_2023_resin_clear_hr.jpg"
                alt="Materials"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-xl tracking-tight">
                Materials
              </h3>
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Item 6 - Industries */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/Assets/Images/resources/design-tips/industry-link.jpg"
                alt="Industries"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-xl tracking-tight">
                Industries
              </h3>
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group">
            <span>View All</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
