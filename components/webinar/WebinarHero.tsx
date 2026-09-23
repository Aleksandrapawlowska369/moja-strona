import { WebivioWidget } from './WebivioWidget';

export function WebinarHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      
      {/* Subtle blurs for premium feel */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-start">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            <div className="space-y-6">
              <span className="inline-block text-primary font-sans font-semibold tracking-widest text-xs uppercase">
                Świadoma kreacja w prawdziwym życiu
              </span>
              <h1 className="text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.5rem] leading-[1.15] md:leading-[1.2] font-heading font-medium text-text-light max-w-3xl">
                Jak naprawdę chcesz żyć? I dlaczego możesz dokładnie wiedzieć, co chcesz zrobić inaczej, a w konkretnej sytuacji i tak tego nie zrobić?
              </h1>
            </div>

            <div className="font-sans text-slate-300 text-lg md:text-xl leading-relaxed space-y-6 max-w-2xl">
              <p>
                Być może masz już bardzo konkretną wizję. A może po prostu coraz mocniej czujesz, że chcesz od życia czegoś więcej: więcej swobody, spokoju, odwagi, bliskości, pieniędzy albo zwyczajnie poczucia, że żyjesz po swojemu.
              </p>
              <p>
                I być może wcale nie zaczynasz od zera.
              </p>
              <p>
                Możliwe, że masz za sobą książki, afirmacje, medytacje, pracę z przekonaniami, próby zmiany nawyków albo momenty, w których naprawdę wydawało Ci się, że tym razem coś ruszyło.
              </p>
              <p>
                A potem wystarczy jedna konkretna sytuacja.
              </p>
              <p>
                Ktoś mówi coś, co trafia w czuły punkt. Masz postawić granicę, wysłać wiadomość, której od kilku dni unikasz, pokazać swoją pracę albo zrobić coś, przy czym nie masz żadnej gwarancji, że wszystko pójdzie dobrze.
              </p>
              <p>
                I nagle to, co jeszcze chwilę wcześniej wydawało się całkiem jasne, okazuje się dużo trudniejsze do zrobienia niż do zrozumienia.
              </p>
              
              <p className="text-lg md:text-xl text-text-light font-medium border-l-2 border-primary pl-6 py-2 my-8">
                Właśnie temu momentowi chcę się przyjrzeć w tym nagraniu.
              </p>

              <p>
                Zrobimy też razem konkretne ćwiczenie, które pomoże Ci spojrzeć na zmianę inaczej niż tylko przez pytanie: „czy mam już efekt?”.
              </p>
            </div>

            <div className="pt-4">
              <div className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl w-fit flex flex-col space-y-6">
                <div className="flex items-start gap-4 text-sm text-slate-300">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="max-w-[320px] leading-relaxed">Nagranie trwa około 45 minut. Możesz obejrzeć je od razu albo wybrać dogodny termin.</span>
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

          {/* Right Column - Widget */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 lg:sticky lg:top-32 w-full max-w-[500px] mx-auto lg:max-w-none">
            <div className="mb-6">
              <p className="text-slate-300 font-medium text-[15px] tracking-wide text-center">
                Obejrzyj od razu albo wybierz dogodny termin.
              </p>
            </div>
            <div className="relative z-20">
              {/* Glassmorphism backing for premium feel */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl transform translate-y-3 translate-x-3 hidden md:block"></div>
              <div className="relative bg-[#111111] border border-white/[0.1] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <WebivioWidget />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
