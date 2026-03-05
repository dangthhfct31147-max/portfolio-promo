"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export function ShowcaseSection() {
    const projects = [
        {
            name: "SaaS Analytics",
            tags: ["Dashboard", "Next.js"],
            imgDesc: "A sleek dark-mode analytics dashboard",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "E-Commerce App",
            tags: ["Payments", "Auth"],
            imgDesc: "A conversion-optimized shopping layout",
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "AI Tool UI",
            tags: ["Animation", "OpenAI"],
            imgDesc: "Interactive chat interface with micro-interactions",
            color: "from-green-400 to-emerald-600"
        }
    ];

    return (
        <section className="min-h-screen py-24 px-6 flex flex-col justify-center snap-start snap-always max-w-sm mx-auto w-full relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h2 className="text-4xl font-black mb-3">
                    Proof of <span className="text-gradient">Work</span>
                </h2>
                <p className="text-muted-foreground text-sm">
                    Recent builds and case studies.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col gap-3 mb-2"
                    >
                        {/* Fake Image Area */}
                        <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${project.color} p-1 relative overflow-hidden shadow-lg`}>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="w-full h-full rounded-xl bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/10 flex items-center justify-center p-4 text-center">
                                <span className="text-xs text-white/50 font-medium">{project.imgDesc}</span>
                            </div>
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-300 rounded-2xl mix-blend-overlay" />
                        </div>

                        {/* Project Details */}
                        <div className="flex items-center justify-between px-1">
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                                <div className="flex gap-2 mt-1.5">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Link2 size={14} className="text-white/50 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
