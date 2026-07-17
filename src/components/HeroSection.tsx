import React from "react";
import { COMPANY } from "../constants";
import heroBg from "../assets/hero-bg.jpg";
import Button from "./ui/Button";

const HeroSection: React.FC = () => {
    return (
        <div  className="relative w-full h-[90vh] flex items-center text-white overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center z-[1]"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            <div
                className="absolute inset-0 z-[2]"
                style={{ background: "linear-gradient(to right, rgba(10,20,40,0.9), rgba(10,20,40,0.6))" }}
            />

            <div className="relative z-[3] max-w-5xl ml-8 px-30 text-left">

                <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-primary-light text-sm mb-6">
                    ● {COMPANY.tagline}
                </span>

                <h1 className="text-6xl font-bold leading-tight mb-6 section-font">
                    {COMPANY.heroHeading.line1} <span className="text-accent">{COMPANY.heroHeading.highlight1}</span> <br />
                    <span className="text-accent">{COMPANY.heroHeading.highlight2}</span> <br />
                    {COMPANY.heroHeading.line2}
                </h1>

                <p className="max-w-xl text-slate-300 mb-6 text-lg">
                    {COMPANY.description}
                </p>

                <div className="flex gap-6 mb-8 text-sm">
                    {COMPANY.features.map((feature, index) => (
                        <span key={index}>{feature}</span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button href="#contact">Start a Project →</Button>
                    <Button href="#services" variant="outline">
                        Our Services
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
