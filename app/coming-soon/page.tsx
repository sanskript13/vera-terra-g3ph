"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ComingSoonPage() {
    const [strategy, setStrategy] = useState<'organic' | 'tech' | 'living' | 'legacy'>('organic');
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
            secondary: "#D4AF37",
            modeName: "Organic Realism"
        },
        tech: {
            title: "Hassas Onarım",
            h1: "Toprağın Geleceğini Ölçüyoruz",
            p: "Veriyle beslenen, kanıtla büyüyen yeni nesil tarım ekosistemi. MRV Dashboard v2.0 için geri sayım başladı.",
            bg: "/assets/coming_soon_tech.png",
            accent: "#00F2FF",
            secondary: "#FF6B35",
            modeName: "Precision Tech"
        },
        living: {
            title: "Yaşayan Sistem",
            h1: "Toprak Bir Nesne Değil, Bir Organizmadır",
            p: "Girdilerden biyolojik zekaya geçiş. Vera Terra ile toprağı bir üretim mecrası değil, yaşayan bir sistem olarak yeniden tanımlıyoruz.",
            bg: "/assets/coming_soon_living.png",
            accent: "#10B981",
            secondary: "#34D399",
            modeName: "Biological Paradigm"
        },
        legacy: {
            title: "Onarıcı Miras",
            h1: "Hasattan Mirasa Paradigma Değişimi",
            p: "Mevsimlik kârdan, nesiller arası sağlamlığa. Toprağınızı sadece bugünün verimi için değil, yarının mirası için onarın.",
            bg: "/assets/coming_soon_legacy.png",
            accent: "#F59E0B",
            secondary: "#78350F",
            modeName: "Temporal Legacy"
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
                <div className="absolute inset-0 backdrop-blur-[1px]" />
            </div>

            {/* FLOATING PARTICLES */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float-particle"
                        style={{
                            width: Math.random() * 3 + 'px',
                            height: Math.random() * 3 + 'px',
                            backgroundColor: i % 2 === 0 ? s.accent : s.secondary,
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                            animationDuration: (Math.random() * 12 + 8) + 's'
                        }}
                    />
                ))}
            </div>

            {/* TOP NAVIGATION */}
            <nav className="relative z-50 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
                <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
                    VERA <span style={{ color: s.accent }} className="transition-colors duration-500">TERRA</span>
                </Link>
                <div className="flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-xl">
                    {Object.keys(strategies).map((key) => (
                        <button
                            key={key}
                            onClick={() => setStrategy(key as any)}
                            className={`px-3 md:px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${strategy === key ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="relative z-10 flex items-center justify-center min-h-[70vh] px-6 py-20">
                <div className="max-w-5xl text-center">
                    <div className="inline-block mb-8 overflow-hidden">
                        <span
                            className="text-[10px] md:text-xs font-mono tracking-[0.6em] uppercase opacity-60 animate-reveal-vertical block"
                            key={strategy + '_title'}
                        >
                            {s.title} — New Paradigm
                        </span>
                    </div>

                    <h1
                        className="text-4xl md:text-8xl font-bold mb-10 leading-[0.95] tracking-tighter animate-reveal-fade text-balance"
                        style={{ textShadow: `0 0 40px ${s.accent}22` }}
                        key={strategy + '_h1'}
                    >
                        {s.h1}
                    </h1>

                    <p
                        className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-12 animate-reveal-fade duration-700 text-balance"
                        key={strategy + '_p'}
                    >
                        {s.p}
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <div className="relative group">
                            <div className="absolute -inset-6 rounded-full blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-30 animate-pulse" style={{ backgroundColor: s.accent }}></div>
                            <button className="relative px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 group shadow-2xl">
                                <span className="relative z-10">Paradigma Dönüşümüne Katıl</span>
                            </button>
                        </div>
                        <div className="flex flex-col items-start md:items-center">
                            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em]">Ready for Pilot</span>
                            <span className="text-sm font-bold opacity-40">SPRING 2026</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* BOTTOM INFO */}
            <footer className="absolute bottom-10 left-0 w-full z-10 px-10 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-end">
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="w-16 h-[1px] bg-white/20 self-center"></div>
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">Paradigm Shift v4.0</span>
                        </div>
                        <div className="text-5xl font-serif italic opacity-10 transition-colors duration-1000" style={{ color: s.accent }}>
                            {s.modeName}
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-4">Holistic Architecture</div>
                        <div className="flex gap-3 justify-end">
                            {Object.keys(strategies).map((key) => (
                                <span
                                    key={key}
                                    className={`w-10 h-1 transition-all duration-500 ${strategy === key ? 'opacity-100' : 'opacity-10'}`}
                                    style={{ backgroundColor: s.accent }}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes slow-zoom {
                    0% { transform: scale(1.02); }
                    100% { transform: scale(1.08); }
                }
                @keyframes float-particle {
                    0% { transform: translate(0, 0); opacity: 0; }
                    20% { opacity: 0.4; }
                    80% { opacity: 0.4; }
                    100% { transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * -400}px); opacity: 0; }
                }
                @keyframes reveal-vertical {
                    0% { transform: translateY(100%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes reveal-fade {
                    0% { transform: translateY(30px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
                .animate-reveal-vertical { animation: reveal-vertical 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
                .animate-reveal-fade { animation: reveal-fade 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
                .animate-float-particle { animation: float-particle linear infinite; }
            `}</style>

        </div>
    );
}
