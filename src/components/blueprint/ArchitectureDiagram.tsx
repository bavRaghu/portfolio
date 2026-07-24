"use client";

import { motion } from "framer-motion";
import { drawLine, nodeGlow, fadeIn } from "@/lib/motion";

interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const archNodes: ArchNode[] = [
  { id: "client", label: "Client", x: 20, y: 20, w: 70, h: 36 },
  { id: "api", label: "API Layer", x: 120, y: 60, w: 80, h: 40 },
  { id: "auth", label: "Auth", x: 240, y: 30, w: 60, h: 32 },
  { id: "service", label: "Services", x: 240, y: 90, w: 80, h: 40 },
  { id: "db", label: "Database", x: 360, y: 60, w: 70, h: 36 },
  { id: "queue", label: "Queue", x: 360, y: 130, w: 60, h: 32 },
  { id: "worker", label: "Worker", x: 460, y: 130, w: 70, h: 36 },
  { id: "ai", label: "AI Agent", x: 460, y: 50, w: 70, h: 36 },
];

const archConnections: [string, string][] = [
  ["client", "api"],
  ["api", "auth"],
  ["api", "service"],
  ["service", "db"],
  ["service", "queue"],
  ["queue", "worker"],
  ["service", "ai"],
  ["ai", "db"],
];

function findNode(id: string) {
  return archNodes.find((n) => n.id === id)!;
}

export function ArchitectureDiagram() {
  return (
    <motion.div
      className="relative h-full w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <svg
        viewBox="0 0 560 200"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {archConnections.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          const x1 = a.x + a.w;
          const y1 = a.y + a.h / 2;
          const x2 = b.x;
          const y2 = b.y + b.h / 2;
          const midX = (x1 + x2) / 2;

          return (
            <motion.path
              key={`${from}-${to}`}
              d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
              fill="none"
              stroke="#88D9E6"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              variants={drawLine}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
            />
          );
        })}

        {archNodes.map((node, i) => (
          <motion.g
            key={node.id}
            variants={nodeGlow}
            transition={{ delay: 0.2 + i * 0.12 }}
          >
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx={8}
              fill="rgba(36, 50, 48, 0.8)"
              stroke="#88D9E6"
              strokeWidth="1"
              strokeOpacity="0.35"
              filter="url(#glow)"
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + node.h / 2 + 4}
              textAnchor="middle"
              fill="#C5FFFD"
              fontSize="11"
              fontFamily="var(--font-geist-mono), monospace"
              opacity="0.85"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Animated data flow dots */}
        {archConnections.slice(0, 4).map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.circle
              key={`dot-${from}-${to}`}
              r="3"
              fill="#D77078"
              initial={{ cx: a.x + a.w, cy: a.y + a.h / 2, opacity: 0 }}
              animate={{
                cx: [a.x + a.w, b.x],
                cy: [a.y + a.h / 2, b.y + b.h / 2],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                delay: 1.5 + i * 0.6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}
