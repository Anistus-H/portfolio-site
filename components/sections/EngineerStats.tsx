'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { engineerStats, techMastery } from '@/data/stats';

export const EngineerStats: React.FC = () => {
    const [counters, setCounters] = useState<Record<string, number>>({});

    useEffect(() => {
        const initialCounters: Record<string, number> = {};
        engineerStats.forEach(stat => {
            initialCounters[stat.id] = 0;
        });
        setCounters(initialCounters);

        // Animate counters
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            const newCounters: Record<string, number> = {};
            engineerStats.forEach(stat => {
                newCounters[stat.id] = Math.floor(stat.value * progress);
            });
            setCounters(newCounters);

            if (currentStep >= steps) {
                clearInterval(timer);
                // Set final values
                const finalCounters: Record<string, number> = {};
                engineerStats.forEach(stat => {
                    finalCounters[stat.id] = stat.value;
                });
                setCounters(finalCounters);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="stats" className="py-24 pt-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeading subtitle="System diagnostics and performance metrics">
                    Engineer Stats
                </SectionHeading>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {engineerStats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50 uppercase">
                                STAT_0{index + 1}
                            </div>
                            <Card variant="hud" hover={true}>
                                <div className="text-center py-2">
                                    <div className="text-3xl mb-3 opacity-80">{stat.icon}</div>
                                    <div className="text-2xl font-bold font-mono mb-1">
                                        <span className={`neon-text-${stat.color}`}>
                                            {counters[stat.id] || 0}{stat.unit}
                                        </span>
                                    </div>
                                    <div className="text-text-secondary text-[10px] font-mono uppercase tracking-widest opacity-60">
                                        {stat.label}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Mastery Levels */}
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px w-12 bg-neon-cyan/20" />
                        <h3 className="text-xl font-bold text-neon-cyan font-heading tracking-[0.2em] uppercase">
                            Tech Mastery Levels
                        </h3>
                        <div className="h-px w-12 bg-neon-cyan/20" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {techMastery.map((tech, index) => (
                            <motion.div
                                key={tech.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-purple/50 uppercase">
                                    CORE_LIB_{index}
                                </div>
                                <Card variant="glass" hover={true}>
                                    <div className="text-center">
                                        <div className="text-[10px] text-text-secondary mb-4 font-mono uppercase tracking-widest">
                                            {tech.category}
                                        </div>
                                        <div className="flex justify-center gap-1.5 mb-4">
                                            {[...Array(10)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`w-1.5 h-8 rounded-sm ${i < tech.level
                                                        ? 'bg-gradient-to-t from-neon-cyan to-neon-purple'
                                                        : 'bg-white/5'
                                                        }`}
                                                    initial={{ scaleY: 0 }}
                                                    whileInView={{ scaleY: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + i * 0.05 }}
                                                    style={{ transformOrigin: 'bottom' }}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-neon-green text-[10px] font-mono font-bold tracking-widest uppercase">
                                            {tech.experience}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Status Display */}
                <div className="relative">
                    <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50 uppercase">SYSTEM_DIAGNOSTICS</div>
                    <Card variant="hud">
                        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left py-2">
                            <div className="space-y-2">
                                <div className="text-neon-cyan font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">SYSTEM STATUS</div>
                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    <motion.div
                                        className="w-2.5 h-2.5 bg-neon-green rounded-full shadow-[0_0_10px_rgba(0,255,157,0.5)]"
                                        animate={{ opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-neon-green font-mono text-sm font-bold tracking-widest">OPERATIONAL</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-neon-purple font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">AVAILABILITY</div>
                                <div className="text-text-primary font-mono text-sm font-bold tracking-wide">
                                    OPEN_TO_OPPORTUNITIES
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-neon-blue font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">LOCATION</div>
                                <div className="text-text-primary font-mono text-sm tracking-widest">
                                    JAFFNA_SRI_LANKA_LK
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
