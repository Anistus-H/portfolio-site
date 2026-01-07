'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { profile } from '@/data/profile';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 pt-32 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <SectionHeading subtitle="Who I am and what I do">
                    About Me
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Main summary */}
                    <div className="relative">
                        <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50">DATA_BLOCK_01</div>
                        <Card variant="hud">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-neon-cyan mb-6 font-heading tracking-tight">
                                    Engineer. Developer. Problem Solver.
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-text-secondary leading-relaxed">
                                        {profile.summary}
                                    </p>
                                    <p className="text-text-secondary leading-relaxed">
                                        With expertise spanning embedded firmware, full-stack web development, and cloud infrastructure,
                                        I thrive at the intersection of hardware and software. Whether it&apos;s optimizing firmware for
                                        resource-constrained microcontrollers or architecting scalable cloud platforms, I bring a
                                        systems-thinking approach to every challenge.
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neon-cyan/10 flex flex-wrap items-center gap-6">
                                    <div className="text-center">
                                        <p className="text-neon-cyan font-mono text-xl font-bold">05+</p>
                                        <p className="text-[8px] font-mono text-text-muted uppercase">Years Exp</p>
                                    </div>
                                    <div className="w-px h-8 bg-neon-cyan/10" />
                                    <div className="text-center">
                                        <p className="text-neon-purple font-mono text-xl font-bold">50+</p>
                                        <p className="text-[8px] font-mono text-text-muted uppercase">Projects</p>
                                    </div>
                                    <div className="w-px h-8 bg-neon-cyan/10" />
                                    <div className="text-center">
                                        <p className="text-neon-blue font-mono text-xl font-bold">100%</p>
                                        <p className="text-[8px] font-mono text-text-muted uppercase">Uptime</p>
                                    </div>
                                    <div className="ml-auto">
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            href="/Anistus-CV.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            icon="📥"
                                        >
                                            Download CV
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </Card>
                    </div>

                    {/* Education & Quick facts */}
                    <div className="space-y-8">
                        <div className="relative">
                            <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-purple/50">ACADEMIC_RECORD</div>
                            <Card variant="glass">
                                <h3 className="text-xl font-bold text-neon-purple mb-4 font-heading flex items-center gap-2">
                                    <span className="text-sm opacity-50">01.</span> Education
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-text-primary font-semibold tracking-wide">{profile.education.degree}</p>
                                    <p className="text-text-secondary text-sm">{profile.education.institution}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-text-muted text-[10px] font-mono uppercase">{profile.education.period}</p>
                                        <div className="glass px-3 py-1 rounded-sm border border-neon-green/20">
                                            <span className="text-neon-green font-mono text-xs">GPA: {profile.education.gpa}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-blue/50">CORE_CAPABILITIES</div>
                            <Card variant="glass">
                                <h3 className="text-xl font-bold text-neon-blue mb-4 font-heading flex items-center gap-2">
                                    <span className="text-sm opacity-50">02.</span> Core Expertise
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                    {[
                                        'Embedded Systems',
                                        'Firmware Optimization',
                                        'IoT & Wireless',
                                        'Full-Stack Web',
                                        'Cloud & DevOps',
                                        'CI/CD Pipelines'
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center gap-2 text-text-secondary text-sm"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <div className="w-1 h-1 bg-neon-blue rounded-full" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
