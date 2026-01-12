'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Stats', href: '#stats' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            {/* Slim Vertical Nav (Left) */}
            <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-10 border-r border-white/5 flex-col items-center justify-center py-24 z-60 bg-bg-primary/50 backdrop-blur-sm gap-12">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
                        className={`
                            text-[10px] font-mono tracking-[0.3em] uppercase transition-all duration-300 py-4
                            ${activeSection === item.href.substring(1)
                                ? 'text-neon-cyan font-bold scale-110'
                                : 'text-text-muted hover:text-white hover:scale-105'
                            }
                        `}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Top Fixed Header */}
            <header className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="font-bold text-xl tracking-tight text-white group z-50">
                        ANISTUS<span className="text-neon-cyan">.</span>
                    </a>

                    {/* Desktop Contact Button */}
                    <div className="hidden md:block">
                        <Button href="#contact" variant="outline" className="border-white/20 hover:border-neon-cyan/50 text-xs px-6">
                            Contact Me
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:text-neon-cyan transition-colors z-50"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="md:hidden fixed inset-0 bg-bg-primary z-40 flex flex-col items-center justify-center gap-8"
                >
                    <nav className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-light text-white hover:text-neon-cyan transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-light text-neon-cyan mt-4"
                        >
                            Contact Me
                        </a>
                    </nav>
                </motion.div>
            )}

            {/* Main Content Area */}
            <main className="lg:pl-12 pt-0 min-h-screen">
                {children}
            </main>
        </div>
    );
};
