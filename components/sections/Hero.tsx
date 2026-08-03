import Link from 'next/link';

export function Hero() {
  return (
    <section id="start" className="relative flex flex-col items-center justify-center overflow-hidden bg-[#101010] py-24 md:py-32">
      {/* Abstrakcyjne tło z płynnymi kształtami i mesh gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-4 mb-8">
        <span className="block text-[#3A84FF] font-bold tracking-widest text-sm md:text-base uppercase mb-4">
          TWOJA NOWA TOŻSAMOŚĆ
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto break-words">
          Czas przestawić Twój Termostat Tożsamości
        </h1>
        
        <p className="mt-6 text-base md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          Wiesz już, dlaczego wracasz do starych schematów. Przez 90 dni krok po kroku rozpoznajesz i rozbrajasz automatyczne reakcje, uczysz się przyjmować i utrzymywać zmianę oraz zaczynasz działać z poziomu osoby, którą chcesz się stać.
        </p>
        
        <div className="mt-10 flex flex-col items-center w-full md:w-auto">
          <Link 
            href="#oferta" 
            className="flex items-center justify-center w-full md:w-auto py-4 px-8 text-white text-base md:text-lg font-bold bg-gradient-to-r from-[#3A84FF] to-[#2563EB] rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(58,132,255,0.4)]"
          >
            ZOBACZ PEŁNY PROGRAM
          </Link>
          <p className="mt-5 text-sm text-gray-300 max-w-xs md:max-w-md mx-auto leading-snug">
            Jeden materiał dziennie • od kilku do około 30 minut • 5 miesięcy dostępu
          </p>
        </div>
      </div>
    </section>
  );
}
