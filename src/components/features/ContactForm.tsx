"use client";

import { useState, FormEvent } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { validateEmail, validatePhone } from "@/lib/utils";
import { ContactFormData } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Interested In
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          >
            <option value="">Select a service</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="painter">Painter</option>
            <option value="carpenter">Carpenter</option>
            <option value="welder">Welder</option>
            <option value="tile-setter">Tile Setter</option>
            <option value="cleaning">Deep Cleaning</option>
            <option value="interior-setup">Interior Setup</option>
            <option value="residential">Residential Construction</option>
            <option value="commercial">Commercial Construction</option>
            <option value="renovation">Renovation & Remodeling</option>
            <option value="architecture">Architecture & Design</option>
            <option value="interior-design">Interior Design</option>
          </select>
        </div>
      </div>

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        rows={5}
        required
      />

      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white hover:from-orange-700 hover:to-amber-600">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

