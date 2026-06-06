import { JsonLd } from "../../lib/JsonLd";
import { faqSchema } from "../../lib/schema";
import { SectionHeading } from "../shared";

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
    <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
      {emitSchema && <JsonLd data={faqSchema(faqs)} />}
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-text-primary md:text-lg">
                {faq.q}
                <span className="text-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
