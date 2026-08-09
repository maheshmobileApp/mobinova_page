import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { COMPANY, NAV_ITEMS, type MenuItem } from "../constants";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-bg-navbar px-4 sm:px-6 lg:px-20 py-4 relative">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 min-w-0">
                    <Button>M</Button>
                    <span className="text-text-dark font-semibold text-lg truncate">
                        {COMPANY.name}
                    </span>
                </div>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {NAV_ITEMS.map((item: MenuItem) => (
                        <a
                            key={item.label}
                            href={item.path}
                            className="text-text-grey hover:text-text-black transition-colors text-md font-semibold"
                        >
                            {item.label}
                        </a>
                    ))}

                    <Button href="#contact">Get a Quote</Button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                    className="lg:hidden text-text-dark p-2 -mr-2"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav panel */}
            {isOpen && (
                <div className="lg:hidden mt-4 flex flex-col gap-4 pb-2">
                    {NAV_ITEMS.map((item: MenuItem) => (
                        <a
                            key={item.label}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-text-grey hover:text-text-black transition-colors text-md font-semibold"
                        >
                            {item.label}
                        </a>
                    ))}

                    <Button href="#contact" className="w-full text-center" onClick={() => setIsOpen(false)}>
                        Get a Quote
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
