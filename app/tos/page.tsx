import type { Metadata } from "next";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { LegalPageHeading } from "../sections/shared/LegalPageHeading";
import { TermsOfServiceContent } from "./TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the CodeBaxh website and services.",
  alternates: { canonical: "/tos" },
};

export default function TermsPage() {
  return (
    <>
      <HeaderSection />
      <main className="theme-paper min-h-[50vh] flex-1 bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <LegalPageHeading title="Terms of Service" />
          <div className="mt-10">
            <TermsOfServiceContent />
          </div>
        </div>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
