import type { ReactNode } from "react";
import { withBreaks } from "./with-breaks";

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
  className = "container section-header",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <span className="eyebrow eyebrow-dark">{heading.eyebrow}</span>
      <h2 id={`${id}-title`}>{withBreaks(heading.title)}</h2>
      {heading.description ? <p>{heading.description}</p> : null}
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
      className={alt ? "section section-alt" : "section"}
      aria-labelledby={`${id}-title`}
    >
      {heading ? <SectionHeader id={id} heading={heading} /> : null}
      {children}
    </section>
  );
}
