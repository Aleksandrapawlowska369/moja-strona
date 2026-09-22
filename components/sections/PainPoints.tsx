import { DiscoveryLink } from '../DiscoveryLink';

export function PainPoints() {
  return (
    <section id="termostat" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col">
        
        {/* H2 + LEAD */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] mb-6 leading-[1.15]">
            Zanim zaczniesz coś zmieniać, chcę Ci zadać jedno pytanie: jak naprawdę chcesz żyć?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-light">
            Nie tylko: co chcesz mieć.
          </p>
        </div>

        {/* PYTANIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-10 text-xl md:text-2xl text-slate-700 font-normal leading-relaxed mb-24 md:mb-40">
          <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-3.5 mr-4 shrink-0 opacity-80"></span>Jak chcesz czuć się ze sobą?</p>
          <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-3.5 mr-4 shrink-0 opacity-80"></span>Jak reagować w trudnej rozmowie?</p>
          <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-3.5 mr-4 shrink-0 opacity-80"></span>Jak podejmować decyzje bez stuprocentowej pewności?</p>
          <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-3.5 mr-4 shrink-0 opacity-80"></span>Jak traktować siebie po błędzie?</p>
          <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-3.5 mr-4 shrink-0 opacity-80"></span>Jakie standardy mają być dla Ciebie naturalne?</p>
          <p className="flex items-start"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mt-3.5 mr-4 shrink-0 opacity-80"></span>Na co nie chcesz się już zgadzać?</p>
        </div>

        {/* KIERUNEK */}
        <div className="max-w-2xl mb-24 md:mb-32 space-y-6 mt-8 md:mt-16">
          <p className="text-xl md:text-2xl font-medium text-[#1E293B] tracking-wide">
            Świadoma kreacja potrzebuje kierunku.
          </p>
          <div className="space-y-4 text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            <p>
              Bez niego łatwo realizować cudze oczekiwania albo pracować nad sobą bez własnego punktu odniesienia.
            </p>
            <p>
              Dlatego w programie wracasz do pytania:
            </p>
          </div>
        </div>

        {/* GŁÓWNY MOMENT SEKCJI */}
        <div className="flex justify-center mb-24 md:mb-32">
          <div className="relative max-w-4xl text-center px-4 md:px-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-12 md:-mt-16 w-px h-8 bg-slate-300"></div>
            <p className="font-heading text-3xl md:text-5xl text-[#1E293B] font-normal leading-snug md:leading-tight">
              „Jakiego życia naprawdę pragnę i kim jestem, kiedy żyję bardziej w zgodzie z tym życiem?”
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-12 md:-mb-16 w-px h-8 bg-slate-300"></div>
          </div>
        </div>

        {/* DOMKNIĘCIE */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            Nowa tożsamość nie jest maską. To jednocześnie rozwijanie nowych sposobów reagowania i wracanie do tego, co naprawdę Twoje.
          </p>
        </div>

        <DiscoveryLink 
          href="#pojemnosc" 
          text="CO DZIEJE SIĘ POMIĘDZY „WIEM, JAK CHCĘ ŻYĆ” A TYM, CO ROBIĘ W TRUDNYM MOMENCIE?"
          theme="dark"
        />

      </div>
    </section>
  );
}
