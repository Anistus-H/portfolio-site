'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { engineerStats } from '@/data/stats';

export const EngineerStats: React.FC = () => {
    return (
        <section id="stats" className="py-24 px-6 relative bg-bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {engineerStats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center min-w-[140px]"
                        >
                            <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                                <span className="text-2xl text-neon-cyan ml-1">{stat.unit}</span>
                            </h4>
                            <p className="text-sm font-mono text-neon-cyan/80 uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
