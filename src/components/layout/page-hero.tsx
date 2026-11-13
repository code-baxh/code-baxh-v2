import Image from "next/image";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { images, type ImageKey } from "@/content/images";
import { cn } from "@/lib/utils";

type Props = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  /** Optional photo, shown as a darkened backdrop behind the centred text. */
  image?: ImageKey;
  children?: React.ReactNode;
};

/** Standard top-of-page block: breadcrumbs, eyebrow, the page's single H1 and lead, all centred. */
export function PageHero({ crumbs, eyebrow, title, lead, image, children }: Props) {
  return (
    <section
      className={cn(
        "bg-noise relative isolate overflow-hidden border-b border-line",
        // With a photo the block always sits on a dark image, so it uses the dark tokens.
        image && "dark bg-[#06080d] text-fg",
      )}
    >
      {image ? (
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src={images[image].src} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#06080d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-[#06080d]/60" />
          <div className="hud-corners absolute inset-5 hidden opacity-60 sm:block" />
        </div>
      ) : (
        <div aria-hidden className="glow-hero absolute inset-0 -z-10" />
      )}
      <div
        className={cn(
          "mx-auto flex w-full max-w-[92rem] flex-col items-center px-5 pt-8 text-center sm:px-8 lg:px-14",
          image ? "pb-20 sm:pb-28" : "pb-14 sm:pb-20",
        )}
      >
        <Breadcrumbs items={crumbs} />
        <p className={cn("eyebrow", image ? "mt-16 sm:mt-24" : "mt-10")}>{eyebrow}</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{lead}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
