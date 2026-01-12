'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-bg-primary relative z-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-white tracking-tight">{profile.nickname}</span>
                    <span className="text-white/20">|</span>
                    <span className="text-text-muted text-sm font-mono">{profile.title}</span>
                </div>

                <div className="flex gap-6">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-cyan transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-cyan transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${profile.email}`} className="text-text-secondary hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-white/50 text-xs font-mono">
                    &copy; {currentYear} {profile.name}
                </div>
            </div>
        </footer>
    );
};
