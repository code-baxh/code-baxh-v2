import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="theme-obsidian relative overflow-hidden bg-surface">
      <div className="section-orb -left-28 top-24 h-80 w-80 opacity-40" />
      <div className="section-orb -right-20 bottom-0 h-72 w-72 opacity-25" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-16 px-5 py-20 sm:min-h-[calc(100vh-5.25rem)] sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
