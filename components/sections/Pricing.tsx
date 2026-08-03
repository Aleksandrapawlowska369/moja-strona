import { Check } from 'lucide-react';
import Link from 'next/link';

export function Pricing() {
  return (
    <section id="oferta" className="py-20 md:py-32 bg-[#F1F5F9]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6">
            Inwestycja w siebie
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pełny proces 90 dni prowadzi przez wszystkie cztery etapy programu. Jeśli wolisz rozpocząć spokojniej, możesz wybrać pierwszy miesiąc albo rozłożyć płatność na raty.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch mb-16">
          
          {/* Pakiet 1: 30 DNI */}
          <div className="order-3 lg:order-1 w-full lg:w-1/3 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col">
            <h3 className="text-xl font-bold text-[#1E293B] mb-2 uppercase">PAKIET 30 DNI</h3>
            <p className="text-slate-500 mb-6">Pierwszy etap procesu</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-[#1E293B]">597 zł <span className="text-lg font-bold text-slate-400">brutto</span></span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                'etap ZOBACZ i fundament dalszej pracy,',
                'materiały mindsetowe, oddechowe, medytacyjne i ruchowe przewidziane na pierwsze 30 dni,',
                'codzienne wiadomości prowadzące,',
                'udział w sesjach Q&A przez okres dostępu,',
                'pięć miesięcy dostępu.'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-[#3A84FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mb-6 text-center leading-relaxed">
              Pakiet 30 dni jest wartościowym początkiem, ale nie obejmuje całej 90-dniowej drogi.
            </p>
            <Link href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-30-dni.html" target="_blank" className="w-full py-3 px-6 rounded-xl border-2 border-slate-200 text-[#1E293B] font-bold text-center hover:border-[#3A84FF] hover:text-[#3A84FF] transition-colors mt-auto block">
              ZACZYNAM OD 30 DNI
            </Link>
          </div>

          {/* Pakiet 2 - 90 DNI (Highlighted) */}
          <div className="order-1 lg:order-2 w-full lg:w-1/3 bg-[#1E293B] rounded-3xl p-8 shadow-2xl relative flex flex-col lg:-translate-y-4 border border-[#3A84FF]/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3A84FF] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              PEŁNA REKOMENDOWANA DROGA
            </div>
            <h3 className="text-xl font-bold text-white mb-2 mt-4 uppercase">PEŁNY PROCES 90 DNI</h3>
            <p className="text-slate-400 mb-6">Wszystkie cztery etapy programu</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">1497 zł <span className="text-lg font-bold text-slate-400">brutto</span></span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                'etapy ZOBACZ, ROZBRÓJ, WCIEL i TWÓRZ,',
                '36 nagrań mindsetowych,',
                'praktyki oddechowe, medytacje, autohipnozy i praca z ciałem,',
                'codzienne prowadzenie i regularne Q&A,',
                'materiały integracyjne,',
                'pięć miesięcy dostępu.'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-[#3A84FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" target="_blank" className="w-full py-3 px-6 rounded-[10px] bg-gradient-to-r from-[#3A84FF] to-[#2563EB] text-white font-bold text-center hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(58,132,255,0.4)] mt-auto block">
              DOŁĄCZAM DO PEŁNYCH 90 DNI
            </Link>
          </div>

          {/* Pakiet 3 - RATALNA */}
          <div className="order-2 lg:order-3 w-full lg:w-1/3 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col">
            <h3 className="text-xl font-bold text-[#1E293B] mb-2 uppercase">PŁATNOŚĆ RATALNA</h3>
            <p className="text-slate-500 mb-6">Pełny proces 90 dni</p>
            <div className="mb-8">
              <span className="text-2xl font-black text-[#1E293B]">Rozłóż 1497 zł na raty</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                'płatność ratalna przez Przelewy24,',
                'możliwość skorzystania z TubaPay,',
                'dostępne warianty zobaczysz podczas zakupu,',
                'ostateczne warunki i koszt finansowania przedstawia operator.'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-[#3A84FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="https://kursy.przeistoczenie.pl/s/twoja-nowa-tozsamosc-90-dni.html" target="_blank" className="w-full py-3 px-6 rounded-xl border-2 border-slate-200 text-[#1E293B] font-bold text-center hover:border-[#3A84FF] hover:text-[#3A84FF] transition-colors mt-auto block">
              SPRAWDZAM DOSTĘPNE RATY
            </Link>
          </div>

        </div>

        {/* Informacje pod kartami */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-4 text-slate-600 text-sm md:text-base text-left md:text-center space-y-6 md:space-y-4">
            <p className="leading-relaxed">
              Pakiet 30 dni pozwala rozpocząć od pierwszego etapu. Przed jego zakończeniem otrzymasz informację o możliwości dokupienia pozostałej części programu za 1097 zł brutto.
            </p>
            <p className="leading-relaxed">
              Wpłata za pakiet 30 dni nie jest odliczana od ceny kontynuacji. Przy aktualnych cenach regularnych pełna droga kupowana etapami kosztuje łącznie 1694 zł brutto.
            </p>
            <p className="leading-relaxed">
              Kupując pełny proces 90 dni od razu za 1497 zł brutto, oszczędzasz 197 zł i od początku otrzymujesz dostęp do całej, zaplanowanej drogi.
            </p>
            <p className="leading-relaxed font-semibold text-[#1E293B]">
              Pełny proces 90 dni jest najkorzystniejszym wyborem, jeśli chcesz przejść całą drogę.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Wszystkie ceny podane na stronie są cenami brutto.
          </p>
        </div>

      </div>
    </section>
  );
}

