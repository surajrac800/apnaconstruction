"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME, COMPANY_TAGLINE, CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 text-white min-h-screen flex items-center pt-24 pb-20 md:pt-28 md:pb-32 -mt-20 overflow-hidden">
      {/* Animated construction pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                {/* Enhanced gradient lighting effect behind logo */}
                <div 
                  className="absolute inset-0 rounded-full blur-3xl scale-150 animate-pulse z-0"
                  style={{
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.7) 0%, rgba(251, 146, 60, 0.5) 30%, rgba(217, 119, 6, 0.3) 60%, transparent 100%)'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full blur-2xl scale-125 z-0"
                  style={{
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(251, 146, 60, 0.4) 40%, transparent 80%)'
                  }}
                ></div>
                {/* Logo container with white background and shadow */}
                <div className="relative w-full h-full bg-white rounded-2xl p-3 shadow-2xl z-10 transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/apnaconst.png"
                    alt="Apna Construction Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-gradient">
                {COMPANY_NAME}
              </span>
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-yellow-100 drop-shadow-lg">
              {COMPANY_TAGLINE}
            </p>
          </div>

          {/* Welcome Message */}
          <div className="mb-10">
            <p className="text-lg md:text-xl lg:text-2xl mb-4 text-yellow-50 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Welcome to <span className="font-bold text-white">{COMPANY_NAME}</span>—your one-stop solution for home services, renovation, interior, and complete building construction.
            </p>
            <p className="text-base md:text-lg text-yellow-100 max-w-3xl mx-auto leading-relaxed font-semibold">
              Hamara focus high-quality workmanship, transparency, safety aur on-time delivery par hota hai.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/contact"
              onMouseEnter={() => setHoveredButton('book')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden min-w-[250px]"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <span className="mr-2 text-xl">📞</span>
                <span className="group-hover:text-white transition-colors duration-300">Book Your Service Today</span>
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              href="/services"
              onMouseEnter={() => setHoveredButton('explore')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative inline-flex items-center justify-center bg-transparent border-3 border-white text-white px-8 py-4 rounded-xl text-lg font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden min-w-[250px] hover:bg-white hover:text-orange-600"
            >
              <span className="relative z-10 flex items-center">
                <span>Explore Our Services</span>
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Phone/WhatsApp Card */}
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="group relative bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/50 shadow-lg"
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">📞</div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-yellow-200 uppercase tracking-wide mb-1">Call / WhatsApp</div>
                  <div className="text-base md:text-lg font-bold">{CONTACT_INFO.phone}</div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Location Card */}
            <div className="group relative bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-3xl transform group-hover:scale-110 transition-all duration-300">📍</div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-yellow-200 uppercase tracking-wide mb-1">Location</div>
                  <div className="text-sm md:text-base font-bold leading-tight">{CONTACT_INFO.address}</div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
}
