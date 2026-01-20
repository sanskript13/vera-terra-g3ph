import { DataGrid } from "./components/DataGrid";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-sans)] bg-[var(--color-soil-primary)] text-white selection:bg-[var(--color-neon-blue)] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Placeholder - Replace with Video/Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-soil-primary)] z-0">
          {/* Simulated content behind overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-58197ebd0031?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
        </div>

        <DataGrid className="z-10" />

        <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-20">
          <span className="inline-block py-1 px-3 rounded-full border border-[var(--color-neon-blue)]/30 bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] text-sm font-mono mb-6 backdrop-blur-sm">
            Onarıcı Tarım & Teknoloji Destekli Program Tasarımı
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-lg">
            Sahada Uygulanabilir Dönüşüm. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Masada Denetlenebilir Kanıt.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Üretici kooperatifleri ve kurumsal tedarik zincirleri için onarıcı tarım programları tasarlarız. Sahada koçlukla uygulatır, ilerlemeyi ölçüm ve veri iziyle görünür kılarız.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-[var(--color-neon-blue)] text-black font-bold rounded hover:bg-[#33FFFF] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              Kapsamı Netleştirelim
            </Link>
            <Link
              href="#metodoloji"
              className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded hover:bg-white/10 transition-all font-medium"
            >
              Nasıl Çalışır?
            </Link>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Teori ile Pratik Arasındaki Uçurum</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Onarıcı tarım dünyada hızla yükselirken, sahadaki üretici artan maliyetlerle, kurumsal alıcı ise karmaşık regülasyon baskısıyla (SBTi, Scope 3) boğuşuyor.
              <br /><br />
              Sadece "yapmak" yetmiyor; yaptığını uluslararası standartlarda <strong className="text-white">kanıtlamak</strong> gerekiyor.
              Vera Terra, işte bu "saha gerçeği" ile "kurumsal denetim" arasındaki köprüyü kurar.
            </p>
          </div>
        </div>
      </section>

      {/* Segmentation - Split Screen */}
      <section className="grid md:grid-cols-2 min-h-[600px]">
        {/* Producer Side */}
        <div className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-soil-secondary)]/90 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=1000')] bg-cover bg-center"></div>
          <div className="relative z-20 h-full flex flex-col justify-center p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Üretici ve Kooperatifler</h3>
            <h4 className="text-xl font-light text-orange-200 mb-6">Sahada Pratik Dönüşüm</h4>
            <p className="mb-8 text-gray-200 max-w-md">
              Karmaşık teoriler değil; bölgenize uygun, sahada uygulanabilir pratik setleri. Adım adım toprak sağlığı ve verim optimizasyonu.
            </p>
            <Link href="/cozumler/uretici-kooperatif" className="inline-flex items-center text-[var(--color-sunset-glow)] hover:text-white font-semibold transition-colors">
              Üretici Çözümleri <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Corporate Side */}
        <div className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
          <DataGrid className="opacity-20 z-15" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000')] bg-cover bg-center"></div>
          <div className="relative z-20 h-full flex flex-col justify-center p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Kurumsal Tedarik Zincirleri</h3>
            <h4 className="text-xl font-light text-cyan-200 mb-6">İzlenebilir ve Denetlenebilir Tedarik</h4>
            <p className="mb-8 text-gray-300 max-w-md">
              İklim risklerini yönetmek ve sürdürülebilirlik hedeflerine ulaşmak için uçtan uca program tasarımı. Denetime hazır (audit-ready) raporlama.
            </p>
            <Link href="/cozumler/kurumsal-tedarik-zinciri" className="inline-flex items-center text-[var(--color-neon-blue)] hover:text-white font-semibold transition-colors">
              Kurumsal Çözümler <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodoloji" className="py-24 bg-[#111]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">Nasıl Çalışır?</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-gray-700 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[var(--color-neon-blue)]/5">
                📏
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Baseline (Başlangıç)</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Nereden başladığımızı bilmeden ilerlemeyi yönetemeyiz. Toprak sağlığı ve karbon ayak izi analizi.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-gray-700 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[var(--color-sunset-glow)]/5">
                🌱
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Saha Uygulaması</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Reçete verip gitmeyiz. Ziraat mühendislerimizle sahada birebir koçluk ve uygulama takibi.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-gray-700 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[var(--color-neon-blue)]/20">
                📊
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. İzleme ve Doğrulama</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Sadece söz değil, kanıt. Uydu verisi ve saha kayıtlarıyla denetime hazır MRV dosyası.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vera Terra */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)]/30 transition-colors">
            <h4 className="text-xl font-bold text-white mb-4">Saha Gerçekliği</h4>
            <p className="text-gray-400 text-sm">Programlarımızı masa başında değil, çizme giyerek tasarlarız. Teori değil, pratik.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)]/30 transition-colors">
            <h4 className="text-xl font-bold text-white mb-4">Kanıt Disiplini</h4>
            <p className="text-gray-400 text-sm">Yeşil aklama riskini yönetiriz. Ölçülebilir, kanıtlanabilir sınırlar içinde konuşuruz.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-lg hover:border-[var(--color-neon-blue)]/30 transition-colors">
            <h4 className="text-xl font-bold text-white mb-4">Teknoloji Entegrasyonu</h4>
            <p className="text-gray-400 text-sm">Operasyonel yükü azaltan, veri odaklı program tasarımı ve raporlama altyapısı.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
