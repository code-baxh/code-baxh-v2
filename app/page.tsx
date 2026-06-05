import { HomeStackedSections, ContactSectionContent } from "./sections/home";
import { CtaSection } from "./sections/cta";
import { FooterSection } from "./sections/footer";
import { HeaderSection } from "./sections/header";
import { HeroSection } from "./sections/hero";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <HomeStackedSections />
        <ContactSectionContent />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
