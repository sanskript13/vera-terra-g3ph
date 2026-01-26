"use client";
import { useEffect, useState, useRef } from "react";

// Sub-component for individual Milestone Card to handle synchronized animations
const MilestoneCard = ({
    title,
    status,
    targetProgress,
    icon,
    color,
    delay,
    mounted
}: {
    title: string,
    status: string,
    targetProgress: number,
    icon: string,
    color: string,
    delay: number,
    mounted: boolean
}) => {
    const [progress, setProgress] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!mounted) return;

        // Start animation sequence after delay
        const startTimer = setTimeout(() => {
            setStarted(true);

            // Animate progress 0 -> target
            const duration = 2000; // 2 seconds
            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTime;

                if (elapsed >= duration) {
                    setProgress(targetProgress);
                } else {
                    // Ease out cubic
                    const t = elapsed / duration;
                    const ease = 1 - Math.pow(1 - t, 3);
                    setProgress(Math.floor(targetProgress * ease));
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);

        }, delay + 500); // Add small buffer for entry animation

        return () => clearTimeout(startTimer);
    }, [mounted, delay, targetProgress]);

    return (
        <div
            className={`flex-1 bg-[#2A2320]/60 backdrop-blur-sm border border-[#3D3530] rounded-2xl p-6 flex flex-col justify-between h-full transition-all duration-700 hover:bg-[#2A2320]/80 group ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#1A1614]/50 text-2xl group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <span className="text-3xl font-bold transition-all duration-300" style={{ color: started ? color : '#3D3530' }}>
                    {progress}%
                </span>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#F5F5F3] mb-1">{title}</h3>
                <p className="text-sm text-[#8B8680]">{status}</p>
            </div>

            {/* Synchronized Progress Bar */}
            <div className="w-full bg-[#1A1614] rounded-full h-1.5 overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-75 ease-out"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: color,
                        boxShadow: started ? `0 0 10px ${color}40` : 'none'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default function ComingSoonPageAltRefined() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Overall Progress Logic
    const [overallProgress, setOverallProgress] = useState(0);

    useEffect(() => {
        // Start counting after milestones (approx 2200ms)
        const startDelay = setTimeout(() => {
            let current = 0;
            const target = 70;
            const duration = 2000;

            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTime;

                if (elapsed >= duration) {
                    setOverallProgress(target);
                } else {
                    const t = elapsed / duration;
                    const ease = 1 - Math.pow(1 - t, 3);
                    setOverallProgress(Math.floor(target * ease));
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);

        }, 2400);

        return () => clearTimeout(startDelay);
    }, [mounted]);

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1A1614] text-[#F5F5F3] font-[family-name:var(--font-sans)] flex flex-col justify-center">

            {/* Background elements preserved */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 blur-[2px]"
                    style={{ backgroundImage: "url('/assets/coming_soon_soil_bg.png')" }}
                ></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 animate-pulse-slow"
                    style={{
                        backgroundImage: "url('/assets/mycorrhizal_network_bg.png')",
                        mixBlendMode: 'screen'
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1614]/90 via-[#1A1614]/80 to-[#1A1614]/95"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <div
                        className={`mb-2 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight inline-block">
                            <span style={{ fontFamily: "'Manrope', 'Inter', sans-serif", fontWeight: 800 }}>Reverda</span>
                            <span className="text-[#8EBF60]" style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(70px, 10vw, 108px)' }}>.</span>
                        </h1>
                    </div>

                    <p
                        className={`text-[#A89F97] font-light tracking-wide transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}
                    >
                        Onarıcı Tarım | Program Tasarımı & Saha Danışmanlığı
                    </p>
                </div>

                {/* Status & Message Section */}
                <div className={`flex flex-col items-center gap-4 mb-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

                    {/* Live Indicator */}
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#2A2320]/40 border border-[#3D3530] rounded-full backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EBF60] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EBF60]"></span>
                        </span>
                        <span className="text-xs text-[#8B8680] tracking-wide uppercase font-medium">Sahadan güncelleniyor</span>
                    </div>

                    {/* Refined Construction Message */}
                    <h2
                        className="text-xl md:text-2xl text-[#F5F5F3] font-light tracking-wide text-center"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Web sitesi hazırlanıyor.
                    </h2>
                </div>

                {/* Horizontal Grid Layout for Milestones + Overall Progress */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">

                    {/* Milestone 1 */}
                    <MilestoneCard
                        title="Saha çalışması"
                        status="Tamamlandı"
                        targetProgress={100}
                        icon="✓"
                        color="#8EBF60" // Validated Green
                        delay={400}
                        mounted={mounted}
                    />

                    {/* Milestone 2 */}
                    <MilestoneCard
                        title="Veri işleme"
                        status="Devam ediyor"
                        targetProgress={68}
                        icon="⏳"
                        color="#E09F7D" // Earthy Clay
                        delay={800} // Sequential delay
                        mounted={mounted}
                    />

                    {/* Milestone 3 */}
                    <MilestoneCard
                        title="Site kurulum"
                        status="Hazırlanıyor"
                        targetProgress={33}
                        icon="⏸"
                        color="#94A3B8" // Slate Blue
                        delay={1200} // Sequential delay
                        mounted={mounted}
                    />

                    {/* Overall Progress - Fits in the grid now */}
                    <div
                        className={`bg-gradient-to-br from-[#2A2320]/70 via-[#2A2320]/60 to-[#2A2320]/50 backdrop-blur-md border border-[#8EBF60]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '1600ms' }}
                    >
                        <div className="absolute inset-0 bg-gradient-radial from-[#8EBF60]/5 via-transparent to-transparent opacity-50"></div>

                        <div className="relative z-10 w-full flex flex-col items-center justify-between h-full">
                            {/* Title moved to top to match other cards structure roughly */}

                            <div className="flex flex-col items-center justify-center flex-1">
                                <div className="inline-block relative mb-4">
                                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                        <circle cx="60" cy="60" r="50" stroke="#2A2320" strokeWidth="8" fill="none" />
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            stroke="#8EBF60"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeDasharray={`${2 * Math.PI * 50}`}
                                            strokeDashoffset={`${2 * Math.PI * 50 * (1 - overallProgress / 100)}`}
                                            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                                        />
                                    </svg>
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
                                        {overallProgress}%
                                    </span>
                                </div>
                            </div>

                            {/* Updated Title Size to match 'Saha çalışması' (text-lg font-semibold) */}
                            <p className="text-lg font-semibold text-[#F5F5F3]">Genel İlerleme</p>
                        </div>
                    </div>
                </div>

                {/* Launch Date - Refined & Harmonious */}
                <div
                    className={`flex flex-col items-center justify-center p-8 border-t border-[#3D3530]/50 w-full max-w-lg transition-all duration-1000 delay-[2000ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <p className="text-[#8B8680] text-sm tracking-[0.2em] uppercase mb-4 opacity-70">Web Site Lansman Hedefi</p>
                    <div className="text-3xl md:text-5xl font-light text-[#F5F5F3] tracking-tight">
                        Mart 2026
                    </div>
                </div>

            </div>

            {/* Background Styles & Keyframes */}
            <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
                  50% { transform: translateY(-30px) translateX(20px); opacity: 0.3; }
                }
                .animate-float { animation: float 10s linear infinite; }
                
                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.12; transform: scale(1); }
                  50% { opacity: 0.18; transform: scale(1.02); }
                }
                .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
              `}</style>
        </div>
    );
}
