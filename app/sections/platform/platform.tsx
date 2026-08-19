import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";
import { cardAccent } from "../../lib/ui";

export default function Platform() {
  return (
    <Section id="plataforma" alt heading={content.platform}>
      <CardGrid
        className="grid-cols-3 gap-6"
        cardClassName={`${cardAccent} rounded-3xl px-8 py-10 hover:shadow-[0_20px_50px_rgba(90,0,227,0.12)] max-sm:px-5 max-sm:py-7`}
        titleClassName="mb-4 text-[1.25rem] max-sm:text-[1.1rem]"
        textClassName="text-[0.95rem] leading-[1.7] max-sm:text-[0.9rem]"
        items={content.platform.features}
      />
    </Section>
  );
}
