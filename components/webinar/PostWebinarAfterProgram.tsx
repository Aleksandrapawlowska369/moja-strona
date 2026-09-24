import { DiscoveryLink } from '../DiscoveryLink';

export function PostWebinarAfterProgram() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-start">
        
        {/* H2 */}
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] leading-[1.15] mb-12 md:mb-16">
          Najbardziej zależy mi na tym, co zostanie z Tobą, kiedy program się skończy.
        </h2>

        {/* BODY */}
        <div className="space-y-6 md:space-y-8 text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] mb-16 md:mb-20 max-w-3xl">
          <p>
            Po tych 90 dniach nie chcę, żeby każda kolejna trudniejsza sytuacja wymagała mojego prowadzenia.
          </p>
          <p>
            Dlatego chcę, żeby zostały z Tobą rzeczy, które znasz już z własnego doświadczenia:
          </p>
        </div>

        {/* 3 PUNKTY - PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 w-full max-w-5xl">
          
          <div className="flex flex-col border-t-2 border-[#C29B57]/40 pt-6">
            <span className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-4">
              WŁASNE DOWODY
            </span>
            <span className="text-lg md:text-xl text-[#1E293B] font-medium leading-[1.6]">
              że możesz reagować i działać inaczej
            </span>
          </div>

          <div className="flex flex-col border-t-2 border-[#C29B57]/40 pt-6">
            <span className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-4">
              SPOSOBY POWROTU
            </span>
            <span className="text-lg md:text-xl text-[#1E293B] font-medium leading-[1.6]">
              które znasz już z własnego doświadczenia
            </span>
          </div>

          <div className="flex flex-col border-t-2 border-[#C29B57]/40 pt-6">
            <span className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-4">
              CORAZ LEPSZE ROZPOZNAWANIE SIEBIE
            </span>
            <span className="text-lg md:text-xl text-[#1E293B] font-medium leading-[1.6]">
              również wtedy, kiedy pojawia się trudniejszy moment
            </span>
          </div>

        </div>

        {/* TESTIMONIAL (Connected to the pillars) */}
        <div className="mb-20 md:mb-24 w-full max-w-5xl bg-slate-50 p-8 md:p-10 rounded-xl border border-slate-200">
          <p className="text-xs md:text-sm text-[#C29B57] font-bold tracking-widest uppercase mb-6">
            UCZESTNICZKA PO PROGRAMIE
          </p>
          <p className="font-heading text-[22px] md:text-[26px] text-[#1E293B] font-medium leading-[1.6] italic">
            „Część z tych praktyk stała się w jakimś sensie moim małym rytuałem. Mam poczucie, że ten program nie zamknął tego procesu, tylko otworzył mi drogę do dalszej pracy ze sobą.”
          </p>
        </div>

        {/* DOMKNIĘCIE */}
        <div className="space-y-6 md:space-y-8 text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] mb-16 md:mb-20 max-w-3xl">
          <p>
            Przez 90 dni prowadzę Cię przez doświadczenie.
          </p>
          <p>
            Potem chcę, żeby to, co naprawdę Ci służy, zostało z Tobą i coraz bardziej stawało się częścią Twojego własnego życia.
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
