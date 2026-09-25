import { DiscoveryLink } from '../DiscoveryLink';

export function PostWebinarProofs() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#1e1b4b] overflow-hidden border-t border-white/10">
      {/* Subtelna radialna poświata */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3A84FF]/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] max-w-3xl mx-auto">
            Nie chcę, żeby nowa wersja Ciebie została tylko pomysłem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-24">
          <div className="space-y-6 text-[20px] md:text-[22px] text-slate-300 font-light leading-[1.8]">
            <p>
              Słowa mają znaczenie, ale czym innym jest coś usłyszeć, a czym innym sprawdzić to we własnym doświadczeniu.
            </p>
            <p>
              Kiedy robisz trudne zadanie mimo chęci ucieczki, wracasz po przerwie, dotrzymujesz decyzji albo w znanej sytuacji reagujesz inaczej niż zwykle, pojawia się własny dowód:
            </p>
            <div className="pt-4">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide block">
                „potrafię”.
              </span>
            </div>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 relative">
            <p className="text-white italic leading-[1.7] text-[19px] md:text-[21px] font-medium mb-6">
              „Wcześniej, kiedy pojawiały się trudne zadania, bardzo często uciekałam w prokrastynację. Dzisiaj po prostu stawiam im czoła. Mam więcej radości z wyzwań, więcej radości z życia i czuję, że po prostu jestem w stanie zrobić więcej niż wcześniej.”
            </p>
            <div className="flex flex-col">
              <span className="font-medium text-white text-lg">Aleksandra</span>
              <span className="text-xs md:text-sm text-[#C29B57] font-bold tracking-widest uppercase mt-1">
                uczestniczka po programie
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 text-[20px] md:text-[22px] text-slate-300 font-light leading-[1.8] mb-16 md:mb-24">
          <p>
            Właśnie dlatego ten proces trwa 90 dni.
          </p>
          <p>
            To wystarczająco długi fragment prawdziwego życia, żeby pojawiły się stres, lepszy i gorszy tydzień, sukces, potknięcie, przerwa i okazja do powrotu.
          </p>
          
          <div className="pt-6">
            <p className="text-[22px] md:text-[26px] font-medium text-white tracking-wide">
              Dzięki temu zmiana ma czas przełożyć się na codzienne życie.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 md:pt-16 flex justify-center">
          <DiscoveryLink 
            href="#codziennosc" 
            text="JAK TAKI PROCES WYGLĄDA W ZWYKŁYM TYGODNIU?"
            theme="light"
          />
        </div>

      </div>
    </section>
  );
}
