"use client";
import { useEffect, useState } from "react";

export default function ComingSoonPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const milestones = [
        {
            id: 1,
            title: "Saha çalışması",
            status: "Tamamlandı",
            progress: 100,
            icon: "✓",
            color: "#4CAF50",
            delay: 400
        },
        {
            id: 2,
            title: "Veri işleme",
            status: "Devam ediyor",
            progress: 68,
            icon: "⏳",
            color: "#8EBF60",
            delay: 1000
        },
        {
            id: 3,
            title: "Site kurulum",
            status: "Hazırlanıyor",
            progress: 33,
            icon: "⏸",
            color: "#8B8680",
            delay: 1600
        },
    ];

    // Animated counter for overall progress (0 to 70)
    const [overallProgress, setOverallProgress] = useState(0);

    useEffect(() => {
        // Start counting after site kurulum animation completes (1600ms + animation time)
        const startDelay = setTimeout(() => {
            let current = 0;
            const target = 70;
            const duration = 2000; // 2 seconds to count from 0 to 70
            const increment = target / (duration / 16); // 60fps

            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setOverallProgress(target);
                    clearInterval(counter);
                } else {
                    setOverallProgress(Math.floor(current));
                }
            }, 16);

            return () => clearInterval(counter);
        }, 2200); // Start after site kurulum card appears

        return () => clearTimeout(startDelay);
    }, [mounted]);

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1A1614] text-[#F5F5F3] font-[family-name:var(--font-sans)]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Soil background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 blur-[2px]"
                    style={{ backgroundImage: "url('/assets/coming_soon_soil_bg.png')" }}
                ></div>

                {/* Mycorrhizal Network Layer - Subtle Animation */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 animate-pulse-slow"
                    style={{
                        backgroundImage: "url('/assets/mycorrhizal_network_bg.png')",
                        mixBlendMode: 'screen'
                    }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1614]/90 via-[#1A1614]/80 to-[#1A1614]/95"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">

                {/* Logo - Animated Entry */}
                <div
                    className={`text-center mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                        }`}
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                        <span style={{ fontFamily: "'Manrope', 'Inter', sans-serif", fontWeight: 800 }}>
                            Reverda
                        </span>
                        <span
                            className="text-[#8EBF60]"
                            style={{
                                fontFamily: "'Georgia', serif",
                                fontWeight: 400,
                                fontSize: 'clamp(70px, 10vw, 108px)' // Responsive: 70px mobile, 108px desktop
                            }}
                        >.</span>
                    </h1>
                </div>

                {/* Subtitle - Single Line with Pipes */}
                <p
                    className={`text-[#A89F97] text-center mb-6 font-light tracking-wide transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' // Smaller on mobile
                    }}
                >
                    Onarıcı Tarım | Program Tasarımı & Saha Danışmanlığı
                </p>

                {/* Status Message with Live Ping - Rounded Container */}
                <div
                    className={`flex items-center justify-center gap-2 mb-6 px-5 py-2.5 bg-[#2A2320]/40 border border-[#3D3530] rounded-full backdrop-blur-sm transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EBF60] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EBF60]"></span>
                    </span>
                    <span className="text-xs md:text-sm text-[#8B8680] tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Sahadan güncelleniyor
                    </span>
                </div>

                {/* Milestone Cards */}
                <div className="w-full max-w-3xl space-y-3 mb-6">

                    {milestones.map((milestone) => (
                        <div
                            key={milestone.id}
                            className={`bg-[#2A2320]/60 backdrop-blur-sm border border-[#3D3530] rounded-2xl p-5 transition-all duration-700 hover:bg-[#2A2320]/80 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            style={{ transitionDelay: `${milestone.delay}ms` }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{milestone.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#F5F5F3]">{milestone.title}</h3>
                                        <p className="text-sm text-[#8B8680]">{milestone.status}</p>
                                    </div>
                                </div>
                                <span className="text-2xl font-bold" style={{ color: milestone.color }}>
                                    {milestone.progress}%
                                </span>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full bg-[#1A1614] rounded-full h-2 overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-2000 ease-out"
                                    style={{
                                        width: mounted ? `${milestone.progress}%` : '0%',
                                        backgroundColor: milestone.color,
                                        transitionDelay: `${milestone.delay + 400}ms`,
                                        boxShadow: `0 0 8px ${milestone.color}40`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Overall Progress Card - Appears After Milestones */}
                <div
                    className={`w-full max-w-3xl mb-6 transition-all duration-1000 delay-[2200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="bg-gradient-to-br from-[#2A2320]/70 via-[#2A2320]/60 to-[#2A2320]/50 backdrop-blur-md border border-[#8EBF60]/20 rounded-3xl p-6 relative overflow-hidden">
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#8EBF60]/5 via-transparent to-transparent opacity-50"></div>

                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#8B8680] mb-2 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Genel İlerleme</p>
                                <p className="text-5xl font-bold text-[#F5F5F3]">{overallProgress}%</p>
                                <p className="text-sm text-[#A89F97] mt-2">Tamamlandı</p>
                            </div>
                            <div className="relative">
                                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="#2A2320"
                                        strokeWidth="8"
                                        fill="none"
                                    />
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
                                        className="transition-all duration-2000 ease-out"
                                        style={{
                                            filter: 'drop-shadow(0 0 6px rgba(142, 191, 96, 0.5))'
                                        }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Launch Date */}
                <div
                    className={`flex items-center gap-3 px-6 py-3 bg-[#2A2320]/40 border border-[#3D3530] rounded-full backdrop-blur-sm transition-all duration-1000 delay-[2600ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-[#8EBF60] animate-pulse"></span>
                    <span className="text-sm text-[#C4C0BB]">
                        Web Site Lansman Hedefi: <span className="font-bold text-[#8EBF60]">Mart 2026</span>
                    </span>
                </div>
            </div>

            {/* Subtle Floating Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#8EBF60] rounded-full opacity-20 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.7}s`,
                            animationDuration: `${8 + Math.random() * 4}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Keyframes for floating animation */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.3;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.12;
            transform: scale(1);
          }
          50% {
            opacity: 0.18;
            transform: scale(1.02);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
