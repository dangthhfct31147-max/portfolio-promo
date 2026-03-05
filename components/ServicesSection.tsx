"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Landing Page",
            price: "From $199",
            features: ["High-converting UI", "Animations", "Mobile First"],
            popular: false,
        },
        {
            title: "Full-Stack MVP",
            price: "From $899",
            features: ["Auth & Database", "Payment Integration", "Admin Dashboard"],
            popular: true,
        },
        {
            title: "Business Website",
            price: "From $399",
            features: ["CMS setup", "SEO Optimized", "Multi-page"],
            popular: false,
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
                <h2 className="text-4xl font-black mb-3 text-white">
                    Ready to <span className="text-gradient">Ship?</span>
                </h2>
                <p className="text-muted-foreground text-sm">
                    Select a package that fits your needs.
                </p>
            </motion.div>

            <div className="flex flex-col gap-4">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={`glass relative p-5 rounded-2xl flex flex-col gap-3 overflow-hidden border ${service.popular ? 'border-primary shadow-[0_0_15px_rgba(0,229,255,0.2)]' : 'border-white/10'}`}
                    >
                        {service.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                                MOST POPULAR
                            </div>
                        )}

                        <div className={`absolute top-0 right-0 w-32 h-32 blur-[40px] rounded-full opacity-20 ${service.popular ? 'bg-primary' : 'bg-purple-500'}`} />

                        <div className="relative z-10 flex justify-between items-end">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                                <div className="text-2xl font-black text-white/90">{service.price}</div>
                            </div>
                        </div>

                        <div className="relative z-10 space-y-2 mt-2">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10 mt-2 flex items-center justify-between text-sm font-semibold text-primary cursor-pointer border-t border-white/10 pt-3">
                            <span>View Details</span>
                            <ChevronRight size={16} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
