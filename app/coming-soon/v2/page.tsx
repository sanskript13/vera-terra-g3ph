"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ComingSoonV2Page() {
    const [mode, setMode] = useState<'bloom' | 'scan'>('bloom');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const themes = {
        bloom: {
            title: "Sessiz Devrim",
            h1: "Doğa Beklemez, Hazırlanır.",
            p: "Vera Terra, toprağın en derin zekasını dijital dünyaya taşıyor. Yeni nesil onarıcı tarım portalımız çok yakında kök salacak.",
            bg: "/assets/coming_soon_bloom.png",
            accent: "#EAB308", // Yellow/Gold
            secondary: "#D97706",
            style: "Organic Essence"
        },
        scan: {
            title: "Dijital Hassasiyet",
            h1: "Topranın Nabzı Veriyle Atıyor.",
            p: "Her bir mikron, her bir veri noktası. Vera Terra Laboratory, sahadaki gerçekliği milimetrik hassasiyetle modellemeye geliyor.",
            bg: "/assets/coming_soon_scan.png",
            accent: "#06B6D4", // Cyan
            secondary: "#0891B2",
            style: "Technical Rigor"
        }
    };

    const t = themes[mode];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-white selection:text-black">

            {/* SVG FILTERS FOR GOOEY/LIQUID EFFECT */}
            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    </filter>
                </defs>
            </svg>

            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-110 animate-subtle-parallax transition-all duration-1000 blur-sm"
                    style={{ backgroundImage: `url(${t.bg})`, filter: mode === 'bloom' ? 'sepia(0.2)' : 'hue-rotate(180deg) brightness(0.8)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-black opacity-90" />
            </div>

            {/* ANIMATED LIQUID ELEMENTS (BLOOM MODE) */}
            {mode === 'bloom' && (
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ filter: 'url(#goo)' }}>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-[#EAB308]/40 animate-liquid-blob"
                            style={{
                                width: (150 + i * 50) + 'px',
                                height: (150 + i * 50) + 'px',
                                left: (20 + i * 12) + '%',
                                top: (30 + i * 8) + '%',
                                animationDelay: i * 2 + 's'
                            }}
                        />
                    ))}
                </div>
            )}

            {/* LASER SCAN LINES (SCAN MODE) */}
            {mode === 'scan' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_20px_cyan] animate-laser-scan"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-cyan-400/20 animate-laser-scan-vert"></div>
                </div>
            )}

            {/* TOP NAVIGATION */}
            <nav className="relative z-50 p-10 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-xl font-bold tracking-[0.2em] group">
                    VERA<span className="text-gray-500 group-hover:text-white transition-colors duration-500">TERRA</span>
                    <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block animate-pulse" style={{ backgroundColor: t.accent }}></span>
                </Link>
                <div className="flex gap-4 p-1.5 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10">
                    <button
                        onClick={() => setMode('bloom')}
                        className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${mode === 'bloom' ? 'bg-white text-black shadow-lg shadow-yellow-500/20' : 'text-white/40 hover:text-white'}`}
                    >
                        Bloom
                    </button>
                    <button
                        onClick={() => setMode('scan')}
                        className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${mode === 'scan' ? 'bg-white text-black shadow-lg shadow-cyan-500/20' : 'text-white/40 hover:text-white'}`}
                    >
                        Scan
                    </button>
                </div>
            </nav>

            {/* MAIN STAGE */}
            <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-8">
                <div className="max-w-4xl w-full">
                    <div className="flex items-center gap-4 mb-8 animate-reveal-vertical opacity-0 [animation-fill-mode:forwards]" key={mode + '_label'}>
                        <div className="h-[1px] w-8 bg-white/20"></div>
                        <span className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-40">{t.title}</span>
                    </div>

                    <h1
                        className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter text-balance animate-reveal-fade opacity-0 [animation-fill-mode:forwards]"
                        key={mode + '_h1'}
                    >
                        {t.h1.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-4 opacity-0 animate-word-pop" style={{ animationDelay: (0.2 + i * 0.1) + 's' }}>
                                {word}
                            </span>
                        ))}
                    </h1>

                    <p
                        className="text-lg md:text-2xl text-white/50 max-w-2xl leading-relaxed mb-16 animate-reveal-fade delay-500 opacity-0 [animation-fill-mode:forwards] text-balance"
                        key={mode + '_p'}
                    >
                        {t.p}
                    </p>

                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="group relative">
                            <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <button className="relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden hover:scale-105 transition-all active:scale-95">
                                <span className="relative z-10">Bizi Takip Edin</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 h-1.5 w-40 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-white/40 animate-progress-stripes" style={{ width: '65%', backgroundColor: t.accent }}></div>
                            </div>
                            <span className="text-[9px] font-mono uppercase opacity-30 tracking-[0.3em]">Launch Phase 01: Laboratory</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* FOOTER PERSPECTIVE */}
            <footer className="absolute bottom-12 left-0 w-full px-10 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-[10px] font-mono opacity-20 uppercase tracking-[0.6em] border-l border-white/20 pl-4 py-2">
                        Vera Terra System v4.2 // {t.style}
                    </div>
                    <div className="hidden md:flex gap-12 text-[10px] font-mono opacity-30 uppercase tracking-widest">
                        <span>Antigua: 14°N</span>
                        <span>Soil Carbon: 3.2%</span>
                        <span>Platform: Standby</span>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes subtle-parallax {
                    from { transform: scale(1.1) translate(0, 0); }
                    to { transform: scale(1.15) translate(-1%, -1%); }
                }
                @keyframes liquid-blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(10%, -10%) scale(1.1); }
                    66% { transform: translate(-10%, 10%) scale(0.9); }
                }
                @keyframes laser-scan {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
                @keyframes laser-scan-vert {
                    0% { left: -10%; }
                    100% { left: 110%; }
                }
                @keyframes reveal-vertical {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes reveal-fade {
                    0% { transform: translateY(30px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes word-pop {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes progress-stripes {
                    from { background-position: 0 0; }
                    to { background-position: 40px 0; }
                }
                .animate-subtle-parallax { animation: subtle-parallax 20s infinite alternate linear; }
                .animate-liquid-blob { animation: liquid-blob 10s infinite alternate ease-in-out; }
                .animate-laser-scan { animation: laser-scan 4s infinite linear; }
                .animate-laser-scan-vert { animation: laser-scan-vert 8s infinite linear; }
                .animate-reveal-vertical { animation: reveal-vertical 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
                .animate-reveal-fade { animation: reveal-fade 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
                .animate-word-pop { animation: word-pop 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
                .animate-progress-stripes { background-image: linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent); background-size: 40px 40px; animation: progress-stripes 2s linear infinite; }
            `}</style>

        </div>
    );
}
