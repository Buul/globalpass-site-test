import Link from "next/link";
import { content } from "../../content";
import { container } from "../../lib/ui";
import BrandLink from "../brand-link/brand-link";
import CookiePreferencesButton from "../cookie-preferences-button/cookie-preferences-button";
import WhatsAppCta from "../whatsapp-cta/whatsapp-cta";

function ContactIcon({ name }: { name: "mail" | "instagram" | "phone" }) {
  return (
    <svg
      className="shrink-0 opacity-65 transition-opacity duration-200 group-hover:opacity-100"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "mail" && (
        <>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3.6 6.6 8.4 5.9 8.4-5.9" />
        </>
      )}
      {name === "instagram" && (
        <>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </>
      )}
      {name === "phone" && (
        <path d="M6.6 3.5h3l1.5 3.7-1.9 1.4a10.5 10.5 0 0 0 5.3 5.3l1.4-1.9 3.7 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 5.1 5.1 1.5 1.5 0 0 1 6.6 3.5Z" />
      )}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="bg-primary py-9 pb-[52px] text-white/90">
      <div
        className={`${container} flex items-center justify-between gap-6 max-md:flex-col max-md:items-start`}
      >
        <div>
          <BrandLink className="mb-2" imageClassName="brightness-0 invert" />
          <p className="m-0 text-white/70">{content.footer.tagline}</p>

          <address className="mt-[18px] flex flex-col items-start gap-2.5 text-[0.95rem] not-italic">
            {content.contact.items.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                className="group inline-flex items-center gap-2.5 text-white/85 transition-colors duration-200 hover:text-white"
                aria-label={`${contact.label}: ${contact.value}`}
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <ContactIcon name={contact.icon} />
                <span className="group-hover:underline group-hover:underline-offset-[3px]">
                  {contact.value}
                </span>
              </a>
            ))}
          </address>

          <CookiePreferencesButton />
          <Link
            href="/privacidade"
            className="mt-3 block text-[0.85rem] text-white/70 underline underline-offset-[3px] transition-colors duration-200 hover:text-white"
          >
            {content.footer.privacy}
          </Link>
        </div>

        <div className="flex flex-col items-end gap-3.5 text-right max-md:items-start max-md:text-left">
          <p className="m-0 text-white/70">{content.footer.cta}</p>
          <WhatsAppCta>{content.footer.ctaButton}</WhatsAppCta>
        </div>
      </div>
    </footer>
  );
}
