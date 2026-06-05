import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="theme-obsidian relative overflow-hidden bg-surface">
      <div className="section-orb -left-28 top-24 h-80 w-80 opacity-40" />
      <div className="section-orb -right-20 bottom-0 h-72 w-72 opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5.25rem)]">
          {/* Content - Left side */}
          <div className="flex items-center lg:max-w-2xl">
            <HeroContent />
          </div>
          
          {/* Orbit Visual - Right side overlay */}
          <div className="pointer-events-none absolute -top-12 -bottom-12 right-0 w-1/2 hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
