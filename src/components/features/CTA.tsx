"use client";

import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";

export default function CTA() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="relative">
                  <span className="text-7xl animate-bounce">⭐</span>
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                  Book Your Service Today!
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed">
                Get in touch with us for all your construction and home service needs
              </p>
              <p className="text-lg text-orange-200 font-semibold">
                Fast Response • Free Consultation • Quality Guaranteed
              </p>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Call Button */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onMouseEnter={() => setHoveredButton('call')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative bg-gradient-to-br from-orange-600 to-amber-500 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    📞
                  </div>
                  <div className="text-sm font-semibold text-orange-100 mb-2 uppercase tracking-wide">Call Us</div>
                  <div className="text-lg font-bold">{CONTACT_INFO.phone}</div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    💬
                  </div>
                  <div className="text-sm font-semibold text-green-100 mb-2 uppercase tracking-wide">WhatsApp</div>
                  <div className="text-lg font-bold">Chat Now</div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Location Card */}
              <div className="group relative bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-all duration-300">
                    📍
                  </div>
                  <div className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">Location</div>
                  <div className="text-sm font-medium text-gray-200 leading-tight">{CONTACT_INFO.address}</div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="text-center">
              <Link
                href="/contact"
                onMouseEnter={() => setHoveredButton('quote')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg md:text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                
                <span className="relative z-10 flex items-center">
                  <span className="mr-3">Get Free Quote</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
                </span>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Quick Info Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-orange-300">Quick Response</div>
                <div className="text-xs text-gray-400 mt-1">Within 24 hours</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-sm font-semibold text-orange-300">Free Quote</div>
                <div className="text-xs text-gray-400 mt-1">No hidden costs</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">✅</div>
                <div className="text-sm font-semibold text-orange-300">Quality Assured</div>
                <div className="text-xs text-gray-400 mt-1">100% satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
