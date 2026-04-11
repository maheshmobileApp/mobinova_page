import React from "react";
import { PRIVACY_POLICY } from "../constants";

const PrivacyPolicyScreen: React.FC = () => {

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
     
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-10">Last updated: January 2025</p>

      <div className="space-y-8 text-gray-600 leading-relaxed">

        {PRIVACY_POLICY.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyScreen;
