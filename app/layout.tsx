import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Twoja Nowa Tożsamość | 90-dniowy program zmiany",
  description: "90-dniowy program Przemysława Krupskiego: praca z reakcjami, emocjami, ciałem i tożsamością, aby wprowadzać zmianę krok po kroku.",
  openGraph: {
    title: "Twoja Nowa Tożsamość | 90-dniowy program zmiany",
    description: "90-dniowy proces łączący pracę z umysłem, emocjami, oddechem, ciałem i podświadomością.",
    siteName: "Przeistoczenie",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/tnt.png",
        alt: "Twoja Nowa Tożsamość – 90-dniowy program zmiany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twoja Nowa Tożsamość | 90-dniowy program zmiany",
    description: "90-dniowy proces pracy z reakcjami, emocjami, ciałem i tożsamością.",
    images: ["/tnt.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${manrope.variable} ${cormorant.variable} antialiased`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-screen font-sans flex flex-col bg-[#1A1A1A] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}


