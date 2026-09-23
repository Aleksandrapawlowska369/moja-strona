import { WebivioWidget } from './WebivioWidget';

export function WebinarRegistration() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#111111]">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Framing */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="text-slate-200 font-heading font-medium text-3xl md:text-4xl lg:text-[2.25rem] leading-tight">
              Obejrzyj od razu albo wybierz dogodny termin.
            </h2>
          </div>
          
          {/* Right: Widget */}
          <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-background/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
              <WebivioWidget />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
