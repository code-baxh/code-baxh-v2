import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { MarketsMap } from "@/components/art/markets-map";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { minimumProject } from "@/content/engagement";
import { markets } from "@/content/markets";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Where We Work: US, Europe, Nordics, DACH & UAE",
  description:
    "CodeBaxh builds software and AI products for companies in the US, Europe, the Nordics, Germany, Austria, Switzerland and the UAE, and delivers worldwide.",
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Markets", path: "/markets" }]}
        eyebrow="Markets"
        title="Software and AI development for clients around the world."
        lead="We work with companies across the United States, Europe and the UAE, and deliver worldwide. Each page covers contracts, data rules, working hours and the integrations that matter in that market."
        image="globalNetwork"
      />

      <Section>
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {markets.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <article className="card card-glow group flex h-full flex-col p-6 text-left sm:p-7">
                  <p className="eyebrow">{m.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-semibold">
                    <Link href={`/markets/${m.slug}`} className="stretched group-hover:text-accent-text">
                      {m.name}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted">{m.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-text">
                    Working with us from {m.inName} <ArrowRight aria-hidden className="size-4" />
                  </span>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Everywhere else"
            title="The same terms, wherever you are."
            lead={`Clients in Canada, the UK and the rest of the world get the same contract, process and ownership terms. Our hours cover the European and UK working day and every US time zone, and most projects start from ${minimumProject}.`}
          />
        </Reveal>
        <Reveal>
          <div className="dark art-panel mt-10 px-4 py-8 text-fg sm:px-8">
            <MarketsMap className="relative mx-auto w-full max-w-5xl" />
          </div>
        </Reveal>
      </Section>

      <CtaBand title="Tell us what you are building." />
    </>
  );
}
