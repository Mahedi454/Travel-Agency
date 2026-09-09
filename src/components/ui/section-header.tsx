import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "items-center text-center mx-auto max-w-2xl"
          : "items-start text-left max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "eyebrow flex items-center gap-2",
          dark ? "text-primary-300" : "text-primary-500"
        )}
      >
        <span
          className={cn(
            "inline-block h-[2px] w-8 rounded-full",
            dark ? "bg-primary-400" : "bg-primary-500"
          )}
          aria-hidden="true"
        />
        {eyebrow}
        {align === "center" && (
          <span
            className={cn(
              "inline-block h-[2px] w-8 rounded-full",
              dark ? "bg-primary-400" : "bg-primary-500"
            )}
            aria-hidden="true"
          />
        )}
      </div>
      <h2
        className={cn(
          "section-title font-bold leading-tight tracking-tight",
          align === "center" && "text-center",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "section-desc",
            dark ? "text-primary-50/80" : "text-foreground-muted",
            align === "center" && "text-center"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}