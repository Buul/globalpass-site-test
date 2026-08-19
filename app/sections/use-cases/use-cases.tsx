import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";
import { cardAccent } from "../../lib/ui";

export default function UseCases() {
  return (
    <Section id="casos" alt heading={content.useCases}>
      <CardGrid
        className="grid-cols-2 gap-7 max-md:grid-cols-1"
        cardClassName={`${cardAccent} rounded-[28px] px-9 py-11 before:h-1.5 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(90,0,227,0.14)] max-sm:px-6 max-sm:py-8`}
        titleClassName="mb-[18px] text-[1.4rem] leading-[1.2] max-sm:text-[1.2rem]"
        textClassName="text-[0.95rem] leading-[1.8] max-sm:text-[0.9rem]"
        items={content.useCases.items}
      />
    </Section>
  );
}
