import Link from 'next/link';

export function Hero() {
  return (
    <section id="start" className="relative flex flex-col items-center justify-center overflow-hidden bg-[#101010] py-16 md:py-24">
      {/* Abstrakcyjne tło z płynnymi kształtami i mesh gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-6 max-w-4xl flex flex-col items-center text-center">
        <span className="block text-slate-400 font-semibold tracking-[0.2em] text-[11px] md:text-xs uppercase mb-6 md:mb-8">
          Twoja Nowa Tożsamość
        </span>
        
        <h1 className="font-heading text-[clamp(2rem,8.4vw,3rem)] md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-[1.15] mb-6 md:mb-8">
          <span className="block whitespace-nowrap md:inline md:whitespace-normal">Wiesz, kim chcesz być.</span>
          <br className="hidden md:block" />
          <span className="block whitespace-nowrap md:inline md:whitespace-normal">Wiesz, jak chcesz żyć.</span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed mb-12 md:mb-16 max-w-2xl">
          Dlaczego więc w codziennych sytuacjach tak łatwo wracasz do starych reakcji, decyzji i sposobu działania?
        </p>
        
        <div className="w-full flex flex-col items-center">
          <Link 
            href="#etapy" 
            className="flex items-center justify-center w-full md:w-auto min-h-[56px] px-10 text-white text-sm md:text-base font-bold bg-[#3A84FF] rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            ZOBACZ, JAK WYGLĄDA PEŁNY PROCES
          </Link>
          <p className="mt-6 text-xs md:text-sm text-slate-400 font-medium">
            90-dniowy prowadzony proces • 5 miesięcy dostępu
          </p>
        </div>
      </div>
    </section>
  );
}
