import React from "react";
import {
  Clock,
  Target,
  Users,
  BadgeCheck,
} from "lucide-react";
import { ABOUT_US_SECTIONS } from "../constants";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="section-heading text-primary">
            ABOUT US
          </p>

          <h2 className="section-sub-heading mb-3">
            Your Trusted Technology Partner
          </h2>

          <p className="section-description">
            We are a full-service IT company specializing in mobile and web
            application development. Our team of experienced engineers,
            designers, and strategists work together to deliver solutions
            that meet the highest standards of quality and performance.
          </p>

          <p className="section-description mb-3">
            From startups to enterprises, we partner with businesses across
            industries to transform ideas into scalable, secure, and
            user-friendly digital products.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {ABOUT_US_SECTIONS.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (CARDS) */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <Clock className="mx-auto text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-500 text-sm">Years in Business</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <Target className="mx-auto text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">350+</h3>
            <p className="text-gray-500 text-sm">Projects Delivered</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <Users className="mx-auto text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">120+</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <BadgeCheck className="mx-auto text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-500 text-sm">Client Retention</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;