import { CheckCircle2 } from 'lucide-react';

export function Solution() {
  return (
    <section id="pojemnosc" className="py-20 md:py-32 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Grafika po lewej */}
          <div className="w-full max-w-sm md:max-w-md lg:w-1/2 relative mx-auto">
            <div className="aspect-square w-full relative">
              {/* Delikatna poświata wokół obrazu */}
              <div className="absolute inset-0 bg-[#3A84FF]/15 blur-[80px] rounded-full pointer-events-none transform -translate-y-4"></div>
              
              {/* Obraz TNT */}
              <img 
                src="/tnt.png" 
                alt="Twoja Nowa Tożsamość" 
                className="w-full h-full object-contain rounded-3xl shadow-[0_0_30px_rgba(58,132,255,0.15)] border border-white/10 relative z-10"
              />
            </div>
          </div>

          {/* Tekst po prawej */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight break-words">
              Nie wystarczy pragnąć więcej. Trzeba jeszcze <span className="text-[#3A84FF]">potrafić to przyjąć</span>.
            </h2>
            
            <div className="space-y-8 md:space-y-6 mb-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                Termostat Tożsamości to prosty model opisujący poziom zmiany, który obecnie wydaje Ci się znajomy, bezpieczny i możliwy do utrzymania.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Kiedy życie zaczyna wykraczać poza ten poziom, może pojawić się napięcie, zwątpienie albo potrzeba powrotu do dawnych reakcji.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                To, co nazywasz autosabotażem, często jest starą próbą ochrony przed oceną, odrzuceniem, rozczarowaniem albo utratą kontroli.
              </p>
            </div>

            <p className="text-lg font-semibold text-white mb-6">W programie krok po kroku:</p>
            
            <ul className="space-y-6">
              {[
                "wcześniej zauważasz automatyczne reakcje,",
                "uczysz się pracować z napięciem i emocjami,",
                "rozszerzasz to, co potrafisz przyjąć, utrzymać i tworzyć."
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#3A84FF] shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

