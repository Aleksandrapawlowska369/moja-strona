export function Stages() {
  const stages = [
    {
      number: "01",
      title: "ZOBACZ",
      subtitle: "Rozpoznaj automatyczne reakcje",
      description: "Zauważasz myśli, wewnętrzny język i codzienne wybory, które wcześniej działały poza Twoją świadomością. Zyskujesz przestrzeń pomiędzy impulsem a reakcją i moment na bardziej świadomy wybór.",
      highlight: false
    },
    {
      number: "02",
      title: "ROZBRÓJ",
      subtitle: "Pracuj z emocjami i mechanizmami ochronnymi",
      description: "Uczysz się rozpoznawać lęk, napięcie i stare sposoby ochrony, zamiast traktować je jako dowód, że coś jest z Tobą nie tak. Blokada staje się sygnałem, który możesz zauważyć, zrozumieć i stopniowo rozbrajać.",
      highlight: false
    },
    {
      number: "03",
      title: "WCIEL",
      subtitle: "Buduj nową tożsamość w prawdziwym życiu",
      description: "Nowe standardy zaczynają być widoczne w Twoich decyzjach, granicach, sposobie działania oraz w tym, na co sobie pozwalasz. Zbierasz realne dowody na to, że potrafisz wybrać inaczej.",
      highlight: true
    },
    {
      number: "04",
      title: "TWÓRZ",
      subtitle: "Świadomie twórz z większą spójnością",
      description: "Precyzujesz swoje pragnienia, rozpoznajesz ukryte przeciwintencje i łączysz wyobraźnię oraz emocje z konkretnymi decyzjami i działaniem.",
      highlight: true
    }
  ];

  return (
    <section id="etapy" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6 tracking-wide md:tracking-normal">
            Zmiana ma swoją kolejność
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nie da się wejść w nową tożsamość, omijając to, co nadal przyciąga Cię do starej. Dlatego program nie jest zbiorem przypadkowych nagrań. Prowadzi Cię przez cztery uporządkowane etapy, z których każdy przygotowuje Cię do kolejnego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-6 md:p-8 bg-white rounded-2xl shadow-sm transition-shadow h-full ${
                stage.highlight 
                  ? 'border-2 border-[#3A84FF]/20 hover:border-[#3A84FF]/40 hover:shadow-md' 
                  : 'border border-slate-100 hover:shadow-md'
              }`}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-black text-[#3A84FF]/20">{stage.number}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E293B] uppercase tracking-wide">{stage.title}</h3>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-[#3A84FF] mb-4 leading-snug">
                {stage.subtitle}
              </h4>
              <p className="text-[15px] md:text-base text-slate-600 leading-relaxed mt-auto">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Dlaczego pełne 90 dni?</h3>
          <div className="space-y-6 mb-8 text-[15px] md:text-base">
            <p className="text-slate-600 leading-relaxed">
              Pierwszy miesiąc pomaga zauważyć automatyczne reakcje, zbudować rytm i poznać pierwsze narzędzia. To ważny fundament.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Pełny proces prowadzi dalej: przez pracę z lękiem i mechanizmami ochronnymi, budowanie nowych standardów i decyzji, aż do świadomej kreacji i integracji własnego sposobu dalszej pracy.
            </p>
          </div>
          <div className="inline-block px-5 md:px-6 py-4 md:py-3 bg-[#F1F5F9] rounded-xl w-full md:w-auto">
            <p className="text-[#3A84FF] font-bold text-base md:text-lg leading-relaxed">
              30 dni pomagają zacząć. 90 dni pozwala przejść całą drogę.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
