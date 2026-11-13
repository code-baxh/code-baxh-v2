"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { PostCard } from "./post-card";
import type { PostMeta } from "@/lib/blog";

/**
 * Toolbar with category links (passed in) and a search box. With an empty
 * query the server-rendered list underneath is shown; otherwise matches from
 * every post replace it.
 */
export function BlogSearch({
  posts,
  filters,
  children,
}: {
  posts: PostMeta[];
  filters: React.ReactNode;
  children: React.ReactNode;
}) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const results = query
    ? posts.filter((p) => [p.title, p.description, p.category, ...p.tags].join(" ").toLowerCase().includes(query))
    : [];

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-3 lg:flex-row lg:items-center lg:justify-between">
        {filters}
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search articles</span>
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-[1.1rem] -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles"
            className="min-h-11 w-full rounded-full border border-line-strong bg-bg pl-11 pr-11 text-base text-fg placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
          />
          {q ? (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="absolute right-1 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:text-fg"
            >
              <X aria-hidden className="size-4" />
            </button>
          ) : null}
        </label>
      </div>

      <p aria-live="polite" className={query ? "mt-8 text-sm text-muted" : "sr-only"}>
        {query ? `${results.length} ${results.length === 1 ? "article matches" : "articles match"} “${q.trim()}”` : ""}
      </p>

      {query ? (
        results.length ? (
          <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {results.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="card mt-6 p-10 text-center">
            <p className="text-lg">No articles found.</p>
            <p className="mt-2 text-muted">Try a different term, or browse a category above.</p>
          </div>
        )
      ) : (
        children
      )}
    </div>
  );
}
