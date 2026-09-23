import React from 'react';

export function WebinarCommitment() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden font-sans">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-4xl">
        
        {/* H2 */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-medium text-slate-900 leading-[1.2]">
            Jak najwięcej wynieść z tego nagrania?
          </h2>
        </div>

        <div className="space-y-12 md:space-y-14 text-slate-700">
          
          {/* Opening / Attention Reset */}
          <div>
            <p className="text-2xl md:text-3xl font-heading font-medium text-slate-900 leading-snug">
              To nie jest materiał, który warto po prostu włączyć w tle.
            </p>
          </div>

          {/* Practical Commitment */}
          <div className="pl-6 md:pl-8 border-l-2 border-primary/50 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-slate-800">
              W kilku momentach będziemy pracować na tym, co zapiszesz na własnej kartce. Przygotuj więc kartkę albo notes, coś do pisania i około 45 minut względnego spokoju.
            </p>
          </div>

          {/* Reduce friction */}
          <div className="max-w-2xl text-lg leading-relaxed">
            <p>
              Nie musisz niczego wcześniej wiedzieć ani przygotowywać.
            </p>
          </div>

          {/* Now vs Later */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-slate-200/60">
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-slate-800">
                Jeśli masz tę przestrzeń teraz, możesz zacząć od razu.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-slate-700">
                Jeśli nie, wybierz termin, w którym naprawdę będziesz mieć czas, żeby nie tylko słuchać, ale też zrobić ćwiczenie razem ze mną.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <a 
              href="#webinar-widget"
              className="inline-flex justify-center items-center px-8 py-5 bg-primary text-white font-sans font-semibold rounded-none hover:bg-slate-900 transition-colors duration-300 text-sm tracking-wider uppercase text-center w-full md:w-auto md:min-w-[360px]"
            >
              Obejrzyj teraz lub wybierz termin
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
