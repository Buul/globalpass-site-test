import { content } from "../content";
import { withBreaks } from "./with-breaks";
import "./platform.css";

export default function Platform() {
  return (
    <section id="plataforma" className="section section-alt">
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">{content.platform.eyebrow}</span>
        <h2>{withBreaks(content.platform.title)}</h2>
        <p>{content.platform.description}</p>
      </div>

      <div className="container features-grid">
        {content.platform.features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
