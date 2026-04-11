import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "../constants";

type FormFields = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};
type FormErrors = Partial<FormFields>;

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setLoading(true);
      setSuccess(false);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", company: "", service: "Web Development", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      }, 1500);
    }
  };

  const field = (key: keyof FormFields) => ({
    value: form[key],
    onChange: (e: any) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  const errClass = (key: keyof FormErrors) =>
    errors[key] ? "border-red-400" : "border-gray-200";

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-600 font-semibold text-sm mb-2">
            CONTACT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let’s Build Something Amazing Together 🚀
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Ready to bring your idea to life? Get in touch and our team
            will get back to you within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Email */}
            <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 hover:bg-blue-50 p-3 rounded-xl transition">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600 text-sm">{COMPANY.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 hover:bg-blue-50 p-3 rounded-xl transition">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Phone className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600 text-sm">{COMPANY.phone}</p>
              </div>
            </a>

            {/* Office */}
            <div className="flex items-start gap-4 hover:bg-blue-50 p-3 rounded-xl transition">
              <div className="bg-blue-100 p-3 rounded-xl">
                <MapPin className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-gray-600 text-sm">{COMPANY.address}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
              target="_blank"
              className="text-green-600 font-medium text-sm"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100">
          
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" {...field("name")}
                className={`w-full px-4 py-3 rounded-xl border ${errClass("name")} focus:ring-2 focus:ring-blue-500`} />
              
              <input type="email" placeholder="Email Address" {...field("email")}
                className={`w-full px-4 py-3 rounded-xl border ${errClass("email")} focus:ring-2 focus:ring-blue-500`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Company" {...field("company")}
                className={`w-full px-4 py-3 rounded-xl border ${errClass("company")} focus:ring-2 focus:ring-blue-500`} />

              <select {...field("service")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500">
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            <textarea rows={4} placeholder="Tell us about your project..." {...field("message")}
              className={`w-full px-4 py-3 rounded-xl border ${errClass("message")} focus:ring-2 focus:ring-blue-500`} />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium 
              hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce z-50">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default ContactSection;