export function Solution() {
  return (
    <section id="pojemnosc" className="py-24 md:py-32 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col">
        
        {/* H2 + LEAD */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-[1.15]">
            Co dzieje się pomiędzy „wiem, jak chcę żyć” a tym, co robię, kiedy robi się trudno?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            Możesz dokładnie wiedzieć, jak chcesz zareagować. Kiedy jednak pojawia się lęk, napięcie, wstyd albo zmęczenie, dostęp do tej odpowiedzi może być dużo mniejszy.
          </p>
        </div>

        {/* TYPOGRAPHIC FIELDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32">
          
          {/* FIELD 1 */}
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
              CO MOŻE SIĘ URUCHOMIĆ
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-slate-300 font-light">
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>przekonanie</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>emocja lub automatyczna reakcja</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>wewnętrzny krytyk</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>przeciążenie</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>brak kierunku</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>odkładanie działania</p>
            </div>
          </div>

          {/* FIELD 2 & TRANSITION */}
          <div className="flex flex-col">
            <div className="mb-12">
              <p className="text-xl md:text-2xl font-medium text-white tracking-wide leading-relaxed">
                I właśnie dlatego nie chciałem budować tego programu wokół jednej odpowiedzi ani jednej techniki.
              </p>
            </div>
            
            <h3 className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
              Z CZYM PRACUJEMY
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-white/90 font-light">
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>umysł i przekonania</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>emocje i podświadomość</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>ciało, oddech, ruch i stan</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>medytacja i autohipnoza</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>energia i relacja ze sobą</p>
              <p className="flex items-start"><span className="text-[#C29B57] mr-4 mt-0.5 opacity-80 font-medium">/</span>decyzje i działanie</p>
            </div>
          </div>
          
        </div>

        {/* CLOSING ANCHOR */}
        <div className="pt-16 md:pt-24 border-t border-white/10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white font-normal leading-snug md:leading-tight mb-8 md:mb-10">
            Chodzi o to, żeby z czasem pomiędzy tym, co się wydarza, a Twoją odpowiedzią pojawiało się więcej miejsca.
          </h3>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl">
            Więcej miejsca na pytanie: co chcę teraz zrobić i kim chcę być w tej sytuacji?
          </p>
        </div>

      </div>
    </section>
  );
}
