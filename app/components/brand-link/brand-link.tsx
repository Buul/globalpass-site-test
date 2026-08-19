import Image from "next/image";
import Link from "next/link";
import { content } from "../../content";
import { cn } from "../../lib/cn";

type BrandLinkProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function BrandLink({
  className,
  imageClassName,
  priority = false,
}: BrandLinkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-[1.1rem] font-bold tracking-tight",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt={content.brand.name}
        width={186}
        height={30}
        priority={priority}
        className={imageClassName}
      />
    </Link>
  );
}
