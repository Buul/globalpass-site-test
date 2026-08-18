import { content } from "../content";
import Section from "./section";
import "./impact.css";

const { table } = content.impact;

export default function Impact() {
  return (
    <Section id="impacto" heading={content.impact}>
      <div className="container">
        <table className="impact-table">
          <caption className="visually-hidden">{table.caption}</caption>
          <thead>
            <tr className="table-header-row">
              <th scope="col" className="table-heading">
                {table.process}
              </th>
              <th scope="col" className="table-heading">
                {table.before}
              </th>
              <th scope="col" className="table-heading">
                {table.after}
              </th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.process} className="comparison-row">
                <th scope="row" className="table-label">
                  {row.process}
                </th>
                <td className="table-before">
                  <span className="status-badge status-before" aria-hidden="true">
                    ❌
                  </span>
                  <span className="status-text">{row.before}</span>
                </td>
                <td className="table-after">
                  <span className="status-badge status-after" aria-hidden="true">
                    ✓
                  </span>
                  <span className="status-text">{row.after}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
