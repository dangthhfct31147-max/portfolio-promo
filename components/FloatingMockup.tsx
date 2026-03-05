"use client";

import { motion } from "framer-motion";
import { Activity, CreditCard, LayoutDashboard, ShieldCheck } from "lucide-react";

export function FloatingMockup() {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[260px] h-[360px] p-1.5 rounded-[2.5rem] bg-accent/30 border border-white/10 glass shadow-2xl mx-auto mt-6 overflow-hidden"
        >
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

            {/* Screen Content */}
            <div className="w-full h-full rounded-[2.2rem] bg-background/90 flex flex-col p-4 pt-10 gap-3 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                {/* Fake Header */}
                <div className="flex justify-between items-center mb-2">
                    <div className="h-4 w-16 bg-white/20 rounded-full" />
                    <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <LayoutDashboard size={12} className="text-primary" />
                    </div>
                </div>

                {/* Fake Chart / Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: false }}
                    className="w-full h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/5 flex flex-col justify-between p-3 relative overflow-hidden"
                >
                    <div className="absolute right-[-10px] top-[-10px] w-20 h-20 bg-primary/30 blur-xl rounded-full mix-blend-screen" />
                    <Activity className="text-primary w-5 h-5 relative z-10" />
                    <div className="relative z-10">
                        <div className="h-2 w-10 bg-white/60 rounded-full mb-1" />
                        <div className="h-5 w-20 bg-white shadow-sm rounded-md" />
                    </div>
                </motion.div>

                {/* Fake List Items */}
                <div className="flex flex-col gap-2 mt-2">
                    {[CreditCard, ShieldCheck].map((Icon, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.15) }}
                            viewport={{ once: false }}
                            className="w-full h-12 rounded-xl bg-white/5 border border-white/5 flex items-center p-2 gap-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <Icon size={14} className="text-white/70" />
                            </div>
                            <div className="flex flex-col gap-1.5 flex-1">
                                <div className="h-2 w-16 bg-white/70 rounded-full" />
                                <div className="h-1.5 w-10 bg-white/30 rounded-full" />
                            </div>
                            <div className="h-2.5 w-8 bg-green-400/80 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
