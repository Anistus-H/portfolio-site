'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { profile } from '@/data/profile';

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Animated background particles - Simplified for purity */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                        style={{
                            left: `${(i * 7) % 100}%`,
                            top: `${(i * 13) % 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                            duration: 3 + (i % 3),
                            repeat: Infinity,
                            delay: (i % 5) * 0.4,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Greeting */}
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-px w-8 bg-neon-cyan/30" />
                        <p className="text-neon-cyan font-mono text-xs tracking-[0.3em] uppercase">
                            System_Status: Online
                        </p>
                        <div className="h-px w-8 bg-neon-cyan/30" />
                    </motion.div>

                    {/* Name with Corner Brackets */}
                    <div className="relative inline-block mb-6">
                        <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-neon-cyan/40" />
                        <div className="absolute -top-4 -right-4 w-4 h-4 border-t border-r border-neon-cyan/40" />
                        <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b border-l border-neon-cyan/40" />
                        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-neon-cyan/40" />

                        <motion.h1
                            className="text-6xl md:text-8xl font-bold px-8 py-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="gradient-text">{profile.name}</span>
                        </motion.h1>
                    </div>

                    {/* Technical Metadata */}
                    <motion.div
                        className="flex justify-center gap-8 mb-8 text-[10px] font-mono text-text-muted uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span>Class: Engineer</span>
                        <span>Level: Senior</span>
                        <span>ID: 0x4F2A</span>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="inline-block glass px-8 py-4 rounded-sm border border-neon-cyan/20">
                            <p className="text-xl md:text-2xl text-text-primary font-heading tracking-wider">
                                {profile.title}
                            </p>
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {profile.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            icon="🚀"
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                            icon="📡"
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom left-1/2 transform -translate-x-1/2 pt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.2 },
                        y: { duration: 2, repeat: Infinity }
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-text-muted text-sm font-mono">SCROLL</span>
                        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-start justify-center p-1">
                            <motion.div
                                className="w-1 h-2 bg-neon-cyan rounded-full"
                                animate={{ y: [0, 16, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
        </section>
    );
};
