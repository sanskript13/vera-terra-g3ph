import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function MRVPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-neon-blue)] selection:text-white transition-colors duration-300">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--background)] z-0">
                    <div className="absolute inset-0 bg-[url('/assets/corporate/topology.png')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <Link href="/cozumler" className="inline-block mb-6 text-[var(--color-neon-blue)] hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
                        ← Çözümler Hub
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
                        Veri & <span className="text-[var(--color-neon-orange)]">MRV.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200/80 max-w-2xl mx-auto leading-relaxed">
                        Ölçülebilir, Raporlanabilir, Doğrulanabilir (MRV). Güvenilir veri olmadan onarım iddiası geçersizdir.
                    </p>
                </div>
            </section>

            {/* CONTENT BLOCKS */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl space-y-24">

                    {/* Section 1: Methodology */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-[var(--color-neon-orange)] font-mono text-sm tracking-widest uppercase mb-4 block">
                                Hibrit Metodoloji
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Uydu + Saha.</h2>
                            <p className="text-[var(--foreground)]/70 leading-relaxed mb-6">
                                Tek başına uydu verisi yeterli değildir, tek başına saha denetimi ise ölçeklenemez. Biz hibrit bir model kullanıyoruz. Uydu görüntüleri ile geniş alan taraması yaparken, kritik noktalarda mobil uygulama destekli saha "ground-truthing" (yer doğrulama) yapıyoruz.
                            </p>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-neon-orange)]">✓</span> Sentinel-2 Uydu Analizi
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-neon-orange)]">✓</span> Mobil Ziraat Mühendisi Ağı
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 bg-[var(--foreground)]/5 rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('/assets/corporate/network.png')] bg-cover bg-center opacity-40 grayscale"></div>
                            <span className="text-4xl relative z-10">🛰️ + 📱</span>
                        </div>
                    </div>

                    {/* Section 2: Audit Readiness */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="h-64 bg-[var(--foreground)]/5 rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10 text-center p-8">
                            <div className="space-y-2">
                                <div className="text-xs uppercase tracking-widest opacity-50">Audit Score</div>
                                <div className="text-5xl font-mono text-green-500">98%</div>
                                <div className="text-xs text-green-500/70">Verified</div>
                            </div>
                        </div>
                        <div>
                            <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                                Denetime Hazır
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Yeşil Aklama Riski Yok.</h2>
                            <p className="text-[var(--foreground)]/70 leading-relaxed mb-6">
                                FLAG (Forest, Land and Agriculture) hedefleri için veri kalitesi kritiktir. Verilerimiz uluslararası standartlara (GHG Protocol, Gold Standard) uygun formatta saklanır. İstediğiniz an bağımsız denetçiye (3rd party verifier) açılabilir.
                            </p>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Blockchain Tabanlı Kayıt (Opsiyonel)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Şeffaf Hesaplama Yöntemleri
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--foreground)]/5 border-t border-[var(--foreground)]/10 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Veri Setinizi Oluşturun</h2>
                    <Link href="/iletisim" className="inline-block px-8 py-4 bg-[var(--color-neon-orange)] text-white font-bold rounded hover:opacity-90 transition-all shadow-lg hover:translate-y-[-2px]">
                        Demo Randevusu
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
