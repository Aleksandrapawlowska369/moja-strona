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
        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-20 md:mb-28">
          Po tych 90 dniach nie chcę, żeby każda kolejna trudniejsza sytuacja wymagała mojego prowadzenia. Chcę, żeby zostały z Tobą praktyki, własne dowody, coraz lepsze rozpoznawanie swoich automatycznych reakcji, umiejętność wracania po potknięciu i sposoby pracy, które naprawdę znasz z własnego doświadczenia.
        </p>

        {/* TESTIMONIAL */}
        <div className="mb-20 md:mb-28">
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
