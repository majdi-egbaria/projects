import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-divider bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold text-foreground">
          App
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-default-600 transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-default-600 transition-colors hover:text-foreground"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
