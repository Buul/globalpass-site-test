import { content } from "../../content";
import BrandLink from "../brand-link/brand-link";
import { buttonPrimary, container } from "../../lib/ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-primary/30 bg-white/75 backdrop-blur-[12px]">
      <a
        href="#conteudo"
        className="absolute top-[-120px] left-4 z-[100] rounded-full bg-primary px-[1.2rem] py-[0.7rem] font-semibold text-white focus:top-4"
      >
        {content.a11y.skipToContent}
      </a>

      <div
        className={`${container} flex min-h-20 items-center justify-between gap-5`}
      >
        <BrandLink priority />

        <nav
          className="flex items-center gap-7 text-muted max-md:hidden"
          aria-label={content.nav.ariaLabel}
        >
          {content.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className={buttonPrimary}>
          {content.nav.cta}
        </a>
      </div>
    </header>
  );
}
