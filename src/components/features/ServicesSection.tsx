"use client";

import { HOME_SERVICES, CONSTRUCTION_SERVICES, FEATURED_WORKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
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
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Home Services Header with Background Image */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden mb-16 min-h-[400px] md:min-h-[500px] flex items-center">
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
                    alt="Home services background"
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              ))}
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/75"></div>
              {/* Orange/amber tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/50 via-amber-500/40 to-yellow-400/30"></div>
            </div>

            {/* Text Content Overlay */}
            <div className="relative z-10 text-center text-white px-4 py-16 md:py-20 w-full">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                  Home Services
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 rounded-full"></div>
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
                Professional home maintenance and repair services at your doorstep.
              </p>
              <p className="text-base md:text-lg text-yellow-100 max-w-2xl mx-auto mt-4 drop-shadow-md">
                Trusted by thousands of happy customers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {HOME_SERVICES.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                ></div>

                {/* Icon with animation */}
                <div className="relative z-10 mb-5">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 transform ${hoveredService === service.id ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[60px]">
                    {service.description}
                  </p>
                  <Link
                    href="/services#home-services"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm group/link"
                  >
                    <span className="mr-2">Learn More</span>
                    <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Construction Services */}
        <div className="mb-12">
          <div className="text-center mb-16">
            {/* <div className="inline-block mb-4">
              <span className="text-6xl">🏗️</span>
            </div> */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Construction Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete construction solutions from planning to execution. 
              <span className="font-semibold text-orange-600"> Building dreams into reality.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSTRUCTION_SERVICES.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-300 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon with enhanced animation */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 min-h-[60px]">
                    {service.description}
                  </p>
                  <Link
                    href="/services#construction-services"
                    className="inline-flex items-center bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span className="mr-2">Get Quote</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote on any of our services
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Free Quote Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
