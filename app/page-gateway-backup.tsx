import { DataGrid } from "./components/DataGrid";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-neon-blue)] selection:text-black transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--background)] z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-58197ebd0031?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        </div>

        <DataGrid className="z-10" />

        <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl pt-20">
          <span className="inline-block py-1 px-3 rounded-full border border-[var(--color-neon-blue)]/30 bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] text-sm font-mono mb-6 backdrop-blur-sm">
            Vera Terra Gateway — v1
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-lg">
            Geleceğin Tarımı İçin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-orange)]">Dijital Geçit</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Onarıcı tarım ekosistemine giriş yapın. Üreticiler, kurumlar ve araştırmacılar için tasarlanmış kaynaklar, araçlar ve programlar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#programs"
              className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Programları Keşfet
            </Link>
            <Link
              href="/tasarim-lab"
              className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded hover:bg-white/10 transition-all font-medium"
            >
              Tasarım Laboratuvarı
            </Link>
          </div>
        </div>
      </section>

      {/* Sektörel Programlar */}
      <section id="programs" className="py-24 bg-[var(--foreground)]/5 relative border-y border-[var(--foreground)]/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">Sektörel Programlar</h2>
              <p className="opacity-60 mt-2">Endüstri odaklı özel çözümler.</p>
            </div>
            <Link href="/cozumler" className="text-[var(--color-neon-blue)] hover:underline hidden md:block">Tümünü Gör →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Antep Fıstığı */}
            <Link href="/cozumler/antep-fistigi" className="group block h-full">
              <div className="bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl overflow-hidden hover:border-[var(--color-neon-blue)] hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1625246333195-58197ebd0031?q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono text-[var(--color-neon-orange)] mb-2">Pistachio</span>
                  <h3 className="text-xl font-bold mb-4">Antep Fıstığı Programı</h3>
                  <p className="text-sm opacity-60 mb-6 flex-1">
                    Kuraklık stresi yönetimi, aflatoksin önleme ve karbon tutulumu odaklı rejeneratif dönüşüm.
                  </p>
                  <span className="text-[var(--color-foreground)] font-medium group-hover:translate-x-2 transition-transform inline-block">İncele →</span>
                </div>
              </div>
            </Link>

            {/* Pamuk (Placeholder) */}
            <div className="group block h-full opacity-60 hover:opacity-100 transition-opacity">
              <div className="bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono text-gray-500 mb-2">Cotton</span>
                  <h3 className="text-xl font-bold mb-4">Pamuk Programı</h3>
                  <p className="text-sm opacity-60 mb-6 flex-1">
                    Su verimliliği ve pestisit azaltımı odaklı sürdürülebilir pamuk üretimi.
                  </p>
                  <span className="text-xs border border-gray-600 rounded px-2 py-1 w-fit">Yakında</span>
                </div>
              </div>
            </div>

            {/* Hububat (Placeholder) */}
            <div className="group block h-full opacity-60 hover:opacity-100 transition-opacity">
              <div className="bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono text-gray-500 mb-2">Cereals</span>
                  <h3 className="text-xl font-bold mb-4">Hububat Programı</h3>
                  <p className="text-sm opacity-60 mb-6 flex-1">
                    Toprak sağlığını iyileştiren nöbetleşe ekim ve örtü bitkisi stratejileri.
                  </p>
                  <span className="text-xs border border-gray-600 rounded px-2 py-1 w-fit">Yakında</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çözümler Grid */}
      <section className="py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-12 text-center">Çözümler</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link href="/cozumler/uretici-kooperatif" className="group relative overflow-hidden rounded-2xl min-h-[300px] flex items-end p-8 border border-[var(--foreground)]/10 hover:border-[var(--color-sunset-glow)] transition-colors">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595837659550-99410940ccdc?q=80&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[var(--color-sunset-glow)] font-mono text-xs uppercase tracking-wider mb-2 block">Saha Odaklı</span>
                <h3 className="text-3xl font-bold mb-2">Üretici ve Kooperatifler</h3>
                <p className="opacity-80 max-w-md text-sm">Verim, dayanıklılık ve pazar erişimi için pratik çözümler.</p>
              </div>
            </Link>

            <Link href="/cozumler/kurumsal-tedarik-zinciri" className="group relative overflow-hidden rounded-2xl min-h-[300px] flex items-end p-8 border border-[var(--foreground)]/10 hover:border-[var(--color-neon-blue)] transition-colors">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[var(--color-neon-blue)] font-mono text-xs uppercase tracking-wider mb-2 block">Veri Odaklı</span>
                <h3 className="text-3xl font-bold mb-2">Kurumsal Tedarik Zincirleri</h3>
                <p className="opacity-80 max-w-md text-sm">Scope 3 hedefleri ve sürdürülebilirlik raporlaması için altyapı.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Yaklaşım ve Uzmanlık */}
      <section className="py-24 bg-[var(--foreground)]/5 border-t border-[var(--foreground)]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-12">Yaklaşım ve Uzmanlık</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/nasil-calisir" className="bg-[var(--background)] px-8 py-6 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/30 transition-all min-w-[200px] shadow-sm hover:shadow-md">
              <span className="text-4xl block mb-4">⚙️</span>
              <h3 className="font-bold mb-2">Nasıl Çalışır?</h3>
              <p className="text-xs opacity-60">5 Adımlı Metodoloji</p>
            </Link>
            <div className="bg-[var(--background)] px-8 py-6 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/30 transition-all min-w-[200px] opacity-70 cursor-not-allowed">
              <span className="text-4xl block mb-4">📏</span>
              <h3 className="font-bold mb-2">MRV Altyapısı</h3>
              <p className="text-xs opacity-60">Ölçüm ve Doğrulama</p>
            </div>
            <div className="bg-[var(--background)] px-8 py-6 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/30 transition-all min-w-[200px] opacity-70 cursor-not-allowed">
              <span className="text-4xl block mb-4">🏅</span>
              <h3 className="font-bold mb-2">Sertifikasyon</h3>
              <p className="text-xs opacity-60">Uyum Süreçleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bilgi Merkezi & Tasarım Lab */}
      <section className="py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Bilgi Merkezi */}
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">Bilgi Merkezi</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="flex items-center p-4 rounded-lg bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 transition-colors">
                  <span className="w-12 h-12 rounded-full bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)] flex items-center justify-center mr-4">📝</span>
                  <div>
                    <h4 className="font-bold">Blog</h4>
                    <p className="text-xs opacity-60">Güncel makaleler ve içgörüler</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/sss" className="flex items-center p-4 rounded-lg bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 transition-colors">
                  <span className="w-12 h-12 rounded-full bg-[var(--color-neon-orange)]/20 text-[var(--color-neon-orange)] flex items-center justify-center mr-4">❓</span>
                  <div>
                    <h4 className="font-bold">S.S.S.</h4>
                    <p className="text-xs opacity-60">Sıkça sorulan sorular</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Tasarım Lab */}
          <div className="relative rounded-2xl overflow-hidden bg-black text-white p-12 flex flex-col justify-center min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
            <DataGrid className="opacity-20 z-0" />
            <div className="relative z-10">
              <span className="text-xs font-mono text-[var(--color-neon-blue)] mb-4 block">EXPERIMENTAL</span>
              <h2 className="text-3xl font-bold mb-6">Tasarım Laboratuvarı</h2>
              <p className="opacity-70 mb-8 max-w-sm">
                Vera Terra&apos;nın dijital geleceğini şekillendirdiğimiz deney alanı. Yeni arayüzler, konseptler ve görsel deneyler.
              </p>
              <Link href="/tasarim-lab" className="inline-block px-6 py-3 border border-white/20 rounded hover:bg-white hover:text-black transition-colors font-medium">
                Laboratuvara Gir →
              </Link>
              <div className="mt-8 pt-8 border-t border-white/10 text-xs opacity-40 font-mono">
                <Link href="/tasarim-lab/v1-home" className="hover:text-white transition-colors">
                  Arşiv: Eski Ana Sayfa (v1) Görüntüle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
