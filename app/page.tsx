import { Fragment } from "react";
import Image from "next/image";
import CookiePreferencesButton from "./components/cookie-preferences-button";
import { content } from "./content";

function withBreaks(text: string) {
  return text.split("\n").map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}

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

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand" aria-label={content.brand.homeAriaLabel}>
            <Image
              src="/logo.svg"
              alt={content.brand.name}
              width={186}
              height={30}
              priority
            />
          </div>

          <nav className="main-nav" aria-label={content.nav.ariaLabel}>
            {content.nav.items.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="button button-primary">
            {content.nav.cta}
          </a>
        </div>
      </header>

      <main>
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

        <section id="jornada" className="section">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">{content.journey.eyebrow}</span>
            <h2>{content.journey.title}</h2>
            <p>{content.journey.description}</p>
          </div>

          <div className="container journey-grid">
            {content.journey.steps.map((step) => (
              <article key={step.step} className="journey-card">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="plataforma" className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">
              {content.platform.eyebrow}
            </span>
            <h2>{withBreaks(content.platform.title)}</h2>
            <p>{content.platform.description}</p>
          </div>

          <div className="container features-grid">
            {content.platform.features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="integracoes" className="section">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">
              {content.integrations.eyebrow}
            </span>
            <h2>{content.integrations.title}</h2>
            <p>{content.integrations.description}</p>
          </div>

          <div className="container integrations-grid">
            {content.integrations.items.map((integration) => (
              <div key={integration} className="integration-badge">
                {integration}
              </div>
            ))}
          </div>
        </section>

        <section id="casos" className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">
              {content.useCases.eyebrow}
            </span>
            <h2>{withBreaks(content.useCases.title)}</h2>
            <p>{content.useCases.description}</p>
          </div>

          <div className="container use-cases-grid">
            {content.useCases.items.map((useCase) => (
              <article key={useCase.title} className="use-case-card">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container wallet-showcase">
            <div className="section-header">
              <span className="eyebrow eyebrow-dark">
                {content.wallet.eyebrow}
              </span>
              <h2>{content.wallet.title}</h2>
              <p>{content.wallet.description}</p>
            </div>

            <div className="wallet-visual">
              <Image
                src="/wallet-office.jpg"
                alt=""
                className="wallet-visual-scene"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <Image
                src="/wallet-person.webp"
                alt={content.wallet.imageAlt}
                className="wallet-visual-person"
                width={712}
                height={976}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="container wallet-features-full">
            {content.wallet.features.map((feature) => (
              <div key={feature.title} className="wallet-feature">
                <div className="feature-icon">{feature.icon}</div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="beneficios" className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">{content.why.eyebrow}</span>
            <h2>{content.why.title}</h2>
          </div>

          <div className="container benefits-grid">
            {content.why.items.map((benefit) => (
              <article key={benefit.title} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">{content.impact.eyebrow}</span>
            <h2>{withBreaks(content.impact.title)}</h2>
            <p>{content.impact.description}</p>
          </div>

          <div className="container impact-table">
            <div className="table-header-row">
              <div className="table-label-header">
                {content.impact.table.process}
              </div>
              <div className="table-before-header">
                {content.impact.table.before}
              </div>
              <div className="table-after-header">
                {content.impact.table.after}
              </div>
            </div>
            <div className="table-body">
              {content.impact.table.rows.map((row) => (
                <div key={row.process} className="comparison-row">
                  <div className="table-label">
                    <strong>{row.process}</strong>
                  </div>
                  <div className="table-before">
                    <span className="status-badge status-before">❌</span>
                    <p>{row.before}</p>
                  </div>
                  <div className="table-after">
                    <span className="status-badge status-after">✓</span>
                    <p>{row.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">
              {content.architecture.eyebrow}
            </span>
            <h2>{content.architecture.title}</h2>
            <p>{content.architecture.description}</p>
          </div>

          <div className="container architecture-grid">
            {content.architecture.items.map((item) => (
              <div key={item.number} className="arch-item">
                <div className="arch-number">{item.number}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato" className="footer">
        <div className="container footer-wrap">
          <div>
            <div className="brand brand-footer">
              <Image
                src="/logo.svg"
                alt={content.brand.name}
                width={186}
                height={30}
              />
            </div>
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
    </div>
  );
}
