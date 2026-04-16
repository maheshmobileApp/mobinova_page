import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServivesSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import AboutUsSection from "../components/AboutUsSection";
import TechStackSection from "../components/TechStackSection";
import ContactSection from "../components/ContactUsSection";
import Footer from "../components/Footer";
import ReviewsSection from "../components/ReviewSection";
import ProjectsSection from "../components/Projects";

const HomeScreen: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <HowWeWorkSection />
            <AboutUsSection />
            <TechStackSection />
            <ProjectsSection />
            <ReviewsSection />
            <ContactSection />
            <Footer />
        </>

    );
};

export default HomeScreen;
