import { content } from "../content";
import "./architecture.css";

export default function Architecture() {
  return (
    <section
      className="section section-alt"
      id="arquitetura"
      aria-labelledby="arquitetura-title"
    >
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">
          {content.architecture.eyebrow}
        </span>
        <h2 id="arquitetura-title">{content.architecture.title}</h2>
        <p>{content.architecture.description}</p>
      </div>

      <div className="container architecture-grid">
        {content.architecture.items.map((item) => (
          <div key={item.number} className="arch-item">
            <div className="arch-number">{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
