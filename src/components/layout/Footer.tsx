import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with intent.
        </p>
        <p className="font-mono text-xs tracking-wide text-granite">
          engineering blueprint · v1.0
        </p>
      </div>
    </footer>
  );
}
