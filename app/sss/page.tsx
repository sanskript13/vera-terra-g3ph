"use client";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";
import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
    const [activeTab, setActiveTab] = useState<'corporate' | 'producer' | 'tech'>('corporate');

    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative py-24 text-center overflow-hidden">
                <DataGrid className="z-10 opacity-20" />
                <div className="relative z-20 container mx-auto px-4 max-w-3xl">
                    <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-wider uppercase mb-4 block">Merak Ettikleriniz</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Aklınızdaki Sorulara <br />Şeffaf Cevaplar.</h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Program süreçleri, maliyet yapısı, teknik altyapı ve veri güvenliği hakkında en sık karşılaştığımız sorular.
                    </p>
                </div>
                {/* Background Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/5 select-none pointer-events-none z-0">?</div>
            </section>

            {/* Tabs */}
            <section className="pb-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-white/10 pb-4">
                        <button
                            onClick={() => setActiveTab('corporate')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${activeTab === 'corporate' ? 'bg-[var(--color-neon-blue)] text-black font-bold' : 'bg-white/5 hover:bg-white/10 text-gray-400'}`}
                        >
                            <span>🏢</span>
                            <span>Kurumsal ve Tedarik Zinciri</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('producer')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${activeTab === 'producer' ? 'bg-[var(--color-sunset-glow)] text-black font-bold' : 'bg-white/5 hover:bg-white/10 text-gray-400'}`}
                        >
                            <span>🚜</span>
                            <span>Üretici ve Kooperatif</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('tech')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${activeTab === 'tech' ? 'bg-purple-500 text-black font-bold' : 'bg-white/5 hover:bg-white/10 text-gray-400'}`}
                        >
                            <span>📊</span>
                            <span>Teknik ve MRV</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">

                        {/* Corporate Tab */}
                        {activeTab === 'corporate' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Onarıcı tarım programının yatırım getirisi (ROI) ne zaman görülür?</h3>
                                    <p className="text-gray-400 leading-relaxed mb-3">Programın tasarımına göre değişir. Genellikle ilk sezonda veri görünürlüğü sağlanır; toprak sağlığı ve girdi optimizasyonuna bağlı finansal etkiler ise 2. veya 3. sezondan itibaren belirginleşir.</p>
                                    <div className="text-xs text-gray-500 italic border-l-2 border-gray-700 pl-2">Boundary: İklim koşulları ve piyasa fiyatları ROI süresini etkileyebilir.</div>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Mevcut sertifikasyonlarımıza (GlobalGAP vb.) entegre olabilir misiniz?</h3>
                                    <p className="text-gray-400 leading-relaxed">Evet. Vera Terra, ayrı bir bürokrasi yaratmak yerine mevcut denetim süreçlerinizi güçlendirmeyi hedefler. Topladığımız veriler, birçok uluslararası standardın talep ettiği kanıt setlerini oluşturur.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">"Greenwashing" riskini nasıl yönetiyorsunuz?</h3>
                                    <p className="text-gray-400 leading-relaxed">"Claim-Evidence-Boundary" prensibimizle. Ölçemediğimiz hiçbir veriyi raporlamayız. İddialarımızı, saha kayıtları ve laboratuvar analizleri gibi somut kanıtlarla destekleriz.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Veri güvenliği politikanız nedir?</h3>
                                    <p className="text-gray-400 leading-relaxed">Tedarikçilerinizden toplanan veriler, KVKK ve ticari sır prensiplerine göre saklanır. Veriler, anonimleştirilerek toplu analizlerde kullanılır; üreticinin açık rızası olmadan 3. taraflarla paylaşılmaz.</p>
                                </div>
                            </div>
                        )}

                        {/* Producer Tab */}
                        {activeTab === 'producer' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Onarıcı tarıma geçince verimim düşer mi?</h3>
                                    <p className="text-gray-400 leading-relaxed mb-3">Ana hedefimiz, verimi koruyarak toprağı iyileştirmektir. Ani ve radikal değişiklikler yerine, "kademeli geçiş" planlarız.</p>
                                    <div className="text-xs text-gray-500 italic border-l-2 border-[var(--color-sunset-glow)] pl-2">Boundary: Ekstrem hava olayları (dolu, don, kuraklık) her tarım modelinde olduğu gibi risktir.</div>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Yeni makine veya ekipman almam gerekir mi?</h3>
                                    <p className="text-gray-400 leading-relaxed">Çoğu durumda, mevcut traktör ve ekipmanlarınız yeterlidir. Özel makine (Doğrudan ekim vb.) gerekirse, bölgedeki imkanlara veya kooperatiflere yönlendirme yaparız.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Karbon kredisi satarak para kazanabilir miyim?</h3>
                                    <p className="text-gray-400 leading-relaxed">Biz tarlanızı bu potansiyele hazırlar ve veriyi doğrulanabilir hale getiririz. Ancak karbon kredisi satışı piyasa koşullarına bağlıdır, kesin gelir garantisi verilmez.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Ziyaret sıklığınız nedir?</h3>
                                    <p className="text-gray-400 leading-relaxed">Ürünün kritik gelişim dönemlerine (ekim, çimlenme, hasat vb.) göre sezonluk bir takvim oluştururuz.</p>
                                </div>
                            </div>
                        )}

                        {/* Tech Tab */}
                        {activeTab === 'tech' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">MRV nedir, neden gereklidir?</h3>
                                    <p className="text-gray-400 leading-relaxed">Ölçüm, Raporlama ve Doğrulama (Measurement, Reporting, Verification) sistemidir. İyi uygulamaların sadece sözde kalmamasını, veriye dökülerek kanıtlanmasını sağlar.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">Toprak analizi yapıyor musunuz?</h3>
                                    <p className="text-gray-400 leading-relaxed">Numuneleri usulüne uygun olarak sahadan alırız; analizler akredite laboratuvar partnerlerimizce yapılır. Sonuçları "besleme planı" olarak yorumlarız.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-16 text-center border-t border-white/10 pt-8">
                        <p className="text-gray-400 mb-4">Sorunuzun cevabını bulamadınız mı?</p>
                        <Link href="/iletisim" className="text-[var(--color-neon-blue)] hover:underline font-bold">Bize yazın →</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
