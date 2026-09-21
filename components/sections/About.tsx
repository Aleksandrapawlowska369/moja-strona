import Image from 'next/image';

export function About() {
  return (
    <section id="o-przemyslawie" className="pt-24 md:pt-32 pb-16 md:pb-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* MOBILE H2 & LABEL (Hidden on Desktop) */}
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
            
            {/* DESKTOP H2 & LABEL (Hidden on Mobile) */}
            <div className="hidden lg:block mb-12">
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[#1E293B] leading-[1.15] mb-4">
                Stworzyłem ten program po to, żeby Twoja droga nie musiała być tak trudna jak moja.
              </h2>
              <p className="text-sm text-[#C29B57] font-bold tracking-widest uppercase">
                PRZEMYSŁAW KRUPSKI
              </p>
            </div>
            
            <div className="text-lg text-slate-800 font-light leading-relaxed">
              <p className="mb-8">
                Przez lata pracowałem w kopalni 1200 metrów pod ziemią. Zostałem sztygarem i na swojej zmianie odpowiadałem za bezpieczeństwo 60 górników. Miałem pozycję, perspektywę awansu i coraz lepsze pieniądze. A jednak coraz mocniej czułem, że <span className="font-medium text-[#1E293B]">to nie jest życie, które chcę przeżyć.</span>
              </p>
              
              <p className="mb-12">
                Odejście nie zaprowadziło mnie od razu do wymarzonego życia. Po drodze były długi, komornicy, upadłość, okres bezdomności, różne prace, próby biznesowe, porażki i kolejne początki.
              </p>
              
              <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mt-12 md:mt-16">
                Przez lata próbowałem zrozumieć, dlaczego można wiedzieć, jak chce się żyć, naprawdę chcieć zmiany, a mimo to w ważnych momentach wracać do tego, co było wcześniej.
              </p>
            </div>
            
          </div>
        </div>

        {/* FULL WIDTH COLUMN - PART 2 */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-lg text-slate-900 font-normal leading-relaxed mb-10 md:mb-12">
            <p>
              Nie znalazłem jednej techniki. Z czasem łączyłem pracę z podświadomością, oddechem, medytacją, ciałem i ruchem, emocjami, energią, świadomą kreacją i działaniem.
            </p>
          </div>
          
          <div>
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-10">
              Z tej drogi powstało podejście, które dziś przekazuję dalej. Nie przejdę Twojej drogi za Ciebie. Mogę jednak dać Ci coś, czego mnie długo brakowało: <span className="text-[#1E293B]">kolejność, prowadzenie, różne sposoby pracy i regularny punkt powrotu.</span>
            </p>
            
            <p className="text-lg text-slate-800 font-light leading-relaxed">
              W prowadzeniu ważne są dla mnie spokój, radość, autentyczność i energia. Przez te 90 dni chcę nie tylko przekazywać Ci wiedzę, ale naprawdę Cię prowadzić, krok po kroku, przez kolejne etapy procesu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
