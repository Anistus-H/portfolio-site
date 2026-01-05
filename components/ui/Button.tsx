'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    href?: string;
    className?: string;
    icon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    className = '',
    icon,
    type = 'button'
}) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 relative overflow-hidden group';

    const variantStyles = {
        primary: 'bg-neon-cyan text-bg-primary hover:bg-neon-blue neon-border-cyan',
        secondary: 'bg-neon-purple text-white hover:bg-neon-pink neon-border-purple',
        outline: 'bg-transparent text-neon-cyan border-2 border-neon-cyan hover:bg-neon-cyan hover:text-bg-primary'
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">
                {icon && <span>{icon}</span>}
                {children}
            </span>
            <motion.span
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
            />
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={buttonClasses}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={buttonClasses}
            type={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {content}
        </motion.button>
    );
};
