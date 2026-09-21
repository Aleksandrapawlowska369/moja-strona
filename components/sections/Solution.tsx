export function Solution() {
  return (
    <section id="pojemnosc" className="py-24 md:py-32 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col">
        
        {/* H2 + LEAD */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-[1.15]">
            Sama wiedza nie zawsze wystarcza. Zmiana może zatrzymać się w różnych miejscach.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            Możesz wiedzieć, co chcesz zrobić, a mimo to w chwili lęku, napięcia, wstydu albo zmęczenia mieć zupełnie inny dostęp do tej odpowiedzi.
          </p>
        </div>

        {/* GDZIE ZMIANA MOŻE SIĘ ZATRZYMAĆ */}
        <div className="mb-20 md:mb-24">
          <p className="text-xl md:text-2xl font-medium text-white tracking-wide mb-8 md:mb-12">
            Czasem zatrzymuje Cię:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-16 md:gap-y-6 text-lg md:text-xl text-slate-300 font-light">
            <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-2.5 mr-4 shrink-0 opacity-80"></span>przekonanie</p>
            <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-2.5 mr-4 shrink-0 opacity-80"></span>emocja lub automatyczna reakcja</p>
            <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-2.5 mr-4 shrink-0 opacity-80"></span>wewnętrzny krytyk</p>
            <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-2.5 mr-4 shrink-0 opacity-80"></span>przeciążenie</p>
            <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-2.5 mr-4 shrink-0 opacity-80"></span>brak kierunku</p>
            <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-2.5 mr-4 shrink-0 opacity-80"></span>odkładanie działania</p>
          </div>
        </div>

        {/* PRZEJŚCIE */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            Dlatego nie sprowadzam zmiany do jednej przyczyny ani nie opieram programu na jednej technice.
          </p>
        </div>

        {/* POZIOMY PRACY */}
        <div className="mb-24 md:mb-32">
          <p className="text-xl md:text-2xl font-medium text-white tracking-wide mb-8 md:mb-12">
            Dlatego w programie pracujemy z kilkoma obszarami:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-8 text-lg md:text-xl text-white/90 font-light">
            <p className="border-b border-white/10 pb-3">umysł i przekonania</p>
            <p className="border-b border-white/10 pb-3">emocje i podświadomość</p>
            <p className="border-b border-white/10 pb-3">ciało, oddech, ruch i stan</p>
            <p className="border-b border-white/10 pb-3">medytacja i autohipnoza</p>
            <p className="border-b border-white/10 pb-3">energia i relacja ze sobą</p>
            <p className="border-b border-white/10 pb-3">decyzje i działanie</p>
          </div>
        </div>

        {/* ANCHOR */}
        <div className="pt-16 md:pt-24 border-t border-white/10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white font-normal leading-snug md:leading-tight mb-8 md:mb-10">
            Chodzi o to, żeby z czasem pojawiało się więcej przestrzeni pomiędzy tym, co się wydarza, a Twoją odpowiedzią.
          </h3>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl">
            Więcej miejsca na pytanie: co chcę teraz zrobić i kim chcę być w tej sytuacji?
          </p>
        </div>

      </div>
    </section>
  );
}
