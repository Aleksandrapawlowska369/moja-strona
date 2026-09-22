export function Rhythm() {
  return (
    <section id="energia" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col">
        
        {/* 1. Duży H2 */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] leading-[1.15]">
            Ten sam dzień może wyglądać zupełnie inaczej w zależności od tego, z jakiego stanu w niego wchodzisz.
          </h2>
        </div>

        {/* 2. Sytuacja może być ta sama - Anchor */}
        <div className="mb-16 md:mb-20">
          <p className="font-heading text-2xl md:text-4xl text-[#1E293B] font-normal leading-snug">
            Sytuacja może być ta sama. Ale to, z jakiego miejsca w nią wchodzisz, wpływa na to, co zauważasz, jak reagujesz i jakie decyzje podejmujesz.
          </p>
        </div>

        {/* 3. Contrast Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-28">
          
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-bold text-[#C29B57] tracking-widest uppercase mb-8 border-b border-slate-200 pb-4">
              WCHODZĘ Z:
            </h3>
            <div className="space-y-4 text-xl md:text-2xl text-slate-400 font-light">
              <p>napięcia</p>
              <p>lęku</p>
              <p>potrzeby obrony</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-bold text-[#1E293B] tracking-widest uppercase mb-8 border-b border-slate-200 pb-4">
              MOGĘ WEJŚĆ Z WIĘKSZYM:
            </h3>
            <div className="space-y-4 text-xl md:text-2xl text-[#1E293B] font-medium">
              <p>spokojem</p>
              <p>kontaktem ze sobą</p>
              <p>miejscem na świadomą odpowiedź</p>
            </div>
          </div>

        </div>

        {/* 4. Wyróżnione zdanie o stanie i energii */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl font-medium text-[#1E293B] tracking-wide">
            Dlatego w programie pracujemy również ze stanem i energią.
          </p>
        </div>

        {/* 5. Kolejny krótki akapit (Body 2) */}
        <div className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          <p>
            Poprzez oddech, ruch, medytację, uwagę, emocje i intencję uczysz się coraz lepiej zauważać, co dzieje się z Tobą w różnych momentach i doświadczać różnych sposobów powrotu do większego spokoju, przestrzeni, zaufania i otwartości.
          </p>
        </div>

        {/* 6. Duży anchor */}
        <div className="my-20 md:my-32 pt-16 md:pt-24 border-t border-slate-200">
          <p className="font-heading text-3xl md:text-5xl lg:text-[52px] text-[#1E293B] font-normal leading-[1.2] md:leading-[1.15] mb-8">
            Nie musisz cały czas czuć się dobrze.
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
            Lęk, złość, napięcie, zmęczenie czy zwątpienie również są częścią życia. Ważne jest to, żeby coraz lepiej znać siebie także w tych momentach i mieć więcej przestrzeni na wybór tego, z jakiego miejsca chcesz dalej żyć, działać i tworzyć.
          </p>
        </div>
        
      </div>
    </section>
  );
}
