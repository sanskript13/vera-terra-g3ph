"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Çözümler', href: '/cozumler/kurumsal-tedarik-zinciri' },
        { name: 'Metodoloji', href: '/metodoloji' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Kaynaklar', href: '/kaynaklar' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white">VeraTerra<span className="text-[var(--color-neon-blue)]">.</span></span>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white/10 rounded-lg bg-black/80 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`block py-2 px-3 rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 md:hover:text-[var(--color-neon-blue)] md:p-0 transition-colors ${pathname === link.href ? 'text-[var(--color-neon-blue)]' : 'text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/iletisim"
                                className="block py-2 px-3 text-black bg-[var(--color-neon-blue)] rounded md:px-5 md:py-2 hover:bg-[var(--color-neon-blue)]/80 transition-opacity font-semibold mt-2 md:mt-0"
                            >
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
