"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        },
        {
            title: "3. Pistachio Reality (Antep)",
            themes: [
                { id: 'theme-sys3-pistachio-light', name: 'Pistachio Light', color: '#93c572' },
                { id: 'theme-sys3-pistachio-dark', name: 'Pistachio Dark', color: '#2b1d16' },
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
                                    <div className="h-1 w-full bg-[var(--foreground)]/10 overflow-hidden" style={{ borderRadius: 'var(--radius-sm)' }}>
                                        <div className="h-full w-3/4 bg-[var(--color-neon-blue)]"></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--foreground)]/10">
                                        <div>
                                            <div className="text-xs opacity-40 mb-1">Primary Color</div>
                                            <div className="h-8 w-full bg-[var(--color-neon-blue)]" style={{ borderRadius: 'var(--radius-sm)' }}></div>
                                        </div>
                                        <div>
                                            <div className="text-xs opacity-40 mb-1">Accent (Pop)</div>
                                            <div className="h-8 w-full bg-[var(--color-accent-pop)]" style={{ borderRadius: 'var(--radius-sm)' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* NEW EXPERIMENTS SECTION */}
                    <section className="py-24 px-12 md:px-24 bg-black/20 border-t border-white/10">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl mb-12 border-l-4 border-[var(--color-neon-blue)] pl-6" style={{ fontWeight: 'var(--font-heading-weight)' }}>
                                Design Experiments (System 2 Candidates)
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Design 1 */}
                                <Link href="/tasarim-lab/organic-luxury" className="block group">
                                    <div className="border border-stone-200 bg-[#F9F8F4] p-8 aspect-video flex flex-col justify-between transition-all hover:shadow-xl relative overflow-hidden group-hover:scale-[1.01] duration-500">
                                        <div className="absolute inset-0 bg-[url('/assets/coiumler/organic_luxury_hero_v2.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <div className="relative z-10">
                                            <span className="text-xs font-serif italic text-stone-500 bg-white/50 px-2 py-1 backdrop-blur-md">Experiment 001</span>
                                            <h3 className="text-3xl font-serif text-stone-800 mt-2 group-hover:text-white transition-colors bg-white/50 group-hover:bg-black/20 inline-block px-2">Organic Luxury</h3>
                                        </div>
                                        <div className="relative z-10 flex justify-between items-end">
                                            <span className="text-xs tracking-widest uppercase text-stone-400 group-hover:text-white/80 bg-white/80 group-hover:bg-transparent px-2">Silent / Editorial</span>
                                            <span className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-white text-stone-900 group-hover:bg-stone-800 group-hover:text-white transition-all shadow-lg">→</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Design 2 */}
                                <Link href="/tasarim-lab/precision-ag" className="block group">
                                    <div className="border border-slate-200 bg-white p-8 aspect-video flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden group-hover:scale-[1.01] duration-500">
                                        <div className="absolute inset-0 bg-[url('/assets/coiumler/precision_ag_hero_v2.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <div className="relative z-10">
                                            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1">Experiment 002</span>
                                            <h3 className="text-3xl font-sans font-medium text-slate-900 mt-2 group-hover:text-white bg-slate-50 group-hover:bg-black/20 inline-block px-2">Precision Ag</h3>
                                        </div>
                                        <div className="relative z-10 flex justify-between items-end">
                                            <span className="text-xs tracking-widest uppercase text-slate-400 group-hover:text-white/80 bg-white group-hover:bg-transparent px-2">Tech / SaaS</span>
                                            <span className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center bg-white text-slate-900 group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white transition-all shadow-lg">
                                                <span className="font-mono text-[10px]">GO</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Design 3 */}
                                <Link href="/tasarim-lab/raw-earth" className="block group">
                                    <div className="border-4 border-black bg-[#EFECE5] p-8 aspect-video flex flex-col justify-between transition-all hover:bg-black hover:text-[#CCFF00] relative overflow-hidden group-hover:scale-[1.01] duration-500">
                                        <div className="absolute inset-0 bg-[url('/assets/coiumler/raw_earth_hero.png')] bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-100 grayscale"></div>
                                        <div className="relative z-10">
                                            <span className="text-xs font-black uppercase tracking-tighter bg-[#CCFF00] text-black px-2 py-1">Experiment 003</span>
                                            <h3 className="text-4xl font-black uppercase mt-2 leading-[0.8]">Raw<br />Earth</h3>
                                        </div>
                                        <div className="relative z-10 flex justify-between items-end">
                                            <span className="text-xs font-bold uppercase tracking-widest bg-white/80 px-2 group-hover:text-black">Brutalist / Wild</span>
                                            <span className="text-4xl font-black">↗</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Design 4 */}
                                <Link href="/tasarim-lab/futuristic" className="block group">
                                    <div className="border border-[#06B6D4]/30 bg-[#030712] p-8 aspect-video flex flex-col justify-between transition-all hover:border-[#00FF9D] relative overflow-hidden group-hover:scale-[1.01] duration-500">
                                        <div className="absolute inset-0 bg-[url('/assets/coiumler/futuristic_hero.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20 pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <span className="text-xs font-mono text-[#06B6D4] border border-[#06B6D4] px-2 py-1 bg-black/50">EXP_004</span>
                                            <h3 className="text-3xl font-mono text-[#E0F2FE] mt-2 group-hover:text-[#00FF9D] text-shadow-neon bg-black/50 inline-block px-2">Futuristic</h3>
                                        </div>
                                        <div className="relative z-10 flex justify-between items-end">
                                            <span className="text-xs tracking-widest uppercase text-[#06B6D4]/70 bg-black/80 px-2">Cyber / Space</span>
                                            <span className="w-10 h-10 border border-[#06B6D4] flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-black transition-all shadow-[0_0_10px_#06B6D4]">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Design 5: Home v2 */}
                                <Link href="/tasarim-lab/v2" className="block group md:col-span-2">
                                    <div className="border border-amber-900/10 bg-[#FDFDFC] p-8 min-h-[400px] flex flex-col md:flex-row gap-12 items-center transition-all hover:shadow-2xl relative overflow-hidden group-hover:scale-[1.01] duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#5F6F52]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                            <Image
                                                src="/assets/coiumler/home_v2_hero.png"
                                                alt="Home v2 Preview"
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 relative z-10">
                                            <span className="text-xs font-mono font-bold text-[#5F6F52] bg-[#5F6F52]/10 px-3 py-1 rounded-full mb-6 inline-block">Experiment 005_BETA</span>
                                            <h3 className="text-4xl font-bold text-[#2B1D16] mb-4">Homepage v2: <span className="text-[#5F6F52]">Agronomy Layer</span></h3>
                                            <p className="text-gray-600 mb-8 leading-relaxed">
                                                Teknik agronomi terimlerini (SOM, SOC, WHC) merkeze alan, kurumsal ve saha gerçekliğini birleştiren yeni içerik kurgusu. Timeline, MRV disiplini ve detaylı SSS blokları içerir.
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold tracking-widest uppercase rounded">Professional</span>
                                                <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold tracking-widest uppercase rounded">Evidence-Based</span>
                                                <span className="text-2xl font-bold text-[#5F6F52] ml-auto">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Design 6: Key Visuals */}
                                <Link href="/tasarim-lab/key-visuals" className="block group md:col-span-2">
                                    <div className="border border-white/5 bg-[#050505] p-8 min-h-[400px] flex flex-col md:flex-row-reverse gap-12 items-center transition-all hover:shadow-[0_0_50px_rgba(255,107,53,0.1)] relative overflow-hidden group-hover:scale-[1.01] duration-500 rounded-3xl">
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                            <Image
                                                src="/assets/kv_carbon.png"
                                                alt="Key Visuals Preview"
                                                fill
                                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 relative z-10 text-white">
                                            <span className="text-xs font-mono font-bold text-[#FF6B35] bg-[#FF6B35]/10 px-3 py-1 rounded-full mb-6 inline-block uppercase tracking-widest">Experiment 006_KV</span>
                                            <h3 className="text-4xl font-bold mb-4">Key Visuals: <span className="text-[#93C572]">Sensory Lab</span></h3>
                                            <p className="text-white/60 mb-8 leading-relaxed">
                                                Marka derinliğini sahadan gelen duyusal verilerle birleştiren yüksek segment görsel denemeler. Karbon tutulumu, bitki zekası ve makro düzen üzerine zarif animasyonlu konseptler.
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded">Artistic</span>
                                                <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded">Cinematic</span>
                                                <span className="text-2xl font-bold text-[#FF6B35] ml-auto">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Design 7: Coming Soon v2 */}
                                <Link href="/coming-soon/v2" className="block group md:col-span-2">
                                    <div className="border border-white/5 bg-[#050505] p-8 min-h-[400px] flex flex-col md:flex-row gap-12 items-center transition-all hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden group-hover:scale-[1.01] duration-500 rounded-3xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                            <Image
                                                src="/assets/coming_soon_bloom.png"
                                                alt="Coming Soon v2 Preview"
                                                fill
                                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 relative z-10 text-white">
                                            <span className="text-xs font-mono font-bold text-[#06B6D4] bg-[#06B6D4]/10 px-3 py-1 rounded-full mb-6 inline-block uppercase tracking-widest">Experiment 007_CS</span>
                                            <h3 className="text-4xl font-bold mb-4">Coming Soon: <span className="text-white">Motion v2</span></h3>
                                            <p className="text-white/60 mb-8 leading-relaxed">
                                                Sıvı (Gooey) filtreler ve lazer tarama efektleri içeren ultra-zarif animasyonlu Coming Soon konsepti. Bloom ve Scan olmak üzere iki farklı duyusal yaklaşım barındırır.
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded">Liquid Motion</span>
                                                <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded">Cyber-Agi</span>
                                                <span className="text-2xl font-bold text-[#06B6D4] ml-auto">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
