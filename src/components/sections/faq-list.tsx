import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/content/types";

/** Accessible FAQ built on native <details>, with FAQPage schema. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex min-h-16 items-center justify-between gap-6 py-4">
            <h3 className="font-sans text-lg font-medium tracking-normal">{f.q}</h3>
            <ChevronDown
              aria-hidden
              className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-muted">{f.a}</p>
        </details>
      ))}
      <JsonLd data={faqSchema(faqs)} />
    </div>
  );
}
