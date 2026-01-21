"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function KeyVisualsPage() {
    const [activeKV, setActiveKV] = useState(0);

    const visuals = [
        {
            id: 'carbon',
            title: "Carbon Breath",
            subtitle: "Hücresel Karbon Tutulumu",
            desc: "Toprağın içindeki mikro-kıvılcımlar: Karbonun hapsedilme anının şiirsel ve teknik temsili. Agregat yapısının içindeki yaşam enerjisi.",
            image: "/assets/kv_carbon.png",
            color: "#FF6B35",
            overlay: "radial-gradient(circle at center, transparent 0%, rgba(255, 107, 53, 0.05) 100%)"
        },
        {
            id: 'signal',
            title: "Neural Leaf",
            subtitle: "Saha Spesifik Zekâ",
            desc: "Bitki damarlarında akan veri: Fotosentezin ötesinde bir iletişim ağı. Her yaprak, sahadan gelen bir sinyal kulesidir.",
            image: "/assets/kv_signal.png",
            color: "#10B981",
            overlay: "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)"
        },
        {
            id: 'zen',
            title: "Zen Agriculture",
            subtitle: "Veri ve Doğa Uyumu",
            desc: "Makro ölçekte düzen: Onarıcı tarım bir kaos değil, kusursuz bir geometridir. Verinin doğayla kurduğu meditatif denge.",
            image: "/assets/kv_zen.png",
            color: "#93C572",
            overlay: "linear-gradient(to bottom, rgba(147, 197, 114, 0.05) 0%, transparent 100%)"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
                <div>
                    <h1 className="text-sm font-mono tracking-[0.5em] uppercase opacity-50">Experimental</h1>
                    <h2 className="text-xl font-bold tracking-tighter">KEV_VISUAL_LAB</h2>
                </div>
                <Link href="/tasarim-lab" className="text-xs font-mono border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                    Back to Lab
                </Link>
            </header>

            {/* Main Stage */}
            <main className="h-screen w-full relative flex items-center justify-center">

                {visuals.map((v, idx) => (
                    <div
                        key={v.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeKV === idx ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-105 invisible'}`}
                    >
                        {/* Key Visual Image */}
                        <div
                            className="absolute inset-x-12 inset-y-24 md:inset-x-32 md:inset-y-32 bg-cover bg-center rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden group border border-white/5"
                            style={{ backgroundImage: `url(${v.image})` }}
                        >
                            {/* Zarif Animasyon Overlay */}
                            <div className="absolute inset-0 mix-blend-overlay opacity-50" style={{ background: v.overlay }}></div>

                            {/* Subtle Pulse Animation for Carbon */}
                            {v.id === 'carbon' && (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.1),transparent)] animate-pulse-slow"></div>
                            )}

                            {/* Scanning Light for Signal */}
                            {v.id === 'signal' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-scan-light"></div>
                            )}

                            {/* Content Overlays */}
                            <div className="absolute bottom-12 left-12 right-12 md:bottom-20 md:left-20 max-w-2xl">
                                <div className="overflow-hidden mb-4">
                                    <h3
                                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none animate-reveal-text"
                                        style={{ color: 'white' }}
                                    >
                                        {v.title}
                                    </h3>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl animate-reveal-text delay-200">
                                        <span className="text-white font-bold inline-block mr-2 uppercase tracking-widest text-xs" style={{ color: v.color }}>{v.subtitle} —</span>
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Progress Indicators */}
                <div className="absolute bottom-12 z-50 flex gap-4">
                    {visuals.map((v, idx) => (
                        <button
                            key={v.id}
                            onClick={() => setActiveKV(idx)}
                            className="group flex flex-col items-center gap-2"
                        >
                            <span className="text-[10px] font-mono opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest">0{idx + 1}</span>
                            <div className={`h-1 w-12 rounded-full transition-all duration-500 ${activeKV === idx ? 'bg-white w-24' : 'bg-white/10 group-hover:bg-white/30'}`}></div>
                        </button>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50">
                    <button
                        onClick={() => setActiveKV(prev => (prev > 0 ? prev - 1 : visuals.length - 1))}
                        className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md pointer-events-auto transition-all border border-white/5 group"
                    >
                        <span className="text-2xl group-hover:-translate-x-1 inline-block transition-transform">←</span>
                    </button>
                    <button
                        onClick={() => setActiveKV(prev => (prev < visuals.length - 1 ? prev + 1 : 0))}
                        className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md pointer-events-auto transition-all border border-white/5 group"
                    >
                        <span className="text-2xl group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </button>
                </div>

            </main>

            <style jsx global>{`
                @keyframes reveal-text {
                    from { transform: translateY(110%); }
                    to { transform: translateY(0); }
                }
                .animate-reveal-text {
                    animation: reveal-text 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s infinite ease-in-out;
                }
                @keyframes scan-light {
                    0% { transform: translateX(-100%) skewX(-20deg); }
                    100% { transform: translateX(200%) skewX(-20deg); }
                }
                .animate-scan-light {
                    animation: scan-light 6s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>

        </div>
    );
}
