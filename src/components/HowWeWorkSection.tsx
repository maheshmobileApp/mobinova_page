import React from "react";
import { FaSync } from "react-icons/fa";
import { HOW_WE_WORK_STEPS, type Step } from "../constants";

const HowWeWorkSection: React.FC = () => {
    return (
        <section className="py-20 bg-bg-light">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="section-heading text-primary">HOW WE WORK</p>
                <h2 className="section-sub-heading mb-3">Our Development Process</h2>
                <p className="section-description text-text-muted max-w-2xl mx-auto">
                    A proven, transparent process that delivers results on time and within budget.
                </p>
            </div>


            {/* Grid */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {HOW_WE_WORK_STEPS.map((step: Step, index: number) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-accent text-accent flex items-center justify-center mb-4">
                            <FaSync size={16} />
                        </div>
                        <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                        <p className="text-text-muted text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWeWorkSection;
