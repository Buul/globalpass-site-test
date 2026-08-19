import { content } from "../../content";
import CardGrid from "../../components/card-grid/card-grid";
import Section from "../../components/section/section";

export default function Journey() {
  return (
    <Section id="jornada" heading={content.journey}>
      <CardGrid
        className="grid-cols-5 gap-[18px] max-sm:gap-3"
        cardClassName="rounded-3xl px-5 py-8 text-center hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(90,0,227,0.12)] max-sm:px-4 max-sm:py-6"
        titleClassName="mb-3 max-sm:text-base"
        textClassName="grow text-[0.95rem] max-sm:text-[0.9rem]"
        items={content.journey.steps}
        renderMedia={(step) => (
          <div className="mb-4 bg-linear-to-br from-primary to-accent bg-clip-text text-[3.2rem] font-extrabold tracking-[-0.06em] text-transparent max-sm:text-[2.4rem]">
            {step.step}
          </div>
        )}
      />
    </Section>
  );
}
