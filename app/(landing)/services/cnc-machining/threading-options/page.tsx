import GetAQuote from "@/component/landing/GetAQuote";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-20 pb-20 bg-white">
      import GetAQuote from "@/component/landing/GetAQuote";
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Threaded Holes Guidelines
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our CNC machining service provides the ability to easily add
                threaded features to milled and turned parts. For parts that are
                eligible for our automated factory, threads are specified within
                our automated interactive quotes. When a quote is returned, the
                3D display will show which thread types are possible for each
                feature. Different threads (where possible) or no threads can be
                selected on a feature-by-feature basis. View a sample quote to
                explore a 3D model with threads.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                For parts with threading required in a technical drawing that
                has been uploaded along with the part's matching 3D cad file,
                our team will review the features and provide you a quote to
                your requirements matched with our capabilities.
              </p>

              <h3 className="text-xl font-bold text-[#0B1221] mb-3">
                Milled vs. Turned Parts
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In our automated factory, we offer a limited selection of UNF,
                UNC, and metric threads for machining along with coil and key
                insert hole preparation (but in our automated factory, we do not
                supply or install the inserts). On both milled and turned parts,
                threaded holes must be modeled at the proper diameter, however,
                threading options differ for milled and turned parts. Automatic
                external threads are not available for milling at this time. It
                is possible to machine approximate external threads using ball
                and flat end mills if threads are modeled and are at least ½-13
                (M12) or larger. Threaded holes on turned parts are also
                available and external threads are offered on the axial
                diameters. Simply model the nominal diameter; do not model the
                threads.
              </p>

              <p className="text-gray-600 leading-relaxed">
                All of our available selections are listed in the guide below.
                If you have any issues or questions please contact an
                applications engineer at{" "}
                <a
                  href="mailto:customerservice@Fasonly.com"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  customerservice@Fasonly.com
                </a>{" "}
                or 877-479-3680.
              </p>
            </div>

            {/* Right Column - THREADING CONSIDERATIONS */}
            <div className="flex-1">
              <div className="bg-[#F0F8FF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0B1221] mb-4">
                  THREADING CONSIDERATIONS
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      We may thread a through hole or continuous outer diameter
                      from either side of the part. If the depth of the hole or
                      length of the outer diameter is deeper than our tools can
                      reach, we will offer to thread both ends of the feature.
                      It should be assumed these threads will not be continuous.
                      See our maximum reach tab section for more information.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      All threads will be right handed. Left-handed threads, and
                      diameter and pitches not shown in the table cannot be
                      produced with our machining processes at this time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      We may be unable to thread features that are obstructed by
                      other elements on a part or that are obstructed by our
                      fixtureing. If a feature cannot be threaded, no thread
                      options will be offered for that feature on the quote.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#96E92A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">
                      Threaded features are not available for parts loaded in
                      the .STL format.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GetAQuote Component below both columns */}
          <div className="mt-12">
            <GetAQuote
              title="CNC Machining Services for End-Use Parts"
              desc="Get high‑quality machined parts faster with our expanded automated CNC milling—parts ready in as fast as 4 days "
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 - Standard Holes */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/StandardHoles.webp"
                  alt="Standard Holes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Standard Holes
                </h3>
                <p className="text-xs text-gray-400 mt-1">→</p>
              </div>
            </div>

            {/* Item 2 - Coil Inserts */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/CoilInserts.jpg"
                  alt="Coil Inserts"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Coil Inserts
                </h3>
                <p className="text-xs text-gray-400 mt-1">→</p>
              </div>
            </div>

            {/* Item 3 - Key Inserts */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/KeyInserts.jpg"
                  alt="Key Inserts"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">
                  Key Inserts
                </h3>
                <p className="text-xs text-gray-400 mt-1">→</p>
              </div>
            </div>

            {/* Item 4 - OD Threads */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src="/Assets/Images/services/cnc-machining/threaded-holes-guidelines/ODThreads.webp"
                  alt="OD Threads"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0B1221]">OD Threads</h3>
                <p className="text-xs text-gray-400 mt-1">* Turning Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              THREADING: MAXIMUM REACH
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* 6 Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-[#96E92A] rounded"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    side of hole selected →
                  </p>
                  <p className="text-xs text-gray-400">max reach ↓</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Example 1
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is a cross-section view of a through hole that is
                  threaded from one side. In this case, the hole depth exceeds
                  the reach of the tool. The result is an unthreaded section
                  that is opposite the side selected.
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-24 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[#96E92A]/40 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Example 2
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is a cross-section view of a through hole that is
                  threaded from one side. In this case, the hole depth does not
                  exceed the reach of the tool. The result is the threads will
                  be formed across the entire length of the hole.
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/4 w-8 h-full bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-0 right-1/4 w-8 h-full bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Example 3
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is a cross-section view of a through hole that is
                  threaded from two sides. In this case, the hole depth is too
                  long to reach from one side only. However, it can be reached
                  past the center from either side. If this hole is selected to
                  be threaded from both sides, there will be a discontinuity in
                  the middle of the hole. This means that a bolt can only be
                  threaded to roughly half the depth of the hole.
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-40 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/4 w-8 h-1/2 bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute bottom-0 right-1/4 w-8 h-1/2 bg-[#0099ff]/30 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Example 4
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is a cross-section view of a through hole that is
                  threaded from both sides. This is similar to Example 3, but
                  the hole is longer and the tool can not reach to the center
                  from either side. In this case, the hole will be threaded to
                  the maximum reach from both sides, leaving an un-threaded
                  section in the middle.
                </p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-5/6 bg-[#96E92A]/40 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-300 rounded"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    1/2 pitch + 0.010" ↓
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Example 5
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is a cross-section view of a blind hole (a hole that has
                  a bottom/doesn't pass through the part). In this case, the
                  hole is less than the full reach and threading will stop
                  roughly 0.010 in. off the bottom. If the hole is deeper than
                  the tool can reach, threads will be cut as deep as possible.
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0099ff]/10 to-[#96E92A]/10 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#0B1221] rounded-lg relative mx-auto">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-5/6 bg-[#96E92A]/40 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-gray-300"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">point angle</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1221] mb-2">
                  Example 6
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A designer may add a point at the bottom of a blind hole. In
                  most cases, this represents the point left if a pilot hole is
                  drilled with a drill bit. It may also serve a function to
                  their design, or provide an area for chips that are generated
                  during the threading process to fall. If this point is added
                  to the model, the threading will stop roughly 0.010 in. above
                  the start of the point angle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
