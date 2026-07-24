"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Sparkles, Key, TrendingDown, Book } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  // Map project IDs to meaningful icons
  const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    smartcsp: Shield,
    resumenate: Sparkles,
    gatekeeper: Key,
    churn: TrendingDown,
    "ai-docs": Book,
  };

  const Icon = (iconMap[project.id] ?? Shield) as React.ComponentType<{ size?: number; className?: string }>;

  return (
    <motion.article
      variants={staggerItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface/40 shadow-lg",
        "transition-all duration-500 hover:border-frost/30 hover:shadow-2xl hover:shadow-frost/5"
      )}
    >
      {/* Decorative connector */}
      <motion.div
        className="pointer-events-none absolute -right-px top-1/2 h-px w-12 bg-gradient-to-r from-frost/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-frost/20 bg-frost/5 text-frost">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            {project.github && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </Link>
              </Button>
            )}
            {project.liveDemo && (
              <Button variant="outline" size="sm" asChild>
                <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                </Link>
              </Button>
            )}
            <span className="ml-2 font-mono text-xs text-granite">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
      </div>
    </motion.article>
  );
}


export function Projects() {
  return (
    <Section
      id="projects"
      label="03 — Projects"
      title="Projects"
      description="Selected projects"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
