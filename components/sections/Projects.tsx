'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export const Projects: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-end gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
                    <span className="text-neon-cyan font-mono mb-2">({projects.length})</span>
                </motion.div>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.github || project.demo || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative border-t border-white/10 py-12 transition-all hover:bg-white/5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 relative z-10 px-4 md:px-8">
                                {/* Number */}
                                <span className="text-text-muted font-mono text-sm">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Project Info */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-secondary max-w-xl line-clamp-2 md:line-clamp-none">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack - Mobile Only (Desktop shows on hover/always depending on pref, here always for clarity) */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.techStack.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="text-xs font-mono text-neon-cyan/80 bg-neon-cyan/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Metadata */}
                                <div className="flex flex-col items-end gap-2 md:w-32">
                                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                                        {project.category.replace(' Development', '')}
                                    </span>
                                    <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-neon-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    );
};
