import Link from "next/link";

import { Button, Card, CardContent } from "@heroui/react";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-lg">
        <CardContent className="flex flex-col items-center gap-6 px-8 py-12 text-center">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold tracking-tight text-primary">
              404
            </h1>

            <h2 className="text-2xl font-semibold">Page not found</h2>

            <p className="text-default-500">
              The page you are looking for does not exist or may have been
              moved.
            </p>
          </div>

          <Link href="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
