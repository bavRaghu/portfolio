"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";
import { aboutContent } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { Sparkles, Cpu, RefreshCcw } from "lucide-react";

const certificationCards = [
  {
    title: "Backend",
    subtitle: "HackerRank",
    items: ["Software Engineering", "REST APIs", "SQL", "Problem Solving"],
  },
  {
    title: "AI",
    subtitle: "DataCamp",
    items: ["LangChain", "LangGraph", "Generative AI", "Machine Learning"],
  },
];

const exploringCards = [
  {
    title: "AI Systems",
    items: ["LangChain", "LangGraph", "Agentic AI", "AI Workflows"],
  },
  {
    title: "Engineering",
    items: ["Multi-agent Systems", "Modern Backend Architecture", "APIs", "Automation"],
  },
];

function rotateCard(
  cardIndex: number,
  cardArray: { items: string[] }[],
  setIndex: Dispatch<SetStateAction<number[]>>
) {
  setIndex((prev) =>
    prev.map((value, i) =>
      i === cardIndex ? (value + 1) % cardArray[cardIndex].items.length : value
    )
  );
}

export function About() {
  const [certIndex, setCertIndex] = useState([0, 0]);
  const [exploreIndex, setExploreIndex] = useState([0, 0]);

  return (
    <Section
      id="about"
      label="01 — About"
      title="About"
      description="Not a biography. Just the way I approach problems."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-8"
      >
        <motion.div variants={staggerItem} className="glass rounded-3xl border border-border bg-surface/60 p-8">
          <p className="text-lg leading-relaxed text-muted">{aboutContent.paragraphs[0]}</p>
        </motion.div>

        <motion.div variants={staggerItem} className="glass rounded-3xl border border-border bg-surface/60 p-6">
          <div className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-frost/80">
            Stuff I'm Learning
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-3xl border border-border/40 bg-background/80 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Certifications</p>
                  <p className="text-xs text-granite">Flashcards by topic</p>
                </div>
                <Sparkles size={18} className="text-frost" />
              </div>

              <div className="grid gap-4">
                {certificationCards.map((card, index) => (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => rotateCard(index, certificationCards, setCertIndex)}
                    className="group flex h-32 flex-col justify-between rounded-3xl border border-border/40 bg-surface/30 p-4 text-left transition-colors duration-200 hover:border-frost/30 hover:bg-surface/40"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-granite">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <span className="rounded-full bg-frost/10 px-3 py-1 text-xs text-foreground">
                        {card.items[certIndex[index]]}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-frost/70">
                        <RefreshCcw size={14} />
                        Shuffle
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-3xl border border-border/40 bg-background/80 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Currently Exploring</p>
                  <p className="text-xs text-granite">Flashcards by track</p>
                </div>
                <Cpu size={18} className="text-frost" />
              </div>

              <div className="grid gap-4">
                {exploringCards.map((card, index) => (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => rotateCard(index, exploringCards, setExploreIndex)}
                    className="group flex h-32 flex-col justify-between rounded-3xl border border-border/40 bg-surface/30 p-4 text-left transition-colors duration-200 hover:border-frost/30 hover:bg-surface/40"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                    </div>
                    <div className="grid gap-2">
                      <span className="rounded-full bg-frost/10 px-3 py-1 text-xs text-foreground">
                        {card.items[exploreIndex[index]]}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-frost/70">
                        <RefreshCcw size={14} />
                        Shuffle
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
