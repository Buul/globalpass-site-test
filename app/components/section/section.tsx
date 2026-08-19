import type { ReactNode } from "react";
import { withBreaks } from "../with-breaks/with-breaks";
import { cn } from "../../lib/cn";
import { container, eyebrow, sectionAlt, sectionPad } from "../../lib/ui";

type SectionHeading = {
  eyebrow: string;
  title: string;
  description?: string;
};

type SectionHeaderProps = {
  /** Section id; the heading renders `${id}-title` for `aria-labelledby`. */
  id: string;
  heading: SectionHeading;
  className?: string;
};

export function SectionHeader({
  id,
  heading,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(container, "mb-8", className)}>
      <span className={eyebrow}>{heading.eyebrow}</span>
      <h2
        id={`${id}-title`}
        className="mt-4 max-w-[700px] text-[clamp(2rem,3vw,3rem)] leading-[1.08] tracking-[-0.06em]"
      >
        {withBreaks(heading.title)}
      </h2>
      {heading.description ? (
        <p className="mt-4 text-foreground">{heading.description}</p>
      ) : null}
    </div>
  );
}

type SectionProps = {
  id: string;
  alt?: boolean;
  /** Omit to place the heading manually with `<SectionHeader>`. */
  heading?: SectionHeading;
  children: ReactNode;
};

export default function Section({
  id,
  alt = false,
  heading,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={alt ? sectionAlt : sectionPad}
      aria-labelledby={`${id}-title`}
    >
      {heading ? <SectionHeader id={id} heading={heading} /> : null}
      {children}
    </section>
  );
}
