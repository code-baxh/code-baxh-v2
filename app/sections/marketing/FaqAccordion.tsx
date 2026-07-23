"use client";

import { useState } from "react";

export function FaqAccordion({
  faqs,
}: {
  faqs: ReadonlyArray<{ q: string; a: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-6 divide-y divide-border border-y border-border sm:mt-8 md:mt-10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={faq.q} className="py-1">
            {/* Real <h3> so the question exists in the heading outline (for
                crawlers/AI extraction), not only in the FAQPage JSON-LD. The
                heading wraps the button — the valid nesting for this. */}
            <h3 className="m-0 text-base font-normal">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={[
                "flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg px-2 py-3 text-left transition-[color,background-color] duration-200 sm:rounded-xl sm:gap-4 sm:px-3 sm:py-4 md:py-5",
                isOpen
                  ? "bg-surface-muted/50 text-text-primary"
                  : "text-text-primary hover:bg-surface-muted/35 hover:text-text-secondary",
              ].join(" ")}
            >
              <span className="text-sm font-semibold sm:text-base md:text-lg">{faq.q}</span>
              <span
                className={[
                  "mt-0.5 shrink-0 text-xl leading-none text-accent transition-transform duration-300 ease-out",
                  isOpen ? "rotate-45" : "rotate-0",
                ].join(" ")}
                aria-hidden
              >
                +
              </span>
            </button>
            </h3>

            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={[
                    "max-w-3xl pb-3 text-xs leading-relaxed text-text-secondary transition-opacity duration-300 sm:pb-4 sm:text-sm md:pb-5 md:text-base",
                    isOpen ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
