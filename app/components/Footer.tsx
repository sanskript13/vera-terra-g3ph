import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
            <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-2xl font-bold text-white block mb-4">
                        VeraTerra<span className="text-[var(--color-neon-blue)]">.</span>
                    </Link>
                    <p className="text-sm">
                        Onarıcı tarım ve teknoloji destekli program tasarımı. Sahada gerçekçi, masada denetlenebilir.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Çözümler</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/cozumler/kurumsal-tedarik-zinciri" className="hover:text-[var(--color-neon-blue)] transition-colors">Kurumsal Tedarik Zinciri</Link></li>
                        <li><Link href="/cozumler/uretici-kooperatif" className="hover:text-[var(--color-neon-blue)] transition-colors">Üretici ve Kooperatifler</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Kurumsal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/hakkimizda" className="hover:text-[var(--color-neon-blue)] transition-colors">Hakkımızda</Link></li>
                        <li><Link href="/metodoloji" className="hover:text-[var(--color-neon-blue)] transition-colors">Metodoloji & Kanıt</Link></li>
                        <li><Link href="/iletisim" className="hover:text-[var(--color-neon-blue)] transition-colors">İletişim</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Kaynaklar</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/kaynaklar" className="hover:text-[var(--color-neon-blue)] transition-colors">Kaynak Merkezi</Link></li>
                        <li><Link href="/kaynaklar/onarici-sozluk" className="hover:text-[var(--color-neon-blue)] transition-colors">Onarıcı Sözlük</Link></li>
                        <li><Link href="/blog" className="hover:text-[var(--color-neon-blue)] transition-colors">Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2026 Vera Terra. Tüm hakları saklıdır.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Legal</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                </div>
            </div>
        </footer>
    );
}
