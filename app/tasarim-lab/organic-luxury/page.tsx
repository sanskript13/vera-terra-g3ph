import Link from "next/link";
import Image from "next/image";

export default function OrganicLuxuryPage() {
    return (
        <div className="min-h-screen font-sans selection:bg-[#6B705C] selection:text-[#F9F8F4]" style={{ backgroundColor: "#F9F8F4", color: "#2C2C2C" }}>

            {/* Custom Navbar for this Design */}
            <nav className="fixed w-full z-50 top-0 start-0 p-8 flex justify-between items-center mix-blend-difference text-[#F9F8F4]">
                <div className="text-2xl font-serif tracking-tight">VeraTerra<span className="text-[#A5A58D]">.</span></div>
                <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-light">
                    <span className="cursor-pointer hover:underline underline-offset-4 decoration-[#A5A58D]">Manifesto</span>
                    <span className="cursor-pointer hover:underline underline-offset-4 decoration-[#A5A58D]">Journal</span>
                    <span className="cursor-pointer hover:underline underline-offset-4 decoration-[#A5A58D]">Contact</span>
                </div>
                <Link href="/tasarim-lab" className="text-xs border border-[#F9F8F4]/30 px-4 py-2 rounded-full hover:bg-[#F9F8F4] hover:text-[#2C2C2C] transition-all">
                    Exit Design
                </Link>
            </nav>

            {/* HERO SECTION */}
            <header className="relative h-screen flex flex-col justify-center px-8 md:px-24 pt-20 overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[#E8E6df] z-0 hidden md:block"></div>
                {/* Asymmetric Image */}
                <div className="absolute md:right-[15%] md:top-[20%] w-full md:w-[40vw] h-[60vh] z-10 overflow-hidden shadow-2xl sepia-[.2] contrast-[.9]">
                    {/* Using existing asset as placeholder but styled differently */}
                    <div className="absolute inset-0 bg-[url('/assets/coiumler/organic_luxury_hero_v2.png')] bg-cover bg-center scale-110 opacity-90"></div>
                </div>

                <div className="relative z-20 max-w-2xl mt-48 md:mt-0">
                    <span className="text-[#6B705C] text-xs font-sans tracking-[0.3em] mb-6 block uppercase border-l-2 border-[#6B705C] pl-4">
                        Regenerative Consultancy
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.9] mb-8 text-[#2C2C2C]">
                        The Wisdom <br /> <i className="font-serif text-[#6B705C]">of Soil.</i>
                    </h1>
                    <p className="text-lg md:text-xl font-sans font-light text-[#2C2C2C]/70 max-w-md leading-relaxed mb-12">
                        Toprak sadece bir kaynak değil, sessiz bir ortaktır. Biz bu ortaklığın dilini tercüme ediyoruz.
                    </p>
                    <button className="group flex items-center gap-4 text-sm uppercase tracking-widest hover:gap-6 transition-all duration-500">
                        <span className="w-12 h-[1px] bg-[#2C2C2C] group-hover:w-20 transition-all duration-500"></span>
                        Discover Our Approach
                    </button>
                </div>
            </header>

            {/* EDITORIAL CONTENT SECTION */}
            <section className="py-32 px-8 md:px-24 grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4">
                    <h2 className="text-4xl font-serif mb-8 text-[#2C2C2C]">
                        Silent <br /> Luxury.
                    </h2>
                    <p className="text-[#A5A58D] font-sans text-sm tracking-widest uppercase">
                        Est. 2026 — Anatolia
                    </p>
                </div>
                <div className="md:col-span-8 grid md:grid-cols-2 gap-16">
                    <div>
                        <p className="font-serif text-2xl leading-relaxed mb-8 text-[#2C2C2C]">
                            "Gerçek lüks, doğanın kendi ritmidir. Karmaşık teknolojileri, toprağın sadeliğiyle harmanlıyoruz."
                        </p>
                    </div>
                    <div className="font-sans font-light text-[#2C2C2C]/80 leading-loose space-y-6">
                        <p>
                            VeraTerra olarak standartların ötesine geçiyoruz. Butik bir anlayışla, her bir hektar toprağa, koleksiyoner parçası gibi yaklaşıyoruz.
                        </p>
                        <p>
                            Sayısal veriler, estetik bir raporlamaya dönüşüyor. Tıpkı bir mimari proje gibi, tarım arazilerinizi yeniden tasarlıyoruz. Kaba müdahaleler yok, sadece rafine dokunuşlar var.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMAGE GRID */}
            <section className="py-20 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
                    <div className="h-full bg-[#E5E5E5] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#6B705C] bg-opacity-20 transition-opacity group-hover:bg-opacity-0"></div>
                        <div className="absolute bottom-8 left-8">
                            <span className="block font-serif text-2xl mb-2">01. Analysis</span>
                            <span className="text-xs uppercase tracking-widest">Precision</span>
                        </div>
                    </div>
                    <div className="h-full bg-[#D6D6D6] md:mt-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#A5A58D] bg-opacity-20 transition-opacity group-hover:bg-opacity-0"></div>
                        <div className="absolute bottom-8 left-8">
                            <span className="block font-serif text-2xl mb-2">02. Design</span>
                            <span className="text-xs uppercase tracking-widest">Regeneration</span>
                        </div>
                    </div>
                    <div className="h-full bg-[#C4C4C4] md:mt-24 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('/assets/coiumler/producer-hand.png')] bg-cover bg-center grayscale contrast-125 sepia-[.3]"></div>
                        <div className="absolute bottom-8 left-8 text-white mix-blend-difference">
                            <span className="block font-serif text-2xl mb-2">03. Harvest</span>
                            <span className="text-xs uppercase tracking-widest">Abundance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINIMAL FOOTER */}
            <footer className="py-24 px-8 md:px-24 border-t border-[#2C2C2C]/10 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-9xl font-serif text-[#2C2C2C]/10 leading-none -ml-4">
                        Vera.
                    </h2>
                </div>
                <div className="flex gap-8 text-sm font-sans tracking-widest uppercase mt-12 md:mt-0">
                    <a href="#" className="hover:text-[#6B705C] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#6B705C] transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-[#6B705C] transition-colors">Email</a>
                </div>
            </footer>
        </div>
    );
}
