import { content } from "../../content";
import Section from "../../components/section/section";
import { cn } from "../../lib/cn";
import { cardBase, cardWash, container } from "../../lib/ui";

export default function Integrations() {
  return (
    <Section id="integracoes" heading={content.integrations}>
      <div className={`${container} grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-3`}>
        {content.integrations.items.map((integration) => (
          <div
            key={integration}
            className={cn(
              cardBase,
              cardWash,
              "min-h-[100px] items-center justify-center border-2 px-6 py-8 text-center",
              "text-base font-semibold tracking-tight",
              "before:bg-[linear-gradient(135deg,rgba(90,0,227,0.08),rgba(139,92,246,0.08))]",
              "hover:font-bold hover:text-primary hover:shadow-[0_16px_40px_rgba(90,0,227,0.15)]",
              "max-sm:min-h-20 max-sm:px-4 max-sm:py-6 max-sm:text-[0.95rem]",
            )}
          >
            <span>{integration}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
