import { HOME_SERVICES, CONSTRUCTION_SERVICES } from "@/lib/constants";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <div className="w-32 h-1 bg-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive home services and construction solutions tailored to your needs
          </p>
        </div>

        {/* Home Services */}
        <section id="home-services" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">🔧</span> Home Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional home maintenance and repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-orange-600"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center group"
                >
                  Book Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Construction Services */}
        <section id="construction-services">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">🏗️</span> Construction Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete construction solutions from planning to execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSTRUCTION_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-orange-200"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-6 text-orange-100">
            Contact us today for a free consultation and quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
