import { cn } from "./cn";

export const container = "mx-auto w-[min(1180px,calc(100%-32px))]";

export const buttonBase =
  "inline-flex items-center justify-center rounded-full border border-transparent px-6 py-[0.9rem] font-semibold transition duration-200 hover:-translate-y-px";

export const buttonPrimary = cn(
  buttonBase,
  "bg-linear-to-br from-primary to-accent text-white shadow-[0_18px_32px_rgba(90,0,227,0.2)]",
);

export const buttonSecondary = cn(
  buttonBase,
  "border-line bg-white/70 text-foreground",
);

export const eyebrow = cn(
  "inline-flex items-center gap-2 rounded-full px-[0.8rem] py-[0.45rem]",
  "bg-[rgba(15,23,42,0.06)] text-[0.8rem] font-bold tracking-[0.08em] text-primary uppercase",
);

export const sectionPad = "py-[90px]";

export const sectionAlt = cn(
  sectionPad,
  "border-y border-line bg-white/50",
);

export const cardBase = cn(
  "relative flex flex-col overflow-hidden rounded-[20px] border border-line bg-card",
  "px-6 py-7 transition-all duration-300",
  "hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_50px_rgba(90,0,227,0.14)]",
  "[&>*]:relative [&>*]:z-[1]",
);

export const cardTitle =
  "mb-3.5 text-[1.15rem] font-bold leading-[1.3] tracking-tight text-primary";

export const cardText = "m-0 text-[0.9rem] leading-[1.6] text-muted";

export const cardAccent = cn(
  "before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left",
  "before:scale-x-0 before:bg-linear-to-r before:from-primary before:to-accent",
  "before:transition-transform before:duration-300 before:content-['']",
  "hover:before:scale-x-100",
);

export const cardWash = cn(
  "before:absolute before:inset-0 before:opacity-0 before:transition-opacity",
  "before:duration-300 before:content-['']",
  "before:bg-[linear-gradient(180deg,rgba(90,0,227,0.08),rgba(139,92,246,0.08))]",
  "hover:before:opacity-100",
);
