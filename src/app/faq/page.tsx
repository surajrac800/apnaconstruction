"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-7xl">❓</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins">
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Frequently Asked Questions
            </span>
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transform transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-orange-200' : 'rotate-0'}`}>
                      <span className="text-2xl text-orange-600 font-bold">▼</span>
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 animate-fadeIn">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg font-inter">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Still Have Questions?</h3>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 font-inter">
                We're here to help! Get in touch with us for any queries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group/btn"
              >
                <span className="mr-2">Contact Us</span>
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
