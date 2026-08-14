import Image from "next/image";
import { content } from "../content";
import CookiePreferencesButton from "./cookie-preferences-button";
import "./footer.css";

function ContactIcon({ name }: { name: "mail" | "instagram" | "phone" }) {
  return (
    <svg
      className="footer-contact-icon"
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
    <footer id="contato" className="footer">
      <div className="container footer-wrap">
        <div>
          <a href="/" className="brand brand-footer">
            <Image
              src="/logo.svg"
              alt={content.brand.name}
              width={186}
              height={30}
            />
          </a>
          <p>{content.footer.tagline}</p>

          <address className="footer-contacts">
            {content.contact.items.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                className="footer-contact"
                aria-label={`${contact.label}: ${contact.value}`}
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <ContactIcon name={contact.icon} />
                <span>{contact.value}</span>
              </a>
            ))}
          </address>

          <CookiePreferencesButton />
        </div>

        <div className="footer-cta">
          <p>{content.footer.cta}</p>
          <a
            href={content.contact.whatsappUrl}
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.footer.ctaButton}
          </a>
        </div>
      </div>
    </footer>
  );
}
