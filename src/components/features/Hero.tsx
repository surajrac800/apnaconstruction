"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME, COMPANY_TAGLINE, CONTACT_INFO, FEATURED_WORKS } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate background images
  const backgroundImages = FEATURED_WORKS.map(work => `/Apna construction assets/${work.image}`);

  // Auto-rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative text-white min-h-screen flex items-center pt-24 pb-20 md:pt-28 md:pb-32 -mt-20 overflow-hidden">
      {/* Background Image with fade transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Construction work background"
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        {/* Orange/amber tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-amber-500/30 to-yellow-400/20"></div>
      </div>

      {/* Animated construction pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline - Prominent */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                {COMPANY_TAGLINE}
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Shortened Welcome Message */}
          <div className="mb-10">
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
              Your one-stop solution for home services, renovation, interior, and complete building construction.
            </p>
            <p className="text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              High-quality workmanship, transparency, safety & on-time delivery.
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

          {/* Contact Information Card */}
          <div className="flex justify-center max-w-md mx-auto">
            {/* Phone/WhatsApp Card */}
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="group relative bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/50 shadow-lg w-full"
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
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
}
