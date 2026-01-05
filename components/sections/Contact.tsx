'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { profile } from '@/data/profile';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Frontend only - show success message
        alert('Thank you for your message! Please contact me directly via email or LinkedIn.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 pt-32 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/5 blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <SectionHeading subtitle="Let's build something amazing together">
                    Get In Touch
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact form */}
                    <div className="relative">
                        <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-cyan/50 uppercase">COMMS_UPLINK_01</div>
                        <Card variant="hud">
                            <h3 className="text-2xl font-bold text-neon-cyan mb-8 font-heading tracking-tight">
                                Send a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-text-secondary text-[10px] font-mono tracking-widest uppercase opacity-60">
                                        USER_IDENTIFIER
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-text-primary focus:border-neon-cyan focus:outline-none transition-all font-mono text-sm placeholder:text-white/10"
                                        placeholder="Enter name..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-text-secondary text-[10px] font-mono tracking-widest uppercase opacity-60">
                                        COMMS_ADDRESS
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-text-primary focus:border-neon-cyan focus:outline-none transition-all font-mono text-sm placeholder:text-white/10"
                                        placeholder="Enter email..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-text-secondary text-[10px] font-mono tracking-widest uppercase opacity-60">
                                        DATA_PAYLOAD
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-text-primary focus:border-neon-cyan focus:outline-none transition-all font-mono text-sm resize-none placeholder:text-white/10"
                                        placeholder="Enter message details..."
                                    />
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="w-full tracking-[0.2em] uppercase text-xs">
                                    Transmit_Data
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact info */}
                    <div className="space-y-8">
                        <div className="relative">
                            <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-purple/50 uppercase">DIRECT_CHANNELS</div>
                            <Card variant="glass">
                                <h3 className="text-xl font-bold text-neon-purple mb-8 font-heading tracking-tight">
                                    Direct Contact
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        { label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}`, icon: '📧', color: 'cyan' },
                                        { label: 'GITHUB', value: 'github.com/Anistus-H', href: profile.github, icon: '💻', color: 'purple' },
                                        { label: 'LINKEDIN', value: 'linkedin.com/in/anistus-h', href: profile.linkedin, icon: 'blue', color: 'blue' }
                                    ].map((link, i) => (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target={link.label !== 'EMAIL' ? "_blank" : undefined}
                                            rel={link.label !== 'EMAIL' ? "noopener noreferrer" : undefined}
                                            className={`flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-sm hover:border-neon-${link.color}/50 transition-all group`}
                                            whileHover={{ x: 5 }}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <div className={`w-10 h-10 flex items-center justify-center border border-neon-${link.color}/20 text-xl`}>
                                                {link.icon === 'blue' ? '🔗' : link.icon}
                                            </div>
                                            <div>
                                                <div className="text-text-muted text-[8px] font-mono tracking-widest uppercase">{link.label}</div>
                                                <div className={`text-neon-${link.color} font-mono text-sm group-hover:brightness-125 transition-all`}>
                                                    {link.value}
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}

                                    <motion.div
                                        className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-sm"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 text-xl">
                                            📍
                                        </div>
                                        <div>
                                            <div className="text-text-muted text-[8px] font-mono tracking-widest uppercase">LOCATION</div>
                                            <div className="text-text-primary font-mono text-sm">
                                                {profile.location}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </Card>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-2 -left-2 text-[8px] font-mono text-neon-green/50 uppercase">AVAILABILITY_STATUS</div>
                            <Card variant="glass">
                                <div className="text-center py-2">
                                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                                        Open to freelance projects, full-time opportunities, and collaborations
                                    </p>
                                    <div className="inline-flex items-center gap-3 px-6 py-2 border border-neon-green/20 bg-neon-green/5 rounded-full">
                                        <motion.div
                                            className="w-2 h-2 bg-neon-green rounded-full shadow-[0_0_8px_rgba(0,255,157,0.5)]"
                                            animate={{ opacity: [1, 0.4, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <span className="text-neon-green font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Available for work</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
