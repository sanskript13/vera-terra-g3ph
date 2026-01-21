"use client";
import React, { useState } from 'react';
import { DataGrid } from "@/app/components/DataGrid";

export default function DesignLabPage() {
    const [activeTheme, setActiveTheme] = useState('');

    const themeGroups = [
        {
            title: "0. Hybrid Realism (Original)",
            themes: [
                { id: '', name: 'Default Hybrid', color: '#00FFFF' },
                { id: 'theme-cyber', name: 'Deep Cyber HUD', color: '#00ff00' },
                { id: 'theme-soil', name: 'Raw Soil', color: '#d2691e' },
                { id: 'theme-blueprint', name: 'Blueprint', color: '#002244' },
            ]
        },
        {
            title: "1. Saha Gerçekliği (Olive)",
            themes: [
                { id: 'theme-sys1-olive', name: 'System 1 Light', color: '#5f6f52' },
                { id: 'theme-sys1-dark', name: 'System 1 Dark', color: '#1c1c1e' },
            ]
        },
        {
            title: "2. Quiet Confidence (Editorial)",
            themes: [
                { id: 'theme-sys2-editorial', name: 'Editorial Minimal', color: '#f4f1ea' },
                { id: 'theme-sys2-industrial', name: 'Industrial Calm', color: '#e5e7eb' },
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-[family-name:var(--font-sans)] bg-gray-900">

            {/* Sidebar */}
            <aside className="w-full md:w-80 bg-black border-r border-white/10 p-6 flex flex-col z-50 shadow-2xl overflow-y-auto h-screen sticky top-0">
                <h1 className="text-xl font-bold text-white mb-2">Vera Terra</h1>
                <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8">Design Lab v2.0</h2>

                <div className="space-y-8">
                    {themeGroups.map((group, idx) => (
                        <div key={idx}>
                            <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">{group.title}</h3>
                            <div className="space-y-2">
                                {group.themes.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setActiveTheme(t.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${activeTheme === t.id ? 'bg-white text-black ring-2 ring-[var(--color-neon-blue)]' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                                    >
                                        <span className="w-4 h-4 rounded-full shadow-lg border border-white/10" style={{ backgroundColor: t.color }}></span>
                                        {t.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                    <div className="text-xs text-gray-600 mb-4">
                        <p>Aktif Class:</p>
                        <code className="text-green-400 bg-white/5 px-2 py-1 rounded block mt-1">{activeTheme || 'default'}</code>
                    </div>
                    <a href="/" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs rounded block text-center transition-colors">
                        Ana Siteye Dön
                    </a>
                </div>
            </aside>

            {/* Preview Area */}
            <main className={`flex-1 relative ${activeTheme}`}>
                <div className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">

                    {/* HERO PREVIEW */}
                    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-[var(--foreground)]/10">
                        <DataGrid className="z-10 opacity-20" />

                        {/* Dynamic Background Layer based on Theme Logic */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--background)] to-transparent opacity-90"></div>

                        {/* Conditional Image Filter: System 2 uses warmer/cleaner images */}
                        <div className={`absolute inset-0 z-[-1] bg-cover bg-center transition-all duration-700 ${activeTheme.includes('sys2') ? 'grayscale-0 opacity-80 mix-blend-multiply' : 'grayscale opacity-40 mix-blend-overlay'}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-bf791df7f582?q=80&w=2500')" }}></div>

                        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                            <span className="text-[var(--color-neon-blue)] font-mono text-xs tracking-widest uppercase mb-6 block animate-pulse border border-[var(--color-neon-blue)]/30 inline-block px-3 py-1 rounded-full">
                                System v2.1 Live
                            </span>
                            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontWeight: 'var(--font-heading-weight)' }}>
                                Toprak. Veri. Kanıt.
                            </h1>
                            <p className="max-w-2xl mx-auto opacity-80 text-lg md:text-xl leading-relaxed mb-10">
                                Bu arayüz, yeni "Saha Gerçekliği" (System 1) temasını varsayılan olarak kullanır.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="px-8 py-4 bg-[var(--color-accent-pop)] text-white font-bold hover:opacity-90 transition-all shadow-lg hover:translate-y-[-2px]" style={{ borderRadius: 'var(--radius-md)' }}>
                                    Programı Başlat
                                </button>
                                <button className="px-8 py-4 border border-[var(--foreground)]/20 hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)] transition-all bg-[var(--background)]/50 backdrop-blur-sm" style={{ borderRadius: 'var(--radius-md)' }}>
                                    Metodolojiyi İncele
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* UI SYSTEM GRID */}
                    <section className="p-12 md:p-24 max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

                            {/* Card 1: Features */}
                            <div className="p-8 border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 hover:border-[var(--color-neon-blue)] transition-all group" style={{ borderRadius: 'var(--radius-lg)' }}>
                                <div className="w-14 h-14 bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] flex items-center justify-center text-2xl mb-6 group-hover:bg-[var(--color-neon-blue)] group-hover:text-[var(--background)] transition-colors" style={{ borderRadius: 'var(--radius-sm)' }}>
                                    📡
                                </div>
                                <h3 className="text-2xl mb-4" style={{ fontWeight: 'var(--font-heading-weight)' }}>Saha İzlenebilirliği</h3>
                                <p className="opacity-70 leading-relaxed mb-6">
                                    Uydudan değil, kökten gelen veri. Çiftçi beyanını dijital doğrulama ile birleştiren hibrit model.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-[var(--foreground)]/20 opacity-50" style={{ borderRadius: 'var(--radius-sm)' }}>MRV</span>
                                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-[var(--foreground)]/20 opacity-50" style={{ borderRadius: 'var(--radius-sm)' }}>IoT</span>
                                </div>
                            </div>

                            {/* Card 2: Editorial / Text Heavy */}
                            <div className="space-y-6">
                                <h3 className="text-3xl border-l-4 border-[var(--color-neon-blue)] pl-6" style={{ fontWeight: 'var(--font-heading-weight)' }}>
                                    "Kanıt Disiplini" Nedir?
                                </h3>
                                <p className="opacity-80 text-lg leading-relaxed">
                                    Onarıcı tarım, iyi niyetten fazlasını gerektirir. Biz, <strong>Claim-Evidence-Boundary</strong> (İddia-Kanıt-Sınır) prensibiyle çalışırız. Ölçemediğimiz hiçbir veriyi raporlamayız.
                                </p>
                                <a href="#" className="inline-flex items-center text-[var(--color-neon-blue)] hover:underline font-medium">
                                    Manifestoyu Oku →
                                </a>
                            </div>

                            {/* Card 3: Stats & Tokens */}
                            <div className="space-y-8 p-8 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10" style={{ borderRadius: 'var(--radius-lg)' }}>
                                <div>
                                    <div className="flex justify-between items-end mb-2 relative">
                                        <span className="text-5xl" style={{ fontWeight: 'var(--font-heading-weight)' }}>12.4K</span>
                                        <span className="text-sm font-mono opacity-60 mb-1 absolute -right-0 -top-4 text-[var(--color-neon-orange)]">LIVE DATA</span>
                                    </div>
                                    <div className="text-sm opacity-60 uppercase tracking-widest">Hektar İzleniyor</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Design 1 */}
                                    <Link href="/tasarim-lab/organic-luxury" className="block group">
                                        <div className="border border-stone-200 bg-[#F9F8F4] p-8 aspect-[4/3] flex flex-col justify-between transition-all hover:shadow-xl relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('/assets/coiumler/organic_luxury_hero_v2.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            <div className="relative z-10">
                                                <span className="text-xs font-serif italic text-stone-500">Experiment 001</span>
                                                <h3 className="text-3xl font-serif text-stone-800 mt-2 group-hover:text-white transition-colors">Organic Luxury</h3>
                                            </div>
                                            <div className="relative z-10 flex justify-between items-end">
                                                <span className="text-xs tracking-widest uppercase text-stone-400 group-hover:text-white/80">Silent / Editorial</span>
                                                <span className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">→</span>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Design 2 */}
                                    <Link href="/tasarim-lab/precision-ag" className="block group">
                                        <div className="border border-slate-200 bg-white p-8 aspect-[4/3] flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('/assets/coiumler/precision_ag_hero_v2.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            <div className="relative z-10">
                                                <span className="text-xs font-mono text-slate-500">Experiment 002</span>
                                                <h3 className="text-3xl font-sans font-medium text-slate-900 mt-2 group-hover:text-white">Precision Ag</h3>
                                            </div>
                                            <div className="relative z-10 flex justify-between items-end">
                                                <span className="text-xs tracking-widest uppercase text-slate-400 group-hover:text-white/80">Tech / SaaS</span>
                                                <span className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white transition-all">
                                                    <span className="font-mono text-[10px]">GO</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Design 3 */}
                                    <Link href="/tasarim-lab/raw-earth" className="block group">
                                        <div className="border-4 border-black bg-[#EFECE5] p-8 aspect-[4/3] flex flex-col justify-between transition-all hover:bg-black hover:text-[#CCFF00] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('/assets/coiumler/raw_earth_hero.png')] bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-100 grayscale"></div>
                                            <div className="relative z-10">
                                                <span className="text-xs font-black uppercase tracking-tighter">Experiment 003</span>
                                                <h3 className="text-4xl font-black uppercase mt-2 leading-[0.8]">Raw<br />Earth</h3>
                                            </div>
                                            <div className="relative z-10 flex justify-between items-end">
                                                <span className="text-xs font-bold uppercase tracking-widest">Brutalist / Wild</span>
                                                <span className="text-2xl font-black">↗</span>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Design 4 */}
                                    <Link href="/tasarim-lab/futuristic" className="block group">
                                        <div className="border border-[#06B6D4]/30 bg-[#030712] p-8 aspect-[4/3] flex flex-col justify-between transition-all hover:border-[#00FF9D] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('/assets/coiumler/futuristic_hero.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            {/* Scanline overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20 pointer-events-none"></div>

                                            <div className="relative z-10">
                                                <span className="text-xs font-mono text-[#06B6D4]">EXP_004</span>
                                                <h3 className="text-3xl font-mono text-[#E0F2FE] mt-2 group-hover:text-[#00FF9D] text-shadow-neon">Futuristic</h3>
                                            </div>
                                            <div className="relative z-10 flex justify-between items-end">
                                                <span className="text-xs tracking-widest uppercase text-[#06B6D4]/70">Cyber / Space</span>
                                                <span className="w-8 h-8 border border-[#06B6D4] flex items-center justify-center group-hover:bg-[#06B6D4] group-hover:text-black transition-all">
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Footer Snippet */}
                    <footer className="border-t border-[var(--foreground)]/10 py-12 text-center opacity-40">
                        <p className="text-sm">Vera Terra Design System • v2.1.0 • System Status: Stable</p>
                    </footer>

                </div>
            </main>
        </div>
    );
}
```
