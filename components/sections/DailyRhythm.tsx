export function DailyRhythm() {
  return (
    <section id="codziennosc" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col">
        
        {/* H2 */}
        <div className="mb-20 md:mb-24 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] leading-[1.15]">
            Każdego dnia dostajesz kolejny krok, zamiast całej biblioteki do samodzielnego układania.
          </h2>
        </div>

        {/* RYTM TYGODNIA */}
        <div className="mb-24 md:mb-32">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-12 md:mb-16">
            Podstawowy rytm tygodnia jest prosty: pracę mindsetową przeplatam z praktyką, a 7. dzień zostawiam na introspekcję i integrację.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-16 gap-x-8">
            
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 1</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">MINDSET</span>
              <span className="text-sm text-slate-500 font-light leading-snug">film / materiał mindsetowy</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 2</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">PRAKTYKA</span>
              <span className="text-sm text-slate-500 font-light leading-snug">praktyka prowadzona</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 3</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">MINDSET</span>
              <span className="text-sm text-slate-500 font-light leading-snug">film / materiał mindsetowy</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 4</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">PRAKTYKA</span>
              <span className="text-sm text-slate-500 font-light leading-snug">praktyka prowadzona</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 5</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">MINDSET</span>
              <span className="text-sm text-slate-500 font-light leading-snug">film / materiał mindsetowy</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 6</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">PRAKTYKA</span>
              <span className="text-sm text-slate-500 font-light leading-snug">praktyka prowadzona</span>
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest mb-3 uppercase">Dzień 7</span>
              <span className="font-heading text-lg md:text-xl text-[#1E293B] font-medium mb-1">INTROSPEKCJA</span>
              <span className="text-sm text-slate-500 font-light leading-snug">zatrzymanie + integracja tygodnia</span>
            </div>

          </div>
          <p className="text-xs md:text-sm text-slate-400 font-light mt-12 md:mt-16">
            Praktyki mogą mieć formę pracy z oddechem, połączenia oddechu z ruchem, medytacji lub autohipnozy.
          </p>
        </div>

        {/* FACTS STRIP & 3 BLOKI */}
        <div className="pt-16 md:pt-24 border-t border-slate-200 mb-16 md:mb-24">
          
          <div className="flex flex-wrap items-center gap-x-3 md:gap-x-5 gap-y-3 text-sm md:text-base font-medium text-[#1E293B] tracking-wide mb-16 md:mb-24">
            <span>8–45 min</span>
            <span className="text-[#C29B57] opacity-70">•</span>
            <span>średnio ok. 30 min</span>
            <span className="text-[#C29B57] opacity-70">•</span>
            <span>39 materiałów mindsetowych</span>
            <span className="text-[#C29B57] opacity-70">•</span>
            <span>39 prowadzonych praktyk</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest uppercase mb-4">Prowadzenie</span>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4">
                Nie musisz każdego dnia zastanawiać się, co teraz robić. Otrzymujesz kolejny krok i mail, który krótko wprowadza Cię w temat oraz podpowiada, czy warto przygotować zeszyt, miejsce do ruchu albo spokojniejsze warunki.
              </p>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Mail przychodzi codziennie o tej samej godzinie i minucie, o której został uruchomiony Twój dostęp.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest uppercase mb-4">Integracja</span>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                Co 7. dzień zatrzymujesz się i sprawdzasz, co naprawdę dzieje się w Twoim życiu. W 12 pełnych tygodniach masz 12 takich introspekcji, a po 90 dniach jeszcze jedną, końcową.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#C29B57] tracking-widest uppercase mb-4">Praktyka</span>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                Nie tylko słyszysz o oddechu, ruchu, medytacji czy pracy ze stanem. Regularnie przechodzisz przez prowadzone doświadczenia i sprawdzasz je na sobie.
              </p>
            </div>

          </div>
        </div>

        {/* POWRÓT */}
        <div className="pt-12 md:pt-16 border-t border-slate-200 mb-16 md:mb-24">
          <div className="max-w-4xl mb-16 md:mb-24">
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#1E293B] font-normal leading-[1.15] mb-8">
              Jeśli wypadniesz z rytmu, wracasz.
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              <p>
                90 dni to kierunek procesu, nie test perfekcyjnej regularności. Możesz potrzebować więcej czasu, zatrzymać się przy którymś materiale albo zrobić kilka dni przerwy.
              </p>
              <p className="font-medium text-[#1E293B]">
                Masz 5 miesięcy dostępu, więc po prostu wracasz i idziesz dalej.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-xs md:text-sm text-[#C29B57] font-bold tracking-widest uppercase mb-6 md:mb-8">
              UCZESTNICZKA PO PROGRAMIE
            </p>
            <div className="pl-6 md:pl-8 border-l border-slate-300">
              <p className="font-heading text-xl md:text-2xl text-[#1E293B] font-normal leading-snug">
                „Przeszłam cały program, okej, zajęło mi to około 100 dni, ale przeszłam go do końca. I to już samo w sobie jest dla mnie dużą zmianą.”
              </p>
            </div>
          </div>
        </div>

        {/* TODO — DEFERRED TESTIMONIAL FOR LATER DELIVERY / RHYTHM PROOF 
            "Ten codzienny rytuał, mail od Ciebie, nowe nagranie i ciekawość, co będzie następnego dnia, po prostu stały się częścią mojego dnia." 
        */}

      </div>
    </section>
  );
}
