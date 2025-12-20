"use client";

import { PRICING } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import PricingCalculator from "@/components/features/PricingCalculator";

export default function PricingPage() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-7xl">💰</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins">
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Transparent Pricing Plans
            </span>
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
            Clear, upfront pricing with no hidden costs. Final cost depends on material, area, and project requirements.
          </p>
        </div>

        {/* Price Calculator */}
        <PricingCalculator />

        {/* Home Services Pricing */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">🔧</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Home Services Pricing
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600">
                      <th className="px-8 py-5 text-left font-bold text-lg text-white font-poppins">Service</th>
                      <th className="px-8 py-5 text-left font-bold text-lg text-white font-poppins">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING.homeServices.map((item, index) => (
                      <tr
                        key={index}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                        className={`border-b border-gray-100 transition-all duration-300 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } ${
                          hoveredRow === index ? "bg-orange-50 transform scale-[1.02]" : ""
                        }`}
                      >
                        <td className="px-8 py-5 font-semibold text-gray-900 font-inter text-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-orange-600">•</span>
                            <span>{item.service}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-orange-600 font-bold text-xl font-poppins">{item.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Construction & Design Pricing */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">🏗️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Construction & Design Pricing
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600">
                      <th className="px-8 py-5 text-left font-bold text-lg text-white font-poppins">Category</th>
                      <th className="px-8 py-5 text-left font-bold text-lg text-white font-poppins">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING.construction.map((item, index) => (
                      <tr
                        key={index}
                        onMouseEnter={() => setHoveredRow(index + 10)}
                        onMouseLeave={() => setHoveredRow(null)}
                        className={`border-b border-gray-100 transition-all duration-300 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } ${
                          hoveredRow === index + 10 ? "bg-orange-50 transform scale-[1.02]" : ""
                        }`}
                      >
                        <td className="px-8 py-5 font-semibold text-gray-900 font-inter text-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-orange-600">•</span>
                            <span>{item.service}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-orange-600 font-bold text-xl font-poppins">{item.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-8 rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">ℹ️</div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg font-inter">
                  <strong className="text-amber-700 font-poppins">Note:</strong> Final cost depends on material, area, and project requirements. 
                  Contact us for a detailed quotation based on your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Get Your Custom Quote</h3>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 font-inter">
                Contact us for a detailed quotation tailored to your project
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group/btn"
              >
                <span className="mr-2">Request Quote Now</span>
                <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
