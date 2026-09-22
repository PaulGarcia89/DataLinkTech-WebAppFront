import Link from "next/link";
import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Link
      href="/"
      className="brand-logo"
      aria-label="DATALINK TECH CORP, inicio"
    >
      <span className="brand-image">
        <Image
          src="/datalink-logo.png"
          alt=""
          width={2172}
          height={724}
          sizes="180px"
          priority={priority}
        />
      </span>
      <span className="brand-word">
        DATALINK<small>TECH CORP</small>
      </span>
    </Link>
  );
}
