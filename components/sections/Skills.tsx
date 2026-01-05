'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { SkillMeter } from '../ui/SkillMeter';
import { getAllSkillsGrouped, skillCategories } from '@/data/skills';

export const Skills: React.FC = () => {
    const skillsGrouped = getAllSkillsGrouped();

    const categoryColors: Record<string, 'cyan' | 'purple' | 'blue' | 'green'> = {
        embedded: 'cyan',
        languages: 'purple',
        backend: 'blue',
        frontend: 'green',
        cloud: 'cyan',
        protocols: 'purple',
        tools: 'blue'
    };

    return (
        <section id="skills" className="py-24 pt-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeading subtitle="Technologies and tools I work with">
                    Skills & Tech Stack
                </SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillsGrouped).map(([categoryKey, skills], categoryIndex) => (
                        <div key={categoryKey} className="relative">
                            <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50 uppercase">
                                {categoryKey}_MODULE_ACTIVE
                            </div>
                            <Card variant="hud">
                                <h3 className="text-xl font-bold text-neon-cyan mb-8 font-heading flex items-center justify-between">
                                    <span className="tracking-wider">
                                        {skillCategories[categoryKey as keyof typeof skillCategories]}
                                    </span>
                                    <span className="text-xs font-mono opacity-50">
                                        0x0{categoryIndex + 1}
                                    </span>
                                </h3>
                                <div className="space-y-2">
                                    {skills.map((skill, index) => (
                                        <SkillMeter
                                            key={skill.name}
                                            name={skill.name}
                                            level={skill.level}
                                            color={categoryColors[categoryKey]}
                                            delay={categoryIndex * 0.1 + index * 0.05}
                                        />
                                    ))}
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-neon-cyan/40' : 'bg-bg-tertiary'}`} />
                                        ))}
                                    </div>
                                    <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest">
                                        Load_Status: Nominal
                                    </span>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
