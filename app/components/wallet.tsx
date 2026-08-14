import Image from "next/image";
import { content } from "../content";
import "./wallet.css";

export default function Wallet() {
  return (
    <section className="section">
      <div className="container wallet-showcase">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">{content.wallet.eyebrow}</span>
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
  );
}
