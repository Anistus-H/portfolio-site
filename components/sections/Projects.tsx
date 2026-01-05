'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { projects } from '@/data/projects';

export const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="py-24 pt-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeading subtitle="Things I've built and deployed">
                    Featured Projects
                </SectionHeading>

                {/* Category filter */}
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-sm font-mono text-[10px] tracking-[0.2em] transition-all relative overflow-hidden group ${selectedCategory === category
                                ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan'
                                : 'glass text-text-secondary border border-white/5 hover:border-neon-cyan/50'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {selectedCategory === category && (
                                <motion.div
                                    className="absolute inset-0 bg-neon-cyan/10"
                                    layoutId="activeCategory"
                                />
                            )}
                            <span className="relative z-10">{category.toUpperCase()}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Projects grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="relative group">
                                <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50 uppercase">
                                    PROJECT_ID_{project.id}
                                </div>
                                <Card variant="hud">
                                    <div className="flex flex-col h-full">
                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="text-xl font-bold text-neon-cyan font-heading leading-tight tracking-tight">
                                                    {project.title}
                                                </h3>
                                                <div className="w-8 h-8 flex-shrink-0 border border-neon-cyan/20 flex items-center justify-center text-lg">
                                                    {project.category.includes('Embedded') && '🔧'}
                                                    {project.category.includes('IoT') && '📡'}
                                                    {project.category.includes('Web') && '🌐'}
                                                    {project.category.includes('Mobile') && '📱'}
                                                    {project.category.includes('Biomedical') && '🏥'}
                                                </div>
                                            </div>
                                            <div className="inline-block glass px-3 py-1 border border-neon-purple/20 rounded-sm">
                                                <span className="text-neon-purple font-mono text-[10px] tracking-widest uppercase">{project.category}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech stack */}
                                        <div className="mb-6">
                                            <p className="text-neon-green text-[10px] font-mono mb-3 tracking-widest uppercase opacity-70">Tech_Stack:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.slice(0, 5).map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="glass-strong px-2 py-1 border border-white/5 rounded-sm text-[10px] text-text-secondary font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 5 && (
                                                    <span className="glass-strong px-2 py-1 border border-neon-cyan/20 rounded-sm text-[10px] text-neon-cyan font-mono">
                                                        +{project.techStack.length - 5}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="mb-6">
                                            <p className="text-neon-blue text-[10px] font-mono mb-3 tracking-widest uppercase opacity-70">Key_Achievements:</p>
                                            <ul className="space-y-2">
                                                {project.highlights.slice(0, 2).map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-text-secondary text-[11px] leading-snug">
                                                        <span className="text-neon-cyan mt-1 w-1 h-1 bg-neon-cyan/40 rounded-full" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Footer */}
                                        {project.company && (
                                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                                <p className="text-text-muted text-[10px] font-mono uppercase tracking-tighter">
                                                    {project.company}
                                                </p>
                                                <span className="text-[10px] font-mono text-text-muted opacity-50">{project.period}</span>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};
