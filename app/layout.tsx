import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
  title: "Transformacja Osobowości | Rozpocznij Nowy Rozdział",
  description: "Nowoczesny program rozwoju osobistego i kreacji własnej tożsamości.",
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
      </body>
    </html>
  );
}


