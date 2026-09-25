import Link from 'next/link';

export function PostWebinarHero() {
  return (
    <section id="start" className="relative flex flex-col items-center justify-center overflow-hidden bg-[#101010] py-16 md:py-24 border-b border-white/5">
      {/* Abstract background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-6 max-w-4xl flex flex-col items-center text-center">
        <span className="block text-slate-400 font-semibold tracking-[0.2em] text-[11px] md:text-xs uppercase mb-6 md:mb-8">
          TWOJA NOWA TOŻSAMOŚĆ
        </span>
        
        <h1 className="font-heading text-[clamp(2rem,6vw,3.5rem)] md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.15] mb-8 md:mb-10">
          Życie, którego naprawdę pragniesz, może stać się czymś więcej niż wizją, do której próbujesz dojść.
        </h1>
        
        <p className="text-xl md:text-[26px] text-slate-100 font-medium leading-relaxed mb-8 md:mb-10 max-w-3xl">
          Przez 90 dni stopniowo stajesz się wersją siebie, dla której takie życie jest coraz bardziej naturalne w codzienności: w tym, jak myślisz, czujesz, reagujesz, wybierasz i działasz.
        </p>

        <div className="space-y-6 text-lg md:text-xl text-slate-100 font-light leading-[1.8] mb-12 md:mb-16 max-w-3xl">
          <p>
            Na webinarze było miejsce, żeby przyjrzeć się temu, jak naprawdę chcesz żyć, kim jesteś w takim życiu i co może pojawiać się pomiędzy Tobą dzisiaj a tym kierunkiem.
          </p>
          <p>
            Jeśli czujesz, że to jest Twoja droga, <span className="font-medium text-white">Twoja Nowa Tożsamość jest 90-dniowym prowadzonym procesem, w którym przechodzisz ją krok po kroku, z praktyką, strukturą i regularnym powrotem do tego, co dla Ciebie ważne.</span>
          </p>
        </div>
        
        <div className="w-full flex flex-col items-center">
          <Link 
            href="#opinie-video"
            className="flex items-center justify-center w-full md:w-auto min-h-[56px] px-10 text-white text-sm md:text-base font-bold bg-[#3A84FF] rounded-lg hover:bg-blue-600 transition-colors duration-300 uppercase"
          >
            ZOBACZ, JAK WYGLĄDA PEŁNY PROCES
          </Link>
          <p className="mt-6 text-xs md:text-sm text-slate-400 font-medium">
            90 dni procesu • 5 miesięcy dostępu
          </p>
        </div>
      </div>
    </section>
  );
}
