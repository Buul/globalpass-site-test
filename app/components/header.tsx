import Image from "next/image";
import { content } from "../content";
import "./header.css";

export default function Header() {
  return (
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
  );
}
