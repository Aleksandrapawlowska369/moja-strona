export function WebinarHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-4xl text-center flex flex-col items-center">
        
        {/* Eyebrow & H1 */}
        <div className="space-y-6 md:space-y-8">
          <span className="inline-block text-primary font-sans font-semibold tracking-widest text-xs uppercase">
            Świadoma kreacja w prawdziwym życiu
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.15] font-heading font-medium text-text-light text-balance mx-auto">
            Jak naprawdę chcesz żyć? I dlaczego mimo prób wciąż jeszcze tak nie żyjesz?
          </h1>
        </div>

        {/* Value Body */}
        <div className="mt-10 md:mt-12 max-w-3xl font-sans text-slate-300 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            Bezpłatne, około 45-minutowe nagranie, podczas którego uporządkujesz własny kierunek i przyjrzysz się temu, dlaczego można wiedzieć, czego się chce, pracować nad zmianą, a mimo to nadal nie widzieć jej tam, gdzie najbardziej na nią czekasz.
          </p>
          <p>
            Zrobimy też razem konkretne ćwiczenie, które pomoże Ci spojrzeć na zmianę inaczej niż tylko przez pytanie: „czy mam już efekt?”.
          </p>
        </div>

        {/* Qualification & CTA Block */}
        <div className="mt-12 md:mt-16 w-full max-w-md mx-auto">
          <div className="flex flex-col space-y-6">
            
            <div className="flex items-start gap-3 text-sm text-slate-300 text-left border-l-2 border-primary/40 pl-4">
              <span className="leading-relaxed font-medium">Przygotuj kartkę i coś do pisania. To nie jest nagranie do słuchania w tle.</span>
            </div>
            
            <a 
              href="#webinar-widget"
              className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-sans font-semibold rounded-none hover:bg-white hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase text-center w-full"
            >
              Obejrzyj teraz lub wybierz termin
            </a>
            
          </div>
        </div>

      </div>
    </section>
  );
}
