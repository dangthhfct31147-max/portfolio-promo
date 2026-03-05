"use client";

import { motion } from "framer-motion";
import { FloatingMockup } from "./FloatingMockup";

export function HeroSection() {
    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center pt-16 pb-12 px-6 snap-start snap-always overflow-hidden w-full max-w-sm mx-auto">
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center w-full z-10"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/30 mb-4"
                >
                    Available for Work
                </motion.div>

                <h1 className="text-5xl font-black tracking-tight flex flex-col gap-0 leading-[1.1] mb-4">
                    <span className="text-white drop-shadow-md">Dang Tr.</span>
                    <span className="text-gradient">Vibe Coding</span>
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">
                    AI Assisted Full Stack Web Developer. <br />
                    <strong className="text-white font-medium">Build fast. Ship beautifully.</strong>
                </p>

                <FloatingMockup />

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest font-bold"
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 h-6 rounded-full bg-gradient-to-b from-primary to-transparent"
                />
            </motion.div>
        </section>
    );
}
