import Link from 'next/link';

export function About() {
  return (
    <section id="o-przemyslawie" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-[55%]">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
              Poznaj swojego przewodnika
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-[#3A84FF] mb-8">
              Przemysław Krupski
            </p>
            
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Przemysław prowadzi sesje indywidualne i pracuje z osobami, które chcą uwolnić się od utrwalonych schematów, odzyskać większy kontakt ze sobą i budować nową wersję siebie.
              </p>
              <p>
                Tworzy programy, praktyki i inne produkty rozwojowe łączące pracę z umysłem, oddechem, ciałem i podświadomością.
              </p>
              <p>
                Sam przez lata poznawał różne metody i szukał odpowiedzi na pytanie, dlaczego samo zrozumienie problemu nie zawsze prowadzi do rzeczywistej zmiany.
              </p>
              <p>
                Dziś przekłada tę wiedzę i własne doświadczenie na uporządkowane procesy, w których teoria od razu spotyka się z praktyką.
              </p>
            </div>
            
            <div className="my-10 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="font-semibold text-[#1E293B] text-lg leading-snug">
                Treści Przemysława o rozwoju świadomości i psychologii obserwuje ponad 250 000 osób w mediach społecznościowych.
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
              W programie nie otrzymujesz wyłącznie nagrań i życzenia powodzenia. Masz codzienne prowadzenie, regularne sesje Q&A i kolejne kroki ułożone w jeden spójny proces.
            </p>
            
            <div className="w-full flex flex-col md:flex-row items-center md:items-start">
              <Link 
                href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" 
                target="_blank"
                className="flex items-center justify-center w-full md:w-auto py-4 px-8 text-white text-lg font-bold bg-gradient-to-r from-[#3A84FF] to-[#2563EB] rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(58,132,255,0.4)] text-center"
              >
                DOŁĄCZAM DO PROGRAMU
              </Link>
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto lg:mx-0 lg:w-[45%] relative">
            {/* Delikatna poświata za zdjęciem */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3A84FF]/15 to-purple-500/15 blur-[60px] rounded-full pointer-events-none transform translate-y-4"></div>
            
            <div className="aspect-[4/5] w-full relative rounded-3xl overflow-hidden shadow-2xl z-10 bg-slate-100">
              {/* Zdjęcie Przemka */}
              <img 
                src="/przemek-krupski.jpeg" 
                alt="Przemysław Krupski" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              
              {/* Delikatne przyciemnienie na dole dla czytelności tekstu */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-white text-2xl font-bold mb-1 drop-shadow-md">Przemysław Krupski</p>
                <p className="text-[#3A84FF] font-bold tracking-wider text-sm uppercase drop-shadow-md">Twórca i prowadzący program</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

