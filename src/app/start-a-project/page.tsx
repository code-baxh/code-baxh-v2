import { CalendarClock, Clock, FileText, MessagesSquare, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactDetails } from "@/components/contact/contact-aside";
import { ProjectForm } from "@/components/contact/project-form";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Start a Project: Get a Plan & Estimate",
  description:
    "Tell CodeBaxh about your web, mobile, SaaS or AI project. Share the scope, budget and timeline, and receive a written plan and estimate from the team.",
  path: "/start-a-project",
});

const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

const next = [
  { icon: MessagesSquare, title: "We reply", body: "Usually within one working day, with any questions about your brief." },
  { icon: CalendarClock, title: "Discovery call", body: "A conversation with our product and engineering leads." },
  { icon: FileText, title: "Plan and estimate", body: "A written scope, timeline and price, with no obligation." },
];

export default function StartProjectPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Start a project", path: "/start-a-project" }]}
        eyebrow="Start a project"
        title="Tell us what you are building."
        lead="Three short steps. The more you share, the more useful our first reply will be."
      />
      <Section>
        <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-[1fr_22rem]">
          <ProjectForm />
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="card p-6 text-left sm:p-8">
              <h2 className="text-xl font-semibold">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {next.map((n, i) => (
                  <li key={n.title} className="relative flex gap-4">
                    {i < next.length - 1 ? (
                      <span aria-hidden className="absolute -bottom-6 left-5 top-11 w-px bg-line-strong" />
                    ) : null}
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-accent-text">
                      <n.icon aria-hidden className="size-[1.1rem] text-accent-text" />
                    </span>
                    <span>
                      <span className="block font-medium">{n.title}</span>
                      <span className="mt-1 block text-sm text-muted">{n.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <ul className="mt-7 space-y-2.5 border-t border-line pt-6 text-sm text-muted">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck aria-hidden className="size-4 text-accent-text" /> NDA available on request
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock aria-hidden className="size-4 text-accent-text" /> Takes about three minutes
                </li>
              </ul>
            </div>

            {calLink ? (
              <div className="card p-6 text-left sm:p-8">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <CalendarClock aria-hidden className="size-5 text-accent-text" /> Book a discovery call
                </h2>
                <p className="mt-3 text-sm text-muted">Prefer to talk first? Pick a time that suits you.</p>
                <iframe
                  src={`https://cal.com/${calLink}?embed=true`}
                  title="Book a discovery call with CodeBaxh"
                  loading="lazy"
                  className="mt-5 h-[520px] w-full rounded-xl border border-line bg-surface-2"
                />
              </div>
            ) : null}

            <ContactDetails />
          </aside>
        </div>
      </Section>
    </>
  );
}
