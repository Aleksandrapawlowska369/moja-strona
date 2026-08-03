import Link from 'next/link';

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 md:py-32 relative bg-gradient-to-b from-[#0F172A] to-[#1e1b4b] overflow-hidden">
      {/* Subtelna poświata w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A84FF]/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight break-words">
          Nie musisz wiedzieć, jak będą wyglądały wszystkie kolejne dni
        </h2>
        
        <div className="space-y-4 mb-10 text-lg md:text-xl text-slate-300">
          <p>
            Nie musisz również obiecywać sobie, że przejdziesz ten proces perfekcyjnie.
          </p>
          <p>
            Wystarczy, że zaczniesz i każdego dnia wykonasz kolejny krok w stronę osoby, którą chcesz się stać.
          </p>
        </div>
        
        <div className="mb-12">
          <span className="block text-xl md:text-2xl font-bold text-[#3A84FF] break-words">
            Jeden materiał. Jedno doświadczenie. Jeden krok.
          </span>
        </div>
        
        <div className="max-w-xl mx-auto">
          <Link 
            href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" 
            target="_blank"
            className="flex items-center justify-center w-full py-4 px-4 sm:px-8 text-white text-[15px] sm:text-base md:text-lg font-bold bg-gradient-to-r from-[#3A84FF] to-[#2563EB] rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(58,132,255,0.25)] mb-6 text-center leading-snug"
          >
            ROZPOCZYNAM PEŁNY PROCES 90 DNI
          </Link>
          
          <p className="text-xs md:text-base text-slate-400">
            Pełny proces 90 dni • 1497 zł brutto • 5 miesięcy dostępu
          </p>
        </div>
      </div>
    </section>
  );
}
