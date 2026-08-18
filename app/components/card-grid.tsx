import type { ReactNode } from "react";

type CardItem = {
  title: string;
  description: string;
};

type CardGridProps<T extends CardItem> = {
  /** Grid class holding the `--grid-*` custom properties. */
  className: string;
  /** Card class holding the `--card-*` custom properties, plus any modifier. */
  cardClassName: string;
  items: readonly T[];
  /** Optional node rendered above the title (step number, icon, badge). */
  renderMedia?: (item: T) => ReactNode;
};

export default function CardGrid<T extends CardItem>({
  className,
  cardClassName,
  items,
  renderMedia,
}: CardGridProps<T>) {
  return (
    <div className={`container card-grid ${className}`}>
      {items.map((item) => (
        <article key={item.title} className={`card ${cardClassName}`}>
          {renderMedia?.(item)}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
