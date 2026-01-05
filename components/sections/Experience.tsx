'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { experiences } from '@/data/experience';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 pt-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeading subtitle="My professional journey">
                    Work Experience
                </SectionHeading>

                <div className="relative mt-16">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue transform md:-translate-x-1/2 opacity-30" />

                    {/* Experience items */}
                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Timeline marker */}
                                <div className="absolute left-0 md:left-1/2 top-8 w-8 h-8 transform -translate-x-1/2 md:-translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                                    <div className="w-3 h-3 bg-bg-primary border border-neon-cyan rotate-45" />
                                    <div className="absolute inset-0 border border-neon-cyan/20 animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="relative">
                                        <div className={`absolute -top-2 ${index % 2 === 0 ? '-left-2' : '-right-2'} text-[8px] font-mono text-neon-cyan/50 uppercase`}>
                                            EXP_LOG_{exp.id}
                                        </div>
                                        <Card variant="hud">
                                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-neon-cyan font-heading tracking-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-lg text-text-primary mt-1 font-mono opacity-80">{exp.company}</p>
                                                </div>
                                                <div className="glass px-4 py-1 border border-neon-purple/30 rounded-sm">
                                                    <span className="text-neon-purple font-mono text-xs tracking-widest">{exp.period}</span>
                                                </div>
                                            </div>

                                            <div className="inline-block glass-strong px-3 py-1 border border-neon-green/20 rounded-sm mb-6">
                                                <span className="text-neon-green text-[10px] font-mono uppercase tracking-widest">{exp.type}</span>
                                            </div>

                                            <ul className="space-y-4">
                                                {exp.achievements.map((achievement, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.1 * i }}
                                                    >
                                                        <span className="text-neon-cyan mt-1.5 w-1.5 h-1.5 border border-neon-cyan rotate-45 flex-shrink-0" />
                                                        <span>{achievement}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                                                <span className="text-[8px] font-mono text-text-muted uppercase">Status: Verified</span>
                                                <div className="flex gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-neon-cyan/20" />
                                                    <div className="w-2 h-2 rounded-full bg-neon-purple/20" />
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
