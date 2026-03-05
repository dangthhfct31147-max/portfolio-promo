"use client";

import { motion } from "framer-motion";

const techs = [
    "React", "Next.js", "TailwindCSS", "Framer Motion", "Supabase", "Vercel", "GitHub"
];

export function TechBadgeRow() {
    return (
        <div className="w-full overflow-hidden py-4 border-y border-white/5 bg-black/50 backdrop-blur-md">
            <motion.div
                animate={{ x: [0, -1035] }} // Approximate width of one set
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
                className="flex whitespace-nowrap gap-6 w-max items-center px-4"
            >
                {/* Render twice for seamless looping */}
                {[...techs, ...techs, ...techs].map((tech, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                        {tech}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
