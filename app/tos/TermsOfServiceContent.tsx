import Link from "next/link";
import { SITE } from "../lib/site";

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-semibold text-text-primary first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-text-secondary">{children}</p>;
}

/**
 * ⚠️ Template terms of service for a software-development agency website.
 * Review with legal counsel before relying on it. Project-specific terms
 * (scope, IP assignment, payment) are governed by the separate contract for
 * each engagement, not this website notice.
 */
export function TermsOfServiceContent() {
  return (
    <article className="space-y-4">
      <Subheading>Acceptance of terms</Subheading>
      <P>
        By accessing or using {SITE.url} (the &ldquo;Site&rdquo;), you agree to
        these Terms of Service. We may update these Terms from time to time, and
        your continued use of the Site means you accept the updated Terms.
      </P>

      <Subheading>Who we are</Subheading>
      <P>
        The Site is operated by {SITE.name}, a software development studio. You
        can reach us at{" "}
        <Link
          href={`mailto:${SITE.email}`}
          className="text-text-primary underline underline-offset-4 hover:text-accent"
        >
          {SITE.email}
        </Link>
        .
      </P>

      <Subheading>Use of the Site</Subheading>
      <P>
        You may use the Site for lawful purposes only. You agree not to misuse
        the Site, attempt to gain unauthorized access, interfere with its normal
        operation, or use it in any way that could harm us or other users.
      </P>

      <Subheading>Services and engagements</Subheading>
      <P>
        The Site provides information about our services. Any project we
        undertake for you is governed by a separate written agreement that sets
        out the scope, deliverables, timeline, fees, intellectual-property
        ownership, and other terms specific to that engagement. Nothing on this
        Site constitutes a binding offer to provide services.
      </P>

      <Subheading>Intellectual property</Subheading>
      <P>
        All content on this Site — including text, design, logos, and graphics —
        is owned by or licensed to {SITE.name} and is protected by applicable
        intellectual-property laws. You may not reproduce or reuse it without our
        permission. Ownership of work produced during a client engagement is
        governed by the relevant engagement agreement.
      </P>

      <Subheading>Disclaimer and limitation of liability</Subheading>
      <P>
        The Site and its content are provided &ldquo;as is&rdquo; without
        warranties of any kind. To the fullest extent permitted by law, {SITE.name}{" "}
        will not be liable for any indirect or consequential loss arising from
        your use of, or inability to use, the Site.
      </P>

      <Subheading>External links</Subheading>
      <P>
        The Site may contain links to third-party websites. We are not
        responsible for the content or practices of those sites and provide such
        links for convenience only.
      </P>

      <Subheading>Governing law</Subheading>
      <P>
        These Terms are governed by the laws applicable in our place of
        business. Disputes relating to these Terms will be subject to the
        jurisdiction of the competent courts there.
      </P>

      <Subheading>Contact</Subheading>
      <P>
        Questions about these Terms? Email us at{" "}
        <Link
          href={`mailto:${SITE.email}`}
          className="text-text-primary underline underline-offset-4 hover:text-accent"
        >
          {SITE.email}
        </Link>
        .
      </P>
    </article>
  );
}
