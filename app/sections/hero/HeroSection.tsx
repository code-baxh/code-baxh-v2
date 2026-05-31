import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="theme-obsidian relative overflow-hidden bg-surface">
      <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-6xl grid-cols-1 items-center gap-12 px-8 py-16 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
