import {
  AudioLines,
  Building2,
  ClipboardCheck,
  Code2,
  FileText,
  LifeBuoy,
  BookOpen,
  Bot,
  Cloud,
  Compass,
  CreditCard,
  Gauge,
  Globe,
  Layers,
  MessageSquare,
  Plug,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  rocket: Rocket,
  globe: Globe,
  zap: Zap,
  smartphone: Smartphone,
  server: Server,
  cloud: Cloud,
  card: CreditCard,
  compass: Compass,
  plug: Plug,
  book: BookOpen,
  message: MessageSquare,
  bot: Bot,
  audio: AudioLines,
  shield: ShieldCheck,
  gauge: Gauge,
  building: Building2,
  check: ClipboardCheck,
  code: Code2,
  file: FileText,
  life: LifeBuoy,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Layers;
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}
