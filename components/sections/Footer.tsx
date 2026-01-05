'use client';

import React from 'react';
import { profile } from '@/data/profile';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-16 px-6 bg-bg-secondary/30 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="relative">
                        <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50 uppercase">SYSTEM_ID_0x1A</div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold gradient-text font-heading tracking-tighter">
                                {profile.name.split(' ')[1]}
                            </h3>
                            <p className="text-text-muted text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">
                                Embedded Systems Engineer<br />
                                Software Architect<br />
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="relative">
                        <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-purple/50 uppercase">NAV_ARRAY</div>
                        <h4 className="text-neon-cyan font-mono text-[10px] tracking-[0.3em] mb-6 uppercase">Navigate</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {['About', 'Skills', 'Experience', 'Projects', 'Stats', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-text-secondary hover:text-neon-cyan transition-all text-[10px] font-mono uppercase tracking-widest group flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 bg-white/10 group-hover:bg-neon-cyan transition-all" />
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="relative">
                        <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-blue/50 uppercase">COMMS_ARRAY</div>
                        <h4 className="text-neon-purple font-mono text-[10px] tracking-[0.3em] mb-6 uppercase">Connect</h4>
                        <div className="flex gap-4">
                            {[
                                { label: 'GH', href: profile.github, icon: '💻', color: 'cyan' },
                                { label: 'LI', href: profile.linkedin, icon: '🔗', color: 'purple' },
                                { label: 'EM', href: `mailto:${profile.email}`, icon: '📧', color: 'blue' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.label !== 'EM' ? "_blank" : undefined}
                                    rel={social.label !== 'EM' ? "noopener noreferrer" : undefined}
                                    className={`w-10 h-10 flex items-center justify-center border border-white/10 hover:border-neon-${social.color}/50 transition-all group`}
                                    aria-label={social.label}
                                >
                                    <span className="text-lg group-hover:scale-110 transition-transform">
                                        {social.icon === '🔗' ? '🔗' : social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-neon-cyan/20 rounded-full" />
                            <p className="text-text-muted text-[9px] font-mono uppercase tracking-widest">
                                © {currentYear} {profile.name}. All_Rights_Reserved.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-text-muted text-[9px] font-mono uppercase tracking-widest">
                                Built_With: Next.js_TS_Framer
                            </p>
                            <div className="w-2 h-2 bg-neon-purple/20 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10" />
        </footer>
    );
};
