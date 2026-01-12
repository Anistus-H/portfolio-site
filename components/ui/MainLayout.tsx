'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Code,
    Briefcase,
    FolderKanban,
    BarChart2,
    Mail,
    Menu,
    X,
    Github,
    Linkedin,
    Twitter
} from 'lucide-react';
import { profile } from '@/data/profile';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { name: 'About', href: '#about', icon: User },
        { name: 'Skills', href: '#skills', icon: Code },
        { name: 'Experience', href: '#experience', icon: Briefcase },
        { name: 'Projects', href: '#projects', icon: FolderKanban },
        { name: 'Stats', href: '#stats', icon: BarChart2 },
        { name: 'Contact', href: '#contact', icon: Mail },
    ];

    // Handle scroll spy to highlight active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 200; // Offset

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
        <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col md:flex-row">
            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-bg-primary/90 backdrop-blur-md border-b border-white/5 z-50 flex items-center justify-between px-6">
                <div className="font-bold text-xl tracking-tight text-white">
                    ANISTUS<span className="text-neon-cyan">.</span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-text-primary hover:text-neon-cyan transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden fixed inset-0 top-16 bg-bg-primary/95 backdrop-blur-xl z-40 p-6 flex flex-col gap-8"
                >
                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-light text-text-primary hover:text-neon-cyan transition-colors flex items-center gap-4"
                            >
                                <item.icon size={24} className="opacity-70" />
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto flex gap-6 justify-center">
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            )}

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed top-0 left-0 h-screen w-20 lg:w-64 flex-col border-r border-white/5 bg-bg-primary/50 backdrop-blur-sm z-50">
                <div className="h-24 flex items-center justify-center lg:justify-start lg:px-8 border-b border-white/5">
                    <a href="#hero" className="font-bold text-xl tracking-tight text-white group">
                        <span className="lg:hidden">A.</span>
                        <span className="hidden lg:block group-hover:text-neon-cyan transition-colors">
                            ANISTUS<span className="text-neon-cyan group-hover:text-white transition-colors">.</span>
                        </span>
                    </a>
                </div>

                <nav className="flex-1 flex flex-col py-12 gap-2 px-3">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`
                                    relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                                    ${isActive ? 'bg-white/5 text-neon-cyan' : 'text-text-muted hover:text-white hover:bg-white/5'}
                                `}
                            >
                                <item.icon size={20} className={`transition-colors ${isActive ? 'text-neon-cyan' : 'group-hover:text-neon-cyan'}`} />
                                <span className="hidden lg:block font-medium text-sm tracking-wide">{item.name}</span>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute left-0 w-1 h-6 bg-neon-cyan rounded-r-full"
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-white/5 flex flex-col gap-4 items-center lg:items-start lg:px-8">
                    <p className="hidden lg:block text-xs text-text-muted uppercase tracking-wider mb-2">Socials</p>
                    <div className="flex gap-4">
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-neon-cyan transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-neon-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-20 lg:ml-64 pt-16 md:pt-0 min-h-screen">
                <div className="max-w-6xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
};
