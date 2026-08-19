import Image from "next/image";
import { content } from "../../content";
import WhatsAppCta from "../../components/whatsapp-cta/whatsapp-cta";
import { withBreaks } from "../../components/with-breaks/with-breaks";
import { cn } from "../../lib/cn";
import { buttonSecondary, container } from "../../lib/ui";

const heroButton = "px-[1.6rem] py-[0.72rem] text-[0.95rem] font-medium max-sm:w-full";

export default function Hero() {
  return (
    <section
      className={cn(
        "relative flex min-h-[clamp(460px,38vw,600px)] items-center overflow-hidden bg-white py-14",
        "after:pointer-events-none after:absolute after:inset-0 after:content-['']",
        "after:bg-[linear-gradient(to_right,#fff_0%,#fff_34%,rgba(255,255,255,0.82)_45%,transparent_60%)]",
        "max-md:min-h-0 max-md:flex-col max-md:items-stretch max-md:py-0 max-md:pb-14",
        "max-md:after:hidden max-sm:pb-11",
      )}
      aria-labelledby="hero-title"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "max-md:relative max-md:inset-auto max-md:mb-9 max-md:aspect-[1024/575] max-md:max-h-[380px]",
          "max-sm:mb-7",
        )}
      >
        <Image
          src="/hero-lobby.png"
          alt={content.hero.imageAlt}
          className="object-cover object-[50%_30%] max-md:object-center"
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className={`${container} relative z-[1]`}>
        <div className="max-w-[min(560px,52%)] max-md:max-w-none">
          <span className="mb-5 block text-xs font-medium tracking-[0.14em] text-gray-500 uppercase">
            {content.hero.eyebrow}
          </span>
          <h1
            id="hero-title"
            className="mb-[22px] text-[clamp(1.7rem,3.2vw,2.55rem)] leading-[1.18] font-medium tracking-tight text-balance text-[#17181c]"
          >
            {withBreaks(content.hero.title)}
          </h1>
          <p className="m-0 max-w-[420px] text-base leading-[1.65] text-muted max-md:max-w-none">
            {content.hero.description}
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3 max-sm:flex-col max-sm:items-stretch">
            <WhatsAppCta
              className={cn(
                "bg-accent! shadow-none hover:bg-accent-strong!",
                heroButton,
              )}
            >
              {content.hero.ctaPrimary}
            </WhatsAppCta>
            <a
              href="#jornada"
              className={cn(
                buttonSecondary,
                "border-[rgba(17,24,39,0.5)] bg-white text-[#17181c]",
                heroButton,
              )}
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
