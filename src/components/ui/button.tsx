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

type Props = {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant = "primary", className, children }: Props) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
