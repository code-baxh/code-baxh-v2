import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { legalIdentity, site } from "@/config/site";
import { legalLastUpdated } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply to using the CodeBaxh website: acceptable use, intellectual property, liability, governing law and how client engagements are contracted.",
  path: "/terms",
});

export default function TermsPage() {
  const { entityName, governingLaw } = site.legal;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Terms of Service", path: "/terms" }]}
        eyebrow="Legal"
        title="Terms of Service"
        lead={`Last updated: ${legalLastUpdated}`}
      />
      <div className="mx-auto w-full max-w-[92rem] px-5 py-16 sm:px-8 lg:px-14">
        <div className="prose mx-auto">
          <h2>1. About these terms</h2>
          <p>
            This website is operated by {legalIdentity}. By
            using the website you agree to these terms. If you do not agree, please do not use it.
          </p>

          <h2>2. Our services</h2>
          <p>
            The website describes the software development and AI services we offer. Nothing on it is a binding offer.
            Every client engagement is governed by a separate written agreement that sets out scope, fees, timelines,
            intellectual property and confidentiality. Where that agreement and these terms differ, the agreement
            applies.
          </p>

          <h2>3. Using the website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website in any way that breaks the law</li>
            <li>Attempt to gain unauthorised access to the website or its systems</li>
            <li>Submit false information, spam or malicious code through the contact form</li>
            <li>Copy or scrape the website in a way that harms its operation</li>
          </ul>

          <h2>4. Intellectual property</h2>
          <p>
            The content of this website, including text, design, graphics and code, belongs to {entityName} or its
            licensors. You may view and share it for information purposes. You may not reproduce it commercially
            without our written permission. Third-party names and logos shown on the website belong to their owners
            and are used only to identify the tools we work with.
          </p>

          <h2>5. Information on the website</h2>
          <p>
            We take care to keep the website accurate, but articles and guides are general information, not
            professional advice for your situation. Cost and timeline figures in articles are illustrative. We may
            change or remove content at any time.
          </p>

          <h2>6. Links to other websites</h2>
          <p>We link to third-party websites for convenience and are not responsible for their content or practices.</p>

          <h2>7. Liability</h2>
          <p>
            The website is provided as it is. To the extent the law allows, {entityName} is not liable for indirect or
            consequential loss arising from use of the website. Nothing in these terms limits liability that cannot be
            limited by law.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal data.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of {governingLaw}. Disputes are subject to the jurisdiction of the
            courts of {governingLaw}.
          </p>

          <h2>10. Changes and contact</h2>
          <p>
            We may update these terms, and the date at the top shows the latest revision. For questions, use the{" "}
            <Link href="/contact">contact form</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
