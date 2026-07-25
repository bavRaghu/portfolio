"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";

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
    label: "Codolio",
    value: "bavya-raghu",
    href: "https://codolio.com/profile/ILTJWHrP",
    icon: ExternalLink,
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
      label="05 — Contact"
      title="Let's build together :)"
      description="Open to software engineering, full stack, data and AI engineering roles."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-3"
      >
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
              className="group flex h-full flex-col justify-between gap-4 rounded-3xl border border-border bg-surface/30 p-5 text-left transition duration-300 hover:border-frost/30 hover:bg-surface/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-frost/10 text-frost transition-colors group-hover:bg-frost/15">
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-granite">{link.label}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{link.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted opacity-60 transition-all group-hover:text-frost"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
