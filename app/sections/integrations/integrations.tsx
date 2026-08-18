import { content } from "../../content";
import Section from "../../components/section/section";
import "./integrations.css";

export default function Integrations() {
  return (
    <Section id="integracoes" heading={content.integrations}>
      <div className="container card-grid integrations-grid">
        {content.integrations.items.map((integration) => (
          <div key={integration} className="card integration-badge card-wash">
            <span>{integration}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
