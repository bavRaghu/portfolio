"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, FileText, FolderOpen, Mail } from "lucide-react";
import { heroContent, siteConfig } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/blueprint/ArchitectureDiagram";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center scroll-mt-24 pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.p
            variants={staggerItem}
            className="section-label mb-4"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="text-4xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button asChild>
              <Link href="#projects">
                <FolderOpen size={16} />
                Projects
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                Resume
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">
                <Mail size={16} />
                Contact
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="mt-16 hidden lg:flex items-center gap-2 text-sm text-muted"
          >
            <ArrowDown size={14} className="animate-pulse text-frost" />
            <span>Scroll to explore the blueprint</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="glass relative aspect-[4/3] overflow-hidden rounded-2xl p-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-frost/5 to-transparent" />
            <p className="relative mb-4 font-mono text-xs uppercase tracking-widest text-frost/60">
              System Architecture
            </p>
            <div className="relative h-[calc(100%-2rem)]">
              <ArchitectureDiagram />
            </div>
          </div>

          {/* Decorative connector extending downward */}
          <motion.div
            className="absolute -bottom-8 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-frost/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
