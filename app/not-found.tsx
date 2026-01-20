import Link from 'next/link'
import { DataGrid } from '@/app/components/DataGrid'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden font-[family-name:var(--font-sans)]">
            <DataGrid className="opacity-20" />

            <div className="relative z-10 text-center max-w-lg px-4">
                <h1 className="text-[10rem] font-bold text-[var(--color-neon-blue)] leading-none opacity-80 blur-sm animate-pulse">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-mono text-white mix-blend-overlay">Kayıp Veri</span>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Aradığınız Sayfa Sahada Bulunamadı</h2>
                <p className="text-gray-400 mb-8">
                    Bu koordinatlarda herhangi bir mahsul veya veri girişi yok. Ana üsse dönerek tekrar deneyebilirsiniz.
                </p>

                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-white/10 border border-white/20 rounded hover:bg-[var(--color-neon-blue)] hover:text-black hover:border-transparent transition-all font-bold"
                >
                    Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    )
}
