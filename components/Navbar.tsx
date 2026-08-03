"use client";

import Link from 'next/link';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  // Ukryj pasek nawigacyjny wyłącznie na stronie sprzedażowej (głównej)
  if (pathname === '/') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#E5E7EB]/90 backdrop-blur supports-[backdrop-filter]:bg-[#E5E7EB]/70 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-sans font-bold text-xl text-[#374151]">
          Ewolucja.
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="#problemy" className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors">
            Wyzwania
          </Link>
          <Link href="#rozwiazanie" className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors">
            Program
          </Link>
          <Link href="#cennik" className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors">
            Inwestycja
          </Link>
          <Link href="#faq" className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              className="bg-white border border-transparent focus:border-gray-300 text-gray-600 text-sm rounded-full block w-full pl-10 p-2 transition-all shadow-sm outline-none w-[120px] focus:w-[200px]" 
              placeholder="Szukaj..." 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
