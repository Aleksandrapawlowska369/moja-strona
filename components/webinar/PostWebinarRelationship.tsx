export function PostWebinarRelationship() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col">
        {/* H2 */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-[#1E293B] mb-8 leading-[1.15]">
            Chcę, żeby z czasem było Ci łatwiej być po swojej stronie.
          </h2>
        </div>

        {/* COPY */}
        <div className="space-y-6 md:space-y-8 text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] max-w-3xl">
          <p>
            Łatwiej przechodzi się przez zmianę, kiedy masz obok kogoś, kto wierzy w Ciebie, nie przekreśla Cię po błędzie i potrafi przypomnieć Ci szerszą perspektywę.
          </p>
          <p>
            Jedną z najważniejszych rzeczy w tym procesie jest stopniowo stawać się taką osobą dla siebie.
          </p>
          <p>
            Właśnie tak rozumiem miłość do siebie.
          </p>
          <p className="font-medium text-[#1E293B]">
            Bo ta droga nie polega tylko na tym, żeby osiągnąć więcej. Chodzi również o to, żeby przestać opuszczać siebie po drodze.
          </p>
        </div>

        {/* STATEMENT RELACJA */}
        <div className="my-20 md:my-28 flex flex-col items-start border-l-[3px] border-[#C29B57]/40 pl-6 md:pl-10">
          <p className="font-heading text-4xl md:text-5xl lg:text-[52px] text-[#1E293B] font-medium leading-[1.15] mb-8">
            Relacja ze sobą jest częścią zmiany.
          </p>
          <p className="text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] max-w-2xl">
            Chcę, żeby z czasem było Ci łatwiej zauważyć, co się z Tobą dzieje, nie przekreślać siebie po błędzie i wracać do tego, co jest dla Ciebie naprawdę ważne.
          </p>
        </div>

        {/* OBSZARY PRACY */}
        <div className="mb-20 md:mb-32 max-w-5xl">
          <p className="text-[20px] md:text-[22px] text-slate-700 font-light leading-[1.8] mb-12">
            Dlatego wracamy między innymi do:
          </p>
          <div className="flex flex-col gap-y-6 md:gap-y-8 text-[22px] md:text-[26px] text-[#0F172A] font-semibold leading-relaxed tracking-wide">
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>akceptacji</span>
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>wybaczania sobie</span>
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>wewnętrznego krytyka</span>
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>wewnętrznego dziecka</span>
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>poczucia własnej wartości</span>
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>stawania po swojej stronie</span>
            <span className="flex items-center"><span className="text-[#C29B57] mr-4 opacity-80 font-normal">/</span>kontaktu z tym, co naprawdę Twoje</span>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="pt-16 md:pt-24 border-t border-slate-200">
          <p className="font-heading text-[26px] md:text-[34px] text-[#0F172A] font-medium leading-[1.4] italic max-w-4xl mb-6">
            „Zaczęłam być swoim przyjacielem zamiast krytykiem.”
          </p>
          <div className="flex flex-col">
            <span className="font-medium text-[#1E293B] text-lg">Aleksandra</span>
            <span className="text-xs md:text-sm text-slate-500 font-bold tracking-widest uppercase mt-1">
              uczestniczka po programie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
