import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-neon-blue)] selection:text-white transition-colors duration-300">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                <DataGrid className="z-0 opacity-30 pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest uppercase mb-4 block animate-fade-in">
                        Kimiz?
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Onarımın <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-orange)]">Mühendisleri.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed">
                        Biz, toprağın kadim bilgeliğini teknolojinin kesinliğiyle birleştiren bir etki girişimi ve inovasyon laboratuvarıyız.
                    </p>
                </div>
            </section>

            {/* MANIFESTO / MISSION */}
            <section className="py-20 bg-[var(--foreground)]/5 border-y border-[var(--foreground)]/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Misyonumuz</h2>
                            <p className="text-lg leading-relaxed opacity-80 mb-8">
                                Gıda sistemini "çıkarıcı" (extractive) olmaktan çıkarıp "onarıcı" (regenerative) hale getirmek. Bunu yaparken sadece doğayı değil, çiftçinin ekonomisini de iyileştirmek.
                            </p>
                            <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
                            <p className="text-lg leading-relaxed opacity-80">
                                2030 yılına kadar 1 milyon hektar tarım arazisinde ölçülebilir onarım sağlamak ve küresel tedarik zincirlerinin standartlarını yeniden belirlemek.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Fallback image if generation fails, or the generated one if successful */}
                            <div className="absolute inset-0 bg-[url('/assets/coiumler/vera-story.png')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
                            <div className="absolute bottom-8 left-8 text-white max-w-xs">
                                <p className="font-mono text-sm">"Toprak ne kadar güçlüyse, gelecek o kadar güvenlidir."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOUNDING STORY */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-[var(--color-neon-orange)] font-mono text-sm tracking-widest uppercase mb-4 block">
                        Hikayemiz
                    </span>
                    <h2 className="text-4xl font-bold mb-8">Neden VeraTerra?</h2>
                    <p className="text-xl text-[var(--foreground)]/70 leading-relaxed mb-6">
                        Her şey, Antep fıstığı bahçelerinde kuruyan ağaçları ve azalan verimi fark etmemizle başladı. Sorun sadece susuzluk değil, toprağın "hayatını" kaybetmesiydi.
                    </p>
                    <p className="text-lg text-[var(--foreground)]/60 leading-relaxed mb-12">
                        Geleneksel tarımın sınırlarını gördük, teknolojinin soğukluğunu hissettik. İkisini birleştirecek bir "kökten uca" dönüşüm gerektiğine karar verdik. Vera (Gerçek) ve Terra (Toprak). İsmi buradan geliyor: Toprağın Gerçeği.
                    </p>
                </div>
            </section>

            {/* TEAM SECTION (Placeholders) */}
            <section className="py-24 bg-[var(--background)] border-t border-[var(--foreground)]/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Çekirdek Ekip</h2>
                        <p className="opacity-60">Farklı disiplinlerden gelen uzmanlar, tek bir amaç için bir arada.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="group text-center">
                            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200"></div>
                            </div>
                            <h3 className="text-xl font-bold">Mehmet</h3>
                            <p className="text-sm text-[var(--color-neon-blue)] font-mono uppercase tracking-wider mb-2">Kurucu Ortak</p>
                            <p className="text-sm opacity-60">Ziraat Mühendisi & Toprak Bilimcisi</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group text-center">
                            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200"></div>
                            </div>
                            <h3 className="text-xl font-bold">Gökçe</h3>
                            <p className="text-sm text-[var(--color-neon-blue)] font-mono uppercase tracking-wider mb-2">Kurucu Ortak</p>
                            <p className="text-sm opacity-60">Strateji & Sürdürülebilirlik</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group text-center">
                            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200"></div>
                            </div>
                            <h3 className="text-xl font-bold">Ali</h3>
                            <p className="text-sm text-[var(--color-neon-orange)] font-mono uppercase tracking-wider mb-2">Teknoloji Lideri</p>
                            <p className="text-sm opacity-60">Veri Bilimi & AI</p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="group text-center">
                            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200"></div>
                            </div>
                            <h3 className="text-xl font-bold">Elif</h3>
                            <p className="text-sm text-[var(--color-neon-orange)] font-mono uppercase tracking-wider mb-2">Saha Operasyon</p>
                            <p className="text-sm opacity-60">Ziraat Mühendisi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Bizimle Tanışın</h2>
                    <Link href="/iletisim" className="inline-block px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded hover:opacity-90 transition-all shadow-lg hover:translate-y-[-2px]">
                        Ofisimizi Ziyaret Edin
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
