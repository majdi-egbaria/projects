interface PageProps {
  children: React.ReactNode;
  centered?: boolean;
}

export default function Page({ children, centered }: PageProps) {
  if (centered) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col items-center justify-center gap-8">
        {children}
      </div>
    </div>
  );
}
