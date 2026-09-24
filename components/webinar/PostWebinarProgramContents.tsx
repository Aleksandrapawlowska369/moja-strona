export function PostWebinarProgramContents() {
  const mainFeatures = [
    {
      title: "39 MATERIAŁÓW MINDSETOWYCH",
      description: "Praca z automatycznymi reakcjami, przekonaniami, lękiem, uwagą, standardami, relacją ze sobą, działaniem, pragnieniami i świadomą kreacją."
    },
    {
      title: "39 PROWADZONYCH PRAKTYK DOŚWIADCZENIOWYCH",
      description: "Oddech, ruch i praca z ciałem, medytacje, autohipnozy, praktyki energetyczne oraz prowadzona praca z podświadomością."
    },
    {
      title: "13 INTROSPEKCJI",
      description: "12 tygodniowych + 1 końcowa, żeby zauważać zmianę, wracać do tego, co było dla Ciebie ważne i widzieć własny proces."
    },
    {
      title: "Q&A ZE MNĄ CO 3 DO 4 TYGODNIE",
      description: "Pytania, dodatkowa perspektywa i wspólna praktyka. Nagranie całego Q&A wraz z praktyką jest dostępne przez 7 dni."
    },
    {
      title: "CODZIENNY MAIL",
      description: "Przypomina o kolejnym kroku, krótko wprowadza w temat i podpowiada, czy warto przygotować zeszyt, miejsce do ruchu albo spokojniejsze warunki.\n\nWiadomość przychodzi codziennie o tej samej godzinie i minucie, o której został uruchomiony Twój dostęp."
    },
    {
      title: "5 MIESIĘCY DOSTĘPU",
      description: "Od pierwszej płatności masz dodatkową przestrzeń na zwykłe życie, powroty i ponowne korzystanie z ważnych praktyk."
    }
  ];

  const supportingFeatures = [
    {
      title: "MEDYTACJA RADOŚCI",
      description: "Wspólna praktyka oparta na śmiechu i świadomej pracy ze stanem."
    },
    {
      title: "APLIKACJA MOBILNA",
      description: "Do materiałów i praktyk możesz wracać również w aplikacji mobilnej."
    },
    {
      title: "LIST DO SIEBIE",
      description: "Na początku piszesz list do siebie, który otwierasz dopiero po pełnych 90 dniach."
    },
    {
      title: "KOŃCOWA REFLEKSJA",
      description: "Domykasz 90 dni refleksją nad tym, co się zmieniło, co zabierasz ze sobą i do czego chcesz wracać dalej."
    }
  ];

  return (
    <section id="program-contents" className="py-24 md:py-32 bg-[#0F172A] text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* H2 */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15]">
            Co dokładnie przygotowałem dla Ciebie?
          </h2>
        </div>

        {/* MAIN LAYER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-16 md:gap-y-24 mb-24 md:mb-32">
          {mainFeatures.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-heading text-3xl md:text-4xl text-white font-medium mb-4 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-[17px] md:text-[19px] text-slate-300 font-light leading-[1.8] whitespace-pre-wrap">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 w-full mb-16 md:mb-24"></div>

        {/* SUPPORTING LAYER */}
        <div className="mb-10 md:mb-12">
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12">
            W procesie czekają na Ciebie również
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-10 md:gap-y-12 mb-24 md:mb-32 pt-6 border-t border-slate-800/50">
          {supportingFeatures.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-sm md:text-[15px] text-slate-400 font-bold tracking-widest uppercase mb-2 md:mb-3">
                {item.title}
              </h4>
              <p className="text-base md:text-lg text-slate-500 font-light leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* PRIMARY CTA */}
        <div className="pt-12 text-left md:text-center">
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-white text-[#0F172A] hover:bg-slate-200 text-sm md:text-base font-bold tracking-wider uppercase transition-all rounded-md shadow-lg group"
          >
            ZOBACZ WARUNKI DOŁĄCZENIA <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
