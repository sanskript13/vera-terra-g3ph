import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DataGrid } from "@/app/components/DataGrid";

export default function ContactPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-sans)] bg-black text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
            <Navbar />

            <div className="grid md:grid-cols-2 min-h-screen">
                {/* Left: Content & Contact Info */}
                <div className="relative p-12 md:p-24 flex flex-col justify-center border-r border-white/10">
                    <DataGrid className="opacity-20" />
                    <div className="relative z-10">
                        <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest uppercase mb-4 block">Bize Ulaşın</span>
                        <h1 className="text-5xl font-bold mb-6">Dönüşümü <br />Başlatalım.</h1>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            İster kurumsal tedarik zinciriniz için bir pilot proje planlayın, ister araziniz için onarıcı tarım danışmanlığı alın. Tanışalım.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white font-bold mb-2">Merkez Ofis</h3>
                                <p className="text-gray-400">Urla, İzmir, Türkiye<br /><span className="text-sm opacity-60">(Teknoloji ve tarımın buluşma noktası)</span></p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">E-posta</h3>
                                <p className="text-[var(--color-neon-blue)]">info@veraterra.com</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">Çalışma Saatleri</h3>
                                <p className="text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="p-12 md:p-24 flex flex-col justify-center bg-[#050505]">
                    <h2 className="text-2xl font-bold mb-8">Bize kendinizden bahsedin</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Ad Soyad</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors" placeholder="Adınız Soyadınız" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Kurum / Çiftlik Adı</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors" placeholder="Firma veya Çiftlik Adı" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">E-posta</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors" placeholder="ornek@sirket.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Telefon</label>
                                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors" placeholder="0555..." />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3">İlgi Alanınız</label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3 cursor-pointer p-3 border border-white/10 rounded hover:bg-white/5 transition-colors">
                                    <input type="radio" name="interest" className="text-[var(--color-neon-blue)] focus:ring-[var(--color-neon-blue)]" />
                                    <span className="text-sm text-gray-300"><strong>Kurumsal Program Tasarımı</strong> (Tedarik Zinciri, MRV)</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer p-3 border border-white/10 rounded hover:bg-white/5 transition-colors">
                                    <input type="radio" name="interest" className="text-[var(--color-neon-blue)] focus:ring-[var(--color-neon-blue)]" />
                                    <span className="text-sm text-gray-300"><strong>Üretici / Kooperatif</strong> (Danışmanlık)</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer p-3 border border-white/10 rounded hover:bg-white/5 transition-colors">
                                    <input type="radio" name="interest" className="text-[var(--color-neon-blue)] focus:ring-[var(--color-neon-blue)]" />
                                    <span className="text-sm text-gray-300"><strong>Diğer</strong> (Basın, Kariyer, Partnerlik)</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Mesajınız</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-[var(--color-neon-blue)] text-black font-bold rounded hover:bg-[#33FFFF] transition-all">
                            Mesajı Gönder
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}
