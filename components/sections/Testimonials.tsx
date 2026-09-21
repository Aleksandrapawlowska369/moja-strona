export function Testimonials() {
  return (
    <section id="opinie" className="relative py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#1e1b4b] overflow-hidden border-t border-white/10">
      {/* Subtelna radialna poświata */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3A84FF]/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Nie chcę, żeby nowa wersja Ciebie została tylko pomysłem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            <p>
              Słowa mają znaczenie, ale własne doświadczenie waży inaczej.
            </p>
            <p>
              Kiedy robisz trudne zadanie mimo chęci ucieczki, wracasz po przerwie, dotrzymujesz decyzji albo w znanej sytuacji reagujesz inaczej niż zwykle, pojawia się własny dowód:
            </p>
            <div className="pt-2">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide block">
                „potrafię”.
              </span>
            </div>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 relative">
            <p className="text-slate-300 italic leading-relaxed text-lg">
              „Wcześniej, kiedy pojawiały się trudne zadania, bardzo często uciekałam w prokrastynację. Dzisiaj po prostu stawiam im czoła. Mam więcej radości z wyzwań, więcej radości z życia i czuję, że po prostu jestem w stanie zrobić więcej niż wcześniej.”
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Właśnie dlatego dałem temu procesowi 90 dni. Nie jako magiczną granicę, po której budzisz się nową osobą, ale jako wystarczająco długi fragment prawdziwego życia, żeby pojawiły się stres, lepszy i gorszy tydzień, sukces, potknięcie, przerwa i okazja do powrotu.
          </p>
          
          <div className="pt-4">
            <p className="text-xl md:text-2xl font-medium text-white/90 tracking-wide">
              Zmiana ma mieć czas spotkać Cię w codzienności.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


