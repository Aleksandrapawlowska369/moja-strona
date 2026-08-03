import { Eye, Wind, Sparkles, Activity, BookOpen, Compass } from 'lucide-react';
import Link from 'next/link';

const days = [
  {
    day: "DNI 1, 3 I 5",
    title: "MINDSET",
    description: "ZOBACZ temat tygodnia i automatyczne reakcje. POCZUJ, jak działa w Twoich emocjach, ciele i codziennym doświadczeniu. WYBIERZ konkretną decyzję, nowy standard albo działanie.",
    icon: <Compass className="w-6 h-6 text-[#3A84FF]" />,
    colSpan: "lg:col-span-2 md:col-span-2"
  },
  {
    day: "DZIEŃ 2",
    title: "ODDECH",
    description: "Praktyka oddechowa pomagająca pracować z napięciem, emocjami i stanem układu nerwowego.",
    icon: <Wind className="w-6 h-6 text-[#3A84FF]" />,
    colSpan: "lg:col-span-1 md:col-span-1"
  },
  {
    day: "DZIEŃ 4",
    title: "MEDYTACJA LUB AUTOHIPNOZA",
    description: "Praktyka wspierająca pracę z emocjami, wyobraźnią, przekonaniami i nowym obrazem siebie.",
    icon: <Sparkles className="w-6 h-6 text-[#3A84FF]" />,
    colSpan: "lg:col-span-1 md:col-span-1"
  },
  {
    day: "DZIEŃ 6",
    title: "CIAŁO I RUCH",
    description: "Praktyka ruchowa albo ruchowo-oddechowa pomagająca pracować z napięciem odczuwanym w ciele.",
    icon: <Activity className="w-6 h-6 text-[#3A84FF]" />,
    colSpan: "lg:col-span-1 md:col-span-1"
  },
  {
    day: "DZIEŃ 7",
    title: "INTEGRACJA",
    description: "Czas na refleksję, podsumowanie tygodnia i zauważenie tego, co zaczyna się zmieniać.",
    icon: <BookOpen className="w-6 h-6 text-[#3A84FF]" />,
    colSpan: "lg:col-span-1 md:col-span-1"
  }
];

export function Rhythm() {
  return (
    <section id="rytm" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6">
            Prosty rytm, który mieści się w Twoim życiu
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Nie potrzebujesz dwóch godzin wolnego czasu dziennie ani idealnych warunków. Większość materiałów zajmuje od kilku do około 30 minut. Dzień zakupu staje się Twoim indywidualnym Dniem 1. Nie czekasz na poniedziałek ani wspólny start grupy.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-16">
            <p className="text-slate-600 leading-relaxed">
              Cztery etapy opisują całą 90-dniową drogę. Każdy tydzień ma natomiast stały rytm: <span className="font-bold text-[#1E293B]">ZOBACZ → POCZUJ → WYBIERZ</span>.
            </p>
          </div>
        </div>

        {/* 5 Cards using CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {days.map((day, index) => (
            <div 
              key={index} 
              className={`${day.colSpan} flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-slate-100 h-full`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#3A84FF] tracking-widest uppercase">{day.day}</span>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  {day.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-3 leading-snug break-words">{day.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                {day.description}
              </p>
            </div>
          ))}
        </div>

        {/* Wyróżnione podsumowanie i informacje */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-8 py-5 bg-blue-50 border border-blue-100 rounded-2xl mb-10">
            <p className="text-[#3A84FF] font-bold text-xl md:text-2xl">
              Jeden materiał dziennie. Jedno doświadczenie. Jeden krok.
            </p>
          </div>
          
          <div className="space-y-4 text-slate-600 leading-relaxed mb-16">
            <p>Jeśli pojawi się trudniejszy tydzień, wyjazd albo choroba, masz pięć miesięcy dostępu, żeby spokojnie wrócić i dokończyć proces.</p>
            <p>Z programu możesz korzystać również przez aplikację Web To Learn Go na telefonie.</p>
          </div>
          
          {/* Nowe CTA */}
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-600 mb-6 leading-relaxed">
              Wiesz już, jak wygląda proces. Zobacz dostępne formy udziału i wybierz tę, która najlepiej odpowiada Twojej obecnej sytuacji.
            </p>
            <Link 
              href="#oferta" 
              className="inline-flex items-center justify-center w-full md:w-auto py-4 px-8 text-white text-lg font-bold bg-gradient-to-r from-[#3A84FF] to-[#2563EB] rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(58,132,255,0.4)]"
            >
              PRZECHODZĘ DO OFERTY
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

