import { content } from "../content";
import { withBreaks } from "./with-breaks";
import "./impact.css";

export default function Impact() {
  return (
    <section className="section">
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">{content.impact.eyebrow}</span>
        <h2>{withBreaks(content.impact.title)}</h2>
        <p>{content.impact.description}</p>
      </div>

      <div className="container impact-table">
        <div className="table-header-row">
          <div className="table-label-header">{content.impact.table.process}</div>
          <div className="table-before-header">{content.impact.table.before}</div>
          <div className="table-after-header">{content.impact.table.after}</div>
        </div>
        <div className="table-body">
          {content.impact.table.rows.map((row) => (
            <div key={row.process} className="comparison-row">
              <div className="table-label">
                <strong>{row.process}</strong>
              </div>
              <div className="table-before">
                <span className="status-badge status-before">❌</span>
                <p>{row.before}</p>
              </div>
              <div className="table-after">
                <span className="status-badge status-after">✓</span>
                <p>{row.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
