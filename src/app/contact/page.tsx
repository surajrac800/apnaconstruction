"use client";

import ContactForm from "@/components/features/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";

// Social Media Links (You can move these to your constants file later)
const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', color: 'hover:text-blue-600' },
  { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01', color: 'hover:text-pink-600', extra: <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /> },
  { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z', color: 'hover:text-sky-500' },
  { name: 'YouTube', href: '#', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48L15.45 11.75l-5.7 3.27z', color: 'hover:text-red-600' },
];

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-2xl mb-6 shadow-sm">
             <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
             </svg>
          </div> */}
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
                  <div className={`p-3 rounded-xl bg-orange-100 text-orange-600 transform transition-all duration-300 ${hoveredCard === 'phone' ? 'scale-110 rotate-12 bg-orange-600 text-white' : ''}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl font-poppins group-hover:text-orange-600 transition-colors duration-300">
                      Phone / WhatsApp
                    </h3>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-orange-600 hover:text-orange-700 font-semibold text-lg font-inter block mb-3">
                      {CONTACT_INFO.phone}
                    </a>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 text-sm font-semibold transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div
                onMouseEnter={() => setHoveredCard('email')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-amber-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-start space-x-5">
                  <div className={`p-3 rounded-xl bg-amber-100 text-amber-600 transform transition-all duration-300 ${hoveredCard === 'email' ? 'scale-110 rotate-12 bg-amber-600 text-white' : ''}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl font-poppins group-hover:text-amber-600 transition-colors duration-300">
                      Email
                    </h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-orange-600 hover:text-orange-700 font-semibold text-base font-inter break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-xl font-poppins">Follow Our Journey</h3>
                <div className="flex flex-wrap gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-gray-50 rounded-xl transition-all duration-300 text-gray-600 ${social.color} hover:scale-110 hover:shadow-md`}
                      aria-label={social.name}
                    >
                      <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        {social.extra}
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/20 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
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
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 h-fit">
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