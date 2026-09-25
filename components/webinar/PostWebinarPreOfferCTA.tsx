export function PostWebinarPreOfferCTA({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const isDark = theme === "dark";
  return (
    <div className="w-full flex justify-center pt-8 md:pt-10">
      <a
        href="#oferta"
        className={`inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold tracking-wider uppercase transition-all rounded-md shadow-md group ${
          isDark
            ? "bg-white text-[#0F172A] hover:bg-slate-200"
            : "bg-[#0F172A] text-white hover:bg-slate-800"
        }`}
      >
        ZOBACZ CENĘ I WARUNKI DOŁĄCZENIA <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
      </a>
    </div>
  );
}