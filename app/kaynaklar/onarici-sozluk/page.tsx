import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function DictionaryPage() {
    const terms = [
        {
            term: "Onarıcı Tarım (Regenerative Agriculture)",
            def: "Toprak sağlığını iyileştirmeyi, biyoçeşitliliği artırmayı ve karbonu toprağa gömmeyi hedefleyen, sürdürülebilirliğin ötesine geçen tarım yaklaşımı."
        },
        {
            term: "MRV (Measurement, Reporting, Verification)",
            def: "Ölçüm, Raporlama ve Doğrulama. İklim projelerinde etkinin (karbon azaltımı vb.) bilimsel verilerle kanıtlanması ve üçüncü taraflarca denetlenmesi süreci."
        },
        {
            term: "Kapsam 3 (Scope 3)",
            def: "Bir şirketin kendi operasyonları dışında, tedarik zincirinden kaynaklanan dolaylı emisyonlar. Gıda firmaları için tarımsal üretim genellikle en büyük Kapsam 3 kalemidir."
        },
        {
            term: "Baseline (Başlangıç Ölçümü)",
            def: "Bir projenin etkisini ölçebilmek için, proje başlamadan önceki mevcut durumun (toprak karbonu, su riski vb.) referans ölçümüdür."
        },
        {
            term: "Saha Koçluğu",
            def: "Masa başı danışmanlığından farklı olarak; ekimden hasada kadar tarlada fiilen bulunan, üretici ile birlikte karar alan ve uygulayan ziraat mühendisliği hizmeti."
        },
        {
            term: "Denetime Hazır (Audit-Ready)",
            def: "Toplanan tüm saha verilerinin, herhangi bir zamanda iç veya dış denetçiler tarafından incelenebilecek standartta, eksiksiz ve izlenebilir şekilde arşivlenmesi."
        },
        {
            term: "Örtü Bitkisi (Cover Crop)",
            def: "Toprağı erozyondan korumak, nemi tutmak ve organik maddeyi artırmak amacıyla ana ürün aralarında (veya kışın) ekilen bitkiler (Fiğ, Yulaf vb.)."
        },
        {
            term: "No-Till (Doğrudan Ekim)",
            def: "Toprağı sürmeden, pulluk kullanmadan, tohumu doğrudan anıza veya toprağa yerleştirme yöntemi. Toprak yapısını ve mikrobiyal yaşamı korur."
        },
        {
            term: "Yeşil Aklama (Greenwashing)",
            def: "Bir kurumun çevreye duyarlıymış gibi görünüp, aslında somut bir fayda yaratmayan veya verisi kanıtlanamayan faaliyetlerde bulunması. Vera Terra'nın 'Kanıt Disiplini' bunun panzehiridir."
        }
    ];

    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            <section className="py-24 container mx-auto px-4 max-w-4xl min-h-[60vh]">
                <DataGrid className="fixed inset-0 pointer-events-none opacity-5 z-0" />
                <div className="relative z-10 mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Onarıcı Sözlük</h1>
                    <p className="text-gray-400">Sektör terminolojisi ve Vera Terra literatürü.</p>
                </div>

                <div className="relative z-10 grid gap-6">
                    {terms.map((item, idx) => (
                        <div key={idx} className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group bg-[#050505]">
                            <h3 className="text-xl font-bold text-[var(--color-neon-blue)] mb-3 group-hover:translate-x-1 transition-transform">{item.term}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.def}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center relative z-10">
                    <Link href="/kaynaklar" className="text-gray-500 hover:text-white transition-colors">← Kaynaklar'a Dön</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
