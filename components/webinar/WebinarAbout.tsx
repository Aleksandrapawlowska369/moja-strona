import Image from 'next/image';

export function WebinarAbout() {
  return (
    <section className="relative py-20 md:py-32 bg-[#F5F5F4] overflow-hidden font-sans">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 items-center lg:items-start">
          
          {/* PHOTO COLUMN */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div className="aspect-square sm:aspect-[4/5] max-w-sm mx-auto lg:max-w-none relative rounded-2xl overflow-hidden shadow-xl bg-stone-200">
              <Image 
                src="/przemek-krupski.jpeg" 
                alt="Przemysław Krupski" 
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          
          {/* TEXT COLUMN */}
          <div className="w-full lg:w-[60%] flex flex-col lg:pt-8">
            
            <div className="mb-10 md:mb-12 text-center lg:text-left">
              <span className="inline-block text-primary font-sans font-semibold tracking-widest text-xs uppercase mb-6">
                Kilka słów o mnie
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-medium text-slate-900 leading-[1.25] text-balance max-w-2xl mx-auto lg:mx-0">
                Co sprawia, że człowiek nie tylko coś rozumie, ale naprawdę zaczyna inaczej żyć?
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Nazywam się Przemek Krupski i od dawna właśnie to pytanie prowadzi moją pracę.
              </p>
              
              {/* CORE METHOD PARAGRAPH */}
              <p className="text-xl md:text-[1.35rem] font-medium text-slate-800 leading-relaxed pt-2">
                Nie zatrzymuję się w niej na samym mindsetcie. Łączę pracę z przekonaniami i tym, co działa w nas automatycznie, z oddechem, medytacją, ruchem, ciałem i tym, jak podejmujemy decyzje w prawdziwym życiu.
              </p>
              
              <p className="pt-2">
                Bo można bardzo dużo wiedzieć o sobie i zmianie.
              </p>
              
              {/* CENTRAL QUESTION / ANCHOR STATEMENT */}
              <div className="my-10 pl-6 border-l-2 border-primary/60">
                <p className="text-2xl md:text-3xl font-heading font-medium text-slate-900 leading-snug">
                  Najważniejsze pytanie brzmi jednak: czy potrafisz z tej wiedzy skorzystać wtedy, kiedy naprawdę jej potrzebujesz?
                </p>
              </div>
              
              {/* ENDING */}
              <p className="text-slate-600 font-medium pt-2">
                Właśnie z tej perspektywy poprowadzę Cię przez to nagranie.
              </p>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
