export function DayOneBridge() {
  return (
    <section className="pt-16 md:pt-20 pb-12 md:pb-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-3xl">
          {/* H2 */}
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1E293B] leading-[1.15] mb-6">
            Zaczynasz wtedy, kiedy dołączasz. To jest Twój Dzień 1.
          </h2>
          
          {/* BODY */}
          <p className="text-lg md:text-xl text-slate-800 font-normal leading-relaxed mb-16 md:mb-20">
            Po dołączeniu zaczyna się Twój własny 90-dniowy rytm. Kolejne materiały pojawiają się po kolei, prowadząc Cię przez następne etapy procesu.
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
          
          <p className="text-lg text-slate-800 font-normal leading-relaxed">
            Jeśli chcesz dołączyć, poniżej wybierasz sposób płatności.
          </p>
        </div>

      </div>
    </section>
  );
}
