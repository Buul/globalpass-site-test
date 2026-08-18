import Image from "next/image";
import { content } from "../../content";
import WhatsAppCta from "../../components/whatsapp-cta/whatsapp-cta";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src="/hero-lobby.png"
          alt={content.hero.imageAlt}
          className="hero-photo"
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">{content.hero.eyebrow}</span>
          <h1 id="hero-title">{content.hero.title}</h1>
          <p>{content.hero.description}</p>

          <div className="cta-row">
            <WhatsAppCta>{content.hero.ctaPrimary}</WhatsAppCta>
            <a href="#jornada" className="button button-secondary">
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
