import React from 'react';

const faqs = [
  {
    question: "Czy nagranie jest bezpłatne?",
    answer: <p>Tak. Zapis i obejrzenie nagrania są bezpłatne.</p>
  },
  {
    question: "Czy to jest transmisja na żywo?",
    answer: <p>Nie. To nagranie. Po zapisie możesz obejrzeć je od razu albo wybrać jeden z dostępnych terminów.</p>
  },
  {
    question: "Jak działa „Obejrzyj teraz” i „Wybierz termin obejrzenia”?",
    answer: (
      <>
        <p>Po otwarciu formularza podajesz imię i adres e-mail oraz akceptujesz politykę prywatności.</p>
        <p className="mt-4">Jeśli wybierzesz „Obejrzyj od razu”, po zapisie od razu przejdziesz do nagrania. Link dostaniesz również mailem.</p>
        <p className="mt-4">Jeśli wybierzesz termin, wskażesz jeden z dostępnych terminów w formularzu. Dostaniesz potwierdzenie, link do nagrania oraz przypomnienia przed wybraną godziną.</p>
      </>
    )
  },
  {
    question: "Czy muszę zakładać konto albo się logować?",
    answer: <p>Nie. Do zapisu wystarczy imię i adres e-mail. Dostęp otrzymasz przez indywidualny link.</p>
  },
  {
    question: "Ile trwa nagranie i czego potrzebuję?",
    answer: <p>Nagranie trwa około 45 minut. Przygotuj kartkę albo notes i coś do pisania. Najwięcej wyniesiesz z materiału, jeśli będziesz mieć warunki, żeby przejść przez ćwiczenie razem ze mną.</p>
  },
  {
    question: "Czy muszę dokładnie wiedzieć, jakiego życia chcę?",
    answer: <p>Nie. Jeśli masz konkretną wizję, będziesz mieć z czym pracować. Jeśli dopiero czujesz, że chcesz czegoś innego, możesz zacząć od tego, co przychodzi Ci teraz. W nagraniu dostaniesz pytania, które pomogą ten obraz uporządkować.</p>
  },
  {
    question: "Czy muszę znać się na manifestacji albo świadomej kreacji?",
    answer: (
      <>
        <p>Nie. Nie musisz wcześniej znać żadnych metod ani przyjmować określonego zestawu przekonań.</p>
        <p className="mt-4">Mówiąc o świadomej kreacji, będziemy wracać do bardzo konkretnych rzeczy: czego naprawdę chcesz, jak reagujesz, jakie decyzje podejmujesz i co dzieje się później w Twoim zwykłym życiu.</p>
      </>
    )
  },
  {
    question: "Czy na końcu pojawi się oferta?",
    answer: (
      <>
        <p>Tak. Pod koniec nagrania pokażę możliwość dalszej pracy dla osób, które będą chciały pójść głębiej.</p>
        <p className="mt-4 font-medium text-slate-800">To nie jest jednak nagranie zbudowane wokół opowiadania o ofercie.</p>
        <p className="mt-4">Przez większość czasu będziemy pracować na Twojej sytuacji: na tym, jak chcesz żyć, na mapie, którą zbudujesz i na konkretnych momentach, w których zmiana spotyka się z codziennością.</p>
        <p className="mt-4">Jeśli zrobisz ćwiczenia i później będziesz wracać do swojej mapy, możesz korzystać z tego niezależnie od tego, czy zdecydujesz się na dalszą pracę. Już samo to może zacząć zmieniać sposób, w jaki zauważasz własne reakcje, decyzje i to, co naprawdę dzieje się po drodze.</p>
        <p className="mt-4">Oferta na końcu jest po prostu kolejną możliwością dla osób, które będą chciały przejść dalej z prowadzeniem.</p>
      </>
    )
  }
];

export function WebinarFaq() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] font-sans">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-3xl">
        
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-medium text-slate-900 leading-[1.25]">
            FAQ
          </h2>
        </div>

        <div className="border-t border-slate-200">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-slate-200">
              <summary className="flex justify-between items-start cursor-pointer list-none py-6 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8FAFC] rounded-sm">
                <span className="text-lg md:text-xl pr-6 font-medium text-slate-800 group-hover:text-primary leading-snug mt-0.5">
                  {faq.question}
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-primary">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-600 pb-8 text-lg leading-relaxed max-w-2xl">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        
      </div>
    </section>
  );
}
