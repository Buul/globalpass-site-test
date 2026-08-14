import Image from "next/image";
import { content } from "../content";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
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
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>

          <div className="cta-row">
            <a
              href={content.contact.whatsappUrl}
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.hero.ctaPrimary}
            </a>
            <a href="#jornada" className="button button-secondary">
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
