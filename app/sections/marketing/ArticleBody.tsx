import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Reveal } from "../shared";
import type { BlogSection } from "../../lib/blog";

// Inline markdown-lite: [label](href), `code`, and **bold**.
const INLINE_RE = /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;

function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(INLINE_RE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));

    if (match[1] !== undefined) {
      const label = match[1];
      const href = match[2];
      if (href.startsWith("/")) {
        nodes.push(
          <Link
            key={key++}
            href={href}
            className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
          >
            {label}
          </Link>,
        );
      } else {
        nodes.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
          >
            {label}
          </a>,
        );
      }
    } else if (match[3] !== undefined) {
      nodes.push(
        <code
          key={key++}
          className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[0.9em] text-text-primary"
        >
          {match[3]}
        </code>,
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-text-primary">
          {match[4]}
        </strong>,
      );
    }

    last = index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <article className="mt-10 space-y-10">
      {sections.map((section, i) => (
        <Reveal key={i}>
          {section.heading ? (
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              {section.heading}
            </h2>
          ) : null}

          {section.paragraphs?.map((p, j) => (
            <p
              key={j}
              className={`text-lg leading-relaxed text-text-secondary ${
                section.heading || j > 0 ? "mt-4" : ""
              }`}
            >
              {renderInline(p)}
            </p>
          ))}

          {section.bullets ? (
            <ul className="mt-4 space-y-3">
              {section.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-lg leading-relaxed text-text-secondary"
                >
                  <ArrowRight
                    className="mt-1.5 size-4 shrink-0 text-accent"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  <span>{renderInline(b)}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.table ? (
            <figure className="mt-6">
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-muted">
                      {section.table.headers.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="px-4 py-3 font-semibold text-text-primary"
                        >
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className="border-b border-border last:border-0"
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-4 py-3 align-top leading-relaxed text-text-secondary"
                          >
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {section.table.caption ? (
                <figcaption className="mt-2 text-sm text-text-muted">
                  {renderInline(section.table.caption)}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          {section.code ? (
            <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface-muted">
              {section.code.caption ? (
                <figcaption className="border-b border-border px-4 py-2 font-mono text-xs text-text-muted">
                  {section.code.caption}
                </figcaption>
              ) : null}
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                <code className="font-mono text-text-primary">
                  {section.code.code}
                </code>
              </pre>
            </figure>
          ) : null}

          {section.callout ? (
            <div className="mt-6 flex gap-3 rounded-2xl border border-border border-l-2 border-l-accent bg-surface-elevated p-5">
              <Info
                className="mt-0.5 size-5 shrink-0 text-accent"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                {section.callout.title ? (
                  <p className="text-sm font-semibold text-text-primary">
                    {section.callout.title}
                  </p>
                ) : null}
                <p
                  className={`text-base leading-relaxed text-text-secondary ${
                    section.callout.title ? "mt-1" : ""
                  }`}
                >
                  {renderInline(section.callout.body)}
                </p>
              </div>
            </div>
          ) : null}
        </Reveal>
      ))}
    </article>
  );
}
