'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    children,
    subtitle,
    className = ''
}) => {
    return (
        <motion.div
            className={`mb-12 ${className}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="gradient-text">{children}</span>
                <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </h2>
            {subtitle && (
                <motion.p
                    className="text-text-secondary text-lg mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};
