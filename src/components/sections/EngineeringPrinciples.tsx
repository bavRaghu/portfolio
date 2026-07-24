"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { engineeringPrinciples } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";

export function EngineeringPrinciples() {
  return (
    <Section
      id="principles"
      label="05 — Engineering Principles"
      title="Beliefs I build by"
      description="Not personality traits — just things I keep coming back to."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {engineeringPrinciples.map((item, i) => (
          <motion.blockquote
            key={i}
            variants={staggerItem}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl border border-border bg-surface/30 p-6 transition-colors hover:border-frost/20"
          >
            <span className="absolute -top-3 left-6 bg-background px-2 font-mono text-xs text-frost">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-lg font-medium leading-snug text-foreground">
              {item.principle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.detail}
            </p>
          </motion.blockquote>
        ))}
      </motion.div>
    </Section>
  );
}
