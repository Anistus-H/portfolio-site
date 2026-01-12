'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 px-6 lg:px-20 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-neon-cyan/50" />
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Mobile Left Border */}
                            <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 md:hidden" />
                            <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-neon-cyan md:hidden" />

                            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
                                {/* Date / Period */}
                                <div className="text-text-muted font-mono text-sm py-1">
                                    {exp.period}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="text-neon-cyan text-lg mb-4 inline-block font-mono lowercase">
                                        @{exp.company}
                                    </div>

                                    <ul className="space-y-3 mt-4">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="text-text-secondary leading-relaxed flex items-start gap-3 text-sm md:text-base">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
