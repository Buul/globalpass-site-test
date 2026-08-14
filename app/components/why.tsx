import { content } from "../content";
import "./why.css";

export default function Why() {
  return (
    <section
      id="beneficios"
      className="section section-alt"
      aria-labelledby="beneficios-title"
    >
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">{content.why.eyebrow}</span>
        <h2 id="beneficios-title">{content.why.title}</h2>
      </div>

      <div className="container benefits-grid">
        {content.why.items.map((benefit) => (
          <article key={benefit.title} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
