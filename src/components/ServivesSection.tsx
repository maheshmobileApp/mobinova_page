import React from "react";
import { SERVICES, type Service } from "../constants";

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-bg-light">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="section-heading text-primary">OUR SERVICES</p>
                <h2 className="section-sub-heading mb-3">End-to-End IT Solutions</h2>
                <p className="section-description text-text-muted max-w-2xl mx-auto">
                    From concept to deployment and beyond — we deliver complete technology solutions
                    tailored to your business objectives.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {SERVICES.map((service: Service, index: number) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                        <p className="text-text-muted text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
