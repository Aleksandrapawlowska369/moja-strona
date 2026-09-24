export function PostWebinarOffer() {
  return (
    <section id="oferta" className="py-24 md:py-32 bg-[#0F172A] text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* H2 */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-6">
            SPECJALNA CENA PO WEBINARZE
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-8">
            Jeśli chcesz przejść tę drogę ze mną, możesz zacząć dziś.
          </h2>
          <div className="text-[19px] md:text-[21px] text-slate-300 font-light leading-[1.8] max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            <p>
              <span className="font-medium text-white">Po obejrzeniu webinaru do końca masz 48 godzin, żeby dołączyć</span> do pełnego 90-dniowego procesu na specjalnych warunkach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center pt-2">
              <span className="font-medium text-white text-[20px] md:text-[22px] sm:mr-4 mb-3 sm:mb-0">
                Te ceny są dostępne jeszcze przez:
              </span>
              <div className="inline-block bg-[#1E293B] text-[#C29B57] px-4 py-2 rounded-md border border-[#C29B57]/30 text-xl md:text-2xl font-bold tracking-widest shadow-inner">
                <div className="ddio_countdown_wrap"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CENNIK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-4xl mx-auto">
          
          {/* JEDNORAZOWA */}
          <a
            href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni33.html"
            className="block bg-white text-slate-900 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-200 flex flex-col h-full hover:shadow-2xl transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C29B57]/50"
          >
            <h3 className="font-heading text-lg md:text-xl font-bold text-slate-500 tracking-wider uppercase mb-6">
              PŁATNOŚĆ JEDNORAZOWA
            </h3>
            
            <div className="mb-8">
              <p className="text-xl text-slate-400 line-through mb-2">1497 zł brutto</p>
              <p className="font-heading text-5xl md:text-6xl font-bold text-[#1E293B]">
                997 zł <span className="text-2xl font-medium text-slate-500">brutto</span>
              </p>
            </div>
            
            <div className="mt-auto">
              <p className="text-lg text-slate-700 leading-[1.6]">
                Najkorzystniejsza cenowo forma dołączenia w tym 48-godzinnym oknie.
              </p>
            </div>
          </a>

          {/* MIESIĘCZNA */}
          <a
            href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni33.html"
            className="block bg-[#1E293B] text-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-700 flex flex-col h-full hover:shadow-2xl hover:border-slate-500 transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C29B57]/50"
          >
            <h3 className="font-heading text-lg md:text-xl font-bold text-[#C29B57] tracking-wider uppercase mb-6">
              PŁATNOŚĆ MIESIĘCZNA
            </h3>
            
            <div className="mb-8">
              <p className="text-xl text-slate-400 line-through mb-2">597 zł / miesiąc</p>
              <p className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">
                397 zł <span className="text-2xl font-medium text-slate-300">/ miesiąc</span>
              </p>
              <p className="text-base font-bold text-[#C29B57] uppercase tracking-wide">
                maksymalnie 3 płatności
              </p>
            </div>
            
            <div className="mt-auto space-y-4 text-base md:text-[17px] text-slate-300 leading-[1.6] font-light">
              <p>
                Pierwsza płatność uruchamia dostęp.
              </p>
              <p>
                Kolejne płatności pobierane są co miesiąc, maksymalnie 3 razy łącznie.
              </p>
              <p>
                Przy 3 płatnościach łączny koszt programu wynosi <span className="font-medium text-white">1191 zł brutto</span>.
              </p>
            </div>
          </a>

        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-24 text-center">
          <a
            href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni33.html"
            className="inline-flex w-full md:w-auto items-center justify-center px-8 md:px-12 py-5 bg-[#C29B57] text-white hover:bg-[#b08945] text-base md:text-[17px] font-bold tracking-wider uppercase transition-all rounded-md shadow-[0_0_20px_rgba(194,155,87,0.3)] mb-6"
          >
            WYBIERAM SPOSÓB PŁATNOŚCI I DOŁĄCZAM
          </a>
          <p className="text-base md:text-lg text-slate-400 font-light italic">
            Na następnej stronie wybierzesz płatność jednorazową 997 zł albo miesięczną 397 zł, maksymalnie 3 płatności.
          </p>
        </div>

        {/* RATY & DISCLAIMER */}
        <div className="max-w-2xl mx-auto pt-20">
          <div className="mb-16 text-center">
            <h4 className="font-heading text-xl md:text-2xl text-slate-300 font-medium mb-6">
              Chcesz wybrać cenę 997 zł i rozłożyć płatność na raty?
            </h4>
            <div className="text-[17px] md:text-[19px] text-slate-400 font-light leading-[1.8] space-y-6">
              <p>
                Przy płatności jednorazowej możesz dodatkowo sprawdzić dostępne możliwości rozłożenia 997 zł przez TubaPay lub raty bankowe dostępne w Przelewy24.
              </p>
              <p>
                Aktualne warianty rat, wysokość poszczególnych płatności i ostateczny koszt finansowania zobaczysz po wybraniu odpowiedniej metody płatności.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 text-center border border-slate-700">
            <p className="text-[19px] md:text-[21px] text-white font-medium leading-[1.6]">
              Program nie znika po 48 godzinach. Kończy się tylko specjalna cena dostępna po obejrzeniu webinaru.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
