export function Bridge() {
  return (
    <section className="bg-[#1A1A1A] py-20 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEWA KOLUMNA */}
          <div className="lg:col-span-6 lg:pr-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.15]">
              Możesz dużo rozumieć i nadal w ważnym momencie zareagować po staremu.
            </h2>
          </div>
          
          {/* PRAWA KOLUMNA */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col space-y-6 md:space-y-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed lg:pt-4">
            <p>
              Możesz mieć swoją wizję, pracować nad sobą, medytować, afirmować i znać własne przekonania. A potem przychodzi zwykły dzień: ocena, trudna rozmowa, ryzyko, lęk albo decyzja, której nie da się dłużej odkładać.
            </p>
            <p className="font-medium text-white tracking-wide">
              I właśnie wtedy najłatwiej wracają reakcje, które znasz od lat.
            </p>
          </div>
          
        </div>
        
        {/* ANCHOR POD OBIEMA KOLUMNAMI */}
        <div className="mt-24 md:mt-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-12 h-px bg-white/20 mb-12 md:mb-16"></div>
          
          <h3 className="font-heading text-2xl md:text-4xl text-white font-normal leading-snug tracking-wide mb-8 md:mb-10">
            Rozumieć swoją reakcję i mieć dostęp do tej wiedzy dokładnie wtedy, kiedy jest potrzebna, to nie zawsze to samo.
          </h3>
          
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl">
            Samo zrozumienie to pierwszy krok. Program zaczyna się tam, gdzie to zrozumienie spotyka codzienne życie.
          </p>
        </div>

        {/* TODO — DEFERRED COPY FOR LATER MULTI-LAYER PROCESS SECTION
        
        Być może masz już za sobą afirmacje, wizualizacje, medytacje, pracę z przekonaniami, książki albo kursy. Wiele z tych rzeczy może być wartościowych. Tyle że jedna metoda rzadko odpowiada na wszystko, co wydarza się w procesie zmiany.
        
        Dlatego stworzyłem Twoją Nową Tożsamość jako 90-dniowy prowadzony proces, który łączy pracę z umysłem, podświadomością, emocjami, ciałem, oddechem, ruchem, energią i codziennym działaniem.
        
        */}
      </div>
    </section>
  );
}
