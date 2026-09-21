export function Features() {
  return (
    <section id="zawartosc" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col">
        
        {/* H2 */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-8 leading-tight">
            Chcę, żeby z czasem było Ci łatwiej być po swojej stronie.
          </h2>
        </div>

        {/* COPY REPAIR */}
        <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          <p>
            Łatwiej przechodzi się przez zmianę, kiedy masz obok kogoś, kto wierzy w Ciebie, nie przekreśla po błędzie i potrafi przypomnieć szerszą perspektywę.
          </p>
          <p>
            Jedną z najważniejszych rzeczy w programie jest stopniowo stawać się taką osobą dla siebie. Właśnie tak rozumiem miłość do siebie.
          </p>
        </div>

        {/* STATEMENT RELACJA */}
        <div className="my-24 md:my-32">
          <p className="font-heading text-3xl md:text-5xl text-[#1E293B] font-medium leading-[1.2] mb-8">
            Relacja ze sobą jest częścią zmiany.
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
            Chcę, żeby z czasem było Ci łatwiej zauważyć, co się z Tobą dzieje, nie przekreślać siebie po błędzie i wracać do tego, co jest dla Ciebie naprawdę ważne.
          </p>
        </div>

        {/* OBSZARY PRACY */}
        <div className="mb-20 md:mb-32 max-w-4xl">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 md:mb-10">
            Dlatego wracamy między innymi do:
          </p>
          <div className="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-4 md:gap-y-6 text-xl md:text-2xl text-[#1E293B] font-medium leading-relaxed tracking-wide">
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>akceptacji</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>wybaczania sobie</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>wewnętrznego krytyka</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>wewnętrznego dziecka</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>poczucia własnej wartości</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>stawania po swojej stronie</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C29B57] rounded-full mr-4 shrink-0 opacity-80"></span>kontaktu z tym, co naprawdę Twoje</span>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="pt-16 md:pt-24 border-t border-slate-200">
          <p className="text-xs md:text-sm text-[#C29B57] font-bold tracking-widest uppercase mb-6 md:mb-8">
            UCZESTNICZKA PO PROGRAMIE
          </p>
          <p className="font-heading text-2xl md:text-4xl text-[#1E293B] font-normal leading-snug">
            „Zaczęłam być swoim przyjacielem zamiast krytykiem.”
          </p>
        </div>

      </div>
    </section>
  );
}
