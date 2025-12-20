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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                  Book Your Service Today!
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed">
                Get in touch with us for all your construction and home service needs
              </p>
              <p className="text-lg text-orange-200 font-semibold uppercase tracking-wider">
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
                className="group relative bg-gradient-to-br from-orange-600 to-amber-500 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10 text-center flex flex-col items-center">
                  <svg className="w-12 h-12 mb-4 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div className="text-sm font-bold text-orange-100 mb-1 uppercase tracking-widest">Call Us</div>
                  <div className="text-lg font-black">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative bg-gradient-to-br from-green-600 to-green-500 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10 text-center flex flex-col items-center">
                  <svg className="w-12 h-12 mb-4 fill-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="text-sm font-bold text-green-100 mb-1 uppercase tracking-widest">WhatsApp</div>
                  <div className="text-lg font-black">Chat Now</div>
                </div>
              </a>

              {/* Location Card */}
              <div className="group relative bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col items-center">
                <svg className="w-12 h-12 mb-4 text-orange-500 transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-widest">Location</div>
                <div className="text-sm font-semibold text-gray-200 leading-tight text-center">{CONTACT_INFO.address}</div>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="text-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-gray-900 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_20px_50px_rgba(255,165,0,0.3)] transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Quote
                  <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            {/* Quick Info Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <div className="text-sm font-bold text-orange-300">Quick Response</div>
                  <div className="text-xs text-gray-400">Within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-sm font-bold text-orange-300">Free Quote</div>
                  <div className="text-xs text-gray-400">No hidden costs</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-sm font-bold text-orange-300">Quality Assured</div>
                  <div className="text-xs text-gray-400">100% satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}