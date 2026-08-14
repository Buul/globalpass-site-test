import { content } from "../content";
import { withBreaks } from "./with-breaks";
import "./impact.css";

export default function Impact() {
  return (
    <section className="section" id="impacto" aria-labelledby="impacto-title">
      <div className="container section-header">
        <span className="eyebrow eyebrow-dark">{content.impact.eyebrow}</span>
        <h2 id="impacto-title">{withBreaks(content.impact.title)}</h2>
        <p>{content.impact.description}</p>
      </div>

      <div className="container">
        <table className="impact-table">
          <caption className="visually-hidden">
            {content.impact.table.caption}
          </caption>
          <thead>
            <tr className="table-header-row">
              <th scope="col" className="table-label-header">
                {content.impact.table.process}
              </th>
              <th scope="col" className="table-before-header">
                {content.impact.table.before}
              </th>
              <th scope="col" className="table-after-header">
                {content.impact.table.after}
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {content.impact.table.rows.map((row) => (
              <tr key={row.process} className="comparison-row">
                <th scope="row" className="table-label">
                  {row.process}
                </th>
                <td className="table-before">
                  <span className="status-badge status-before" aria-hidden="true">
                    ❌
                  </span>
                  <span>{row.before}</span>
                </td>
                <td className="table-after">
                  <span className="status-badge status-after" aria-hidden="true">
                    ✓
                  </span>
                  <span>{row.after}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
