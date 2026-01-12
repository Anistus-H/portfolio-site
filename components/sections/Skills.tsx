'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getAllSkillsGrouped, skillCategories } from '@/data/skills';

export const Skills: React.FC = () => {
    const skillsGrouped = getAllSkillsGrouped();

    return (
        <section id="skills" className="py-24 px-6 lg:px-20 relative bg-bg-secondary/20">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Toolkit</h2>
                    <div className="h-1 w-20 bg-neon-cyan/50" />
                </motion.div>

                <div className="space-y-16">
                    {Object.entries(skillsGrouped).map(([categoryKey, skills], categoryIndex) => (
                        <motion.div
                            key={categoryKey}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-widest opacity-80 border-b border-white/10 pb-2 inline-block">
                                {skillCategories[categoryKey as keyof typeof skillCategories]}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={skill.name}
                                        className="px-4 py-2 bg-white/5 text-text-secondary text-sm font-mono rounded-sm hover:text-neon-cyan hover:bg-white/10 transition-all cursor-default border border-transparent hover:border-neon-cyan/20"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
