export function PostWebinarStages() {
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
      title: "Integrować i zabierać ze sobą to, co naprawdę działa",
      description: "Pragnienia, wizja, świadoma kreacja, własne dowody i praktyki, do których chcesz wracać."
    }
  ];

  return (
    <section id="etapy" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* EARLY PROOF (04) */}
        <div className="mb-16 md:mb-20 pl-6 md:pl-10 border-l-[3px] border-[#3A84FF]/50 py-2 max-w-4xl">
          <p className="font-heading text-2xl md:text-[34px] text-[#0F172A] font-medium leading-[1.4] italic mb-6">
            „Najważniejsza była dla mnie praktyka, a przede wszystkim to, że nie tylko opowiadałeś o tym, na czym dana praktyka polega, ale przede wszystkim prowadziłeś przez tę praktykę od początku do końca. Mogłam razem z Tobą wejść w daną praktykę, robić ją razem z Tobą, przechodząc przez cały proces krok po kroku.”
          </p>
          <div className="flex flex-col">
            <span className="font-medium text-[#1E293B] text-lg">Marta</span>
            <span className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">
              uczestniczka po pełnych 90 dniach programu
            </span>
          </div>
        </div>

        {/* 4 ETAPY PROCESU (05) */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-16 md:mb-20 font-heading leading-tight max-w-3xl">
            Ja układam drogę. Ty przechodzisz ją krok po kroku.
          </h3>
          
          <div className="space-y-16 md:space-y-24 relative before:hidden md:before:block before:absolute before:top-4 before:bottom-4 before:left-[1.5rem] before:w-px before:bg-slate-200">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 items-start relative z-10">
                <div className="shrink-0 w-20 md:w-24 pt-1.5 md:pt-2">
                  <span className="inline-block text-xs md:text-sm font-bold text-[#C29B57] tracking-widest uppercase">
                    {stage.number}
                  </span>
                </div>
                <div>
                  <h4 className="text-[26px] md:text-[32px] font-heading font-medium text-[#0F172A] mb-4">
                    {stage.title}
                  </h4>
                  <p className="text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8]">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domknięcie etapów */}
        <div className="pt-16 md:pt-20 border-t border-slate-200 mt-16 md:mt-24">
          <p className="text-xl md:text-[22px] text-slate-600 font-light leading-[1.7] max-w-3xl mb-4">
            To nie jest sztywny schemat zamykania tematów według kalendarza.
          </p>
          <p className="text-xl md:text-[22px] text-slate-600 font-light leading-[1.7] max-w-3xl">
            To kierunek drogi, dzięki któremu nie dostajesz przypadkowej biblioteki materiałów i nie musisz samodzielnie układać sobie całego procesu.
          </p>
        </div>

      </div>
    </section>
  );
}
