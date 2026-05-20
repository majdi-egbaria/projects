"use client";

import { useState } from "react";
import { Card, CardContent, Input, Button, Link, Label } from "@heroui/react";

import Page from "@/components/layout/Page";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleShorten() {
    setError(null);
    setShortUrl(null);

    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);

    // fake backend delay
    setTimeout(() => {
      const fakeId = Math.random().toString(36).substring(2, 8);
      setShortUrl(`https://sho.rt/${fakeId}`);
      setLoading(false);
    }, 800);
  }

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
  }

  return (
    <Page>
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">URL Shortener</h1>
        <p className="text-default-500">
          Paste a long URL and get a short link instantly
        </p>
      </div>

      {/* Form Card */}
      <Card className="w-full max-w-5xl">
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="text"
              placeholder="https://example.com/very/long/url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          {error && <p className="text-sm text-danger">{error}</p>}

          <Button
            variant="primary"
            onClick={handleShorten}
            // TODO: isLoading={loading}
            className="w-full"
          >
            Submit
          </Button>
        </CardContent>
      </Card>

      {/* Result */}
      {shortUrl && (
        <Card className="w-full max-w-5xl border border-success/30">
          <CardContent className="space-y-3">
            <p className="text-sm text-default-500">Your shortened URL:</p>

            <div className="flex items-center justify-between gap-4">
              <Link
                href={shortUrl}
                target="_blank"
                className="text-success font-medium"
              >
                {shortUrl}
              </Link>

              <Button
                size="sm"
                variant="secondary"
                onClick={() => copyToClipboard(shortUrl)}
              >
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </Page>
  );
}
