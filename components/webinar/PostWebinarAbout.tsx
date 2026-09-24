import Image from 'next/image';

export function PostWebinarAbout() {
  return (
    <section id="o-przemyslawie" className="pt-16 md:pt-24 pb-16 md:pb-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* MOBILE H2 & LABEL */}
        <div className="lg:hidden mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1E293B] leading-[1.15] mb-4">
            Stworzyłem ten program po to, żeby Twoja droga nie musiała być tak trudna jak moja.
          </h2>
          <p className="text-xs md:text-sm text-[#C29B57] font-bold tracking-widest uppercase">
            PRZEMYSŁAW KRUPSKI
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-16 md:mb-24">
          
          {/* PHOTO COLUMN */}
          <div className="w-full lg:w-[45%]">
            <div className="aspect-[4/5] lg:aspect-[3/4] w-full relative rounded-xl overflow-hidden shadow-xl bg-slate-100">
              <Image 
                src="/przemek-krupski.jpeg" 
                alt="Przemysław Krupski" 
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* TEXT COLUMN - PART 1 */}
          <div className="w-full lg:w-[55%] flex flex-col">
            
            {/* DESKTOP H2 & LABEL */}
            <div className="hidden lg:block mb-12">
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[#1E293B] leading-[1.15] mb-4">
                Stworzyłem ten program po to, żeby Twoja droga nie musiała być tak trudna jak moja.
              </h2>
              <p className="text-sm text-[#C29B57] font-bold tracking-widest uppercase">
                PRZEMYSŁAW KRUPSKI
              </p>
            </div>
            
            <div className="text-[19px] md:text-[21px] text-slate-800 font-light leading-[1.8]">
              <p className="mb-6">
                Przez lata pracowałem w kopalni 1200 metrów pod ziemią.
              </p>
              <p className="mb-6">
                Zostałem sztygarem i na swojej zmianie odpowiadałem za bezpieczeństwo 60 górników.
              </p>
              <p className="mb-6">
                Miałem pozycję, perspektywę awansu i coraz lepsze pieniądze.
              </p>
              <p className="mb-10 font-medium text-[#1E293B]">
                A jednak coraz mocniej czułem, że to nie jest życie, które chcę przeżyć.
              </p>
              <p className="mb-6">
                Odejście nie zaprowadziło mnie od razu do wymarzonego życia.
              </p>
              <p className="mb-10">
                Po drodze były długi, komornicy, upadłość, okres bezdomności, różne prace, próby biznesowe, porażki i kolejne początki.
              </p>
            </div>
            
          </div>
        </div>

        {/* FULL WIDTH COLUMN - PART 2 */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-[19px] md:text-[21px] text-slate-800 font-light leading-[1.8] mb-10 md:mb-12">
            <p className="font-medium text-slate-900 mb-8 md:text-[24px]">
              Przez lata próbowałem zrozumieć, dlaczego można wiedzieć, jak chce się żyć, naprawdę chcieć zmiany, a mimo to w ważnych momentach wracać do tego, co było wcześniej.
            </p>
            <p className="mb-6">
              Nie znalazłem jednej techniki.
            </p>
            <p className="mb-6">
              Z czasem łączyłem pracę z podświadomością, oddechem, medytacją, ciałem i ruchem, emocjami, energią, świadomą kreacją i działaniem.
            </p>
            <p className="mb-10">
              Z tej drogi powstało podejście, które dziś przekazuję dalej.
            </p>
          </div>
          
          <div className="text-[19px] md:text-[21px] text-slate-800 font-light leading-[1.8]">
            <p className="font-medium text-slate-900 mb-6 md:text-[24px]">
              Nie przejdę Twojej drogi za Ciebie.
            </p>
            <p className="mb-6">
              Mogę jednak dać Ci coś, czego mnie długo brakowało: kolejność, prowadzenie, różne sposoby pracy i regularny punkt powrotu.
            </p>
            <p className="mb-6">
              W prowadzeniu ważne są dla mnie spokój, radość, autentyczność i energia.
            </p>
            <p>
              Przez te 90 dni chcę nie tylko przekazywać Ci wiedzę, ale naprawdę prowadzić Cię krok po kroku przez kolejne etapy procesu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
