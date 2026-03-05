"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Github } from "lucide-react";

export function ProofSection() {
    const cards = [
        {
            title: "Speed",
            description: "Fast turnaround without compromising quality. Shipping MVPs in days, not months.",
            icon: Zap,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            border: "border-yellow-400/20",
        },
        {
            title: "Quality",
            description: "Clean, production-ready code with modern tech stacks. Built to scale.",
            icon: ShieldCheck,
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20",
        },
        {
            title: "Ownership",
            description: "Full GitHub transfer upon completion. No lock-in, 100% your IP.",
            icon: Github,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20",
        }
    ];

    return (
        <section className="min-h-screen py-24 px-6 flex flex-col justify-center snap-start snap-always max-w-sm mx-auto w-full relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-center"
            >
                <h2 className="text-3xl font-black mb-3">
                    Why work with <span className="text-gradient">me?</span>
                </h2>
                <p className="text-muted-foreground text-sm">
                    Guaranteed results for your next big idea.
                </p>
            </motion.div>

            <div className="flex flex-col gap-4">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        className={`glass rounded-2xl p-5 border ${card.border} relative overflow-hidden group`}
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full ${card.bg} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.bg} border ${card.border}`}>
                            <card.icon className={card.color} size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
