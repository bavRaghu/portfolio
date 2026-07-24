# Bavya Raghu — Portfolio

A premium developer portfolio built with the **Engineering Blueprint** visual metaphor — software architecture gradually coming to life as you scroll.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn UI** (Button, Badge)
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── blueprint/    # Background & architecture diagrams
│   ├── layout/       # Header, Footer, Section wrapper
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   └── ui/           # Shadcn UI components
├── data/             # Portfolio content (single source of truth)
├── hooks/            # Scroll progress & section tracking
└── lib/              # Utils & motion variants
```

## Deploy

Deploy to [Vercel](https://vercel.com) with zero config:

```bash
npx vercel
```
