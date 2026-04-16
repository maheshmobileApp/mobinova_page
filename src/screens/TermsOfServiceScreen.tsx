import React from "react";
import { TERMS_OF_SERVICE } from "../constants";

const TermsOfServiceScreen: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-10">Last updated: {TERMS_OF_SERVICE.lastUpdated}</p>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        {TERMS_OF_SERVICE.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsOfServiceScreen;
