export function PostWebinarFinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#1E293B] text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">

        {/* HEADLINE */}
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-12">
          Jeśli to jest życie, które naprawdę chcesz tworzyć, możesz zacząć tę drogę dziś.
        </h2>

        {/* COPY */}
        <div className="text-[19px] md:text-[21px] text-slate-300 font-light leading-[1.8] space-y-6 mb-16 mx-auto max-w-3xl">
          <p>
            Przez 90 dni będę prowadził Cię przez kolejne kroki, praktyki i momenty powrotu.
          </p>
          <p>
            To, co dzisiaj jest kierunkiem i wizją, będziesz sprawdzać w codzienności: <span className="font-medium text-white">w tym, jak myślisz, czujesz, reagujesz, wybierasz i działasz.</span>
          </p>
          <p>
            Po drodze pojawi się również lęk, zwątpienie, gorszy dzień i stare reakcje. To właśnie tam proces spotyka prawdziwe życie.
          </p>
          <p>
            Mogę dać Ci kolejność, różne sposoby pracy, prowadzenie i regularny punkt powrotu. Z czasem budujesz własne doświadczenie tego, co naprawdę Ci służy.
          </p>
          <p className="font-bold text-white text-[22px] md:text-[26px] mt-10 pt-4">
            Ty nadal wykonujesz swoją część.
          </p>
        </div>

        {/* PRICING & TIMER SUMMARY */}
        <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl mb-12 mx-auto max-w-2xl">
          <p className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-6">
            SPECJALNE WARUNKI PO WEBINARZE SĄ DOSTĘPNE JESZCZE PRZEZ:
          </p>
          <div className="mb-10">
            <div className="inline-block bg-[#1E293B] text-[#C29B57] px-6 py-3 rounded-md border border-[#C29B57]/30 text-2xl md:text-3xl font-bold tracking-widest shadow-inner">
              <div className="ddio_countdown_wrap"></div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-heading text-3xl md:text-4xl text-white font-bold">
              997 zł jednorazowo
            </p>
            <p className="text-slate-500 font-medium italic text-lg">lub</p>
            <p className="font-heading text-3xl md:text-4xl text-white font-bold">
              397 zł <span className="text-[22px] font-medium text-slate-300">/ miesiąc, maksymalnie 3 płatności</span>
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni33.html"
            className="inline-flex w-full md:w-auto items-center justify-center px-8 md:px-12 py-5 md:py-6 bg-[#C29B57] text-white hover:bg-[#b08945] text-lg md:text-[19px] font-bold tracking-wider uppercase transition-all rounded-md shadow-[0_0_20px_rgba(194,155,87,0.3)] mb-6"
          >
            DOŁĄCZAM DO PEŁNEGO PROGRAMU
          </a>
          <p className="text-sm md:text-base text-slate-400 font-light">
            90 dni procesu • od 397 zł miesięcznie lub 997 zł jednorazowo • 5 miesięcy dostępu
          </p>
        </div>

      </div>
    </section>
  );
}
