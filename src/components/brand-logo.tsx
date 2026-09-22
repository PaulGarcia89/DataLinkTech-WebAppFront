import Link from "next/link";
import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Link
      href="/"
      className="brand"
      aria-label="DataLink Tech Corp, ir al inicio"
    >
      <Image
        className="brand-mark"
        src="/datalink-isotipo.png"
        alt=""
        width={490}
        height={404}
        sizes="44px"
        priority={priority}
      />
      <span className="brand-type">
        <b>
          DATA<i>LINK</i>
        </b>
        <small>TECH CORP</small>
      </span>
    </Link>
  );
}
