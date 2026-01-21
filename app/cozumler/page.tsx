import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";
import { DataGrid } from "@/app/components/DataGrid";

export default function SolutionsHubPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-neon-blue)] selection:text-white transition-colors duration-300">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                <DataGrid className="z-0 opacity-30 pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest uppercase mb-4 block animate-fade-in">
                        Çözüm Ekosistemi
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Bütüncül <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-orange)]">Onarıcı Dönüşüm.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed">
                        Toprağın iyileşmesi tek taraflı olamaz. Hem tedarik zincirini yöneten markalar, hem de toprağı işleyen üreticiler için uçtan uca çözümler sunuyoruz.
                    </p>
                </div>
            </section>

            {/* SPLIT NAVIGATION CARDS */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Card 1: Corporate Supply Chain */}
                    <Link href="/cozumler/kurumsal-tedarik-zinciri" className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                        <div className="absolute inset-0 bg-[url('/assets/corporate/network.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-black bg-[var(--color-neon-blue)] rounded-full uppercase">
                                Kurumsal
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[var(--color-neon-blue)] transition-colors">
                                Tedarik Zinciri Programları
                            </h2>
                            <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                                Scope 3 emisyonlarını yönetmek, riskleri azaltmak ve "Claim"lerinizi sahadan gelen veriyle kanıtlamak için.
                            </p>
                            <span className="text-white font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                                Programı İncele <span className="text-2xl">→</span>
                            </span>
                        </div>
                    </Link>

                    {/* Card 2: Producer Cooperative */}
                    <Link href="/cozumler/uretici-kooperatif" className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                        <div className="absolute inset-0 bg-[url('/assets/coiumler/producer-hand.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-black bg-[var(--color-neon-orange)] rounded-full uppercase">
                                Üretici & Yerel
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[var(--color-neon-orange)] transition-colors">
                                Kooperatif ve Çiftçi Programları
                            </h2>
                            <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                                Verimi artırmak, girdi maliyetlerini düşürmek ve ürününüze "Onarıcı" etiketini kazandırıp değerine değer katmak için.
                            </p>
                            <span className="text-white font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                                Çözümleri Keşfet <span className="text-2xl">→</span>
                            </span>
                        </div>
                    </Link>

                </div>
            </section>

            {/* COMMON GROUND / SHARED SCIENCE */}
            <section className="py-24 bg-[var(--foreground)]/5 border-y border-[var(--foreground)]/10">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Ortak Bilim, Ortak Fayda.</h2>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[var(--foreground)]/10 -z-10"></div>

                        <Link href="/cozumler/toprak-sagligi" className="bg-[var(--background)] p-8 rounded-xl shadow-sm border border-[var(--foreground)]/10 relative hover:border-[var(--color-neon-blue)] transition-colors group">
                            <div className="w-24 h-24 bg-[var(--color-neon-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner group-hover:scale-110 transition-transform">
                                🌱
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--color-neon-blue)] transition-colors">Toprak Sağlığı</h3>
                            <p className="text-sm opacity-70 leading-relaxed">
                                Karbon tutulumu ve su tutma kapasitesi, hem iklim hedefleri hem de verim için ortaktır.
                            </p>
                        </Link>

                        <Link href="/cozumler/veri-mrv" className="bg-[var(--background)] p-8 rounded-xl shadow-sm border border-[var(--foreground)]/10 relative hover:border-[var(--color-neon-orange)] transition-colors group">
                            <div className="w-24 h-24 bg-[var(--color-neon-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner group-hover:scale-110 transition-transform">
                                🛰️
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--color-neon-orange)] transition-colors">Veri & MRV</h3>
                            <p className="text-sm opacity-70 leading-relaxed">
                                Ölçülebilir, Raporlanabilir ve Doğrulanabilir (MRV) veri, güvenin temelidir.
                            </p>
                        </Link>

                        <Link href="/cozumler/adil-ticaret" className="bg-[var(--background)] p-8 rounded-xl shadow-sm border border-[var(--foreground)]/10 relative hover:border-purple-500 transition-colors group">
                            <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner group-hover:scale-110 transition-transform">
                                🤝
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-purple-500 transition-colors">Adil Ticaret</h3>
                            <p className="text-sm opacity-70 leading-relaxed">
                                Üreticinin kazandığı, markanın riskini yönettiği sürdürülebilir bir iş modeli.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* IMPACT METRICS */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest uppercase mb-4 block">
                                Global Etki
                            </span>
                            <h2 className="text-4xl font-bold mb-6">Sayılarla Onarım.</h2>
                            <p className="text-[var(--foreground)]/70 text-lg leading-relaxed mb-8">
                                Şu ana kadar yönettiğimiz projelerde, sadece tonlarca karbonu değil, aynı zamanda kırsal kalkınmayı ve biyoçeşitliliği de hedefledik. Hedefimiz 2030'a kadar 1 milyon hektar.
                            </p>
                            <Link href="/metodoloji" className="text-[var(--color-accent-pop)] font-bold hover:underline">
                                Metodolojimizi İnceleyin →
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-[var(--foreground)]/5 rounded-lg text-center">
                                <div className="text-4xl font-bold text-[var(--color-neon-blue)] mb-2">12k+</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">Hektar İzleniyor</div>
                            </div>
                            <div className="p-6 bg-[var(--foreground)]/5 rounded-lg text-center">
                                <div className="text-4xl font-bold text-[var(--color-neon-orange)] mb-2">850+</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">Çiftçi Partner</div>
                            </div>
                            <div className="p-6 bg-[var(--foreground)]/5 rounded-lg text-center">
                                <div className="text-4xl font-bold text-purple-500 mb-2">%20</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">Su Tasarrufu</div>
                            </div>
                            <div className="p-6 bg-[var(--foreground)]/5 rounded-lg text-center">
                                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">5</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">Ülke</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
