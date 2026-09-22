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
        <div className="my-24 md:my-32 flex flex-col items-start border-l-2 border-[#C29B57]/30 pl-6 md:pl-10">
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#1E293B] font-medium leading-[1.15] mb-8">
            Relacja ze sobą jest częścią zmiany.
          </p>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
            Chcę, żeby z czasem było Ci łatwiej zauważyć, co się z Tobą dzieje, nie przekreślać siebie po błędzie i wracać do tego, co jest dla Ciebie naprawdę ważne.
          </p>
        </div>

        {/* OBSZARY PRACY */}
        <div className="mb-24 md:mb-40 max-w-5xl">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-10 md:mb-12">
            Dlatego wracamy między innymi do:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 text-xl md:text-2xl text-[#1E293B] font-medium leading-relaxed tracking-wide">
            <span className="flex items-start"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>akceptacji</span>
            <span className="flex items-start"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>wybaczania sobie</span>
            <span className="flex items-start"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>wewnętrznego krytyka</span>
            <span className="flex items-start"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>wewnętrznego dziecka</span>
            <span className="flex items-start"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>poczucia własnej wartości</span>
            <span className="flex items-start"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>stawania po swojej stronie</span>
            <span className="flex items-start sm:col-span-2 md:col-span-1"><span className="text-[#C29B57] mr-4 mt-1 opacity-80 font-light">/</span>kontaktu z tym, co naprawdę Twoje</span>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="pt-20 md:pt-32 pb-12 border-t border-slate-200 flex flex-col items-center text-center">
          <p className="text-sm md:text-base text-[#C29B57] font-bold tracking-widest uppercase mb-8 md:mb-12">
            UCZESTNICZKA PO PROGRAMIE
          </p>
          <p className="font-heading text-3xl md:text-5xl lg:text-6xl text-[#1E293B] font-normal leading-snug max-w-4xl">
            „Zaczęłam być swoim przyjacielem zamiast krytykiem.”
          </p>
        </div>

      </div>
    </section>
  );
}
