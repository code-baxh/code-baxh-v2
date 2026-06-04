import type { Metadata } from "next";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { LegalPageHeading } from "../sections/shared/LegalPageHeading";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Code Baxh",
  description:
    "How Code Baxh collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeaderSection />
      <main className="theme-paper min-h-[50vh] flex-1 bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <LegalPageHeading title="Privacy Policy" />
          <div className="mt-10">
            <PrivacyPolicyContent />
          </div>
        </div>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
