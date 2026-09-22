import Link from 'next/link';

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-16 md:py-24 relative bg-gradient-to-b from-[#0F172A] to-[#1e1b4b] overflow-hidden">
      {/* Subtelna poświata w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A84FF]/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-8 leading-[1.15]">
          Jeśli wiesz, jak chcesz żyć, przez najbliższe 90 dni mogę pomagać Ci coraz częściej wybierać właśnie to życie.
        </h2>
        
        <div className="space-y-6 mb-12 text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
          <p>
            Świadoma kreacja nie kończy się na tym, że wiesz, czego pragniesz. Zaczyna spotykać codzienność wtedy, kiedy Twoje wybory coraz częściej stają się z tym pragnieniem zgodne.
          </p>
          <p>
            Nie chodzi o to, żeby przez 90 dni stać się kimś, kto już nigdy nie czuje lęku ani nie wraca do starych reakcji. Chodzi o to, żeby coraz częściej zauważać moment, w którym możesz wybrać inaczej.
          </p>
        </div>
        
        <div className="mb-12 max-w-3xl mx-auto">
          <span className="block text-xl md:text-2xl font-bold text-white leading-relaxed">
            Mogę dać Ci kierunek, kolejne kroki, różne sposoby pracy, prowadzenie i regularny punkt powrotu. Ty nadal wykonujesz swoją część.
          </span>
        </div>
        
        <div className="max-w-xl mx-auto">
          <Link 
            href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" 
            target="_blank"
            className="flex items-center justify-center w-full py-4 px-4 sm:px-8 text-white text-[15px] sm:text-base md:text-lg font-bold bg-gradient-to-r from-[#3A84FF] to-[#2563EB] rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(58,132,255,0.25)] mb-6 text-center leading-snug"
          >
            DOŁĄCZAM DO PEŁNEGO PROGRAMU
          </Link>
          
          <p className="text-sm md:text-base text-slate-400">
            90 dni procesu • 597 zł miesięcznie lub 1497 zł jednorazowo • 5 miesięcy dostępu
          </p>
        </div>
      </div>
    </section>
  );
}
