import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function DictionaryPage() {
    const terms = [
        { term: "Onarıcı Tarım (Regenerative Agg)", def: "Toprak sağlığını iyileştirmeyi, biyoçeşitliliği artırmayı ve karbonu toprağa gömmeyi hedefleyen tarım yaklaşımı." },
        { term: "MRV (Measurement, Reporting, Verification)", def: "İklim projelerinde etkinin (karbon azaltımı vb.) ölçülmesi, raporlanması ve üçüncü taraflarca doğrulanması süreci." },
        { term: "Kapsam 3 (Scope 3)", def: "Bir şirketin tedarik zincirinden kaynaklanan dolaylı emisyonlar. Gıda firmaları için tarımsal üretim genellikle bu kapsamdadır." },
        { term: "Örtü Bitkisi (Cover Crop)", def: "Toprağı erozyondan korumak ve beslemek amacıyla ana ürün aralarında ekilen bitkiler." },
        { term: "No-Till (Doğrudan Ekim)", def: "Toprağı sürmeden, tohumu doğrudan anıza veya toprağa yerleştirme yöntemi. Toprak yapısını korur." }
    ];

    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            <section className="py-24 container mx-auto px-4 max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Onarıcı Sözlük</h1>
                    <p className="text-gray-400">Sektör terminolojisi ve "Vera Terra" tanımları.</p>
                </div>

                <div className="space-y-6">
                    {terms.map((item, idx) => (
                        <div key={idx} className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold text-[var(--color-neon-blue)] mb-2">{item.term}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.def}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/kaynaklar" className="text-gray-500 hover:text-white">← Kaynaklar'a Dön</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
