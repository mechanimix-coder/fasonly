import ServicesHero from "@/component/landing/ServicesHero";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Help Center"
        desc="Take a close look at our digital quoting and manufacturing analysis platforms to find out how to leverage our capabilities and maximize speed and quality."
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Resources & Support
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 9 Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 - Pricing and Payment Options */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Pricing and Payment Options
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Interested in learning about pricing? While Protolabs has a
                standard pricing structure, cost varies for each service line
                and on individual projects based on a few key factors.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 2 - Lead Times */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Lead Times
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Protolabs offers standard lead times for specific services. View
                lead times associated with each service line to help plan your
                project timeline.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 3 - ProDesk Quoting Platform */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                ProDesk Quoting Platform
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                ProDesk is Protolabs' collaborative online environment.
                Experience AI-generated quoting with advanced design for
                manufacturing analysis, seamless navigation, and enhanced
                capabilities.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 4 - Basic Design Guidelines */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Basic Design Guidelines
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Sometimes you need quick confirmation of your designs, and the
                best advice is to go back to basics. Get quick, upfront
                information about tolerances, min. and max. part sizes, and
                additional considerations here.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 5 - Manufacturing Analysis */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Manufacturing Analysis
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Before you approve your part for manufacturing, it's helpful to
                get instant feedback that lets you know it's ready for our
                systems. Our advanced design for manufacturing (DFM) analysis
                gives you peace of mind.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 6 - FAQs */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">FAQs</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Here are answers to common questions our customers frequently
                ask. They cover a wide range of topics across all our service
                lines, ensuring you have the information you need.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 7 - Sheet Metal Quoting */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Sheet Metal Quoting
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Our digital quoting platform ensures that you get the design for
                manufacturing feedback you need, leading to accurate quotes and
                durable parts with excellent aesthetics.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 8 - ABS Lustran Update & FAQ */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                ABS Lustran Update & FAQ
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                On October 30, 2024, Ineos Styrolution announced their intention
                to permanently close their Addstyon, Ohio operations. As of now,
                we have received notification of the discontinuation of Lustran
                branded ABS materials.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>

            {/* Item 9 - Injection Molding Inspections */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Injection Molding Inspections
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                Our digitalized processes, scientific molding, and quality
                measures ensure both repeatability and quality.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
