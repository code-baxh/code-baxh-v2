import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex shrink-0 items-center">
      <Image
        src="/logo/codebaxh-logo-dark.png"
        alt=""
        width={322}
        height={84}
        priority
        className="hidden h-9 w-auto dark:block"
      />
      <Image
        src="/logo/codebaxh-logo-light.png"
        alt=""
        width={322}
        height={84}
        priority
        className="block h-9 w-auto dark:hidden"
      />
    </Link>
  );
}
