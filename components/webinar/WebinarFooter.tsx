import React from 'react';

export function WebinarFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#F8FAFC] py-8 md:py-10 font-sans">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="text-sm text-slate-500 text-center md:text-left">
            © 2026 Przeistoczenie. Wszelkie prawa zastrzeżone.
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a 
              href="mailto:przemek@przeistoczenie.pl" 
              className="text-sm text-slate-500 hover:text-primary transition-colors"
            >
              przemek@przeistoczenie.pl
            </a>
            <a 
              href="https://www.przeistoczenie.pl/polityka-prywatnosci" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-slate-500 hover:text-primary transition-colors"
            >
              Polityka prywatności
            </a>
            <a 
              href="https://www.przeistoczenie.pl/regulamin-sklepu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-slate-500 hover:text-primary transition-colors"
            >
              Regulamin sklepu
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
