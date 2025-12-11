"use client";

import { COMPANY_NAME, COMPANY_VALUES } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="relative">
              <span className="text-7xl">🏗️</span>
              <div className="absolute inset-0 bg-orange-300/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins">
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              About {COMPANY_NAME}
            </span>
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto mb-8 rounded-full"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-inter">
              {COMPANY_NAME} ek trusted company hai jo home maintenance, construction, renovation, architecture, and interior design services offer karti hai.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-semibold">
              Hamari team qualified engineers, architects, technicians aur skilled labours se bani hai.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          <div 
            className="group relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-orange-600 overflow-hidden"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                🎯
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-inter">
                To deliver high-quality construction & home services with trust, transparency and perfection.
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div 
            className="group relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-amber-500 overflow-hidden"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                👁️
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins group-hover:text-amber-600 transition-colors duration-300">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-inter">
                To become the region's most reliable and professional construction & home solution provider.
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* What We Stand For */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 max-w-6xl mx-auto border border-gray-100 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  What We Stand For
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_VALUES.map((value, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index + 10)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center transform transition-all duration-300 ${hoveredCard === index + 10 ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                      <span className="text-2xl text-white">✓</span>
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-gray-900 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                      {value}
                    </span>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why We're Different */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Why We're Different
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-inter">
              Discover what sets us apart in the construction and home services industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="group relative bg-gradient-to-br from-orange-600 via-amber-500 to-orange-600 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              onMouseEnter={() => setHoveredCard(20)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  🏠
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">All Services Under One Roof</h3>
                <p className="text-orange-50 leading-relaxed text-lg font-inter">
                  From home repairs to complete construction projects, we handle everything you need.
                </p>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div 
              className="group relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-orange-200 hover:border-orange-400 overflow-hidden"
              onMouseEnter={() => setHoveredCard(21)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  👷
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                  Experienced Workforce
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-inter">
                  Our team consists of qualified engineers, architects, and skilled professionals.
                </p>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div 
              className="group relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-orange-200 hover:border-orange-400 overflow-hidden"
              onMouseEnter={() => setHoveredCard(22)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  💰
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                  Transparent Pricing
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-inter">
                  No hidden costs. Clear, upfront pricing for all our services.
                </p>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div 
              className="group relative bg-gradient-to-br from-orange-600 via-amber-500 to-orange-600 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              onMouseEnter={() => setHoveredCard(23)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  ⭐
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Guaranteed Finishing Quality</h3>
                <p className="text-orange-50 leading-relaxed text-lg font-inter">
                  We stand behind our work with quality guarantees and warranties.
                </p>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-3xl p-10 md:p-12 text-white text-center shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Ready to Work With Us?</h3>
              <p className="text-xl text-orange-100 mb-8 font-inter">
                Let's discuss your project and bring your vision to life
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group/btn"
              >
                <span className="mr-2">Get in Touch</span>
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
