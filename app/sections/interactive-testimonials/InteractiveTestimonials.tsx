"use client";

import { useState, useEffect } from "react";
import { INTERACTIVE_TESTIMONIALS } from "./interactive-testimonials-data";

export function InteractiveTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDecrypted, setIsDecrypted] = useState(false);

  const active = INTERACTIVE_TESTIMONIALS[activeIndex];

  // Decrypt animation effect
  useEffect(() => {
    setDisplayText("");
    setIsDecrypted(false);
    const timer = setTimeout(() => {
      setDisplayText(active.quote);
      setIsDecrypted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeIndex, active.quote]);

  // Calculate position on semi-circle (0° to 180°)
  const getLogoPosition = (index: number) => {
    const angle = (index / (INTERACTIVE_TESTIMONIALS.length - 1)) * 180;
    const radian = (angle * Math.PI) / 180;
    const radius = 120;
    const x = Math.cos(radian - Math.PI / 2) * radius;
    const y = Math.sin(radian - Math.PI / 2) * radius;
    return { x, y, isCenter: index === activeIndex };
  };

  return (
    <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-4">
            What clients say.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Independent, verifiable feedback from international clients.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          {/* Left: Semi-circle with logos */}
          <div className="flex justify-center items-end">
            <div className="relative w-72 h-64">
              {/* Semi-circle background */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 240 240"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M 20 120 A 100 100 0 0 1 220 120"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="314"
                />
              </svg>

              {/* Company logos on semi-circle */}
              {INTERACTIVE_TESTIMONIALS.map((testimonial, index) => {
                const position = getLogoPosition(index);
                const centerX = 120;
                const centerY = 120;
                const logoX = centerX + position.x;
                const logoY = centerY + position.y;

                return (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      position.isCenter
                        ? "z-20 scale-125 opacity-100"
                        : "z-10 scale-75 opacity-40 hover:opacity-60"
                    }`}
                    style={{
                      left: `${(logoX / 240) * 100}%`,
                      top: `${(logoY / 240) * 100}%`,
                    }}
                    aria-label={`${testimonial.company} testimonial`}
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent bg-surface-elevated/50 backdrop-blur-sm hover:border-accent/80 transition-colors">
                      <span className="text-sm font-semibold text-accent text-center px-2">
                        {testimonial.logo}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Testimonial content */}
          <div className="flex flex-col">
            <blockquote
              className={`text-xl md:text-2xl leading-relaxed text-text-secondary font-light mb-8 transition-all duration-500 ${
                isDecrypted ? "opacity-100" : "opacity-50"
              }`}
            >
              "{displayText}"
            </blockquote>

            <footer className="mb-8">
              <p className="text-lg font-semibold text-text-primary">
                {active.name}
              </p>
              <p className="text-sm text-text-muted">{active.role}</p>
            </footer>

            {/* Company selector buttons */}
            <div className="flex flex-wrap gap-3">
              {INTERACTIVE_TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    index === activeIndex
                      ? "bg-accent text-[#0d0d0d] border-accent"
                      : "border-border bg-surface-elevated/50 text-text-secondary hover:border-accent/50 hover:text-text-primary"
                  }`}
                >
                  {testimonial.company}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
