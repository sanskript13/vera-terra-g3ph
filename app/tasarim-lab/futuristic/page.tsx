import Link from "next/link";
import Image from "next/image";

export default function FuturisticPage() {
    return (
        <div className="min-h-screen bg-[#030712] text-[#E0F2FE] font-mono selection:bg-[#06B6D4] selection:text-black overflow-x-hidden relative">

            {/* SCAN LINES OVERLAY */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>

            {/* AMBIENT GLOW */}
            <div className="fixed top-[-20%] left-[-20%] w-[50vw] h-[50vw] bg-[#06B6D4] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="fixed bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-[#00FF9D] rounded-full blur-[120px] opacity-10"></div>

            {/* HUD HEADER */}
            <header className="fixed w-full z-40 top-0 border-b border-[#06B6D4]/30 backdrop-blur-md">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 border border-[#06B6D4] flex items-center justify-center animate-spin-slow">
                            <div className="w-4 h-4 bg-[#06B6D4] rounded-sm"></div>
                        </div>
                        <div className="text-xl font-bold tracking-[0.2em] text-[#06B6D4] text-shadow-neon">
                            VERA_TERRA <span className="text-xs align-top opacity-70">SYS.4.0</span>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-8 text-xs text-[#06B6D4]/70">
                        <div className="flex flex-col">
                            <span>COORDS</span>
                            <span className="text-white">34.456 / -118.234</span>
                        </div>
                        <div className="flex flex-col">
                            <span>STATUS</span>
                            <span className="text-[#00FF9D] animate-pulse">TERRAFORMING_ACTIVE</span>
                        </div>
                        <div className="flex flex-col">
                            <span>CYCLE</span>
                            <span className="text-white">GEN_07</span>
                        </div>
                    </div>

                    <Link href="/tasarim-lab" className="border border-[#06B6D4] px-6 py-2 text-[#06B6D4] hover:bg-[#06B6D4] hover:text-black transition-all text-xs tracking-widest uppercase clip-path-slant relative overflow-hidden group">
                        <span className="relative z-10">Abort_Sim</span>
                        <div className="absolute inset-0 bg-[#06B6D4] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </Link>
                </div>
                {/* DECORATIVE LINE */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent"></div>
            </header>

            {/* MAIN CONTENT AREA */}
            <main className="pt-24 px-4 md:px-12 relative z-10">

                {/* HERO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[80vh] items-center">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="relative">
                        <div className="absolute -left-8 top-0 h-full w-[1px] bg-gradient-to-b from-[#06B6D4] to-transparent hidden md:block"></div>

                        <div className="mb-4 text-[#00FF9D] text-xs tracking-[0.5em] animate-pulse">
                            &gt;&gt;&gt; INITIATING PROTOCOL
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-none uppercase transparent-text-stroke">
                            Planet <br />
                            <span className="text-[#06B6D4] drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">Restoration</span><br />
                            Engine
                        </h1>

                        <p className="border-l-2 border-[#06B6D4] pl-6 py-2 text-[#E0F2FE]/70 max-w-md bg-[#06B6D4]/5 rounded-r mb-8 leading-relaxed font-light">
                            Deploying advanced bio-algorithms to reverse ecological collapse. Utilizing satellite telemetry and quantum-soil analysis for maximum yield efficiency.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-[#06B6D4] text-black px-8 py-3 font-bold tracking-widest hover:bg-[#00FF9D] hover:shadow-[0_0_20px_#00FF9D] transition-all clip-path-hex">
                                DEPLOY_SYSTEM
                            </button>
                            <button className="border border-[#06B6D4] text-[#06B6D4] px-8 py-3 font-bold tracking-widest hover:text-white hover:border-white transition-all clip-path-hex">
                                READ_LOGS
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: HOLO VISUAL */}
                    <div className="relative h-[60vh] border border-[#06B6D4]/20 rounded-lg p-2 bg-[#030712]/50 backdrop-blur-sm group">
                        {/* CORNER ACCENTS */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#06B6D4]"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#06B6D4]"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#06B6D4]"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#06B6D4]"></div>

                        <div className="w-full h-full relative overflow-hidden rounded">
                            <div className="absolute inset-0 bg-[url('/assets/coiumler/futuristic_hero.png')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:hue-rotate-15"></div>

                            {/* HUD OVERLAY ON IMAGE */}
                            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-32 h-32 border border-[#00FF9D] rounded-full animate-[spin_8s_linear_infinite] opacity-50 flex items-center justify-center">
                                    <div className="w-24 h-24 border border-[#06B6D4] rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 bg-black/80 p-4 border border-[#06B6D4] text-xs font-mono">
                                <div className="flex justify-between w-48 mb-1">
                                    <span className="text-[#06B6D4]">NITROGEN</span>
                                    <span className="text-white">LOW</span>
                                </div>
                                <div className="w-full bg-[#333] h-1">
                                    <div className="bg-red-500 w-[30%] h-full animate-pulse"></div>
                                </div>
                                <div className="flex justify-between w-48 mt-2 mb-1">
                                    <span className="text-[#06B6D4]">CARBON</span>
                                    <span className="text-white">OPTIMAL</span>
                                </div>
                                <div className="w-full bg-[#333] h-1">
                                    <div className="bg-[#00FF9D] w-[90%] h-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DATA STREAM FOOTER */}
                <div className="mt-12 border-t border-[#06B6D4]/20 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-[#06B6D4]/5 border border-[#06B6D4]/10 p-4 hover:border-[#00FF9D] transition-colors group">
                            <div className="text-[#06B6D4] text-xs mb-2 group-hover:text-[#00FF9D]">MODULE_0{i}</div>
                            <div className="text-2xl font-bold text-white mb-1">{Math.floor(Math.random() * 900) + 100} TX</div>
                            <div className="text-[10px] text-gray-500">OPERATIONAL</div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
