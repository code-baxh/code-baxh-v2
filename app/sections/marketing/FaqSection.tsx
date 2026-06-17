import { JsonLd } from "../../lib/JsonLd";
import { faqSchema } from "../../lib/schema";
import { Reveal, SectionHeading } from "../shared";
import { FaqAccordion } from "./FaqAccordion";

/**
 * Visible FAQ + FAQPage JSON-LD. Note: Google removed FAQ rich results, but
 * the markup + Q&A structure still feed AI answer engines (AEO), and the
 * visible section answers buyer objections (CRO). Answers lead with a direct
 * statement (AEO best practice).
 */
export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  emitSchema = true,
}: {
  faqs: ReadonlyArray<{ q: string; a: string }>;
  title?: string;
  eyebrow?: string;
  emitSchema?: boolean;
}) {
  if (!faqs.length) return null;

  return (
    <section className="theme-paper border-t border-border bg-surface py-14 sm:py-20 md:py-28">
      {emitSchema && <JsonLd data={faqSchema(faqs)} />}
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading size="default" eyebrow={eyebrow} title={title} />
        </Reveal>
        <Reveal variant="pop-in" delay={100}>
          <FaqAccordion faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
