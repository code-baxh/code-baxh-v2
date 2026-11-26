import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-[background-color,border-color,box-shadow,color] duration-200 ease-out";

const variants = {
  primary:
    "bg-accent text-accent-fg shadow-[0_0_0_1px_var(--accent),0_8px_30px_-8px_var(--accent)] hover:shadow-[0_0_0_1px_var(--accent),0_10px_40px_-6px_var(--accent)]",
  secondary: "border border-line-strong text-fg hover:border-accent-text hover:text-accent-text",
  ghost: "text-fg hover:text-accent-text px-3",
} as const;

type Variant = keyof typeof variants;

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

/** Button styles for a plain <button>, so actions match the links styled by ButtonLink. */
export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonLink({ href, variant = "primary", className, children }: Props) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}
