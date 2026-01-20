import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function ProducerSolutionsPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--color-soil-primary)] text-white selection:bg-[var(--color-sunset-glow)] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-soil-primary)] z-0">
                    {/* Sunrise/Sunset Field Image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2500')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <span className="text-[var(--color-sunset-glow)] font-bold tracking-wider uppercase mb-4 block">Üreticiler ve Kooperatifler İçin</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                        Toprağı Onaran, Maliyeti Yöneten <br />
                        <span className="text-[var(--color-sunset-glow)]">Pratik Tarım.</span>
                    </h1>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-medium drop-shadow">
                        Karmaşık teoriler değil; bölgenize ve bütçenize uygun pratik setleri. Hedefimiz: Toprak sağlığı, azalan girdi baskısı ve sürdürülebilir hasat.
                    </p>
                    <Link href="/iletisim" className="px-8 py-3 bg-[var(--color-sunset-glow)] text-black font-bold rounded hover:bg-orange-300 transition-all inline-block shadow-lg">
                        Bölgeniz İçin Bilgi Alın
                    </Link>
                </div>
            </section>

            {/* Problem Definition */}
            <section className="py-20 bg-[#5D2E0C]"> {/* Darker soil color */}
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    <div className="order-2 md:order-1 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        {/* Split image concept: Cost vs Tired Soil */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?q=80&w=1000')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Toprak Yorgun...</div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-white">Alışkanlıkları Değiştirmek Riskli mi? <br />Yoksa Değişmemek mi?</h2>
                        <p className="text-orange-50 mb-6 leading-relaxed">
                            Değişen iklim koşulları ve artan gübre/ilaç maliyetleri çiftçiliği zorlaştırıyor. "Daha çok gübre = daha çok verim" denklemi artık çalışmıyor.
                        </p>
                        <p className="text-white text-lg font-semibold border-l-4 border-[var(--color-sunset-glow)] pl-4">
                            Vera Terra olarak yaklaşımımız basit: Size "dışarıdan akıl vermek" değil, tarlanızda sizinle birlikte yürüyerek riski yönetmek.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-[var(--color-soil-primary)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Nasıl Çalışır?</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: "🤝", title: "1. Tanışma ve Analiz", desc: "Sahayı gezer, mevcut sorunlarınızı dinler, toprak analizi/numune alımını organize ederiz." },
                            { icon: "📝", title: "2. Pratik Planı", desc: "Size karmaşık raporlar değil, net bir 'yapılacaklar listesi' veririz." },
                            { icon: "🚜", title: "3. Saha Koçluğu", desc: "Ekim, gelişim ve hasat dönemlerinde tarlanıza gelir, 'nasıl yapacağım' sorusunu yanıtlarız." },
                            { icon: "🌾", title: "4. Kayıt ve Değer", desc: "Yapılanları kayıt altına alarak, ürününüzü satarken elinizi güçlendiren hikayeyi oluştururuz." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm shadow-md">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-[var(--color-sunset-glow)]">{item.title}</h3>
                                <p className="text-gray-100 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cooperatives Special Section */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Kooperatifler İçin Özel Kurgu</h2>
                    <p className="max-w-2xl mx-auto mb-12 text-gray-200">
                        Bireysel üreticilerin yanı sıra, kooperatifler ve birlikler için "Toplu Dönüşüm Programları" tasarlıyoruz. Eğitici eğitimi, demo sahalar ve toplu veri yönetimi.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/iletisim" className="border-2 border-[var(--color-sunset-glow)] text-[var(--color-sunset-glow)] px-8 py-3 rounded font-bold hover:bg-[var(--color-sunset-glow)] hover:text-black transition-colors">
                            Kooperatif Çözümlerini Konuşalım
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
