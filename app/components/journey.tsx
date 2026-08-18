import { content } from "../content";
import CardGrid from "./card-grid";
import Section from "./section";
import "./journey.css";

export default function Journey() {
  return (
    <Section id="jornada" heading={content.journey}>
      <CardGrid
        className="journey-grid"
        cardClassName="journey-card"
        items={content.journey.steps}
        renderMedia={(step) => <div className="step-number">{step.step}</div>}
      />
    </Section>
  );
}
