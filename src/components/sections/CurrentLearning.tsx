"use client";

import { motion } from "framer-motion";
import { BookOpen, Circle } from "lucide-react";
import { learningTopics } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function CurrentLearning() {
  return (
    <Section
      id="learning"
      label="04 — Currently Learning"
      title="Engineering notebook"
      description="What I'm actively exploring right now."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="glass rounded-2xl border border-border p-6 md:p-8"
      >
        <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
          <BookOpen size={18} className="text-frost" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Active explorations · {new Date().toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {learningTopics.map((topic) => (
            <motion.div
              key={topic.name}
              variants={staggerItem}
              className={cn(
                "group flex items-center gap-3 rounded-xl border border-border/60 bg-surface/30 px-4 py-3",
                "transition-all duration-300 hover:border-frost/25 hover:bg-surface/50"
              )}
            >
              <Circle
                size={8}
                className={cn(
                  "shrink-0 fill-current",
                  topic.status === "active"
                    ? "text-coral animate-pulse"
                    : "text-frost/50"
                )}
              />
              <span className="text-sm text-foreground">{topic.name}</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-granite">
                {topic.status}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={staggerItem}
          className="mt-6 text-sm italic text-muted"
        >
          Notes, experiments, and half-finished prototypes live here before they
          become projects.
        </motion.p>
      </motion.div>
    </Section>
  );
}
