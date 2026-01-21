import Link from "next/link";
import Image from "next/image";

export default function RawEarthPage() {
    return (
        <div className="min-h-screen bg-[#EFECE5] text-black font-sans selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">

            {/* AGGRESSIVE MARQUEE */}
            <div className="bg-[#CCFF00] border-b-4 border-black py-2 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block font-black text-xl tracking-tighter">
                    RAW REALITY — RADICAL REGENERATION — SOIL IS ALIVE — NO MORE GREENWASHING — RAW REALITY — RADICAL REGENERATION — SOIL IS ALIVE — NO MORE GREENWASHING —
                </div>
            </div>

            {/* BRUTALIST NAVBAR */}
            <nav className="border-b-4 border-black p-6 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                <div className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.8]">
                    Vera<br />Terra<span className="text-[#CCFF00]">.</span>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-6 md:mt-0 font-bold uppercase text-xl tracking-tight">
                    <span className="hover:bg-black hover:text-[#CCFF00] px-2 cursor-pointer transition-colors">Manifesto</span>
                    <span className="hover:bg-black hover:text-[#CCFF00] px-2 cursor-pointer transition-colors">Dirt</span>
                    <span className="hover:bg-black hover:text-[#CCFF00] px-2 cursor-pointer transition-colors">Action</span>
                </div>

                <Link href="/tasarim-lab" className="absolute top-6 right-6 md:relative md:top-0 md:right-0 bg-black text-[#CCFF00] px-6 py-3 font-bold uppercase hover:bg-transparent hover:text-black border-4 border-black transition-all">
                    Exit
                </Link>
            </nav>

            {/* HERO SECTION - ASYMMETRIC GRID */}
            <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen">

                {/* BIG TYPOGRAPHY AREA */}
                <div className="md:col-span-8 p-6 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center relative">
                    <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mb-12 mix-blend-hard-light relative z-10">
                        Soil <br />
                        <span className="text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: "2px black" }}>Calls</span><br />
                        Back
                    </h1>

                    <div className="bg-black text-[#EFECE5] p-6 max-w-xl transform -rotate-2 border-4 border-[#CCFF00] shadow-[8px_8px_0px_0px_#CCFF00]">
                        <p className="font-mono text-lg md:text-xl font-bold leading-tight uppercase">
                            Warning: Industrial agriculture has failed. We are deploying radical fungal networks to reclaim the land.
                        </p>
                    </div>
                </div>

                {/* RAW IMAGE AREA */}
                <div className="md:col-span-4 border-b-4 md:border-b-0 border-black relative bg-black group">
                    <div className="absolute inset-0 bg-[url('/assets/coiumler/raw_earth_hero.png')] bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-20 pointer-events-none"></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 border-t-4 border-black bg-[#CCFF00]">
                        <span className="font-black text-4xl block mb-2">98%</span>
                        <span className="font-mono text-sm font-bold uppercase">Carbon Loading...</span>
                    </div>
                </div>

                {/* CONTENT BLOCKS BELOW */}
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 border-b-4 border-black">
                    <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-[#FF4500] hover:text-black transition-colors cursor-crosshair">
                        <h2 className="text-3xl font-black uppercase mb-4">No Soft Shadows</h2>
                        <p className="font-mono text-sm leading-relaxed">
                            Nature is hard. Our data doesn't lie. We strip away the corporate polish to show you the raw metrics of your soil's health.
                        </p>
                    </div>
                    <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-[#CCFF00] hover:text-black transition-colors cursor-help">
                        <h2 className="text-3xl font-black uppercase mb-4">Brutal Efficiency</h2>
                        <p className="font-mono text-sm leading-relaxed">
                            Intervention protocols that cut through the noise. Direct application of regenerative biology with zero waste.
                        </p>
                    </div>
                    <div className="p-8 hover:bg-black hover:text-white transition-colors cursor-cell">
                        <h2 className="text-3xl font-black uppercase mb-4">Radical Growth</h2>
                        <p className="font-mono text-sm leading-relaxed">
                            We don't just sustain; we regenerate. Expect explosive results when you align with biology.
                        </p>
                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="p-12 bg-black text-[#EFECE5] grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="text-[10vw] font-black leading-none text-[#333]">V.T.</div>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <div className="space-y-4 text-right">
                        <a href="#" className="block text-2xl font-bold uppercase hover:text-[#CCFF00] hover:underline decoration-4 decoration-[#CCFF00]">Instagram_V2</a>
                        <a href="#" className="block text-2xl font-bold uppercase hover:text-[#CCFF00] hover:underline decoration-4 decoration-[#CCFF00]">LinkedIn_Pro</a>
                        <a href="#" className="block text-2xl font-bold uppercase hover:text-[#CCFF00] hover:underline decoration-4 decoration-[#CCFF00]">System_Email</a>
                    </div>
                    <p className="font-mono text-xs mt-12 text-[#666]">
                        © 2026 VERA TERRA — NO RIGHTS RESERVED. COPY LEFT.
                    </p>
                </div>
            </footer>
        </div>
    );
}
