import { content } from "../content";

/** Keeps the `target`/`rel` pairing in one place for every WhatsApp CTA. */
export default function WhatsAppCta({ children }: { children: string }) {
  return (
    <a
      href={content.contact.whatsappUrl}
      className="button button-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
