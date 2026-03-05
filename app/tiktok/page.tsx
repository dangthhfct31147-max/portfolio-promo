/*
 * NEXT.JS PORTFOLIO PROMO (TIKTOK EDITION)
 * 
 * HOW TO RUN LOCALLY:
 * 1. Open terminal in the project root (`portfolio-promo`)
 * 2. Run `npm install` (or `pnpm install`, `bun install`)
 * 3. Run `npm run dev`
 * 4. Open http://localhost:3000/tiktok or http://localhost:3000/
 * 
 * HOW TO BUILD:
 * 1. Run `npm run build`
 * 2. Run `npm start` to test the production build locally.
 * 
 * HOW TO DEPLOY (VERCEL):
 * 1. Push code to a GitHub repository.
 * 2. Go to https://vercel.com/new and import your GitHub repository.
 * 3. Keep framework preset to Next.js and click "Deploy".
 */

"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { HeroSection } from "@/components/HeroSection";
import { TechBadgeRow } from "@/components/TechBadgeRow";
import { ProofSection } from "@/components/ProofSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { CtaSection } from "@/components/CtaSection";
import { Play, Pause } from "lucide-react";

export default function TiktokLayout() {
    const [isPlaying, setIsPlaying] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionContent = useMemo(
        () => (
            <>
                <HeroSection />

                <div className="snap-start snap-always w-full flex items-center justify-center min-h-[30vh] py-10 relative z-20 cv-auto">
                    <TechBadgeRow />
                </div>

                <ProofSection />
                <ServicesSection />
                <ShowcaseSection />
                <CtaSection />
            </>
        ),
        [],
    );

    // Auto-scroll "Timed Progression" logic for screen recording
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
                // If at the bottom, stop
                if (scrollTop + clientHeight >= scrollHeight - 50) {
                    setIsPlaying(false);
                } else {
                    // Scroll down exactly one viewport height
                    scrollRef.current.scrollBy({ top: clientHeight, behavior: "smooth" });
                }
            }
        }, 4500); // 4.5 seconds per section reveal

        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <main className="relative w-full h-[100dvh] bg-black text-white overflow-hidden font-sans selection:bg-primary/30">
            <BackgroundEffects />

            {/* Auto-play Toggle for screen recording */}
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="fixed top-5 right-5 z-50 glass px-4 py-2 rounded-full flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white border border-white/10 hover:bg-white/5 transition-colors shadow-lg"
            >
                {isPlaying ? <Pause size={14} className="text-primary" /> : <Play size={14} className="text-primary" />}
                {isPlaying ? "Pause" : "Auto-Play"}
            </button>

            {/* Main Container - Vertical Snapping */}
            <div
                ref={scrollRef}
                className={`w-full h-full overflow-y-auto overflow-x-hidden relative z-10 no-scrollbar scroll-smooth ${isPlaying ? '' : 'snap-y snap-mandatory'}`}
            >
                {sectionContent}
            </div>
        </main>
    );
}
