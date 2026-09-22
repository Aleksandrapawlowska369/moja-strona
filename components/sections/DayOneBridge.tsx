export function DayOneBridge() {
  return (
    <section className="pt-16 md:pt-20 pb-12 md:pb-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-4xl mb-16 md:mb-24">
          {/* H2 */}
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1E293B] leading-[1.15] mb-16 md:mb-20">
            Dołączasz dziś. Jutro zaczyna się Twój Dzień 1.
          </h2>
          
          {/* SEQUENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 relative">
            {/* Strzałka desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col pl-6 md:pl-10 border-l border-[#C29B57]/30">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest uppercase mb-2">DZISIAJ</span>
              <span className="font-heading text-2xl md:text-3xl text-[#1E293B] font-medium mb-4">Dzień 0</span>
              <span className="text-base md:text-lg text-slate-500 font-light">powitanie • pierwsze informacje • ankieta</span>
            </div>

            <div className="flex flex-col pl-6 md:pl-10 border-l border-[#C29B57]/30">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest uppercase mb-2">JUTRO</span>
              <span className="font-heading text-2xl md:text-3xl text-[#1E293B] font-medium mb-4">Dzień 1</span>
              <span className="text-base md:text-lg text-slate-500 font-light">zaczyna się Twój własny 90-dniowy rytm</span>
            </div>
          </div>
          
          {/* BODY */}
          <p className="text-xl md:text-2xl text-slate-700 font-normal leading-relaxed">
            Zanim pojawi się pierwszy materiał, zatrzymujesz się przy trzech pytaniach, które ustawiają Twój punkt startu:
          </p>
        </div>

        {/* TRZY PYTANIA */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-[#C29B57]/80 tracking-widest mb-4">01</span>
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#1E293B] font-normal leading-tight">
                Jak chcę żyć?
              </p>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-[#C29B57]/80 tracking-widest mb-4">02</span>
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#1E293B] font-normal leading-tight">
                Co dzieje się teraz we mnie?
              </p>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-[#C29B57]/80 tracking-widest mb-4">03</span>
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#1E293B] font-normal leading-tight">
                Jaki jest mój kolejny krok?
              </p>
            </div>

          </div>
        </div>

        {/* DOSTĘP I BRIDGE */}
        <div className="pt-10 md:pt-12 border-t border-slate-200 max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-900 font-normal mb-4">
            Masz 5 miesięcy dostępu, więc nie musisz przechodzić tej drogi idealnie dzień po dniu.
          </p>
        </div>

      </div>
    </section>
  );
}
