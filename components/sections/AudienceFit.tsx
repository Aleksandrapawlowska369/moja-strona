export function AudienceFit() {
  const goodFit = [
    "czujesz, że chcesz żyć inaczej, nawet jeśli nie masz jeszcze wszystkiego dokładnie poukładanego",
    "dużo już rozumiesz albo dopiero zaczynasz swoją pracę ze sobą, ale chcesz przełożyć ją na codzienne życie",
    "nie chcesz tylko słuchać i zbierać wiedzy, ale także doświadczać, praktykować i działać",
    "odpowiada Ci podejście, które obejmuje myśli, emocje, ciało, podświadomość, oddech i energię",
    "chcesz mieć rytm i prowadzenie, ale zależy Ci również na tym, żeby z czasem coraz lepiej prowadzić siebie"
  ];

  const badFit = [
    "szukasz gwarancji, że po 90 dniach zniknie każdy lęk i spełnią się wszystkie Twoje pragnienia",
    "chcesz tylko dostać dostęp do materiałów, bez wchodzenia w praktykę i własne doświadczenie",
    "nie chcesz pracować z tematami emocji, ciała, podświadomości, energii ani duchowości"
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* H2 */}
        <div className="mb-20 md:mb-28 md:text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1E293B] leading-[1.15]">
            Dla kogo stworzyłem ten program?
          </h2>
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-12 md:mb-16">
          
          {/* BLOK 1 */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg md:text-xl font-bold text-[#C29B57] tracking-wider uppercase mb-8 md:mb-10">
              TEN PROGRAM MOŻE BYĆ DLA CIEBIE, JEŚLI:
            </h3>
            <ul className="flex flex-col">
              {goodFit.map((text, idx) => (
                <li key={idx} className="flex items-start py-6 border-b border-slate-100 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B57] mt-2.5 mr-5 shrink-0"></span>
                  <span className="text-lg text-slate-900 font-light leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOK 2 */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg md:text-xl font-bold text-slate-600 tracking-wider uppercase mb-8 md:mb-10">
              TEN PROGRAM NIE BĘDZIE DOBRYM WYBOREM, JEŚLI:
            </h3>
            <ul className="flex flex-col">
              {badFit.map((text, idx) => (
                <li key={idx} className="flex items-start py-6 border-b border-slate-100 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 mr-5 shrink-0"></span>
                  <span className="text-lg text-slate-800 font-light leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-700 font-normal">
            Twoja Nowa Tożsamość jest programem rozwojowym. Nie zastępuje terapii, diagnozy ani leczenia.
          </p>
        </div>

      </div>
    </section>
  );
}
