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

        {/* 2. Dwa krótkie akapity (Body 1) */}
        <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          <p>
            Możesz wejść w trudną rozmowę z napięcia, lęku i potrzeby obrony. Możesz też wejść w nią z większym spokojem, kontaktem ze sobą i przestrzenią na świadomą odpowiedź.
          </p>
          <p>
            Sytuacja może być ta sama. Ale to, <span className="font-medium text-slate-700">z jakiego miejsca w nią wchodzisz</span>, wpływa na to, co zauważasz, jak reagujesz i jakie decyzje podejmujesz.
          </p>
        </div>

        {/* 3. Wyróżnione zdanie o stanie i energii */}
        <div className="my-16 md:my-24">
          <p className="text-xl md:text-2xl font-medium text-[#1E293B] tracking-wide">
            Dlatego w programie pracujemy również ze stanem i energią.
          </p>
        </div>

        {/* 4. Kolejny krótki akapit (Body 2) */}
        <div className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          <p>
            Poprzez oddech, ruch, medytację, uwagę, emocje i intencję uczysz się coraz lepiej zauważać, co dzieje się z Tobą w różnych momentach i doświadczać różnych sposobów powrotu do większego spokoju, przestrzeni, zaufania i otwartości.
          </p>
        </div>

        {/* 5. Duży anchor */}
        <div className="my-24 md:my-32 pt-16 md:pt-24 border-t border-slate-200">
          <p className="font-heading text-3xl md:text-5xl lg:text-[52px] text-[#1E293B] font-normal leading-[1.2] md:leading-[1.15]">
            Nie musisz cały czas czuć się dobrze.
          </p>
        </div>

        {/* 6. Krótkie domknięcie */}
        <div className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          <p>
            Lęk, złość, napięcie, zmęczenie czy zwątpienie również są częścią życia. Ważne jest to, żeby coraz lepiej znać siebie także w tych momentach i mieć więcej przestrzeni na wybór tego, z jakiego miejsca chcesz dalej żyć, działać i tworzyć.
          </p>
        </div>
        
      </div>
    </section>
  );
}
