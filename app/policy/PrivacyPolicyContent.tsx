import Link from "next/link";
import { SITE } from "../lib/site";

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 text-lg font-semibold text-text-primary">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-text-secondary">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-text-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * ⚠️ Template privacy policy for a software-development agency website.
 * Review with legal counsel before relying on it, and adjust to your actual
 * data practices (analytics tools, hosting region, etc.).
 */
export function PrivacyPolicyContent() {
  return (
    <article className="space-y-4">
      <P>
        This Privacy Policy explains how {SITE.name} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects your
        personal information when you visit {SITE.url} or contact us about our
        software development services.
      </P>

      <Subheading>Information we collect</Subheading>
      <P>We collect only what we need to respond to you and run our business:</P>
      <List
        items={[
          "Contact details you provide — such as your name, email address, company, and the contents of any message you send us through our contact form, email, or a booking tool.",
          "Project information you choose to share when discussing a potential engagement.",
          "Usage data — such as pages visited, device and browser type, and approximate location, collected through cookies and analytics to help us improve the site.",
        ]}
      />

      <Subheading>How we use your information</Subheading>
      <List
        items={[
          "To respond to your enquiries and schedule discovery calls.",
          "To provide, deliver, and improve our software development services.",
          "To send you information you have requested or that relates to a project we are working on together.",
          "To understand and improve how our website is used.",
          "To comply with our legal and contractual obligations.",
        ]}
      />

      <Subheading>Cookies and analytics</Subheading>
      <P>
        We use cookies and similar technologies to operate the site and to
        understand aggregate usage. You can control cookies through your browser
        settings. Disabling some cookies may affect how the site functions.
      </P>

      <Subheading>How we share information</Subheading>
      <P>
        We do not sell your personal information. We may share it with trusted
        service providers who help us operate — for example, hosting, analytics,
        email, and scheduling tools — and only to the extent needed to provide
        those services. We may also disclose information where required by law.
      </P>

      <Subheading>Data retention</Subheading>
      <P>
        We keep your information only as long as necessary for the purposes
        described above, to maintain our business records, and to comply with
        legal obligations, after which it is securely deleted.
      </P>

      <Subheading>Your rights</Subheading>
      <P>
        Depending on your location, you may have the right to access, correct,
        delete, or restrict the use of your personal information, and to object
        to certain processing. To exercise any of these rights, contact us at{" "}
        <Link
          href={`mailto:${SITE.email}`}
          className="text-text-primary underline underline-offset-4 hover:text-accent"
        >
          {SITE.email}
        </Link>
        .
      </P>

      <Subheading>Security</Subheading>
      <P>
        We take reasonable technical and organizational measures to protect your
        information. No method of transmission or storage is completely secure,
        so we cannot guarantee absolute security.
      </P>

      <Subheading>Changes to this policy</Subheading>
      <P>
        We may update this Privacy Policy from time to time. Material changes
        will be reflected on this page with an updated revision date.
      </P>

      <Subheading>Contact</Subheading>
      <P>
        Questions about this policy or your data? Email us at{" "}
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
