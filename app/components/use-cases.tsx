import { content } from "../content";
import CardGrid from "./card-grid";
import Section from "./section";
import "./use-cases.css";

export default function UseCases() {
  return (
    <Section id="casos" alt heading={content.useCases}>
      <CardGrid
        className="use-cases-grid"
        cardClassName="use-case-card card-accent"
        items={content.useCases.items}
      />
    </Section>
  );
}
