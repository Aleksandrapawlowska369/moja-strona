import React from 'react';

export function WebinarFinalInvitation() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-slate-950 text-slate-300 font-sans overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-6xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: H2 */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.25] font-heading font-medium text-white text-balance lg:sticky lg:top-32">
              Wiesz, że chcesz żyć inaczej. Co dzieje się pomiędzy tym pragnieniem a życiem, które masz dzisiaj?
            </h2>
          </div>
          
          {/* RIGHT: BODY & CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-10 md:space-y-12">
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Jeśli masz za sobą próby, po których przez chwilę coś ruszało, a później znowu pojawiało się poczucie, że wracasz do punktu wyjścia, warto przyjrzeć się temu jeszcze raz z trochę innej strony.
            </p>
            
            {/* Synthesis paragraph */}
            <div className="pt-6 md:pt-8 border-t border-slate-800/60">
              <p className="text-xl md:text-[1.35rem] font-medium text-slate-100 leading-relaxed">
                W trakcie nagrania uporządkujesz własny kierunek, zbudujesz mapę, do której możesz później wracać i przyjrzysz się zarówno temu, dlaczego czasem nie widzisz jeszcze rezultatu, na który czekasz, jak i temu, co dzieje się w konkretnych momentach, kiedy wiesz, co chcesz zrobić inaczej, ale tego nie robisz.
              </p>
            </div>
            
            {/* Belief / Experience Reset */}
            <div className="py-6 md:py-8 pl-6 md:pl-8 border-l-2 border-primary/60 mt-4 md:mt-8">
              <p className="text-xl md:text-[1.65rem] font-heading font-medium text-white leading-snug mb-4">
                Nie musisz przyjmować żadnej teorii na wiarę.
              </p>
              <p className="text-lg md:text-xl text-slate-300 font-medium">
                Przygotuj kartkę i sprawdź to na własnym przykładzie.
              </p>
            </div>
            
            {/* CTA + Microcopy */}
            <div className="pt-4 md:pt-8">
              <a 
                href="#webinar-widget"
                className="inline-flex justify-center items-center px-8 py-5 bg-primary text-white font-sans font-semibold rounded-none hover:bg-white hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase text-center w-full md:w-auto md:min-w-[360px]"
              >
                Obejrzyj teraz lub wybierz termin
              </a>
              <p className="mt-5 text-sm text-slate-500 font-medium tracking-wide">
                Nagranie trwa około 45 minut.
              </p>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
