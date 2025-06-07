import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo-text-green.svg';
import { HashLink } from 'react-router-hash-link';
import { Config } from '../../Config';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white h-[80px] drop-shadow-sm' : 'bg-black/50  h-[120px] md:h-[192px]'}`
            }
        >
            <div className="container max-w-[1596px] mx-auto h-full px-6 flex items-center justify-between">
                {/* Navigation Section */}
                <nav className={`hidden xl:flex items-center space-x-8 ${isScrolled ? 'text-gray-800 font-medium ' : 'text-[#FAF2E9]'} text-lg`}>
                    {['O INWESTYCJI', 'LOKALIZACJA', 'WIZUALIZACJE'].map((item, index) => (
                        <HashLink smooth key={index} to={`#${item.split(" ").join("_").toLowerCase()}`} className={`${isScrolled ? "text-gray-800" : "hover:text-white"} transition-colors`}>
                            {item}
                        </HashLink>
                    ))}
                </nav>
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className={`transition-all duration-300 ${isScrolled ? 'h-[60px]' : 'h-[60px] md:h-[100px]'}`}
                    />
                </div>
                <nav className={`hidden xl:flex items-center space-x-8 ${isScrolled ? 'text-gray-800 font-medium' : 'text-[#FAF2E9]'} text-lg`}>
                    {['LOKALE', 'KONTAKT', Config.contact.phoneFormated].map((item, index) => {
                        const isPhone = index === 2;
                        const href = isPhone ? `tel:${Config.contact.phone}` : `#${item.split(" ").join("_").toLowerCase()}`;

                        return (
                            <div key={index}>
                                {isPhone ? (
                                    <a
                                        href={href}
                                        className="text-white font-montserrat border-2 border-mainColor px-2 py-4 bg-mainColor transition-all"
                                    >
                                        {item}
                                    </a>
                                ) : (
                                    <HashLink
                                        smooth
                                        to={href}
                                        className={`${isScrolled ? "text-gray-800" : "hover:text-white"} transition-colors`}
                                    >
                                        {item}
                                    </HashLink>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`xl:hidden p-2 ${isScrolled ? 'text-black' : 'text-white'}`} // Adjusted class to change color based on scroll
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full ${isScrolled ? 'bg-black/85 ' : 'bg-black/50 '}`}
                style={{
                    transition: 'all 0.3s',
                    height: isMenuOpen ? 'auto' : '0',
                    opacity: isMenuOpen ? 1 : 0,
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                }}
            >
                <ul className="flex flex-col xl:items-center gap-6 py-6 text-[#FAF2E9] text-lg px-6 xl:px-0">
                    {['O INWESTYCJI', 'LOKALIZACJA', 'WIZUALIZACJE', 'LOKALE', 'KONTAKT'].map((item, index) => (
                        <li key={index}>
                            <HashLink smooth key={index} to={`#${item.split(" ").join("_").toLowerCase()}`} className="hover:text-white transition-colors flex justify-between flex-row" onClick={() => setIsMenuOpen(false)}>
                                {item} <span><svg className="w-6 h-6 text-gray-800 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />
                                </svg>
                                </span>
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
