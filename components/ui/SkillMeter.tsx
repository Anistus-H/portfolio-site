'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillMeterProps {
    name: string;
    level: number; // 0-100
    color?: 'cyan' | 'purple' | 'blue' | 'green';
    delay?: number;
}

export const SkillMeter: React.FC<SkillMeterProps> = ({
    name,
    level,
    color = 'cyan',
    delay = 0
}) => {
    const [displayLevel, setDisplayLevel] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayLevel(level);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [level, delay]);

    const colorClasses = {
        cyan: 'from-neon-cyan to-neon-blue',
        purple: 'from-neon-purple to-neon-pink',
        blue: 'from-neon-blue to-neon-cyan',
        green: 'from-neon-green to-neon-cyan'
    };

    const glowColors = {
        cyan: 'rgba(0, 240, 255, 0.5)',
        purple: 'rgba(176, 38, 255, 0.5)',
        blue: 'rgba(0, 102, 255, 0.5)',
        green: 'rgba(0, 255, 136, 0.5)'
    };

    return (
        <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-text-primary font-mono text-sm">{name}</span>
                <span className="text-neon-cyan font-mono text-sm font-bold">{level}%</span>
            </div>
            <div className="relative h-2 bg-bg-secondary rounded-full overflow-hidden">
                <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses[color]} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${displayLevel}%` }}
                    transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
                    style={{
                        boxShadow: `0 0 10px ${glowColors[color]}, 0 0 20px ${glowColors[color]}`
                    }}
                />
            </div>
        </motion.div>
    );
};
