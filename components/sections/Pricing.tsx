import Link from 'next/link';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1E293B] mb-6">
            Inwestycja w siebie
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-normal max-w-2xl mx-auto leading-relaxed">
            Jeśli czujesz, że to jest właściwy moment, możesz zacząć swój Dzień 1 od razu.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch mb-12">
          
          {/* WARIANT 1 — JEDNORAZOWO */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-8 md:p-12 border border-slate-100 flex flex-col shadow-xl relative">
            <p className="text-xs md:text-sm font-bold text-[#C29B57] tracking-widest uppercase mb-4">
              PEŁNY PROCES 90 DNI
            </p>
            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-heading text-[#1E293B]">1497 zł</span>
              <span className="text-lg text-slate-500 font-normal ml-2">brutto</span>
            </div>
            <p className="text-slate-600 mb-12">
              za pełne 90 dni programu
            </p>
            
            <div className="mt-auto flex flex-col">
              <Link 
                href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" 
                target="_blank" 
                className="w-full py-4 px-6 rounded-xl bg-[#3A84FF] text-white font-bold text-center hover:bg-blue-600 transition-colors mb-4 block"
              >
                ZACZYNAM SWÓJ DZIEŃ 1 | 1497 ZŁ
              </Link>
              <p className="text-sm text-slate-500 text-center">
                W przeliczeniu na 90 dni procesu to około 17 zł dziennie.
              </p>
            </div>
          </div>

          {/* WARIANT 2 — MIESIĘCZNIE */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-8 md:p-12 border border-slate-200 flex flex-col shadow-sm">
            <h3 className="text-base md:text-lg font-medium text-slate-600 mb-4">
              Jeśli wolisz mniejszą kwotę na start
            </h3>
            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-heading text-[#1E293B]">597 zł</span>
              <span className="text-lg text-slate-500 font-normal ml-2">/ miesiąc</span>
            </div>
            <p className="text-slate-600 mb-6">
              maksymalnie 3 płatności
            </p>
            <p className="text-slate-800 font-medium mb-12 pb-6 border-b border-slate-100">
              1791 zł łącznie, jeśli zrealizujesz wszystkie 3 płatności
            </p>
            
            <div className="mt-auto flex flex-col">
              {/* 
                TODO: confirm monthly 597 PLN checkout URL. 
                Old 30-day URL (https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-30-dni.html) is NOT a monthly subscription and has been omitted to prevent errors. 
              */}
              <button
                className="w-full py-4 px-6 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-center hover:border-[#3A84FF] hover:text-[#3A84FF] transition-colors block cursor-pointer"
                onClick={(e) => { e.preventDefault(); alert('Link płatności miesięcznej w przygotowaniu.'); }}
              >
                WYBIERAM PŁATNOŚĆ MIESIĘCZNĄ | 597 ZŁ
              </button>
            </div>
          </div>

        </div>

        {/* OPERATOR PŁATNOŚCI */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-slate-500 font-normal">
            Możesz również sprawdzić warianty ratalne operatora płatności.
          </p>
        </div>

      </div>
    </section>
  );
}
