'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { engineerStats } from '@/data/stats';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 pt-32 px-6 md:px-12 lg:px-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-neon-cyan/50" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-text-secondary text-lg leading-relaxed"
                    >
                        <p>
                            {profile.summary}
                        </p>
                        <p>
                            With expertise spanning embedded firmware, full-stack web development, and cloud infrastructure,
                            I thrive at the intersection of hardware and software. Whether it&apos;s optimizing firmware for
                            resource-constrained microcontrollers or architecting scalable cloud platforms, I bring a
                            systems-thinking approach to every challenge.
                        </p>

                        <div className="pt-6">
                            <Button
                                variant="outline"
                                href="/Anistus-CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-bg-primary"
                            >
                                Download CV
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="p-6 bg-white/5 rounded-sm border border-white/10">
                            <h4 className="text-3xl font-bold text-white mb-2">{engineerStats[0].value}+</h4>
                            <p className="text-sm font-mono text-text-muted uppercase tracking-widest">Years Experience</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-sm border border-white/10">
                            <h4 className="text-3xl font-bold text-white mb-2">{engineerStats[1].value}+</h4>
                            <p className="text-sm font-mono text-text-muted uppercase tracking-widest">Projects</p>
                        </div>
                        <div className="col-span-2 p-6 bg-white/5 rounded-sm border border-white/10">
                            <p className="text-sm font-mono text-neon-cyan uppercase tracking-widest mb-2">{profile.education.degree}</p>
                            <p className="text-white text-lg font-bold">{profile.education.institution}</p>
                            <p className="text-text-muted mt-1">{profile.education.period}</p>
                        </div>

                        <div className="col-span-2 p-6 bg-white/5 rounded-sm border border-white/10">
                            <h4 className="text-neon-cyan font-mono uppercase tracking-widest mb-4">Core Expertise</h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {[
                                    'Embedded Systems',
                                    'Firmware Dev',
                                    'IoT Solutions',
                                    'Full-Stack Web',
                                    'Cloud Architecture',
                                    'CI/CD Pipelines'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                                        <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
