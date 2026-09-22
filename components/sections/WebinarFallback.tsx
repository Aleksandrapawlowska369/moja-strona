import Link from 'next/link';

const WEBINAR_URL = "https://tnt.przeistoczenie.pl/webinar";

export function WebinarFallback() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
        
        {/* EYEBROW */}
        <p className="text-xs md:text-sm font-bold text-[#C29B57] tracking-widest uppercase mb-6 md:mb-8">
          CHCESZ NAJPIERW ZOBACZYĆ, JAK PRACUJĘ?
        </p>
        
        {/* HEADLINE */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-[#1E293B] leading-[1.15] mb-10 md:mb-12 max-w-3xl">
          Obejrzyj bezpłatne nagranie „Świadoma kreacja w prawdziwym życiu”.
        </h2>
        
        {/* BODY */}
        <div className="space-y-6 text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-16 md:mb-20 text-left md:text-center">
          <p>
            Przez około 45 minut przyjrzymy się temu, dlaczego możesz dokładnie wiedzieć, jak chcesz żyć i co chcesz zrobić inaczej, a w konkretnej sytuacji i tak tego nie zrobić.
          </p>
          <p>
            Zrobisz też ze mną ćwiczenie, które pomoże Ci zbudować własny punkt odniesienia i spojrzeć na zmianę szerzej niż tylko przez pytanie: „czy mam już efekt?”.
          </p>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
          <Link 
            href={WEBINAR_URL}
            className="w-full inline-flex items-center justify-center px-8 py-4 md:py-5 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-[#1E293B] text-sm md:text-base font-bold tracking-wider uppercase transition-colors rounded-xl mb-4 shadow-sm"
          >
            OBEJRZYJ BEZPŁATNE NAGRANIE
          </Link>
          <p className="text-sm text-slate-500 font-light text-center">
            Około 45 minut • możesz obejrzeć od razu albo wybrać dogodny termin
          </p>
        </div>

      </div>
    </section>
  );
}
