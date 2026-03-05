"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, ExternalLink, ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="min-h-screen py-24 px-6 flex flex-col items-center justify-center snap-start snap-always max-w-sm mx-auto w-full relative text-center cv-auto">

            {/* Background glow for CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-full relative z-10 glass rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center"
            >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                    <Briefcase className="text-white" size={28} />
                </div>

                <h2 className="text-3xl font-black text-white mb-2 leading-tight">
                    Let's build <br /> your MVP.
                </h2>

                <p className="text-muted-foreground text-sm mb-8">
                    Available for new projects. Fast turnaround, global reach.
                </p>

                <div className="flex flex-col gap-3 w-full">
                    {/* Main Fiverr CTA */}
                    <a href="https://www.fiverr.com/s/Eg74e9D" target="_blank" rel="noreferrer" className="w-full relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#bd00ff] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200" />
                        <button className="relative w-full h-14 bg-black rounded-xl border border-white/20 text-white font-bold text-base flex justify-center items-center gap-2 group-hover:bg-transparent transition-colors">
                            Message me on Fiverr
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </a>

                    <a href="mailto:dangthhfct31147@gmail.com" className="w-full h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/80 font-medium text-sm flex justify-center items-center gap-2 transition-colors">
                        <Mail size={16} />
                        dangthhfct31147@gmail.com
                    </a>

                    <div className="mt-4 flex flex-col gap-2">
                        <div className="text-xs text-white/40 font-semibold tracking-wider uppercase mb-1">More links</div>
                        <a href="#" className="w-full h-10 border border-white/5 rounded-lg text-white/60 font-medium text-xs flex justify-between px-4 items-center hover:bg-white/5 transition-colors">
                            <span>View Portfolio</span>
                            <ExternalLink size={14} />
                        </a>
                        <a href="#" className="w-full h-10 border border-white/5 rounded-lg text-white/60 font-medium text-xs flex justify-between px-4 items-center hover:bg-white/5 transition-colors">
                            <span>TikTok: @dang_vibe_coding</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-8 text-white/30 text-[10px] font-medium tracking-wide">
                © {new Date().getFullYear()} Dang Tr. All rights reserved.
            </div>
        </section>
    );
}
