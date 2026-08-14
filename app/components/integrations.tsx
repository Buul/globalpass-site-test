import { content } from "../content";
import "./integrations.css";

export default function Integrations() {
  return (
    <section id="integracoes" className="section">
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">
          {content.integrations.eyebrow}
        </span>
        <h2>{content.integrations.title}</h2>
        <p>{content.integrations.description}</p>
      </div>

      <div className="container integrations-grid">
        {content.integrations.items.map((integration) => (
          <div key={integration} className="integration-badge">
            {integration}
          </div>
        ))}
      </div>
    </section>
  );
}
