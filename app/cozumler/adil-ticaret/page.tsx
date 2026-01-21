import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function FairTradePage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-neon-blue)] selection:text-white transition-colors duration-300">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--background)] z-0">
                    {/* Reusing Producer hands image for Fair Trade context */}
                    <div className="absolute inset-0 bg-[url('/assets/coiumler/producer-hand.png')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <Link href="/cozumler" className="inline-block mb-6 text-[var(--color-neon-blue)] hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
                        ← Çözümler Hub
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
                        Adil <span className="text-purple-400">Ticaret.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200/80 max-w-2xl mx-auto leading-relaxed">
                        Sürdürülebilirlik sadece ekolojik değil, ekonomiktir. Üreticinin kazandığı döngüler tasarlıyoruz.
                    </p>
                </div>
            </section>

            {/* CONTENT BLOCKS */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl space-y-24">

                    {/* Section 1: Premium Model */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                                Değer Paylaşımı
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Onarıcı Prim Modeli.</h2>
                            <p className="text-[var(--foreground)]/70 leading-relaxed mb-6">
                                Çiftçi, ekosistem servislerini (karbon tutma, su koruma) restore ettiğinde, sadece ürün bedeli değil, bir "Onarım Primi" de hak eder. Markalarla kurguladığımız modellerde, ölçülen her ton karbon ve iyileşen her hektar için çiftçiye ek gelir akışı sağlıyoruz.
                            </p>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span> Doğrudan Prim Ödemeleri
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span> Uzun Vadeli Alım Garantileri
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 bg-[var(--foreground)]/5 rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10">
                            <span className="text-4xl">💰 🤝 🌾</span>
                        </div>
                    </div>

                    {/* Section 2: Social Impact */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="h-64 bg-[var(--foreground)]/5 rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10 p-8">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🏠</div>
                                <h4 className="font-bold">Kırsal Kalkınma</h4>
                            </div>
                        </div>
                        <div>
                            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                                Sosyal Etki
                            </span>
                            <h2 className="text-3xl font-bold mb-6">Yerinde Yaşam.</h2>
                            <p className="text-[var(--foreground)]/70 leading-relaxed mb-6">
                                Tarım karlı hale geldiğinde, kırsaldan kente göç durur. Genç çiftçiler toprağa döner. Amacımız sadece toprağı değil, kırsal toplulukları da canlandırmak.
                            </p>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span> Kadın Çiftçi Destekleri
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span> Eğitim ve Teknoloji Transferi
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--foreground)]/5 border-t border-[var(--foreground)]/10 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Etki Raporunu İnceleyin</h2>
                    <Link href="/kaynaklar" className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded hover:opacity-90 transition-all shadow-lg hover:translate-y-[-2px]">
                        Dokümanlara Git
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
