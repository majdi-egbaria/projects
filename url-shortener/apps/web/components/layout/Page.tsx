interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return <div className="mx-auto max-w-7xl px-6 py-8">{children}</div>;
}
