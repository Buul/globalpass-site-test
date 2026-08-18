import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";
import "./architecture.css";

export default function Architecture() {
  return (
    <Section id="arquitetura" alt heading={content.architecture}>
      <CardGrid
        className="architecture-grid"
        cardClassName="arch-item card-accent"
        items={content.architecture.items}
        renderMedia={(item) => <div className="arch-number">{item.number}</div>}
      />
    </Section>
  );
}
