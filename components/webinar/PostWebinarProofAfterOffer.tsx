export function PostWebinarProofAfterOffer() {
  return (
    <section id="opinie" className="py-20 md:py-24 bg-[#0F172A] text-white border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* TESTIMONIAL */}
          <div className="flex-1 bg-slate-800/50 p-8 md:p-10 rounded-2xl border border-slate-700">
            <p className="text-xs md:text-sm text-[#C29B57] font-bold tracking-widest uppercase mb-6">
              UCZESTNICZKA PO PROGRAMIE
            </p>
            <p className="font-heading text-[20px] md:text-[24px] text-white font-medium leading-[1.6] italic">
              „Przeszłam cały program, okej, zajęło mi to około 100 dni, ale przeszłam go do końca. I to już samo w sobie jest dla mnie dużą zmianą.”
            </p>
          </div>

          {/* REASSURANCE COPY */}
          <div className="flex-1 space-y-6 text-[18px] md:text-[20px] text-slate-300 font-light leading-[1.8] pt-4 md:pt-6">
            <p>
              Nie musisz zrobić tych 90 dni perfekcyjnie.
            </p>
            <p>
              Masz 5 miesięcy dostępu, więc jeśli pojawi się trudniejszy tydzień, przerwa albo zwykłe życie, po prostu wracasz do miejsca, w którym jesteś.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
