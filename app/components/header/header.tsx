import { content } from "../../content";
import BrandLink from "../brand-link/brand-link";
import "./header.css";

export default function Header() {
  return (
    <header className="topbar">
      <a href="#conteudo" className="skip-link">
        {content.a11y.skipToContent}
      </a>

      <div className="container nav-wrap">
        <BrandLink priority />

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
  );
}
