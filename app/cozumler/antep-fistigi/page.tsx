import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata = {
    title: "Antep Fıstığı Onarıcı Tarım ve Aflatoksin Yönetimi | Vera Terra",
    description: "Antep fıstığında 'yok yılı' kader değil. Vera Terra ile verim kaybı riskini yönetin, aflatoksin limitlerini bilimsel yöntemlerle kontrol altına alın."
};

export default function AntepFistigiPage() {
    return (
        <div className="min-h-screen bg-[#FDF6E3] text-[#2B1D16] selection:bg-[#93C572] selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#D95D5D]/10 text-[#D95D5D] text-xs font-bold tracking-widest uppercase mb-6">
                            Ürüne Özel Çözümler: Antep Fıstığı
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-[#2B1D16]">
                            Antep Fıstığında <span className="text-[#D95D5D]">"Yok Yılı"</span> Kader Değil, Yönetilebilir Bir Süreçtir.
                        </h1>
                        <p className="text-lg text-[#2B1D16]/80 leading-relaxed mb-10 max-w-xl">
                            Atadan kalma bahçelerinizi, bilimsel toprak onarımı ve hassas zararlı yönetimi ile geleceğe taşıyoruz. Mevsimsel dalgalanmaları ve verim kaybı riskini yönetmeyi hedefleriz.
                        </p>

                        <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[#D95D5D]/20 mb-8 max-w-lg">
                            <p className="text-[10px] text-[#D95D5D] font-bold uppercase tracking-widest leading-relaxed">
                                ⚠️ Kapsam Sınırı: Sonuçlar iklim koşullarına, başlangıç ölçümüne ve uygulama disiplinine bağlıdır.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/iletisim" className="px-8 py-4 bg-[#5F6F52] text-white font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                Bahçeniz İçin Keşif İsteyin
                            </Link>
                            <Link href="#" className="px-8 py-4 border-2 border-[#5F6F52] text-[#5F6F52] font-bold rounded-lg hover:bg-[#5F6F52]/5 transition-all text-center">
                                Örnek Aflatoksin Raporunu İnceleyin
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#93C572]/20 to-transparent rounded-2xl blur-2xl opacity-50 transition-opacity"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white shadow-2xl">
                            <Image
                                src="/assets/coiumler/antep_fistigi_hero.png"
                                alt="Dalında Antep Fıstığı - Onarıcı Tarım Uygulaması"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* KRİTİK TEHDİTLER - PROBLEM SECTION */}
            <section className="py-24 px-6 bg-[#2B1D16] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D95D5D]/5 skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold mb-12">Kritik Tehditler</h2>
                        <p className="text-xl opacity-80 mb-16 leading-relaxed">
                            Fıstık üreticisinin uykusunu kaçıran iki büyük gerçek:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-10 border border-white/10 bg-white/5 rounded-3xl hover:border-[#D95D5D]/50 transition-all group">
                            <div className="text-4xl mb-6">☣️</div>
                            <h3 className="text-2xl font-bold mb-4 text-[#D95D5D]">1. Aflatoksin Riski</h3>
                            <p className="opacity-70 leading-relaxed">
                                İhracat kapılarının yüzünüze kapanma sebebi olan gıda güvenliği tehdidi. Mantar kaynaklı bu risk, sadece bir gıda güvenliği konusu değil, aynı zamanda ekonomik bir yıkımdır.
                            </p>
                        </div>
                        <div className="p-10 border border-white/10 bg-white/5 rounded-3xl hover:border-[#93C572]/50 transition-all group">
                            <div className="text-4xl mb-6">🍂</div>
                            <h3 className="text-2xl font-bold mb-4 text-[#93C572]">2. Karazenk (Septoria)</h3>
                            <p className="opacity-70 leading-relaxed">
                                Yaprağın erken dökülmesi ve ağacın "küsemesi" sonucu verim kaybı. Ağaç gücünü kaybeder, gelecek yılı koruyamaz.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 p-8 border-l-4 border-[#93C572] bg-[#93C572]/10 rounded-r-xl">
                        <p className="text-2xl font-medium italic opacity-90">
                            "Biz 'daha fazla ilaç atın' demiyoruz. Biz, ağacın bağışıklığını güçlendiriyoruz."
                        </p>
                    </div>
                </div>
            </section>

            {/* ÇÖZÜMLERİMİZ - REGENERATIVE APPROACH */}
            <section className="py-24 px-6 bg-[#FDF6E3]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-[#2B1D16] mb-4">Onarıcı Yaklaşımımız</h2>
                        <div className="w-24 h-1 bg-[#93C572] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Solution Cards */}
                        {[
                            { title: "Zararlıyı 'İzle', Hemen Vurma", desc: "Psillid veya diğer zararlılarda ekonomik zarar eşiğini bekleriz. Gerekirse kimyasal zehir yerine, ağacın üzerinde fiziksel bir kalkan oluşturan Kaolin Kili uygulamalarıyla güneş yanığını ve böcek baskısını azaltırız.", icon: "👁️" },
                            { title: "Toprağı Kışın da Besle", desc: "Ağaçlarınız kış uykusuna yattığında, biz toprağı beslemeye devam ederiz. Sıra aralarında fiğ ve yulaf karışımı örtü bitkileri ile toprağı erozyondan korur, baharda bunları yeşil gübre olarak toprağa geri veririz.", icon: "🌱" },
                            { title: "Eksik Elementleri Tamamla (Zn & B)", desc: "Fıstığın kalbi Çinko (Zn) ve Bor (B) elementleridir. Yaprak analizleri ile miligram hassasiyetinde eksikleri belirler, ağacın 'kan değerlerini' düzeltiriz.", icon: "🔬" },
                            { title: "Aflatoksin Yönetimi", desc: "Gıda güvenliği için en büyük risk olan toksin oluşumunu, erken hasat planlaması ve doğru kurutma teknikleri ile yönetiriz. Hasadın toprağa değmeden yapılması kırmızı çizgimizdir.", icon: "🛡️" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 bg-white/50 rounded-2xl border border-white transition-all hover:bg-white hover:shadow-xl group">
                                <div className="text-3xl p-4 bg-[#FDF6E3] rounded-xl h-fit group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-[#2B1D16]">{item.title}</h3>
                                    <p className="text-sm text-[#2B1D16]/70 leading-relaxed font-normal">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NASIL ÇALIŞIR - TIMELINE SECTION */}
            <section className="py-24 px-6 bg-white border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-20 text-[#2B1D16]">Yıllık Uygulama Takvimi</h2>
                    <div className="space-y-12">
                        {[
                            { season: "Kış", content: "Kış budaması, Bordo bulamacı ve kışlık örtü bitkisi ekimi.", color: "bg-blue-50 text-blue-700" },
                            { season: "Bahar", content: "Uyanışla birlikte Psillid takibi ve azot/bor yönetimi.", color: "bg-green-50 text-green-700" },
                            { season: "Yaz", content: "Kontrollü sulama, Karazenk kontrolü ve iç doldurma takibi.", color: "bg-amber-50 text-amber-700" },
                            { season: "Sonbahar", content: "Aflatoksin riskine karşı zamanında ve doğru hasat yönetimi.", color: "bg-orange-50 text-orange-700" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm tracking-widest uppercase transition-all group-hover:scale-110 ${item.color}`}>
                                        {item.season}
                                    </div>
                                    {i < 3 && <div className="w-[2px] h-full bg-gray-100 my-2"></div>}
                                </div>
                                <div className="flex-1 pt-3">
                                    <div className="p-6 bg-[#FDF6E3]/30 rounded-2xl border border-gray-100 group-hover:border-[#93C572]/30 transition-colors">
                                        <p className="text-lg text-[#2B1D16]/80 leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIK SORULAN SORULAR */}
            <section className="py-24 px-6 bg-[#FDF6E3]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#2B1D16]">Sıkça Sorulan Sorular</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-white shadow-sm">
                            <h4 className="text-lg font-bold mb-4 text-[#2B1D16]">Periyodisite (var yılı / yok yılı) tamamen biter mi?</h4>
                            <p className="text-[#2B1D16]/70 leading-relaxed">Fıstık ağacının genetiğinde olan bu durumu tamamen sıfırlamak zordur. Ancak doğru bakım ve budama ile "yok yılı"ndaki verim kaybını ciddi oranda azaltmayı ve makası daraltmayı hedefleriz.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-white shadow-sm">
                            <h4 className="text-lg font-bold mb-4 text-[#2B1D16]">Aflatoksin garantisi veriyor musunuz?</h4>
                            <p className="text-[#2B1D16]/70 leading-relaxed">Aflatoksin doğada bulunan bir mantar türüdür ve sıfırlanamaz. Ancak geliştirdiğimiz yönetim protokolleri ile yasal limitlerin (AB standartları) altına indirmeyi yönetiriz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 px-6 text-center bg-[#2B1D16] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#93C572_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12">Antep Fıstığı Bahçeniz İçin <span className="text-[#93C572]">Bilimsel Bir Temel</span> Atalım.</h2>
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        <Link href="/iletisim" className="px-12 py-5 bg-[#93C572] text-[#2B1D16] font-bold rounded-lg text-lg hover:shadow-[0_0_30px_rgba(147,197,114,0.4)] hover:-translate-y-1 transition-all">
                            Ücretsiz Saha Keşfi İsteyin
                        </Link>
                        <Link href="/cozumler" className="px-12 py-5 border-2 border-white/20 text-white font-bold rounded-lg text-lg hover:bg-white/5 transition-all">
                            Tüm Çözümleri İnceleyin
                        </Link>
                    </div>
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed border-t border-white/10 pt-8 italic">
                        ⚠️ Kapsam Sınırı: Sertifikasyon bir “garanti” değil; hazırlık ve uyum sürecidir. Başarı, üçüncü taraf denetimlerine tabidir.
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

