import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            <section className="relative py-24 px-4 container mx-auto text-center">
                <DataGrid className="z-10 opacity-30" />
                <div className="relative z-20">
                    <h1 className="text-5xl font-bold mb-6">Kaynak Merkezi</h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Onarıcı tarım, metodoloji ve saha öğrenimleri için bilgi üssü.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/blog" className="group p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)] bg-white/5 transition-all">
                            <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all">📝</div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-neon-blue)]">Blog</h2>
                            <p className="text-gray-400 text-sm">Güncel içgörüler ve sektör haberleri.</p>
                        </Link>

                        <Link href="/kaynaklar/vaka-analizleri" className="group p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)] bg-white/5 transition-all">
                            <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all">📊</div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-neon-blue)]">Vaka Analizleri</h2>
                            <p className="text-gray-400 text-sm">Sahadan gerçek sonuçlar ve öğrenimler.</p>
                        </Link>

                        <Link href="/kaynaklar/onarici-sozluk" className="group p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)] bg-white/5 transition-all">
                            <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all">📚</div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-neon-blue)]">Onarıcı Sözlük</h2>
                            <p className="text-gray-400 text-sm">Terminoloji rehberi ve tanımlar.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
