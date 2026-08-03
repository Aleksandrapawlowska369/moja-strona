const faqs = [
  {
    question: "Kiedy mogę rozpocząć?",
    answer: "Od razu po zakupie. Dzień zakupu staje się Twoim indywidualnym Dniem 1. Nie musisz czekać na poniedziałek, początek miesiąca ani wspólny start grupy."
  },
  {
    question: "Ile czasu zajmują materiały?",
    answer: "Większość materiałów zajmuje od kilku do około 30 minut. Każdego dnia otrzymujesz jeden kolejny materiał, dzięki czemu nie musisz samodzielnie wybierać, od czego zacząć."
  },
  {
    question: "Co się stanie, jeśli ominę dzień?",
    answer: "Nie tracisz materiału ani dostępu. Możesz wrócić do niego i kontynuować we własnym rytmie. Zarówno pełny program, jak i pakiet 30 dni są dostępne przez pięć miesięcy."
  },
  {
    question: "Czy mogę korzystać z programu na telefonie?",
    answer: "Tak. Materiały są dostępne również w aplikacji Web To Learn Go, dlatego możesz korzystać z programu bez dostępu do komputera."
  },
  {
    question: "Czy sesje Q&A są nagrywane?",
    answer: "Tak. Nagranie każdego spotkania Q&A pozostaje dostępne w panelu przez siedem dni. Uczestnicy pakietu 30 dni mogą korzystać z Q&A przez cały pięciomiesięczny okres dostępu."
  },
  {
    question: "Czy podczas autohipnozy tracę kontrolę?",
    answer: "Nie. Podczas praktyki zachowujesz świadomość, słyszysz prowadzenie i w dowolnym momencie możesz ją przerwać. Autohipnoza jest jedną z praktyk wykorzystywanych do pracy z wyobraźnią, przekonaniami i nowym obrazem siebie."
  },
  {
    question: "Czy mogę kontynuować po zakupie pakietu 30 dni?",
    answer: "Tak. Przed zakończeniem pierwszych 30 dni otrzymasz informację o możliwości dokupienia pozostałej części programu za 1097 zł brutto.\n\nWpłata za pakiet 30 dni nie jest odliczana od ceny kontynuacji. Przy aktualnych cenach regularnych pakiet 30 dni i późniejsza kontynuacja kosztują łącznie 1694 zł brutto, czyli o 197 zł więcej niż pełny proces 90 dni kupiony od razu."
  },
  {
    question: "Czy pełny program można kupić na raty?",
    answer: "Tak. Podczas zakupu możesz sprawdzić warianty ratalne oferowane przez Przelewy24 lub TubaPay. Ostateczne warunki, liczbę rat i koszt finansowania przedstawia operator płatności."
  },
  {
    question: "Czy program zastępuje terapię?",
    answer: "Nie. „Twoja Nowa Tożsamość” jest programem rozwojowym, a nie terapią, diagnozą ani leczeniem.\n\nJeżeli jesteś obecnie w ostrym kryzysie albo potrzebujesz specjalistycznej pomocy, skorzystaj ze wsparcia psychologa, psychoterapeuty, psychiatry lub lekarza."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-lg text-slate-600">
            Masz wątpliwości? Sprawdź najważniejsze informacje przed rozpoczęciem programu.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              open={index === 0}
              className="group border border-slate-200 rounded-xl bg-white overflow-hidden open:ring-2 open:ring-[#3A84FF] open:border-[#3A84FF] transition-all"
            >
              <summary className="flex items-center justify-between font-bold text-[#1E293B] cursor-pointer p-6 list-none hover:bg-slate-50">
                <span className="pr-4">{faq.question}</span>
                <span className="transition group-open:rotate-180 shrink-0">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-600 p-6 pt-0 leading-relaxed border-t border-slate-100 whitespace-pre-wrap">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        
        {/* Kontakt pod akordeonem */}
        <div className="mt-12 md:mt-16 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 text-center mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-[#1E293B] mb-2">Masz inne pytanie przed zakupem?</h3>
          <p className="text-slate-600">
            Napisz na: <a href="mailto:przemek@przeistoczenie.pl" className="text-[#3A84FF] font-semibold hover:underline transition-colors">przemek@przeistoczenie.pl</a>
          </p>
        </div>
        
      </div>
    </section>
  );
}

