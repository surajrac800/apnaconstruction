import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME, CONTACT_INFO, NAVIGATION_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/apnaconst.png"
                  alt="Apna Construction Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{COMPANY_NAME}</h3>
                <p className="text-sm text-orange-400">We Build Trust. We Build Homes.</p>
              </div>
            </div>
            <p className="mb-4 text-gray-400">
              Your one-stop solution for home services, renovation, interior, and complete building construction.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">📞</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">📧</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </p>
              <p className="flex items-start">
                <span className="text-orange-500 mr-2">📍</span>
                <span>{CONTACT_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Working Hours</h4>
            <p className="text-sm text-gray-400 mb-2">{CONTACT_INFO.workingHours}</p>
            <div className="mt-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <span className="mr-2">💬</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
