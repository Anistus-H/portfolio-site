'use client';

import React from 'react';

export const GridOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-neon-cyan opacity-30" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-neon-purple opacity-30" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-neon-blue opacity-30" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-neon-green opacity-30" />
        </div>
    );
};
