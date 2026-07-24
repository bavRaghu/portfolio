"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Box,
} from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      {/* Blueprint connector decoration */}
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
      <motion.div
        className="pointer-events-none absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 rounded-full bg-frost/60"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      <div className="p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-frost/20 bg-frost/5 text-frost">
              <Box size={18} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                {project.status === "concept" && (
                  <Badge variant="concept">Concept</Badge>
                )}
              </div>
              <p className="mt-0.5 text-sm text-muted">{project.subtitle}</p>
            </div>
          </div>
          <span className="font-mono text-xs text-granite">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline">+{project.techStack.length - 5}</Badge>
          )}
        </div>

        <div className="space-y-4">
          <CaseStudyBlock
            icon={AlertTriangle}
            title="Problem"
            content={project.problem}
          />
          <CaseStudyBlock
            icon={Lightbulb}
            title="Solution"
            content={project.solution}
          />
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-6 border-t border-border pt-6">
                <CaseStudyList
                  icon={Layers}
                  title="Architecture"
                  items={project.architecture}
                />
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Box size={14} className="text-frost" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                <CaseStudyList
                  icon={AlertTriangle}
                  title="Challenges"
                  items={project.challenges}
                />
                <CaseStudyBlock
                  icon={CheckCircle2}
                  title="Outcome"
                  content={project.outcome}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm text-frost transition-colors hover:text-aqua"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read case study"}
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>

          <div className="flex gap-2">
            {project.github && (
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </Link>
              </Button>
            )}
            {project.liveDemo && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudyBlock({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
}) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon size={14} className="text-frost" />
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted">{content}</p>
    </div>
  );
}

function CaseStudyList({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon size={14} className="text-frost" />
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-frost/50"
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="03 — Projects"
      title="Engineering case studies"
      description="Real systems I've designed and built — problems, architecture, and outcomes."
      wide
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
