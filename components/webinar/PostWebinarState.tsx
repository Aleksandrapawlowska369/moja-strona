export function PostWebinarState() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col">
        {/* H2 */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] leading-[1.15]">
            Ten sam dzień może wyglądać zupełnie inaczej w zależności od tego, z jakiego stanu w niego wchodzisz.
          </h2>
        </div>

        {/* Copy */}
        <div className="space-y-6 md:space-y-8 text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] max-w-3xl mb-16 md:mb-20">
          <p>
            Możesz wejść w trudną rozmowę z napięcia, lęku i potrzeby obrony.
          </p>
          <p>
            Możesz też wejść w nią z większym spokojem, kontaktem ze sobą i przestrzenią na świadomą odpowiedź.
          </p>
          <p>
            Sytuacja może być ta sama.
          </p>
          <p>
            Ale to, z jakiego miejsca w nią wchodzisz, wpływa na to, co zauważasz, jak reagujesz i jakie decyzje podejmujesz.
          </p>
        </div>

        {/* Contrast Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-24">
          <div className="flex flex-col border-l-4 border-slate-200 pl-6 md:pl-8">
            <h3 className="text-sm md:text-base font-bold text-slate-500 tracking-[0.15em] uppercase mb-8">
              KIEDY WCHODZĘ Z:
            </h3>
            <div className="space-y-5 text-[20px] md:text-[24px] text-slate-400 font-normal">
              <p>napięcia</p>
              <p>lęku</p>
              <p>potrzeby obrony</p>
            </div>
          </div>

          <div className="flex flex-col border-l-4 border-[#C29B57] pl-6 md:pl-8">
            <h3 className="text-sm md:text-base font-bold text-[#C29B57] tracking-[0.15em] uppercase mb-8">
              KIEDY JEST WE MNIE WIĘCEJ:
            </h3>
            <div className="space-y-5 text-[20px] md:text-[24px] text-[#0F172A] font-bold">
              <p>spokoju</p>
              <p>kontaktu ze sobą</p>
              <p>przestrzeni na świadomą odpowiedź</p>
            </div>
          </div>
        </div>

        {/* Wyróżnione zdanie */}
        <div className="mb-8">
          <p className="text-[22px] md:text-[26px] font-medium text-[#1E293B] tracking-wide">
            Dlatego w programie pracujemy również ze stanem i energią.
          </p>
        </div>

        {/* Body */}
        <div className="text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] max-w-3xl">
          <p>
            Poprzez oddech, ruch, medytację, uwagę, emocje i intencję uczysz się coraz lepiej zauważać, co dzieje się z Tobą w różnych momentach i doświadczać różnych sposobów powrotu do większego spokoju, przestrzeni, zaufania i otwartości.
          </p>
        </div>

        {/* Anchor */}
        <div className="my-20 md:my-28 pt-16 md:pt-24 border-t border-slate-200">
          <p className="font-heading text-3xl md:text-5xl lg:text-[52px] text-[#1E293B] font-medium leading-[1.2] md:leading-[1.15] mb-8">
            Nie musisz cały czas czuć się dobrze.
          </p>
          <div className="space-y-6 md:space-y-8 text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] max-w-3xl">
            <p>
              Lęk, złość, napięcie, zmęczenie czy zwątpienie również są częścią życia.
            </p>
            <p>
              Chodzi o to, żeby coraz lepiej znać siebie także w tych momentach i mieć więcej przestrzeni na wybór tego, z jakiego miejsca chcesz dalej żyć, działać i tworzyć.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
