"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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

export default function WorkDetailsPage() {
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
            Our Work Details
          </h1>
          <div className="w-32 h-1 bg-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed view of our completed projects and construction work
          </p>
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
                  alt={`Work detail image ${index + 1}`}
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
          <p className="text-gray-600 text-lg mb-6">
            Showing <span className="font-bold text-orange-600">{galleryImages.length}</span> work detail images
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <span className="mr-2">←</span>
            Back to Gallery
          </Link>
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
                alt="Full size work detail image"
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

