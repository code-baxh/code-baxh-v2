import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Kept for call-site compatibility; the scroll-driven animation needs no delay. */
  delay?: number;
};

/**
 * Scroll reveal done in CSS (see `.reveal` in globals.css). Content is visible
 * by default; browsers that support scroll-driven animations fade it in as it
 * enters the viewport. No JavaScript, so nothing can be left hidden.
 */
export function Reveal({ children, className }: Props) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
