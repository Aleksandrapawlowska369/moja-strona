export function WebinarTension() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 max-w-4xl relative z-10">
        
        {/* Intro */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold leading-[1.2] text-[#1E293B]">
            Dlaczego możesz naprawdę chcieć żyć inaczej, próbować różnych rzeczy i nadal pytać: „dlaczego nic się nie zmienia?”
          </h2>
          
          <div className="space-y-6 text-slate-600 text-lg md:text-xl font-sans leading-relaxed">
            <p>
              Kiedy długo próbujesz coś zmienić, a efekt nadal nie jest taki, jakiego oczekujesz, łatwo dojść do wniosku, że trzeba po prostu jeszcze bardziej się postarać, jeszcze bardziej się zmotywować albo znaleźć kolejną metodę.
            </p>
            <p className="text-slate-800 font-medium text-xl md:text-2xl pt-2">
              Tylko że podobny rezultat może mieć bardzo różne źródła.
            </p>
          </div>
        </div>

        {/* 5 Situations - Asymmetric List / Vertical Axis */}
        <div className="mt-16 md:mt-20">
          <div className="relative border-l border-slate-300 pl-8 md:pl-12 ml-2 md:ml-4 space-y-12 py-2">
            
            {/* Item 1 */}
            <div className="relative">
              <div className="absolute -left-[37px] md:-left-[53px] top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-[#F8FAFC]"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                <span className="text-slate-800 font-semibold">Czasem</span> <span className="text-slate-800 font-medium">masz jasną wizję</span>, a mimo to trudno utrzymać ją wtedy, kiedy mija początkowa energia.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <div className="absolute -left-[37px] md:-left-[53px] top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-[#F8FAFC]"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                <span className="text-slate-800 font-semibold">Czasem</span> <span className="text-slate-800 font-medium">wiesz, czego chcesz</span>, ale droga do tego wydaje się tak odległa, że zaczynasz wątpić, czy w ogóle da się tam dojść.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative">
              <div className="absolute -left-[37px] md:-left-[53px] top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-[#F8FAFC]"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                <span className="text-slate-800 font-semibold">Czasem</span> <span className="text-slate-800 font-medium">robisz naprawdę dużo</span>, a na zewnątrz nadal nie widzisz rezultatu, na który czekasz.
              </p>
            </div>

            {/* Item 4 */}
            <div className="relative">
              <div className="absolute -left-[37px] md:-left-[53px] top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-[#F8FAFC]"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                <span className="text-slate-800 font-semibold">Innym razem</span> <span className="text-slate-800 font-medium">dokładnie wiesz, co chcesz zrobić inaczej</span>, ale kiedy przychodzi konkretny moment, nadal tego nie robisz.
              </p>
            </div>

            {/* Item 5 */}
            <div className="relative">
              <div className="absolute -left-[37px] md:-left-[53px] top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-[#F8FAFC]"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                <span className="text-slate-800 font-semibold">A czasem</span> <span className="text-slate-800 font-medium">zmiana już zachodzi</span>, tylko nie tam, gdzie zwykle jej szukasz. Jeśli tego nie zauważysz, bardzo łatwo uznać, że nic się nie dzieje i zrezygnować za wcześnie.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Emphasis - Bridge instead of False Floor */}
        <div className="mt-20 md:mt-24">
          <div className="bg-[#F1F5F9] border border-slate-200/60 rounded-2xl p-6 md:p-10 text-left">
            <p className="text-xl md:text-2xl font-heading font-medium text-[#1E293B] leading-relaxed">
              Zanim kolejny raz spróbujesz mocniej się zmusić albo zaczniesz szukać następnej metody, warto sprawdzić, gdzie naprawdę powstaje różnica między tym, czego chcesz, a tym, co później wydarza się w Twoim życiu.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
