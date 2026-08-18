import { content } from "../content";
import CardGrid from "./card-grid";
import Section from "./section";
import "./platform.css";

export default function Platform() {
  return (
    <Section id="plataforma" alt heading={content.platform}>
      <CardGrid
        className="features-grid"
        cardClassName="feature-card card-accent"
        items={content.platform.features}
      />
    </Section>
  );
}
