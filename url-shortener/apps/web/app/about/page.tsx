import { Card, CardContent } from "@heroui/react";

import Page from "@/components/layout/Page";

export default function AboutPage() {
  return (
    <Page>
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">About This Project</h1>
        <p className="text-default-500 max-w-2xl">
          A modern URL shortener built with Next.js, TailwindCSS, and HeroUI.
          This project focuses on simplicity, performance, and clean UX.
        </p>
      </div>

      {/* Mission */}
      <Card className="w-full max-w-3xl">
        <CardContent className="space-y-3">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-default-500 leading-relaxed">
            The goal of this URL shortener is to make sharing links faster,
            cleaner, and more reliable. Long URLs are messy, hard to share, and
            often break in messages or emails.
          </p>
          <p className="text-default-500 leading-relaxed">
            We aim to solve this with a fast, minimal, and developer-friendly
            tool that can scale from personal use to production workloads.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="w-full max-w-3xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Features</h2>

          <ul className="space-y-2 text-default-500 list-disc pl-5">
            <li>Instant URL shortening (mocked UI for now)</li>
            <li>Copy-to-clipboard support</li>
            <li>Responsive modern UI</li>
            <li>Built with Next.js App Router</li>
            <li>HeroUI component system</li>
          </ul>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card className="w-full max-w-3xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Tech Stack</h2>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-default-100 px-3 py-1 text-sm">
              Next.js
            </span>
            <span className="rounded-full bg-default-100 px-3 py-1 text-sm">
              TailwindCSS
            </span>
            <span className="rounded-full bg-default-100 px-3 py-1 text-sm">
              HeroUI
            </span>
            <span className="rounded-full bg-default-100 px-3 py-1 text-sm">
              TypeScript
            </span>
          </div>
        </CardContent>
      </Card>
    </Page>
  );
}
