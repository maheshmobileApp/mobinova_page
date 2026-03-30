import React from "react";
import Button from "./ui/Button";
import { COMPANY, NAV_ITEMS, type MenuItem } from "../constants";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-bg-navbar px-20 py-4">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <Button>M</Button>
                    <span className="text-text-dark font-semibold text-lg">
                        {COMPANY.name}
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    {NAV_ITEMS.map((item: MenuItem) => (
                        <a
                            key={item.label}
                            href={item.path}
                            className="text-text-grey hover:text-text-black transition-colors text-md font-semibold"
                        >
                            {item.label}
                        </a>
                    ))}

                    <Button>Get a Quote</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
