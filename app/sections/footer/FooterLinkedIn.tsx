import Image from "next/image";
import { LINKEDIN_ICON_SRC, LINKEDIN_URL } from "./constants";

export function FooterLinkedIn() {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-linkedin mt-5 inline-flex items-center"
      aria-label="Code Baxh on LinkedIn"
    >
      <Image
        src={LINKEDIN_ICON_SRC}
        alt=""
        width={28}
        height={28}
        className="size-7 object-contain"
        aria-hidden
      />
    </a>
  );
}
