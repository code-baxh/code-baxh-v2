import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ContactInfoItemProps = {
  icon: LucideIcon;
  label: string;
  labelClassName?: string;
  children: ReactNode;
};

export function ContactInfoItem({
  icon: Icon,
  label,
  labelClassName = "text-xs text-text-muted",
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <Icon
        className="mt-0.5 size-5 shrink-0 text-accent sm:size-6"
        strokeWidth={1.75}
        aria-hidden
      />
      <div className="min-w-0">
        <p className={labelClassName}>{label}</p>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}
