"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ComingSoonPage() {
    const [strategy, setStrategy] = useState<'organic' | 'tech'>('organic');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const strategies = {
        organic: {
            title: "Görünmez Büyüme",
            h1: "Toprağın Altın Oranı Geri Dönüyor",
            p: "Biz platformu kodlarken, mikoriza ağları sahada çalışmaya devam ediyor. Vera Terra Program Studio çok yakında dijital sahalarınızda.",
            bg: "/assets/coming_soon_organic.png",
            accent: "#93C572",
            secondary: "#D4AF37", // Gold
            modeName: "Organic Realism"
        },
        tech: {
            title: "Hassas Onarım",
            h1: "Toprağın Geleceğini Ölçüyoruz",
            p: "Veriyle beslenen, kanıtla büyüyen yeni nesil tarım ekosistemi. MRV Dashboard v2.0 için geri sayım başladı.",
            bg: "/assets/coming_soon_tech.png",
            accent: "#00F2FF", // Cyan
            secondary: "#FF6B35", // Orange
            modeName: "Precision Tech"
        }
    };

    const s = strategies[strategy];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-white selection:text-black">

            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0 transition-opacity duration-1000">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 animate-slow-zoom transition-all duration-1000"
                    style={{ backgroundImage: `url(${s.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>

            {/* FLOATING PARTICLES (ZARIF ANIMASYON) */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float-particle"
                        style={{
                            width: Math.random() * 4 + 'px',
                            height: Math.random() * 4 + 'px',
                            backgroundColor: i % 2 === 0 ? s.accent : s.secondary,
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                            animationDuration: (Math.random() * 10 + 10) + 's'
                        }}
                    />
                ))}
            </div>

            {/* TOP NAVIGATION */}
            <nav className="relative z-50 p-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
                    VERA <span className="text-[var(--s-accent)]" style={{ color: s.accent }}>TERRA</span>
                </Link>
                <div className="flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
                    <button
                        onClick={() => setStrategy('organic')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${strategy === 'organic' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                    >
                        Organic
                    </button>
                    <button
                        onClick={() => setStrategy('tech')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${strategy === 'tech' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                    >
                        Tech
                    </button>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-4xl text-center">
                    <div className="inline-block mb-6 overflow-hidden">
                        <span
                            className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-60 animate-reveal-vertical block"
                            key={strategy + '_title'}
                        >
                            {s.title} — Strategik Alternatif
                        </span>
                    </div>

                    <h1
                        className="text-5xl md:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter animate-reveal-fade"
                        style={{ textShadow: `0 0 30px ${s.accent}33` }}
                        key={strategy + '_h1'}
                    >
                        {s.h1}
                    </h1>

                    <p
                        className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 animate-reveal-fade duration-700"
                        key={strategy + '_p'}
                    >
                        {s.p}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 rounded-full blur-xl transition-all duration-500 opacity-0 group-hover:opacity-40 animate-pulse" style={{ backgroundColor: s.accent }}></div>
                            <button className="relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-transform active:scale-95 group">
                                <span className="relative z-10">Beni Haberdar Et</span>
                            </button>
                        </div>
                        <span className="text-xs font-mono opacity-30 uppercase tracking-widest">Çıkış Güne: 24.03.2026</span>
                    </div>
                </div>
            </main>

            {/* BOTTOM INFO */}
            <footer className="absolute bottom-12 left-0 w-full z-10 px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-12 h-[1px] bg-white/20 self-center"></div>
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Ağustos — Saha Operasyonları</span>
                        </div>
                        <div className="text-4xl font-serif italic text-white/20" style={{ color: `${s.accent}22` }}>
                            {s.modeName}
                        </div>
                    </div>

                    <div className="text-right hidden md:block">
                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Platform Durumu</div>
                        <div className="flex gap-2 justify-end">
                            <span className="w-8 h-1 bg-white/40"></span>
                            <span className="w-8 h-1 bg-white/40"></span>
                            <span className="w-8 h-1" style={{ backgroundColor: s.accent }}></span>
                            <span className="w-8 h-1 bg-white/10"></span>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes slow-zoom {
                    0% { transform: scale(1.05); }
                    100% { transform: scale(1.1); }
                }
                @keyframes float-particle {
                    0%, 100% { transform: translate(0, 0); opacity: 0; }
                    50% { opacity: 0.6; }
                    100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); }
                }
                @keyframes reveal-vertical {
                    0% { transform: translateY(100%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes reveal-fade {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
                .animate-reveal-vertical { animation: reveal-vertical 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
                .animate-reveal-fade { animation: reveal-fade 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
                .animate-float-particle { animation: float-particle linear infinite; }
            `}</style>

        </div>
    );
}
