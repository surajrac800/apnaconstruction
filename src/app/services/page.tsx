"use client";

import { HOME_SERVICES, CONSTRUCTION_SERVICES } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// SVG Icons for Home Services
const HomeServiceIcons = {
  electrician: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  plumber: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  painter: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  carpenter: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  welder: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  "tile-setter": (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
    </svg>
  ),
  cleaning: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "interior-setup": (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

// Image paths for Construction Services
const ConstructionServiceImages = {
  residential: "/Apna construction assets/WhatsApp Image 2025-12-13 at 3.15.30 PM.jpeg",
  commercial: "/Apna construction assets/WhatsApp Image 2025-12-13 at 3.15.31 PM.jpeg",
  renovation: "/Apna construction assets/WhatsApp Image 2025-12-13 at 3.15.33 PM.jpeg",
  architecture: "/Apna construction assets/WhatsApp Image 2025-12-13 at 3.15.28 PM.jpeg",
  "interior-design": "/Apna construction assets/WhatsApp Image 2025-12-13 at 3.15.32 PM.jpeg",
};

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <div className="w-32 h-1 bg-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive home services and construction solutions tailored to your needs
          </p>
        </div>

        {/* Home Services */}
        <section id="home-services" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Home Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional home maintenance and repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES.map((service) => {
              const IconComponent = HomeServiceIcons[service.id as keyof typeof HomeServiceIcons];
              const isHovered = hoveredService === service.id;
              
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Container - Centered */}
                  <div className="relative z-10 mb-5 flex justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg transition-all duration-300 transform ${isHovered ? 'scale-110 rotate-6 shadow-xl' : 'scale-100 rotate-0'}`}>
                      <div className="w-8 h-8">
                        {IconComponent}
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-orange-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
                  </div>

                  {/* Content - Centered */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[60px]">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm group/link"
                    >
                      Book Now
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Construction Services */}
        <section id="construction-services">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Construction Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete construction solutions from planning to execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSTRUCTION_SERVICES.map((service) => {
              const imagePath = ConstructionServiceImages[service.id as keyof typeof ConstructionServiceImages];
              const isHovered = hoveredService === service.id;
              
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-300 overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image Container - Centered */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className={`relative w-32 h-32 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform ${isHovered ? 'scale-110 shadow-2xl' : 'scale-100'}`}>
                      <Image
                        src={imagePath}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="128px"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-orange-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 min-h-[60px]">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all group/btn"
                    >
                      Get Quote
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-6 text-orange-100">
            Contact us today for a free consultation and quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
