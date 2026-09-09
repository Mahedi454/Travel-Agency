import {
  Compass,
  Gem,
  Heart,
  Landmark,
  Mountain,
  Star,
  Users,
  Waves,
  Globe,
  Map,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  mountain: Mountain,
  users: Users,
  heart: Heart,
  waves: Waves,
  landmark: Landmark,
  gem: Gem,
  compass: Compass,
  star: Star,
  globe: Globe,
  map: Map,
};

type IconBadgeProps = {
  name: string;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({
  name,
  className,
  iconClassName,
}: IconBadgeProps) {
  const Icon = iconMap[name] ?? Compass;
  return (
    <span
      className={
        className ??
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600"
      }
    >
      <Icon className={iconClassName ?? "h-6 w-6"} strokeWidth={2} />
    </span>
  );
}