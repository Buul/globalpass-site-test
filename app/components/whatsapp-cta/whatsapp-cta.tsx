import { content } from "../../content";
import { cn } from "../../lib/cn";
import { buttonPrimary } from "../../lib/ui";

type WhatsAppCtaProps = {
  children: string;
  className?: string;
};

/** Keeps the `target`/`rel` pairing in one place for every WhatsApp CTA. */
export default function WhatsAppCta({ children, className }: WhatsAppCtaProps) {
  return (
    <a
      href={content.contact.whatsappUrl}
      className={cn(buttonPrimary, className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
