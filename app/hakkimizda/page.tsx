import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <DataGrid className="z-10 opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0f0f] to-[#1a1a1a] z-0">
                    {/* Split concept: Field vs Data */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2500')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <span className="text-gray-400 font-mono text-sm tracking-wider uppercase mb-4 block">Teknoloji ve Saha Deneyiminin Kesişimi</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Onarıcı Tarım İçin <br />
                        <span className="text-[var(--color-neon-blue)]">Sahici Bir Köprü Kuruyoruz.</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Tarımın geleceği sadece laboratuvarlarda veya tarlada yazılamaz. Biz, veri gücüyle sahanın tozunu birleştiren "uygulanabilir" dönüşüm programları tasarlıyoruz.
                    </p>
                    <Link href="/iletisim" className="px-8 py-3 bg-[var(--color-neon-blue)] text-black font-bold rounded hover:bg-[#33FFFF] transition-all inline-block">
                        Tanışalım
                    </Link>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Teori ile Pratik Arasındaki <br />Boşluğu Doldurmak</h2>
                        <div className="space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                Onarıcı tarım dünyada yükselirken, masa başı stratejilerinin tarlada çalışmadığını gördük. Karmaşık raporlar ve maliyet baskısı altındaki üretici arasında bir uçurum vardı.
                            </p>
                            <p>
                                Köklerimiz, Türkiye'nin lider <strong>tarım teknolojileri altyapısına</strong> ve global gıda devleriyle yürütülen <strong>on yıllık saha operasyon deneyimine</strong> dayanır. Arkamızdaki dijital ve operasyonel hafızayı şimdi sahaya indiriyoruz.
                            </p>
                            <p className="text-[var(--color-neon-blue)] font-medium italic">
                                (Biz denemiyoruz; ölçekli operasyonun nasıl yönetileceğini biliyoruz.)
                            </p>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000')] bg-cover bg-center opacity-60"></div>
                        {/* Tech overlay hints */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-black border-y border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">Değerlerimiz (Pusulamız)</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Saha Gerçekliği", desc: "Çizme giymeden program tasarlamayız. Üreticinin dilinden anlamayan çözüm kalıcı değildir." },
                            { title: "Kanıt Disiplini", desc: "Yeşil aklama yapmayız. Ölçemediğimiz, verisini toplayamadığımız hiçbir iddiayı dile getirmeyiz." },
                            { title: "Şeffaflık", desc: "Her şeyi bildiğimizi iddia etmeyiz. 'Kesin mucizeler' değil, riskleri birlikte yönettiğimiz şeffaf bir yol arkadaşlığı vaat ederiz." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)]/50 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem Approach */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8">Yaklaşımımız: Ekosistem Mantığı</h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        Vera Terra bir "çözüm orkestrası" gibi çalışır. Farklı disiplinler, tek hedef.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10">🌱 Ziraat Mühendisleri</div>
                        <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10">📊 Veri Analistleri</div>
                        <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10">🚀 Program Yöneticileri</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
