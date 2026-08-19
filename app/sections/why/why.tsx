import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";
import { cardWash } from "../../lib/ui";

export default function Why() {
  return (
    <Section id="beneficios" alt heading={content.why}>
      <CardGrid
        className="grid-cols-5 gap-5 max-sm:gap-3"
        cardClassName={`${cardWash} text-center max-sm:px-4 max-sm:py-5`}
        titleClassName="text-[1.1rem] max-sm:text-base"
        textClassName="max-sm:text-[0.85rem]"
        items={content.why.items}
      />
    </Section>
  );
}
