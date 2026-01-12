'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail, Github, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { profile } from '@/data/profile';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
            setStatus('error');
            setErrorMessage(message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 px-6 lg:px-20 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Get In Touch</h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">
                        Whether you have a project in mind or just want to chat about embedded systems and IoT, I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
                            <div className="space-y-4">
                                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-text-secondary hover:text-neon-cyan transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-sm">{profile.email}</span>
                                </a>
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-sm">{profile.location}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Socials</h3>
                            <div className="flex gap-4">
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-blue transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20 font-mono text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20 font-mono text-sm"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20 font-mono text-sm resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-neon-cyan text-bg-primary font-bold py-3 rounded hover:bg-neon-cyan/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-neon-green text-sm font-mono text-center">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-sm font-mono text-center">{errorMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
