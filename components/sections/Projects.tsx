'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Github, ExternalLink } from 'lucide-react';
import { projects, Project } from '@/data/projects';

export const Projects: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4 flex items-end gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Some of my Work</h2>
                    <span className="text-neon-cyan font-mono mb-2">({projects.length})</span>
                </motion.div>
                <div className="h-1 w-20 bg-neon-cyan/50 mb-10" />

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative border-t border-white/10 py-12 transition-all hover:bg-white/5 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => setSelectedProject(project)}
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
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-bg-secondary border border-white/10 rounded-lg shadow-2xl custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 text-text-muted hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 md:p-12">
                                {/* Header */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-neon-cyan uppercase tracking-wider">
                                        <span>{selectedProject.category}</span>
                                        {selectedProject.company && (
                                            <>
                                                <span className="text-white/20">•</span>
                                                <span>{selectedProject.company}</span>
                                            </>
                                        )}
                                        {selectedProject.period && (
                                            <>
                                                <span className="text-white/20">•</span>
                                                <span>{selectedProject.period}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-text-secondary text-lg leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Highlights */}
                                {selectedProject.highlights.length > 0 && (
                                    <div className="mb-8 p-6 bg-white/5 rounded-lg border border-white/5">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Highlights</h4>
                                        <ul className="space-y-3">
                                            {selectedProject.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-text-muted">
                                                    <span className="text-neon-cyan mt-1.5">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="mb-10">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1.5 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4 pt-8 border-t border-white/10">
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bg-primary font-bold rounded hover:bg-neon-cyan transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Source
                                        </a>
                                    )}
                                    {selectedProject.demo && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
