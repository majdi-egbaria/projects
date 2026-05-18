import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-content1">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 text-sm text-default-500">
        <p>© 2026 MyApp</p>

        <div className="flex items-center gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
