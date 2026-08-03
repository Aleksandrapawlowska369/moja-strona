const testimonials = [
  {
    name: "Iwona",
    role: "Uczestniczka programu",
    initial: "I",
    content: "Przez te pierwsze 30 dni w programie «Twoja Nowa Tożsamość» zmieniło się u mnie bardzo dużo. Zyskałam ogromną świadomość swoich myśli, stałam się spokojniejsza i wiem już, jak wyregulować swój układ nerwowy oraz jak zmienić moją energię.\n\nW przeszłości porzucałam mnóstwo kursów przez prokrastynację – tutaj na każdą lekcję czekam z ogromną niecierpliwością i ciekawością"
  },
  {
    name: "Uczestniczka pierwszej edycji",
    role: "Po ponad 30 dniach programu",
    initial: "U",
    content: "Ten program wprowadza rutynę, ale nie na zasadzie: «zrobię zadanie i odhaczone». On dla mnie zostaje w podświadomości jakby na cały dzień.\n\nSposób przekazania wiedzy i te wszystkie przykłady niesamowicie do mnie trafiają. Czuję się w tym wszystkim tak, jakbym była prowadzona za rękę"
  },
  {
    name: "Andżelika",
    role: "Uczestniczka programu",
    initial: "A",
    content: "Te pierwsze ćwiczenia oddechowe oraz medytacje dały mi bardzo dużo energii i wewnętrznego spokoju.\n\nNie jestem już tak zmęczona i nie czuję się zaganiana, reaguję spokojniej, a moje myśli nie są już takie ciężkie, jakby chodziło o wszystko albo nic"
  }
];

export function Testimonials() {
  return (
    <section id="opinie" className="relative py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#1e1b4b] overflow-hidden border-t border-white/10">
      {/* Subtelna radialna poświata */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3A84FF]/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Historie prawdziwej zmiany
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Pierwsze efekty nie zawsze są spektakularnym przełomem. Często zaczynają się od większego spokoju, regularności i momentu, w którym zauważasz: „tym razem reaguję inaczej”.
          </p>
        </div>

        <span className="block text-[#3A84FF] font-bold tracking-widest text-sm uppercase mb-3 text-center">
          PIERWSZE ZMIANY ZAUWAŻONE PO 30 DNIACH
        </span>
        <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto mb-10 text-center">
          Fragmenty autentycznych opinii uczestników. Dłuższe wypowiedzi zostały skrócone i uporządkowane redakcyjnie bez zmiany ich sensu.
        </p>

        {/* 3 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative flex flex-col h-full"
            >
              <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10 whitespace-pre-wrap mt-auto">
                „{testimonial.content}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 shrink-0 bg-[#3A84FF]/20 rounded-full flex items-center justify-center text-[#3A84FF] font-bold text-xl border border-[#3A84FF]/30">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white leading-tight mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400 leading-snug">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1 Wider Card (Władysław) */}
        <div className="mt-8 mx-auto max-w-4xl bg-slate-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 relative flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1">
            <p className="text-slate-300 italic leading-relaxed relative z-10 whitespace-pre-wrap text-lg">
              „Podoba mi się mnóstwo ćwiczeń praktycznych i objaśnień procesów, jakie zachodzą wewnątrz, a na które nie zwracamy uwagi w życiu codziennym. U mnie zmieniła się przede wszystkim systematyczność.
              
              Trzeba wracać do lekcji, ponieważ za każdym razem odkrywamy nowe rzeczy”
            </p>
          </div>
          
          <div className="flex items-center gap-4 md:flex-col md:text-center shrink-0">
            <div className="w-14 h-14 bg-[#3A84FF]/20 rounded-full flex items-center justify-center text-[#3A84FF] font-bold text-2xl border border-[#3A84FF]/30">
              W
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">Władysław</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


