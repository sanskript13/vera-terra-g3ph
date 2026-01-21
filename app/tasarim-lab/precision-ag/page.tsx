import Link from "next/link";
import Image from "next/image";

export default function PrecisionAgPage() {
    return (
        <div className="min-h-screen font-sans bg-white text-[#1E293B] selection:bg-[#10B981] selection:text-white">

            {/* Custom Navbar - Tech Theme */}
            <nav className="fixed w-full z-50 top-0 start-0 h-16 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm flex justify-between items-center px-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                    <div className="text-sm font-semibold tracking-tight">VeraTerra<span className="text-[#10B981]">.IO</span></div>
                </div>

                <div className="hidden md:flex space-x-1 font-mono text-xs text-[#1E293B]/60">
                    <span className="px-4 py-1 hover:bg-[#F0F4F8] hover:text-[#1E293B] cursor-pointer rounded border border-transparent hover:border-[#E2E8F0] transition-all">01_MANIFESTO</span>
                    <span className="px-4 py-1 hover:bg-[#F0F4F8] hover:text-[#1E293B] cursor-pointer rounded border border-transparent hover:border-[#E2E8F0] transition-all">02_JOURNAL</span>
                    <span className="px-4 py-1 hover:bg-[#F0F4F8] hover:text-[#1E293B] cursor-pointer rounded border border-transparent hover:border-[#E2E8F0] transition-all">03_CONTACT</span>
                </div>

                <Link href="/tasarim-lab" className="text-xs font-mono border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 rounded hover:border-[#10B981] hover:text-[#10B981] transition-all flex items-center gap-2">
                    <span className="text-[10px]">ESC</span>
                    Exit_Lab
                </Link>
            </nav>

            {/* MAIN GRID LAYOUT */}
            <main className="pt-24 pb-12 px-6 container mx-auto max-w-7xl">

                {/* HERO SECTION - SPLIT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[80vh] mb-6">

                    {/* LEFT CONTENT */}
                    <div className="md:col-span-5 flex flex-col justify-between border border-[#E2E8F0] p-8 md:p-12 rounded-lg bg-[#F8FAFC] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#10B981]">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="16" />
                                <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                        </div>

                        <div className="mt-12">
                            <div className="font-mono text-xs text-[#10B981] mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#10B981]"></span>
                                SYSTEM_ACTIVE
                            </div>
                            <h1 className="text-5xl font-semibold tracking-tighter leading-tight mb-6">
                                Precision <br /> Agriculture <br /> <span className="text-[#10B981]">OS 2.0</span>
                            </h1>
                            <p className="text-[#64748B] leading-relaxed max-w-sm">
                                Eliminating guesswork from soil regeneration. Data-driven insights for measurable impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <button className="bg-[#1E293B] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#10B981] transition-colors text-left flex justify-between items-center group/btn">
                                Start Analysis
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                            <button className="bg-white border border-[#E2E8F0] text-[#1E293B] px-6 py-3 text-sm font-medium rounded hover:bg-[#F0F4F8] transition-colors">
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL - 3D ISOMETRIC */}
                    <div className="md:col-span-7 border border-[#E2E8F0] rounded-lg bg-white relative overflow-hidden flex items-center justify-center">
                        {/* Grid Pattern Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                        {/* Generated Image should go here */}
                        <div className="relative w-3/4 h-3/4 shadow-2xl border border-[#E2E8F0] bg-white p-2 rounded-xl rotate-1 hover:rotate-0 transition-all duration-700">
                            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#64748B] z-10 p-1 bg-white/80 backdrop-blur">
                                FIELD_ID: 24-B
                            </div>
                            {/* Fallback color/image until generated */}
                            <div className="w-full h-full bg-[#F1F5F9] relative overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-[url('/assets/coiumler/precision_ag_hero_v2.png')] bg-cover bg-center"></div>

                                {/* UI Overlays */}
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded border border-[#E2E8F0] shadow-sm max-w-[150px]">
                                    <div className="text-[10px] uppercase text-[#64748B] font-bold mb-1">Moisture</div>
                                    <div className="text-2xl font-mono text-[#10B981]">42%</div>
                                    <div className="w-full bg-[#E2E8F0] h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-[#10B981] h-full w-[42%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BENTO GRID STATS */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-[#10B981] mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                        </div>
                        <div className="text-2xl font-mono font-semibold text-[#1E293B]">₺8.4M</div>
                        <div className="text-xs text-[#64748B] mt-1">Total Value Optimized</div>
                    </div>
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-[#3B82F6] mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                        <div className="text-2xl font-mono font-semibold text-[#1E293B]">1,240</div>
                        <div className="text-xs text-[#64748B] mt-1">Hectares Monitored</div>
                    </div>
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-purple-500 mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <div className="text-2xl font-mono font-semibold text-[#1E293B]">98.2%</div>
                        <div className="text-xs text-[#64748B] mt-1">Data Integrity Score</div>
                    </div>
                    <div className="bg-[#1E293B] text-white p-6 rounded-lg flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#10B981] transition-colors">
                        <span className="text-xs uppercase tracking-widest mb-2 opacity-60">Start New Project</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </div>
                </div>

            </main>
        </div>
    );
}
