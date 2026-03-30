import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "../constants";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-600 font-semibold text-sm mb-2">
            CONTACT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let’s Discuss Your Project
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Ready to bring your idea to life? Get in touch and our team
            will get back to you within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600 text-sm">
                  {COMPANY.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Phone className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600 text-sm">
                  {COMPANY.phone}
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <MapPin className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-gray-600 text-sm">
                  {COMPANY.address}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <form className="space-y-4">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Service</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Button */}
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:opacity-90 transition"
            >
              Send Message →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;