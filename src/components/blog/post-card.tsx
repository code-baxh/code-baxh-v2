import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import type { ImageKey } from "@/content/images";
import { team } from "@/content/team";
import { formatDate } from "@/lib/format";
import type { PostMeta } from "@/lib/blog";

const authorName = (slug: string) => team.find((m) => m.slug === slug)?.name ?? "CodeBaxh";

function Meta({ post }: { post: PostMeta }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
      <span className="text-fg">{authorName(post.author)}</span>
      <span aria-hidden>·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden>·</span>
      <span>{post.readingMinutes} min read</span>
    </p>
  );
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="card card-glow group relative flex h-full flex-col overflow-hidden text-left">
      <Photo
        name={post.cover as ImageKey}
        decorative
        className="aspect-[16/9] rounded-none border-0 border-b border-line"
        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
      >
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white backdrop-blur">
          {post.category}
        </span>
      </Photo>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold leading-snug">
          <Link href={`/blog/${post.slug}`} className="stretched group-hover:text-accent-text">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm text-muted">{post.description}</p>
        <div className="mt-auto pt-6">
          <Meta post={post} />
        </div>
      </div>
    </article>
  );
}

/** Large lead story at the top of the blog index. */
export function FeaturedPost({ post }: { post: PostMeta }) {
  return (
    <article className="card card-glow group relative grid overflow-hidden text-left lg:grid-cols-[1.15fr_1fr]">
      <Photo
        name={post.cover as ImageKey}
        decorative
        priority
        className="aspect-[16/9] rounded-none border-0 lg:aspect-auto lg:min-h-[24rem]"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <p className="flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent-fg">
            Latest
          </span>
          <span className="eyebrow">{post.category}</span>
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
          <Link href={`/blog/${post.slug}`} className="stretched group-hover:text-accent-text">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-lg text-muted">{post.description}</p>
        <div className="mt-6">
          <Meta post={post} />
        </div>
        <p className="mt-6 flex items-center gap-1.5 font-medium text-accent-text">
          Read article <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
}
