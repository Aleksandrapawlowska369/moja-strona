import Link from 'next/link';

interface DiscoveryLinkProps {
  href: string;
  text: string;
  theme?: 'light' | 'dark'; // 'light' means light text (for dark bg), 'dark' means dark text (for light bg)
}

export function DiscoveryLink({ href, text, theme = 'dark' }: DiscoveryLinkProps) {
  const isLightText = theme === 'light';
  const textColor = isLightText ? 'text-white' : 'text-slate-900';
  const hoverColor = isLightText ? 'hover:text-slate-200' : 'hover:text-black';

  return (
    <div className="flex justify-center pt-16 md:pt-24 pb-4">
      <Link 
        href={href}
        className={`group inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wider uppercase transition-colors ${textColor} ${hoverColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C29B57] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm`}
      >
        <span className="text-center">{text}</span>
        <span className="text-[#C29B57] text-xl leading-none group-hover:translate-y-1 transition-transform duration-300">
          ↓
        </span>
      </Link>
    </div>
  );
}
