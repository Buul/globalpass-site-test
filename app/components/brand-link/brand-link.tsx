import Image from "next/image";
import Link from "next/link";
import { content } from "../../content";

type BrandLinkProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLink({
  className = "brand",
  priority = false,
}: BrandLinkProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/logo.svg"
        alt={content.brand.name}
        width={186}
        height={30}
        priority={priority}
      />
    </Link>
  );
}
