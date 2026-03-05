"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
    return (
        <>
            <div className="fixed inset-0 z-[-2] bg-black" />

            {/* Animated Gradient Orbs */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[120px]"
                />
            </div>

            {/* Subtle Noise Overlay */}
            <div
                className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </>
    );
}
