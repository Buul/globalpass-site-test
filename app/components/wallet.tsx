import Image from "next/image";
import { content } from "../content";
import CardGrid from "./card-grid";
import Section, { SectionHeader } from "./section";
import "./wallet.css";

export default function Wallet() {
  return (
    <Section id="wallet">
      <div className="container wallet-showcase">
        <SectionHeader
          id="wallet"
          heading={content.wallet}
          className="section-header"
        />

        <div className="wallet-visual">
          <Image
            src="/wallet-office.jpg"
            alt=""
            aria-hidden="true"
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

      <CardGrid
        className="wallet-features-full"
        cardClassName="wallet-feature card-accent"
        items={content.wallet.features}
        renderMedia={(feature) => (
          <div className="feature-icon">{feature.icon}</div>
        )}
      />
    </Section>
  );
}
