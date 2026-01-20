"use client";
import React, { useState } from 'react';
import { DataGrid } from "@/app/components/DataGrid";

export default function DesignLabPage() {
    const [activeTheme, setActiveTheme] = useState(''); // Empty string = Default theme

    const themes = [
        { id: '', name: 'Original (Hybrid)', color: '#00FFFF' },
        { id: 'theme-cyber', name: 'Deep Cyber (HUD)', color: '#00ff00' },
        { id: 'theme-soil', name: 'Raw Soil (Realism)', color: '#d2691e' },
        { id: 'theme-sunset', name: 'Golden Hour', color: '#fbbf24' },
        { id: 'theme-corporate', name: 'Stark Corporate', color: '#003366' },
        { id: 'theme-blueprint', name: 'Blueprint', color: '#002244' },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-[family-name:var(--font-sans)] bg-gray-900">

            {/* Sidebar / Controls */}
            <aside className="w-full md:w-64 bg-black border-r border-white/10 p-6 flex flex-col z-50 shadow-2xl">
                <h1 className="text-xl font-bold text-white mb-2">Vera Terra</h1>
                <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8">Design Lab v1.0</h2>

                <div className="space-y-3">
                    <p className="text-sm text-gray-400 mb-2">Tema Seçin:</p>
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTheme(t.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${activeTheme === t.id ? 'bg-white text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                        >
                            <span className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: t.color }}></span>
                            {t.name}
                        </button>
                    ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                    <div className="text-xs text-gray-600">
                        <p>Aktif Sınıf:</p>
                        <code className="text-green-400">{activeTheme || 'default'}</code>
                    </div>
                    <a href="/" className="block mt-4 text-xs text-white/50 hover:text-white">← Ana Siteye Dön</a>
                </div>
            </aside>

            {/* Preview Area */}
            <main className={`flex-1 relative overflow-y-auto ${activeTheme}`}>
                {/* We wrap content in a div that applies standard background/color in case valid theme is used */}
                <div className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">

                    {/* HERO PREVIEW */}
                    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                        <DataGrid className="z-10 opacity-30" />
                        {/* Simulated Image Background */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--background)] to-transparent opacity-90"></div>
                        {/* Raw image element to simulate the 'Photo' layer */}
                        <div className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1625246333195-bf791df7f582?q=80&w=2500')] bg-cover bg-center grayscale opacity-40 mix-blend-overlay"></div>

                        <div className="relative z-20 text-center px-4">
                            <span className="text-[var(--color-neon-blue)] font-mono text-xs tracking-widest uppercase mb-4 block animate-pulse">Design System Preview</span>
                            <h1 className="text-5xl font-bold mb-4">Geleceğin Tarımı.</h1>
                            <p className="max-w-xl mx-auto opacity-80 text-lg">
                                Bu bir simülasyondur. Seçilen tema renkleri ve font atmosferi bu alanı şekillendirir.
                            </p>
                            <div className="mt-8 flex gap-4 justify-center">
                                <button className="px-6 py-3 bg-[var(--color-neon-blue)] text-[var(--background)] font-bold rounded hover:opacity-80 transition-opacity">
                                    Primary Action
                                </button>
                                <button className="px-6 py-3 border border-[var(--foreground)]/20 hover:border-[var(--color-neon-blue)] rounded transition-colors">
                                    Secondary
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* UI COMPONENTS GRID */}
                    <section className="p-12 max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                            {/* Card 1: Technical */}
                            <div className="p-6 border border-[var(--foreground)]/10 rounded-xl bg-[var(--foreground)]/5 hover:border-[var(--color-neon-blue)] transition-colors group">
                                <div className="w-12 h-12 rounded bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)] flex items-center justify-center text-2xl mb-4 group-hover:bg-[var(--color-neon-blue)] group-hover:text-[var(--background)] transition-colors">
                                    ⚡️
                                </div>
                                <h3 className="text-xl font-bold mb-2">Teknik Veri</h3>
                                <p className="opacity-60 text-sm leading-relaxed">
                                    Sensör verileri ve uydu analizleri bu kart tasarımında nasıl görünüyor? Kenar çizgileri ve vurgulara dikkat edin.
                                </p>
                            </div>

                            {/* Card 2: Organic */}
                            <div className="p-6 border border-[var(--foreground)]/10 rounded-xl bg-[var(--foreground)]/5 hover:border-[var(--color-neon-orange)] transition-colors group">
                                <div className="w-12 h-12 rounded bg-[var(--color-neon-orange)]/20 text-[var(--color-neon-orange)] flex items-center justify-center text-2xl mb-4">
                                    🌱
                                </div>
                                <h3 className="text-xl font-bold mb-2">Organik Büyüme</h3>
                                <p className="opacity-60 text-sm leading-relaxed">
                                    Sıcak tonlar (Sunset/Soil) ikincil vurgu rengi olarak kullanılır. Toprak sağlığı ve üretici ilişkileri için.
                                </p>
                            </div>

                            {/* Typography & Stats */}
                            <div className="space-y-6">
                                <div>
                                    <span className="text-4xl font-bold text-[var(--color-neon-blue)]">
                                        %42<span className="text-sm ml-1 opacity-50 text-[var(--foreground)]">Verimlilik</span>
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-[var(--foreground)]/10 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-[var(--color-neon-blue)]"></div>
                                </div>
                                <p className="text-xs font-mono opacity-50">
                                    SYSTEM_STATUS: ONLINE<br />
                                    VARS: --color-neon-blue
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Color Palette Strip */}
                    <section className="border-t border-[var(--foreground)]/10 p-12">
                        <h3 className="text-sm font-bold opacity-50 uppercase mb-6">Active Palette Map</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded bg-[var(--background)] border border-[var(--foreground)]/20">
                                <div className="text-xs opacity-50 mb-1">Background</div>
                                <div className="font-mono text-xs">var(--background)</div>
                            </div>
                            <div className="p-4 rounded bg-[var(--foreground)] text-[var(--background)]">
                                <div className="text-xs opacity-50 mb-1">Foreground</div>
                                <div className="font-mono text-xs">var(--foreground)</div>
                            </div>
                            <div className="p-4 rounded bg-[var(--color-neon-blue)] text-black">
                                <div className="text-xs opacity-50 mb-1">Neon Blue</div>
                                <div className="font-mono text-xs">var(--neon-blue)</div>
                            </div>
                            <div className="p-4 rounded bg-[var(--color-neon-orange)] text-white">
                                <div className="text-xs opacity-50 mb-1">Neon Orange</div>
                                <div className="font-mono text-xs">var(--neon-orange)</div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
