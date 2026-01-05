'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'hud' | 'glass';
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'default',
    hover = true
}) => {
    const variantStyles = {
        default: 'glass rounded-lg p-6',
        hud: 'hud-panel rounded-lg p-6 pl-8',
        glass: 'glass-strong rounded-lg p-6'
    };

    const cardClasses = `${variantStyles[variant]} ${className}`;

    if (!hover) {
        return <div className={cardClasses}>{children}</div>;
    }

    return (
        <motion.div
            className={cardClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                transition: { duration: 0.3 }
            }}
        >
            {children}
        </motion.div>
    );
};
