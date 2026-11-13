import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { legalIdentity } from "@/config/site";
import { legalLastUpdated, processors } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CodeBaxh collects, uses and protects personal data under the GDPR: what the contact form collects, legal basis, processors, retention and your rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`Last updated: ${legalLastUpdated}`}
      />
      <div className="mx-auto w-full max-w-[92rem] px-5 py-16 sm:px-8 lg:px-14">
        <div className="prose mx-auto">
          <h2>1. Who is responsible for your data</h2>
          <p>
            The data controller is {legalIdentity}. This policy
            explains how we handle personal data when you visit this website or contact us. To reach us about privacy,
            use the <Link href="/contact">contact form</Link>.
          </p>

          <h2>2. What we collect</h2>
          <h3>Contact form</h3>
          <p>When you send an enquiry we collect the details you enter:</p>
          <ul>
            <li>Name and work email address</li>
            <li>Company name, if you provide it</li>
            <li>The services you are interested in, your budget range and timeline</li>
            <li>Your message</li>
            <li>The fact that you gave consent, and when</li>
          </ul>
          <p>
            Your IP address is used briefly on our server to limit repeated submissions and prevent spam. It is not
            stored with your enquiry.
          </p>
          <h3>Website statistics</h3>
          <p>
            We use privacy-friendly analytics that do not set cookies and do not collect personal data. Visits are
            counted in aggregate, so we cannot identify you or follow you across websites.
          </p>
          <h3>Cookies</h3>
          <p>
            This website does not use advertising or tracking cookies. Your light or dark theme choice is saved in
            your browser&apos;s local storage and never leaves your device.
          </p>

          <h2>3. Why we use it and our legal basis</h2>
          <ul>
            <li>
              <strong>To answer your enquiry and prepare a proposal.</strong> Legal basis: your consent (Article
              6(1)(a) GDPR) and steps taken at your request before entering into a contract (Article 6(1)(b)).
            </li>
            <li>
              <strong>To protect the website against spam and abuse.</strong> Legal basis: our legitimate interest in
              keeping the service secure (Article 6(1)(f)).
            </li>
            <li>
              <strong>To understand how the website is used, in aggregate.</strong> Legal basis: our legitimate
              interest in improving the website (Article 6(1)(f)).
            </li>
          </ul>

          <h2>4. Who processes data for us</h2>
          <p>We share personal data only with the service providers needed to run this website:</p>
          <table>
            <thead>
              <tr>
                <th>Processor</th>
                <th>Purpose</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {processors.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.purpose}</td>
                  <td>{p.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Our engineering team is based in Pakistan and may access enquiry details to prepare a response. Where
            personal data is transferred outside the EU/EEA, we rely on an adequacy decision or the European
            Commission&apos;s Standard Contractual Clauses. We do not sell personal data.
          </p>

          <h2>5. How long we keep it</h2>
          <p>
            Enquiries that do not lead to a project are deleted within 24 months of our last contact. If we work
            together, relevant correspondence is kept for the duration of the contract and afterwards for as long as
            accounting and legal obligations require.
          </p>

          <h2>6. Your rights</h2>
          <p>Under the GDPR you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Have inaccurate data corrected</li>
            <li>Have your data erased</li>
            <li>Restrict or object to processing</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent at any time, without affecting processing already carried out</li>
          </ul>
          <p>
            To use any of these rights, contact us using the details above. We respond within one month. You also have
            the right to complain to a supervisory authority. In Sweden this is the Swedish Authority for Privacy
            Protection (IMY).
          </p>

          <h2>7. Security</h2>
          <p>
            The website is served over HTTPS. Access to enquiry data is limited to the people who need it to respond,
            and our providers are chosen for their security standards.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We will update this page when our practices change. The date at the top shows when it was last revised.
          </p>
        </div>
      </div>
    </>
  );
}
