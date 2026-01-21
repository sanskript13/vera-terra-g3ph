import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Onarıcı Tarım Süreci ve MRV Metodolojisi | Vera Terra",
    description: "Vera Terra onarıcı tarımı sahaya nasıl indiriyor? Keşiften MRV'ye 5 adımda onarıcı tarım uygulama sürecimizi ve bilimsel metodolojimizi keşfedin."
};

export default function HowItWorksPage() {
    const steps = [
        {
            num: "01",
            title: "Keşif ve Arazi Analizi",
            subtitle: "Arazinin Potansiyelini Belirlemek",
            desc: "Her arazi biriciktir. Süreç, mevcut durumun röntgenini çekerek başlar.",
            details: [
                "Toprak dokusu (texture) ve mineral dengesi",
                "Drenaj kapasitesi ve su tutma analizi",
                "Mevcut ekim nöbeti ve girdi alışkanlıkları"
            ],
            icon: "🔍",
            color: "from-blue-500 to-cyan-500"
        },
        {
            num: "02",
            title: "Baseline (Sıfır Noktası) Ölçümü",
            subtitle: "Bilimsel Bir Referans Noktası",
            desc: "Ölçmediğimiz bir şeyi onaramayız. Değişimi kanıtlamak için bilimsel bir referans noktası kurarız.",
            details: [
                "Toprak Organik Maddesi (SOM) seviyesi",
                "Su sızma hızı (infiltrasyon) testleri",
                "Agregat stabilitesi ve karbon stok raporu"
            ],
            icon: "📍",
            color: "from-emerald-500 to-teal-500"
        },
        {
            num: "03",
            title: "Ürüne Özel Onarıcı Reçete",
            subtitle: "Program Tasarımı ve Strateji",
            desc: "\"Tek reçete\" yaklaşımını reddediyoruz. Pamukta su yönetimi, fıstıkta aflatoksin protokolü, tahılda no-till felsefesi farklıdır.",
            details: [
                "Fenolojik takvim ve kritik müdahale günleri",
                "Bölünmüş azot uygulaması ve 4R prensipleri",
                "Kapak bitkisi (cover crop) karışım tasarımı"
            ],
            icon: "📝",
            color: "from-amber-500 to-orange-500"
        },
        {
            num: "04",
            title: "Saha Koordinasyonu ve Eğitim",
            subtitle: "Operasyonel Disiplin ve Çiftçi Koçluğu",
            desc: "En iyi plan, sahada uygulanabildiği kadar değerlidir. Vera Terra agronomistleri, üreticinin yanında operasyonel disiplini kurar.",
            details: [
                "Periyodik saha ziyaretleri ve denetimler",
                "Teknik eğitim modülleri ve uygulama desteği",
                "İşlem kayıtları ve dijital veri toplama"
            ],
            icon: "👨‍🌾",
            color: "from-green-600 to-lime-500"
        },
        {
            num: "05",
            title: "MRV, Raporlama ve Doğrulama",
            subtitle: "Kanıta Dayalı Güven Zinciri",
            desc: "Toplanan verilerin güvenilir, izlenebilir ve denetlenebilir forma sokulması aşamasıdır.",
            details: [
                "Measurement (Ölçüm) protokolleri",
                "Reporting (Raporlama) standartları",
                "Verification (Doğrulama) ve sertifikasyon hazırlığı"
            ],
            icon: "📊",
            color: "from-purple-500 to-indigo-500"
        }
    ];

    const faqs = [
        {
            q: "Bu süreç çok mu maliyetli?",
            a: "İlk aşamadaki analizler bir yatırım olsa da, süreç ilerledikçe kimyasal girdi tasarrufu ve verim stabilitesi sayesinde maliyetler düşer. Sistem, uzun vadede ekonomik sürdürülebilirliği destekler."
        },
        {
            q: "Kendi ziraat mühendisimizle çalışabilir miyiz?",
            a: "Elbette. Biz bir \"rakip\" değil, mühendisinizin elini güçlendiren, ona veri ve yeni nesil metodolojiler sağlayan bir çözüm ortağıyız."
        }
    ];

    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[#fafafa] text-[#1a1a1a] selection:bg-[#5F6F52] selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                    <Image
                        src="/assets/nasil_calisir_hero.png"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-20 grayscale brightness-125 transition-transform duration-[10s] hover:scale-105"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-20">
                    <div className="max-w-3xl">
                        <span className="text-[#5F6F52] font-mono text-sm tracking-widest uppercase mb-4 block animate-fade-in">
                            Metodoloji & Uygulama
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter">
                            Masa Başı Değil, <span className="text-[#5F6F52]">Saha Odaklı</span> Bir Onarım Metodolojisi.
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                            Onarıcı tarımı genel geçer bir sürdürülebilirlik kavramından çıkarıp; ölçülebilir, izlenebilir ve uygulanabilir bir agronomik disipline dönüştürüyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* ROADMAP SECTION */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-4">Onarıcı Yol Haritamız</h2>
                        <p className="text-gray-500 max-w-2xl text-lg">
                            Toprağın rehabilitasyonu titizlikle yönetilmesi gereken bir yolculuktur. Bu yolculuğu 5 ana istasyonda kurguluyoruz.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Progress Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2"></div>

                        <div className="space-y-24">
                            {steps.map((step, idx) => (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 p-8 md:p-12 rounded-3xl border border-gray-100 bg-[#fcfcfc] shadow-sm hover:shadow-xl transition-all duration-500 group`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className={`text-4xl p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                                                {step.icon}
                                            </span>
                                            <div>
                                                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest leading-none">Adım {step.num}</span>
                                                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                            </div>
                                        </div>
                                        <p className="font-bold text-[#5F6F52] mb-4 text-sm uppercase tracking-wide">{step.subtitle}</p>
                                        <p className="text-gray-600 mb-8 leading-relaxed">
                                            {step.desc}
                                        </p>
                                        <ul className="space-y-4">
                                            {step.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-500">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Circle Connector (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-2 border-gray-100 items-center justify-center font-black text-xs text-gray-300 z-10">
                                        {step.num}
                                    </div>

                                    {/* Empty Space for layout */}
                                    <div className="hidden md:block w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY 5 STEPS? */}
            <section className="py-24 bg-[#5F6F52] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Neden 5 Adım?</h2>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Çünkü onarıcı tarım sadece "gübreyi azaltmak" değildir. Toprağın biyolojik gücünü geri kazanması için fiziksel, kimyasal ve yönetimsel verilerin uyum içinde çalışması gerekir.
                    </p>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Sık Sorulan Sorular</h2>
                    <div className="space-y-8">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 rounded-2xl bg-[#fcfcfc] hover:border-[#5F6F52]/30 transition-colors">
                                <h4 className="text-lg font-bold mb-4 text-gray-900">S: {faq.q}</h4>
                                <p className="text-gray-600 leading-relaxed">C: {faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA & DISCLAIMER */}
            <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <DataGrid />
                </div>
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">Sahada Birlikte <span className="text-[#93C572]">Dönüşelim.</span></h2>
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        <button className="px-10 py-5 bg-[#93C572] text-[#2B1D16] font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                            Süreç Detaylarını İndirin
                        </button>
                        <Link href="/iletisim" className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                            Bize Arazi Bilgisi Verin
                        </Link>
                    </div>
                    <div className="max-w-2xl mx-auto pt-10 border-t border-white/10">
                        <p className="text-[10px] uppercase tracking-widest text-white/30 italic leading-relaxed">
                            ⚠️ Kapsam Sınırı: Onarım hızı; başlangıçtaki toprak sağlığı skoruna, iklimsel değişkenlere ve uygulama disiplinine doğrudan bağlıdır.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
