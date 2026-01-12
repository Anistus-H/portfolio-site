'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';

export const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
            {/* Background Gradient Spot */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full px-6 z-10">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-neon-cyan font-mono text-sm tracking-[0.2em] mb-6"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-tight"
                    >
                        {profile.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-5xl text-text-secondary font-medium mb-12"
                    >
                        {profile.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-text-muted max-w-2xl leading-relaxed mb-16"
                    >
                        {profile.summary}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 text-white border-b border-transparent hover:border-neon-cyan transition-all pb-1 text-lg font-medium"
                        >
                            Get In Touch
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-neon-cyan" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
