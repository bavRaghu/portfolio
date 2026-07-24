"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section
      id="about"
      label="01 — About"
      title="How I think about building software"
      description="Not a biography. Just the way I approach problems."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-3xl space-y-6"
      >
        {aboutContent.paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={staggerItem}
            className="text-lg leading-relaxed text-muted"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 h-px w-full max-w-md origin-left bg-gradient-to-r from-frost/40 to-transparent"
      />
    </Section>
  );
}
