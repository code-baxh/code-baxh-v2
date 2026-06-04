import { HomeStackedSections } from "./sections/home";
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
      </main>
      <FooterSection />
    </>
  );
}
