import Link from "next/link";
import Image from "next/image";

export default function HomeV2Page() {
    return (
        <div className="min-h-screen bg-[#FDFDFC] text-[#1F2937] font-sans selection:bg-[#5F6F52] selection:text-white">

            {/* NAVIGATION PREVIEW (Simplified for Lab) */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link href="/tasarim-lab" className="text-2xl font-bold tracking-tighter text-[#5F6F52]">
                        VERA TERRA <span className="text-xs font-normal text-gray-400 align-top">V2_BETA</span>
                    </Link>
                    <div className="flex gap-8 text-sm font-medium text-gray-600">
                        <Link href="#ne-yapiyoruz" className="hover:text-[#5F6F52] transition-colors">Ne Yapıyoruz</Link>
                        <Link href="#nasil-calisir" className="hover:text-[#5F6F52] transition-colors">Nasıl Çalışır</Link>
                        <Link href="#cozumler" className="hover:text-[#5F6F52] transition-colors">Çözümler</Link>
                        <Link href="#sss" className="hover:text-[#5F6F52] transition-colors">SSS</Link>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#5F6F52]/10 text-[#5F6F52] text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
                            Program Studio & MRV Excellence
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-[#2B1D16]">
                            Onarıcı Tarımı Sahada <span className="text-[#5F6F52]">Uygulanabilir</span> ve İzlenebilir Kılıyoruz
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                            Onarıcı tarım programlarını tasarlar, uygulanabilir hale getiririz. İlerlemeyi gelişmiş MRV (Ölçümleme–Raporlama–Doğrulama) disipliniyle izlenebilir hale getirmeyi hedefleriz; programları kağıt üzerinden araziye indiririz.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/iletisim" className="px-8 py-4 bg-[#5F6F52] text-white font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                İlk Görüşmeyi Planla
                            </Link>
                            <Link href="#nasil-calisir" className="px-8 py-4 border-2 border-[#5F6F52] text-[#5F6F52] font-bold rounded-lg hover:bg-[#5F6F52]/5 transition-all">
                                Nasıl Çalıştığımızı Gör
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#5F6F52]/20 to-transparent rounded-2xl blur-2xl group-hover:opacity-100 opacity-50 transition-opacity"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-100 shadow-2xl">
                            <Image
                                src="/assets/coiumler/home_v2_hero.png"
                                alt="Agronomy Layer Analysis"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* NE YAPIYORUZ - GRID SECTION */}
            <section id="ne-yapiyoruz" className="py-24 px-6 bg-[#F9F8F4]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold text-[#2B1D16] mb-4">Ne Yapıyoruz</h2>
                            <p className="text-lg text-gray-600 max-w-2xl">Onarıcı tarım yolculuğunuzda uçtan uca rehberlik sağlıyoruz.</p>
                        </div>
                        <div className="h-[1px] flex-1 bg-gray-200 hidden md:block mb-4"></div>
                        <div className="text-xs font-mono text-gray-400 mb-4 tracking-tighter">AGRONOMY_LAYER_ENHANCED_V2</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Task Cards */}
                        {[
                            { title: "Program Tasarımı", desc: "Bölgeye ve ürüne özel; toprak işleme (tillage) stratejisinden biyoçeşitlilik kurgusuna kadar gerçekçi yol haritaları oluşturuyoruz." },
                            { title: "Uygulama Koordinasyonu", desc: "Ziyaret ritmi ve kontrol listeleriyle; münavebe (rotasyon) takvimi ve sulama disiplinini arazide yönetiyoruz." },
                            { title: "Eğitim & Benimsetme", desc: "Ekiplerde uygulama sahipliğini artırmak için koçluk ve pratik eğitim modülleri yürütüyoruz." },
                            { title: "MRV & Raporlama", desc: "Baseline veri seti (SOM, infiltrasyon vb.) üzerinden ilerlemeyi takip ediyor, metodoloji notuyla kayıt altına alıyoruz." },
                            { title: "Uyum & Sertifikasyon Hazırlığı", desc: "Belgelendirme kuruluşu değiliz; ancak uyum/dokümantasyon hazırlığına destek oluruz." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-xs font-mono text-[#5F6F52] opacity-50 block mb-4">0{i + 1}_MODULE</span>
                                <h3 className="text-xl font-bold mb-4 text-[#2B1D16]">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEDEN BİZ - PHILOSOPHY */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold text-[#2B1D16] mb-8">Neden Biz</h2>
                        <div className="bg-[#5F6F52] w-12 h-1 mb-8"></div>
                        <p className="text-gray-600">Dört duvardan değil, sahadan gelen bir disiplin.</p>
                    </div>
                    {[
                        { title: "1. Saha Gerçekliği", body: "Masa başı teorilerle değil, çizmemizdeki çamurla konuşuyoruz. Rizosferdeki (kök bölgesi) yaşamdan, hasat sonrası lojistiğine kadar üreticinin dilinden anlıyoruz." },
                        { title: "2. MRV Disiplini", body: "“Yaptık oldu” değil, “ölçtük ve raporladık” diyoruz. Agregat stabilitesi gibi fiziksel ve SOM gibi kimyasal göstergelerle değişimi izliyoruz." },
                        { title: "3. İddia–Kanıt Tutarlılığı", body: "Sürdürülebilirlik iddialarınızı, araziden gelen veriye dayalı kanıtlarla desteklemeyi hedefleriz. İtibar riskini azaltmak için metodoloji notu ve QC süreçlerini işletiriz." }
                    ].map((item, i) => (
                        <div key={i} className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#2B1D16]">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* NASIL ÇALIŞIR - TIMELINE SECTION */}
            <section id="nasil-calisir" className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-20 text-[#2B1D16]">Nasıl Çalışır</h2>
                    <div className="space-y-16 relative before:absolute before:left-0 md:before:left-1/2 before:w-[2px] before:h-full before:bg-gray-100 before:-translate-x-1/2">
                        {[
                            { step: "Adım 1: Keşif", content: "Toprak dokusu, mevcut pratikler ve hedefleri analiz ediyoruz." },
                            { step: "Adım 2: Baseline", content: "Toprak Organik Karbonu (SOC), su alma hızı (infiltrasyon) ve biyoçeşitlilik için referans ölçümleri yapıyoruz." },
                            { step: "Adım 3: Program Kurgusu", content: "Örtü bitkisi, azaltılmış toprak işleme veya 4R besleme gibi sahaya uygun reçeteleri takvimlendiriyoruz." },
                            { step: "Adım 4: Uygulama ve Takip", content: "Sezon içi stres gözlemleri ve IPM (entegre zararlı yönetimi) takibiyle süreci yönetiyoruz." },
                            { step: "Adım 5: Raporlama", content: "QC süreçlerinden geçmiş verilerle, gelişimi rapor ritmine oturtuyoruz." }
                        ].map((item, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#5F6F52] -translate-x-1/2 z-10 flex items-center justify-center text-[10px] font-bold">
                                    {i + 1}
                                </div>
                                <div className="flex-1 md:w-1/2 pt-1 pl-8 md:pl-0">
                                    <div className={`p-8 bg-gray-50 rounded-2xl border border-gray-100 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold mb-3 text-[#2B1D16]">{item.step}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MRV & KANIT - QUOTE SECTION */}
            <section className="py-24 px-6 bg-[#2B1D16] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">MRV & Kanıt</h2>
                    <p className="text-2xl font-light italic leading-relaxed mb-12 opacity-90">
                        "Süreçleri şansa bırakmıyoruz. Kalite kontrol (QC) süreçlerimiz ve düzenli veri akışıyla; su tutma kapasitesinden (WHC) karbon stoklarına kadar değişimi kayıt altına alıyoruz."
                    </p>
                    <div className="inline-block p-6 bg-white/5 rounded-xl border border-white/10 text-xs text-orange-200 uppercase tracking-widest leading-relaxed">
                        ⚠️ Kapsam Sınırı: Sonuçlar; arazi koşulları (pH, tuzluluk), ürün deseni ve başlangıç ölçümüne göre farklılaşır.
                    </div>
                </div>
            </section>

            {/* ÇÖZÜMLER - CARDS */}
            <section id="cozumler" className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                        <div className="p-12 bg-[#F9F8F4] rounded-3xl h-full border border-gray-100 transition-all hover:bg-white hover:shadow-2xl">
                            <h3 className="text-3xl font-bold mb-6 text-[#2B1D16]">Üreticiler ve Kooperatifler için</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Toprağınızın su tutma kapasitesini ve verim potansiyelini korurken, onarıcı yöntemlerle değer yaratın. Teknik destek ve pazar erişimi konularında çözüm ortağınız oluyoruz.
                            </p>
                            <Link href="/cozumler" className="inline-flex items-center text-[#5F6F52] font-bold gap-2 group-hover:gap-4 transition-all">
                                İnceleyin <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="p-12 bg-white rounded-3xl h-full border border-gray-100 transition-all hover:shadow-2xl">
                            <h3 className="text-3xl font-bold mb-6 text-[#2B1D16]">Kurumsal ve Tedarik Zinciri için</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Tedarik zincirinizde sürdürülebilirlik hedeflerinizi, üretimden gelen izlenebilir veri iziyle yönetin. İddia–kanıt tutarlılığıyla kanıta dayalı hikayeler yaratmaya odaklanırız.
                            </p>
                            <Link href="/cozumler" className="inline-flex items-center text-[#5F6F52] font-bold gap-2 group-hover:gap-4 transition-all">
                                İnceleyin <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SSS SECTION */}
            <section id="sss" className="py-24 px-6 bg-[#F9F8F4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#2B1D16]">Sıkça Sorulan Sorular (SSS)</h2>
                    <div className="space-y-4">
                        {[
                            { q: "1. Verim artışını garanti ediyor musunuz?", a: "Hayır. Onarıcı tarım uzun vadeli bir iyileşme sürecidir. Agregat stabilitesi ve su tutma kapasitesini artırarak verim kaybı riskini yönetmeyi hedefleriz." },
                            { q: "2. Sertifika veriyor musunuz?", a: "Biz bir belgelendirme kuruluşu değiliz. Sertifikasyon süreçlerine hazırlık ve uyum kapsamında; gereksinim matrisi ve dokümantasyon listesiyle destek oluruz." },
                            { q: "3. Hangi ürünlerde çalışıyorsunuz?", a: "Antep fıstığı, pamuk, tahıllar ve bölgesel ürün desenlerine hakim uzmanlarımızla çalışıyoruz." },
                            { q: "4. MRV süreci nasıl işliyor?", a: "Başlangıçta bir baseline (referans) ölçümü yaparız. Sezon boyunca belirlenen örnekleme planına göre (yaprak analizi, infiltrasyon testi vb.) veri toplarız." },
                            { q: "5. Program ne kadar sürüyor?", a: "Projeler en az bir üretim sezonunu kapsar, ancak toprak yapısındaki kalıcı iyileşme için çok yıllık programlar öneriyoruz." },
                            { q: "6. Küçük ölçekli üreticiyle çalışıyor musunuz?", a: "Genellikle kooperatifler veya kurumsal projeler çatısı altında, toplu etki yaratabilecek modellerle ilerlemeyi tercih ediyoruz." }
                        ].map((item, i) => (
                            <details key={i} className="group bg-white p-6 rounded-xl border border-gray-100 cursor-pointer">
                                <summary className="list-none flex justify-between items-center text-lg font-bold text-[#2B1D16]">
                                    {item.q}
                                    <span className="text-2xl text-[#5F6F52] group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2B1D16] mb-8">Projeleriniz için sağlam, veriye dayalı bir temel atalım.</h2>
                    <Link href="/iletisim" className="inline-block px-12 py-5 bg-[#5F6F52] text-white font-bold rounded-lg text-lg hover:shadow-2xl transition-all mb-12">
                        Bize Ulaşın →
                    </Link>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                        ⚠️ Kapsam Sınırı: Sertifikasyon bir “garanti” değil; hazırlık ve uyum sürecidir. Başarı, üçüncü taraf denetimlerine tabidir.
                    </div>
                </div>
            </section>

            {/* FOOTER SNIPPET */}
            <footer className="py-12 bg-white border-t border-gray-100 text-center">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[#5F6F52] font-black tracking-tighter text-xl">VERA TERRA</div>
                    <div className="text-xs text-gray-400">© 2026 Vera Terra Program Studio. Tüm hakları saklıdır.</div>
                    <div className="flex gap-6 text-xs text-gray-500 font-medium tracking-widest">
                        <Link href="/">İPTAL</Link>
                        <Link href="/nasil-calisir">NASIL ÇALIŞIR</Link>
                        <Link href="/metodoloji">METODOLOJİ</Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}
