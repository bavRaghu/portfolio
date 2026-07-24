"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Layout,
  Brain,
  Cloud,
  Database,
  Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 — Skills"
      title="What I build with"
      description="Tools and technologies I reach for — no ratings, just the stack."
      wide
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div
              key={category.id}
              variants={staggerItem}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "group glass rounded-2xl p-6 shadow-md",
                "transition-shadow duration-300 hover:shadow-xl hover:shadow-frost/5",
                "border border-border hover:border-frost/25"
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-frost/10 text-frost transition-colors group-hover:bg-frost/15">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface/80 px-2.5 py-1 text-xs text-muted transition-colors group-hover:text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
