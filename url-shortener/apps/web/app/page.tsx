import { Button, Card, CardContent } from "@heroui/react";

import Page from "@/components/layout/Page";

export default function HomePage() {
  return (
    <Page>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Dashboard</h1>

          <p className="text-default-500">
            Clean app shell with fixed navbar/footer.
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="primary">Get Started</Button>

          <Button variant="tertiary">Learn More</Button>
        </div>

        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i}>
            <CardContent>Scrollable content item #{i + 1}</CardContent>
          </Card>
        ))}
      </div>
    </Page>
  );
}
