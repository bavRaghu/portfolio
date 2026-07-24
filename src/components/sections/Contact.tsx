"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "bavRaghu",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "bavya-raghu",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "bavya-raghu",
    href: siteConfig.leetcode,
    icon: Code2,
  },
  {
    label: "Resume",
    value: "View PDF",
    href: siteConfig.resume,
    icon: FileText,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      label="06 — Contact"
      title="Let's build something"
      description="Open to software engineering, backend, full stack, and AI engineering roles."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-2xl"
      >
        <motion.p variants={staggerItem} className="mb-10 text-lg text-muted">
          If something here resonated, I would like to hear from you. Whether it is
          a role, a collaboration, or just a question about one of the projects — reach out.
        </motion.p>

        <div className="mb-10 grid gap-3 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <motion.div key={link.label} variants={staggerItem}>
              <Link
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/30 px-5 py-4 transition-all duration-300 hover:border-frost/30 hover:bg-surface/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-frost/10 text-frost transition-colors group-hover:bg-frost/15">
                  <link.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted">{link.label}</p>
                  <p className="truncate text-sm font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted opacity-0 transition-all group-hover:opacity-100 group-hover:text-frost"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={staggerItem}>
          <Button size="lg" asChild>
            <Link href={`mailto:${siteConfig.email}`}>
              <Mail size={18} />
              Send an email
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
