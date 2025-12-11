"use client";

import ContactForm from "@/components/features/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-7xl">📞</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins">
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Get in Touch
            </span>
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
            Have a question? Need a quotation? Want to book a service? We are here to assist you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-poppins">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {/* Phone/WhatsApp Card */}
              <div
                onMouseEnter={() => setHoveredCard('phone')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-start space-x-5">
                  <div className={`text-5xl transform transition-all duration-300 ${hoveredCard === 'phone' ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    📞
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl font-poppins group-hover:text-orange-600 transition-colors duration-300">
                      Phone / WhatsApp
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-orange-600 hover:text-orange-700 font-semibold text-lg font-inter block mb-3"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 text-sm font-semibold transform hover:scale-105"
                    >
                      <span className="mr-2">💬</span>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Email Card */}
              <div
                onMouseEnter={() => setHoveredCard('email')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-amber-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-start space-x-5">
                  <div className={`text-5xl transform transition-all duration-300 ${hoveredCard === 'email' ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    📧
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl font-poppins group-hover:text-amber-600 transition-colors duration-300">
                      Email
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-orange-600 hover:text-orange-700 font-semibold text-base font-inter break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Address Card */}
              <div
                onMouseEnter={() => setHoveredCard('address')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-start space-x-5">
                  <div className={`text-5xl transform transition-all duration-300 ${hoveredCard === 'address' ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    📍
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl font-poppins group-hover:text-orange-600 transition-colors duration-300">
                      Address
                    </h3>
                    <p className="text-gray-700 text-base font-inter leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Working Hours Card */}
              <div
                onMouseEnter={() => setHoveredCard('hours')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-amber-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-start space-x-5">
                  <div className={`text-5xl transform transition-all duration-300 ${hoveredCard === 'hours' ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    🕒
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl font-poppins group-hover:text-amber-600 transition-colors duration-300">
                      Working Hours
                    </h3>
                    <p className="text-gray-700 text-base font-inter">{CONTACT_INFO.workingHours}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-poppins">Request a Call Back</h3>
                  <p className="text-orange-100 text-base font-inter">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Send us a Message
                </span>
              </h2>
              <p className="text-gray-600 font-inter">
                Fill out the form below and we'll respond as soon as possible
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
