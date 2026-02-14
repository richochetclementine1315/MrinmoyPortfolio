import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../../constants';
import { scrollToSection } from '../../utils';

/**
 * Navigation Component - Floating Glassmorphic Design
 * Transparent with backdrop blur and neon accents
 */

const Navigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isOnHero, setIsOnHero] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check if user is on Hero section
            const heroElement = document.getElementById('hero');
            if (heroElement) {
                const rect = heroElement.getBoundingClientRect();
                setIsOnHero(rect.bottom > 0);
            }

            // Update active section based on scroll position
            const sections = NAVIGATION_ITEMS.map(item => item.id);
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        const sectionId = href.replace('#', '');
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    // Hide navbar when not on Hero section
    if (!isOnHero) {
        return null;
    }

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl">
            {/* Glassmorphic Container */}
            <div className="bg-black/30 backdrop-blur-md border border-gray-800/50 rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-xl font-bold tracking-tight">
                        <span className="text-white">Port</span>
                        <span className="text-neon-green">folio</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {NAVIGATION_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.href)}
                                className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === item.id
                                    ? 'text-neon-green'
                                    : 'text-gray-400 hover-neon-green'
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white hover:text-neon-green transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="text-xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-800/50">
                        {NAVIGATION_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.href)}
                                className={`block w-full text-left py-2 transition-colors duration-300 ${activeSection === item.id
                                    ? 'text-neon-green'
                                    : 'text-gray-400 hover-neon-green'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
