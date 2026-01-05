'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { profile } from '@/data/profile';

interface HUDLayoutProps {
    children: React.ReactNode;
}

export const HUDLayout: React.FC<HUDLayoutProps> = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [currentTime, setCurrentTime] = useState('');
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);

        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollPercent(Math.round(scrolled));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'HERO', href: '#hero' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'EXPERIENCE', href: '#experience' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'STATS', href: '#stats' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <div className="relative min-h-screen">
            {/* Fixed HUD Elements */}
            <div className="fixed inset-0 pointer-events-none z-50">
                {/* Top Navbar */}
                <header className="absolute top-0 left-0 w-full h-16 border-b border-neon-cyan/20 bg-bg-primary/40 backdrop-blur-md pointer-events-auto flex items-center justify-between px-6 md:px-12">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 border border-neon-cyan flex items-center justify-center text-[10px] font-mono text-neon-cyan">
                            AN
                        </div>
                        <div className="hidden md:block">
                            {/* <h1 className="text-sm font-heading tracking-widest text-neon-cyan uppercase pt-2">{profile.nickname}</h1> */}
                            <p className="text-[8px] font-mono text-text-muted tracking-[0.2em]">SYSTEM_VERSION: 1.0.4</p>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[10px] font-mono text-text-secondary hover:text-neon-cyan transition-colors tracking-widest"
                            >
                                [{item.name}]
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6 text-right">
                        <div className="hidden sm:block">
                            <p className="text-[10px] font-mono text-neon-purple tracking-widest">{currentTime}</p>
                            <p className="text-[8px] font-mono text-text-muted uppercase">System Time</p>
                        </div>
                        <div className="w-12 h-12 border border-neon-purple/30 rounded-full flex items-center justify-center relative">
                            <svg className="w-10 h-10 transform -rotate-90">
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="18"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="transparent"
                                    className="text-neon-purple/10"
                                />
                                <motion.circle
                                    cx="20"
                                    cy="20"
                                    r="18"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="transparent"
                                    strokeDasharray="113"
                                    strokeDashoffset={113 - (113 * scrollPercent) / 100}
                                    className="text-neon-purple"
                                />
                            </svg>
                            <span className="absolute text-[8px] font-mono text-neon-purple">{scrollPercent}%</span>
                        </div>
                    </div>
                </header>

                {/* Side HUD Accents */}
                <div className="absolute top-16 left-0 bottom-0 w-12 border-r border-neon-cyan/10 hidden md:flex flex-col items-center py-8 gap-12">
                    <div className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-mono text-text-muted tracking-[0.5em] uppercase">
                        Navigation_System
                    </div>
                    <div className="flex-1 w-px bg-gradient-to-b from-neon-cyan/20 via-transparent to-neon-purple/20" />
                    <div className="[writing-mode:vertical-lr] text-[8px] font-mono text-text-muted tracking-[0.5em] uppercase">
                        Core_Engine_v1.0
                    </div>
                </div>

                <div className="absolute top-16 right-0 bottom-0 w-12 border-l border-neon-purple/10 hidden md:flex flex-col items-center py-8 gap-12">
                    <div className="[writing-mode:vertical-lr] text-[8px] font-mono text-text-muted tracking-[0.5em] uppercase">
                        Data_Stream_Active
                    </div>
                    <div className="flex-1 w-px bg-gradient-to-b from-neon-purple/20 via-transparent to-neon-cyan/20" />
                    <div className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-mono text-text-muted tracking-[0.5em] uppercase">
                        Security_Protocol
                    </div>
                </div>

                {/* Corner Accents - Hidden on mobile to prevent overlap */}
                <div className="absolute top-20 left-16 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/40 hidden lg:block" />
                <div className="absolute top-20 right-16 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/40 hidden lg:block" />
                <div className="absolute bottom-8 left-16 w-4 h-4 border-b-2 border-l-2 border-neon-purple/40 hidden lg:block" />
                <div className="absolute bottom-8 right-16 w-4 h-4 border-b-2 border-r-2 border-neon-purple/40 hidden lg:block" />

                {/* Scroll Progress Bar */}
                <motion.div
                    className="absolute top-16 left-0 right-0 h-[1px] bg-neon-cyan z-50 origin-left"
                    style={{ scaleX }}
                />

                {/* Scan Line Effect */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan/5 z-40"
                    animate={{
                        top: ['0%', '100%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>

            {/* Main Content - Added top padding for fixed header */}
            <div className="md:pl-12 md:pr-12 pt-16">
                {children}
            </div>
        </div>
    );
};
