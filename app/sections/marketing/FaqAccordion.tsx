"use client";

import { useState } from "react";

export function FaqAccordion({
  faqs,
}: {
  faqs: ReadonlyArray<{ q: string; a: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-border border-y border-border">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={faq.q} className="py-1">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={[
                "flex w-full cursor-pointer items-start justify-between gap-4 rounded-xl px-3 py-5 text-left transition-[color,background-color] duration-200",
                isOpen
                  ? "bg-surface-muted/50 text-text-primary"
                  : "text-text-primary hover:bg-surface-muted/35 hover:text-text-secondary",
              ].join(" ")}
            >
              <span className="text-base font-semibold md:text-lg">{faq.q}</span>
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

            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={[
                    "max-w-3xl pb-5 text-sm leading-relaxed text-text-secondary transition-opacity duration-300 md:text-base",
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
