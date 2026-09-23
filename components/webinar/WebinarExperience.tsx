import React from 'react';

export function WebinarExperience() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden font-sans text-slate-300">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-4xl">
        
        {/* OPENING */}
        <div className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] font-heading font-semibold text-white mb-8 md:mb-10 text-balance">
            Co zrobimy przez te 45 minut, żeby nie skończyło się tylko na kolejnym „to ma sens”?
          </h2>
          <div className="text-lg md:text-xl leading-relaxed space-y-6 max-w-3xl">
            <p>
              Nie chcę dokładać Ci kolejnej rzeczy, którą przez chwilę rozumiesz, a później trudno przełożyć ją na życie.
            </p>
            <p className="font-medium text-slate-100">
              Dlatego nie będziesz tylko słuchać. Przygotuj kartkę i coś do pisania, bo część najważniejszej pracy wykonasz na własnym przykładzie.
            </p>
          </div>
        </div>

        {/* EDITORIAL PROGRESSION (Vertical Axis) */}
        <div className="relative border-l border-slate-700/60 pl-8 md:pl-12 ml-2 md:ml-4 space-y-20 md:space-y-32 py-2">
          
          {/* PART A: OWN MAP */}
          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-3 w-2 h-2 rounded-full bg-slate-500 ring-4 ring-slate-900"></div>
            
            <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-heading font-medium text-white mb-8 leading-[1.3] text-balance">
              Po czym poznać, że naprawdę zmierzasz w stronę życia, którego chcesz, zanim pojawi się końcowy rezultat?
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
              <p>
                W trakcie nagrania zbudujesz własną mapę, która połączy życie, którego naprawdę chcesz, z tym, co dzieje się dziś w Twoim życiu.
              </p>
              <p>
                Ma Ci dać konkretny punkt odniesienia na moment, kiedy początkowa energia minie i znowu trzeba będzie podejmować decyzje w zwykłych sytuacjach.
              </p>
              
              {/* Curiosity Anchor */}
              <div className="my-10 md:my-12">
                <p className="text-xl md:text-2xl font-heading text-white font-medium leading-relaxed pl-6 border-l-2 border-primary/60">
                  Jest w tym ćwiczeniu jeden szczególnie ważny moment: pozwala zobaczyć coś, co bardzo łatwo przeoczyć, jeśli zmianę oceniasz głównie przez to, czy końcowy rezultat już się pojawił.
                </p>
              </div>
              
              <p>
                Dzięki temu po nagraniu masz przed sobą coś, do czego możesz wracać, kiedy znowu pojawi się pytanie: „czy ja naprawdę idę w stronę życia, którego chcę?”.
              </p>
            </div>
          </div>

          {/* PART B: KNOWING VS DOING */}
          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-3 w-2 h-2 rounded-full bg-slate-500 ring-4 ring-slate-900"></div>
            
            <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-heading font-medium text-white mb-8 leading-[1.3] text-balance">
              Dlaczego coś może być dla Ciebie całkowicie jasne… aż do chwili, w której naprawdę trzeba to zrobić?
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
              <p>
                Brak oczekiwanego efektu to jedna strona tego problemu.
              </p>
              <p className="mb-8">
                Druga pojawia się wtedy, kiedy wcale nie brakuje Ci wiedzy.
              </p>
              
              {/* Scannable without being typical bullet points */}
              <div className="space-y-5 my-10 pl-6 border-l-2 border-slate-700/50">
                <p>
                  <span className="font-semibold text-slate-100">Wiesz</span>, że chcesz powiedzieć „nie”, ale się zgadzasz.
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Wiesz</span>, że trzeba wykonać telefon, wysłać ofertę albo pokazać swoją pracę, ale odkładasz to kolejny dzień.
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Wiesz</span>, że potrzebujesz odpoczynku, a mimo to nie potrafisz przestać czegoś robić.
                </p>
              </div>
              
              <p>
                I wtedy pojawia się bardzo proste pytanie:
              </p>
            </div>
            
            {/* Central Question */}
            <div className="py-12 md:py-16 text-center md:text-left max-w-3xl">
              <p className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-medium text-white leading-tight">
                „Skoro wiem, co chcę zrobić inaczej, dlaczego w tym konkretnym momencie tego nie robię?”
              </p>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
              <p>
                W nagraniu pokażę Ci, dlaczego to samo „nie robię” nie zawsze oznacza to samo i co warto wtedy sprawdzić, zanim uznasz, że po prostu brakuje Ci dyscypliny albo że trzeba znaleźć kolejną „blokadę”.
              </p>
            </div>
          </div>
          
          {/* CURIOSITY QUESTIONS & PRACTICE */}
          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-3 w-2 h-2 rounded-full bg-slate-500 ring-4 ring-slate-900"></div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pb-10">
              <div className="border-t border-slate-700/60 pt-6">
                <h4 className="text-xl md:text-2xl font-heading text-slate-100 leading-snug">
                  Dlaczego odpoczywam, a napięcie wcale nie znika?
                </h4>
              </div>
              <div className="border-t border-slate-700/60 pt-6 md:mt-12">
                <h4 className="text-xl md:text-2xl font-heading text-slate-100 leading-snug">
                  Dlaczego cały czas czuję, że muszę coś jeszcze zrobić?
                </h4>
              </div>
            </div>
            
            <div className="mt-4 space-y-6 text-lg leading-relaxed max-w-2xl">
              <p>
                Porozmawiamy też o tym, dlaczego czasem problem nie polega na tym, że nie wiesz, co zrobić.
              </p>
              <p>
                I zrobimy bardzo krótką praktykę, żebyś mógł <span className="font-semibold text-slate-100">sprawdzić to na sobie zamiast tylko przyjąć moje słowa</span>.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
