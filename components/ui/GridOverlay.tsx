'use client';

import React from 'react';

export const GridOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-bg-primary" />

            {/* Ambient Glows */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-cyan/5 blur-[100px]"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-purple/5 blur-[100px]"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 50% 40% 50%' }}
            />

            {/* Subtle Noise Texture (Optional for texture) */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};
