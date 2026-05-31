import { AboutSection } from "./sections/about";
import { FooterSection } from "./sections/footer";
import { HeaderSection } from "./sections/header";
import { HeroSection } from "./sections/hero";
import { IntroProvider } from "./sections/intro";
import { ServicesSection } from "./sections/services";
import { WorkSection } from "./sections/work";

export default function Home() {
  return (
    <IntroProvider>
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <FooterSection />
    </IntroProvider>
  );
}
