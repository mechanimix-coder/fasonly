import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="PEEK, PEI, LSR, and Other Material Options for Medical Prototyping"
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              Comparing Manufacturing Processes
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>

          {/* Row 1 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                In an industry where speed to market is key, quick-turn
                injection molding is an excellent option. It can produce parts
                made from plastic, metal, and liquid silicone rubber quickly, in
                a method that provides repeatable, reliable, and consistent
                parts. The disadvantage of this method comes with the upfront
                tooling cost, and the risk of needing changes to the design
                after investing in a mold. This risk can be mitigated using
                low-cost aluminum tooling instead of a more expensive steel
                mold. Defects such as flash, parting lines, gate marks, and
                ejector pin marks are also possible with molded parts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For complex geometries not possible through injection molding,
                industrial-grade 3D printing is a viable option. 3D printing
                allows a way to quickly evaluate designs at a low cost. The
                piece part price is higher than injection molding, but without
                the upfront tooling cost, design changes are easy to make. The
                biggest advantage of 3D printing is the accuracy of form and fit
                testing. Medical device developers often use this process during
                prototyping to identify any design flaws and make changes before
                moving to second-generation machined or molded parts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                CNC machining plays a big role in the early and end-of-life
                medical device stages because it supplies products quickly and
                relatively inexpensively, without the tooling cost of molding or
                high piece part price of 3D printing. The process decision will
                help guide the material decision, as certain materials are only
                available in specific processes.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/Assets/Images/resources/medical-materials/tasso-overmolding-lsr-570x308.jpg"
                alt="Comparing Manufacturing Processes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    Material
                  </th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    Injection Molding
                  </th>
                  <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                    CNC Machining
                  </th>
                  <th className="text-left p-4 font-semibold text-lg">
                    3D Printing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 text-gray-700 font-medium">
                    PEEK, PEI, PPSU
                  </td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                  <td className="p-4 text-gray-600 text-center"></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 text-gray-700 font-medium">
                    Polycarbonate
                  </td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                  <td className="p-4 text-gray-600 text-center"></td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 text-gray-700 font-medium">
                    Liquid Silicone Rubber
                  </td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                  <td className="p-4 text-gray-600 text-center"></td>
                  <td className="p-4 text-gray-600 text-center"></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 text-gray-700 font-medium">Titanium</td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                  <td className="p-4 text-gray-600 text-center"></td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 text-gray-700 font-medium">
                    ABS-like WaterShed
                  </td>
                  <td className="p-4 text-gray-600 text-center"></td>
                  <td className="p-4 text-gray-600 text-center"></td>
                  <td className="p-4 text-gray-600 text-center">X</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-[#F0F8FF] rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              Medical-grade LSR can be used for the full component, or in
              overmolding, such as on this blood collection device made from
              polypropylene with a thermoplastic elastomer overmold.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Deciding Material Type
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Material type is an important consideration as well. The
                material type required for the project will guide the material
                choice, as metal and plastic have different material properties.
                When deciding on the material, it is important to keep regular
                availability in mind. Choosing a material that will be
                discontinued or hard to source during the product's life cycle
                will require re-testing and going through the timely testing and
                FDA certification process again with a new material.
              </p>
            </div>

            {/* Right Column - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Material
                      </th>
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Plastic
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Metal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700 font-medium">
                        PEEK, PEI, PPSU
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700 font-medium">
                        Polycarbonate
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700 font-medium">
                        Liquid Silicone Rubber
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700 font-medium">
                        Titanium
                      </td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700 font-medium">
                        ABS-like WaterShed
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
                Advantages and Disadvantages
              </h2>
              <div className="w-20 h-1 bg-[#96E92A] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                The most important comparison in medical materials is to
                consider the advantages and disadvantages of each material. For
                designs where high temperature resistance is key, PEEK/PEI/PPSU,
                LSR, and titanium are all good options. PEEK/PEI/PPSU also
                provide creep resistance and work well for applications
                requiring sterilization. LSR provides electrical and chemical
                resistance, biocompatibility, and is the only material on our
                list that is suitable for skin contact. If lightweight and
                corrosion resistance are key, Titanium is going to be the best
                option for the project.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Polycarbonates such as Makrolon and LEXAN HP1 provide good
                clarity in addition to good impact resistance and durability. If
                you've chosen 3D printing as the ideal process for your
                application, WaterShed XC 11122 is a good option when clarity is
                required, such as in microfluidics, and is also water and
                humidity resistant.
              </p>

              <p className="text-gray-600 leading-relaxed">
                For more information on materials, check out our material
                comparison guide, and learn more about rapid manufacturing for
                medical products in our Prototyping and Low-Volume Production
                for Medical Applications white paper.
              </p>
            </div>

            {/* Right Column - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B1221] text-white">
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Material
                      </th>
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Temp Resistance
                      </th>
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Good Clarity
                      </th>
                      <th className="text-left p-4 font-semibold text-lg border-r border-gray-700">
                        Lightweight
                      </th>
                      <th className="text-left p-4 font-semibold text-lg">
                        Suitable for skin contact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700 font-medium">
                        PEEK, PEI, PPSU
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700 font-medium">
                        Polycarbonate
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700 font-medium">
                        Liquid Silicone Rubber
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-700 font-medium">
                        Titanium
                      </td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center">X</td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 text-gray-700 font-medium">
                        ABS-like WaterShed
                      </td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                      <td className="p-4 text-gray-600 text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
