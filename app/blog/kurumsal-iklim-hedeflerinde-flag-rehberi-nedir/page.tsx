import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";

export default function BlogPostFlag() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            {/* Hero / Cover */}
            <section className="relative h-[60vh] flex items-end pb-12 overflow-hidden">
                <DataGrid className="z-10 opacity-30 fixed" />
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500')] bg-cover bg-center opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="text-gray-400 hover:text-white mb-6 inline-block font-mono text-sm">← Blog'a Dön</Link>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-[var(--color-neon-blue)] text-black px-3 py-1 text-xs font-bold rounded uppercase">Regülasyon ve Uyum</span>
                        <span className="text-gray-400 text-sm">20 Ocak 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Kurumsal İklim Hedeflerinde <br /> "FLAG" Rehberi Nedir?
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
                        Bilime Dayalı Hedefler Girişimi'nin (SBTi) tarım ve arazi kullanımı sektörü için getirdiği yeni standartlar, tedarik zinciri yöneticileri için ne anlama geliyor?
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-24 bg-[#0a0a0a] relative z-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-invert prose-lg mx-auto">
                        <p className="lead text-xl text-gray-300 mb-8">
                            Gıda, tekstil ve orman ürünleri sektöründe faaliyet gösteren şirketler için "net sıfır" hedefleri artık sadece enerji tüketimini azaltmakla sınırlı değil. SBTi (Science Based Targets initiative), yayınladığı <strong>FLAG (Forest, Land and Agriculture)</strong> rehberi ile oyunun kurallarını değiştirdi.
                        </p>

                        <h2 className="text-[var(--color-neon-blue)]">FLAG Nedir?</h2>
                        <p>
                            FLAG, şirketlerin arazi kullanımından kaynaklanan emisyonlarını (Kapsam 3 - Scope 3) ayrı bir kategori olarak raporlamasını ve azaltmasını zorunlu kılan dünyanın ilk standart çerçevesidir. Eğer şirketinizin toplam emisyonlarının %20'sinden fazlası tarım veya ormancılık kaynaklıysa, FLAG hedefleri belirlemeniz artık bir seçenek değil, zorunluluktur.
                        </p>

                        <h3>Neden Önemli?</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-[var(--color-neon-blue)]">
                            <li><strong>Ayrıştırma Zorunluluğu:</strong> Artık fosil yakıt emisyonları ile arazi kökenli emisyonları birbirine mahsup edemezsiniz. Traktörün yaktığı mazot (Enerji) ile topraktan salınan karbon (FLAG) ayrı yönetilmelidir.</li>
                            <li><strong>Karbon Gömme (Removals):</strong> FLAG, şirketlerin sadece emisyon azaltmasını değil, aynı zamanda toprağa karbon gömmek gibi "pozitif" eylemlerini de hedeflerine dahil etmesine izin verir. Bu, onarıcı tarımın en büyük fırsat alanıdır.</li>
                        </ul>

                        <hr className="border-white/10 my-12" />

                        <h2 className="text-[var(--color-neon-blue)]">Tedarik Zinciri Yöneticileri Ne Yapmalı?</h2>
                        <p>
                            FLAG hedeflerine ulaşmak, masa başında karbon kredisi satın alarak mümkün değildir. Doğrudan tedarik zincirinizin içine, yani tarlaya inmeniz gerekir.
                        </p>

                        <div className="bg-white/5 border-l-4 border-[var(--color-neon-blue)] p-6 my-8 rounded-r">
                            <h4 className="font-bold text-white mb-2">Vera Terra Yaklaşımı</h4>
                            <p className="m-0 text-sm">
                                Biz, FLAG uyumlu projeleri "Claim-Evidence-Boundary" prensibiyle tasarlarız. Sahada gerçekten karbonun toprağa gömüldüğünü (SOC artışı) MRV sistemleriyle kanıtlar ve denetime hazır veriler sunarız.
                            </p>
                        </div>

                        <h3>Adım Adım Yol Haritası</h3>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Envanter Analizi:</strong> Hangi ürünleriniz FLAG kapsamına giriyor?</li>
                            <li><strong>Baseline Belirleme:</strong> Tedarikçilerinizin mevcut karbon ayak izi ne? (Varsayımlarla değil, saha verisiyle).</li>
                            <li><strong>Müdahale Planı:</strong> Örtü bitkisi, azaltılmış toprak işleme gibi onarıcı pratiklerin uygulanması.</li>
                            <li><strong>İzleme ve Doğrulama:</strong> İlerlemenin raporlanması.</li>
                        </ol>
                    </div>

                    {/* Author / CTA */}
                    <div className="mt-16 p-8 border border-white/10 rounded-xl bg-white/5 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-[var(--color-neon-blue)] rounded-full flex items-center justify-center text-black font-bold text-2xl">V</div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white mb-1">Vera Terra Program Ekibi</h4>
                            <p className="text-sm text-gray-400">Teknik düzenlemeler ve saha pratikleri üzerine notlar.</p>
                        </div>
                        <Link href="/iletisim" className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-[var(--color-neon-blue)] transition-colors">
                            Danışın
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
