import { content } from "../content";
import { withBreaks } from "./with-breaks";
import "./use-cases.css";

export default function UseCases() {
  return (
    <section
      id="casos"
      className="section section-alt"
      aria-labelledby="casos-title"
    >
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">{content.useCases.eyebrow}</span>
        <h2 id="casos-title">{withBreaks(content.useCases.title)}</h2>
        <p>{content.useCases.description}</p>
      </div>

      <div className="container use-cases-grid">
        {content.useCases.items.map((useCase) => (
          <article key={useCase.title} className="use-case-card">
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
