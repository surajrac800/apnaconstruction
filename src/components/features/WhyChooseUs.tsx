"use client";

import { WHY_CHOOSE_US } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function WhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Why Choose Us?
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We stand out with our commitment to quality, transparency, and customer satisfaction. 
            <span className="font-semibold text-orange-600"> Experience the difference that excellence makes.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {WHY_CHOOSE_US.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(251, 191, 36, 0.2))',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              ></div>

              {/* Icon Container with enhanced design */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-500 transform ${hoveredFeature === index ? 'scale-125 rotate-12 shadow-xl' : 'scale-100 rotate-0 shadow-lg'}`}>
                  <span className={`text-4xl transform transition-all duration-500 ${hoveredFeature === index ? 'scale-125' : 'scale-100'}`}>
                    {feature.icon}
                  </span>
                </div>
                {/* Glow effect behind icon */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-300/40 to-amber-300/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${hoveredFeature === index ? 'scale-150' : 'scale-100'}`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur-2xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and quote today! Let's bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group/btn"
              >
                <span className="mr-2">Contact Us Now</span>
                <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
