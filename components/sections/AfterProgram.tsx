import { DiscoveryLink } from '../DiscoveryLink';

export function AfterProgram() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl flex flex-col items-start">
        
        {/* H2 */}
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] leading-[1.15] mb-12 md:mb-16">
          Najbardziej zależy mi na tym, co zostanie z Tobą, kiedy program się skończy.
        </h2>

        {/* BODY */}
        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-16 md:mb-20">
          Po tych 90 dniach nie chcę, żeby każda kolejna trudniejsza sytuacja wymagała mojego prowadzenia. Zamiast tego zależy mi na tym, żeby po programie zostały z Tobą konkretne rzeczy:
        </p>

        {/* 3 PUNKTY */}
        <div className="space-y-12 md:space-y-16 mb-20 md:mb-28 max-w-2xl border-l border-slate-200 pl-6 md:pl-10 py-2">
          
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-2">
              WŁASNE DOWODY
            </span>
            <span className="text-xl md:text-2xl text-[#1E293B] font-medium leading-relaxed">
              że możesz reagować i działać inaczej
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-2">
              SPOSOBY POWROTU
            </span>
            <span className="text-xl md:text-2xl text-[#1E293B] font-medium leading-relaxed">
              które znasz już z własnego doświadczenia
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-2">
              CORAZ LEPSZE ROZPOZNAWANIE SIEBIE
            </span>
            <span className="text-xl md:text-2xl text-[#1E293B] font-medium leading-relaxed">
              również wtedy, kiedy pojawia się trudniejszy moment
            </span>
          </div>

        </div>

        {/* TESTIMONIAL */}
        <div className="mb-20 md:mb-28 max-w-4xl">
          <p className="text-xs text-[#C29B57]/80 font-bold tracking-widest uppercase mb-6 md:mb-8">
            UCZESTNICZKA PO PROGRAMIE
          </p>
          <div className="pl-6 md:pl-10 border-l border-[#C29B57]/60">
            <p className="font-heading text-xl md:text-3xl text-[#1E293B] font-normal leading-snug">
              „Część z tych praktyk stała się w jakimś sensie moim małym rytuałem. Mam poczucie, że ten program nie zamknął tego procesu, tylko otworzył mi drogę do dalszej pracy ze sobą.”
            </p>
          </div>
        </div>

        {/* DOMKNIĘCIE */}
        <div className="pt-4 md:pt-8 pb-8">
          <p className="font-heading text-xl md:text-3xl text-[#1E293B] font-normal leading-snug">
            Przez 90 dni prowadzę Cię przez doświadczenie. Potem chcę, żeby to, co naprawdę Ci służy, zostało z Tobą i coraz bardziej stawało się częścią Twojego własnego życia.
          </p>
        </div>

        <div className="w-full">
          <DiscoveryLink 
            href="#o-przemyslawie" 
            text="DLACZEGO WŁAŚNIE TAK ZBUDOWAŁEM TEN PROGRAM?"
            theme="dark"
          />
        </div>

      </div>
    </section>
  );
}
