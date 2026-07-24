"use client";

import { motion } from "framer-motion";
import { aboutContent, learningTopics, certifications } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { BookOpen } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      label="01 — About"
      title="About"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 md:grid-cols-4"
      >
        {/* Left: 75% (3 cols) */}
        <motion.div variants={staggerItem} className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted">
            {aboutContent.paragraphs[0]}
          </p>
        </motion.div>

        {/* Right: 25% (1 col) - stacked cards */}
        <motion.div variants={staggerItem} className="space-y-4 md:col-span-1">
          <div className="glass rounded-2xl border border-border p-4">
            <div className="mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-frost" />
              <h4 className="text-sm font-medium text-foreground">Currently Learning</h4>
            </div>
            <div className="grid gap-2">
              {learningTopics.map((t) => (
                <div key={t.name} className="flex items-center justify-between rounded-md bg-surface/30 px-3 py-2 text-sm">
                  <span className="text-foreground">{t.name}</span>
                  <span className="font-mono text-xs text-granite">{t.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl border border-border p-4">
            <h4 className="mb-3 text-sm font-medium text-foreground">Certifications & Learning</h4>
            <div className="space-y-3 text-sm text-muted">
              {Object.entries(certifications).map(([provider, items]) => (
                <div key={provider}>
                  <div className="mb-1 font-medium text-foreground">{provider}</div>
                  <ul className="ml-3 list-disc">
                    {items.map((it) => (
                      <li key={it} className="text-sm text-muted">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
