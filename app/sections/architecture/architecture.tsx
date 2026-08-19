import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";
import { cardAccent } from "../../lib/ui";

export default function Architecture() {
  return (
    <Section id="arquitetura" alt heading={content.architecture}>
      <CardGrid
        className="grid-cols-4 gap-6 max-sm:grid-cols-2"
        cardClassName={`${cardAccent} px-6 py-8 text-center hover:-translate-y-1.5`}
        items={content.architecture.items}
        renderMedia={(item) => (
          <div className="mx-auto mb-5 flex size-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-[1.8rem] font-extrabold tracking-tight text-white">
            {item.number}
          </div>
        )}
      />
    </Section>
  );
}
