import Link from 'next/link';

export function Pricing() {
  return (
    <section id="pricing" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* A. H2 + lead */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1E293B] mb-6">
            Jeśli chcesz przejść tę drogę ze mną, możesz zacząć dziś.
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-normal max-w-2xl mx-auto leading-relaxed">
            Dołączasz do pełnego 90-dniowego procesu „Twoja Nowa Tożsamość”. Dostęp do programu masz przez 5 miesięcy.
          </p>
        </div>

        {/* B & C. Primary 1497 offer + Financing inside */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden mb-4">
          {/* Primary Top Section */}
          <div className="p-8 md:p-12 flex flex-col md:items-center md:text-center relative">
            <p className="text-xs md:text-sm font-bold text-[#C29B57] tracking-widest uppercase mb-4">
              PŁATNOŚĆ JEDNORAZOWA
            </p>
            <div className="mb-2">
              <span className="text-4xl md:text-6xl font-heading text-[#1E293B]">1497 zł</span>
              <span className="text-lg md:text-xl text-slate-500 font-normal ml-2">brutto</span>
            </div>
            <p className="text-slate-600 mb-10 text-base md:text-lg">
              Najkorzystniejsza cenowo forma dołączenia.
            </p>
            
            <div className="w-full max-w-md mx-auto">
              <Link 
                href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" 
                target="_blank" 
                className="w-full py-4 px-6 rounded-xl bg-[#3A84FF] text-white font-bold text-center hover:bg-blue-600 transition-colors mb-3 block text-sm md:text-base"
              >
                DOŁĄCZAM DO PEŁNEGO PROGRAMU | 1497 ZŁ
              </Link>
              <p className="text-sm text-slate-500 text-center">
                W przeliczeniu na 90 dni procesu to około 17 zł dziennie.
              </p>
            </div>
          </div>

          {/* Financing Section */}
          <div className="bg-slate-50 border-t border-slate-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                Chcesz rozłożyć 1497 zł na raty?
              </h3>
              <p className="text-slate-600">
                Przy zakupie możesz sprawdzić dostępne możliwości rozłożenia płatności.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* TubaPay */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-[#1E293B] mb-3">TubaPay</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Możesz rozłożyć zakup na mniejsze płatności, np.:
                </p>
                <ul className="space-y-2 text-base text-slate-800 font-semibold mb-4">
                  <li>• 3 × 499 zł</li>
                  <li>• 4 × 374 zł</li>
                  <li>• 6 × 249,59 zł</li>
                </ul>
                <p className="text-xs text-slate-500">
                  Aktualne warianty sprawdzisz przy zakupie.
                </p>
              </div>

              {/* Raty Bankowe */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="mb-3">
                  <h4 className="text-lg font-bold text-[#1E293B] inline-block mr-2">Raty bankowe</h4>
                  <span className="text-xs text-slate-500 font-medium">dostępne przez Przelewy24</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Możesz również rozłożyć zakup na większą liczbę rat, np.:
                </p>
                <ul className="space-y-2 text-base text-slate-800 font-semibold mb-4">
                  <li>• 10 × ok. 168 zł</li>
                  <li>• 20 × ok. 93 zł</li>
                  <li>• 50 × ok. 43 zł</li>
                </ul>
                <p className="text-xs text-slate-500">
                  Przykładowe wyliczenia. Ostateczna wysokość rat, ich liczba i dostępność zależą od aktualnych warunków oraz decyzji banku.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other checkout methods */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm text-slate-500">
            Przy płatności możesz również wybrać m.in. BLIK, szybki przelew, PayPal lub PayPo, jeśli dana metoda jest dostępna dla tego zakupu.
          </p>
        </div>

        {/* E. Secondary Monthly Option */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 border border-slate-200 flex flex-col md:items-center md:text-center">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-2">
              Wolisz płacić miesiąc po miesiącu?
            </h3>
            <p className="text-slate-600">
              Możesz też wybrać elastyczną płatność miesięczną.
            </p>
          </div>

          <p className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">
            PŁATNOŚĆ MIESIĘCZNA
          </p>
          
          <div className="mb-2">
            <span className="text-4xl md:text-5xl font-heading text-[#1E293B]">597 zł</span>
            <span className="text-lg text-slate-500 font-normal ml-2">/ miesiąc</span>
          </div>
          
          <p className="text-slate-600 mb-6 pb-6 border-b border-slate-100 max-w-xs mx-auto w-full">
            maksymalnie 3 płatności
          </p>
          
          <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
            Pierwsza płatność uruchamia dostęp. Następne płatności pobierane są co miesiąc, aż do maksymalnie 3 płatności łącznie.
          </p>
          
          <div className="w-full max-w-md mx-auto">
            {/* 
              TODO: confirm monthly 597 PLN checkout URL. 
            */}
            <button
              disabled
              className="w-full py-4 px-6 rounded-xl border border-slate-300 bg-slate-50 text-slate-500 font-bold text-center cursor-not-allowed block text-sm md:text-base"
            >
              WYBIERAM PŁATNOŚĆ MIESIĘCZNĄ | 597 ZŁ
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
