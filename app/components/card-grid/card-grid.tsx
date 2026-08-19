import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { cardBase, cardText, cardTitle, container } from "../../lib/ui";

type CardItem = {
  title: string;
  description: string;
};

type CardGridProps<T extends CardItem> = {
  className: string;
  cardClassName: string;
  titleClassName?: string;
  textClassName?: string;
  items: readonly T[];
  renderMedia?: (item: T) => ReactNode;
};

export default function CardGrid<T extends CardItem>({
  className,
  cardClassName,
  titleClassName,
  textClassName,
  items,
  renderMedia,
}: CardGridProps<T>) {
  return (
    <div className={cn(container, "grid max-md:grid-cols-2 max-sm:grid-cols-1", className)}>
      {items.map((item) => (
        <article key={item.title} className={cn(cardBase, cardClassName)}>
          {renderMedia?.(item)}
          <h3 className={cn(cardTitle, titleClassName)}>{item.title}</h3>
          <p className={cn(cardText, textClassName)}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
