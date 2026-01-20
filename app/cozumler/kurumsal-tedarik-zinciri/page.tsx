import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function CorporateSolutionsPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-0">
                    <div className="absolute inset-0 bg-[url('/assets/corporate/network.png')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-wider uppercase mb-4 block">Kurumsal Tedarik Zinciri Programları</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Tedarik Zincirinde Risk Yönetimi ve <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-white">Denetlenebilir Dönüşüm.</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        İklim riskleri ve regülasyon baskısı artarken; tedarik zinciriniz için ölçülebilir onarıcı tarım programları tasarlarız. Denetime hazır (audit-ready) kanıtlar sunarız.
                    </p>
                    <Link href="/iletisim" className="px-8 py-3 bg-[var(--color-neon-blue)] text-black font-bold rounded hover:bg-[#33FFFF] transition-all inline-block">
                        Kurumsal Çözüm Tasarımı İçin Görüşün
                    </Link>
                </div>
            </section>

            {/* Problem Definition */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white">Ürünü Almak Yetmiyor, <br />Hikayesini Kanıtlamak Gerekiyor.</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Sahada değişken hava koşulları ve artan girdi maliyetleri tedarik güvenliğini tehdit ederken; küresel pazarda izlenebilirlik ve şeffaflık beklentisi yükseliyor.
                        </p>
                        <p className="text-gray-400 leading-relaxed border-l-2 border-[var(--color-neon-blue)] pl-4">
                            Artık tedarik zincirinizde <strong>"Kapsam 3" (Scope 3)</strong> emisyonlarını yönetmek ve biyoçeşitlilik etkisini raporlamak bir tercih değil, ticari bir zorunluluk. Ancak binlerce çiftçiden veri toplamak ve doğrulamak büyük bir operasyonel yük.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
                            <span className="text-4xl mb-4">🔗</span>
                            <span className="font-semibold text-red-400">Tedarik Riski</span>
                        </div>
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
                            <span className="text-4xl mb-4">🔍</span>
                            <span className="font-semibold text-[var(--color-neon-blue)]">Regülasyon</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Deliverables */}
            <section className="py-20 bg-black relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)]/50 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Uçtan Uca Program Tasarımı</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "1. Kapsam ve Hedef", desc: "Kurumsal hedeflerinize uygun, saha gerçekleriyle örtüşen gerçekçi yol haritası ve KPI seti." },
                            { title: "2. Baseline Ölçümü", desc: "Mevcut durumun (toprak sağlığı, karbon, su) referans ölçümü ve 'sıfır noktası' belgelenmesi." },
                            { title: "3. Saha Koçluğu", desc: "Ziraat mühendislerimizle birebir eğitim ve 'sahada pratik' desteği. Pratik dönüşüm." },
                            { title: "4. MRV ve Raporlama", desc: "Sahadan gelen verinin uydu ve dijital kayıtlarla işlenerek denetime hazır raporlanması." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="text-[var(--color-neon-blue)] font-mono text-xl mb-4 group-hover:scale-110 transition-transform">{`0${idx + 1}`}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
