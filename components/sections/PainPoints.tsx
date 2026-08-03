import { TrendingUp, Eye, Heart, Sun } from 'lucide-react';

const painPoints = [
  {
    title: "Pieniądze",
    description: "Chcesz zarabiać więcej, ale pojawia się opór przed podniesieniem cen, pokazaniem wartości swojej pracy albo przyjęciem większej odpowiedzialności.",
    icon: <TrendingUp className="w-8 h-8 text-red-500" />
  },
  {
    title: "Widoczność",
    description: "Chcesz pokazać to, co tworzysz, ale przed publikacją zaczynasz wątpić, poprawiać wszystko bez końca albo całkowicie się wycofujesz.",
    icon: <Eye className="w-8 h-8 text-red-500" />
  },
  {
    title: "Bliskość i relacje",
    description: "Kiedy robi się spokojnie i bezpiecznie, może pojawić się napięcie, potrzeba zdystansowania albo szukanie problemu.",
    icon: <Heart className="w-8 h-8 text-red-500" />
  },
  {
    title: "Spokój i sukces",
    description: "Kiedy wszystko zaczyna układać się dobrze, zamiast radości może pojawić się obawa, że za chwilę wydarzy się coś złego.",
    icon: <Sun className="w-8 h-8 text-red-500" />
  }
];

export function PainPoints() {
  return (
    <section id="termostat" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6">
            Dlaczego wracasz do starego poziomu, skoro naprawdę chcesz zmiany?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Możesz mieć wiedzę, cele i ogromną motywację. A mimo to, gdy pojawia się szansa na większy krok, uruchamia się opór. Twój wewnętrzny mechanizm może próbować przywrócić to, co dotąd było znajome i bezpieczne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full"
            >
              <div className="flex-shrink-0 mt-1">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

