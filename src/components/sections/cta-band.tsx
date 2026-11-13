import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { CircuitBackdrop } from "@/components/art/section-art";

type Props = { title?: string; body?: string; label?: string };

/** The single closing call to action used at the bottom of a page. Always leads to the contact form. */
export function CtaBand({
  title = "Tell us what you are building.",
  body = "Share a short brief and we will reply with next steps, usually within one working day.",
  label = "Start a project",
}: Props) {
  return (
    <section className="px-5 pb-16 pt-4 sm:px-8 sm:pb-24 lg:px-14">
      <Reveal>
        <div className="bg-noise relative mx-auto max-w-[92rem] overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <Photo name="circuit" decorative className="absolute inset-0 rounded-none border-0 opacity-25" sizes="100vw" />
          <div aria-hidden className="glow-hero absolute inset-0" />
          <CircuitBackdrop className="absolute inset-0 size-full opacity-70" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{body}</p>
            <div className="mt-9 flex justify-center">
              <Magnetic>
                <ButtonLink href="/start-a-project">
                  {label} <ArrowRight aria-hidden className="size-4" />
                </ButtonLink>
              </Magnetic>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
