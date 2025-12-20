"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FEATURED_WORKS, WHY_CHOOSE_US } from "@/lib/constants";

// List of all gallery images from the Apna construction assets folder
const galleryImages = [
  "WhatsApp Image 2025-12-13 at 3.13.00 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.01 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.01 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.01 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.02 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.02 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.02 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.03 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.03 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.03 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.04 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.13.04 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.16 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.16 PMss.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.28 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.29 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.29 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.29 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.30 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.30 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.30 PM (3).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.30 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.31 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.31 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.31 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.32 PM (1).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.32 PM (2).jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.32 PM.jpeg",
  "WhatsApp Image 2025-12-13 at 3.15.33 PM.jpeg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImagePath = (imageName: string) => {
    return `/Apna construction assets/${imageName}`;
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <div className="w-32 h-1 bg-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects and construction work
          </p>
        </div>

        {/* Why We Are Better - Trust Strip Section */}
        <div className="mb-20 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Image Section */}
            <div className="relative">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={getImagePath("WhatsApp Image 2025-12-13 at 3.15.30 PM.jpeg")}
                  alt="Why we are better"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-white">
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why We Are Better
              </h2>
              <p className="text-lg md:text-xl mb-8 text-orange-50 leading-relaxed">
                With years of experience and a commitment to excellence, we deliver construction solutions that exceed expectations. Our team combines skilled craftsmanship with modern techniques to bring your vision to life.
              </p>
              
              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {WHY_CHOOSE_US.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-orange-50">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Get Started Today
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Our Works Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Featured Works
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600">
              Showcasing our best completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {FEATURED_WORKS.map((work) => (
              <div
                key={work.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={getImagePath(work.image)}
                    alt={work.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {work.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{work.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <Link
              href="/work-details"
              className="inline-flex items-center bg-gradient-to-r from-orange-600 to-amber-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Explore More Works
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((imageName, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer bg-white"
              onClick={() => setSelectedImage(getImagePath(imageName))}
            >
              <div className="aspect-square relative">
                <Image
                  src={getImagePath(imageName)}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold">View Full Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-orange-600">{galleryImages.length}</span> images
          </p>
        </div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={selectedImage}
                alt="Full size gallery image"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

