import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#1A1614] text-[#F5F5F3] flex items-center justify-center relative overflow-hidden font-[family-name:var(--font-sans)]">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1614] via-[#2A2320]/50 to-[#1A1614]"></div>

            <div className="relative z-10 text-center max-w-lg px-4">
                <h1 className="text-[8rem] md:text-[10rem] font-bold text-[#8EBF60]/20 leading-none select-none">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-light text-[#F5F5F3]/80">Sayfa Bulunamadı</span>
                </div>

                <p className="text-[#8B8680] mt-8 mb-8">
                    Aradığınız sayfa mevcut değil. Ana sayfaya dönerek devam edebilirsiniz.
                </p>

                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-[#2A2320]/60 border border-[#3D3530] rounded-xl hover:bg-[#8EBF60]/20 hover:border-[#8EBF60]/40 transition-all duration-300 font-medium text-sm tracking-wide"
                >
                    Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    )
}
