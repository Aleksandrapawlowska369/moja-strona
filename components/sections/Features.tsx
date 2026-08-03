import { Headphones, Wind, Sparkles, Activity, MessageCircle, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Headphones className="w-6 h-6 text-[#3A84FF]" />,
    title: "36 nagrań mindsetowych",
    description: "Pracujesz między innymi z przekonaniami, oporem, lękiem, granicami, wewnętrznym językiem, obrazem siebie, pragnieniami i świadomą kreacją."
  },
  {
    icon: <Wind className="w-6 h-6 text-[#3A84FF]" />,
    title: "Praktyki oddechowe",
    description: "Narzędzia pomagające pracować z napięciem, emocjami i stanem układu nerwowego."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#3A84FF]" />,
    title: "Medytacje i autohipnozy",
    description: "Praktyki angażujące wyobraźnię, emocje, przekonania oraz nowy obraz siebie."
  },
  {
    icon: <Activity className="w-6 h-6 text-[#3A84FF]" />,
    title: "Ciało i ruch",
    description: "Ćwiczenia ruchowe i ruchowo-oddechowe pomagające pracować z napięciem odczuwanym w ciele."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#3A84FF]" />,
    title: "Prowadzenie i Q&A",
    description: "Codzienne wiadomości, regularne spotkania z Przemysławem oraz dostęp do nagrań Q&A przez siedem dni."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#3A84FF]" />,
    title: "Materiały integracyjne",
    description: "Karty tygodnia, pytania do refleksji, ankiety, list do siebie oraz osobisty plan dalszej pracy."
  }
];

export function Features() {
  return (
    <section id="zawartosc" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6">
            Narzędzia, które prowadzą Cię przez proces zmiany
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Program łączy wiedzę, praktykę i prowadzenie, dzięki czemu pracujesz nie tylko z myślami, ale również z emocjami, ciałem i podświadomością.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

