import { content } from "../content";
import "./journey.css";

export default function Journey() {
  return (
    <section id="jornada" className="section" aria-labelledby="jornada-title">
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">{content.journey.eyebrow}</span>
        <h2 id="jornada-title">{content.journey.title}</h2>
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
  );
}
