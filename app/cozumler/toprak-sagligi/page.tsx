import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function SoilHealthPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-neon-blue)] selection:text-white transition-colors duration-300">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--background)] z-0">
                    {/* Fallback gradient until image is available */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2d3a23] to-[#1a120b] opacity-80"></div>
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <Link href="/cozumler" className="inline-block mb-6 text-[var(--color-neon-blue)] hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
                        ← Çözümler Hub
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
                        <span className="text-[var(--color-neon-blue)]">Toprak</span> Sağlığı.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200/80 max-w-2xl mx-auto leading-relaxed">
                        Karbon tutulumu sadece bir metrik değil, toprağın yaşama gücüdür. Biyolojik çeşitliliği ve su döngüsünü onarıyoruz.
                    </p>
                </div>
            </section>

            {/* CONTENT BLOCKS */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl space-y-24">

                    {/* Section 1: Carbon */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest uppercase mb-4 block">
                                Karbon Süngeri
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Atmosferden Toprağa.</h2>
                            <p className="text-[var(--foreground)]/70 leading-relaxed mb-6">
                                Sağlıklı toprak, devasa bir karbon yutağıdır. Fotosentez yoluyla bitkiler atmosferden karbonu alır ve kökleri aracılığıyla topraktaki mikroorganizmalara şeker olarak sunar. Bu takas, karbonun toprakta "glomalin" gibi kararlı formlarda saklanmasını sağlar.
                            </p>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-neon-blue)]">✓</span> Yüksek Organik Madde
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-neon-blue)]">✓</span> İklim Direnci
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 bg-[var(--foreground)]/5 rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10">
                            <span className="text-4xl">🌫️ ➡️ 🌱</span>
                        </div>
                    </div>

                    {/* Section 2: Water */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="h-64 bg-[var(--foreground)]/5 rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10">
                            <span className="text-4xl">💧</span>
                        </div>
                        <div>
                            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                                Su Yönetimi
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Yeşil Su Deposu.</h2>
                            <p className="text-[var(--foreground)]/70 leading-relaxed mb-6">
                                Toprak organik maddesindeki her %1'lik artış, hektar başına yaklaşık 144.000 litre daha fazla su tutma kapasite anlamına gelir. Bu, kuraklık dönemlerinde ekinleriniz için doğal bir sigortadır.
                            </p>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">✓</span> Azalan Sulama Maliyeti
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">✓</span> Erozyon Kontrolü
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--foreground)]/5 border-t border-[var(--foreground)]/10 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Toprağınızın Potansiyelini Keşfedin</h2>
                    <Link href="/iletisim" className="inline-block px-8 py-4 bg-[var(--color-neon-blue)] text-white font-bold rounded hover:opacity-90 transition-all shadow-lg hover:translate-y-[-2px]">
                        Analiz Talep Edin
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
