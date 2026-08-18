import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";
import "./why.css";

export default function Why() {
  return (
    <Section id="beneficios" alt heading={content.why}>
      <CardGrid
        className="benefits-grid"
        cardClassName="benefit-card card-wash"
        items={content.why.items}
      />
    </Section>
  );
}
