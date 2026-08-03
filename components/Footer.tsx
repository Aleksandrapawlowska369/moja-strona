import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 mt-auto bg-[#0F172A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolumna 1 — Marka */}
          <div>
            <span className="font-sans font-bold text-2xl text-white mb-4 block">
              Przeistoczenie.
            </span>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Programy i praktyki wspierające świadomą zmianę, pracę z tożsamością i budowanie życia w większej zgodzie ze sobą.
            </p>
          </div>
          
          {/* Kolumna 2 — Na tej stronie */}
          <div>
            <h5 className="text-white font-bold mb-6">Na tej stronie</h5>
            <ul className="space-y-4">
              <li><Link href="#etapy" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">Jak działa program</Link></li>
              <li><Link href="#zawartosc" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">Co otrzymujesz</Link></li>
              <li><Link href="#opinie" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">Opinie uczestników</Link></li>
              <li><Link href="#oferta" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">Inwestycja</Link></li>
              <li><Link href="#faq" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">Najczęściej zadawane pytania</Link></li>
            </ul>
          </div>
          
          {/* Kolumna 3 — Program */}
          <div>
            <h5 className="text-white font-bold mb-6">Program</h5>
            <ul className="space-y-4">
              <li>
                <Link href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">
                  Pełny proces 90 dni
                </Link>
              </li>
              <li>
                <Link href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-30-dni.html" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">
                  Pakiet 30 dni
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Kolumna 4 — Kontakt i Dokumenty */}
          <div>
            <h5 className="text-white font-bold mb-6">Kontakt</h5>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:przemek@przeistoczenie.pl" className="text-sm text-[#3A84FF] hover:underline transition-colors">
                  przemek@przeistoczenie.pl
                </a>
              </li>
            </ul>
            
            <h5 className="text-white font-bold mb-6">Dokumenty</h5>
            <ul className="space-y-4">
              <li>
                <Link href="https://www.przeistoczenie.pl/polityka-prywatnosci" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="https://www.przeistoczenie.pl/regulamin-sklepu" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-[#3A84FF] transition-colors">
                  Regulamin sklepu
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Dolny pasek stopki */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2026 Przeistoczenie. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-slate-500 font-medium text-center md:text-right">
            Twoja Nowa Tożsamość
          </p>
        </div>
      </div>
    </footer>
  );
}


