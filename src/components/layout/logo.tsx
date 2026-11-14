import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * One logo per theme, toggled with CSS. Both stay lazy (no preload): a lazy image that is
 * display:none is never fetched, so only the visible one downloads, and neither competes
 * with the page's LCP image the way two preloads did.
 */
export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex shrink-0 items-center">
      <Image src="/logo/codebaxh-logo-dark.png" alt="" width={322} height={84} className="hidden h-9 w-auto dark:block" />
      <Image src="/logo/codebaxh-logo-light.png" alt="" width={322} height={84} className="block h-9 w-auto dark:hidden" />
    </Link>
  );
}
