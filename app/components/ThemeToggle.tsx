"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check local storage or system preference
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
            if (storedTheme === "dark") document.documentElement.classList.remove("light");
            else document.documentElement.classList.remove("dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // Update DOM
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);

        // Save to local storage
        localStorage.setItem("theme", newTheme);
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder
    }

    return (
        <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-full transition-all duration-500 overflow-hidden group ${theme === "dark"
                    ? "bg-[var(--color-neon-blue)]/20 hover:bg-[var(--color-neon-blue)]/30 text-[var(--color-neon-blue)]"
                    : "bg-orange-100 hover:bg-orange-200 text-orange-600"
                }`}
            aria-label="Toggle Theme"
            title={theme === "light" ? "Switch to Dark Mode (Soil)" : "Switch to Light Mode (Sun)"}
        >
            <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                {/* Sun Icon (Visible in Light Mode) */}
                <svg
                    className={`w-5 h-5 absolute transition-all duration-500 transform ${theme === "light" ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-50"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>

                {/* Seedling/Soil Icon (Visible in Dark Mode) */}
                <svg
                    className={`w-5 h-5 absolute transition-all duration-500 transform ${theme === "dark" ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
                        }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 20h10" />
                    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.2.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
            </div>
        </button>
    );
}
