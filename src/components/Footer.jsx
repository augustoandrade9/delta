import React from 'react';
import Logo from "../assets/LogoLetraPreta.png"
import Linkedin from '../assets/linkedin.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-500 text-white">
            <div className="rounded-t-3xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        <div className="flex items-center gap-3">
                            <img
                                src={Logo}
                                alt="Delta Hs Logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        <div className="flex gap-6">
                            <a
                                href="https://www.linkedin.com/company/delta-hs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <img src={Linkedin} alt="Linkedin" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="text-center text-xs mt-6 opacity-80">
                        © {currentYear} DELTA HS
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

