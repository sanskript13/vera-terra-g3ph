import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reverda. Onarıcı Tarım | Program Tasarımı & Saha Danışmanlığı",
  description: "Onarıcı tarım programları için profesyonel tasarım ve saha danışmanlığı hizmetleri. Toprak sağlığı, karbon tutulumu ve sürdürülebilir tarım çözümleri.",
  keywords: ["onarıcı tarım", "rejeneratif tarım", "toprak sağlığı", "karbon tutulumu", "sürdürülebilir tarım", "tarım danışmanlığı", "reverda"],
  authors: [{ name: "Reverda" }],
  creator: "Reverda",
  publisher: "Reverda",
  metadataBase: new URL('https://reverda.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Reverda. Onarıcı Tarım | Program Tasarımı & Saha Danışmanlığı",
    description: "Onarıcı tarım programları için profesyonel tasarım ve saha danışmanlığı hizmetleri.",
    url: 'https://reverda.io',
    siteName: 'Reverda',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reverda. Onarıcı Tarım | Program Tasarımı & Saha Danışmanlığı",
    description: "Onarıcı tarım programları için profesyonel tasarım ve saha danışmanlığı hizmetleri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
