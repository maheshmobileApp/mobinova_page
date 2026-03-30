import React from "react";
import Button from "./ui/Button";
import { COMPANY } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Button>M</Button>
              <h3 className="text-lg font-semibold text-gray-900">
                Mobinova Tech Solutions
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Building world-class mobile and web applications for businesses
              that demand excellence.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">
                Android Development
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                iOS Development
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                UI/UX Design
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Our Process
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Contact
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          
          {/* LEFT */}
          <p>@ {COMPANY.name}. All rights reserved.</p>

          {/* RIGHT */}
          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;