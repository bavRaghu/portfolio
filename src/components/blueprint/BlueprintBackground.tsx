"use client";

import { motion } from "framer-motion";
import { useScrollProgress, useActiveSection } from "@/hooks/useScrollProgress";
import { sectionIds } from "@/data/portfolio";
import { drawLine, nodeGlow } from "@/lib/motion";

interface BlueprintNode {
  id: string;
  x: number;
  y: number;
  label: string;
  section: string;
  icon: "api" | "db" | "queue" | "agent" | "service";
}

const nodes: BlueprintNode[] = [
  { id: "n1", x: 8, y: 12, label: "REST", section: "hero", icon: "api" },
  { id: "n2", x: 22, y: 8, label: "API Gateway", section: "about", icon: "service" },
  { id: "n3", x: 38, y: 15, label: "Auth", section: "skills", icon: "service" },
  { id: "n4", x: 55, y: 10, label: "PostgreSQL", section: "projects", icon: "db" },
  { id: "n5", x: 72, y: 18, label: "Queue", section: "projects", icon: "queue" },
  { id: "n7", x: 15, y: 35, label: "MongoDB", section: "skills", icon: "db" },
  { id: "n8", x: 32, y: 42, label: "Microservice", section: "projects", icon: "service" },
  { id: "n9", x: 50, y: 38, label: "Pipeline", section: "projects", icon: "queue" },
  { id: "n12", x: 25, y: 68, label: "Worker", section: "about", icon: "service" },
  { id: "n15", x: 82, y: 70, label: "Deploy", section: "contact", icon: "api" },
  { id: "n17", x: 40, y: 92, label: "CI/CD", section: "contact", icon: "queue" },
  { id: "n18", x: 75, y: 88, label: "Webhook", section: "contact", icon: "api" },
];

const connections: [string, string][] = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n3", "n4"],
  ["n4", "n5"],
  ["n2", "n7"],
  ["n7", "n8"],
  ["n8", "n9"],
  ["n4", "n9"],
  ["n7", "n12"],
  ["n12", "n15"],
  ["n15", "n17"],
  ["n17", "n18"],
];
function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function BlueprintBackground() {
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(sectionIds);
  const illumination = 0.14 + scrollProgress * 0.32;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden blueprint-grid"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: illumination }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {connections.map(([from, to], i) => {
            const a = getNode(from);
            const b = getNode(to);
            const isActive =
              a.section === activeSection || b.section === activeSection;
            return (
              <motion.line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className={isActive ? "connector-line-active" : "connector-line"}
                initial="hidden"
                animate="visible"
                variants={drawLine}
                transition={{ delay: i * 0.05, duration: 1 }}
                style={{
                  opacity: isActive ? 0.7 : 0.22 + scrollProgress * 0.28,
                }}
              />
            );
          })}

          {nodes.map((node, i) => {
            const isActive = node.section === activeSection;
            const isPast =
              sectionIds.indexOf(node.section as (typeof sectionIds)[number]) <=
              sectionIds.indexOf(activeSection as (typeof sectionIds)[number]);

            return (
              <g key={node.id}>
                <motion.rect
                  x={node.x - 2.5}
                  y={node.y - 1.8}
                  width={5}
                  height={3.6}
                  rx={0.4}
                  fill="none"
                  stroke={isActive ? "#88D9E6" : "#526760"}
                  strokeWidth={isActive ? 0.15 : 0.08}
                  initial="hidden"
                  animate="visible"
                  variants={nodeGlow}
                  transition={{ delay: i * 0.04 }}
                  style={{
                  opacity: isPast ? 0.55 + scrollProgress * 0.33 : 0.18,
                  }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={isActive ? 0.6 : 0.35}
                  fill={isActive ? "#C5FFFD" : "#526760"}
                  initial="hidden"
                  animate="visible"
                  variants={nodeGlow}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    opacity: isPast ? 0.78 : 0.22,
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        style={{ opacity: 0.75 }}
      />
    </div>
  );
}
