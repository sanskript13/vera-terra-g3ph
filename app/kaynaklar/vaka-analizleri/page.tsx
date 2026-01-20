import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-40 sticky" />
                <div className="absolute inset-0 bg-black z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2500')] bg-cover bg-center grayscale opacity-40"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center max-w-3xl pt-20">
                    <span className="text-gray-400 text-sm tracking-wider uppercase mb-4 block">Sahadan Notlar ve Sonuçlar</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Her Saha Kendi Hikayesini Yazar; <br />Biz O Hikayeyi Veriye Dökeriz.</h1>
                    <p className="text-xl text-gray-300 mb-8 font-light">
                        Burada "mucizevi vaatler" değil; ölçülmüş ilerleme ve sahadan çıkarılan dersler bulacaksınız.
                    </p>
                </div>
            </section>

            {/* Case 1 */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-[var(--color-neon-blue)] font-mono text-sm mb-2">Ege Bölgesi • Sanayi Domatesi • Kurumsal</div>
                        <h2 className="text-3xl font-bold mb-6">Vaka 1: Endüstriyel Tedarik Zinciri / Su Yönetimi</h2>
                        <div className="space-y-6 text-gray-400">
                            <div>
                                <h4 className="text-white font-bold mb-2">Sorun:</h4>
                                <p>Artan kuraklık riski ve vahşi sulama alışkanlığı. "Su ayak izi" hedeflerinde sapma.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Çözüm (Müdahale):</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Dijital toprak nem sensörleri kurulumu.</li>
                                    <li>Üreticiye akıllı sulama bildirimleri.</li>
                                    <li>Sezon boyu 4 kritik saha ziyareti.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[var(--color-neon-blue)] font-bold mb-2">KANIT (Sonuç):</h4>
                                <ul className="list-disc pl-5 space-y-1 text-white">
                                    <li><strong>%18 Su Tasarrufu</strong> (Sayaç verisi ile doğrulanmıştır).</li>
                                    <li>Verim kaybı olmadan brix artışı.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-white/5 border border-white/10 rounded-xl p-8 h-80 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💧</div>
                        <div className="text-4xl font-bold text-[var(--color-neon-blue)]">-%18</div>
                        <div className="text-gray-400 text-sm mt-2">Su Tüketimi</div>
                        <DataGrid className="opacity-10" />
                    </div>
                </div>
            </section>

            {/* Case 2 */}
            <section className="py-24 bg-black border-t border-white/10">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 h-80 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="relative z-10 text-center">
                            <div className="text-6xl mb-4">🪱</div>
                            <h3 className="text-2xl font-bold">Toprak Canlılığı</h3>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-[var(--color-soil-secondary)] font-mono text-sm mb-2">İç Ege • Bağcılık • Butik Üretim</div>
                        <h2 className="text-3xl font-bold mb-6">Vaka 2: Toprak Sağlığı ve Onarım</h2>
                        <div className="space-y-6 text-gray-400">
                            <div>
                                <h4 className="text-white font-bold mb-2">Sorun:</h4>
                                <p>Yoğun sürüm nedeniyle organik madde kaybı (%1 altı) ve toprak yorgunluğu.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Çözüm (Müdahale):</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Azaltılmış toprak işleme (No-till transition).</li>
                                    <li>Sıra arası örtü bitkisi (Fiğ + Yulaf).</li>
                                    <li>Kompost çayı uygulamaları.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[var(--color-soil-secondary)] font-bold mb-2">KANIT (Sonuç):</h4>
                                <ul className="list-disc pl-5 space-y-1 text-white">
                                    <li>2 sezon sonunda su tutma kapasitesinde gözle görülür iyileşme.</li>
                                    <li>Faydalı böcek popülasyonunda artış.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
