"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function Section({
  id,
  label,
  title,
  description,
  children,
  className,
  wide = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-12 md:py-16 lg:py-20",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-6 md:px-8",
          wide ? "max-w-7xl" : "max-w-7xl"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="section-label mb-3">{label}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
