"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FactoryVsNetwork() {
  const [activeTable, setActiveTable] = useState<"capabilities" | "dimensions">(
    "capabilities",
  );

  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] text-center mb-4">
          Factory vs. Network
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
          We offer a range of capabilities through our in-house digital
          factories at Protolabs along with our digital network of
          manufacturers. If speed is essential, our factory capabilities have
          you covered, but if you're in need of advanced capabilities and have
          more flexibility in your schedule, try Protolabs Network.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTable("capabilities")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeTable === "capabilities"
                ? "bg-[#0B1221] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}>
            Capabilities Table
          </button>
          <button
            onClick={() => setActiveTable("dimensions")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeTable === "dimensions"
                ? "bg-[#0B1221] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}>
            Dimensions Table
          </button>
        </div>

        {/* Table 1: Capabilities Table */}
        {activeTable === "capabilities" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-base">
                    CNC Milling
                  </th>
                  <th className="text-left p-4 font-semibold text-base">
                    CNC Turning
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Factory Capabilities for CNC Milling Row */}
                <tr className="bg-gray-100">
                  <td colSpan={3} className="p-3 font-bold text-[#0B1221]">
                    Factory Capabilities for CNC Milling
                  </td>
                </tr>

                {/* Maximum Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Maximum Part Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    22 in. x 14 in. x 3.75 in.
                    <br />
                    <span className="text-xs text-gray-400">
                      (559mm x 356mm x 95.3mm)
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    25.5 in. x 25.5 in. x 11.8 in.
                    <br />
                    <span className="text-xs text-gray-400">
                      (650mm x 650mm x 300mm)
                    </span>
                  </td>
                </tr>

                {/* Minimum Part Size Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Minimum Part Size
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    0.25 in. x 0.25 in. x 0.04 in.
                    <br />
                    <span className="text-xs text-gray-400">
                      (6.35mm x 6.35mm x 1.016mm)
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    0.0393 in. x 0.0393 in. x 0.0393 in.
                    <br />
                    <span className="text-xs text-gray-400">
                      (1mm x 1mm x 1mm)
                    </span>
                  </td>
                </tr>

                {/* Tolerances for Parts without Technical Drawing Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Tolerances for Parts without Technical Drawing
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    +/- 0.005 in. (+/- 0.127mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    ISO 2768-1-1989-f (metals), ISO 2768-1-1989-m (plastics)
                  </td>
                </tr>

                {/* Tolerances for Parts with Technical Drawing Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Tolerances for Parts with Technical Drawing
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    Linear tolerance quoted to ISO 2768-1-1989-f, Standard hole
                    tolerance quoted to +/- 0.005 in. (+/- 0.127mm) Hole &
                    bore-style tolerance on specified feature may be +/- 0.0005
                    in. (+/- 0.0127mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    Please clearly indicate tolerances for nominal sizes below
                    0.5mm on your technical drawing.
                  </td>
                </tr>

                {/* Radii Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Radii
                  </td>
                  <td colSpan={2} className="p-4 text-gray-600 bg-white">
                    Sharp inside corners on a part will be radiused (rounded) as
                    a natural result of the CNC machining process.
                  </td>
                </tr>

                {/* Text Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Text
                  </td>
                  <td colSpan={2} className="p-4 text-gray-600 bg-gray-50">
                    Plastic and soft metals: Minimum width of 0.018 in.
                    (0.457mm), depth of 0.0118 in. (0.3mm). Example text size
                    would be 16 point Arial Rounded MT font. Hard metals:
                    Minimum width of 0.033 in. (0.838mm) and depth of 0.0118 in.
                    (0.3mm). Example text size would be 22 point Arial Rounded
                    MT font.
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Note */}
            <p className="text-sm text-gray-500 mt-4 italic">
              Note: Maximum part size varies by material. View this table to see
              a complete listing of our maximum part sizes.
            </p>
          </div>
        )}

        {/* Table 2: Dimensions Table */}
        {activeTable === "dimensions" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0B1221] text-white">
                  <th className="text-left p-4 font-semibold text-base border-r border-gray-700"></th>
                  <th className="text-left p-4 font-semibold text-base">
                    CNC Milling
                  </th>
                  <th className="text-left p-4 font-semibold text-base">
                    CNC Turning
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Maximum Dimensions Section */}
                <tr className="bg-gray-100">
                  <td colSpan={3} className="p-3 font-bold text-[#0B1221]">
                    Maximum Dimensions
                  </td>
                </tr>

                {/* Diameter Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50 w-1/3">
                    Diameter
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    3.95 in. (100.33mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    17 in. (431mm)
                  </td>
                </tr>

                {/* Length Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Length
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    9 in. (228.6mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    39 in. (990mm)
                  </td>
                </tr>

                {/* Minimum Dimensions Section */}
                <tr className="bg-gray-100">
                  <td colSpan={3} className="p-3 font-bold text-[#0B1221]">
                    Minimum Dimensions
                  </td>
                </tr>

                {/* Diameter Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Diameter
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    0.16 in. (4.07mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    0.039 in. (1mm)
                  </td>
                </tr>

                {/* Length Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Length
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    0.05 in. (1.27mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    0.019 in. (0.5mm)
                  </td>
                </tr>

                {/* Wall Thickness Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Wall Thickness
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    0.020 in. (0.51mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    0.019 in. (0.5mm)
                  </td>
                </tr>

                {/* Angle Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Angle
                  </td>
                  <td className="p-4 text-gray-600 bg-white">30°</td>
                  <td className="p-4 text-gray-600 bg-gray-50">Below 90°</td>
                </tr>

                {/* Tolerances Row */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-[#0B1221] bg-gray-50">
                    Tolerances
                  </td>
                  <td className="p-4 text-gray-600 bg-white">
                    +/- 0.005 in. (+/- 0.13mm)
                  </td>
                  <td className="p-4 text-gray-600 bg-gray-50">
                    +0.001 in. (0.020mm)
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Note */}
            <p className="text-sm text-gray-500 mt-4 italic">
              Note: Small features may be allowed, but the diameter in any
              region should not be less than 0.030 in. (0.76mm). Sharp conical
              points are allowed; angles should be greater than 30 degrees.
              Walls thinner than 0.020 in. (0.5mm) typically do not survive the
              machining process.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
