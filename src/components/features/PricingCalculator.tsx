"use client";

import { PRICING } from "@/lib/constants";
import { useState } from "react";

interface SelectedService {
  id: string;
  name: string;
  price: string;
  type: "fixed" | "perSqft" | "range" | "custom";
  area?: number;
  selectedPrice?: number;
  pricePerSqft?: number; // For range services, store the selected price per sq.ft
}

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [showCalculator, setShowCalculator] = useState(false);

  // Parse price string to extract numeric values
  const parsePrice = (priceStr: string): { type: "fixed" | "perSqft" | "range" | "custom"; min?: number; max?: number; fixed?: number } => {
    if (priceStr.includes("Custom") || priceStr.includes("Site Inspection")) {
      return { type: "custom" };
    }
    
    if (priceStr.includes("per sq.ft")) {
      // Check for range first (e.g., ₹1,200–₹1,800 per sq.ft)
      const rangeMatch = priceStr.match(/₹([\d,]+)[–-]₹([\d,]+)/);
      if (rangeMatch) {
        return { 
          type: "range", 
          min: parseInt(rangeMatch[1].replace(/,/g, "")), 
          max: parseInt(rangeMatch[2].replace(/,/g, "")) 
        };
      }
      // Check for single price range (e.g., ₹8–₹12 per sq.ft)
      const singleRangeMatch = priceStr.match(/₹(\d+)[–-]₹(\d+)/);
      if (singleRangeMatch) {
        return { 
          type: "perSqft", 
          min: parseInt(singleRangeMatch[1]), 
          max: parseInt(singleRangeMatch[2]) 
        };
      }
      // Single price per sq.ft
      const singleMatch = priceStr.match(/₹([\d,]+)/);
      if (singleMatch) {
        return { type: "perSqft", min: parseInt(singleMatch[1].replace(/,/g, "")), max: parseInt(singleMatch[1].replace(/,/g, "")) };
      }
    }
    
    const fixedMatch = priceStr.match(/₹([\d,]+)/);
    if (fixedMatch) {
      return { type: "fixed", fixed: parseInt(fixedMatch[1].replace(/,/g, "")) };
    }
    
    return { type: "custom" };
  };

  const toggleService = (service: { service: string; price: string }, category: "home" | "construction") => {
    const id = `${category}-${service.service}`;
    const priceInfo = parsePrice(service.price);
    
    const existingIndex = selectedServices.findIndex(s => s.id === id);
    
    if (existingIndex >= 0) {
      // Remove service
      setSelectedServices(selectedServices.filter((_, i) => i !== existingIndex));
    } else {
      // Add service
      const newService: SelectedService = {
        id,
        name: service.service,
        price: service.price,
        type: priceInfo.type,
        area: (priceInfo.type === "perSqft" || priceInfo.type === "range") ? 0 : undefined,
        selectedPrice: priceInfo.type === "fixed" ? priceInfo.fixed : 0,
        pricePerSqft: (priceInfo.type === "range" || priceInfo.type === "perSqft") && priceInfo.min ? priceInfo.min : undefined,
      };
      setSelectedServices([...selectedServices, newService]);
    }
  };

  const updateArea = (id: string, area: number) => {
    setSelectedServices(selectedServices.map(service => {
      if (service.id === id) {
        const priceInfo = parsePrice(service.price);
        let calculatedPrice = 0;
        
        if (priceInfo.type === "range") {
          // For range type, use the stored price per sq.ft
          const pricePerSqft = service.pricePerSqft || priceInfo.min || 0;
          calculatedPrice = area * pricePerSqft;
        } else if (priceInfo.type === "perSqft" && priceInfo.min && priceInfo.max && priceInfo.min !== priceInfo.max) {
          // Use average for perSqft range
          const avgPrice = (priceInfo.min + priceInfo.max) / 2;
          calculatedPrice = area * avgPrice;
        } else if (priceInfo.type === "perSqft" && priceInfo.min) {
          calculatedPrice = area * priceInfo.min;
        }
        
        return { ...service, area, selectedPrice: calculatedPrice };
      }
      return service;
    }));
  };

  const updateSelectedPrice = (id: string, pricePerSqft: number) => {
    setSelectedServices(selectedServices.map(service => {
      if (service.id === id) {
        const area = service.area || 0;
        const totalPrice = area * pricePerSqft;
        return { ...service, pricePerSqft, selectedPrice: totalPrice };
      }
      return service;
    }));
  };

  const calculateTotal = (): number => {
    return selectedServices.reduce((total, service) => {
      if (service.type === "custom") return total;
      return total + (service.selectedPrice || 0);
    }, 0);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const total = calculateTotal();

  return (
    <div className="mb-20">
      {/* Calculator Toggle Button */}
      <div className="text-center mb-12">
        <button
          onClick={() => setShowCalculator(!showCalculator)}
          className="inline-flex items-center bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="mr-2 text-2xl">🧮</span>
          <span>{showCalculator ? "Hide" : "Show"} Price Calculator</span>
        </button>
      </div>

      {showCalculator && (
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Price Calculator
                </span>
              </h3>
              <p className="text-gray-600 font-inter">Select services and enter details to calculate your total cost</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Services Selection */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Select Services</h4>
                
                {/* Home Services */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-orange-600 mb-3 font-poppins">🔧 Home Services</h5>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {PRICING.homeServices.map((item, index) => {
                      const id = `home-${item.service}`;
                      const isSelected = selectedServices.some(s => s.id === id);
                      return (
                        <label
                          key={index}
                          className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                            isSelected ? "bg-orange-50 border-2 border-orange-500" : "bg-gray-50 border-2 border-transparent hover:bg-orange-50/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleService(item, "home")}
                            className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
                          />
                          <div className="ml-3 flex-1">
                            <div className="font-semibold text-gray-900 font-inter">{item.service}</div>
                            <div className="text-sm text-gray-600 font-inter">{item.price}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Construction Services */}
                <div>
                  <h5 className="text-lg font-semibold text-orange-600 mb-3 font-poppins">🏗️ Construction Services</h5>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {PRICING.construction.map((item, index) => {
                      const id = `construction-${item.service}`;
                      const isSelected = selectedServices.some(s => s.id === id);
                      return (
                        <label
                          key={index}
                          className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                            isSelected ? "bg-orange-50 border-2 border-orange-500" : "bg-gray-50 border-2 border-transparent hover:bg-orange-50/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleService(item, "construction")}
                            className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
                          />
                          <div className="ml-3 flex-1">
                            <div className="font-semibold text-gray-900 font-inter">{item.service}</div>
                            <div className="text-sm text-gray-600 font-inter">{item.price}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Calculation Panel */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Selected Services & Details</h4>
                
                {selectedServices.length === 0 ? (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="text-4xl mb-4">📋</div>
                    <p className="text-gray-600 font-inter">No services selected. Select services from the left to calculate.</p>
                  </div>
                ) : (
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {selectedServices.map((service) => {
                      const priceInfo = parsePrice(service.price);
                      return (
                        <div key={service.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-semibold text-gray-900 font-inter">{service.name}</h5>
                            {service.type !== "custom" && service.selectedPrice !== undefined && (
                              <span className="text-orange-600 font-bold font-poppins">
                                {formatCurrency(service.selectedPrice)}
                              </span>
                            )}
                            {service.type === "custom" && (
                              <span className="text-gray-500 text-sm font-inter">Custom Quote</span>
                            )}
                          </div>
                          
                          {service.type === "perSqft" && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                                Area (sq.ft)
                              </label>
                              <input
                                type="number"
                                min="0"
                                value={service.area || ""}
                                onChange={(e) => updateArea(service.id, parseFloat(e.target.value) || 0)}
                                placeholder="Enter area"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none font-inter"
                              />
                              {priceInfo.min && priceInfo.max && priceInfo.min !== priceInfo.max && (
                                <p className="text-xs text-gray-500 mt-1 font-inter">
                                  Price range: ₹{priceInfo.min} - ₹{priceInfo.max} per sq.ft (using average)
                                </p>
                              )}
                            </div>
                          )}
                          
                          {service.type === "range" && priceInfo.min && priceInfo.max && (
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                                  Select Price per sq.ft
                                </label>
                                <input
                                  type="range"
                                  min={priceInfo.min}
                                  max={priceInfo.max}
                                  step="50"
                                  value={service.pricePerSqft || priceInfo.min}
                                  onChange={(e) => {
                                    const pricePerSqft = parseInt(e.target.value);
                                    updateSelectedPrice(service.id, pricePerSqft);
                                    // Recalculate total if area is set
                                    if (service.area && service.area > 0) {
                                      updateArea(service.id, service.area);
                                    }
                                  }}
                                  className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1 font-inter">
                                  <span>₹{priceInfo.min.toLocaleString('en-IN')}</span>
                                  <span className="font-semibold text-orange-600">
                                    ₹{(service.pricePerSqft || priceInfo.min).toLocaleString('en-IN')} per sq.ft
                                  </span>
                                  <span>₹{priceInfo.max.toLocaleString('en-IN')}</span>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                                  Area (sq.ft)
                                </label>
                                <input
                                  type="number"
                                  min="0"
                                  value={service.area || ""}
                                  onChange={(e) => {
                                    const area = parseFloat(e.target.value) || 0;
                                    const pricePerSqft = service.selectedPrice || priceInfo.min || 0;
                                    updateArea(service.id, area);
                                    updateSelectedPrice(service.id, area * pricePerSqft);
                                  }}
                                  placeholder="Enter area in sq.ft"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none font-inter"
                                />
                                {service.area && service.area > 0 && service.pricePerSqft && (
                                  <p className="text-xs text-gray-600 mt-1 font-inter">
                                    {service.area} sq.ft × ₹{service.pricePerSqft.toLocaleString('en-IN')} = {formatCurrency(service.selectedPrice || 0)}
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {service.type === "custom" && (
                            <p className="text-sm text-gray-600 font-inter">
                              This service requires a custom quote. Please contact us for pricing.
                            </p>
                          )}
                          
                          <button
                            onClick={() => setSelectedServices(selectedServices.filter(s => s.id !== service.id))}
                            className="mt-2 text-sm text-red-600 hover:text-red-700 font-semibold font-inter"
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Total Calculation */}
                {selectedServices.length > 0 && (
                  <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold font-poppins">Estimated Total:</span>
                      <span className="text-3xl font-bold font-poppins">
                        {formatCurrency(total)}
                      </span>
                    </div>
                    {selectedServices.some(s => s.type === "custom") && (
                      <p className="text-sm text-orange-100 mt-2 font-inter">
                        * Some services require custom quotes. Final price may vary.
                      </p>
                    )}
                    <p className="text-xs text-orange-100 mt-3 font-inter">
                      This is an estimate. Final cost may vary based on materials and site conditions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

