export function Stages() {
  const stages = [
    {
      number: "ETAP 1",
      title: "Zobaczyć, z jakiego miejsca zaczynasz",
      description: "Kierunek, automatyczne reakcje, przekonania i to, co naprawdę jest Twoje."
    },
    {
      number: "ETAP 2",
      title: "Zrobić miejsce na coś nowego",
      description: "Lęk, trudne emocje, stare wzorce, mechanizmy obronne i relacja ze sobą."
    },
    {
      number: "ETAP 3",
      title: "Ćwiczyć inny sposób reagowania i działania",
      description: "Stan, ciało, przekonania, standardy, decyzje i konkretne ruchy w codziennym życiu."
    },
    {
      number: "ETAP 4",
      title: "Integrować i zabierać dalej to, co naprawdę działa",
      description: "Pragnienia, wizja, świadoma kreacja, własne dowody i praktyki, do których chcesz wracać."
    }
  ];

  return (
    <section id="etapy" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Intro */}
        <div className="text-left mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-10 leading-tight">
            Chciałem dać Ci wiele sposobów pracy, ale nie zostawić Cię z pytaniem: co mam teraz z tym wszystkim zrobić?
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-lg text-slate-600 leading-relaxed max-w-3xl">
            <p>
              W programie nie tylko opowiadam o praktykach. Bardzo często prowadzę Cię przez nie od początku do końca, żeby można było naprawdę sprawdzić, co daje Ci oddech, ruch, medytacja, praca z przekonaniem, emocją czy stanem.
            </p>
            <p>
              Z czasem budujesz własny repertuar sposobów pracy, które znasz z doświadczenia, nie tylko z teorii. Nie oznacza to, że po 90 dniach w każdej sytuacji automatycznie wybierzesz idealną technikę. Oznacza, że masz więcej realnie poznanych sposobów powrotu do siebie.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-20 md:mb-28 pl-6 md:pl-10 border-l-[3px] border-[#3A84FF]/30 py-2">
          <p className="font-heading text-2xl md:text-3xl text-[#1E293B] font-medium leading-snug italic mb-6">
            „Najważniejsza była dla mnie praktyka, a przede wszystkim to, że nie tylko opowiadałeś o tym, na czym dana praktyka polega, ale przede wszystkim prowadziłeś przez tę praktykę od początku do końca. Mogłam razem z Tobą wejść w daną praktykę, robić ją razem z Tobą, przechodząc przez cały proces krok po kroku.”
          </p>
          <p className="text-sm md:text-base text-slate-500 font-medium">
            uczestniczka po pełnych 90 dniach programu
          </p>
        </div>

        {/* Stages list */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-[#1E293B] mb-12 md:mb-16">
            Ja układam drogę. Ty przechodzisz ją krok po kroku.
          </h3>
          
          <div className="space-y-12 md:space-y-16">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                <div className="shrink-0 w-24 md:pt-1">
                  <span className="text-sm md:text-base font-bold text-[#3A84FF] tracking-wider">{stage.number}</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-3">
                    {stage.title}
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domknięcie */}
        <div className="pt-10 border-t border-slate-200">
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            To nie jest sztywny schemat zamykania tematów według kalendarza. To kierunek drogi, dzięki któremu nie dostajesz przypadkowej biblioteki materiałów.
          </p>
        </div>

      </div>
    </section>
  );
}
