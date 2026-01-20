import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function EvidencePage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-slate-950 text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-60" /> {/* Higher opacity specifically for this page */}
                <div className="absolute inset-0 bg-black z-0">
                    {/* Microscopic texture image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2500')] bg-cover bg-center opacity-30 grayscale"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center pt-20">
                    <span className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-4 block border-b border-gray-700 inline-block pb-1">Şeffaflık ve Doğrulama Standartlarımız</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">Ölçemediğimizi <span className="text-gray-500 line-through decoration-red-500 decoration-4">İddia Etmeyiz.</span></h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Onarıcı tarım, iyi niyetli hikayelerden fazlasıdır. "Yeşil aklama" (greenwashing) riskini yönetmek için her iddiamızı bir kanıta dayandırır, sınırlarını şeffaflıkla çizeriz.
                    </p>
                </div>
            </section>

            {/* The Triad */}
            <section className="py-24 bg-black relative border-t border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">Temel Felsefemiz: Kanıt Disiplini</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-white/10 bg-white/5 rounded-lg text-center relative">
                            <div className="text-5xl mb-6">💬</div>
                            <h3 className="text-xl font-bold mb-3">1. İddia (Claim)</h3>
                            <p className="text-gray-400">Size ne vadediyoruz?<br /><em className="text-xs text-gray-500">"Organik madde artışı hedeflenmektedir."</em></p>
                        </div>
                        <div className="p-8 border border-[var(--color-neon-blue)]/50 bg-[var(--color-neon-blue)]/5 rounded-lg text-center relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                            <div className="text-5xl mb-6">✅</div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--color-neon-blue)]">2. Kanıt (Evidence)</h3>
                            <p className="text-gray-300">Bunu neye dayanarak söylüyoruz?<br /><em className="text-xs text-gray-400">"Laboratuvar analizleri ve raporlar."</em></p>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/5 rounded-lg text-center relative">
                            <div className="text-5xl mb-6">🚧</div>
                            <h3 className="text-xl font-bold mb-3">3. Sınır (Boundary)</h3>
                            <p className="text-gray-400">Geçerlilik koşulları nelerdir?<br /><em className="text-xs text-gray-500">"Sonuçlar saha koşullarına bağlıdır."</em></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verification Layers */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Doğrulama Seviyeleri</h2>
                    <div className="space-y-6">
                        {[
                            { lvl: "Seviye 1", title: "İç Doğrulama", desc: "Kendi mühendislerimiz ve veri ekibimizce yapılan operasyonel doğrulama. İç raporlama ve verim takibi için.", color: "border-gray-700" },
                            { lvl: "Seviye 2", title: "Denetime Hazır (Audit-Ready)", desc: "Verilerin, 3. taraf denetimine hazır standartta, eksiksiz ve zincirleme (chain-of-custody) arşivlendiği seviye. Kurumsal raporlama için.", color: "border-[var(--color-neon-blue)]" },
                            { lvl: "Seviye 3", title: "Bağımsız Sertifikasyon", desc: "Uluslararası standartlara (Regenagri, Verra vb.) göre bağımsız denetçilerin sürece dahil edildiği seviye. Karbon kredisi ve premium etiketleme için.", color: "border-yellow-500" }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row p-6 border-l-4 ${item.color} bg-white/5 rounded-r-lg items-start md:items-center`}>
                                <div className="md:w-32 font-mono text-sm opacity-70 mb-2 md:mb-0 shrink-0">{item.lvl}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
