import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555447405-bd6163e8c718?q=80&w=2500')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center max-w-3xl pt-20">
                    <span className="text-[var(--color-neon-blue)] font-mono text-xs tracking-widest uppercase mb-4 block">Vera Terra İçgörüleri</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Toprak, Veri ve Gelecek.</h1>
                    <p className="text-xl text-gray-400 mb-8 font-light">
                        Onarıcı tarım pratikleri, gelişen regülasyonlar (SBTI, CSRD) ve MRV teknolojileri üzerine teknik notlar, saha gözlemleri ve analizler.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12 bg-black border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[var(--color-neon-blue)]/50 transition-colors group">
                        <div className="h-64 md:h-96 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000')] bg-cover bg-center"></div>
                            <div className="absolute top-4 left-4 bg-[var(--color-neon-blue)] text-black px-3 py-1 font-bold text-xs uppercase rounded">Öne Çıkan</div>
                        </div>
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-[var(--color-neon-blue)] transition-colors">Kurumsal İklim Hedeflerinde "FLAG" Rehberi Nedir?</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Bilime Dayalı Hedefler Girişimi'nin (SBTi) tarım ve arazi kullanımı (FLAG) sektörü için getirdiği yeni standartlar, tedarik zinciri yöneticileri için ne anlama geliyor?
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>Regülasyon ve Uyum • 6 dk Okuma</span>
                                <span className="text-white group-hover:translate-x-2 transition-transform">Devamını Oku →</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories / Grid */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-12 border-l-4 border-[var(--color-neon-blue)] pl-4">Kategoriler</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-[var(--color-sunset-glow)] flex items-center"><span className="mr-2">🌱</span> Saha Notları</h3>
                            <div className="space-y-4">
                                {[
                                    "Örtü Bitkisi Seçim Rehberi: Hangi Bölgeye Hangi Tohum?",
                                    "Toprak Sıkışmasını Anlamak: Penetrometre Nasıl Kullanılır?",
                                    "Kompost Çayı Hazırlarken Yapılan 5 Kritik Hata"
                                ].map((post, i) => (
                                    <Link key={i} href="#" className="block p-4 border border-white/5 rounded hover:bg-white/5 hover:border-white/10 transition-colors group">
                                        <h4 className="font-medium text-gray-200 group-hover:text-white mb-2">{post}</h4>
                                        <span className="text-xs text-gray-500">Saha Ekibi</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-[var(--color-neon-blue)] flex items-center"><span className="mr-2">🏢</span> Regülasyon ve Uyum</h3>
                            <div className="space-y-4">
                                {[
                                    "Greenwashing Riskini Yönetmek: Kanıt Disiplini Neden Şart?",
                                    "Rejeneratif Tarım Sertifikaları Karşılaştırması: Regenagri vs. Diğerleri",
                                    "Tedarik Zincirinde İzlenebilirlik Yatırımı Ne Zaman Geri Döner?"
                                ].map((post, i) => (
                                    <Link key={i} href="#" className="block p-4 border border-white/5 rounded hover:bg-white/5 hover:border-white/10 transition-colors group">
                                        <h4 className="font-medium text-gray-200 group-hover:text-white mb-2">{post}</h4>
                                        <span className="text-xs text-gray-500">Yönetim</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-purple-400 flex items-center"><span className="mr-2">📡</span> Teknoloji ve MRV</h3>
                            <div className="space-y-4">
                                {[
                                    "MRV 101: Ölçüm, Raporlama ve Doğrulama Nasıl Çalışır?",
                                    "NDVI Verisi Sahayı Ne Kadar Doğru Yansıtır? (Uydu vs. Gözlem)",
                                    "Dijital Saha Kayıtları (FMS) Neden Excel'den Daha Güvenli?"
                                ].map((post, i) => (
                                    <Link key={i} href="#" className="block p-4 border border-white/5 rounded hover:bg-white/5 hover:border-white/10 transition-colors group">
                                        <h4 className="font-medium text-gray-200 group-hover:text-white mb-2">{post}</h4>
                                        <span className="text-xs text-gray-500">Veri Ekibi</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-[var(--color-soil-primary)] text-center relative overflow-hidden">
                <DataGrid className="opacity-10" />
                <div className="container mx-auto px-4 relative z-10 max-w-2xl">
                    <span className="text-4xl block mb-6">📩</span>
                    <h2 className="text-3xl font-bold mb-4">Tarımın Yönünü Takip Edin</h2>
                    <p className="text-lg text-white/80 mb-8">
                        Ayda bir kez; sahadan güncel öğrenimleri ve regülasyon özetlerini e-posta kutunuza gönderiyoruz. Spam yok, içgörü var.
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="E-posta adresiniz" className="flex-1 bg-black/20 border border-white/30 rounded px-4 py-3 placeholder-white/50 text-white focus:outline-none focus:bg-black/40" />
                        <button className="bg-white text-[var(--color-soil-primary)] font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors">Abone Ol</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
